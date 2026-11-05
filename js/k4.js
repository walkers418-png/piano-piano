/* 段階4（小4相当・CEFR目安A2）：読んで慣れる。半過去、語りの組み立て、直接目的語代名詞、tu の命令形。 */
window.KOKUGO.push(
  {
    id: "s4-infanzia",
    g: 4,
    title: "子どものころ（半過去）",
    goal: "半過去で、過去の習慣や様子を話せる",
    talk: [
      [
        "Rosa",
        "Da bambino dove abitavi?",
        "子どものころ、どこに住んでいたの？",
      ],
      [
        "Haru",
        "Abitavo in una piccola città vicino al mare.",
        "海の近くの小さな町に住んでいたよ。",
      ],
      ["Rosa", "Che cosa facevi d'estate?", "夏は何をしていたの？"],
      [
        "Haru",
        "Andavo in spiaggia tutti i giorni con mio fratello.",
        "毎日、弟と海岸に行っていたよ。",
      ],
      ["Rosa", "Eri felice?", "幸せだった？"],
      [
        "Haru",
        "Sì, ero molto felice. Mi manca quel periodo.",
        "うん、とても幸せだった。あのころが懐かしいな。",
      ],
    ],
    words: [
      ["infanzia", "子ども時代"],
      ["spiaggia", "海岸・ビーチ"],
      ["ricordo", "思い出"],
      ["nonna", "祖母"],
      ["paese", "村・国"],
      ["quartiere", "地区・界隈", "男性名詞"],
      ["vicino di casa", "隣人"],
      ["compagno di scuola", "同級生"],
      ["ogni", "毎〜・それぞれの", "ogni giorno＝毎日"],
      ["a volte", "時々"],
      ["tutti i giorni", "毎日"],
      ["felice", "幸せな"],
      ["mentre", "〜の間に"],
      ["mi manca", "〜が恋しい", "複数なら mi mancano"],
    ],
    learn: [
      {
        h: "半過去の作り方",
        body: "原形の -re を取って <b>-vo, -vi, -va, -vamo, -vate, -vano</b> をつけます。3つの型とも同じ語尾です。<br>parlare → parla<b>vo</b>、leggere → legge<b>vo</b>、dormire → dormi<b>vo</b><br>不規則：essere → <b>ero, eri, era, eravamo, eravate, erano</b>／fare → <b>facevo</b>／dire → <b>dicevo</b>／bere → <b>bevevo</b>。",
        ex: [
          ["Parlavo poco.", "あまり話さなかった。"],
          ["Ero stanco.", "疲れていた。"],
          ["Facevo sport.", "スポーツをしていた。"],
        ],
      },
      {
        h: "半過去の使いどころ",
        body: "① <b>過去の習慣</b>（よく〜した）② <b>過去の様子・背景</b>（〜だった、〜していた）に使います。日本語の「〜ていた」に近いのですが、いつ始まりいつ終わったかを言わないのがポイントです。",
        ex: [
          ["Ogni estate andavamo al mare.", "毎年夏は海へ行っていました。"],
          ["Il cielo era azzurro.", "空は青かった。"],
        ],
      },
      {
        h: "mi manca（〜が恋しい）",
        body: "piacere と同じく、恋しいものが主語です。「〜が私に欠けている」という発想で、イタリア語らしい言い方です。",
        ex: [
          ["Mi manca l'Italia.", "イタリアが恋しいです。"],
          ["Mi mancano i miei amici.", "友達が恋しいです。"],
        ],
      },
      {
        h: "語の家族：bambino から",
        body: "bambino（子ども）、bambina（女の子）、bambini（子どもたち）。接尾辞 -ino, -etto は小ささ、-one は大きさ、-accio は悪さを表します：tempo → tempaccio（ひどい天気）。語尾の感覚をつかむと、知らない語も推測できます。",
        ex: [["Che tempaccio!", "なんてひどい天気！"]],
      },
    ],
    gram: [
      {
        q: "Io, da bambino, ___ al mare. (andare)",
        o: ["andavo", "andato", "andavi"],
        a: 0,
        why: "io の半過去は -vo。",
      },
      {
        q: "Da bambini noi ___ ogni giorno. (giocare)",
        o: ["giocavamo", "giocavano", "giochiamo"],
        a: 0,
        why: "noi の半過去は -vamo。",
      },
      {
        q: "Tu ___ felice? (essere)",
        o: ["eri", "ero", "era"],
        a: 0,
        why: "essere は不規則。tu は eri。",
      },
      {
        q: "Da giovane mio padre ___ il cuoco. (fare)",
        o: ["faceva", "fava", "fa"],
        a: 0,
        why: "fare の語幹は face-。",
      },
      {
        q: "Mi ___ i miei amici.（恋しい）",
        o: ["mancano", "manca", "manchi"],
        a: 0,
        why: "恋しいもの（複数）が主語です。",
      },
      {
        q: "「毎年夏は海へ行っていた」に合うのは？",
        o: ["半過去（習慣）", "近過去（1回の出来事）"],
        a: 0,
        why: "繰り返しの習慣は半過去です。",
      },
      {
        t: "order",
        ja: "子どものころ、海の近くに住んでいました。",
        it: [
          "Da bambino abitavo vicino al mare.",
          "Abitavo vicino al mare da bambino.",
        ],
      },
      { t: "order", ja: "イタリアが恋しいです。", it: ["Mi manca l'Italia."] },
    ],
    read: {
      kind: "随筆",
      title: "La casa dei nonni",
      lines: [
        [
          "Quando ero piccolo, passavo le vacanze in campagna.",
          "小さいころ、休みは田舎で過ごしていました。",
        ],
        [
          "I miei nonni avevano una vecchia casa con un grande giardino.",
          "祖父母は大きな庭のある古い家を持っていました。",
        ],
        [
          "La mattina mi svegliavo presto perché i galli facevano rumore.",
          "朝は早く目が覚めました。おんどりがうるさかったからです。",
        ],
        [
          "Mia nonna preparava il pane e la casa aveva un profumo meraviglioso.",
          "祖母がパンを焼くと、家はすばらしい香りに包まれていました。",
        ],
        [
          "Non avevamo la televisione, ma non ci annoiavamo mai.",
          "テレビはありませんでしたが、退屈することはありませんでした。",
        ],
        ["Oggi quella casa non c'è più.", "今、その家はもうありません。"],
        [
          "Eppure, quando sento l'odore del pane, torno bambino.",
          "それでも、パンの匂いがすると、私は子どもに戻るのです。",
        ],
      ],
      gloss: [
        ["campagna", "田舎"],
        ["giardino", "庭"],
        ["galli", "おんどり"],
        ["profumo / odore", "香り／匂い"],
        ["annoiarsi", "退屈する"],
        ["eppure", "それでも"],
      ],
      q: [
        {
          skill: "main",
          s: "この随筆の中心となる気持ちは？",
          o: ["失われた場所への懐かしさ", "田舎暮らしの不便さ", "パンの作り方"],
          a: 0,
          why: "家はもうないのに、匂いで子どもに戻るという結びが要点です。",
        },
        {
          skill: "match",
          s: "筆者が朝早く目が覚めたのはなぜ？",
          o: [
            "おんどりがうるさかったから",
            "学校があったから",
            "パンを焼くから",
          ],
          a: 0,
          why: "perché i galli facevano rumore.",
        },
        {
          skill: "ref",
          s: "quella casa（その家）とはどの家？",
          o: ["祖父母の古い家", "筆者の今の家", "パン屋"],
          a: 0,
          why: "2文目の una vecchia casa を指します。",
        },
        {
          skill: "infer",
          s: "torno bambino の意味として正しいのは？",
          o: ["気持ちが子どものころに戻る", "実際に若返る", "田舎へ引っ越す"],
          a: 0,
          why: "比喩です。文字どおりではありません。",
        },
      ],
    },
    write: {
      task: "子どものころの習慣を4つの文で書きましょう。",
      hints: [
        "Da bambino/a abitavo ...",
        "Ogni estate ...",
        "Mi piaceva ...",
        "Mi manca ...",
      ],
      model:
        "Da bambino abitavo vicino al mare. Ogni estate andavo in spiaggia con mio fratello. Mi piaceva nuotare. Mi manca quel periodo.",
      modelJa:
        "子どものころ、海の近くに住んでいました。毎年夏は弟と海岸に行っていました。泳ぐのが好きでした。あのころが懐かしいです。",
      check: [
        "習慣を半過去で書いた",
        "da bambino / da bambina を自分に合わせた",
        "essere と fare の不規則形を確かめた",
      ],
    },
  },
  {
    id: "s4-raccontare",
    g: 4,
    title: "出来事を語る",
    goal: "近過去と半過去を使い分けて、話を組み立てられる",
    talk: [
      [
        "Clara",
        "Perché sei arrivato così tardi?",
        "どうしてこんなに遅れたの？",
      ],
      [
        "Jun",
        "Mentre andavo alla stazione, ha cominciato a piovere.",
        "駅に向かっている途中で、雨が降り出したんだ。",
      ],
      ["Clara", "Non avevi l'ombrello?", "傘は持っていなかったの？"],
      [
        "Jun",
        "No, e così sono tornato a casa e ho perso il treno.",
        "うん、それで家に戻って、電車に乗り遅れたんだ。",
      ],
      ["Clara", "Che sfortuna! E poi?", "ついてないね！それで？"],
      ["Jun", "Alla fine ho preso un taxi.", "結局、タクシーに乗ったよ。"],
    ],
    words: [
      ["ombrello", "傘"],
      ["all'improvviso", "突然"],
      ["alla fine", "結局・最後に"],
      ["prima", "先に・以前"],
      ["dopo", "後で"],
      ["così", "だから・そのように"],
      ["sfortuna", "不運"],
      ["fortuna", "幸運"],
      ["storia", "物語・歴史"],
      ["inizio", "始まり"],
      ["fine", "終わり", "女性名詞"],
      ["succedere", "起こる", "近過去は è successo"],
      ["Che cosa è successo?", "何があったの？"],
    ],
    learn: [
      {
        h: "背景は半過去、出来事は近過去",
        body: "物語の<b>舞台</b>は半過去で描き、<b>起きたこと</b>は近過去で進めます。映画でいえば、半過去が背景の映像、近過去が事件です。",
        ex: [
          ["Pioveva e faceva freddo.", "雨が降っていて寒かった。（背景）"],
          ["All'improvviso è arrivato Marco.", "突然マルコが来た。（出来事）"],
          [
            "Mentre mangiavo, ha telefonato Anna.",
            "食べている間に、アンナが電話してきた。",
          ],
        ],
      },
      {
        h: "再帰動詞の近過去",
        body: "再帰動詞の近過去は <b>essere</b> を使い、語尾を主語に合わせます。mi sono svegliato（男性）／mi sono svegliata（女性）。",
        ex: [
          ["Mi sono svegliato tardi.", "遅く起きました。"],
          ["Ci siamo divertiti molto.", "とても楽しみました。"],
        ],
      },
      {
        h: "話の順序を示す語",
        body: "<b>prima</b>（まず）、<b>poi</b>（それから）、<b>dopo</b>（その後）、<b>all'improvviso</b>（突然）、<b>alla fine</b>（最後に）。読むときの目印にもなります。国語の「段落や順序をとらえる」学習に当たります。",
        ex: [
          [
            "Prima ho mangiato, poi sono uscito.",
            "まず食べて、それから出かけました。",
          ],
        ],
      },
      {
        h: "日本語話者の落とし穴",
        body: "「見ていた」は状況で変わります。「その時テレビを見ていた」は背景なので <b>guardavo</b>、「昨日2時間テレビを見た」は終わった出来事なので <b>ho guardato</b> です。時間の長さがはっきりしていれば、ふつう近過去です。",
        ex: [
          ["Ho dormito otto ore.", "8時間眠りました。"],
          [
            "Dormivo quando hai chiamato.",
            "君が電話したとき、私は眠っていました。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "Mentre ___, è arrivato Marco. (mangiare)",
        o: ["mangiavo", "ho mangiato", "mangio"],
        a: 0,
        why: "mentre の中は背景なので半過去。",
      },
      {
        q: "Ieri ___ otto ore. (dormire)",
        o: ["ho dormito", "dormivo", "dormo"],
        a: 0,
        why: "長さが決まった出来事は近過去。",
      },
      {
        q: "Quando ero piccolo, ___ spesso al parco. (andare)",
        o: ["andavo", "andrò", "vado"],
        a: 0,
        why: "繰り返しの習慣は半過去。",
      },
      {
        q: "Stamattina mi ___ tardi. (svegliarsi)",
        o: ["sono svegliato", "ho svegliato", "svegliavo"],
        a: 0,
        why: "再帰動詞は essere。",
      },
      {
        q: "Che cosa è ___?（何があったの）",
        o: ["successo", "succeduto", "succedi"],
        a: 0,
        why: "succedere の過去分詞は successo。",
      },
      {
        q: "文の順序を示す「最後に」はどれ？",
        o: ["alla fine", "prima", "mentre"],
        a: 0,
        why: "alla fine は「最後に、結局」。",
        say: "alla fine",
      },
      {
        t: "order",
        ja: "まず食べて、それから出かけました。",
        it: [
          "Prima ho mangiato, poi sono uscito.",
          "Prima ho mangiato, poi sono uscita.",
        ],
      },
      {
        t: "order",
        ja: "突然雨が降り出しました。",
        it: ["All'improvviso ha cominciato a piovere."],
      },
    ],
    read: {
      kind: "物語（連載4）",
      title: "Pinocchio 4: Mangiafuoco",
      lines: [
        ["Il teatro era pieno di gente.", "劇場は人でいっぱいでした。"],
        [
          "I burattini recitavano, ma quando hanno visto Pinocchio, hanno gridato di gioia.",
          "人形たちは演じていましたが、ピノッキオを見ると、喜んで叫びました。",
        ],
        [
          "Il padrone del teatro si chiamava Mangiafuoco.",
          "劇場の親方はマンジャフオーコといいました。",
        ],
        [
          "Aveva una lunga barba nera e faceva paura a tutti.",
          "長い黒ひげを生やしていて、みんなが怖がっていました。",
        ],
        [
          "Quella sera voleva bruciare Pinocchio per cuocere la sua cena.",
          "その晩、夕食を焼くためにピノッキオを燃やそうとしました。",
        ],
        [
          "Ma Pinocchio ha pianto tanto che Mangiafuoco si è commosso.",
          "しかしピノッキオがあまりに泣いたので、親方は心を動かされました。",
        ],
        [
          "Così gli ha dato cinque monete d'oro per il povero Geppetto.",
          "そこで、かわいそうなジェッペットのためにと、金貨を5枚渡しました。",
        ],
      ],
      gloss: [
        ["pieno di", "〜でいっぱいの"],
        ["recitavano", "演じていた"],
        ["gioia", "喜び"],
        ["padrone", "親方・主人"],
        ["faceva paura", "怖がらせた"],
        ["bruciare / cuocere", "燃やす／焼く・煮る"],
        ["si è commosso", "心を動かされた"],
        ["monete d'oro", "金貨"],
      ],
      q: [
        {
          skill: "match",
          s: "親方がピノッキオにくれたものは？",
          o: ["金貨5枚", "本", "黒ひげ"],
          a: 0,
          why: "cinque monete d'oro.",
        },
        {
          skill: "infer",
          s: "親方の見た目と行動から言えることは？",
          o: [
            "怖そうだが、情に動かされる人",
            "優しそうだが冷たい人",
            "子どもが嫌いな人",
          ],
          a: 0,
          why: "faceva paura と si è commosso の対比です。",
        },
        {
          skill: "vocab",
          s: "「Aveva una lunga barba」が半過去なのは？",
          o: [
            "人物の様子を描いているから",
            "1回の出来事だから",
            "未来の話だから",
          ],
          a: 0,
          why: "様子や背景は半過去です。",
        },
        {
          skill: "ref",
          s: "gli ha dato の gli は誰？",
          o: ["ピノッキオ", "ジェッペット", "親方"],
          a: 0,
          why: "gli は「彼に」。金貨を受け取ったのはピノッキオです。",
        },
      ],
    },
    write: {
      task: "最近起きた小さな事件を、背景と出来事に分けて5つの文で書きましょう。",
      hints: [
        "Ieri pioveva ...（背景）",
        "Mentre ... ,（背景）",
        "All'improvviso ...（出来事）",
        "Alla fine ...",
      ],
      model:
        "Ieri pioveva e faceva freddo. Mentre andavo in ufficio, ho perso l'ombrello. All'improvviso è arrivato un collega. Mi ha dato il suo ombrello. Alla fine sono arrivato in tempo.",
      modelJa:
        "昨日は雨で寒かったです。会社に向かう途中で傘をなくしました。突然、同僚がやってきました。彼が傘を貸してくれました。結局、間に合いました。",
      check: [
        "背景を半過去で書いた",
        "出来事を近過去で書いた",
        "順序を示す語を使った",
      ],
    },
  },
  {
    id: "s4-pronomi",
    g: 4,
    title: "「それ」を言い換える",
    goal: "lo, la, li, le で名詞の繰り返しを避けられる",
    talk: [
      ["Commessa", "Le piace questa giacca?", "この上着はいかがですか？"],
      [
        "Cliente",
        "Sì, la prendo. E queste scarpe?",
        "はい、それをいただきます。それからこの靴は？",
      ],
      ["Commessa", "Le vuole provare?", "お試しになりますか？"],
      [
        "Cliente",
        "Sì, grazie. Dove sono i camerini?",
        "はい、ありがとう。試着室はどこですか？",
      ],
      ["Commessa", "Li trova in fondo a destra.", "奥の右手にございます。"],
      [
        "Cliente",
        "Perfetto. Ho visto anche una borsa, ma non la vedo più.",
        "完璧です。かばんも見たのですが、もう見当たりません。",
      ],
    ],
    words: [
      ["scarpe", "靴（複数）"],
      ["camerino", "試着室"],
      ["vestito", "服・ワンピース"],
      ["maglietta", "Tシャツ"],
      ["pantaloni", "ズボン（複数）"],
      ["taglia", "サイズ"],
      ["commesso", "店員", "女性は commessa"],
      ["cliente", "客", "男女同形"],
      ["sconto", "割引"],
      ["in fondo", "奥に"],
      ["provare", "試す・試着する"],
      ["costare", "値段がする"],
      ["economico", "安い", "反対は caro"],
    ],
    learn: [
      {
        h: "直接目的語の代名詞",
        body: "「それを・彼を」を表します。<b>lo</b>（男性単数）、<b>la</b>（女性単数）、<b>li</b>（男性複数）、<b>le</b>（女性複数）。さらに mi, ti, ci, vi（私を、君を…）があります。<b>動詞の前</b>に置くのが基本で、語順が日本語話者には難しい点です。",
        ex: [
          ["Compro il libro. → Lo compro.", "本を買う → それを買う。"],
          ["Vedo Anna. → La vedo.", "アンナに会う → 彼女に会う。"],
          ["Ti amo.", "君を愛している。"],
        ],
      },
      {
        h: "近過去では語尾が合う",
        body: "lo, la, li, le を近過去と使うと、過去分詞の語尾が代名詞に合います。lo, la は母音の前で <b>l'</b> になります。",
        ex: [
          ["Ho visto Anna. → L'ho vista.", "アンナを見た → 彼女を見た。"],
          [
            "Ho comprato le scarpe. → Le ho comprate.",
            "靴を買った → それを買った。",
          ],
        ],
      },
      {
        h: "原形の後ろにつくことも",
        body: "動詞の原形と使うときは、語尾の -e を取って後ろにつけられます。volere, potere, dovere と一緒なら前でも後ろでも構いません。",
        ex: [
          ["Voglio comprarlo.", "それを買いたい。"],
          ["Lo voglio comprare.", "それを買いたい。"],
        ],
      },
      {
        h: "le と Le の違い",
        body: "小文字 <b>le</b> は「それらを（女性複数）」と「彼女に」、大文字の <b>Le</b> は丁寧な「あなたに」です。Le piace? は「お好きですか？」。同じ形でも文脈で読み分けます。国語の「同じ音で意味が違う語」に当たります。",
        ex: [["Le piace questa giacca?", "この上着はお好きですか？"]],
      },
    ],
    gram: [
      {
        q: "Il libro? ___ compro domani.",
        o: ["Lo", "La", "Li"],
        a: 0,
        why: "libro は男性単数。",
      },
      {
        q: "La pizza? ___ mangio subito.",
        o: ["La", "Lo", "Le"],
        a: 0,
        why: "pizza は女性単数。",
      },
      {
        q: "I biglietti? ___ ho già.",
        o: ["Li", "Le", "Lo"],
        a: 0,
        why: "biglietti は男性複数。",
      },
      {
        q: "Le scarpe? ___ ho comprate ieri.",
        o: ["Le", "Li", "La"],
        a: 0,
        why: "scarpe は女性複数。語尾も -e です。",
      },
      {
        q: "Anna? L'ho ___ ieri.",
        o: ["vista", "visto", "visti"],
        a: 0,
        why: "la（女性単数）に合わせて vista。",
      },
      {
        q: "「それを買いたい」として正しいのは？",
        o: ["Voglio comprarlo.", "Voglio lo comprare.", "Comprarlo voglio."],
        a: 0,
        why: "原形の後ろにつけます。Lo voglio comprare も正解です。",
        say: "Voglio comprarlo.",
      },
      { t: "order", ja: "それ（上着）をいただきます。", it: ["La prendo."] },
      {
        t: "order",
        ja: "昨日、彼女に会いました。",
        it: ["L'ho vista ieri.", "Ieri l'ho vista."],
      },
    ],
    read: {
      kind: "物語（連載5）",
      title: "Pinocchio 5: La Volpe e il Gatto",
      lines: [
        [
          "Pinocchio camminava verso casa con le cinque monete.",
          "ピノッキオは5枚の金貨を持って家へ向かっていました。",
        ],
        [
          "Per strada ha incontrato una Volpe e un Gatto.",
          "途中でキツネとネコに出会いました。",
        ],
        [
          "«Che belle monete! Dove le hai trovate?» ha chiesto la Volpe.",
          "「なんてきれいな金貨！どこで見つけたの？」とキツネが尋ねました。",
        ],
        [
          "Poi ha detto: «Conosci il Campo dei Miracoli?»",
          "それから言いました。「奇跡の畑を知っているかい？」",
        ],
        [
          "«Se le metti sotto terra, domani troverai un albero pieno di monete!»",
          "「それを土に埋めれば、明日には金貨でいっぱいの木が見つかるよ！」",
        ],
        ["Pinocchio ci ha creduto e ha seguito la Volpe e il Gatto.", "ピノッキオはそれを信じ、キツネとネコについて行きました。"],
        ["Ma quei due erano davvero suoi amici?", "でも、その2匹は本当に彼の友達だったのでしょうか？"],
      ],
      gloss: [
        ["verso", "〜の方へ"],
        ["ha incontrato", "出会った"],
        ["volpe", "キツネ"],
        ["campo", "畑"],
        ["sotto terra", "土の中に"],
        ["albero", "木"],
        ["ci ha creduto", "それを信じた"],
      ],
      q: [
        {
          skill: "ref",
          s: "Dove le hai trovate? の le は？",
          o: ["金貨", "キツネとネコ", "畑"],
          a: 0,
          why: "女性複数の monete を指します。語尾も trovate です。",
        },
        {
          skill: "infer",
          s: "キツネとネコの本当の狙いは、何だと考えられる？",
          o: ["金貨を手に入れること", "ピノッキオを家に帰すこと", "畑を育てること"],
          a: 0,
          why: "金貨をほめて、土に埋めさせようとしています。最後の問いかけも手がかりです。本文に書かれていない部分を推測します。",
        },
        {
          skill: "main",
          s: "この話が教えていることに最も近いのは？",
          o: ["うまい話は疑うべきだ", "金貨は土に埋めるとよい", "動物は優しい"],
          a: 0,
          why: "うますぎる話と最後の問いかけから読み取れます。",
        },
        {
          skill: "fact",
          s: "「明日、金貨の木が見つかる」は、物語の中でどう位置づけられる？",
          o: ["キツネの作り話", "物語の中の事実", "筆者の感想"],
          a: 0,
          why: "キツネの言葉で、確かめられたことではありません。話された内容と事実を区別します。",
        },
      ],
    },
    write: {
      task: "買い物の場面の短い会話を4行で書きましょう。lo, la, li, le を2回以上使います。",
      hints: [
        "Ti piace questo/a ...?",
        "Sì, lo / la prendo.",
        "Dove li / le hai comprati/e?",
      ],
      model:
        "Ti piacciono queste scarpe? Sì, le prendo. Dove le hai viste? Le ho viste in fondo al negozio.",
      modelJa:
        "この靴は好き？うん、それを買うよ。どこで見つけたの？店の奥で見つけたよ。",
      check: [
        "代名詞を動詞の前に置いた",
        "代名詞の性数を名詞に合わせた",
        "近過去の語尾を代名詞に合わせた",
      ],
    },
  },
  {
    id: "s4-ricetta",
    g: 4,
    title: "レシピと指示",
    goal: "tu の命令形がわかり、手順の文章を読める",
    talk: [
      [
        "Luisa",
        "Vuoi imparare a fare la pasta al pomodoro?",
        "トマトパスタを覚えたい？",
      ],
      ["Aki", "Sì! Che cosa faccio?", "うん！何をすればいい？"],
      ["Luisa", "Prima metti l'acqua sul fuoco.", "まず、お湯を火にかけて。"],
      ["Aki", "E il sale?", "塩は？"],
      [
        "Luisa",
        "Aggiungilo quando l'acqua bolle. Non dimenticare!",
        "沸いたら入れて。忘れないでね！",
      ],
      ["Aki", "Va bene. Assaggia tu, poi!", "わかった。じゃあ後で味見してね！"],
    ],
    words: [
      ["ricetta", "レシピ"],
      ["sale", "塩", "男性名詞"],
      ["olio", "油"],
      ["aglio", "にんにく"],
      ["pomodoro", "トマト"],
      ["fuoco", "火"],
      ["pentola", "鍋"],
      ["padella", "フライパン"],
      ["tagliare", "切る"],
      ["aggiungere", "加える"],
      ["cuocere", "加熱する・煮る"],
      ["bollire", "沸騰する"],
      ["mescolare", "混ぜる"],
      ["assaggiare", "味見する"],
    ],
    learn: [
      {
        h: "tu の命令形",
        body: "-are は語尾が <b>-a</b>（parla!）、-ere と -ire は <b>-i</b>（prendi!, senti!）です。<br>noi は -iamo（andiamo! 行こう）、voi は現在形と同じ（parlate!）。",
        ex: [
          ["Mangia!", "食べなさい！"],
          ["Prendi il treno.", "電車に乗って。"],
          ["Andiamo!", "行こう！"],
        ],
      },
      {
        h: "否定の命令は non ＋原形",
        body: "tu への「〜しないで」は <b>non ＋ 動詞の原形</b> です。noi, voi は non ＋ ふつうの命令形です。",
        ex: [
          ["Non mangiare!", "食べないで！"],
          ["Non parlate!", "話さないで！（みなさん）"],
        ],
      },
      {
        h: "不規則な命令形",
        body: "よく使うものは短い形があります。andare → <b>va'</b>、fare → <b>fa'</b>、dare → <b>da'</b>、stare → <b>sta'</b>、dire → <b>di'</b>。essere → <b>sii</b>、avere → <b>abbi</b>。実際には vai, fai もよく使います。",
        ex: [
          ["Fa' attenzione!", "気をつけて！"],
          ["Sta' tranquillo!", "落ち着いて！"],
          ["Vai pure!", "どうぞ行って！"],
        ],
      },
      {
        h: "命令形と代名詞、「手順」の読み方",
        body: "tu の命令形では、代名詞が<b>後ろにつきます</b>：aggiungilo（それを加えて）、mangialo（それを食べて）。<br>レシピや説明書は、動作の順に並びます。<b>prima, poi, dopo, infine</b> と動詞に注目して読むと流れがつかめます。",
        ex: [
          ["Aggiungilo adesso.", "今それを加えて。"],
          ["Prendilo!", "それを取って！"],
        ],
      },
    ],
    gram: [
      {
        q: "___ la pasta! (mangiare, tu)",
        o: ["Mangia", "Mangi", "Mangiare"],
        a: 0,
        why: "-are の tu の命令形は -a。",
      },
      {
        q: "___ il treno! (prendere, tu)",
        o: ["Prendi", "Prenda", "Prende"],
        a: 0,
        why: "-ere の tu の命令形は -i。",
      },
      {
        q: "Non ___ ! (parlare, tu)",
        o: ["parlare", "parla", "parli"],
        a: 0,
        why: "否定の tu は non＋原形。",
      },
      {
        q: "「気をつけて！」はどれ？",
        o: ["Fa' attenzione!", "Fai attenzioni!", "Fa' attenzioni!"],
        a: 0,
        why: "fare の短い命令形です。",
        say: "Fa' attenzione!",
      },
      {
        q: "Il sale? ___ adesso!（それを加えて）",
        o: ["Aggiungilo", "Lo aggiungere", "Aggiungila"],
        a: 0,
        why: "命令形では代名詞が後ろにつきます。sale は男性名詞。",
      },
      {
        q: "「(みんなで)行こう！」はどれ？",
        o: ["Andiamo!", "Va'!", "Andate!"],
        a: 0,
        why: "noi の形です。",
        say: "Andiamo!",
      },
      { t: "order", ja: "忘れないで！", it: ["Non dimenticare!"] },
      {
        t: "order",
        ja: "まず、お湯を火にかけて。",
        it: ["Prima metti l'acqua sul fuoco."],
      },
    ],
    read: {
      kind: "手順を読む",
      title: "Pasta al pomodoro",
      lines: [
        [
          "Ingredienti per due persone: 200 grammi di pasta, 300 grammi di pomodori, uno spicchio d'aglio, olio, sale, basilico.",
          "材料（2人分）：パスタ200グラム、トマト300グラム、にんにく1かけ、油、塩、バジル。",
        ],
        [
          "Prima metti sul fuoco una pentola d'acqua.",
          "まず、水を入れた鍋を火にかけます。",
        ],
        [
          "Intanto taglia i pomodori e l'aglio.",
          "その間にトマトとにんにくを切ります。",
        ],
        [
          "Scalda l'olio in una padella e aggiungi l'aglio.",
          "フライパンで油を温め、にんにくを加えます。",
        ],
        [
          "Dopo un minuto aggiungi i pomodori e il sale. Cuoci per dieci minuti.",
          "1分後にトマトと塩を加え、10分加熱します。",
        ],
        [
          "Quando l'acqua bolle, metti il sale e la pasta.",
          "お湯が沸いたら、塩とパスタを入れます。",
        ],
        [
          "Scola la pasta e mescolala con il sugo.",
          "パスタの湯を切り、ソースと混ぜます。",
        ],
        [
          "Infine aggiungi il basilico e servi subito.",
          "最後にバジルを加え、すぐに出します。",
        ],
      ],
      gloss: [
        ["ingredienti", "材料"],
        ["spicchio d'aglio", "にんにく1かけ"],
        ["intanto", "その間に"],
        ["scalda", "温める"],
        ["scola", "湯を切る"],
        ["sugo", "ソース"],
        ["infine", "最後に"],
        ["servi", "（料理を）出す"],
      ],
      q: [
        {
          skill: "order",
          s: "最初にすることは？",
          o: ["水を入れた鍋を火にかける", "トマトを切る", "パスタを入れる"],
          a: 0,
          why: "Prima metti sul fuoco una pentola d'acqua.",
        },
        {
          skill: "order",
          s: "にんにくはいつフライパンに入れる？",
          o: ["油を温めた後", "トマトの後", "パスタの後"],
          a: 0,
          why: "Scalda l'olio ... e aggiungi l'aglio.",
        },
        {
          skill: "info",
          s: "4人分作るなら、パスタは何グラム？",
          o: ["400グラム", "200グラム", "300グラム"],
          a: 0,
          why: "2人分が200グラムです。",
        },
        {
          skill: "ref",
          s: "mescolala の la が指すものは？",
          o: ["パスタ", "ソース", "にんにく"],
          a: 0,
          why: "直前の la pasta（女性単数）です。",
        },
      ],
    },
    write: {
      task: "得意な料理か飲み物の作り方を、命令形で4つの文で書きましょう。",
      hints: ["Prima ...", "Poi ...", "Non dimenticare ...", "Infine ..."],
      model:
        "Prima metti l'acqua sul fuoco. Poi aggiungi il tè. Non dimenticare di spegnere il fuoco. Infine bevilo caldo.",
      modelJa:
        "まず水を火にかけます。それからお茶を入れます。火を消すのを忘れないでください。最後に温かいうちに飲みます。",
      check: [
        "tu の命令形の語尾を型に合わせた",
        "否定に non＋原形を使った",
        "手順の順序を示す語を入れた",
      ],
    },
  },
);
