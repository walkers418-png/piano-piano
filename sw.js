/* オフライン用。ページ本体はネットワーク優先、版番号つきの教材はキャッシュ優先。
   data/ の教材は別のキャッシュに置き、更新しても消さない（ファイル名に内容のハッシュがつくので古い物を読むことはない）。
   20261107163355 は deploy-web.sh が公開時に置き換える。手で書き換えない。 */
const VERSION='piano-piano-20261107163355';
const DATA='piano-piano-data';
const CORE=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/icon-180.png'].concat([1,2,3,4,5,6,7,8].map(n=>`js/k${n}.js?v=20261107163355`));
self.addEventListener('install',e=>{
  // HTTPキャッシュの古いファイルを掴まないように cache:'reload' で取り直す
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION&&k!==DATA).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  const fonts=u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com';
  if(u.origin!==location.origin&&!fonts)return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(VERSION).then(x=>x.put('index.html',c));}return r;}).catch(()=>caches.match('index.html')));
    return;
  }
  if(u.pathname.includes('/data/')){
    if(u.pathname.endsWith('manifest.json')){
      // 目次だけは常に最新を見に行き、圏外なら保存分を使う
      e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{if(r.ok){const c=r.clone();caches.open(DATA).then(x=>x.put(e.request,c));}return r;}).catch(()=>caches.match(e.request)));
    }else{
      e.respondWith(caches.open(DATA).then(c=>c.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone());return r;}))));
    }
    return;
  }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{
    if(r&&(r.ok||r.type==='opaque')){const c=r.clone();caches.open(VERSION).then(x=>x.put(e.request,c));}
    return r;
  })));
});
