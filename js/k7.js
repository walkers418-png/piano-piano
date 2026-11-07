/* 追加の文法単元（M2）。段階2〜6の穴を埋める。 */
window.KOKUGO.push(
  {
    id: "s2-movimento",
    g: 2,
    title: "行く・来る",
    goal: "andare と venire を前置詞と一緒に使える",
    talk: [
      ["Sara", "Dove vai stasera?", "今夜どこに行くの？"],
      [
        "Taro",
        "Vado al cinema con Paolo. Vieni anche tu?",
        "パオロと映画に行くよ。君も来る？",
      ],
      [
        "Sara",
        "Vengo volentieri. A che ora andate?",
        "喜んで行く。何時に行くの？",
      ],
      [
        "Taro",
        "Andiamo alle otto. Vieni da me prima?",
        "8時に行くよ。先にうちに来る？",
      ],
      [
        "Sara",
        "Sì, vengo a casa tua alle sette.",
        "うん、7時に君の家に行くね。",
      ],
    ],
    words: [
      ["andare a piedi", "歩いて行く"],
      ["andare in macchina", "車で行く"],
      ["in treno", "電車で"],
      ["a casa", "家に"],
      ["in centro", "町の中心に"],
      ["da me", "私の家に"],
      ["da Paolo", "パオロの家に"],
      ["dal medico", "医者のところへ"],
      ["volentieri", "喜んで"],
      ["uscire", "出かける"],
      ["tornare", "帰る"],
      ["partire", "出発する"],
    ],
    learn: [
      {
        h: "andare と venire の違い",
        body: "<b>andare</b> は話し手から離れて行くこと、<b>venire</b> は話し手や相手の方へ来ることです。日本語の「行く」とずれる点に注意します。相手のところへ向かうとき、相手の側に立って言うなら <b>vengo</b> が自然です（Vengo subito!）。Vado da te も言えます。",
        ex: [
          ["Vengo subito!", "すぐ行きます！"],
          ["Vado a Roma.", "ローマに行きます。"],
        ],
      },
      {
        h: "活用",
        body: "andare：<b>vado, vai, va, andiamo, andate, vanno</b><br>venire：<b>vengo, vieni, viene, veniamo, venite, vengono</b><br>noi と voi だけ原形に近い形です。",
        ex: [
          ["Andiamo!", "行きましょう！"],
          ["Vengono da Milano.", "彼らはミラノから来ます。"],
        ],
      },
      {
        h: "行き先の前置詞",
        body: "町は <b>a</b>、国や地方は <b>in</b>、人のところは <b>da</b>。乗り物は <b>in</b>（in treno, in macchina）で、歩くのは <b>a piedi</b> です。",
        ex: [
          ["Vado dal medico.", "医者に行きます。"],
          ["Vado a scuola a piedi.", "歩いて学校に行きます。"],
        ],
      },
    ],
    gram: [
      {
        q: "Domani io ___ a Roma. (andare)",
        o: ["vado", "vengo", "vai"],
        a: 0,
        why: "io の andare は vado。",
      },
      {
        q: "Loro ___ da Milano. (venire)",
        o: ["vengono", "vanno", "veniamo"],
        a: 0,
        why: "loro の venire は vengono。",
      },
      {
        q: "Vado ___ medico.",
        o: ["dal", "al mio", "in"],
        a: 0,
        why: "人のところへ行くときは da。da＋il＝dal。",
      },
      {
        q: "Vado a scuola ___ piedi.",
        o: ["a", "in", "con"],
        a: 0,
        why: "歩いて行くのは a piedi。",
      },
      {
        q: "Vado a Napoli ___ treno.",
        o: ["in", "a", "su"],
        a: 0,
        why: "乗り物は in。",
      },
      {
        q: "「すぐそちらに行きます」と電話で言うなら？",
        o: ["Vengo subito.", "Vai subito.", "Viene subito."],
        a: 0,
        why: "相手の側に立つ「そちらへ行く」は venire が自然です。",
        say: "Vengo subito.",
      },
      { t: "order", ja: "君も来る？", it: ["Vieni anche tu?"] },
      { t: "order", ja: "私たちは歩いて行きます。", it: ["Andiamo a piedi."] },
    ],
    read: {
      kind: "伝言",
      title: "Un messaggio per Marta",
      lines: [
        [
          "Ciao Marta, domani vado a Firenze in treno.",
          "マルタ、明日電車でフィレンツェに行くね。",
        ],
        ["Parto alle nove e arrivo alle undici.", "9時に出て11時に着きます。"],
        [
          "Vado da mia zia, che abita in centro.",
          "中心部に住むおばのところへ行きます。",
        ],
        ["Se vuoi, puoi venire anche tu.", "よければ君も来ていいよ。"],
        [
          "Torniamo insieme la sera, in macchina con mio zio.",
          "夜は、おじの車で一緒に帰りましょう。",
        ],
      ],
      gloss: [["se vuoi", "よければ"]],
      q: [
        {
          skill: "match",
          s: "行きは何で行く？",
          o: ["電車", "車", "歩き"],
          a: 0,
          why: "in treno.",
        },
        {
          skill: "match",
          s: "誰のところへ行く？",
          o: ["おば", "祖母", "友達"],
          a: 0,
          why: "da mia zia.",
        },
        {
          skill: "infer",
          s: "書き手がマルタに伝えたいことは？",
          o: [
            "一緒に来ないかという誘い",
            "行けなくなったという断り",
            "車を貸してほしいという頼み",
          ],
          a: 0,
          why: "puoi venire anche tu.",
        },
      ],
    },
    write: {
      task: "今度の週末の予定を、行き先と乗り物を入れて3つの文で書きましょう。",
      hints: [
        "Sabato vado a ...",
        "in treno / in macchina / a piedi",
        "Vieni anche tu?",
      ],
      model: "Sabato vado a Kyoto in treno. Vado da un amico. Vieni anche tu?",
      modelJa:
        "土曜日に電車で京都へ行きます。友達のところへ行きます。君も来る？",
      check: [
        "町には a を使った",
        "乗り物に in を使った",
        "vado と vengo を区別した",
      ],
    },
  },
  {
    id: "s2-modali",
    g: 2,
    title: "したい・できる・しなければ",
    goal: "volere, potere, dovere と動詞の原形で話せる",
    talk: [
      ["Ugo", "Vuoi uscire stasera?", "今夜出かけたい？"],
      [
        "Rin",
        "Voglio, ma non posso. Devo studiare.",
        "そうしたいけど、できないの。勉強しなきゃ。",
      ],
      ["Ugo", "Domani puoi?", "明日はできる？"],
      [
        "Rin",
        "Domani devo lavorare fino alle sei.",
        "明日は6時まで働かなきゃ。",
      ],
      ["Ugo", "Allora ceniamo alle sette?", "じゃあ7時に夕食にする？"],
      ["Rin", "Sì, volentieri!", "うん、喜んで！"],
    ],
    words: [
      ["volere", "〜したい"],
      ["potere", "〜できる"],
      ["dovere", "〜しなければならない"],
      ["sapere", "（技能として）できる"],
      ["nuotare", "泳ぐ"],
      ["guidare", "運転する"],
      ["fumare", "たばこを吸う"],
      ["entrare", "入る"],
      ["stasera", "今夜"],
      ["fino a", "〜まで"],
    ],
    learn: [
      {
        h: "3つの助動詞",
        body: "後ろに<b>動詞の原形</b>を置きます。<br>volere：voglio, vuoi, vuole, vogliamo, volete, vogliono<br>potere：posso, puoi, può, possiamo, potete, possono<br>dovere：devo, devi, deve, dobbiamo, dovete, devono",
        ex: [
          ["Voglio mangiare.", "食べたいです。"],
          ["Posso entrare?", "入ってもいいですか？"],
          ["Devo partire.", "出発しなければなりません。"],
        ],
      },
      {
        h: "potere と sapere の違い",
        body: "<b>potere</b> は状況として「できる」、<b>sapere</b> は技能として「できる」です。泳ぎ方を知っているなら <b>So nuotare.</b>、今日はプールが閉まっていて泳げないなら <b>Non posso nuotare.</b> です。",
        ex: [
          ["So guidare.", "運転できます（技能）。"],
          ["Oggi non posso guidare.", "今日は運転できません（事情）。"],
        ],
      },
      {
        h: "丁寧な形",
        body: "voglio は直接的なので、頼むときは <b>vorrei</b> を使います。「してもいいですか」は <b>Posso ...?</b>、してもらうときは <b>Può ...?</b>（Lei）です。",
        ex: [
          ["Vorrei un tè.", "お茶をお願いします。"],
          ["Può aiutarmi?", "手伝っていただけますか？"],
        ],
      },
    ],
    gram: [
      {
        q: "Io ___ studiare. (dovere)",
        o: ["devo", "devi", "deve"],
        a: 0,
        why: "io の dovere は devo。",
      },
      {
        q: "Tu ___ venire domani? (potere)",
        o: ["puoi", "posso", "può"],
        a: 0,
        why: "tu の potere は puoi。",
      },
      {
        q: "Noi ___ mangiare. (volere)",
        o: ["vogliamo", "volete", "vogliono"],
        a: 0,
        why: "noi の volere は vogliamo。",
      },
      {
        q: "「私は泳げます（泳ぎ方を知っている）」は？",
        o: ["So nuotare.", "Posso nuotare.", "Devo nuotare."],
        a: 0,
        why: "技能は sapere。",
        say: "So nuotare.",
      },
      {
        q: "Voglio ___ .（食べたい）",
        o: ["mangiare", "mangio", "mangiato"],
        a: 0,
        why: "助動詞の後は原形。",
      },
      {
        q: "店で丁寧に注文するなら？",
        o: ["Vorrei un caffè.", "Devo un caffè.", "Sapere un caffè."],
        a: 0,
        why: "vorrei が丁寧な言い方です。",
        say: "Vorrei un caffè.",
      },
      { t: "order", ja: "入ってもいいですか？", it: ["Posso entrare?"] },
      {
        t: "order",
        ja: "私は働かなければなりません。",
        it: ["Devo lavorare."],
      },
    ],
    read: {
      kind: "お知らせを読む",
      title: "Regole della piscina",
      lines: [
        ["In piscina non si può correre.", "プールでは走ってはいけません。"],
        [
          "Tutti devono fare la doccia prima di entrare.",
          "入る前に全員シャワーを浴びなければなりません。",
        ],
        [
          "I bambini sotto i dieci anni devono entrare con un adulto.",
          "10歳未満の子どもは大人と入らなければなりません。",
        ],
        [
          "Chi non sa nuotare può usare la piscina piccola.",
          "泳げない人は小さいプールを使えます。",
        ],
        [
          "Non si può mangiare vicino all'acqua.",
          "水の近くで食べてはいけません。",
        ],
      ],
      gloss: [
        ["non si può", "〜してはいけない"],
        ["doccia", "シャワー"],
        ["chi", "〜する人"],
      ],
      q: [
        {
          skill: "info",
          s: "8歳の子が1人で入れる？",
          o: ["入れない", "入れる", "書かれていない"],
          a: 0,
          why: "10歳未満は大人と一緒です。",
        },
        {
          skill: "info",
          s: "泳げない人が使えるのは？",
          o: ["小さいプール", "大きいプール", "どちらも使えない"],
          a: 0,
          why: "può usare la piscina piccola.",
        },
        {
          skill: "info",
          s: "してはいけないことは？",
          o: ["水の近くで食べる", "シャワーを浴びる", "泳ぐ"],
          a: 0,
          why: "Non si può mangiare vicino all'acqua.",
        },
      ],
    },
    write: {
      task: "今日したいこと、できないこと、しなければならないことを書きましょう。",
      hints: ["Voglio ...", "Non posso ...", "Devo ..."],
      model:
        "Voglio andare al mare, ma non posso. Devo lavorare fino alle sei.",
      modelJa:
        "海に行きたいけれど、行けません。6時まで働かなければなりません。",
      check: ["助動詞の後を原形にした", "potere と sapere を区別した"],
    },
  },
  {
    id: "s2-bello",
    g: 2,
    title: "bello と buono の変化",
    goal: "よく使う形容詞の特別な形と語順がわかる",
    talk: [
      ["Eva", "Che bel posto!", "なんていい場所！"],
      [
        "Ken",
        "Sì, e c'è un buon ristorante qui vicino.",
        "うん、この近くにいいレストランもあるよ。",
      ],
      [
        "Eva",
        "Hanno anche dei bei tavoli fuori.",
        "外にすてきなテーブルもあるのね。",
      ],
      ["Ken", "E una bella vista sul mare.", "それに美しい海の眺めも。"],
      ["Eva", "È un grande ristorante?", "大きなレストランなの？"],
      [
        "Ken",
        "No, è piccolo, ma è un buon posto.",
        "ううん、小さいけど、いい店だよ。",
      ],
    ],
    words: [
      ["bello", "美しい"],
      ["buono", "良い"],
      ["grande", "大きい"],
      ["vista", "眺め"],
      ["posto", "場所"],
      ["vero", "本当の"],
      ["povero", "かわいそうな・貧しい"],
      ["vecchio", "昔からの・年老いた"],
      ["nuovo", "新しい"],
      ["caro", "親愛なる・高い"],
    ],
    learn: [
      {
        h: "bello は定冠詞のように変わる",
        body: "名詞の前の bello は形が変わります。<b>bel</b> ragazzo、<b>bello</b> studente、<b>bell'</b>amico、<b>bella</b> casa、<b>bei</b> libri、<b>begli</b> occhi、<b>belle</b> case。名詞の後ろや述語なら、ふつうの形です：Il libro è bello.",
        ex: [
          ["Che bel libro!", "なんていい本！"],
          ["Ha begli occhi.", "美しい目をしています。"],
        ],
      },
      {
        h: "buono は不定冠詞のように変わる",
        body: "<b>buon</b> libro、<b>buono</b> studente、<b>buona</b> pizza、<b>buon'</b>amica。あいさつでもよく使います：Buon giorno, Buona sera, Buon viaggio!",
        ex: [
          ["Buon viaggio!", "良い旅を！"],
          ["È una buona pizza.", "おいしいピザです。"],
        ],
      },
      {
        h: "語順で意味が変わる形容詞",
        body: "前に置くと気持ちや評価、後ろに置くと具体的な性質を表すものがあります。<b>un vecchio amico</b>（昔からの友達）と <b>un amico vecchio</b>（年老いた友達）。<b>un povero uomo</b>（かわいそうな人）と <b>un uomo povero</b>（貧しい人）。読むときに注意します。",
        ex: [
          ["È un vecchio amico.", "昔からの友達です。"],
          ["È un uomo povero.", "貧しい人です。"],
        ],
      },
    ],
    gram: [
      {
        q: "Che ___ libro!",
        o: ["bel", "bello", "bella"],
        a: 0,
        why: "libro の前は bel。",
      },
      {
        q: "Ha ___ occhi blu.",
        o: ["begli", "bei", "belli"],
        a: 0,
        why: "母音で始まる複数の前は begli。",
      },
      {
        q: "Il libro è ___ .",
        o: ["bello", "bel", "bell'"],
        a: 0,
        why: "述語はふつうの形。",
      },
      {
        q: "___ viaggio!（良い旅を）",
        o: ["Buon", "Buono", "Buona"],
        a: 0,
        why: "viaggio の前は buon。",
      },
      {
        q: "un povero uomo の意味は？",
        o: ["かわいそうな人", "お金のない人", "年老いた人"],
        a: 0,
        why: "前に置くと気持ちを表します。",
      },
      {
        q: "「昔からの友達」はどれ？",
        o: ["un vecchio amico", "un amico vecchio", "una vecchia amici"],
        a: 0,
        why: "前に置きます。",
        say: "un vecchio amico",
      },
      { t: "order", ja: "なんていい場所！", it: ["Che bel posto!"] },
      { t: "order", ja: "おいしいピザです。", it: ["È una buona pizza."] },
    ],
    read: {
      kind: "手紙",
      title: "Saluti da Sorrento",
      lines: [
        [
          "Cara Eva, siamo in un bel paese vicino a Napoli.",
          "エヴァへ。ナポリの近くのすてきな町にいます。",
        ],
        [
          "L'albergo è piccolo, ma ha una bella vista.",
          "ホテルは小さいけれど、美しい眺めです。",
        ],
        [
          "Ieri ho incontrato un vecchio amico di scuola.",
          "昨日、学校時代の昔からの友達に会いました。",
        ],
        [
          "Abbiamo mangiato in un buon ristorante.",
          "良いレストランで食事をしました。",
        ],
        [
          "Il povero cameriere ha rotto tre bicchieri!",
          "かわいそうな給仕はコップを3つ割りました！",
        ],
        ["Buona settimana! Ken", "良い1週間を！ケン"],
      ],
      gloss: [
        ["saluti", "あいさつ"],
        ["ha rotto", "壊した・割った"],
      ],
      q: [
        {
          skill: "vocab",
          s: "un vecchio amico はどんな人？",
          o: ["昔からの友達", "年老いた友達", "新しい友達"],
          a: 0,
          why: "前に置いた vecchio は「昔からの」。",
        },
        {
          skill: "vocab",
          s: "Il povero cameriere の povero の意味は？",
          o: ["かわいそうな", "お金のない", "親切な"],
          a: 0,
          why: "前に置くと気持ちを表します。",
        },
        {
          skill: "main",
          s: "この手紙の目的は？",
          o: ["旅先の様子を伝える", "ホテルに苦情を言う", "予約を頼む"],
          a: 0,
          why: "旅先からのあいさつです。",
        },
      ],
    },
    write: {
      task: "好きな場所を、bello と buono を使って紹介しましょう。",
      hints: ["È un bel ...", "C'è un buon ...", "una bella vista"],
      model:
        "Kyoto è una bella città. C'è un buon ristorante vicino alla stazione, e dal ponte c'è una bella vista.",
      modelJa:
        "京都は美しい町です。駅の近くにいいレストランがあり、橋からは美しい眺めです。",
      check: ["bello の形を名詞に合わせた", "buono の形を名詞に合わせた"],
    },
  },
  {
    id: "s3-riflessivi",
    g: 3,
    title: "再帰動詞を使いこなす",
    goal: "再帰動詞の現在と過去で、気持ちや日常を言える",
    talk: [
      ["Lia", "Ti sei divertita alla festa?", "パーティーは楽しかった？"],
      [
        "Mei",
        "Sì, moltissimo! Mi sono divertita.",
        "うん、すごく！楽しかったよ。",
      ],
      ["Lia", "A che ora ti sei svegliata?", "何時に起きたの？"],
      ["Mei", "Tardi. Mi sono alzata alle undici.", "遅くに。11時に起きた。"],
      ["Lia", "Non ti senti stanca?", "疲れてない？"],
      ["Mei", "Un po'. Adesso mi riposo.", "少しね。これから休むよ。"],
    ],
    words: [
      ["svegliarsi", "目を覚ます"],
      ["alzarsi", "起き上がる"],
      ["lavarsi", "体を洗う"],
      ["vestirsi", "服を着る"],
      ["sentirsi", "気分が〜だ"],
      ["divertirsi", "楽しむ"],
      ["riposarsi", "休む"],
      ["arrabbiarsi", "怒る"],
      ["ricordarsi", "思い出す"],
      ["dimenticarsi", "忘れる"],
      ["sposarsi", "結婚する"],
      ["annoiarsi", "退屈する"],
    ],
    learn: [
      {
        h: "形の基本",
        body: "動詞の前に <b>mi, ti, si, ci, vi, si</b> を置きます。多くは「自分を〜する」という発想です。",
        ex: [
          ["Mi lavo le mani.", "手を洗います。"],
          ["Ci vediamo domani.", "明日会いましょう（お互いに）。"],
        ],
      },
      {
        h: "近過去は essere",
        body: "再帰動詞は必ず <b>essere</b> を使い、語尾を主語に合わせます。mi sono alzato（男性）、mi sono alzata（女性）、ci siamo alzati（複数）。",
        ex: [
          ["Mi sono svegliata tardi.", "遅く起きました（女性）。"],
          ["Ci siamo divertiti.", "楽しかったです。"],
        ],
      },
      {
        h: "助動詞と一緒に",
        body: "原形の語尾が変わります。<b>Devo alzarmi</b> または <b>Mi devo alzare</b>。どちらも「起きなければ」です。読むときは alzarmi の -mi に注目します。",
        ex: [
          ["Devo alzarmi presto.", "早く起きなければなりません。"],
          ["Vuoi riposarti?", "休みたい？"],
        ],
      },
      {
        h: "「お互いに」の用法",
        body: "複数の主語では「お互いに〜する」の意味にもなります。<b>Ci conosciamo</b>（私たちは知り合いだ）、<b>Si amano</b>（彼らは愛し合っている）。",
        ex: [
          ["Ci conosciamo da dieci anni.", "10年来の知り合いです。"],
          ["Si scrivono ogni giorno.", "彼らは毎日手紙を書き合っています。"],
        ],
      },
    ],
    gram: [
      {
        q: "Io ___ alzo alle sette.",
        o: ["mi", "ti", "si"],
        a: 0,
        why: "io には mi。",
      },
      {
        q: "Luca ___ è svegliato tardi.",
        o: ["si", "mi", "ci"],
        a: 0,
        why: "3人称には si。",
      },
      {
        q: "Anna si è ___ tardi. (alzarsi)",
        o: ["alzata", "alzato", "alzati"],
        a: 0,
        why: "主語が女性単数。",
      },
      {
        q: "Ci siamo ___ molto. (divertirsi; 男女混合)",
        o: ["divertiti", "divertito", "divertite"],
        a: 0,
        why: "男女混合の複数は -i。",
      },
      {
        q: "Devo ___ presto.（起きる）",
        o: ["alzarmi", "alzomi", "mi alzo"],
        a: 0,
        why: "原形の語尾に mi をつけます。",
      },
      {
        q: "Si amano. の意味は？",
        o: ["彼らは愛し合っている", "彼は自分を愛している", "彼女は犬が好きだ"],
        a: 0,
        why: "複数の si は「お互いに」にもなります。",
      },
      { t: "order", ja: "明日会いましょう。", it: ["Ci vediamo domani."] },
      {
        t: "order",
        ja: "10年来の知り合いです。",
        it: ["Ci conosciamo da dieci anni."],
      },
    ],
    read: {
      kind: "日記",
      title: "Un sabato strano",
      lines: [
        [
          "Sabato mi sono svegliato alle sei, ma non dovevo lavorare!",
          "土曜日に6時に起きましたが、仕事はなかったのです！",
        ],
        [
          "Mi sono arrabbiato con la sveglia e sono tornato a letto.",
          "目覚まし時計に腹を立て、ベッドに戻りました。",
        ],
        [
          "Alle dieci mi sono alzato e mi sono fatto un caffè.",
          "10時に起きて、コーヒーをいれました。",
        ],
        [
          "Poi mi sono ricordato: oggi è il compleanno di Lia!",
          "それから思い出しました。今日はリアの誕生日です！",
        ],
        [
          "Mi sono vestito in fretta e sono uscito a comprare dei fiori.",
          "急いで服を着て、花を買いに出かけました。",
        ],
        ["La sera ci siamo divertiti molto.", "夜はとても楽しみました。"],
      ],
      gloss: [
        ["sveglia", "目覚まし時計"],
        ["in fretta", "急いで"],
        ["mi sono fatto un caffè", "コーヒーをいれた"],
      ],
      q: [
        {
          skill: "order",
          s: "花を買いに行く直前にしたことは？",
          o: ["急いで服を着た", "コーヒーをいれた", "ベッドに戻った"],
          a: 0,
          why: "Mi sono vestito in fretta e sono uscito.",
        },
        {
          skill: "match",
          s: "この日は何の日？",
          o: ["リアの誕生日", "仕事の日", "筆者の結婚式"],
          a: 0,
          why: "il compleanno di Lia.",
        },
        {
          skill: "infer",
          s: "書き手の性別がわかる手がかりは？",
          o: [
            "svegliato, alzato の語尾 -o",
            "caffè という語",
            "sabato という語",
          ],
          a: 0,
          why: "essere の過去分詞は主語の性に合わせます。",
        },
      ],
    },
    write: {
      task: "昨日の朝から夜までを、再帰動詞を3つ以上使って書きましょう。",
      hints: [
        "Mi sono svegliato/a ...",
        "Mi sono vestito/a ...",
        "Mi sono divertito/a ...",
      ],
      model:
        "Ieri mi sono svegliato alle sette. Mi sono vestito e sono andato al lavoro. La sera mi sono riposato a casa.",
      modelJa:
        "昨日は7時に起きました。服を着て仕事に行きました。夜は家で休みました。",
      check: ["essere を使った", "語尾を自分の性に合わせた"],
    },
  },
  {
    id: "s3-dimostrativi",
    g: 3,
    title: "これ・あれ、量の言い方",
    goal: "questo, quello と molto, troppo, 部分の言い方を使える",
    talk: [
      ["Fruttivendolo", "Che cosa desidera?", "何にいたしましょう？"],
      [
        "Cliente",
        "Vorrei quelle mele e un po' di uva.",
        "あのりんごと、ぶどうを少しください。",
      ],
      [
        "Fruttivendolo",
        "Questa uva è molto dolce.",
        "このぶどうはとても甘いですよ。",
      ],
      [
        "Cliente",
        "Quanto costa? Non è troppo cara?",
        "いくらですか？高すぎませんか？",
      ],
      ["Fruttivendolo", "Tre euro al chilo.", "1キロ3ユーロです。"],
      ["Cliente", "Allora ne prendo due chili.", "では2キロください。"],
    ],
    words: [
      ["questo", "これ・この"],
      ["quello", "あれ・あの"],
      ["molto", "とても・たくさん"],
      ["poco", "少し"],
      ["troppo", "多すぎる"],
      ["abbastanza", "十分に"],
      ["chilo", "キログラム"],
      ["etto", "100グラム"],
      ["fetta", "切れ"],
      ["bottiglia", "びん"],
      ["pacco", "包み"],
      ["alcuni", "いくつかの"],
    ],
    learn: [
      {
        h: "questo と quello",
        body: "<b>questo</b> は近いもの。形は questo, questa, questi, queste。<br><b>quello</b> は遠いもの。名詞の前では bello と同じ変化です：<b>quel</b> libro、<b>quello</b> studente、<b>quell'</b>amico、<b>quella</b> casa、<b>quei</b> libri、<b>quegli</b> amici、<b>quelle</b> case。",
        ex: [
          ["Questa pizza è buona.", "このピザはおいしいです。"],
          ["Quel ragazzo è alto.", "あの男の子は背が高いです。"],
        ],
      },
      {
        h: "molto は2つの使い方",
        body: "<b>名詞の前</b>では形容詞で、語尾が変わります：molti amici、molta acqua。<br><b>形容詞や動詞と</b>使うと副詞で、変わりません：molto bello、Mangio molto。poco, troppo, tanto も同じです。",
        ex: [
          ["Ho molti amici.", "友達がたくさんいます。"],
          ["Lei è molto gentile.", "彼女はとても親切です。"],
        ],
      },
      {
        h: "「いくらかの」と数量",
        body: "<b>un po' di</b>（少しの）、<b>del, della, dei, delle</b>（いくらかの）、<b>alcuni, alcune</b>（いくつかの）、<b>qualche</b>＋単数（いくつかの）。qualche の後は複数の意味でも単数です。量は <b>un chilo di, un etto di, una fetta di, una bottiglia di</b>。",
        ex: [
          ["Vorrei un chilo di mele.", "りんごを1キロください。"],
          ["Ho qualche amico a Roma.", "ローマに友達が何人かいます。"],
        ],
      },
    ],
    gram: [
      {
        q: "___ libro è mio.（あの本）",
        o: ["Quel", "Quello", "Quella"],
        a: 0,
        why: "libro の前は quel。",
      },
      {
        q: "___ amici sono italiani.（あの友達たち）",
        o: ["Quegli", "Quei", "Quelli"],
        a: 0,
        why: "母音で始まる複数の前は quegli。",
      },
      {
        q: "Ho ___ amici. (たくさんの)",
        o: ["molti", "molto", "molte"],
        a: 0,
        why: "名詞の前は性数を合わせます。",
      },
      {
        q: "Lei è ___ gentile.（とても）",
        o: ["molto", "molta", "molti"],
        a: 0,
        why: "形容詞の前は変わりません。",
      },
      {
        q: "Ho qualche ___ a Roma.",
        o: ["amico", "amici", "amiche"],
        a: 0,
        why: "qualche の後は単数です。",
      },
      {
        q: "Vorrei un chilo ___ mele.",
        o: ["di", "a", "per"],
        a: 0,
        why: "量の後は di。",
      },
      {
        t: "order",
        ja: "このピザはおいしいです。",
        it: ["Questa pizza è buona."],
      },
      {
        t: "order",
        ja: "りんごを1キロください。",
        it: ["Vorrei un chilo di mele."],
      },
    ],
    read: {
      kind: "レシピの買い物リスト",
      title: "La spesa per la torta",
      lines: [
        [
          "Per questa torta servono pochi ingredienti.",
          "このケーキに必要な材料は少しです。",
        ],
        [
          "Compra due etti di farina e un etto di zucchero.",
          "小麦粉200グラムと砂糖100グラムを買ってください。",
        ],
        [
          "Servono anche tre uova e un po' di burro.",
          "卵3つと、バターも少し必要です。",
        ],
        [
          "Non mettere troppo zucchero: le mele sono già dolci.",
          "砂糖を入れすぎないでください。りんごはもう甘いです。",
        ],
        [
          "Scegli quelle mele rosse, non queste verdi.",
          "緑のこれではなく、あの赤いりんごを選びましょう。",
        ],
        ["Bastano quattro mele.", "りんごは4つで十分です。"],
      ],
      gloss: [
        ["ingredienti", "材料"],
        ["servono", "必要である"],
      ],
      q: [
        {
          skill: "info",
          s: "小麦粉はどのくらい買う？",
          o: ["200グラム", "100グラム", "1キロ"],
          a: 0,
          why: "due etti は200グラムです。",
        },
        {
          skill: "info",
          s: "選ぶりんごは？",
          o: ["赤いりんご", "緑のりんご", "どちらでもよい"],
          a: 0,
          why: "quelle mele rosse, non queste verdi.",
        },
        {
          skill: "match",
          s: "砂糖を入れすぎない理由は？",
          o: ["りんごが甘いから", "体に悪いから", "高いから"],
          a: 0,
          why: "le mele sono già dolci.",
        },
      ],
    },
    write: {
      task: "市場で買う物を、量をつけて3つ書きましょう。",
      hints: [
        "Vorrei un chilo di ...",
        "un etto di ...",
        "una bottiglia di ...",
        "quelle / questi",
      ],
      model:
        "Vorrei un chilo di quelle mele, due etti di formaggio e una bottiglia di olio.",
      modelJa: "あのりんごを1キロ、チーズを200グラム、油を1びんください。",
      check: ["量の後に di を使った", "quello の形を名詞に合わせた"],
    },
  },
  {
    id: "s4-trapassato",
    g: 4,
    title: "もっと前の過去（大過去）",
    goal: "大過去で「その前にすでに〜していた」が読める",
    talk: [
      ["Pia", "Sei arrivato alla stazione in tempo?", "駅には間に合ったの？"],
      [
        "Sho",
        "No. Quando sono arrivato, il treno era già partito.",
        "ううん。着いたとき、電車はもう出ていた。",
      ],
      ["Pia", "Avevi controllato l'orario?", "時刻表を確かめていたの？"],
      [
        "Sho",
        "Sì, ma avevo guardato l'orario vecchio!",
        "うん、でも古い時刻表を見ていたんだ！",
      ],
      ["Pia", "Che sfortuna!", "ついてないね！"],
    ],
    words: [
      ["già", "すでに"],
      ["non ancora", "まだ〜ない"],
      ["orario", "時刻表"],
      ["prima di", "〜の前に"],
      ["dopo che", "〜した後で"],
      ["perché", "なぜなら"],
      ["in tempo", "間に合って"],
      ["dimenticare", "忘れる"],
      ["promettere", "約束する"],
      ["accorgersi", "気づく"],
    ],
    learn: [
      {
        h: "大過去の作り方",
        body: "<b>avere / essere の半過去 ＋ 過去分詞</b> です。<br>avevo mangiato（食べていた）、ero arrivato（着いていた）。助動詞の選び方と語尾の合わせ方は近過去と同じです。",
        ex: [
          ["Avevo già mangiato.", "もう食べていました。"],
          ["Ero già uscita.", "もう出かけていました（女性）。"],
        ],
      },
      {
        h: "いつ使うか",
        body: "過去のある時点より<b>さらに前</b>のことに使います。物語では、出来事の背景を説明するときによく出ます。日本語では区別しないので、読むときに時間の順序を組み立て直します。",
        ex: [
          [
            "Quando sono arrivato, il film era cominciato.",
            "着いたとき、映画は始まっていました。",
          ],
          [
            "Ho perso le chiavi che avevo comprato.",
            "買っておいた鍵をなくしました。",
          ],
        ],
      },
      {
        h: "順序を読み取る",
        body: "「着いた」より「出発していた」が先です。<b>当時の出来事は近過去、それより前は大過去</b>。perché の後によく現れ、理由を過去にさかのぼって説明します。",
        ex: [
          [
            "Ero stanco perché avevo lavorato molto.",
            "たくさん働いたので疲れていました。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "Quando sono arrivato, il treno ___ già partito.",
        o: ["era", "è", "sarà"],
        a: 0,
        why: "着く前に出発しているので大過去。partire は essere。",
      },
      {
        q: "Ero stanco perché ___ lavorato molto.",
        o: ["avevo", "ho avuto", "ero"],
        a: 0,
        why: "疲れの原因はさらに前。lavorare は avere。",
      },
      {
        q: "Anna era felice: ___ vinto il premio.",
        o: ["aveva", "era", "ha avuto"],
        a: 0,
        why: "vincere は avere。",
      },
      {
        q: "Non avevo fame: ___ già mangiato.",
        o: ["avevo", "ero", "sono"],
        a: 0,
        why: "mangiare は avere。",
      },
      {
        q: "Il film era cominciato quando siamo arrivati. で先に起きたのは？",
        o: ["映画が始まった", "私たちが着いた", "同時"],
        a: 0,
        why: "大過去の方が先です。",
      },
      {
        q: "Lucia ___ uscita prima di cena.（すでに出ていた）",
        o: ["era", "aveva", "è stata"],
        a: 0,
        why: "uscire は essere。",
      },
      { t: "order", ja: "もう食べていました。", it: ["Avevo già mangiato."] },
      {
        t: "order",
        ja: "着いたとき、電車はもう出ていました。",
        it: ["Quando sono arrivato, il treno era già partito."],
      },
    ],
    read: {
      kind: "小さな話",
      title: "Le chiavi nel frigorifero",
      lines: [
        [
          "Quella mattina Pia non trovava le chiavi.",
          "その朝、ピアは鍵が見つかりませんでした。",
        ],
        [
          "Le aveva cercate dappertutto: nella borsa, sul tavolo, sotto il letto.",
          "あちこち探しました。かばんの中、テーブルの上、ベッドの下。",
        ],
        [
          "Alla fine ha aperto il frigorifero per prendere il latte.",
          "とうとう、牛乳を取ろうと冷蔵庫を開けました。",
        ],
        [
          "Le chiavi erano lì, accanto al burro!",
          "鍵はそこ、バターの隣にありました！",
        ],
        [
          "La sera prima era tornata a casa molto stanca.",
          "前の晩、とても疲れて帰宅したのです。",
        ],
        [
          "Aveva messo la spesa nel frigorifero, e anche le chiavi.",
          "買い物を冷蔵庫に入れて、鍵も入れてしまったのでした。",
        ],
      ],
      gloss: [
        ["dappertutto", "あちこち"],
        ["frigorifero", "冷蔵庫"],
        ["la sera prima", "前の晩"],
      ],
      q: [
        {
          skill: "order",
          s: "いちばん早く起きた出来事は？",
          o: ["鍵を冷蔵庫に入れた", "冷蔵庫を開けた", "鍵を探した"],
          a: 0,
          why: "大過去 aveva messo が最も古い出来事です。",
        },
        {
          skill: "match",
          s: "鍵があった場所は？",
          o: ["冷蔵庫の中", "ベッドの下", "かばんの中"],
          a: 0,
          why: "accanto al burro.",
        },
        {
          skill: "infer",
          s: "鍵を冷蔵庫に入れてしまった理由は？",
          o: ["疲れていたから", "隠したかったから", "冷やしたかったから"],
          a: 0,
          why: "era tornata a casa molto stanca.",
        },
      ],
    },
    write: {
      task: "「着いたら、もう〜していた」という出来事を書きましょう。",
      hints: [
        "Quando sono arrivato/a, ...",
        "... era già ...",
        "perché avevo ...",
      ],
      model:
        "Quando sono arrivato al cinema, il film era già cominciato, perché avevo perso l'autobus.",
      modelJa:
        "映画館に着いたとき、映画はもう始まっていました。バスに乗り遅れていたからです。",
      check: ["先の出来事を大過去にした", "助動詞を選び分けた"],
    },
  },
  {
    id: "s4-gerundio",
    g: 4,
    title: "〜している（ジェルンディオ）",
    goal: "stare＋ジェルンディオと、文中のジェルンディオを理解できる",
    talk: [
      ["Mamma", "Che cosa stai facendo?", "何してるの？"],
      ["Yui", "Sto studiando italiano.", "イタリア語を勉強してるの。"],
      ["Mamma", "Ascoltando la musica?", "音楽を聴きながら？"],
      [
        "Yui",
        "Sì, studio meglio ascoltando la musica.",
        "うん、音楽を聴きながらの方がはかどるの。",
      ],
      [
        "Mamma",
        "Papà sta preparando la cena. Lo aiuti?",
        "お父さんが夕食を作ってるよ。手伝う？",
      ],
      ["Yui", "Sto arrivando!", "今行くよ！"],
    ],
    words: [
      ["facendo", "している（fare）"],
      ["dicendo", "言いながら（dire）"],
      ["bevendo", "飲みながら（bere）"],
      ["camminando", "歩きながら"],
      ["sbagliando", "間違えることで"],
      ["stare per", "まさに〜するところ"],
      ["mentre", "〜の間に"],
      ["intanto", "その間に"],
      ["adesso", "今"],
      ["in questo momento", "今この時"],
    ],
    learn: [
      {
        h: "作り方",
        body: "-are → <b>-ando</b>（parlando）、-ere / -ire → <b>-endo</b>（leggendo, dormendo）。不規則は fare → <b>facendo</b>、dire → <b>dicendo</b>、bere → <b>bevendo</b>。主語で形は変わりません。",
        ex: [
          ["parlando", "話しながら"],
          ["leggendo", "読みながら"],
        ],
      },
      {
        h: "stare ＋ ジェルンディオ",
        body: "「今まさに〜している」を強調します。ふつうの現在形でも「〜している」を表せるので、<b>まさに今</b>を強調したいときに使います（stavo mangiando のように過去にも使えます）。<b>stare per ＋ 原形</b>は「まさに〜するところ」です。",
        ex: [
          ["Sto mangiando.", "今食べています。"],
          ["Sto per uscire.", "ちょうど出かけるところです。"],
        ],
      },
      {
        h: "「〜しながら」「〜することで」",
        body: "文中のジェルンディオは、同時（〜しながら）、手段（〜することで）、理由（〜なので）を表します。ことわざも：<b>Sbagliando s'impara.</b>（間違えることで学ぶ）。",
        ex: [
          ["Camminando, ho visto un gatto.", "歩いていて、猫を見ました。"],
          ["Sbagliando s'impara.", "失敗から学ぶ。"],
        ],
      },
    ],
    gram: [
      {
        q: "Che cosa stai ___ ? (fare)",
        o: ["facendo", "fando", "fatto"],
        a: 0,
        why: "fare は facendo。",
      },
      {
        q: "Sto ___ un libro. (leggere)",
        o: ["leggendo", "leggando", "letto"],
        a: 0,
        why: "-ere は -endo。",
      },
      {
        q: "Noi ___ mangiando.",
        o: ["stiamo", "stanno", "siamo"],
        a: 0,
        why: "noi の stare は stiamo。",
      },
      {
        q: "Sto ___ uscire.（出かけるところ）",
        o: ["per", "a", "di"],
        a: 0,
        why: "stare per＋原形。",
      },
      {
        q: "Sbagliando s'impara. の意味は？",
        o: ["失敗から学ぶ", "間違えてはいけない", "学ぶと失敗する"],
        a: 0,
        why: "sbagliando は「間違えることで」。",
      },
      {
        q: "「彼は歌いながら歩く」はどれ？",
        o: ["Cammina cantando.", "Cammina cantare.", "Cammina cantato."],
        a: 0,
        why: "同時はジェルンディオ。",
        say: "Cammina cantando.",
      },
      { t: "order", ja: "今食べています。", it: ["Sto mangiando."] },
      {
        t: "order",
        ja: "ちょうど出かけるところです。",
        it: ["Sto per uscire."],
      },
    ],
    read: {
      kind: "物語の場面",
      title: "Un pomeriggio al parco",
      lines: [
        [
          "Nel parco tutti stanno facendo qualcosa.",
          "公園ではみんなが何かをしています。",
        ],
        [
          "Un vecchio legge il giornale bevendo un caffè.",
          "老人がコーヒーを飲みながら新聞を読んでいます。",
        ],
        [
          "Due bambini corrono gridando dietro una palla.",
          "2人の子どもが叫びながらボールを追って走っています。",
        ],
        [
          "Una ragazza sta dormendo su una panchina.",
          "女の子がベンチで眠っています。",
        ],
        [
          "All'improvviso il cielo diventa nero: sta per piovere.",
          "突然空が暗くなります。雨が降りそうです。",
        ],
        ["Correndo, tutti tornano a casa.", "みんな走って家に帰ります。"],
      ],
      gloss: [
        ["panchina", "ベンチ"],
        ["gridando", "叫びながら"],
      ],
      q: [
        {
          skill: "match",
          s: "老人がしていることは？",
          o: ["コーヒーを飲みながら新聞を読む", "ボールを追う", "眠っている"],
          a: 0,
          why: "legge il giornale bevendo un caffè.",
        },
        {
          skill: "vocab",
          s: "sta per piovere の意味は？",
          o: ["雨が降りそう", "雨が降っている", "雨がやんだ"],
          a: 0,
          why: "stare per は「〜するところ」。",
        },
        {
          skill: "infer",
          s: "みんなが走って帰った理由は？",
          o: ["雨が降りそうだから", "ボールが飛んだから", "夜になったから"],
          a: 0,
          why: "直前の文からわかります。",
        },
      ],
    },
    write: {
      task: "今見えている人たちが何をしているか、3つの文で書きましょう。",
      hints: ["Sta ...ando / ...endo", "... mentre ...", "Sta per ..."],
      model:
        "Mia madre sta cucinando. Mio padre legge il giornale bevendo un tè. Il gatto sta per saltare sul tavolo.",
      modelJa:
        "母は料理をしています。父はお茶を飲みながら新聞を読んでいます。猫はテーブルに飛び乗るところです。",
      check: ["-ando と -endo を区別した", "stare の形を主語に合わせた"],
    },
  },
  {
    id: "s4-combinati",
    g: 4,
    title: "「彼にそれを」（複合代名詞）",
    goal: "me lo, te la, glielo などを読んで理解できる",
    talk: [
      ["Tea", "Hai dato il libro a Marco?", "マルコに本を渡した？"],
      ["Riku", "Sì, gliel'ho dato ieri.", "うん、昨日渡したよ。"],
      ["Tea", "E le chiavi? Me le dai?", "それで鍵は？私にくれる？"],
      ["Riku", "Te le do subito.", "すぐ渡すよ。"],
      [
        "Tea",
        "Grazie. Ti ha detto la verità?",
        "ありがとう。彼は本当のことを言った？",
      ],
      ["Riku", "Sì, me l'ha detta.", "うん、言ってくれたよ。"],
    ],
    words: [
      ["me lo", "私にそれを"],
      ["te lo", "君にそれを"],
      ["glielo", "彼・彼女にそれを"],
      ["ce lo", "私たちにそれを"],
      ["ve lo", "君たちにそれを"],
      ["gliela", "彼・彼女にそれを（女性）"],
      ["prestare", "貸す"],
      ["restituire", "返す"],
      ["spedire", "送る"],
      ["consegnare", "渡す"],
    ],
    learn: [
      {
        h: "形の変化",
        body: "「〜に」が「それを」の前に来ると、mi→<b>me</b>、ti→<b>te</b>、ci→<b>ce</b>、vi→<b>ve</b>、si→<b>se</b>。gli と le は <b>glie-</b> となり1語につながります：<b>glielo, gliela, glieli, gliele, gliene</b>。",
        ex: [
          ["Me lo dici?", "それを私に言ってくれる？"],
          ["Glielo dico.", "彼にそれを言います。"],
        ],
      },
      {
        h: "近過去では語尾が合う",
        body: "lo, la, li, le が前に来ると、過去分詞が合います：<b>me l'ha data</b>（彼は私にそれ〔女性名詞〕をくれた）、<b>te li ho portati</b>（君にそれらを持ってきた）。",
        ex: [
          ["Me l'ha detta.", "私にそれを言いました（la verità）。"],
          ["Gliel'ho dato.", "彼にそれを渡しました。"],
        ],
      },
      {
        h: "読むときのこつ",
        body: "まず動詞を見つけ、次に「誰に」「何を」を前の文から探します。自分で話すときは、名詞をそのまま繰り返しても通じます。この単元は<b>読んでわかれば十分</b>です。",
        ex: [["Te lo prometto.", "君にそれを約束します。"]],
      },
    ],
    gram: [
      {
        q: "Il libro? ___ do domani.（君にそれを）",
        o: ["Te lo", "Ti lo", "Lo te"],
        a: 0,
        why: "ti は te に変わり、lo の前に置きます。",
      },
      {
        q: "La verità? ___ dico.（彼にそれを）",
        o: ["Gliela", "Glielo", "Le la"],
        a: 0,
        why: "la verità は女性なので gliela。",
      },
      {
        q: "Le chiavi? Me ___ dai?",
        o: ["le", "li", "la"],
        a: 0,
        why: "chiavi は女性複数。",
      },
      {
        q: "Me l'ha ___ . (dare; la pizza)",
        o: ["data", "dato", "dati"],
        a: 0,
        why: "la pizza に合わせて data。",
      },
      {
        q: "Glielo dico. の「それ」は何を指す語の形？",
        o: ["男性単数の語", "女性単数の語", "女性複数の語"],
        a: 0,
        why: "-lo は男性単数を受けます。",
      },
      {
        q: "Te lo prometto. の意味は？",
        o: ["君にそれを約束する", "私にそれを約束して", "彼に約束する"],
        a: 0,
        why: "te＝君に、lo＝それを。",
        say: "Te lo prometto.",
      },
      { t: "order", ja: "それを私に言ってくれる？", it: ["Me lo dici?"] },
      { t: "order", ja: "彼にそれを渡しました。", it: ["Gliel'ho dato."] },
    ],
    read: {
      kind: "小さな話",
      title: "Il regalo di Nonno Leo",
      lines: [
        [
          "Nonno Leo aveva un vecchio orologio.",
          "レオおじいさんは古い時計を持っていました。",
        ],
        [
          "Glielo aveva regalato suo padre.",
          "それは父親が彼に贈ったものでした。",
        ],
        [
          "Un giorno mi ha chiamato e mi ha detto: «Te lo do.»",
          "ある日私を呼んで言いました。「これを君にあげよう」",
        ],
        [
          "«Perché me lo dai, nonno?»",
          "「どうして僕にくれるの、おじいちゃん？」",
        ],
        [
          "«Perché un giorno tu lo darai a tuo figlio.»",
          "「いつか君が息子に渡すからだよ」",
        ],
        [
          "Oggi quell'orologio è qui. Non cammina più, ma non lo vendo.",
          "今その時計はここにあります。もう動きませんが、売りません。",
        ],
      ],
      gloss: [
        ["cammina", "（時計が）動く"],
        ["darai", "渡すだろう"],
      ],
      q: [
        {
          skill: "ref",
          s: "Glielo aveva regalato suo padre. の glielo は？",
          o: ["彼にその時計を", "私にその本を", "彼女にその手紙を"],
          a: 0,
          why: "gli＝レオおじいさんに、lo＝時計を。",
        },
        {
          skill: "ref",
          s: "Te lo do. の「君」は誰？",
          o: ["語り手", "レオおじいさん", "レオの父"],
          a: 0,
          why: "おじいさんが語り手に話しています。",
        },
        {
          skill: "main",
          s: "この話が伝えているのは？",
          o: ["物に込められた家族のつながり", "時計の修理方法", "売買の大切さ"],
          a: 0,
          why: "父から子へ受け継ぐ話です。",
        },
      ],
    },
    write: {
      task: "誰かに物を貸した話を、代名詞を使わずに書き、次に lo / la を使って書き直しましょう。",
      hints: ["Ho prestato il libro a Marco.", "Gliel'ho prestato."],
      model:
        "Ho prestato il libro a Marco. Gliel'ho prestato ieri. Me lo restituisce domani.",
      modelJa: "マルコに本を貸しました。昨日貸しました。明日返してくれます。",
      check: ["gli + lo を glielo にした", "語尾を「それ」に合わせた"],
    },
  },
  {
    id: "s5-si",
    g: 5,
    title: "人は〜する（si の用法）",
    goal: "非人称の si と受け身の si を読んで使える",
    talk: [
      [
        "Ana",
        "Come si dice «arigatō» in italiano?",
        "「ありがとう」はイタリア語で何と言うの？",
      ],
      ["Dan", "Si dice «grazie».", "「グラッツィエ」と言うよ。"],
      ["Ana", "Qui si mangia bene?", "ここはおいしい？"],
      ["Dan", "Sì, e si spende poco.", "うん、それに安く済むよ。"],
      ["Ana", "Si può pagare con la carta?", "カードで払える？"],
      ["Dan", "No, si paga solo in contanti.", "ううん、現金だけだよ。"],
    ],
    words: [
      ["si dice", "〜と言う"],
      ["si può", "〜できる"],
      ["non si può", "〜してはいけない"],
      ["si deve", "〜しなければならない"],
      ["si vende", "売られている"],
      ["affittasi", "貸します（看板）"],
      ["vendesi", "売ります（看板）"],
      ["in contanti", "現金で"],
      ["vietato", "禁止された"],
      ["spendere", "お金を使う"],
    ],
    learn: [
      {
        h: "「人は〜する」",
        body: "<b>si ＋ 3人称単数</b>で、誰と言わずに一般的なことを述べます。日本語の主語なしの文に近く、とてもよく使います。",
        ex: [
          ["In Italia si mangia tardi.", "イタリアでは遅く食事をします。"],
          ["Si vive bene qui.", "ここは暮らしやすいです。"],
        ],
      },
      {
        h: "受け身の si",
        body: "<b>si ＋ 動詞 ＋ 名詞</b>で「〜が〜される」。名詞が複数なら動詞も複数です。看板やレシピによく出ます。",
        ex: [
          ["Si vende la casa.", "家が売られています。"],
          ["Si vendono case.", "家が売られています（複数）。"],
        ],
      },
      {
        h: "看板の形",
        body: "動詞に si がつく古い形が残っています：<b>vendesi</b>（売ります）、<b>affittasi</b>（貸します）。レシピでは <b>si taglia, si mette</b>（切る、入れる）のように書きます。",
        ex: [
          ["Non si può fumare.", "禁煙です。"],
          ["Si taglia la cipolla.", "タマネギを切ります。"],
        ],
      },
    ],
    gram: [
      {
        q: "Come si ___ «grazie» in giapponese? (dire)",
        o: ["dice", "dicono", "dici"],
        a: 0,
        why: "si＋3人称単数。",
      },
      {
        q: "In Italia si ___ tardi. (mangiare)",
        o: ["mangia", "mangiano il", "mangi"],
        a: 0,
        why: "目的語のない文は単数。",
      },
      {
        q: "Qui si ___ libri usati. (vendere)",
        o: ["vendono", "vende", "vendo"],
        a: 0,
        why: "libri が複数なので動詞も複数。",
      },
      {
        q: "Non si ___ entrare.",
        o: ["può", "possono", "posso"],
        a: 0,
        why: "原形が続くときは単数。",
      },
      {
        q: "看板の Affittasi の意味は？",
        o: ["貸します", "売ります", "閉店"],
        a: 0,
        why: "affittare は「貸す」。",
        say: "Affittasi",
      },
      {
        q: "Si taglia la cipolla. が使われそうな文章は？",
        o: ["レシピ", "天気予報", "手紙の書き出し"],
        a: 0,
        why: "手順を一般的に述べています。",
      },
      {
        t: "order",
        ja: "イタリア語で何と言いますか？",
        it: ["Come si dice in italiano?"],
      },
      { t: "order", ja: "禁煙です。", it: ["Non si può fumare."] },
    ],
    read: {
      kind: "説明文",
      title: "A tavola in Italia",
      lines: [
        [
          "In Italia si pranza di solito verso l'una e si cena dopo le otto.",
          "イタリアでは、ふつう1時ごろ昼食、8時以降に夕食をとります。",
        ],
        [
          "Il pranzo tradizionale ha più piatti.",
          "伝統的な昼食には複数の料理があります。",
        ],
        [
          "Prima si mangia la pasta, poi la carne o il pesce con la verdura.",
          "まずパスタを、次に肉か魚と野菜を食べます。",
        ],
        [
          "Il caffè si beve alla fine, ma il cappuccino si prende solo la mattina.",
          "コーヒーは最後に飲みますが、カプチーノは朝だけです。",
        ],
        [
          "Oggi però molti non hanno tempo e mangiano solo un panino.",
          "ただ今では、時間がなくパニーニだけで済ませる人も多いです。",
        ],
      ],
      gloss: [
        ["verso", "〜ごろ"],
        ["tradizionale", "伝統的な"],
        ["verdura", "野菜"],
      ],
      q: [
        {
          skill: "order",
          s: "伝統的な順序は？",
          o: [
            "パスタ→肉や魚→コーヒー",
            "コーヒー→パスタ→肉や魚",
            "肉や魚→パスタ→カプチーノ",
          ],
          a: 0,
          why: "Prima ... poi ... alla fine.",
        },
        {
          skill: "fact",
          s: "最後の文（Oggi però ...）の働きは？",
          o: [
            "今は伝統と違う人も多いと補足している",
            "筆者の好みを述べている",
            "伝統を否定している",
          ],
          a: 0,
          why: "però が前の内容に修正を加えています。",
        },
        {
          skill: "vocab",
          s: "si cena dopo le otto の主語は？",
          o: ["一般の人々", "筆者", "子ども"],
          a: 0,
          why: "si は「人は」です。",
        },
      ],
    },
    write: {
      task: "日本の食事の習慣を、si を使って説明しましょう。",
      hints: ["In Giappone si mangia ...", "Si beve ...", "Non si ..."],
      model:
        "In Giappone si cena verso le sette. Si mangia spesso il riso e si beve il tè verde.",
      modelJa:
        "日本では7時ごろ夕食をとります。よくご飯を食べ、緑茶を飲みます。",
      check: ["si の後を3人称にした", "名詞が複数なら動詞も複数にした"],
    },
  },
  {
    id: "s5-passivo",
    g: 5,
    title: "受動態",
    goal: "説明文や歴史の文章の受動態を読める",
    talk: [
      [
        "Guida",
        "Questo ponte è stato costruito nel 1345.",
        "この橋は1345年に建てられました。",
      ],
      [
        "Turista",
        "Da chi è stato costruito?",
        "誰によって建てられたのですか？",
      ],
      ["Guida", "Non si sa con sicurezza.", "確かなことはわかっていません。"],
      ["Turista", "È ancora usato?", "今も使われていますか？"],
      [
        "Guida",
        "Sì, è attraversato ogni giorno da migliaia di persone.",
        "はい、毎日何千人もの人が渡っています。",
      ],
    ],
    words: [
      ["essere costruito", "建てられる"],
      ["essere scritto", "書かれる"],
      ["essere scoperto", "発見される"],
      ["essere usato", "使われる"],
      ["venire", "（受動態の助動詞として）〜される"],
      ["andare", "（受動態で）〜されるべき"],
      ["da", "〜によって"],
      ["secolo", "世紀"],
      ["romano", "ローマの"],
      ["migliaia", "何千もの"],
    ],
    learn: [
      {
        h: "作り方",
        body: "<b>essere ＋ 過去分詞</b>。語尾は主語に合わせます。「〜によって」は <b>da</b> です。時制は essere の時制で表します。",
        ex: [
          ["Il libro è letto da tutti.", "その本はみんなに読まれています。"],
          ["La pizza è stata mangiata.", "ピザは食べられました。"],
        ],
      },
      {
        h: "venire と andare",
        body: "単純時制（現在・半過去・未来など）では <b>venire</b> も助動詞になります（複合時制では使えません）：Il pane viene venduto（パンが売られる）。<b>andare ＋ 過去分詞</b>は「〜されるべき」です：Il vino va bevuto fresco（ワインは冷やして飲むべき）。",
        ex: [
          [
            "Questo piatto va mangiato caldo.",
            "この料理は温かいうちに食べるべきです。",
          ],
        ],
      },
      {
        h: "読むときのこつ",
        body: "教科書や説明文に多い形です。è stato＋過去分詞は「〜された」。「è stato costruito」のように essere が2回続くように見えても、近過去の受動です。誰がしたかが書かれないことも多く、重要なのは「何がどうされたか」です。",
        ex: [
          [
            "L'America è stata scoperta nel 1492.",
            "アメリカは1492年に発見されました（ヨーロッパの視点の表現）。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "Il ponte è stato ___ nel 1345.",
        o: ["costruito", "costruita", "costruire"],
        a: 0,
        why: "il ponte は男性単数。",
      },
      {
        q: "La casa è stata ___ . (vendere)",
        o: ["venduta", "venduto", "vende"],
        a: 0,
        why: "la casa は女性単数。",
      },
      {
        q: "Il libro è scritto ___ Dante.",
        o: ["da", "di", "a"],
        a: 0,
        why: "「〜によって」は da。",
      },
      {
        q: "Il pane ___ venduto al mercato.（受動態）",
        o: ["viene", "va a", "sta"],
        a: 0,
        why: "venire＋過去分詞で受動態。",
      },
      {
        q: "Questo vino va bevuto fresco. の意味は？",
        o: ["冷やして飲むべきだ", "冷たくなってしまった", "飲みに行く"],
        a: 0,
        why: "andare＋過去分詞は「〜されるべき」。",
      },
      {
        q: "「その手紙は書かれた」はどれ？",
        o: [
          "La lettera è stata scritta.",
          "La lettera ha scritto.",
          "La lettera è scrivendo.",
        ],
        a: 0,
        why: "essere＋過去分詞。",
        say: "La lettera è stata scritta.",
      },
      {
        t: "order",
        ja: "この橋は1345年に建てられました。",
        it: ["Questo ponte è stato costruito nel 1345."],
      },
      {
        t: "order",
        ja: "その本はみんなに読まれています。",
        it: ["Il libro è letto da tutti."],
      },
    ],
    read: {
      kind: "説明文（歴史）",
      title: "Il Colosseo",
      lines: [
        [
          "Il Colosseo è stato costruito a Roma nel primo secolo dopo Cristo.",
          "コロッセオは紀元1世紀にローマで建てられました。",
        ],
        [
          "I lavori furono iniziati dall'imperatore Vespasiano.",
          "工事は皇帝ウェスパシアヌスによって始められました。",
        ],
        [
          "Poteva essere riempito da circa cinquantamila spettatori.",
          "約5万人の観客を入れることができました。",
        ],
        [
          "Qui venivano organizzati i giochi dei gladiatori.",
          "ここでは剣闘士の競技が開かれていました。",
        ],
        [
          "Nel corso dei secoli è stato danneggiato da terremoti e usato come cava di pietre.",
          "何世紀もの間に、地震で傷み、石切り場としても使われました。",
        ],
        [
          "Oggi è visitato ogni anno da milioni di turisti.",
          "今では毎年何百万人もの観光客が訪れます。",
        ],
      ],
      gloss: [
        ["dopo Cristo", "紀元後"],
        ["furono iniziati", "始められた（遠過去）"],
        ["spettatori", "観客"],
        ["danneggiato", "傷んだ"],
        ["cava di pietre", "石切り場"],
      ],
      q: [
        {
          skill: "match",
          s: "工事を始めたのは？",
          o: ["皇帝ウェスパシアヌス", "観光客", "剣闘士"],
          a: 0,
          why: "dall'imperatore Vespasiano.",
        },
        {
          skill: "vocab",
          s: "venivano organizzati の意味は？",
          o: ["開かれていた", "来ていた", "組み立てる"],
          a: 0,
          why: "venire＋過去分詞の受動態です。",
        },
        {
          skill: "main",
          s: "文章全体の組み立ては？",
          o: [
            "建設から現在までを時間順に述べる",
            "観光の料金を説明する",
            "筆者の感想を述べる",
          ],
          a: 0,
          why: "時間の順に進みます。",
        },
      ],
    },
    write: {
      task: "日本の有名な建物を、受動態で紹介しましょう。",
      hints: [
        "... è stato costruito nel ...",
        "È visitato da ...",
        "Si trova a ...",
      ],
      model:
        "Il castello di Osaka è stato costruito nel 1583. Oggi è visitato da molti turisti.",
      modelJa: "大阪城は1583年に建てられました。今は多くの観光客が訪れます。",
      check: ["語尾を主語に合わせた", "「〜によって」に da を使った"],
    },
  },
  {
    id: "s5-se",
    g: 5,
    title: "もし〜なら（仮定の文）",
    goal: "se の3つの型を見分けられる",
    talk: [
      ["Max", "Se domani piove, che cosa facciamo?", "明日雨なら、どうする？"],
      ["Hana", "Se piove, andiamo al museo.", "雨なら美術館に行こう。"],
      [
        "Max",
        "E se avessi più tempo, dove andresti?",
        "もっと時間があったら、どこへ行く？",
      ],
      [
        "Hana",
        "Se avessi più tempo, andrei in Sicilia.",
        "時間があれば、シチリアに行くのに。",
      ],
      [
        "Max",
        "Anch'io. Se fossi ricco, comprerei una casa lì!",
        "僕も。お金持ちなら、そこに家を買うのに！",
      ],
    ],
    words: [
      ["se", "もし"],
      ["avessi", "（もし）持っていれば"],
      ["fossi", "（もし）〜であれば"],
      ["potessi", "（もし）できれば"],
      ["andrei", "行くのに"],
      ["farei", "するのに"],
      ["comprerei", "買うのに"],
      ["magari", "だといいのに"],
      ["altrimenti", "さもないと"],
      ["nel caso", "〜の場合"],
    ],
    learn: [
      {
        h: "型1：ありえること",
        body: "<b>se ＋ 現在形, 現在形 / 未来形</b>。実際に起こりそうなこと。これは自分でも使えるようにします。",
        ex: [
          ["Se piove, resto a casa.", "雨なら家にいます。"],
          ["Se studi, passerai l'esame.", "勉強すれば試験に受かるよ。"],
        ],
      },
      {
        h: "型2：現実と違う今",
        body: "<b>se ＋ 接続法半過去, 条件法</b>。今の現実と違う想像です。接続法半過去は avessi, fossi, potessi, andassi など。「se avessi」「se fossi」を丸ごと覚えましょう。",
        ex: [
          ["Se avessi tempo, viaggerei.", "時間があれば旅をするのに。"],
          ["Se fossi in te, non ci andrei.", "私が君なら行かないよ。"],
        ],
      },
      {
        h: "型3：現実と違う過去（読むだけ）",
        body: "<b>se ＋ 接続法大過去, 条件法過去</b>。過去の後悔を表します：Se avessi studiato, avrei passato l'esame.（勉強していたら受かったのに）。<b>読んでわかれば十分</b>です。",
        ex: [
          [
            "Se fossi partito prima, sarei arrivato in tempo.",
            "もっと早く出ていれば間に合ったのに。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "Se piove, ___ a casa. (restare; 現実にありえる)",
        o: ["resto", "resterei", "restassi"],
        a: 0,
        why: "型1は現在形。",
      },
      {
        q: "Se avessi tempo, ___ . (viaggiare)",
        o: ["viaggerei", "viaggio", "viaggiato"],
        a: 0,
        why: "型2の後半は条件法。",
      },
      {
        q: "Se ___ ricco, comprerei una casa. (essere, 今の現実と違う)",
        o: ["fossi", "sono", "sarò"],
        a: 0,
        why: "型2の前半は接続法半過去。",
      },
      {
        q: "Se fossi in te, ___ .（行かないよ）",
        o: ["non ci andrei", "non ci vado", "non ci andavo"],
        a: 0,
        why: "現実と違う想像は条件法。",
      },
      {
        q: "Se avessi studiato, avrei passato l'esame. の話し手は？",
        o: [
          "勉強しなかったことを悔やんでいる",
          "これから勉強する",
          "試験に受かった",
        ],
        a: 0,
        why: "過去の現実に反する想像です。",
      },
      {
        q: "「君が来るなら、私も行く」はどれ？",
        o: [
          "Se vieni, vengo anch'io.",
          "Se venissi, vengo anch'io.",
          "Se vieni, venissi anch'io.",
        ],
        a: 0,
        why: "ありえることなので型1。",
        say: "Se vieni, vengo anch'io.",
      },
      {
        t: "order",
        ja: "雨なら家にいます。",
        it: ["Se piove, resto a casa.", "Resto a casa se piove."],
      },
      {
        t: "order",
        ja: "時間があれば旅をするのに。",
        it: ["Se avessi tempo, viaggerei."],
      },
    ],
    read: {
      kind: "意見文",
      title: "Se avessi un milione di euro",
      lines: [
        [
          "Molti sognano: «Se avessi un milione di euro, smetterei di lavorare.»",
          "多くの人が夢見ます。「100万ユーロあれば、働くのをやめるのに」",
        ],
        [
          "Ma sarebbe davvero così bello?",
          "でも本当にそんなにいいでしょうか？",
        ],
        [
          "Secondo uno studio, chi vince molti soldi spesso continua a lavorare.",
          "ある研究によれば、大金を当てた人は働き続けることが多いそうです。",
        ],
        [
          "Se non lavorassimo, forse ci annoieremmo.",
          "働かなければ、たぶん退屈するでしょう。",
        ],
        [
          "Io, se fossi ricco, comprerei una casa al mare e continuerei il mio lavoro.",
          "私なら、お金持ちになれば海辺に家を買って、仕事は続けます。",
        ],
        ["E tu, che cosa faresti?", "あなたはどうしますか？"],
      ],
      gloss: [
        ["sognano", "夢見る"],
        ["vince", "当てる・勝つ"],
        ["ci annoieremmo", "退屈するだろう"],
        ["faresti", "するだろう"],
      ],
      q: [
        {
          skill: "main",
          s: "筆者の考えは？",
          o: [
            "大金があっても働くことには意味がある",
            "大金があれば働くべきではない",
            "宝くじを買うべきだ",
          ],
          a: 0,
          why: "continuerei il mio lavoro が筆者の立場です。",
        },
        {
          skill: "fact",
          s: "「研究によれば」の文は、文章で何の役割？",
          o: ["筆者の考えの根拠", "筆者の感想", "読者への命令"],
          a: 0,
          why: "secondo uno studio は根拠を示します。",
        },
        {
          skill: "vocab",
          s: "Se avessi un milione は現実か？",
          o: ["現実ではない想像", "今の事実", "過去の事実"],
          a: 0,
          why: "接続法半過去は現実と違う想像です。",
        },
      ],
    },
    write: {
      task: "「もし時間とお金があったら」を2文で書き、最後に「明日もし晴れたら」を1文書きましょう。",
      hints: [
        "Se avessi ..., andrei ...",
        "Se fossi ..., ...",
        "Se domani c'è il sole, ...",
      ],
      model:
        "Se avessi tempo e soldi, andrei a vivere in Italia. Mangerei la pizza ogni giorno. Se domani c'è il sole, vado al mare.",
      modelJa:
        "時間とお金があれば、イタリアに住みに行きます。毎日ピザを食べます。明日晴れたら海に行きます。",
      check: [
        "ありえることは現在形にした",
        "現実と違う想像は接続法＋条件法にした",
      ],
    },
  },
  {
    id: "s5-cui",
    g: 5,
    title: "関係詞の広がり",
    goal: "cui, il quale, chi を読み分けられる",
    talk: [
      ["Rea", "Chi è la ragazza con cui parlavi?", "話していた女の子は誰？"],
      ["Ivo", "È l'amica di cui ti ho parlato.", "君に話した友達だよ。"],
      ["Rea", "Quella che abita a Parma?", "パルマに住んでいる子？"],
      [
        "Ivo",
        "Sì, è la città in cui sono nato anch'io.",
        "うん、僕も生まれた町だよ。",
      ],
      ["Rea", "Chi cerca trova, allora!", "探せば見つかる、だね！"],
    ],
    words: [
      ["che", "（関係詞）〜する"],
      ["cui", "（前置詞の後で）それ"],
      ["il quale", "（書き言葉）それ"],
      ["la quale", "（書き言葉）それ"],
      ["chi", "〜する人"],
      ["ciò che", "〜すること"],
      ["quello che", "〜すること"],
      ["dove", "〜するところの"],
      ["nato", "生まれた"],
      ["motivo per cui", "〜の理由"],
    ],
    learn: [
      {
        h: "che と cui",
        body: "<b>che</b> は主語・目的語の働きで、前置詞はつきません。前置詞が必要なときは <b>cui</b>：con cui（〜と一緒に）、di cui（〜について）、in cui（〜の中で）、a cui（〜に）。",
        ex: [
          ["Il libro che leggo è bello.", "読んでいる本はいいです。"],
          ["L'amico di cui parlo è qui.", "話している友達はここにいます。"],
        ],
      },
      {
        h: "il quale（書き言葉）",
        body: "che や cui の代わりに、書き言葉で使います。<b>il quale, la quale, i quali, le quali</b> と性数が変わり、冠詞つきの前置詞とも結びつきます（della quale）。読めれば十分です。",
        ex: [
          [
            "La signora della quale parlavo è qui.",
            "私が話していた婦人はここにいます。",
          ],
        ],
      },
      {
        h: "chi と ciò che",
        body: "<b>chi</b>＝「〜する人」で単数扱いです。ことわざによく出ます：Chi cerca trova。<b>ciò che / quello che</b>＝「〜すること」です。",
        ex: [
          ["Chi dorme non piglia pesci.", "寝ている者は魚を捕れない。"],
          ["Non capisco ciò che dici.", "君の言っていることがわかりません。"],
        ],
      },
    ],
    gram: [
      {
        q: "Il libro ___ leggo è bello.",
        o: ["che", "cui", "chi"],
        a: 0,
        why: "目的語の働きなので che。",
      },
      {
        q: "L'amico con ___ parlo è italiano.",
        o: ["cui", "che", "chi"],
        a: 0,
        why: "前置詞の後は cui。",
      },
      {
        q: "La città in ___ sono nato è piccola.",
        o: ["cui", "che", "quale"],
        a: 0,
        why: "前置詞 in の後は cui。",
      },
      {
        q: "___ cerca trova.",
        o: ["Chi", "Che", "Cui"],
        a: 0,
        why: "「〜する人」は chi。",
      },
      {
        q: "Non capisco ___ che dici.",
        o: ["ciò", "cui", "chi"],
        a: 0,
        why: "ciò che で「〜すること」。",
      },
      {
        q: "la signora della quale parlavo の意味は？",
        o: ["私が話していた婦人", "私に話していた婦人", "話している女王"],
        a: 0,
        why: "della quale＝di cui。",
      },
      {
        t: "order",
        ja: "読んでいる本はいいです。",
        it: ["Il libro che leggo è bello."],
      },
      {
        t: "order",
        ja: "君の言っていることがわかりません。",
        it: ["Non capisco ciò che dici."],
      },
    ],
    read: {
      kind: "説明文",
      title: "Le parole che viaggiano",
      lines: [
        [
          "Ci sono parole italiane che tutto il mondo conosce.",
          "世界中が知っているイタリア語があります。",
        ],
        [
          "Pizza e spaghetti sono i primi esempi a cui si pensa.",
          "ピザとスパゲッティは、最初に思いつく例です。",
        ],
        [
          "Ma ci sono anche le parole della musica, di cui spesso non ci si accorge.",
          "でも、よく気づかれない音楽の言葉もあります。",
        ],
        [
          "Piano, forte e adagio sono termini con cui i musicisti lavorano ancora oggi.",
          "ピアノ、フォルテ、アダージョは、音楽家が今も使う用語です。",
        ],
        [
          "Il motivo per cui sono italiane è storico: in Italia la musica europea moderna si è sviluppata molto.",
          "それがイタリア語である理由は歴史的なものです。イタリアでヨーロッパの近代音楽が大きく発展したからです。",
        ],
      ],
      gloss: [
        ["non ci si accorge", "気づかれない"],
        ["termini", "用語"],
        ["storico", "歴史的な"],
      ],
      q: [
        {
          skill: "ref",
          s: "di cui spesso non ci si accorge の cui は？",
          o: ["音楽の言葉", "ピザ", "世界"],
          a: 0,
          why: "直前の le parole della musica を受けます。",
        },
        {
          skill: "match",
          s: "音楽の用語がイタリア語である理由は？",
          o: [
            "イタリアで近代音楽が大きく発展した",
            "音楽家がイタリア人だけだった",
            "法律で決まっている",
          ],
          a: 0,
          why: "最後の文に書かれています。",
        },
        {
          skill: "main",
          s: "文章の話題は？",
          o: ["世界に広まったイタリア語", "ピザの作り方", "音楽家の生活"],
          a: 0,
          why: "題 Le parole che viaggiano にも表れています。",
        },
      ],
    },
    write: {
      task: "住んでいる町を、che と in cui を使って紹介しましょう。",
      hints: [
        "... è la città in cui ...",
        "C'è un ... che ...",
        "Chi viene ...",
      ],
      model:
        "Osaka è la città in cui vivo. C'è un mercato che mi piace molto. Chi viene qui mangia bene.",
      modelJa:
        "大阪は私が住む町です。とても好きな市場があります。ここへ来る人はおいしいものを食べられます。",
      check: ["前置詞の後に cui を使った", "chi の後の動詞を単数にした"],
    },
  },
  {
    id: "s6-indiretto",
    g: 6,
    title: "人の言葉を伝える（間接話法）",
    goal: "物語や記事の間接話法を読める",
    talk: [
      ["Eli", "Che cosa ha detto Marco?", "マルコは何て言ったの？"],
      [
        "Sam",
        "Ha detto che sarebbe arrivato alle otto.",
        "8時に着くと言ったよ。",
      ],
      [
        "Eli",
        "Ha chiesto se poteva portare un amico?",
        "友達を連れて来ていいか聞いた？",
      ],
      [
        "Sam",
        "Sì, mi ha chiesto se poteva portarlo.",
        "うん、連れて来ていいかって聞かれた。",
      ],
      ["Eli", "E tu che cosa gli hai risposto?", "それで君は何て答えたの？"],
      ["Sam", "Gli ho risposto di venire pure.", "どうぞ来てと答えたよ。"],
    ],
    words: [
      ["ha detto che", "〜と言った"],
      ["ha chiesto se", "〜かと尋ねた"],
      ["ha risposto che", "〜と答えた"],
      ["pregare di", "〜するよう頼む"],
      ["ordinare di", "〜するよう命じる"],
      ["raccontare che", "〜と語る"],
      ["affermare", "断言する"],
      ["sostenere", "主張する"],
      ["annunciare", "発表する"],
      ["secondo", "〜によれば"],
    ],
    learn: [
      {
        h: "時制がずれる",
        body: "過去の話として語るときは、ふつう時制を1つ過去にずらします（今も当てはまる内容なら、そのままでも言えます）。<br>現在→<b>半過去</b>：«Sono stanco» → Ha detto che era stanco.<br>近過去→<b>大過去</b>：«Ho mangiato» → Ha detto che aveva mangiato.<br>未来→<b>条件法過去</b>：«Arriverò» → Ha detto che sarebbe arrivato.",
        ex: [
          ["Ha detto che era stanco.", "疲れていると言いました。"],
          ["Ha detto che sarebbe arrivato tardi.", "遅れて着くと言いました。"],
        ],
      },
      {
        h: "質問と命令",
        body: "yes/no の質問は <b>se</b>、疑問詞はそのまま使います。命令は <b>di ＋ 原形</b>です。",
        ex: [
          ["Mi ha chiesto se ero italiano.", "イタリア人かと聞かれました。"],
          ["Mi ha detto di aspettare.", "待つように言われました。"],
        ],
      },
      {
        h: "主語と場所の語も変わる",
        body: "«io» は語り手から見た人に、<b>qui→lì、oggi→quel giorno、domani→il giorno dopo、ieri→il giorno prima</b> と変わります。日本語の「明日」が「翌日」に変わるのと同じです。",
        ex: [
          [
            "Ha detto che sarebbe partito il giorno dopo.",
            "翌日出発すると言いました。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "«Sono stanco.» → Ieri ha detto che ___ stanco.（昨日の話）",
        o: ["era", "è stato", "sarà"],
        a: 0,
        why: "現在は半過去にずれます。",
      },
      {
        q: "«Ho mangiato.» → Ieri ha detto che ___ mangiato.（昨日の話）",
        o: ["aveva", "ha", "avrà"],
        a: 0,
        why: "近過去は大過去にずれます。",
      },
      {
        q: "«Arriverò.» → Ieri ha detto che ___ arrivato.（昨日の話）",
        o: ["sarebbe", "sarà", "è"],
        a: 0,
        why: "未来は条件法過去にずれます。",
      },
      {
        q: "Mi ha chiesto ___ ero italiano.",
        o: ["se", "che", "di"],
        a: 0,
        why: "yes/no の質問は se。",
      },
      {
        q: "Mi ha detto ___ aspettare.",
        o: ["di", "che", "se"],
        a: 0,
        why: "命令は di＋原形。",
      },
      {
        q: "«domani» を過去の話の中で言い換えると？",
        o: ["il giorno dopo", "il giorno prima", "quel giorno"],
        a: 0,
        why: "「明日」は「翌日」になります。",
        say: "il giorno dopo",
      },
      {
        t: "order",
        ja: "待つように言われました。",
        it: ["Mi ha detto di aspettare."],
      },
      {
        t: "order",
        ja: "イタリア人かと聞かれました。",
        it: ["Mi ha chiesto se ero italiano."],
      },
    ],
    read: {
      kind: "ニュース風の記事",
      title: "Un cane eroe",
      lines: [
        [
          "Ieri un cane ha salvato un bambino vicino a Verona.",
          "昨日、ヴェローナの近くで犬が子どもを救いました。",
        ],
        [
          "Il padre ha raccontato che il figlio giocava vicino al fiume.",
          "父親は、息子が川の近くで遊んでいたと語りました。",
        ],
        [
          "Ha detto che all'improvviso il bambino era caduto in acqua.",
          "突然、子どもが水に落ちたと述べました。",
        ],
        [
          "Secondo un testimone, il cane si è gettato subito nel fiume.",
          "目撃者によれば、犬はすぐ川に飛び込みました。",
        ],
        [
          "Il sindaco ha annunciato che avrebbe dato una medaglia al cane.",
          "市長は、犬にメダルを贈ると発表しました。",
        ],
        [
          "Il padre ha chiesto ai giornalisti di non disturbare la famiglia.",
          "父親は記者たちに、家族をそっとしておくよう頼みました。",
        ],
      ],
      gloss: [
        ["testimone", "目撃者"],
        ["si era gettato", "飛び込んだ"],
        ["medaglia", "メダル"],
        ["disturbare", "邪魔する"],
      ],
      q: [
        {
          skill: "match",
          s: "市長が発表したことは？",
          o: ["犬にメダルを贈る", "川に柵を作る", "子どもを表彰する"],
          a: 0,
          why: "avrebbe dato una medaglia al cane.",
        },
        {
          skill: "order",
          s: "先に起きたのは？",
          o: ["子どもが水に落ちた", "父親が話した", "市長が発表した"],
          a: 0,
          why: "大過去 era caduto が示します。",
        },
        {
          skill: "fact",
          s: "この記事の情報の出どころは？",
          o: ["父親や目撃者など、他の人の話", "筆者が見たこと", "筆者の想像"],
          a: 0,
          why: "ha raccontato, secondo un testimone が目印です。",
        },
      ],
    },
    write: {
      task: "友達が言ったことを、間接話法で伝えましょう。",
      hints: ["Ha detto che ...", "Mi ha chiesto se ...", "Mi ha detto di ..."],
      model:
        "Marco ha detto che era stanco. Mi ha chiesto se potevo aiutarlo. Gli ho detto di aspettare il giorno dopo.",
      modelJa:
        "マルコは疲れていると言いました。手伝えるかと私に尋ねました。翌日まで待つように言いました。",
      check: [
        "時制をずらした",
        "yes/no の質問に se を使った",
        "命令に di＋原形を使った",
      ],
    },
  },
  {
    id: "s6-congiuntivo2",
    g: 6,
    title: "接続法の使い分け",
    goal: "接続法が出る場面を見分け、よく使う形を言える",
    talk: [
      ["Ada", "Spero che tu stia meglio.", "具合が良くなっているといいな。"],
      [
        "Teo",
        "Sì, grazie. Credo che sia solo un raffreddore.",
        "うん、ありがとう。ただの風邪だと思う。",
      ],
      ["Ada", "Bisogna che tu riposi.", "休まないとね。"],
      [
        "Teo",
        "Ma ho paura che il mio capo si arrabbi.",
        "でも上司が怒らないか心配で。",
      ],
      [
        "Ada",
        "Prima che tu torni al lavoro, chiama il medico.",
        "仕事に戻る前に、医者に電話して。",
      ],
      ["Teo", "Va bene, sei gentile.", "わかった、優しいね。"],
    ],
    words: [
      ["sperare che", "〜を望む"],
      ["credere che", "〜と思う"],
      ["bisogna che", "〜が必要だ"],
      ["avere paura che", "〜を恐れる"],
      ["volere che", "〜してほしい"],
      ["è meglio che", "〜の方がいい"],
      ["prima che", "〜する前に"],
      ["benché", "〜だけれど"],
      ["affinché", "〜するように"],
      ["sebbene", "〜だけれど"],
    ],
    learn: [
      {
        h: "接続法が出る3つの場面",
        body: "① <b>考え・気持ち</b>：penso che, credo che, spero che, ho paura che<br>② <b>必要・望み</b>：bisogna che, voglio che, è meglio che<br>③ <b>特定の接続詞</b>：benché, sebbene, affinché, prima che, purché<br>事実を述べる <b>so che, è vero che</b> の後はふつうの形です。",
        ex: [
          ["Penso che sia tardi.", "遅いと思います。"],
          ["So che è tardi.", "遅いと知っています。"],
        ],
      },
      {
        h: "現在形の作り方",
        body: "-are → <b>-i, -i, -i, -iamo, -iate, -ino</b>（parli）。-ere / -ire → <b>-a, -a, -a, -iamo, -iate, -ano</b>（prenda, parta）。-isc 型は finisca。<br>単数3つが同じ形なので、主語の tu を入れます：che tu parli。",
        ex: [
          ["Voglio che tu venga.", "君に来てほしいです。"],
          ["È meglio che lui parta.", "彼は出発した方がいいです。"],
        ],
      },
      {
        h: "主語が同じなら原形",
        body: "主語が同じなら、多くの場合は原形を使います（Spero di venire / Voglio venire）。話すときの近道です。<b>Spero di venire</b>（私が行けるといい）と <b>Spero che tu venga</b>（君が来るといい）を比べましょう。",
        ex: [["Penso di partire domani.", "明日出発しようと思います。"]],
      },
    ],
    gram: [
      {
        q: "Penso che ___ tardi. (essere)",
        o: ["sia", "era", "sono"],
        a: 0,
        why: "penso che の後は接続法。",
      },
      {
        q: "So che ___ tardi. (essere)",
        o: ["è", "sia", "sei"],
        a: 0,
        why: "so che は事実なので直説法。",
      },
      {
        q: "Voglio che tu ___ . (venire)",
        o: ["venga", "vieni qui e", "venire"],
        a: 0,
        why: "volere che の後は接続法。",
      },
      {
        q: "Spero ___ venire.（私が行けるといい）",
        o: ["di", "che", "a"],
        a: 0,
        why: "主語が同じなら di＋原形。",
      },
      {
        q: "Benché ___ tardi, esco. (essere)",
        o: ["sia", "è stato il", "sono"],
        a: 0,
        why: "benché の後は接続法。",
      },
      {
        q: "「君に話してほしい」はどれ？",
        o: [
          "Voglio che tu parli.",
          "Voglio tu parlare.",
          "Voglio di parlare tu.",
        ],
        a: 0,
        why: "主語が違うので che＋接続法。",
        say: "Voglio che tu parli.",
      },
      { t: "order", ja: "君に来てほしいです。", it: ["Voglio che tu venga."] },
      {
        t: "order",
        ja: "明日出発しようと思います。",
        it: ["Penso di partire domani."],
      },
    ],
    read: {
      kind: "意見文",
      title: "Studiare una lingua da adulti",
      lines: [
        [
          "Molti pensano che sia troppo tardi per imparare una lingua da adulti.",
          "大人になってからでは言語を学ぶのは遅すぎると、多くの人が思っています。",
        ],
        [
          "È vero che i bambini hanno una pronuncia migliore.",
          "確かに子どもの方が発音は良くなります。",
        ],
        [
          "Ma credo che gli adulti abbiano altri vantaggi.",
          "しかし、大人には別の利点があると思います。",
        ],
        [
          "Sanno perché studiano e capiscono meglio la grammatica.",
          "なぜ学ぶのかがわかっており、文法をよく理解します。",
        ],
        [
          "Benché il lavoro lasci poco tempo, basta che si studi un po' ogni giorno.",
          "仕事で時間は少なくても、毎日少し勉強すれば十分です。",
        ],
        ["Bisogna solo che non si smetta.", "やめないことだけが必要なのです。"],
      ],
      gloss: [
        ["pronuncia", "発音"],
        ["vantaggi", "利点"],
        ["basta che", "〜すれば十分だ"],
      ],
      q: [
        {
          skill: "main",
          s: "筆者の主張は？",
          o: [
            "大人でも続ければ言語は学べる",
            "子どもの時に学ぶしかない",
            "文法は不要だ",
          ],
          a: 0,
          why: "最後の2文が結論です。",
        },
        {
          skill: "fact",
          s: "È vero che ... の文の働きは？",
          o: ["反対の意見を一部認める", "結論を述べる", "質問をする"],
          a: 0,
          why: "認めたうえで Ma と続きます。",
        },
        {
          skill: "vocab",
          s: "abbiano, lasci, studi が接続法である手がかりは？",
          o: ["credo che, benché, basta che", "ieri, oggi", "molti, pochi"],
          a: 0,
          why: "これらの後で接続法が使われます。",
        },
      ],
    },
    write: {
      task: "「言語を学ぶとき大切なこと」を、接続法を1つ使って書きましょう。",
      hints: [
        "Penso che sia importante ...",
        "Bisogna che ...",
        "Spero di ...",
      ],
      model:
        "Penso che sia importante studiare ogni giorno. Spero di leggere un libro italiano l'anno prossimo.",
      modelJa:
        "毎日勉強することが大切だと思います。来年はイタリア語の本を読めるといいと思います。",
      check: [
        "penso che の後を接続法にした",
        "主語が同じときは di＋原形にした",
      ],
    },
  },
  {
    id: "s6-connettivi",
    g: 6,
    title: "長い文を読む",
    goal: "接続の言葉から長い文の組み立てをつかめる",
    talk: [
      ["Prof", "Questo testo è difficile, vero?", "この文章は難しいね？"],
      [
        "Studente",
        "Sì, le frasi sono molto lunghe.",
        "はい、文がとても長いです。",
      ],
      [
        "Prof",
        "Cerca prima il verbo principale.",
        "まず主な動詞を探しなさい。",
      ],
      ["Studente", "E poi?", "それから？"],
      [
        "Prof",
        "Guarda le parole come «benché» e «quindi».",
        "benché や quindi のような語を見なさい。",
      ],
      [
        "Studente",
        "Ah, così capisco la struttura!",
        "ああ、それで組み立てがわかるんですね！",
      ],
    ],
    words: [
      ["quindi", "だから"],
      ["dunque", "したがって"],
      ["perciò", "それゆえ"],
      ["infatti", "実際"],
      ["cioè", "つまり"],
      ["invece", "一方"],
      ["tuttavia", "しかしながら"],
      ["nonostante", "〜にもかかわらず"],
      ["mentre", "〜である一方"],
      ["sia ... sia", "〜も〜も"],
      ["non solo ... ma anche", "〜だけでなく〜も"],
      ["né ... né", "〜も〜もない"],
    ],
    learn: [
      {
        h: "働きで分ける",
        body: "<b>理由</b>：perché, poiché, siccome, infatti<br><b>結果</b>：quindi, dunque, perciò<br><b>逆接</b>：ma, però, tuttavia, benché, nonostante<br><b>言い換え</b>：cioè<br><b>対比</b>：invece, mentre<br><b>追加</b>：inoltre, anche",
        ex: [
          [
            "Pioveva, quindi sono rimasto a casa.",
            "雨だったので家にいました。",
          ],
          [
            "Nonostante la pioggia, siamo usciti.",
            "雨にもかかわらず出かけました。",
          ],
        ],
      },
      {
        h: "対になる言葉",
        body: "<b>non solo ... ma anche</b>（〜だけでなく〜も）、<b>sia ... sia</b>（〜も〜も）、<b>né ... né</b>（〜も〜もない）。片方が見えたら、もう片方を探します。",
        ex: [
          [
            "Parla non solo inglese, ma anche cinese.",
            "英語だけでなく中国語も話します。",
          ],
          ["Non ho né fame né sete.", "空腹でも、のどが渇いてもいません。"],
        ],
      },
      {
        h: "長い文の読み方",
        body: "① 主な動詞を探す ② コンマや接続の語で区切る ③ che, cui, dove が説明している語を探す。国語で文の組み立てをつかむ学習と同じです。日本語にすぐ直さず、区切りごとに意味を取ります。",
        ex: [
          [
            "Il libro che ho comprato ieri, benché sia lungo, è facile.",
            "昨日買った本は、長いけれど簡単です。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "Pioveva, ___ sono rimasto a casa.（だから）",
        o: ["quindi", "benché", "mentre"],
        a: 0,
        why: "結果を導きます。",
      },
      {
        q: "___ la pioggia, siamo usciti.（〜にもかかわらず）",
        o: ["Nonostante", "Infatti", "Quindi"],
        a: 0,
        why: "逆接です。",
      },
      {
        q: "Parla non solo inglese, ___ cinese.",
        o: ["ma anche", "però no", "e né"],
        a: 0,
        why: "non solo ... ma anche。",
      },
      {
        q: "Non ho ___ fame né sete.",
        o: ["né", "sia", "ma"],
        a: 0,
        why: "né ... né。",
      },
      {
        q: "cioè の働きは？",
        o: ["言い換え", "結果", "逆接"],
        a: 0,
        why: "「つまり」です。",
        say: "cioè",
      },
      {
        q: "長い文でまず探すものは？",
        o: ["主な動詞", "最後の単語", "一番長い単語"],
        a: 0,
        why: "文の骨組みが見えます。",
      },
      {
        t: "order",
        ja: "雨だったので家にいました。",
        it: ["Pioveva, quindi sono rimasto a casa."],
      },
      {
        t: "order",
        ja: "空腹でも、のどが渇いてもいません。",
        it: ["Non ho né fame né sete."],
      },
    ],
    read: {
      kind: "説明文（理科）",
      title: "Perché il mare è salato",
      lines: [
        [
          "Il mare è salato, mentre l'acqua dei fiumi è dolce, benché i fiumi finiscano nel mare.",
          "川は海に流れ込むのに、海は塩辛く、川の水は淡水です。",
        ],
        [
          "Infatti l'acqua della pioggia, scendendo sulle rocce, scioglie piccole quantità di sali.",
          "雨水は岩の上を流れ下りながら、少量の塩分を溶かすのです。",
        ],
        [
          "I fiumi portano questi sali nel mare, dove rimangono.",
          "川がその塩分を海へ運び、塩分はそこにとどまります。",
        ],
        [
          "Quando l'acqua del mare evapora, i sali non evaporano insieme all'acqua.",
          "海の水が蒸発しても、塩分は一緒に蒸発しません。",
        ],
        [
          "Quindi, nel corso di milioni di anni, il mare ha accumulato i sali dei fiumi, e oggi la sua salinità resta quasi stabile.",
          "そのため、何百万年もの間に海は川の塩分を集め、今では塩分の濃さはほぼ一定です。",
        ],
        [
          "Non solo i fiumi, ma anche i vulcani sottomarini aggiungono sali.",
          "川だけでなく、海底火山も塩分を加えます。",
        ],
      ],
      gloss: [
        ["sali", "塩分（複数）"],
        ["scioglie", "溶かす"],
        ["evapora", "蒸発する"],
        ["sottomarini", "海底の"],
        ["acqua dolce", "淡水"],
      ],
      q: [
        {
          skill: "order",
          s: "塩分が海にたまる流れは？",
          o: [
            "岩から溶ける→川で運ばれる→海にとどまる",
            "海から蒸発→雨になる→岩にたまる",
            "火山→雨→川",
          ],
          a: 0,
          why: "文の順にたどります。",
        },
        {
          skill: "vocab",
          s: "Quindi の働きは？",
          o: ["ここまでの結果を述べる", "反対のことを述べる", "例を挙げる"],
          a: 0,
          why: "「だから」です。",
        },
        {
          skill: "match",
          s: "川以外に塩分を加えるものは？",
          o: ["海底火山", "雨雲", "魚"],
          a: 0,
          why: "i vulcani sottomarini.",
        },
      ],
    },
    write: {
      task: "「なぜ〜なのか」を3つの文で説明しましょう。つなぐ言葉を2つ使います。",
      hints: ["... perché ...", "Infatti ...", "Quindi ..."],
      model:
        "In estate fa caldo perché il sole è più alto. Infatti le giornate sono più lunghe. Quindi la terra riceve più luce.",
      modelJa:
        "夏は太陽が高いので暑いです。実際、昼も長くなります。だから大地はより多くの光を受けます。",
      check: ["理由と結果の語を使い分けた", "長くなりすぎた文を区切った"],
    },
  },
{id:"s3-tonici",g:3,title:"「私と」「君に」（強い形の代名詞）",goal:"前置詞の後の me, te, lui などと、Che bello! などの感嘆を使える",
 talk:[["Nora","Vieni con me al mercato?","私と市場に来る？"],["Aki","Con te? Volentieri! Chi viene con noi?","君と？喜んで！他に誰が来るの？"],["Nora","Marco. Questo regalo è per lui.","マルコだよ。この贈り物は彼に。"],["Aki","Che bello! Per chi è quello?","いいね！あれは誰に？"],["Nora","Quello è per te!","あれは君に！"],["Aki","Per me? Che sorpresa!","私に？驚いた！"]],
 words:[["con me","私と"],["per te","君のために"],["da lui","彼のところで"],["a lei","彼女に"],["tra noi","私たちの間で"],["senza di te","君なしで"],["sorpresa","驚き"],["che bello","いいね"],["che peccato","残念"],["quanto","なんと"]],
 learn:[
  {h:"前置詞の後の形",body:"前置詞の後は <b>me, te, lui, lei, noi, voi, loro</b> を使います。io や tu は使いません。「私と」は con me で、con io とは言いません。",ex:[["Vieni con me.","私と来て。"],["Questo è per te.","これは君に。"]]},
  {h:"強調するとき",body:"mi, ti は動詞の前に置く軽い形です。「他の人ではなく私に」と強調するときは <b>a me, a te</b> を動詞の後に置きます。Mi piace より A me piace の方が「私は」を強く言います。",ex:[["Guardano me, non te.","彼らは君ではなく私を見ています。"],["A me piace, a te no?","私は好きだけど、君は違う？"]]},
  {h:"感嘆の言い方",body:"<b>Che ＋ 形容詞や名詞</b>で「なんて〜！」。<b>Quanto ＋ 動詞</b>も使います。会話でとてもよく出ます。",ex:[["Che peccato!","残念！"],["Quanto sei gentile!","なんて親切なの！"]]}
 ],
 gram:[
  {q:"Vieni con ___ ?（私と）",o:["me","io","mi"],a:0,why:"前置詞の後は me。"},
  {q:"Questo regalo è per ___ .（君に）",o:["te","tu","ti"],a:0,why:"前置詞の後は te。"},
  {q:"Vado da ___ stasera.（彼のところへ）",o:["lui","gli","lo"],a:0,why:"前置詞の後は lui。"},
  {q:"Guardano ___ , non te.（私を、強調）",o:["me","mi","io"],a:0,why:"強調は動詞の後に me。"},
  {q:"「残念！」はどれ？",o:["Che peccato!","Che bello!","Che fame!"],a:0,why:"peccato は「残念なこと」。",say:"Che peccato!"},
  {q:"A me piace, a te no? の a me の働きは？",o:["「私は」を強調する","「私に行く」を表す","過去を表す"],a:0,why:"対比で強調しています。"},
  {t:"order",ja:"私と来て。",it:["Vieni con me."]},
  {t:"order",ja:"これは君に。",it:["Questo è per te."]}
 ],
 read:{kind:"手紙",title:"Una sorpresa per Aki",
  lines:[["Cara Aki, grazie per il tuo regalo! Che sorpresa!","アキへ。贈り物をありがとう！驚いたよ！"],["Nessuno mi ha mai dato un libro così bello.","こんなにすてきな本をくれた人はいません。"],["Sabato vengo a Osaka con Marco. Lui non conosce la città.","土曜日にマルコと大阪へ行きます。彼は町を知りません。"],["Possiamo stare da te una notte?","君のところに1泊してもいい？"],["Porto qualcosa per te e per i tuoi genitori.","君と君のご両親に何か持っていきます。"],["A presto! Nora","またね！ノーラ"]],
  gloss:[["stare da te","君のところに泊まる"]],
  q:[{skill:"match",s:"ノーラの頼みは？",o:["アキの家に1泊させてほしい","本を返してほしい","大阪を案内してもらわなくてよい"],a:0,why:"Possiamo stare da te una notte?"},
     {skill:"ref",s:"Lui non conosce la città. の Lui は？",o:["マルコ","アキの父","ノーラ"],a:0,why:"直前の Marco を受けます。"},
     {skill:"main",s:"手紙の目的は？",o:["お礼と訪問の相談","苦情","結婚の知らせ"],a:0,why:"お礼の後、泊まれるか尋ねています。"}]},
 write:{task:"友達を誘う短いメッセージを、con me と per te を使って書きましょう。",hints:["Vieni con me ...?","Ho un regalo per te.","Che ...!"],model:"Vieni con me al mare domani? Ho anche una sorpresa per te. Che bello!",modelJa:"明日、私と海に行かない？君に驚きもあるよ。楽しみ！",check:["前置詞の後を me, te にした","io, tu を前置詞の後に使わなかった"]}
}
);