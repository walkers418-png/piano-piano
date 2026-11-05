/* 段階2（小2相当・CEFR目安A1）：言いたいことを増やす。時制は現在形のみ。 */
window.KOKUGO.push(
  {
    id: "s2-giornata",
    g: 2,
    title: "私の一日",
    goal: "現在形の3つの型と時刻で、一日を話せる",
    talk: [
      ["Paolo", "A che ora ti svegli?", "何時に起きるの？"],
      ["Emi", "Mi sveglio alle sette.", "7時に起きるよ。"],
      ["Paolo", "E che cosa fai la mattina?", "朝は何をするの？"],
      [
        "Emi",
        "Faccio colazione e vado al lavoro.",
        "朝ごはんを食べて、仕事に行くよ。",
      ],
      ["Paolo", "Quando finisci di lavorare?", "仕事はいつ終わるの？"],
      ["Emi", "Di solito finisco alle sei.", "ふつうは6時に終わるよ。"],
    ],
    words: [
      ["mattina", "朝"],
      ["pomeriggio", "午後"],
      ["sera", "夕方・晩"],
      ["notte", "夜"],
      ["colazione", "朝食"],
      ["pranzo", "昼食"],
      ["cena", "夕食"],
      ["ora", "時間・時"],
      ["sempre", "いつも"],
      ["spesso", "よく・しばしば"],
      ["di solito", "ふつうは"],
      [
        "mai",
        "決して（non と一緒に）",
        "Non bevo mai caffè.＝コーヒーは全く飲まない",
      ],
      ["oggi", "今日"],
      ["domani", "明日"],
    ],
    learn: [
      {
        h: "現在形の3つの型",
        body: "動詞は原形の語尾で3つに分かれ、主語ごとに語尾が変わります。<br><b>-are</b>（parlare）：-o, -i, -a, -iamo, -ate, -ano<br><b>-ere</b>（leggere）：-o, -i, -e, -iamo, -ete, -ono<br><b>-ire</b>（dormire）：-o, -i, -e, -iamo, -ite, -ono<br>一部の -ire は -isc- が入ります（finisco, finisci, finisce, finiamo, finite, finiscono）。<br>全97語は「動詞」タブで確かめられます。",
        ex: [
          ["Parlo italiano.", "イタリア語を話します。"],
          ["Leggo un libro.", "本を読みます。"],
          ["Dormo otto ore.", "8時間眠ります。"],
        ],
      },
      {
        h: "辞書の引き方①：活用形から原形へ",
        body: "辞書には原形しか載っていません。parlo を調べるなら parlare、leggono なら leggere です。語尾を取って -are, -ere, -ire をつけてみましょう。vado（andare）や sono（essere）のような不規則形は、覚えるか「動詞」タブで調べます。",
        ex: [["Vado a casa.", "家に帰ります。（原形は andare）"]],
      },
      {
        h: "時刻の言い方",
        body: "「何時？」は <b>Che ore sono?</b>。答えは複数で <b>Sono le tre.</b>（3時）。1時だけ <b>È l'una.</b> です。「〜時に」は <b>alle</b>（1時は all'una）。分は e でつなぎます：le tre e dieci（3時10分）、le tre e mezza（3時半）。",
        ex: [
          ["Che ore sono?", "何時ですか？"],
          ["Sono le otto e mezza.", "8時半です。"],
          ["Comincio alle nove.", "9時に始めます。"],
        ],
      },
      {
        h: "再帰動詞（一日の動作）",
        body: "svegliarsi（目覚める）などは、動詞の前に mi, ti, si, ci, vi, si を置きます。「自分を起こす」という発想です。",
        ex: [
          ["Mi sveglio alle sette.", "7時に起きます。"],
          ["Ti lavi le mani.", "君は手を洗う。"],
        ],
      },
    ],
    gram: [
      {
        q: "Io ___ italiano. (parlare)",
        o: ["parlo", "parla", "parli"],
        a: 0,
        why: "io の語尾は -o。",
      },
      {
        q: "Noi ___ un libro. (leggere)",
        o: ["leggiamo", "leggete", "leggono"],
        a: 0,
        why: "noi はどの型も -iamo。",
      },
      {
        q: "Voi ___ alle otto. (partire)",
        o: ["partite", "partiamo", "partono"],
        a: 0,
        why: "-ire の voi は -ite。",
      },
      {
        q: "Lei ___ il lavoro alle sei. (finire)",
        o: ["finisce", "fine", "finite"],
        a: 0,
        why: "finire は -isc- 型。3人称単数は finisce。",
      },
      {
        q: "「vanno」を辞書で引くなら？",
        o: ["andare", "vannare", "venire"],
        a: 0,
        why: "vanno は andare の loro の形です。",
        say: "vanno",
      },
      {
        q: "___ le otto.（8時です）",
        o: ["Sono", "È", "Ho"],
        a: 0,
        why: "1時以外は Sono le ...。",
      },
      {
        t: "order",
        ja: "私は7時に起きます。",
        it: ["Mi sveglio alle sette.", "Alle sette mi sveglio."],
      },
      {
        t: "order",
        ja: "ふつうは6時に終わります。",
        it: ["Di solito finisco alle sei."],
      },
    ],
    read: {
      kind: "日記",
      title: "La giornata di Emi",
      lines: [
        [
          "Emi lavora in un'agenzia di viaggi a Tokyo.",
          "エミは東京の旅行会社で働いています。",
        ],
        [
          "La mattina si sveglia presto e prende il treno.",
          "朝は早く起きて、電車に乗ります。",
        ],
        ["Comincia a lavorare alle nove.", "9時に仕事を始めます。"],
        ["A mezzogiorno mangia con i colleghi.", "正午に同僚と食事をします。"],
        [
          "Finisce alle sei e poi va a lezione di italiano.",
          "6時に終わり、それからイタリア語の授業に行きます。",
        ],
        [
          "La sera è stanca, ma è contenta.",
          "夜は疲れていますが、満足しています。",
        ],
        [
          "Prima di dormire ascolta sempre una canzone italiana.",
          "寝る前にはいつもイタリアの歌を聴きます。",
        ],
      ],
      gloss: [
        ["agenzia di viaggi", "旅行会社"],
        ["presto", "早く"],
        ["colleghi", "同僚たち"],
        ["poi", "それから"],
        ["stanca / contenta", "疲れた／満足した（女性）"],
        ["prima di ...", "〜の前に"],
      ],
      q: [
        {
          skill: "order",
          s: "エミがイタリア語の授業に行くのはいつ？",
          o: ["仕事が終わった後", "昼食の前", "電車に乗る前"],
          a: 0,
          why: "Finisce alle sei e poi va a lezione. poi は順序を示します。",
        },
        {
          skill: "match",
          s: "エミの仕事は？",
          o: ["旅行会社の仕事", "イタリア語の教師", "電車の運転士"],
          a: 0,
          why: "lavora in un'agenzia di viaggi.",
        },
        {
          skill: "infer",
          s: "エミがイタリア語を勉強している気持ちとして最も合うのは？",
          o: [
            "疲れていても前向きに続けている",
            "仕事で仕方なくやっている",
            "もうやめたい",
          ],
          a: 0,
          why: "stanca, ma contenta と、毎晩イタリアの歌を聴く習慣から読み取れます。",
        },
        {
          skill: "vocab",
          s: "Prima di dormire の prima di の意味は？",
          o: ["〜の前に", "〜の後で", "〜の間に"],
          a: 0,
          why: "prima di ＋動詞の原形で「〜する前に」。",
        },
      ],
    },
    write: {
      task: "自分の一日を4つの文で書きましょう。時刻を2つ以上入れます。",
      hints: [
        "Mi sveglio alle ...",
        "Comincio a lavorare alle ...",
        "La sera ...",
        "poi（それから）",
      ],
      model:
        "Mi sveglio alle sette. Comincio a lavorare alle nove. Finisco alle sei e poi vado a casa. La sera studio l'italiano.",
      modelJa:
        "7時に起きます。9時に仕事を始めます。6時に終わり、それから家に帰ります。晩はイタリア語を勉強します。",
      check: [
        "動詞の語尾を io の形にした",
        "時刻に alle を使った",
        "poi で順序をつないだ",
      ],
    },
  },
  {
    id: "s2-citta",
    g: 2,
    title: "町と道案内",
    goal: "基本の前置詞で場所を説明し、道を尋ねられる",
    talk: [
      ["Turista", "Scusi, dov'è la stazione?", "すみません、駅はどこですか？"],
      [
        "Passante",
        "È vicino. Vada sempre dritto.",
        "近いですよ。まっすぐ行ってください。",
      ],
      ["Turista", "È lontano a piedi?", "歩くと遠いですか？"],
      [
        "Passante",
        "No, dieci minuti. Poi giri a destra.",
        "いいえ、10分です。それから右に曲がってください。",
      ],
      ["Turista", "Grazie mille!", "本当にありがとうございます。"],
      ["Passante", "Si figuri!", "どういたしまして。"],
    ],
    words: [
      ["stazione", "駅", "女性名詞"],
      ["piazza", "広場"],
      ["strada", "道"],
      ["ponte", "橋", "男性名詞"],
      ["chiesa", "教会"],
      ["museo", "博物館・美術館"],
      ["negozio", "店"],
      ["farmacia", "薬局"],
      ["ospedale", "病院", "男性名詞"],
      ["vicino", "近い"],
      ["lontano", "遠い"],
      ["destra", "右"],
      ["sinistra", "左"],
      ["dritto", "まっすぐ"],
    ],
    learn: [
      {
        h: "場所の前置詞 a と in",
        body: "町の名前には <b>a</b>（a Roma）、国や地方には <b>in</b>（in Italia）を使います。よく使う場所は in をつけて冠詞なしで言うことが多いです：in centro（中心街で）、in banca（銀行で）、in farmacia（薬局で）。家は <b>a casa</b>。",
        ex: [
          ["Abito a Roma.", "ローマに住んでいます。"],
          ["Vado in Italia.", "イタリアへ行きます。"],
          ["Sono a casa.", "家にいます。"],
        ],
      },
      {
        h: "di, da, con, per",
        body: "<b>di</b>：〜の（il libro di Anna）／出身（Sono di Osaka）<br><b>da</b>：〜から（Vengo da Tokyo）<br><b>con</b>：〜と一緒に（con Marco）<br><b>per</b>：〜のために・〜行きの（un biglietto per Roma）",
        ex: [
          ["Il libro di Anna è qui.", "アンナの本はここにあります。"],
          ["Vengo da Tokyo.", "東京から来ました。"],
        ],
      },
      {
        h: "形容詞は名詞の後ろが基本",
        body: "日本語と逆で、形容詞は多く名詞の<b>後ろ</b>に置き、性と数を合わせます。-o 型は -o, -a, -i, -e、-e 型は単数 -e、複数 -i です。bello, buono, grande, piccolo などは前に置くこともあります。",
        ex: [
          ["una strada lunga", "長い道"],
          ["i ragazzi simpatici", "感じのいい若者たち"],
          ["un buon caffè", "おいしいコーヒー"],
        ],
      },
      {
        h: "対になる語で覚える",
        body: "語彙は対で覚えると定着します。grande／piccolo（大きい／小さい）、vicino／lontano（近い／遠い）、aperto／chiuso（開いた／閉じた）、caldo／freddo（暑い／寒い）。国語の「対義語」の学習に当たります。",
        ex: [["Il museo è aperto.", "博物館は開いています。"]],
      },
    ],
    gram: [
      {
        q: "Abito ___ Milano.",
        o: ["a", "in", "di"],
        a: 0,
        why: "町の名前には a。",
      },
      { q: "Vado ___ Italia.", o: ["in", "a", "da"], a: 0, why: "国には in。" },
      {
        q: "Sono ___ Osaka.（大阪の出身です）",
        o: ["di", "a", "con"],
        a: 0,
        why: "出身は di。",
      },
      {
        q: "Vengo ___ Tokyo.",
        o: ["da", "di", "in"],
        a: 0,
        why: "「〜から来る」は venire da。",
      },
      {
        q: "「長い道」はどれ？",
        o: ["una strada lunga", "una lunga strade", "una strada lungo"],
        a: 0,
        why: "strada は女性単数なので lunga。",
        say: "una strada lunga",
      },
      {
        q: "vicino の反対の語は？",
        o: ["lontano", "piccolo", "chiuso"],
        a: 0,
        why: "vicino（近い）⇄ lontano（遠い）。",
        say: "lontano",
      },
      {
        t: "order",
        ja: "すみません、駅はどこですか？",
        it: ["Scusi, dov'è la stazione?"],
      },
      { t: "order", ja: "右に曲がってください。", it: ["Giri a destra."] },
    ],
    read: {
      kind: "お知らせを読む",
      title: "Museo della Città",
      lines: [
        [
          "Il Museo della Città è in Piazza Dante, vicino alla stazione.",
          "市立博物館はダンテ広場にあり、駅の近くです。",
        ],
        [
          "Orario: dal martedì alla domenica, dalle 10 alle 18.",
          "開館時間：火曜から日曜、10時から18時まで。",
        ],
        ["Il lunedì il museo è chiuso.", "月曜日は休館です。"],
        ["Biglietto intero: 8 euro.", "一般料金：8ユーロ"],
        [
          "Biglietto ridotto: 5 euro, per studenti e over 65.",
          "割引料金：5ユーロ、学生と65歳以上。",
        ],
        [
          "Ingresso gratuito per i bambini sotto i 6 anni.",
          "6歳未満の子どもは入場無料。",
        ],
        ["Dalla stazione, cinque minuti a piedi.", "駅から徒歩5分。"],
      ],
      gloss: [
        ["orario", "開館時間・時刻表"],
        ["biglietto intero / ridotto", "一般料金／割引料金"],
        ["ingresso gratuito", "入場無料"],
        ["sotto i 6 anni", "6歳未満"],
        ["a piedi", "徒歩で"],
      ],
      q: [
        {
          skill: "info",
          s: "月曜日の午前11時に行くと？",
          o: ["閉まっている", "開いている", "無料で入れる"],
          a: 0,
          why: "Il lunedì il museo è chiuso.",
        },
        {
          skill: "info",
          s: "学生のタクヤと、4歳の子ども。2人で合計いくら？",
          o: ["5ユーロ", "8ユーロ", "13ユーロ"],
          a: 0,
          why: "学生は5ユーロ、6歳未満は無料です。",
        },
        {
          skill: "info",
          s: "70歳の人の料金は？",
          o: ["5ユーロ", "8ユーロ", "無料"],
          a: 0,
          why: "over 65 は割引料金です。",
        },
        {
          skill: "main",
          s: "この文章の目的は？",
          o: ["博物館の利用案内", "町の歴史の説明", "ダンテの紹介"],
          a: 0,
          why: "場所、時間、料金という利用に必要な情報を並べています。",
        },
      ],
    },
    write: {
      task: "あなたの家の近くにあるものを、3つの文で説明しましょう。",
      hints: [
        "Abito a ...",
        "Vicino a casa mia c'è ...",
        "Ci sono ...",
        "形容詞の語尾を合わせる",
      ],
      model:
        "Abito a Osaka. Vicino a casa mia c'è una piccola stazione. Ci sono anche due negozi e una farmacia.",
      modelJa:
        "大阪に住んでいます。家の近くに小さな駅があります。店が2軒と薬局も1軒あります。",
      check: [
        "c'è と ci sono を使い分けた",
        "形容詞を名詞の性に合わせた",
        "町の名前に a を使った",
      ],
    },
  },
  {
    id: "s2-famiglia",
    g: 2,
    title: "人を説明する",
    goal: "所有形容詞と形容詞で家族や友達を説明できる",
    talk: [
      ["Sofia", "Chi è questa ragazza nella foto?", "写真のこの女の子は誰？"],
      [
        "Ken",
        "È mia sorella. Si chiama Aya.",
        "僕の妹だよ。アヤっていうんだ。",
      ],
      ["Sofia", "È molto carina! Quanti anni ha?", "とてもかわいいね！何歳？"],
      [
        "Ken",
        "Ha ventitré anni. È alta e molto simpatica.",
        "23歳。背が高くて、とても感じがいいよ。",
      ],
      ["Sofia", "Che lavoro fa?", "仕事は何をしているの？"],
      ["Ken", "Fa l'infermiera a Kyoto.", "京都で看護師をしているよ。"],
    ],
    words: [
      ["padre", "父"],
      ["madre", "母"],
      ["figlio", "息子", "娘は figlia"],
      ["marito", "夫"],
      ["moglie", "妻"],
      ["ragazzo", "若者・男の子・彼氏", "女性形は ragazza"],
      ["bambino", "子ども", "女の子は bambina"],
      ["alto", "背が高い"],
      ["basso", "背が低い"],
      ["giovane", "若い"],
      ["vecchio", "年老いた・古い"],
      ["simpatico", "感じのいい", "複数は simpatici"],
      ["bravo", "上手な・立派な"],
      ["gentile", "親切な"],
    ],
    learn: [
      {
        h: "所有形容詞は冠詞とセット",
        body: "「私の」は mio / mia / miei / mie、「君の」は tuo / tua / tuoi / tue、「彼・彼女の」は suo / sua / suoi / sue。<b>持ち主ではなく、持たれる物の性数</b>に合わせ、ふつう定冠詞をつけます：il mio libro、la mia casa。<br>ただし mio, tuo, suo などで<b>単数の家族</b>を言うときは冠詞をつけません：mia madre。loro は必ずつけ（la loro madre）、mamma や fratellino のような愛称にもつけます。",
        ex: [
          ["La mia casa è piccola.", "私の家は小さいです。"],
          ["Mio padre è gentile.", "父は親切です。"],
          ["I miei amici sono qui.", "私の友達はここにいます。"],
        ],
      },
      {
        h: "職業は fare で言う",
        body: "職業は <b>fare ＋ 定冠詞 ＋ 職業</b>か、<b>essere ＋ 職業</b>（冠詞なし）で言います。尋ねるときは Che lavoro fai?（Lei には Che lavoro fa?）です。",
        ex: [
          ["Faccio l'insegnante.", "教師をしています。"],
          ["Sono medico.", "医者です。"],
        ],
      },
      {
        h: "質問の言葉",
        body: "<b>chi</b> 誰、<b>che / che cosa</b> 何、<b>dove</b> どこ、<b>quando</b> いつ、<b>come</b> どのように、<b>perché</b> なぜ、<b>quanto</b> どのくらい。perché は「なぜなら」の意味でも使います。",
        ex: [
          ["Dove abiti?", "どこに住んでいるの？"],
          ["Perché studi l'italiano?", "なぜイタリア語を勉強しているの？"],
          ["Perché mi piace.", "好きだからです。"],
        ],
      },
      {
        h: "語の家族（語彙を増やす）",
        body: "小さいものを表す <b>-ino</b>、大きいものを表す <b>-one</b> をつけると語が増えます：gatto → gattino（子猫）、libro → librone（大きな本）、casa → casetta（小さな家）。国語の「語の成り立ち」に当たります。",
        ex: [["Ho un gattino.", "子猫を飼っています。"]],
      },
    ],
    gram: [
      {
        q: "___ casa è piccola.（私の家）",
        o: ["La mia", "Il mio", "Mia"],
        a: 0,
        why: "casa は女性単数。冠詞が必要です。",
      },
      {
        q: "___ madre è italiana.（私の母）",
        o: ["Mia", "La mia", "Mio"],
        a: 0,
        why: "mia ＋mia ＋単数の家族には冠詞をつけません。",
      },
      {
        q: "___ amici sono qui.（私の友達）",
        o: ["I miei", "Le mie", "Il mio"],
        a: 0,
        why: "amici は男性複数。",
      },
      {
        q: "___ abiti?（どこに）",
        o: ["Dove", "Chi", "Quando"],
        a: 0,
        why: "dove は「どこ」。",
      },
      {
        q: "「子猫」はどれ？",
        o: ["gattino", "gattone", "gatta"],
        a: 0,
        why: "-ino は小さいものを表します。",
        say: "gattino",
      },
      {
        q: "mio padre の padre を gentile で説明すると？",
        o: [
          "Mio padre è gentile.",
          "Mio padre è gentila.",
          "Mio padre sono gentile.",
        ],
        a: 0,
        why: "gentile は男女同形。3人称単数は è。",
        say: "Mio padre è gentile.",
      },
      {
        t: "order",
        ja: "私の妹はとても感じがいいです。",
        it: ["Mia sorella è molto simpatica."],
      },
      { t: "order", ja: "お仕事は何ですか？（Lei）", it: ["Che lavoro fa?"] },
    ],
    read: {
      kind: "説明文",
      title: "La famiglia italiana di oggi",
      lines: [
        [
          "Molti dicono che in Italia le famiglie sono sempre grandi.",
          "イタリアの家族はいつも大家族だと、多くの人が言います。",
        ],
        ["Oggi non è più così.", "今はもうそうではありません。"],
        [
          "Molte coppie hanno un solo figlio.",
          "子どもが1人だけの夫婦も多いです。",
        ],
        [
          "Però la famiglia resta molto importante.",
          "けれども、家族はとても大切なままです。",
        ],
        [
          "La domenica molti italiani pranzano ancora con i genitori.",
          "日曜日に両親と昼食をとるイタリア人は今も多いです。",
        ],
        [
          "Secondo me, questa è una bella abitudine.",
          "私の考えでは、これは良い習慣です。",
        ],
      ],
      gloss: [
        ["non ... più", "もう〜ない"],
        ["coppie", "夫婦・カップル"],
        ["però", "しかし"],
        ["genitori", "両親"],
        ["secondo me", "私の考えでは"],
        ["abitudine", "習慣"],
      ],
      q: [
        {
          skill: "main",
          s: "筆者の言いたいことに最も近いのは？",
          o: [
            "家族の形は変わったが、大切さは変わらない",
            "イタリアの家族は今も大家族だ",
            "日曜の昼食はなくなった",
          ],
          a: 0,
          why: "Oggi non è più così と Però la famiglia resta molto importante が要点です。",
        },
        {
          skill: "fact",
          s: "「Secondo me, questa è una bella abitudine.」は？",
          o: ["筆者の意見", "統計で確かめた事実"],
          a: 0,
          why: "secondo me（私の考えでは）は意見を示す目印です。",
        },
        {
          skill: "ref",
          s: "questa（これ）が指すものは？",
          o: [
            "日曜に両親と昼食をとること",
            "1人っ子が多いこと",
            "大家族であること",
          ],
          a: 0,
          why: "直前の文の内容を指しています。",
        },
        {
          skill: "vocab",
          s: "non è più così の意味は？",
          o: ["もうそうではない", "もっとそうだ", "まだそうだ"],
          a: 0,
          why: "non ... più で「もう〜ない」。",
        },
      ],
    },
    write: {
      task: "家族か友達を1人選び、4つの文で紹介しましょう。",
      hints: [
        "Si chiama ...",
        "Ha ... anni.",
        "Fa il / la ...",
        "È ... e ...（形容詞を2つ）",
      ],
      model:
        "Mia sorella si chiama Aya. Ha ventitré anni. Fa l'infermiera a Kyoto. È alta e molto simpatica.",
      modelJa:
        "妹の名前はアヤです。23歳です。京都で看護師をしています。背が高くて、とても感じがいいです。",
      check: [
        "単数の家族に冠詞をつけなかった",
        "形容詞の語尾をその人の性に合わせた",
        "fare か essere で職業を書いた",
      ],
    },
  },
  {
    id: "s2-tempo",
    g: 2,
    title: "季節と祝日",
    goal: "天気と日付を言い、イタリアの年中行事を知る",
    talk: [
      ["Giulia", "Che tempo fa oggi a Osaka?", "今日の大阪の天気はどう？"],
      ["Riku", "Fa molto caldo e c'è il sole.", "とても暑くて、晴れているよ。"],
      ["Giulia", "Qui a Torino piove.", "ここトリノは雨だよ。"],
      ["Riku", "Quando vieni in Giappone?", "いつ日本に来るの？"],
      ["Giulia", "In primavera, ad aprile.", "春、4月だよ。"],
      [
        "Riku",
        "Perfetto! Aprile è bellissimo.",
        "完璧！4月はすごくきれいだよ。",
      ],
    ],
    words: [
      ["primavera", "春"],
      ["estate", "夏", "女性名詞"],
      ["autunno", "秋"],
      ["inverno", "冬"],
      ["sole", "太陽"],
      ["pioggia", "雨"],
      ["neve", "雪"],
      ["vento", "風"],
      ["caldo", "暑い・熱い"],
      ["freddo", "寒い・冷たい"],
      ["festa", "祝日・パーティー"],
      ["Natale", "クリスマス"],
      ["Pasqua", "復活祭"],
      ["mare", "海"],
    ],
    learn: [
      {
        h: "天気は fare で言う",
        body: "「天気はどう？」は <b>Che tempo fa?</b>。答えは <b>Fa caldo.</b>（暑い）、<b>Fa freddo.</b>（寒い）、<b>Piove.</b>（雨が降る）、<b>Nevica.</b>（雪が降る）、<b>C'è il sole.</b>（晴れている）、<b>C'è vento.</b>（風がある）です。",
        ex: [
          ["Che tempo fa?", "天気はどう？"],
          ["Oggi piove.", "今日は雨です。"],
        ],
      },
      {
        h: "月と曜日、日付",
        body: "月は小文字で書きます：gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre。<br>曜日も小文字：lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica。<br>日付は <b>il ＋ 数</b>（il 5 maggio）。1日だけ <b>il primo</b> です。",
        ex: [
          ["Oggi è il primo maggio.", "今日は5月1日です。"],
          ["Vengo a giugno.", "6月に来ます。"],
        ],
      },
      {
        h: "序数（〜番目）",
        body: "primo（1番目）, secondo, terzo, quarto, quinto, sesto, settimo, ottavo, nono, decimo。形容詞なので性数を合わせます：la prima volta（1回目）。",
        ex: [["È la prima volta in Italia.", "イタリアは初めてです。"]],
      },
      {
        h: "イタリアの年中行事（言語文化）",
        body: "<b>Capodanno</b>（元日）、<b>Epifania</b>（1月6日）、<b>Pasqua</b>（復活祭・春）、<b>Festa della Repubblica</b>（6月2日）、<b>Ferragosto</b>（8月15日・夏の休暇の中心）、<b>Natale</b>（12月25日）。「Buon Natale!」「Buona Pasqua!」のように <b>Buon(a)</b> で祝います。ことわざに <b>Natale con i tuoi, Pasqua con chi vuoi</b>（クリスマスは家族と、復活祭は好きな人と）があります。",
        ex: [
          ["Buon Natale!", "メリークリスマス！"],
          [
            "Natale con i tuoi, Pasqua con chi vuoi.",
            "クリスマスは家族と、復活祭は好きな人と。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "Oggi ___ caldo.",
        o: ["fa", "è", "ha"],
        a: 0,
        why: "天気は fare を使います。",
      },
      {
        q: "Oggi ___ il sole.",
        o: ["c'è", "fa", "ci sono"],
        a: 0,
        why: "C'è il sole.（晴れている）",
      },
      {
        q: "Vengo in Italia ___ maggio.",
        o: ["a", "di", "su"],
        a: 0,
        why: "月には a を使います（in maggio とも言います）。",
      },
      {
        q: "「5月1日」の言い方は？",
        o: ["il primo maggio", "il uno maggio", "la prima maggio"],
        a: 0,
        why: "1日だけ序数を使います。",
        say: "il primo maggio",
      },
      {
        q: "「初めて」はどれ？",
        o: ["la prima volta", "il primo volta", "la primo volta"],
        a: 0,
        why: "volta は女性名詞。",
        say: "la prima volta",
      },
      {
        q: "月や曜日の書き方として正しいのは？",
        o: ["小文字で書く", "大文字で書く", "必ず冠詞をつける"],
        a: 0,
        why: "イタリア語では、月と曜日は文中で小文字です。",
      },
      { t: "order", ja: "天気はどうですか？", it: ["Che tempo fa?"] },
      { t: "order", ja: "ここは雨が降っています。", it: ["Qui piove."] },
    ],
    read: {
      kind: "説明文",
      title: "Ferragosto",
      lines: [
        [
          "Il 15 agosto in Italia è Ferragosto.",
          "8月15日はイタリアのフェラゴストです。",
        ],
        ["È una festa molto antica.", "とても古い祝日です。"],
        ["In questo periodo fa molto caldo.", "この時期はとても暑いです。"],
        [
          "Per questo molti italiani vanno al mare o in montagna.",
          "そのため、多くのイタリア人は海や山へ行きます。",
        ],
        [
          "Nelle grandi città molti negozi sono chiusi.",
          "大都市では多くの店が閉まっています。",
        ],
        [
          "Se visiti l'Italia in agosto, controlla sempre gli orari!",
          "8月にイタリアを訪ねるなら、営業時間を必ず確かめましょう！",
        ],
      ],
      gloss: [
        ["antica", "古い"],
        ["periodo", "時期"],
        ["per questo", "そのため"],
        ["montagna", "山"],
        ["se", "もし〜なら"],
        ["controlla", "確かめなさい（tu）"],
      ],
      q: [
        {
          skill: "match",
          s: "フェラゴストはいつ？",
          o: ["8月15日", "6月2日", "12月25日"],
          a: 0,
          why: "Il 15 agosto.",
        },
        {
          skill: "ref",
          s: "Per questo（そのため）の「その」とは？",
          o: [
            "この時期がとても暑いこと",
            "店が閉まっていること",
            "祝日が古いこと",
          ],
          a: 0,
          why: "直前の文 fa molto caldo が理由です。",
        },
        {
          skill: "infer",
          s: "8月のミラノ旅行で起こりそうなことは？",
          o: [
            "行きたい店が閉まっている",
            "どの店も24時間開いている",
            "海が近くなる",
          ],
          a: 0,
          why: "大都市の店の多くが閉まるとあります。",
        },
        {
          skill: "main",
          s: "筆者が旅行者に最も伝えたいことは？",
          o: ["8月は営業時間を確かめること", "海へ行くべきこと", "祝日の歴史"],
          a: 0,
          why: "最後の文が読者への呼びかけです。",
        },
      ],
    },
    write: {
      task: "今日の天気と、好きな季節とその理由を書きましょう。",
      hints: [
        "Oggi fa ... / Oggi piove.",
        "Mi piace ...（季節）",
        "perché ...（なぜなら）",
      ],
      model:
        "Oggi fa freddo e c'è vento. Mi piace la primavera perché non fa caldo e posso camminare nel parco.",
      modelJa:
        "今日は寒くて風があります。春が好きです。暑くなく、公園を歩けるからです。",
      check: [
        "天気に fare を使った",
        "perché で理由をつないだ",
        "季節に定冠詞をつけた",
      ],
    },
  },
);
