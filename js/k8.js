/* 追加の文法単元（M3）。語の作り方、書き言葉の時制、原文を読むための知識、文章の種類。 */
window.KOKUGO.push(
  {
    id: "s3-grandi",
    g: 3,
    title: "大きな数と年",
    goal: "値段、人口、年号を読み聞きできる",
    talk: [
      ["Ana", "Quanto costa questa macchina?", "この車はいくら？"],
      ["Rob", "Dodicimila euro.", "1万2千ユーロだよ。"],
      ["Ana", "E in che anno è stata fatta?", "何年に作られたの？"],
      ["Rob", "Nel duemilaquindici.", "2015年だよ。"],
      ["Ana", "Quanti abitanti ha il tuo paese?", "君の村の人口は？"],
      ["Rob", "Circa tremila.", "約3千人だよ。"],
    ],
    words: [
      ["cento", "100"],
      ["duecento", "200"],
      ["mille", "1000"],
      ["duemila", "2000"],
      ["diecimila", "1万"],
      ["centomila", "10万"],
      ["un milione", "100万"],
      ["un miliardo", "10億"],
      ["abitanti", "住民"],
      ["circa", "およそ"],
    ],
    learn: [
      {
        h: "数の組み立て",
        body: "100は <b>cento</b>、200は <b>duecento</b>。1000は <b>mille</b> ですが、2000以上は <b>-mila</b> です（duemila）。数は続けて1語で書きます：duecentotrenta（230）。1万は <b>diecimila</b> で、日本語の「万」のような単位はなく、「10千」と考えます。",
        ex: [
          ["duecentotrenta", "230"],
          ["diecimila", "1万"],
        ],
      },
      {
        h: "milione と miliardo",
        body: "milione と miliardo は名詞で、複数形があります。名詞が直接続くときは <b>di</b> がつきます（due milioni di persone）。数が続くときはつきません（due milioni e mezzo）。",
        ex: [
          [
            "Roma ha quasi tre milioni di abitanti.",
            "ローマの人口は約300万人です。",
          ],
        ],
      },
      {
        h: "年号と点の使い方",
        body: "年は定冠詞をつけて <b>nel 1945</b>（1945年に）と言い、millenovecentoquarantacinque と読みます。イタリア語では、千の位に点、小数にコンマを使います：1.500（千五百）、2,5（2.5）。日本と逆なので注意します。",
        ex: [["Sono nato nel 1990.", "1990年に生まれました。"]],
      },
    ],
    gram: [
      {
        q: "2000 はどれ？",
        o: ["duemila", "duemille", "due mille cento"],
        a: 0,
        why: "2000以上は -mila。",
        say: "duemila",
      },
      {
        q: "「1万」はどれ？",
        o: ["diecimila", "un miliardo", "centomila"],
        a: 0,
        why: "dieci＋mila です。",
        say: "diecimila",
      },
      {
        q: "Due milioni ___ persone.",
        o: ["di", "a", "per"],
        a: 0,
        why: "milione の後は di。",
      },
      {
        q: "「1945年に」はどれ？",
        o: ["nel 1945", "al 1945", "da 1945"],
        a: 0,
        why: "年は nel。",
      },
      {
        q: "イタリアの表記 2,5 の意味は？",
        o: ["2.5", "2500", "25"],
        a: 0,
        why: "コンマは小数点です。",
      },
      {
        q: "イタリアの表記 1.500 の意味は？",
        o: ["1500", "1.5", "15"],
        a: 0,
        why: "点は千の位の区切りです。",
      },
      { t: "order", ja: "1990年に生まれました。", it: ["Sono nato nel 1990."] },
      { t: "order", ja: "約3千人です。", it: ["Circa tremila persone."] },
    ],
    read: {
      kind: "資料を読む",
      title: "Tre città",
      lines: [
        ["Roma ha quasi 2.800.000 abitanti.", "ローマの人口は約280万人です。"],
        ["Milano ne ha circa 1.400.000.", "ミラノは約140万人です。"],
        ["Siena ne ha poco più di 50.000.", "シエナは5万人強です。"],
        [
          "Ogni anno Roma riceve milioni di turisti.",
          "ローマには毎年何百万人もの観光客が来ます。",
        ],
        [
          "Siena, invece, è famosa per il Palio, una corsa che esiste dal Medioevo.",
          "一方シエナは、中世から続く競馬パーリオで有名です。",
        ],
      ],
      gloss: [
        ["ne ha", "それを持っている（人口）"],
        ["poco più di", "〜強"],
      ],
      q: [
        {
          skill: "info",
          s: "人口が最も少ないのは？",
          o: ["シエナ", "ローマ", "ミラノ"],
          a: 0,
          why: "50.000 は5万です。",
        },
        {
          skill: "info",
          s: "ミラノの人口は？",
          o: ["約140万人", "約14万人", "約1400人"],
          a: 0,
          why: "点は千の位の区切りです。",
        },
        {
          skill: "ref",
          s: "Milano ne ha の ne は？",
          o: ["住民", "観光客", "競馬"],
          a: 0,
          why: "前の abitanti を受けています。",
        },
      ],
    },
    write: {
      task: "住んでいる町の人口と、生まれた年を書きましょう。",
      hints: ["... ha circa ... abitanti.", "Sono nato/a nel ..."],
      model:
        "Osaka ha circa due milioni e settecentomila abitanti. Sono nato nel 1990.",
      modelJa: "大阪の人口は約270万人です。私は1990年に生まれました。",
      check: ["名詞が続くとき milioni の後に di を入れた", "年に nel を使った"],
    },
  },
  {
    id: "s3-verbiprep",
    g: 3,
    title: "動詞と前置詞の組み合わせ",
    goal: "cominciare a, finire di など、前置詞が決まっている動詞を使える",
    talk: [
      ["Mia", "Quando cominci a lavorare?", "いつ働き始めるの？"],
      [
        "Leo",
        "Comincio a lavorare lunedì. Ho finito di studiare.",
        "月曜から働き始めるよ。勉強は終えたんだ。",
      ],
      ["Mia", "Hai provato a chiamare Anna?", "アンナに電話してみた？"],
      [
        "Leo",
        "Sì, ma ho dimenticato di dirle l'ora.",
        "うん、でも時間を伝え忘れた。",
      ],
      ["Mia", "Cerca di richiamarla.", "もう一度かけるようにして。"],
      [
        "Leo",
        "Ti ringrazio di avermelo ricordato.",
        "思い出させてくれてありがとう。",
      ],
    ],
    words: [
      ["cominciare a", "〜し始める"],
      ["imparare a", "〜できるようになる"],
      ["provare a", "〜してみる"],
      ["riuscire a", "うまく〜できる"],
      ["continuare a", "〜し続ける"],
      ["finire di", "〜し終える"],
      ["smettere di", "〜するのをやめる"],
      ["cercare di", "〜しようと努める"],
      ["dimenticare di", "〜し忘れる"],
      ["decidere di", "〜しようと決める"],
      ["sperare di", "〜したいと望む"],
      ["aiutare a", "〜するのを手伝う"],
    ],
    learn: [
      {
        h: "前置詞は動詞ごとに決まる",
        body: "動詞の原形を続けるとき、<b>a</b> を取る動詞、<b>di</b> を取る動詞、何も取らない動詞があります。規則はないので、組み合わせで覚えます。",
        ex: [
          ["Comincio a studiare.", "勉強し始めます。"],
          ["Finisco di mangiare.", "食べ終えます。"],
          ["Voglio dormire.", "眠りたいです。"],
        ],
      },
      {
        h: "前置詞を取らない動詞",
        body: "volere, potere, dovere, sapere, preferire、そして piacere（mi piace nuotare）, bisogna には前置詞は不要です。",
        ex: [
          ["Preferisco restare a casa.", "家にいる方がいいです。"],
          ["Bisogna partire.", "出発する必要があります。"],
        ],
      },
      {
        h: "動詞と名詞の場合",
        body: "<b>pensare a</b>（〜のことを考える）、<b>parlare di</b>（〜について話す）、<b>credere a / in</b>（〜を信じる）、<b>aver bisogno di</b>（〜が必要だ）。日本語の助詞と対応しないので、例文で覚えます。",
        ex: [
          ["Penso a te.", "君のことを考えています。"],
          ["Ho bisogno di aiuto.", "助けが必要です。"],
        ],
      },
    ],
    gram: [
      {
        q: "Comincio ___ studiare.",
        o: ["a", "di", "per"],
        a: 0,
        why: "cominciare a。",
      },
      {
        q: "Ho finito ___ mangiare.",
        o: ["di", "a", "in"],
        a: 0,
        why: "finire di。",
      },
      {
        q: "Cerco ___ capire.",
        o: ["di", "a", "per il"],
        a: 0,
        why: "cercare di。",
      },
      {
        q: "Non riesco ___ dormire.",
        o: ["a", "di", "su"],
        a: 0,
        why: "riuscire a。",
      },
      {
        q: "Ho bisogno ___ aiuto.",
        o: ["di", "a", "con"],
        a: 0,
        why: "aver bisogno di。",
      },
      {
        q: "「眠りたい」はどれ？",
        o: ["Voglio dormire.", "Voglio a dormire.", "Voglio di dormire."],
        a: 0,
        why: "volere は前置詞なし。",
        say: "Voglio dormire.",
      },
      {
        t: "order",
        ja: "たばこをやめようと決めました。",
        it: ["Ho deciso di smettere di fumare."],
      },
      { t: "order", ja: "君のことを考えています。", it: ["Penso a te."] },
    ],
    read: {
      kind: "日記",
      title: "Un nuovo inizio",
      lines: [
        [
          "Quest'anno ho deciso di cambiare vita.",
          "今年は生活を変えようと決めました。",
        ],
        [
          "Ho smesso di fumare e ho cominciato a correre.",
          "たばこをやめ、走り始めました。",
        ],
        [
          "All'inizio non riuscivo a fare più di due chilometri.",
          "最初は2キロ以上走れませんでした。",
        ],
        [
          "Ma ho continuato a provare, e ora ne faccio dieci.",
          "でも試し続けて、今は10キロ走ります。",
        ],
        ["Ora spero di imparare a nuotare.", "今は泳げるようになりたいです。"],
      ],
      gloss: [["ne faccio dieci", "10キロ走る"]],
      q: [
        {
          skill: "match",
          s: "筆者がやめたことは？",
          o: ["たばこ", "走ること", "泳ぐこと"],
          a: 0,
          why: "Ho smesso di fumare.",
        },
        {
          skill: "order",
          s: "順序が正しいのは？",
          o: [
            "2キロしか走れない→10キロ走れる",
            "10キロ走れる→2キロしか走れない",
            "泳げる→走れる",
          ],
          a: 0,
          why: "All'inizio と ora が目印です。",
        },
        {
          skill: "infer",
          s: "次の目標は？",
          o: ["泳げるようになる", "たばこを始める", "走るのをやめる"],
          a: 0,
          why: "spero di imparare a nuotare.",
        },
      ],
    },
    write: {
      task: "今年始めたこと、やめたこと、続けたいことを書きましょう。",
      hints: [
        "Ho cominciato a ...",
        "Ho smesso di ...",
        "Voglio continuare a ...",
      ],
      model:
        "Ho cominciato a studiare l'italiano. Ho smesso di guardare troppa televisione. Voglio continuare a leggere ogni giorno.",
      modelJa:
        "イタリア語の勉強を始めました。テレビを見過ぎるのをやめました。毎日読み続けたいです。",
      check: ["a と di を動詞に合わせた", "voglio の後に前置詞を入れなかった"],
    },
  },
  {
    id: "s3-avverbi",
    g: 3,
    title: "副詞の作り方",
    goal: "-mente の副詞を作り、頻度の言葉を使える",
    talk: [
      ["Eva", "Parli bene l'italiano!", "イタリア語が上手だね！"],
      [
        "Ken",
        "Grazie, ma parlo lentamente.",
        "ありがとう、でもゆっくりしか話せないよ。",
      ],
      ["Eva", "Studi regolarmente?", "規則的に勉強してるの？"],
      ["Ken", "Sì, di solito un'ora al giorno.", "うん、ふつう1日1時間。"],
      [
        "Eva",
        "Ascolti spesso la radio italiana?",
        "イタリアのラジオはよく聞く？",
      ],
      ["Ken", "Raramente, ma leggo molto.", "あまり聞かないけど、よく読むよ。"],
    ],
    words: [
      ["lentamente", "ゆっくり"],
      ["velocemente", "速く"],
      ["facilmente", "簡単に"],
      ["regolarmente", "規則的に"],
      ["veramente", "本当に"],
      ["raramente", "めったに〜ない"],
      ["di solito", "ふつうは"],
      ["ogni tanto", "時々"],
      ["a volte", "時々"],
      ["sempre", "いつも"],
      ["spesso", "よく"],
      ["mai", "決して"],
    ],
    learn: [
      {
        h: "-mente の作り方",
        body: "形容詞の<b>女性形</b>に -mente をつけます：lento → lenta → <b>lentamente</b>。-e で終わる語はそのまま：veloce → <b>velocemente</b>。-le, -re で終わる語は e を落とします：facile → <b>facilmente</b>、regolare → <b>regolarmente</b>。",
        ex: [
          ["Parla lentamente, per favore.", "ゆっくり話してください。"],
          ["Si fa facilmente.", "簡単にできます。"],
        ],
      },
      {
        h: "buono と bene",
        body: "<b>buono</b> は形容詞で名詞を説明し、<b>bene</b> は副詞で動詞を説明します。cattivo と male も同じです。",
        ex: [
          ["È un buon cuoco.", "良い料理人です。"],
          ["Cucina bene.", "料理が上手です。"],
        ],
      },
      {
        h: "頻度の順",
        body: "<b>sempre → di solito → spesso → a volte / ogni tanto → raramente → non ... mai</b>。読むときは「どのくらい」の手がかりになります。",
        ex: [
          ["Non bevo mai caffè.", "コーヒーは全く飲みません。"],
          ["Ogni tanto vado al cinema.", "時々映画に行きます。"],
        ],
      },
    ],
    gram: [
      {
        q: "lento の副詞は？",
        o: ["lentamente", "lentomente", "lentemente"],
        a: 0,
        why: "女性形 lenta＋mente。",
        say: "lentamente",
      },
      {
        q: "facile の副詞は？",
        o: ["facilmente", "facilemente", "facilamente"],
        a: 0,
        why: "-le は e を落とします。",
        say: "facilmente",
      },
      {
        q: "veloce の副詞は？",
        o: ["velocemente", "velocamente", "velocimente"],
        a: 0,
        why: "-e はそのまま。",
        say: "velocemente",
      },
      {
        q: "Maria canta ___ .（上手に）",
        o: ["bene", "buona", "buono"],
        a: 0,
        why: "動詞の説明は bene。",
      },
      {
        q: "È una ___ cantante.（上手な）",
        o: ["buona", "bene", "benemente"],
        a: 0,
        why: "名詞の説明は形容詞。",
      },
      {
        q: "「決して飲まない」はどれ？",
        o: ["Non bevo mai.", "Bevo sempre.", "Bevo spesso."],
        a: 0,
        why: "non ... mai。",
        say: "Non bevo mai.",
      },
      {
        t: "order",
        ja: "ゆっくり話してください。",
        it: ["Parla lentamente, per favore."],
      },
      {
        t: "order",
        ja: "時々映画に行きます。",
        it: ["Ogni tanto vado al cinema."],
      },
    ],
    read: {
      kind: "アンケートを読む",
      title: "Quanto leggono gli studenti?",
      lines: [
        [
          "Abbiamo fatto una domanda a cento studenti: quanto spesso leggi un libro?",
          "100人の学生に質問しました。どのくらい本を読みますか？",
        ],
        ["Venti leggono ogni giorno.", "20人は毎日読みます。"],
        [
          "Trentacinque leggono spesso, ma non regolarmente.",
          "35人はよく読みますが、規則的ではありません。",
        ],
        ["Trenta leggono raramente.", "30人はめったに読みません。"],
        ["Quindici non leggono mai.", "15人は全く読みません。"],
      ],
      gloss: [["quanto spesso", "どのくらいの頻度で"]],
      q: [
        {
          skill: "info",
          s: "全く読まない学生は何人？",
          o: ["15人", "20人", "30人"],
          a: 0,
          why: "Quindici non leggono mai.",
        },
        {
          skill: "info",
          s: "「めったに読まない」と「全く読まない」を合わせると？",
          o: ["45人", "35人", "50人"],
          a: 0,
          why: "30＋15＝45です。",
        },
        {
          skill: "match",
          s: "最も多いグループは？",
          o: ["よく読む", "毎日読む", "全く読まない"],
          a: 0,
          why: "35人です。",
        },
      ],
    },
    write: {
      task: "自分の習慣を、頻度の語を3つ使って書きましょう。",
      hints: ["Di solito ...", "Ogni tanto ...", "Non ... mai."],
      model:
        "Di solito mi sveglio alle sette. Ogni tanto vado al cinema. Non mangio mai carne.",
      modelJa:
        "ふつう7時に起きます。時々映画に行きます。肉は全く食べません。",
      check: ["non ... mai の形を使った", "-mente の作り方を確かめた"],
    },
  },
  {
    id: "s3-ppirr",
    g: 3,
    title: "不規則な過去分詞のまとめ",
    goal: "よく使う不規則な過去分詞を読み書きできる",
    talk: [
      ["Pia", "Hai letto il libro che ti ho dato?", "渡した本は読んだ？"],
      [
        "Ivo",
        "Sì, l'ho letto. Ho anche scritto una recensione.",
        "うん、読んだ。感想も書いたよ。",
      ],
      ["Pia", "Hai visto il film?", "映画は見た？"],
      ["Ivo", "No, ho perso il biglietto.", "ううん、切符をなくした。"],
      ["Pia", "Che cosa hai detto ad Anna?", "アンナに何て言ったの？"],
      ["Ivo", "Le ho chiesto scusa.", "謝ったよ。"],
    ],
    words: [
      ["letto", "読んだ（leggere）"],
      ["scritto", "書いた（scrivere）"],
      ["detto", "言った（dire）"],
      ["fatto", "した（fare）"],
      ["visto", "見た（vedere）"],
      ["preso", "取った（prendere）"],
      ["messo", "置いた（mettere）"],
      ["chiesto", "尋ねた（chiedere）"],
      ["risposto", "答えた（rispondere）"],
      ["chiuso", "閉めた（chiudere）"],
      ["aperto", "開けた（aprire）"],
      ["rotto", "壊した（rompere）"],
      ["vinto", "勝った（vincere）"],
      ["speso", "使った（spendere）"],
    ],
    learn: [
      {
        h: "形で分ける",
        body: "<b>-so</b>：preso, messo, chiuso, deciso, perso, speso, sceso, corso<br><b>-tto</b>：detto, fatto, letto, scritto, rotto<br><b>-sto</b>：visto, chiesto, risposto, rimasto<br><b>-to</b>：aperto, offerto, morto, vinto, scelto",
        ex: [
          ["Ho deciso.", "決めました。"],
          ["Hanno vinto.", "彼らは勝ちました。"],
        ],
      },
      {
        h: "辞書の引き方②",
        body: "過去分詞は見出しに出ないことが多いので、原形で引きます。ha preso を調べるなら prendere です。「動詞」タブの近過去で、原形から形を確かめられます。",
        ex: [["Ha preso il treno.", "電車に乗りました（原形は prendere）。"]],
      },
      {
        h: "形容詞としても使う",
        body: "過去分詞は形容詞にもなります：la porta chiusa（閉まったドア）、il vetro rotto（割れたガラス）。性数が名詞に合います。",
        ex: [
          ["La finestra è aperta.", "窓は開いています。"],
          ["Il bicchiere è rotto.", "コップは割れています。"],
        ],
      },
    ],
    gram: [
      {
        q: "leggere の過去分詞は？",
        o: ["letto", "leggiuto", "lesso"],
        a: 0,
        why: "letto です。",
        say: "letto",
      },
      {
        q: "mettere の過去分詞は？",
        o: ["messo", "mettuto", "mesto"],
        a: 0,
        why: "messo です。",
        say: "messo",
      },
      {
        q: "chiedere の過去分詞は？",
        o: ["chiesto", "chieso", "chieduto"],
        a: 0,
        why: "chiesto です。",
        say: "chiesto",
      },
      {
        q: "rompere の過去分詞は？",
        o: ["rotto", "romputo", "roto"],
        a: 0,
        why: "rotto です。",
        say: "rotto",
      },
      {
        q: "La porta è ___ .（chiudere）",
        o: ["chiusa", "chiuso", "chiudeva"],
        a: 0,
        why: "porta に合わせて -a。",
      },
      {
        q: "ha vinto を辞書で引くと？",
        o: ["vincere", "vintare", "venire"],
        a: 0,
        why: "vinto は vincere の過去分詞。",
      },
      { t: "order", ja: "決めました。", it: ["Ho deciso."] },
      { t: "order", ja: "窓は開いています。", it: ["La finestra è aperta."] },
    ],
    read: {
      kind: "小さな話",
      title: "Una giornata sbagliata",
      lines: [
        [
          "Stamattina ho rotto la tazza preferita di mia moglie.",
          "今朝、妻のお気に入りのカップを割りました。",
        ],
        [
          "Poi ho perso l'autobus e ho preso un taxi.",
          "それからバスに乗り遅れ、タクシーに乗りました。",
        ],
        ["Ho speso venti euro!", "20ユーロも使いました！"],
        [
          "In ufficio ho detto una cosa stupida al direttore.",
          "会社で部長にばかなことを言いました。",
        ],
        [
          "A casa ho chiesto scusa e ho comprato una tazza nuova.",
          "家で謝って、新しいカップを買いました。",
        ],
        [
          "Ho messo la tazza sul tavolo, e il gatto l'ha fatta cadere.",
          "テーブルにカップを置くと、猫が落としました。",
        ],
      ],
      gloss: [["l'ha fatta cadere", "それを落とした"]],
      q: [
        {
          skill: "match",
          s: "タクシーに乗った理由は？",
          o: ["バスに乗り遅れたから", "雨だったから", "仕事で頼まれたから"],
          a: 0,
          why: "ho perso l'autobus.",
        },
        {
          skill: "infer",
          s: "この話の面白さは？",
          o: [
            "良くしようとしても失敗が続く",
            "猫がカップを買う",
            "部長がほめる",
          ],
          a: 0,
          why: "最後の文が落ちです。",
        },
        {
          skill: "vocab",
          s: "ho rotto を辞書で引くなら？",
          o: ["rompere", "rottare", "rimanere"],
          a: 0,
          why: "rotto は rompere の過去分詞です。",
        },
      ],
    },
    write: {
      task: "うまくいかなかった日のことを、不規則な過去分詞を3つ使って書きましょう。",
      hints: ["Ho perso ...", "Ho rotto ...", "Ho detto ..."],
      model:
        "Ieri ho perso il treno. Ho preso l'autobus e ho speso molto. Ho detto al capo che ero malato.",
      modelJa:
        "昨日は電車に乗り遅れました。バスに乗って、お金をたくさん使いました。上司に病気だと言いました。",
      check: ["過去分詞を「動詞」タブで確かめた", "原形を確かめた"],
    },
  },
  {
    id: "s4-indefiniti",
    g: 4,
    title: "誰か・何か・みんな",
    goal: "qualcuno, nessuno, tutto, ogni などを使い分けられる",
    talk: [
      ["Ada", "C'è qualcuno in casa?", "家に誰かいる？"],
      ["Tom", "No, non c'è nessuno.", "ううん、誰もいないよ。"],
      ["Ada", "Vuoi qualcosa da bere?", "何か飲む？"],
      ["Tom", "No, grazie, non voglio niente.", "いいえ、何もいらないよ。"],
      ["Ada", "Ogni giorno lavori fino a tardi?", "毎日遅くまで働くの？"],
      ["Tom", "Tutti i giorni, tranne la domenica.", "毎日ね、日曜以外は。"],
    ],
    words: [
      ["qualcuno", "誰か"],
      ["qualcosa", "何か"],
      ["nessuno", "誰も〜ない"],
      ["niente", "何も〜ない"],
      ["ognuno", "それぞれの人"],
      ["ogni", "毎〜・それぞれの"],
      ["tutto", "すべて"],
      ["qualche", "いくつかの"],
      ["alcuni", "いくつかの"],
      ["tranne", "〜を除いて"],
    ],
    learn: [
      {
        h: "ogni と tutti",
        body: "<b>ogni</b> の後は単数で形も変わりません：ogni giorno。<b>tutti i / tutte le</b> の後は複数で、定冠詞が入ります：tutti i giorni。意味はほぼ同じです。",
        ex: [
          ["Ogni giorno leggo.", "毎日読みます。"],
          ["Tutti i giorni leggo.", "毎日読みます。"],
        ],
      },
      {
        h: "否定の語の位置",
        body: "nessuno, niente が動詞の後なら <b>non</b> が必要です：Non vedo nessuno。文頭に来ると non は不要です：Nessuno è venuto（誰も来なかった）。",
        ex: [
          ["Non ho visto niente.", "何も見ませんでした。"],
          ["Nessuno lo sa.", "誰も知りません。"],
        ],
      },
      {
        h: "qualcosa di ＋ 形容詞",
        body: "「何か〜なもの」は <b>qualcosa di ＋ 形容詞の男性単数</b> です。「〜するものは」は <b>qualcosa da ＋ 原形</b> です。",
        ex: [
          ["Vorrei qualcosa di dolce.", "何か甘いものがほしいです。"],
          ["Hai qualcosa da mangiare?", "何か食べるものはある？"],
        ],
      },
    ],
    gram: [
      {
        q: "___ giorno leggo.（毎日）",
        o: ["Ogni", "Tutti", "Tutto"],
        a: 0,
        why: "giorno が単数なので ogni。",
      },
      {
        q: "___ i giorni leggo.（毎日）",
        o: ["Tutti", "Ogni", "Tutte"],
        a: 0,
        why: "giorni は男性複数。",
      },
      {
        q: "Non ho visto ___ .（誰も）",
        o: ["nessuno", "qualcuno", "ognuno"],
        a: 0,
        why: "non の後は nessuno。",
      },
      {
        q: "___ è venuto.（誰も来なかった）",
        o: ["Nessuno", "Non nessuno", "Niente"],
        a: 0,
        why: "文頭では non は不要。",
      },
      {
        q: "Vorrei qualcosa ___ dolce.",
        o: ["di", "da", "a"],
        a: 0,
        why: "qualcosa di＋形容詞。",
      },
      {
        q: "Hai qualcosa ___ mangiare?",
        o: ["da", "di", "per il"],
        a: 0,
        why: "qualcosa da＋原形。",
      },
      { t: "order", ja: "誰も知りません。", it: ["Nessuno lo sa."] },
      {
        t: "order",
        ja: "何か甘いものがほしいです。",
        it: ["Vorrei qualcosa di dolce."],
      },
    ],
    read: {
      kind: "小さな話",
      title: "Nessuno",
      lines: [
        [
          "Un uomo tornò a casa e trovò la porta aperta.",
          "男が家に帰ると、ドアが開いていました。",
        ],
        ["«C'è qualcuno?» chiese.", "「誰かいるか？」と尋ねました。"],
        ["Nessuno rispose.", "誰も答えませんでした。"],
        [
          "Entrò: tutto era in ordine, niente era stato toccato.",
          "入ると、すべて整っていて、何も触られていませんでした。",
        ],
        [
          "Ma sul tavolo c'era qualcosa di strano: una tazza di caffè ancora calda.",
          "でもテーブルに奇妙なものがありました。まだ温かいコーヒーです。",
        ],
      ],
      gloss: [
        ["in ordine", "整って"],
        ["stato toccato", "触られた"],
      ],
      q: [
        {
          skill: "match",
          s: "奇妙だったものは？",
          o: ["まだ温かいコーヒー", "開いた窓", "壊れたいす"],
          a: 0,
          why: "una tazza di caffè ancora calda.",
        },
        {
          skill: "infer",
          s: "温かいコーヒーからわかることは？",
          o: ["少し前まで誰かがいた", "男はコーヒーが好き", "家は寒い"],
          a: 0,
          why: "冷めていないからです。",
        },
        {
          skill: "vocab",
          s: "tornò, chiese, rispose の時制は？",
          o: ["遠過去", "現在", "未来"],
          a: 0,
          why: "物語の語りに使う形です。",
        },
      ],
    },
    write: {
      task: "誰もいない家に帰った場面を、qualcuno, nessuno, niente を使って書きましょう。",
      hints: ["C'è qualcuno?", "Non c'è nessuno.", "Non ho sentito niente."],
      model:
        "Sono tornato a casa. «C'è qualcuno?» Non c'era nessuno e non ho sentito niente.",
      modelJa:
        "家に帰りました。「誰かいる？」誰もいなくて、何も聞こえませんでした。",
      check: ["動詞の後の nessuno に non をつけた", "3つの語を使った"],
    },
  },
  {
    id: "s4-suffissi",
    g: 4,
    title: "語尾で意味を変える",
    goal: "-ino, -one, -accio などの語尾から意味を推測できる",
    talk: [
      ["Sua", "Che bel gattino!", "なんてかわいい子猫！"],
      ["Dan", "Sì, ma che tempaccio oggi!", "うん、でも今日はひどい天気だね！"],
      ["Sua", "Vuoi un caffettino?", "コーヒーを軽く一杯どう？"],
      [
        "Dan",
        "Volentieri. Hai un librone in mano?",
        "喜んで。大きな本を持ってるの？",
      ],
      ["Sua", "Sì, è la grammatica!", "うん、文法書だよ！"],
    ],
    words: [
      ["gattino", "子猫"],
      ["casetta", "小さな家"],
      ["librone", "大きな本"],
      ["ragazzaccio", "悪がき"],
      ["tempaccio", "ひどい天気"],
      ["parolaccia", "汚い言葉"],
      ["ragazzino", "少年"],
      ["vocina", "小さな声"],
      ["nasone", "大きな鼻"],
      ["fratellino", "弟"],
    ],
    learn: [
      {
        h: "小さい・かわいい",
        body: "<b>-ino, -etto, -ello</b> は小ささや親しみを表します：gatto → gattino、casa → casetta、albero → alberello。",
        ex: [
          ["Ho un gattino.", "子猫を飼っています。"],
          ["Abita in una casetta.", "小さな家に住んでいます。"],
        ],
      },
      {
        h: "大きい",
        body: "<b>-one</b> は大きさを表します。女性名詞も男性形になることがあります：la porta → il portone（大きな門）、libro → librone。",
        ex: [["Che librone!", "なんて大きな本！"]],
      },
      {
        h: "悪い",
        body: "<b>-accio</b> は悪さを表します：tempo → tempaccio、parola → parolaccia。原文の『ピノッキオ』には vestituccio、acquaccia のような形がたくさん出ます。語尾を外して元の語を探せば、辞書なしで読めます。",
        ex: [
          ["Che tempaccio!", "なんてひどい天気！"],
          ["Non dire parolacce!", "汚い言葉を言わないで！"],
        ],
      },
      {
        h: "注意：見かけだけの語",
        body: "すべてが語尾変化ではありません。<b>mattino</b> は「小さな mat」ではなく「朝」、<b>bottone</b> は「ボタン」、<b>limone</b> は「レモン」です。文脈で確かめます。",
        ex: [["Metti il limone nel tè.", "お茶にレモンを入れて。"]],
      },
    ],
    gram: [
      {
        q: "「子猫」はどれ？",
        o: ["gattino", "gattone", "gattaccio"],
        a: 0,
        why: "-ino は小さい。",
        say: "gattino",
      },
      {
        q: "「大きな本」はどれ？",
        o: ["librone", "libretto", "libraccio"],
        a: 0,
        why: "-one は大きい。",
        say: "librone",
      },
      {
        q: "「ひどい天気」はどれ？",
        o: ["tempaccio", "tempino", "tempone"],
        a: 0,
        why: "-accio は悪い。",
        say: "tempaccio",
      },
      {
        q: "vocina の意味は？",
        o: ["小さな声", "大きな声", "悪い声"],
        a: 0,
        why: "voce＋-ina。",
        say: "vocina",
      },
      {
        q: "語尾変化ではない語は？",
        o: ["limone", "casetta", "gattino"],
        a: 0,
        why: "limone は「レモン」です。",
      },
      {
        q: "acquaccia の意味として推測できるのは？",
        o: ["ひどい水", "小さな水", "大きな水"],
        a: 0,
        why: "acqua＋-accia。",
        say: "acquaccia",
      },
      { t: "order", ja: "なんてひどい天気！", it: ["Che tempaccio!"] },
      {
        t: "order",
        ja: "小さな家に住んでいます。",
        it: ["Abita in una casetta."],
      },
    ],
    read: {
      kind: "小さな話",
      title: "Il ragazzaccio",
      lines: [
        [
          "In un paesino di montagna viveva un ragazzino di nome Leo.",
          "山の小さな村に、レオという少年が住んでいました。",
        ],
        [
          "Tutti lo chiamavano «il ragazzaccio» perché diceva parolacce.",
          "汚い言葉を言うので、みんな「悪がき」と呼んでいました。",
        ],
        [
          "Un giorno trovò un uccellino caduto dal nido.",
          "ある日、巣から落ちた小鳥を見つけました。",
        ],
        [
          "Lo portò nella sua casetta e gli diede del pane.",
          "小さな家に連れて帰り、パンをあげました。",
        ],
        [
          "Da quel giorno, con una vocina dolce, parlava solo con lui.",
          "その日から、優しい小さな声で、小鳥とだけ話しました。",
        ],
      ],
      gloss: [
        ["nido", "巣"],
        ["caduto", "落ちた"],
        ["diede", "与えた"],
      ],
      q: [
        {
          skill: "vocab",
          s: "ragazzaccio の語尾が表すのは？",
          o: ["悪い", "小さい", "大きい"],
          a: 0,
          why: "-accio です。",
        },
        {
          skill: "infer",
          s: "この話が伝えることは？",
          o: ["悪く言われる子にも優しさがある", "小鳥は危険だ", "村は嫌いだ"],
          a: 0,
          why: "呼び名と行動の対比です。",
        },
        {
          skill: "match",
          s: "小鳥に与えたものは？",
          o: ["パン", "肉", "水だけ"],
          a: 0,
          why: "gli diede del pane.",
        },
      ],
    },
    write: {
      task: "-ino, -one, -accio を使って、身のまわりを説明しましょう。",
      hints: ["una casetta", "un librone", "che tempaccio"],
      model:
        "Abito in una casetta con un gattino. Oggi leggo un librone, perché fuori c'è un tempaccio.",
      modelJa:
        "子猫と小さな家に住んでいます。外はひどい天気なので、今日は大きな本を読みます。",
      check: ["語尾を正しくつけた", "性を名詞に合わせた"],
    },
  },
  {
    id: "s4-prefissi",
    g: 4,
    title: "語頭で意味を変える",
    goal: "ri-, in-, dis-, s- などから語の意味を推測できる",
    talk: [
      ["Rea", "Devo rifare tutto il compito.", "宿題を全部やり直さなきゃ。"],
      ["Ugo", "Perché? Era impossibile?", "なんで？無理だったの？"],
      [
        "Rea",
        "No, ma ho scritto parole scorrette.",
        "ううん、間違った語を書いたの。",
      ],
      ["Ugo", "Che disastro! Non sei contenta?", "大変だね！不満なの？"],
      ["Rea", "Sono scontenta, ma ricomincio.", "不満だけど、やり直すよ。"],
    ],
    words: [
      ["rifare", "やり直す"],
      ["rileggere", "読み直す"],
      ["ricominciare", "再び始める"],
      ["impossibile", "不可能な"],
      ["inutile", "役に立たない"],
      ["disordine", "乱雑"],
      ["disfare", "ほどく"],
      ["scontento", "不満な"],
      ["scoprire", "発見する"],
      ["preparare", "準備する"],
      ["antipasto", "前菜"],
      ["sottomarino", "海底の・潜水艦"],
    ],
    learn: [
      {
        h: "もう一度の ri-",
        body: "<b>ri-</b> は「再び」を表します：fare → rifare、leggere → rileggere、tornare → ritornare。",
        ex: [["Rileggo il libro.", "本を読み直します。"]],
      },
      {
        h: "否定の in-, dis-, s-",
        body: "<b>in-</b>（b, m, p の前は <b>im-</b>）：inutile, impossibile。<br><b>dis-</b>：disordine, disonesto。<br><b>s-</b>：scontento, sfortuna, scoprire。",
        ex: [
          ["È impossibile.", "不可能です。"],
          ["Che sfortuna!", "なんて不運な！"],
        ],
      },
      {
        h: "位置や時間の語",
        body: "<b>pre-</b>（前に）：prevedere。<b>anti-</b>（前に）：antipasto（別の anti- には「対抗」の意味もあります）。<b>sotto-</b>（下）：sottomarino。<b>sopra-</b>（上）：soprannome（あだ名）。国語の「語の成り立ち」を使えば、知らない語の見当がつきます。",
        ex: [
          [
            "Il soprannome di Geppetto è Polendina.",
            "ジェッペットのあだ名はポレンディーナです。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "rileggere の意味は？",
        o: ["読み直す", "読まない", "読み始める"],
        a: 0,
        why: "ri-＋leggere。",
        say: "rileggere",
      },
      {
        q: "possibile の反対は？",
        o: ["impossibile", "inpossibile", "dispossibile"],
        a: 0,
        why: "p の前は im-。",
        say: "impossibile",
      },
      {
        q: "utile の反対は？",
        o: ["inutile", "imutile", "sutile"],
        a: 0,
        why: "in-＋utile。",
        say: "inutile",
      },
      {
        q: "contento の反対は？",
        o: ["scontento", "incontento", "ricontento"],
        a: 0,
        why: "s-＋contento。",
        say: "scontento",
      },
      {
        q: "soprannome の意味は？",
        o: ["あだ名", "名字", "名前の下"],
        a: 0,
        why: "sopra-＋nome。",
        say: "soprannome",
      },
      {
        q: "disordine の意味は？",
        o: ["乱雑", "順序", "命令"],
        a: 0,
        why: "dis-＋ordine。",
        say: "disordine",
      },
      { t: "order", ja: "本を読み直します。", it: ["Rileggo il libro."] },
      { t: "order", ja: "不可能です。", it: ["È impossibile."] },
    ],
    read: {
      kind: "説明文",
      title: "Parole dentro le parole",
      lines: [
        [
          "Quando trovi una parola nuova, non aprire subito il dizionario.",
          "新しい語を見つけても、すぐ辞書を開かないでください。",
        ],
        ["Prova prima a dividerla in parti.", "まず部分に分けてみましょう。"],
        [
          "«Irriconoscibile» sembra difficile, ma dentro c'è «conoscere».",
          "irriconoscibile は難しそうですが、中に conoscere があります。",
        ],
        [
          "«Ri-» vuol dire «di nuovo», e «ir-» vuol dire «non».",
          "ri- は「再び」、ir- は「〜ない」です。",
        ],
        [
          "Quindi è qualcosa che non si può riconoscere.",
          "つまり、見分けられないものです。",
        ],
      ],
      gloss: [
        ["irriconoscibile", "見分けがつかない"],
        ["dividerla", "それを分ける"],
      ],
      q: [
        {
          skill: "main",
          s: "筆者の助言は？",
          o: [
            "語を部分に分けて推測する",
            "辞書を常に使う",
            "新しい語を無視する",
          ],
          a: 0,
          why: "Prova prima a dividerla in parti.",
        },
        {
          skill: "vocab",
          s: "irriconoscibile の意味は？",
          o: ["見分けられない", "よく知られた", "再び知る"],
          a: 0,
          why: "最後の文の説明です。",
        },
        {
          skill: "ref",
          s: "dividerla の la は？",
          o: ["新しい語", "辞書", "ページ"],
          a: 0,
          why: "una parola nuova を受けます。",
        },
      ],
    },
    write: {
      task: "ri-, in-, s- のつく語を3つ使って、短い文を書きましょう。",
      hints: ["Devo rifare ...", "È inutile ...", "Sono scontento ..."],
      model:
        "Devo rifare il compito. È inutile aspettare. Sono scontento, ma ricomincio.",
      modelJa:
        "宿題をやり直さなければなりません。待っても無駄です。不満ですが、再び始めます。",
      check: ["語頭の意味を確かめた"],
    },
  },
  {
    id: "s5-futant",
    g: 5,
    title: "未来のある時までに（先立つ未来）",
    goal: "futuro anteriore を読み、未来の順序がわかる",
    talk: [
      ["Fabio", "Quando esci?", "いつ出かけるの？"],
      ["Nina", "Quando avrò finito i compiti.", "宿題を終えたら。"],
      ["Fabio", "E poi?", "それから？"],
      [
        "Nina",
        "Dopo che avrò cenato, vado da Anna.",
        "夕食を食べたら、アンナのところへ行く。",
      ],
      [
        "Fabio",
        "Non è ancora arrivata. Sarà rimasta in ufficio.",
        "まだ着いてないよ。たぶん会社に残ったんだろう。",
      ],
    ],
    words: [
      ["avrò finito", "終えているだろう"],
      ["sarò arrivato", "着いているだろう"],
      ["appena", "〜するとすぐ"],
      ["dopo che", "〜した後で"],
      ["quando", "〜するとき"],
      ["entro", "〜までに"],
      ["sarà rimasta", "残ったのだろう"],
      ["avrà dimenticato", "忘れたのだろう"],
      ["forse", "たぶん"],
      ["probabilmente", "おそらく"],
    ],
    learn: [
      {
        h: "作り方",
        body: "<b>avere / essere の未来形 ＋ 過去分詞</b>。avrò mangiato、sarò partito。助動詞の選び方は近過去と同じです。",
        ex: [
          ["Avrò finito alle sei.", "6時には終えているでしょう。"],
          ["Sarò arrivata prima di te.", "君より先に着いているでしょう。"],
        ],
      },
      {
        h: "未来の順序",
        body: "未来の2つの出来事で、<b>先に終わる方</b>に使います。quando, dopo che, appena の後によく出ます。会話では現在形や未来形で済ませることも多いです。",
        ex: [["Appena avrò mangiato, uscirò.", "食べたらすぐ出かけます。"]],
      },
      {
        h: "過去の推測",
        body: "「たぶん〜したのだろう」という推測にも使います。未来の話ではない点に注意します。",
        ex: [
          ["Sarà uscito.", "たぶん出かけたのでしょう。"],
          ["Avrà dimenticato.", "たぶん忘れたのでしょう。"],
        ],
      },
    ],
    gram: [
      {
        q: "Quando ___ finito, uscirò.",
        o: ["avrò", "sarò", "ho avuto"],
        a: 0,
        why: "finire は avere。",
      },
      {
        q: "Appena ___ arrivato, ti chiamerò.",
        o: ["sarò", "avrò", "ero"],
        a: 0,
        why: "arrivare は essere。",
      },
      {
        q: "Non risponde. ___ uscito.（たぶん）",
        o: ["Sarà", "Avrà", "Era"],
        a: 0,
        why: "uscire は essere。推測の用法。",
      },
      {
        q: "Sarà rimasta in ufficio. の意味は？",
        o: ["たぶん会社に残ったのだろう", "明日会社に残る", "会社に残るな"],
        a: 0,
        why: "過去の推測です。",
      },
      {
        q: "Appena avrò mangiato, uscirò. で先に起きるのは？",
        o: ["食べること", "出かけること", "同時"],
        a: 0,
        why: "avrò mangiato の方が先です。",
      },
      {
        q: "「6時には終えているでしょう」はどれ？",
        o: [
          "Avrò finito alle sei.",
          "Finivo alle sei.",
          "Ho finito alle sei ieri.",
        ],
        a: 0,
        why: "未来のある時までに完了。",
        say: "Avrò finito alle sei.",
      },
      { t: "order", ja: "たぶん忘れたのでしょう。", it: ["Avrà dimenticato."] },
      {
        t: "order",
        ja: "宿題を終えたら出かけます。",
        it: ["Uscirò quando avrò finito i compiti."],
      },
    ],
    read: {
      kind: "手紙",
      title: "Una promessa",
      lines: [
        [
          "Caro papà, quando riceverai questa lettera, sarò già partito.",
          "お父さん、この手紙が届くころ、僕はもう出発しているでしょう。",
        ],
        [
          "Appena avrò trovato un lavoro, ti scriverò.",
          "仕事を見つけたらすぐ手紙を書きます。",
        ],
        [
          "Quando avrò messo da parte un po' di soldi, tornerò a trovarti.",
          "少しお金を貯めたら、会いに帰ります。",
        ],
        [
          "Non ti preoccupare. Avrai capito perché lo faccio.",
          "心配しないで。なぜこうするか、わかってくれたでしょう。",
        ],
      ],
      gloss: [
        ["mettere da parte", "貯める"],
        ["tornare a trovarti", "また会いに帰る"],
      ],
      q: [
        {
          skill: "order",
          s: "順序が正しいのは？",
          o: [
            "出発→仕事を見つける→お金を貯める→帰る",
            "帰る→出発→仕事→貯金",
            "貯金→仕事→帰る→出発",
          ],
          a: 0,
          why: "先立つ未来が順序を示します。",
        },
        {
          skill: "infer",
          s: "書き手の父への気持ちは？",
          o: ["心配をかけたくない", "怒っている", "無関心"],
          a: 0,
          why: "Non ti preoccupare.",
        },
        {
          skill: "vocab",
          s: "Avrai capito の用法は？",
          o: ["推測（わかってくれたでしょう）", "命令", "過去の習慣"],
          a: 0,
          why: "未来形の推測です。",
        },
      ],
    },
    write: {
      task: "「〜したら、〜する」という予定を2つ書きましょう。",
      hints: ["Quando avrò ..., ...", "Appena sarò ..., ..."],
      model:
        "Quando avrò finito il lavoro, andrò al mare. Appena sarò arrivato, ti chiamerò.",
      modelJa: "仕事を終えたら海へ行きます。着いたらすぐ電話します。",
      check: ["先に終わる方に先立つ未来を使った", "助動詞を選び分けた"],
    },
  },
  {
    id: "s5-condpass",
    g: 5,
    title: "〜したかったのに（条件法過去）",
    goal: "条件法過去で、後悔や過去から見た未来を読める",
    talk: [
      ["Rosa", "Perché non sei venuto?", "なんで来なかったの？"],
      [
        "Ian",
        "Sarei venuto volentieri, ma ero malato.",
        "喜んで行きたかったけど、病気だったんだ。",
      ],
      ["Rosa", "Avresti potuto telefonare!", "電話くらいできたでしょ！"],
      [
        "Ian",
        "Hai ragione, avrei dovuto chiamarti.",
        "その通り、電話すべきだった。",
      ],
      [
        "Rosa",
        "Marco ha detto che sarebbe arrivato presto, ma non è venuto neanche lui.",
        "マルコは早く着くと言ったけど、彼も来なかったよ。",
      ],
    ],
    words: [
      ["avrei voluto", "〜したかったのに"],
      ["sarei venuto", "行ったのに"],
      ["avrei dovuto", "〜すべきだった"],
      ["avrei potuto", "〜できたのに"],
      ["avresti potuto", "君は〜できたのに"],
      ["sarebbe arrivato", "着くだろう（と）"],
      ["peccato", "残念"],
      ["pentirsi", "後悔する"],
      ["ormai", "もう"],
      ["invece", "その代わりに"],
    ],
    learn: [
      {
        h: "作り方",
        body: "<b>avere / essere の条件法 ＋ 過去分詞</b>：avrei mangiato、sarei andato。",
        ex: [
          ["Avrei mangiato.", "食べたのに（実際は食べていない）。"],
          ["Sarei andato.", "行ったのに。"],
        ],
      },
      {
        h: "実現しなかったこと",
        body: "「〜したかったのに、しなかった」を表します。日本語の「〜のに」に当たり、物語でよく出ます。",
        ex: [
          ["Avrei voluto aiutarti.", "君を助けたかったのに。"],
          ["Avresti dovuto dirmelo.", "私に言うべきだったのに。"],
        ],
      },
      {
        h: "過去から見た未来",
        body: "「彼は来ると言った」のように、過去の時点から見た未来に使います。日本語では「来る」と現在形で言うところを、イタリア語は条件法過去にします（英語の would に近い）。間接話法の単元の続きです。",
        ex: [
          ["Ha detto che sarebbe venuto.", "来ると言いました。"],
          [
            "Sapevo che avresti capito.",
            "君がわかってくれると知っていました。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "___ voluto aiutarti.（助けたかったのに）",
        o: ["Avrei", "Sarei", "Avevo"],
        a: 0,
        why: "volere は avere。",
      },
      {
        q: "___ andato volentieri.（行ったのに）",
        o: ["Sarei", "Avrei", "Ero"],
        a: 0,
        why: "andare は essere。",
      },
      {
        q: "Avresti ___ dirmelo.（言うべきだったのに）",
        o: ["dovuto", "dovere", "devo"],
        a: 0,
        why: "条件法過去の過去分詞。",
      },
      {
        q: "Ha detto che ___ venuto.（来ると言った）",
        o: ["sarebbe", "sarà", "è"],
        a: 0,
        why: "過去から見た未来。",
      },
      {
        q: "Avrei mangiato. の話し手は実際に食べた？",
        o: ["食べていない", "食べた", "これから食べる"],
        a: 0,
        why: "単独の Avrei mangiato は実現しなかったことを表します。",
      },
      {
        q: "「電話すべきだった」はどれ？",
        o: [
          "Avrei dovuto telefonare.",
          "Dovrei telefonare.",
          "Devo telefonare.",
        ],
        a: 0,
        why: "過去の後悔です。",
        say: "Avrei dovuto telefonare.",
      },
      {
        t: "order",
        ja: "君を助けたかったのに。",
        it: ["Avrei voluto aiutarti."],
      },
      {
        t: "order",
        ja: "来ると言いました。",
        it: ["Ha detto che sarebbe venuto."],
      },
    ],
    read: {
      kind: "小さな話",
      title: "Il treno perso",
      lines: [
        [
          "Quel giorno sarei dovuto partire alle otto.",
          "その日は8時に出発するはずでした。",
        ],
        [
          "Avrei potuto prendere un taxi, ma volevo risparmiare.",
          "タクシーに乗れたのですが、節約したかったのです。",
        ],
        [
          "Ho perso il treno, e ho perso anche il lavoro.",
          "電車に乗り遅れ、仕事も失いました。",
        ],
        [
          "Non avrei mai pensato che dieci euro potessero costare così tanto.",
          "10ユーロがこんなに高くつくとは、思いもしませんでした。",
        ],
      ],
      gloss: [
        ["risparmiare", "節約する"],
        ["potessero", "〜できる（接続法）"],
      ],
      q: [
        {
          skill: "match",
          s: "タクシーに乗らなかった理由は？",
          o: [
            "節約したかったから",
            "タクシーがなかったから",
            "歩きたかったから",
          ],
          a: 0,
          why: "volevo risparmiare.",
        },
        {
          skill: "infer",
          s: "最後の文の皮肉は？",
          o: ["小さな節約が大きな損になった", "10ユーロは安い", "電車は高い"],
          a: 0,
          why: "lavoro を失う結果です。",
        },
        {
          skill: "vocab",
          s: "sarei dovuto partire は実現した？",
          o: ["実現しなかった", "実現した", "これから実現する"],
          a: 0,
          why: "条件法過去です。",
        },
      ],
    },
    write: {
      task: "「すればよかった」ことを3つ書きましょう。",
      hints: ["Avrei dovuto ...", "Avrei potuto ...", "Sarei andato/a ..."],
      model:
        "Avrei dovuto studiare di più. Avrei potuto chiedere aiuto. Sarei andato in Italia prima.",
      modelJa:
        "もっと勉強すべきでした。助けを求めることもできました。もっと早くイタリアに行けばよかったです。",
      check: ["条件法の形を使った", "助動詞を選び分けた"],
    },
  },
  {
    id: "s5-impersonali",
    g: 5,
    title: "主語のない言い方",
    goal: "bisogna, basta, sembra, conviene などを使える",
    talk: [
      ["Lia", "Come si arriva al museo?", "博物館にはどう行くの？"],
      ["Sam", "Basta prendere l'autobus 12.", "12番のバスに乗るだけでいいよ。"],
      ["Lia", "Bisogna prenotare?", "予約が必要？"],
      [
        "Sam",
        "Conviene, perché c'è molta gente.",
        "した方がいいよ、人が多いから。",
      ],
      ["Lia", "Sembra che sia chiuso il lunedì.", "月曜は閉まっているみたい。"],
      ["Sam", "Allora è meglio andare domani.", "じゃあ明日行く方がいいね。"],
    ],
    words: [
      ["bisogna", "〜する必要がある"],
      ["basta", "〜すれば十分だ"],
      ["conviene", "〜する方が得だ"],
      ["sembra", "〜のようだ"],
      ["è meglio", "〜の方がいい"],
      ["è vietato", "〜は禁止だ"],
      ["è possibile", "〜は可能だ"],
      ["succede", "起こる"],
      ["capita", "たまたま起こる"],
      ["pare", "〜のようだ"],
    ],
    learn: [
      {
        h: "3人称単数で使う",
        body: "bisogna, basta, conviene は<b>3人称単数＋原形</b>が基本です（sembra は形容詞や che 節が続きます）。日本語の「〜する必要がある」に近い形です。",
        ex: [
          ["Bisogna studiare.", "勉強する必要があります。"],
          ["Basta chiedere.", "聞くだけで十分です。"],
          ["Conviene partire presto.", "早く出る方がいいです。"],
        ],
      },
      {
        h: "人を入れる",
        body: "mi, ti などをつけて、誰にとってかを示せます：Mi basta poco（私には少しで十分）、Ti conviene aspettare（君は待つ方がいい）。",
        ex: [
          ["Mi sembra giusto.", "正しいと思います。"],
          ["Ti conviene aspettare.", "待つ方がいいよ。"],
        ],
      },
      {
        h: "che が続くとき",
        body: "che が続くと接続法になります：Bisogna che tu venga。sembra che も同じです。読んでわかれば十分です。",
        ex: [["Sembra che piova.", "雨が降っているようです。"]],
      },
    ],
    gram: [
      {
        q: "___ studiare.（必要がある）",
        o: ["Bisogna", "Bisognano", "Bisogno"],
        a: 0,
        why: "3人称単数。",
      },
      {
        q: "___ chiedere.（聞くだけで十分）",
        o: ["Basta", "Bastano", "Basto"],
        a: 0,
        why: "原形が続くので単数。",
      },
      {
        q: "Mi ___ giusto.（正しいと思う）",
        o: ["sembra", "sembro", "sembri"],
        a: 0,
        why: "giusto について述べる3人称。",
      },
      {
        q: "Ti ___ aspettare.（待つ方がいい）",
        o: ["conviene", "convieni", "convengo"],
        a: 0,
        why: "3人称単数。",
      },
      {
        q: "È vietato ___ .（走ること）",
        o: ["correre", "corro", "corso"],
        a: 0,
        why: "原形が続きます。",
      },
      {
        q: "Sembra che piova. の piova は？",
        o: ["接続法", "命令", "過去分詞"],
        a: 0,
        why: "sembra che の後は接続法です。",
      },
      { t: "order", ja: "聞くだけで十分です。", it: ["Basta chiedere."] },
      { t: "order", ja: "勉強する必要があります。", it: ["Bisogna studiare."] },
    ],
    read: {
      kind: "案内",
      title: "Come visitare i musei di Roma",
      lines: [
        [
          "Per visitare i musei più famosi conviene prenotare online.",
          "有名な博物館を訪れるには、オンラインで予約する方がいいです。",
        ],
        [
          "Basta scegliere il giorno e pagare con la carta.",
          "日を選び、カードで払うだけです。",
        ],
        [
          "Se non si prenota, capita di aspettare due ore.",
          "予約しないと、2時間待つこともあります。",
        ],
        [
          "All'ingresso bisogna mostrare un documento.",
          "入り口で身分証を見せる必要があります。",
        ],
        [
          "In alcune sale è vietato fare fotografie.",
          "写真を撮るのが禁止の部屋もあります。",
        ],
      ],
      gloss: [
        ["online", "オンラインで"],
        ["sale", "部屋（複数）"],
      ],
      q: [
        {
          skill: "info",
          s: "入り口で必要なものは？",
          o: ["身分証", "チケットの印刷", "現金"],
          a: 0,
          why: "bisogna mostrare un documento.",
        },
        {
          skill: "info",
          s: "予約しないとどうなることがある？",
          o: ["2時間待つ", "入れない", "料金が2倍"],
          a: 0,
          why: "capita di aspettare due ore.",
        },
        {
          skill: "vocab",
          s: "conviene prenotare の意味は？",
          o: ["予約する方がいい", "予約してはいけない", "予約は無料だ"],
          a: 0,
          why: "convenire は「得である」。",
        },
      ],
    },
    write: {
      task: "日本の電車の乗り方を、bisogna, basta を使って説明しましょう。",
      hints: ["Bisogna comprare ...", "Basta ...", "È vietato ..."],
      model:
        "Bisogna comprare un biglietto. Basta usare una carta. È vietato parlare al telefono.",
      modelJa:
        "切符を買う必要があります。カードを使うだけです。電話で話すのは禁止です。",
      check: ["3人称単数にした", "後ろを原形にした"],
    },
  },
  {
    id: "s5-irrcomp",
    g: 5,
    title: "比較の特別な形",
    goal: "migliore, ottimo, maggiore など比較の特別な形を読める",
    talk: [
      [
        "Ela",
        "Questo è il miglior ristorante della città?",
        "これが町で最高のレストラン？",
      ],
      ["Mo", "Sì, il cibo è ottimo.", "うん、料理は最高だよ。"],
      [
        "Ela",
        "Tuo fratello maggiore lavora qui?",
        "お兄さんがここで働いてるの？",
      ],
      [
        "Mo",
        "Sì, e mia sorella minore studia a Roma.",
        "うん、妹はローマで勉強してる。",
      ],
      ["Ela", "Il vino è molto buono!", "ワインがとてもおいしい！"],
      ["Mo", "È il meglio che abbiamo.", "うちで一番いいものだよ。"],
    ],
    words: [
      ["migliore", "より良い"],
      ["il migliore", "最も良い"],
      ["ottimo", "最高の"],
      ["peggiore", "より悪い"],
      ["pessimo", "最悪の"],
      ["maggiore", "より大きい・年上の"],
      ["massimo", "最大の"],
      ["minore", "より小さい・年下の"],
      ["minimo", "最小の"],
      ["superiore", "より上の"],
      ["inferiore", "より下の"],
    ],
    learn: [
      {
        h: "4組の特別な形",
        body: "buono → <b>migliore</b> → <b>ottimo</b><br>cattivo → <b>peggiore</b> → <b>pessimo</b><br>grande → <b>maggiore</b> → <b>massimo</b><br>piccolo → <b>minore</b> → <b>minimo</b><br>più buono や buonissimo も使えます。",
        ex: [
          ["Questo vino è ottimo.", "このワインは最高です。"],
          ["Ho avuto un voto pessimo.", "最悪の点を取りました。"],
        ],
      },
      {
        h: "家族の年上・年下",
        body: "<b>fratello maggiore</b>（兄）、<b>sorella minore</b>（妹）。日本語と違って兄弟の上下を毎回言わないので、イタリア語の fratello は兄も弟も指します。",
        ex: [["Mio fratello maggiore è medico.", "兄は医者です。"]],
      },
      {
        h: "meglio と il migliore",
        body: "<b>meglio</b> は副詞の比較、<b>migliore</b> は形容詞です。「〜するのが一番いい」は <b>la cosa migliore è ...</b>、または <b>è meglio ...</b> です。",
        ex: [["La cosa migliore è aspettare.", "一番いいのは待つことです。"]],
      },
    ],
    gram: [
      {
        q: "buono の最上級の形は？",
        o: ["ottimo", "massimo", "minimo"],
        a: 0,
        why: "buono → ottimo。",
        say: "ottimo",
      },
      {
        q: "cattivo の比較級は？",
        o: ["peggiore", "minore", "pessimo"],
        a: 0,
        why: "cattivo → peggiore。",
        say: "peggiore",
      },
      {
        q: "「妹」はどれ？",
        o: ["sorella minore", "sorella maggiore", "sorella ottima"],
        a: 0,
        why: "minore は年下。",
        say: "sorella minore",
      },
      {
        q: "grande の「最大の」は？",
        o: ["massimo", "maggiore", "minimo"],
        a: 0,
        why: "grande → massimo。",
        say: "massimo",
      },
      {
        q: "「最悪の点」はどれ？",
        o: ["un voto pessimo", "un voto ottimo", "un voto massimo"],
        a: 0,
        why: "pessimo は最悪。",
        say: "un voto pessimo",
      },
      {
        q: "Oggi sto ___ .（昨日より良い）",
        o: ["meglio", "migliore", "ottimo"],
        a: 0,
        why: "stare を説明する副詞。",
      },
      {
        t: "order",
        ja: "兄は医者です。",
        it: ["Mio fratello maggiore è medico."],
      },
      {
        t: "order",
        ja: "このワインは最高です。",
        it: ["Questo vino è ottimo."],
      },
    ],
    read: {
      kind: "レビューを読む",
      title: "Due ristoranti",
      lines: [
        [
          "Il ristorante Sole è il migliore del quartiere: il pesce è ottimo.",
          "レストラン・ソーレは地区で最高です。魚は絶品です。",
        ],
        [
          "Il servizio, però, è pessimo: abbiamo aspettato un'ora.",
          "ただしサービスは最悪で、1時間待ちました。",
        ],
        [
          "Il ristorante Luna è meno famoso, ma i prezzi sono minori.",
          "レストラン・ルーナは有名ではありませんが、値段は安いです。",
        ],
        [
          "La qualità è inferiore, ma i camerieri sono gentili.",
          "質は劣りますが、給仕は親切です。",
        ],
        [
          "Secondo me, per una cena importante è meglio il Sole.",
          "私の考えでは、大事な夕食ならソーレの方がいいです。",
        ],
      ],
      gloss: [
        ["quartiere", "地区"],
        ["servizio", "サービス"],
      ],
      q: [
        {
          skill: "match",
          s: "ソーレの欠点は？",
          o: ["サービスが悪い", "魚がまずい", "値段が安い"],
          a: 0,
          why: "Il servizio è pessimo.",
        },
        {
          skill: "fact",
          s: "筆者の意見にあたる文は？",
          o: ["大事な夕食ならソーレの方がいい", "1時間待った", "値段が安い"],
          a: 0,
          why: "secondo me が目印です。",
        },
        {
          skill: "info",
          s: "親切な給仕がいるのは？",
          o: ["ルーナ", "ソーレ", "どちらでもない"],
          a: 0,
          why: "La qualità è inferiore, ma i camerieri sono gentili.",
        },
      ],
    },
    write: {
      task: "2つの店を、migliore と peggiore を使って比べましょう。",
      hints: ["... è migliore di ...", "... è peggiore ...", "Secondo me ..."],
      model:
        "Il bar in piazza è migliore del bar in stazione. Il caffè è ottimo, ma i prezzi sono maggiori.",
      modelJa:
        "広場のバールは駅のバールより良いです。コーヒーは最高ですが、値段は高いです。",
      check: ["特別な形を使った", "più を重ねなかった"],
    },
  },
  {
    id: "s5-fareinf",
    g: 5,
    title: "〜させる（fare＋原形）",
    goal: "fare と lasciare の後の原形を読み取れる",
    talk: [
      ["Ela", "Hai fatto riparare la macchina?", "車を修理してもらった？"],
      ["Ivo", "Sì, l'ho fatta riparare ieri.", "うん、昨日修理してもらった。"],
      ["Ela", "Mi fai vedere le foto?", "写真を見せてくれる？"],
      ["Ivo", "Certo. Lascia fare a me.", "もちろん。私に任せて。"],
      ["Ela", "Non farmi aspettare!", "待たせないでね！"],
      ["Ivo", "Non ti preoccupare.", "心配しないで。"],
    ],
    words: [
      ["far vedere", "見せる"],
      ["far sapere", "知らせる"],
      ["far cadere", "落とす"],
      ["far ridere", "笑わせる"],
      ["far aspettare", "待たせる"],
      ["far riparare", "修理してもらう"],
      ["lasciar fare", "させておく"],
      ["lasciar stare", "放っておく"],
      ["far male", "痛い"],
      ["far paura", "怖がらせる"],
    ],
    learn: [
      {
        h: "fare ＋ 原形",
        body: "他の人にさせる、してもらう意味が基本です：Ho fatto riparare la macchina（修理してもらった）。Ho fatto cadere il bicchiere のように、自分が原因の場合もあります。",
        ex: [
          ["Mi fai vedere?", "見せてくれる？"],
          ["Fammi sapere.", "知らせてね。"],
        ],
      },
      {
        h: "決まった形",
        body: "<b>far vedere</b>（見せる）、<b>far sapere</b>（知らせる）、<b>far cadere</b>（落とす）、<b>far ridere</b>（笑わせる）は1つの語のように覚えます。",
        ex: [
          ["Mi fa ridere.", "私を笑わせます。"],
          ["Ho fatto cadere il bicchiere.", "コップを落としました。"],
        ],
      },
      {
        h: "lasciare ＋ 原形",
        body: "「〜させておく」。<b>Lascia stare!</b>（放っておいて！）はよく聞きます。原文では語尾の e が落ちることも多いです：far vedere、lasciar andare。",
        ex: [
          ["Lascia stare!", "放っておいて！"],
          ["Lasciami andare.", "行かせて。"],
        ],
      },
    ],
    gram: [
      {
        q: "Ho ___ riparare la macchina.（修理してもらった）",
        o: ["fatto", "fare", "fatta riparata"],
        a: 0,
        why: "fare の過去分詞＋原形。",
      },
      {
        q: "Mi fai ___ le foto?（見せて）",
        o: ["vedere", "visto", "vedi"],
        a: 0,
        why: "fare＋原形。",
      },
      {
        q: "Ho fatto ___ il bicchiere.（落とした）",
        o: ["cadere", "caduto", "cado"],
        a: 0,
        why: "far cadere。",
      },
      {
        q: "Lascia ___ !（放っておいて）",
        o: ["stare", "stato", "sta"],
        a: 0,
        why: "lasciar stare。",
      },
      {
        q: "Ho fatto riparare la macchina. 修理したのは？",
        o: ["他の人", "自分", "車"],
        a: 0,
        why: "fare＋原形は「してもらう」。",
      },
      {
        q: "Fammi sapere. の意味は？",
        o: ["知らせてね", "知らないで", "私は知っている"],
        a: 0,
        why: "fammi＝私に〜させて。",
        say: "Fammi sapere.",
      },
      {
        t: "order",
        ja: "写真を見せてくれる？",
        it: ["Mi fai vedere le foto?"],
      },
      { t: "order", ja: "放っておいて！", it: ["Lascia stare!"] },
    ],
    read: {
      kind: "小さな話",
      title: "Il dentista",
      lines: [
        ["Da tre giorni mi faceva male un dente.", "3日前から歯が痛みました。"],
        [
          "Mia moglie mi ha detto: «Fatti vedere da un dentista!»",
          "妻が言いました。「歯医者に診てもらいなさい！」",
        ],
        [
          "Ho telefonato e mi hanno fatto aspettare mezz'ora.",
          "電話すると、30分待たされました。",
        ],
        [
          "Il dentista mi ha fatto aprire la bocca e ha riso.",
          "歯医者は口を開けさせて、笑いました。",
        ],
        [
          "«Questo dente non si può salvare. Lo togliamo?»",
          "「この歯は救えません。抜きましょうか？」",
        ],
      ],
      gloss: [
        ["dentista", "歯医者"],
        ["fatti vedere", "診てもらいなさい"],
        ["togliere", "抜く"],
      ],
      q: [
        {
          skill: "match",
          s: "妻の助言は？",
          o: ["歯医者に診てもらう", "我慢する", "薬を買う"],
          a: 0,
          why: "Fatti vedere da un dentista!",
        },
        {
          skill: "vocab",
          s: "mi faceva male un dente の意味は？",
          o: ["歯が痛かった", "歯を治した", "歯を作った"],
          a: 0,
          why: "far male＝痛い。",
        },
        {
          skill: "infer",
          s: "歯医者が笑った理由として考えられるのは？",
          o: [
            "歯がひどい状態だったから",
            "筆者が面白いから",
            "治療が終わったから",
          ],
          a: 0,
          why: "次の言葉からわかります。",
        },
      ],
    },
    write: {
      task: "誰かにしてもらったことを、fare＋原形で書きましょう。",
      hints: [
        "Ho fatto riparare ...",
        "Mi ha fatto vedere ...",
        "Fammi sapere ...",
      ],
      model:
        "Ho fatto riparare la bicicletta. Il meccanico mi ha fatto vedere il problema. Fammi sapere se vuoi il suo numero.",
      modelJa:
        "自転車を修理してもらいました。整備士が問題を見せてくれました。番号がほしければ知らせてね。",
      check: ["fare の後を原形にした", "文の意味を確かめた"],
    },
  },
  {
    id: "s6-remoto",
    g: 6,
    title: "遠過去をしっかり読む",
    goal: "物語の遠過去を見分け、原形に戻せる",
    talk: [
      ["Prof", "Che tempo è «andò»?", "andò は何の時制ですか？"],
      ["Mei", "È il passato remoto, vero?", "遠過去ですね？"],
      ["Prof", "Sì. E l'infinito?", "はい。原形は？"],
      [
        "Mei",
        "Andare. E «fece» viene da fare.",
        "andare です。fece は fare からです。",
      ],
      [
        "Prof",
        "Bravissima. Lo userai solo per leggere.",
        "とてもいいです。読むときにだけ使います。",
      ],
    ],
    words: [
      ["andò", "行った"],
      ["fu", "〜だった"],
      ["ebbe", "持った"],
      ["fece", "した"],
      ["disse", "言った"],
      ["vide", "見た"],
      ["venne", "来た"],
      ["prese", "取った"],
      ["rispose", "答えた"],
      ["mise", "置いた"],
      ["stette", "いた"],
      ["seppe", "知った"],
    ],
    learn: [
      {
        h: "規則形の語尾",
        body: "<b>-are</b>：-ai, -asti, -ò, -ammo, -aste, -arono（parlò）<br><b>-ere</b>：-ei, -esti, -é, -emmo, -este, -erono（credé）<br><b>-ire</b>：-ii, -isti, -ì, -immo, -iste, -irono（partì）<br>物語でいちばん出るのは3人称の <b>-ò, -é, -ì, -arono, -erono, -irono</b> です。未来の parlerò と区別します。",
        ex: [
          ["Parlò a lungo.", "長く話しました。"],
          ["Partirono all'alba.", "夜明けに出発しました。"],
        ],
      },
      {
        h: "よく出る不規則形",
        body: "essere：<b>fu, furono</b>　avere：<b>ebbe, ebbero</b>　fare：<b>fece, fecero</b>　dire：<b>disse, dissero</b>　vedere：<b>vide, videro</b>　venire：<b>venne, vennero</b>　prendere：<b>prese</b>　mettere：<b>mise</b>　rispondere：<b>rispose</b>　chiedere：<b>chiese</b>　stare：<b>stette</b>　dare：<b>diede / dette</b>　sapere：<b>seppe</b>",
        ex: [
          ["Fu un giorno felice.", "幸せな日でした。"],
          ["«Basta!» disse.", "「もういい！」と言いました。"],
        ],
      },
      {
        h: "読みの要点",
        body: "多くの不規則形は <b>1人称、3人称単数、3人称複数</b>だけが不規則です。原文を読むときは、-e, -ero で終わる形を原形に戻す練習をしましょう。会話で使う必要はありません（南部では使う人もいます）。",
        ex: [["Ebbero molta paura.", "彼らはとても怖がりました。"]],
      },
    ],
    gram: [
      {
        q: "disse の原形は？",
        o: ["dire", "dare", "dovere"],
        a: 0,
        why: "dire の3人称単数。",
        say: "disse",
      },
      {
        q: "vennero の原形は？",
        o: ["venire", "vendere", "vedere"],
        a: 0,
        why: "venire の3人称複数。",
        say: "vennero",
      },
      {
        q: "ebbe の原形は？",
        o: ["avere", "essere", "bere"],
        a: 0,
        why: "avere の3人称単数。",
        say: "ebbe",
      },
      {
        q: "parlò の時制は？",
        o: ["遠過去", "未来", "現在"],
        a: 0,
        why: "未来形は parlerò。",
        say: "parlò",
      },
      {
        q: "partirono は誰の形？",
        o: ["彼ら", "私", "君"],
        a: 0,
        why: "-irono は3人称複数。",
        say: "partirono",
      },
      {
        q: "mise の原形は？",
        o: ["mettere", "mescolare", "mostrare"],
        a: 0,
        why: "mettere の3人称単数。",
        say: "mise",
      },
      { t: "order", ja: "幸せな日でした。", it: ["Fu un giorno felice."] },
      { t: "order", ja: "夜明けに出発しました。", it: ["Partirono all'alba."] },
    ],
    read: {
      kind: "物語",
      title: "Il re e il contadino",
      lines: [
        [
          "Un giorno il re uscì dal castello e vide un vecchio che piantava un albero.",
          "ある日、王は城を出て、木を植える老人を見ました。",
        ],
        [
          "«Perché lo pianti?» chiese. «Non mangerai mai i suoi frutti.»",
          "「なぜ植えるのだ？」と尋ねました。「その実は決して食べられまいに」",
        ],
        [
          "Il vecchio rispose: «Mio padre piantò alberi per me. Io li pianto per i miei figli.»",
          "老人は答えました。「父は私のために木を植えました。私は子のために植えます」",
        ],
        [
          "Il re rimase in silenzio. Poi gli diede una moneta d'oro.",
          "王は黙りました。それから金貨を1枚与えました。",
        ],
        [
          "«Vedi?» disse il vecchio. «L'albero ha già dato il suo primo frutto.»",
          "「ほら」と老人は言いました。「木はもう最初の実をつけました」",
        ],
      ],
      gloss: [
        ["piantava", "植えていた"],
        ["rimase", "とどまった（rimanere）"],
      ],
      q: [
        {
          skill: "vocab",
          s: "rispose の原形は？",
          o: ["rispondere", "riposare", "ripetere"],
          a: 0,
          why: "rispondere の遠過去。",
        },
        {
          skill: "infer",
          s: "「最初の実」とは何のこと？",
          o: ["王がくれた金貨", "木の実", "老人の子"],
          a: 0,
          why: "直前の文からわかります。",
        },
        {
          skill: "main",
          s: "この話の教えは？",
          o: ["未来の世代のために働く価値", "王は金持ちだ", "木は早く育つ"],
          a: 0,
          why: "老人の言葉が中心です。",
        },
      ],
    },
    write: {
      task: "短い昔話を遠過去で3文書きましょう。読むための形なので、見本を写すだけでも構いません。",
      hints: ["C'era una volta ...", "Un giorno andò ...", "Disse: ..."],
      model:
        "C'era una volta un re. Un giorno uscì dal castello e vide un vecchio. «Chi sei?» disse.",
      modelJa:
        "昔、王がいました。ある日、城を出て老人を見ました。「誰だ？」と言いました。",
      check: ["3人称の語尾を確かめた", "近過去と混ぜなかった"],
    },
  },
  {
    id: "s6-congimp",
    g: 6,
    title: "接続法の過去を読む",
    goal: "接続法の半過去と大過去に気づいて意味が取れる",
    talk: [
      ["Tea", "Pensavo che tu fossi a Roma.", "君はローマにいると思ってた。"],
      ["Ben", "No, ho cambiato idea.", "ううん、考えを変えたんだ。"],
      [
        "Tea",
        "Credevo che avessi già comprato il biglietto.",
        "もう切符を買ったと思ってた。",
      ],
      [
        "Ben",
        "Magari l'avessi fatto! Ora costa il doppio.",
        "買っておけばよかった！今は2倍するよ。",
      ],
      ["Tea", "Vorrei che tu venissi con me.", "一緒に来てほしいな。"],
    ],
    words: [
      ["fossi", "〜である（接続法半過去）"],
      ["avessi", "持っている（接続法半過去）"],
      ["andassi", "行く（接続法半過去）"],
      ["facessi", "する（接続法半過去）"],
      ["venissi", "来る（接続法半過去）"],
      ["potessi", "できる（接続法半過去）"],
      ["magari", "〜だったらなあ"],
      ["come se", "まるで〜のように"],
      ["anche se", "たとえ〜でも"],
      ["sebbene", "〜だけれど"],
    ],
    learn: [
      {
        h: "接続法半過去の形",
        body: "<b>-assi, -assi, -asse, -assimo, -aste, -assero</b>（parlassi）。-ere は -essi、-ire は -issi。<br>essere は <b>fossi, fosse, fossero</b>。avere は <b>avessi</b>。「-ss-」が目印です。",
        ex: [
          ["Pensavo che fosse vero.", "本当だと思っていました。"],
          ["Volevo che tu venissi.", "君に来てほしかったのです。"],
        ],
      },
      {
        h: "大過去の形",
        body: "<b>avessi / fossi ＋ 過去分詞</b>：avessi mangiato、fossi partito。「もっと前」のことです。",
        ex: [["Credevo che fosse partito.", "彼は出発したと思っていました。"]],
      },
      {
        h: "願望と come se",
        body: "<b>Magari ＋ 接続法</b>で「〜だったらなあ」、<b>come se ＋ 接続法</b>で「まるで〜のように」。物語によく出ます。",
        ex: [
          ["Magari fosse vero!", "本当だったらなあ！"],
          [
            "Parla come se sapesse tutto.",
            "すべて知っているかのように話します。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "Pensavo che ___ vero. (essere)",
        o: ["fosse", "è stata", "sia stato il"],
        a: 0,
        why: "過去の考えの中は接続法半過去。",
      },
      {
        q: "Volevo che tu ___ . (venire)",
        o: ["venissi", "venivi qui", "vieni"],
        a: 0,
        why: "過去の望み。",
      },
      {
        q: "Magari ___ vero!",
        o: ["fosse", "è", "sarà"],
        a: 0,
        why: "願望は接続法。",
      },
      {
        q: "Parla come se ___ tutto. (sapere)",
        o: ["sapesse", "sa", "saprà"],
        a: 0,
        why: "come se の後は接続法。",
      },
      {
        q: "fossimo の原形は？",
        o: ["essere", "fare", "fumare"],
        a: 0,
        why: "essere の接続法半過去。",
        say: "fossimo",
      },
      {
        q: "Credevo che fosse partito. 「彼」はいつ出発したと思っていた？",
        o: ["考えていた時より前", "考えていた時より後", "今"],
        a: 0,
        why: "大過去は「より前」です。",
      },
      { t: "order", ja: "本当だったらなあ！", it: ["Magari fosse vero!"] },
      {
        t: "order",
        ja: "本当だと思っていました。",
        it: ["Pensavo che fosse vero."],
      },
    ],
    read: {
      kind: "物語の場面",
      title: "Il vecchio maestro",
      lines: [
        [
          "Tutti credevano che il vecchio maestro fosse morto.",
          "みんな、老いた先生は死んだと思っていました。",
        ],
        [
          "Una sera, però, entrò nella piazza come se nulla fosse successo.",
          "ところがある晩、何事もなかったかのように広場に入ってきました。",
        ],
        [
          "Sebbene avesse quasi novant'anni, camminava dritto.",
          "90歳近いのに、まっすぐ歩いていました。",
        ],
        [
          "I bambini gli chiesero dove fosse stato.",
          "子どもたちは、どこにいたのか尋ねました。",
        ],
        [
          "Lui sorrise: «Magari potessi dirvelo!»",
          "彼はほほえみました。「言えたらいいのだがね！」",
        ],
      ],
      gloss: [
        ["dritto", "まっすぐ"],
        ["dirvelo", "君たちにそれを言う"],
      ],
      q: [
        {
          skill: "infer",
          s: "みんなの考えは正しかった？",
          o: ["正しくなかった", "正しかった", "書かれていない"],
          a: 0,
          why: "先生は生きていました。",
        },
        {
          skill: "vocab",
          s: "come se nulla fosse successo の意味は？",
          o: [
            "何事もなかったかのように",
            "何か起きるように",
            "何も起きないように祈って",
          ],
          a: 0,
          why: "come se＋接続法。",
        },
        {
          skill: "main",
          s: "この場面の雰囲気は？",
          o: ["謎めいている", "とても悲しい", "騒がしい"],
          a: 0,
          why: "先生は答えません。",
        },
      ],
    },
    write: {
      task: "「〜だと思っていた」という勘違いを書きましょう。読むための形なので、見本を変えるだけで構いません。",
      hints: ["Pensavo che ...", "Credevo che ...", "Magari ..."],
      model:
        "Pensavo che il museo fosse aperto, ma era chiuso. Magari lo avessi saputo!",
      modelJa:
        "博物館は開いていると思っていましたが、閉まっていました。知っていればなあ！",
      check: ["-ss- の形を使った"],
    },
  },
  {
    id: "s6-participio",
    g: 6,
    title: "書き言葉の短い形",
    goal: "過去分詞や ジェルンディオで短くした文を読める",
    talk: [
      [
        "Prof",
        "Che cosa vuol dire «Finita la lezione, uscirono»?",
        "「授業が終わると彼らは出た」の意味は？",
      ],
      [
        "Li",
        "Quando la lezione è finita, sono usciti?",
        "授業が終わったとき、出た、ですか？",
      ],
      [
        "Prof",
        "Esatto. E «Essendo stanco, dormì»?",
        "その通り。では「疲れていたので眠った」は？",
      ],
      ["Li", "Siccome era stanco, ha dormito.", "疲れていたので眠った、です。"],
      [
        "Prof",
        "Bravo. Nei libri si usano molto.",
        "よくできました。本ではよく使います。",
      ],
    ],
    words: [
      ["finito il lavoro", "仕事が終わると"],
      ["arrivato a casa", "家に着くと"],
      ["detto questo", "こう言うと"],
      ["essendo", "〜なので"],
      ["avendo", "持っているので"],
      ["dopo aver", "〜した後で"],
      ["prima di", "〜する前に"],
      ["senza", "〜せずに"],
      ["per", "〜するために"],
      ["pur", "〜だけれども"],
    ],
    learn: [
      {
        h: "過去分詞で始まる文",
        body: "<b>過去分詞 ＋ 名詞</b>で「〜が終わると」を表します。語尾は名詞に合います：Finita la cena（夕食が終わると）、Detto questo（こう言うと）。動詞が見えないので、最初は戸惑う形です。",
        ex: [
          ["Finita la cena, uscirono.", "夕食が終わると出かけました。"],
          ["Detto questo, partì.", "こう言うと、出発しました。"],
        ],
      },
      {
        h: "essendo と avendo",
        body: "<b>essendo</b>（〜なので）、<b>avendo</b>（持っているので）。<b>avendo mangiato</b>（食べたので）のように過去にもなります。",
        ex: [
          ["Essendo stanco, dormì.", "疲れていたので眠りました。"],
          ["Avendo finito, uscì.", "終えたので出かけました。"],
        ],
      },
      {
        h: "前置詞＋原形",
        body: "<b>dopo aver ＋ 過去分詞</b>（〜した後で）、<b>prima di ＋ 原形</b>（〜する前に）、<b>senza ＋ 原形</b>（〜せずに）。主語が同じときに使います。",
        ex: [
          ["Dopo aver mangiato, dormì.", "食べた後で眠りました。"],
          ["Uscì senza dire niente.", "何も言わずに出かけました。"],
        ],
      },
    ],
    gram: [
      {
        q: "Finita la cena, uscirono. の意味は？",
        o: [
          "夕食が終わると出かけた",
          "夕食を作って出かけた",
          "夕食がなく出かけた",
        ],
        a: 0,
        why: "過去分詞＋名詞。",
      },
      {
        q: "___ la lezione, uscirono.（授業が終わると）",
        o: ["Finita", "Finito", "Finiti"],
        a: 0,
        why: "lezione に合わせて -a。",
      },
      {
        q: "___ stanco, dormì.（疲れていたので）",
        o: ["Essendo", "Avendo", "Stato"],
        a: 0,
        why: "essere のジェルンディオ。",
      },
      {
        q: "Dopo aver ___ , dormì.（食べた後で）",
        o: ["mangiato", "mangiare", "mangiando"],
        a: 0,
        why: "dopo aver＋過去分詞。",
      },
      {
        q: "Uscì senza ___ niente.（言わずに）",
        o: ["dire", "detto", "dicendo"],
        a: 0,
        why: "senza＋原形。",
      },
      {
        q: "Detto questo, partì. の意味は？",
        o: [
          "こう言うと出発した",
          "これを言う前に出発した",
          "これは言えず出発した",
        ],
        a: 0,
        why: "detto＝言い終えて。",
      },
      {
        t: "order",
        ja: "何も言わずに出かけました。",
        it: ["Uscì senza dire niente."],
      },
      {
        t: "order",
        ja: "食べた後で眠りました。",
        it: ["Dopo aver mangiato, dormì."],
      },
    ],
    read: {
      kind: "物語",
      title: "Il mercante",
      lines: [
        [
          "Finito il mercato, il vecchio mercante raccolse le sue cose.",
          "市が終わると、老いた商人は荷物をまとめました。",
        ],
        [
          "Essendo molto stanco, decise di dormire sotto un albero.",
          "とても疲れていたので、木の下で眠ることにしました。",
        ],
        [
          "Svegliatosi all'alba, si accorse che il suo asino non c'era più.",
          "夜明けに目を覚ますと、ロバがいないことに気づきました。",
        ],
        [
          "Senza dire una parola, si mise a camminare.",
          "一言も言わず、歩き出しました。",
        ],
        [
          "Dopo aver camminato tutto il giorno, trovò l'asino davanti a casa sua.",
          "1日中歩いた後、家の前でロバを見つけました。",
        ],
      ],
      gloss: [
        ["raccolse", "まとめた"],
        ["svegliatosi", "目を覚まして"],
        ["si accorse", "気づいた"],
        ["si mise a", "〜し始めた"],
      ],
      q: [
        {
          skill: "order",
          s: "順序が正しいのは？",
          o: [
            "市が終わる→眠る→ロバがいない→家で見つける",
            "眠る→市が終わる→家で見つける→ロバがいない",
            "家で見つける→眠る→市が終わる→ロバがいない",
          ],
          a: 0,
          why: "短い形を順にたどります。",
        },
        {
          skill: "vocab",
          s: "Essendo molto stanco の意味は？",
          o: ["とても疲れていたので", "疲れていないのに", "疲れるために"],
          a: 0,
          why: "essendo は理由を表します。",
        },
        {
          skill: "infer",
          s: "ロバが家の前にいた理由として考えられるのは？",
          o: ["自分で帰り道を知っていた", "盗まれて戻された", "商人の夢だった"],
          a: 0,
          why: "ロバが先に帰ったと読み取れます。",
        },
      ],
    },
    write: {
      task: "次の文を書き言葉の形に変えましょう：Quando ho finito il lavoro, sono uscito.",
      hints: ["Finito il lavoro, ...", "Dopo aver finito ..."],
      model:
        "Finito il lavoro, sono uscito. Dopo aver cenato, ho letto un libro.",
      modelJa: "仕事が終わると出かけました。夕食を食べた後、本を読みました。",
      check: ["過去分詞の語尾を名詞に合わせた", "主語が同じことを確かめた"],
    },
  },
  {
    id: "s6-arcaico",
    g: 6,
    title: "古いイタリア語の読み方",
    goal: "『ピノッキオ』『クオーレ』の古い綴りや言い回しを読み解ける",
    talk: [
      [
        "Sara",
        "Perché qui c'è scritto «perchè» con un altro accento?",
        "なぜここの perchè はアクセントが違うの？",
      ],
      [
        "Prof",
        "È un libro antico: allora si scriveva così.",
        "古い本だからね。当時はそう書いたんだ。",
      ],
      ["Sara", "E «babbo»?", "babbo は？"],
      [
        "Prof",
        "È il modo toscano per dire papà.",
        "「お父さん」のトスカーナの言い方だよ。",
      ],
      ["Sara", "E «colla mano»?", "colla mano は？"],
      ["Prof", "Oggi diciamo «con la mano».", "今は con la mano と言うよ。"],
    ],
    words: [
      ["babbo", "お父さん（トスカーナ）"],
      ["perchè", "perché の古い綴り"],
      ["colla", "con la の古い形"],
      ["coi", "con i"],
      ["figliuolo", "figlio の古い形"],
      ["uscio", "戸口（porta）"],
      ["costì", "そこに（lì）"],
      ["codesto", "その（聞き手の近く）"],
      ["seggiola", "いす（sedia）"],
      ["pigliare", "取る（prendere）"],
      ["giandarmi", "憲兵（carabinieri）"],
      ["dinanzi", "前に（davanti）"],
    ],
    learn: [
      {
        h: "綴りの違い",
        body: "アクセント：<b>perchè</b>（perché）、<b>sè</b>（sé）、<b>nè</b>（né）、<b>potè</b>（poté）。意味は同じです。<br>語尾が落ちる形：<b>far</b>（fare）、<b>dir</b>（dire）、<b>esser</b>（essere）、<b>son</b>（sono）、<b>tutt'</b>（tutti）。今の語を当てはめて読みます。",
        ex: [["Non so perchè.", "なぜか知りません。"]],
      },
      {
        h: "くっつく前置詞",
        body: "<b>colla, colle, coll', cogli, coi</b> は con＋冠詞です（今は col, coi 以外あまり使いません）。<b>a'</b>、<b>de'</b>、<b>ne'</b> は ai, dei, nei の古い形です。",
        ex: [["Colla mano prese il pane.", "手でパンを取りました。"]],
      },
      {
        h: "トスカーナの語",
        body: "<b>babbo</b>（papà）、<b>uscio</b>（porta）、<b>seggiola</b>（sedia）、<b>pigliare</b>（prendere）、<b>figliuolo</b>（figlio）、<b>codesto</b>（聞き手の近くの物）。Collodi も De Amicis も、今と違う語を使います。<b>わからない語で止まらず、話の流れで読む</b>のが原文の読み方です。",
        ex: [["Passate pure, babbo.", "どうぞお入りください、お父さん。"]],
      },
      {
        h: "会話の記号",
        body: "古い本では会話を <b>— ... —</b>（ダッシュ）で囲みます。今は <b>«...»</b> もよく使います。「— disse」の前後で話し手を確かめます。",
        ex: [
          [
            "— Chi sei? — disse il burattino.",
            "「誰だ？」と人形は言いました。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "babbo の意味は？",
        o: ["お父さん", "赤ちゃん", "おじいさん"],
        a: 0,
        why: "トスカーナの言い方です。",
        say: "babbo",
      },
      {
        q: "colla mano を今の言い方にすると？",
        o: ["con la mano", "a la mano", "nella mano"],
        a: 0,
        why: "colla＝con la。",
        say: "con la mano",
      },
      {
        q: "uscio を今の語で言うと？",
        o: ["porta", "finestra", "uscita"],
        a: 0,
        why: "戸口のことです。",
        say: "uscio",
      },
      {
        q: "pigliare を今の語で言うと？",
        o: ["prendere", "pagare", "piacere"],
        a: 0,
        why: "同じ意味です。",
        say: "pigliare",
      },
      {
        q: "far vedere の far は？",
        o: ["fare の語尾が落ちた形", "far という別の動詞", "fa＋r の誤植"],
        a: 0,
        why: "語尾の e が落ちています。",
      },
      {
        q: "原文でわからない語が出たら？",
        o: [
          "話の流れで推測して読み進める",
          "必ず全部調べるまで進まない",
          "本を閉じる",
        ],
        a: 0,
        why: "量を読むことが大切です。",
      },
      { t: "order", ja: "なぜか知りません。", it: ["Non so perché."] },
      {
        t: "order",
        ja: "手でパンを取りました。",
        it: ["Prese il pane con la mano."],
      },
    ],
    read: {
      kind: "原文の読み方（『ピノッキオ』より・一部省略）",
      title: "C'era una volta...",
      lines: [
        ["— C'era una volta...", "昔々…"],
        [
          "— Un re! — diranno subito i miei piccoli lettori.",
          "「王様！」と、小さな読者たちはすぐ言うでしょう。",
        ],
        ["— No, ragazzi, avete sbagliato.", "いいえ、みなさん、違います。"],
        ["C'era una volta un pezzo di legno.", "昔、1本の木ぎれがありました。"],
        [
          "Non era un legno di lusso, ma un semplice pezzo da catasta, di quelli che d'inverno si mettono nelle stufe.",
          "高級な木ではなく、冬にストーブにくべる、ありふれた薪でした。",
        ],
      ],
      gloss: [
        ["diranno", "言うだろう"],
        ["di lusso", "高級な"],
        ["catasta", "積み上げた薪"],
        ["stufe", "ストーブ（複数）"],
      ],
      q: [
        {
          skill: "infer",
          s: "書き手が「王様！」と言わせた後で否定する効果は？",
          o: [
            "読者の予想を裏切って楽しませる",
            "王様の話を始める",
            "読者を叱る",
          ],
          a: 0,
          why: "昔話のお決まりをひねっています。",
        },
        {
          skill: "match",
          s: "物語の始まりにあるのは？",
          o: ["ありふれた薪", "王様の冠", "高級な木"],
          a: 0,
          why: "un semplice pezzo da catasta.",
        },
        {
          skill: "vocab",
          s: "— ... — の記号の役割は？",
          o: ["話し言葉を示す", "数を示す", "章を示す"],
          a: 0,
          why: "古い本の会話の記号です。",
        },
      ],
    },
    write: {
      task: "「読書」タブの原文『ピノッキオ』第1章を開いて読み、わからなかった語を3つ書き出しましょう。",
      hints: ["語をタップして意味を見る", "推測してから確かめる"],
      model:
        "Ho letto il primo capitolo. Non conoscevo le parole catasta, stufa e pialla.",
      modelJa:
        "第1章を読みました。catasta、stufa、pialla という語を知りませんでした。",
      check: ["最後まで読んだ", "推測してから調べた"],
    },
  },
  {
    id: "s6-punteggiatura",
    g: 6,
    title: "句読点と文の区切り",
    goal: "句読点の働きがわかり、文を正しく区切れる",
    talk: [
      [
        "Prof",
        "Guarda: «Andiamo a mangiare, bambini!»",
        "見て。「食べに行こう、子どもたち！」",
      ],
      ["Elio", "Sì?", "はい？"],
      [
        "Prof",
        "Senza virgola: «Andiamo a mangiare bambini!»",
        "コンマなしだと「子どもを食べに行こう！」",
      ],
      ["Elio", "Oddio!", "なんと！"],
      [
        "Prof",
        "Vedi? Una virgola salva la vita.",
        "ね？コンマは命を救うんだ。",
      ],
    ],
    words: [
      ["punto", "句点（.）"],
      ["virgola", "コンマ（,）"],
      ["punto e virgola", "セミコロン（;）"],
      ["due punti", "コロン（:）"],
      ["punto interrogativo", "疑問符（?）"],
      ["punto esclamativo", "感嘆符（!）"],
      ["puntini", "省略（...）"],
      ["virgolette", "引用符（« »）"],
      ["parentesi", "かっこ"],
      ["trattino", "ハイフン"],
      ["apostrofo", "アポストロフィ"],
      ["maiuscola", "大文字"],
    ],
    learn: [
      {
        h: "コンマの働き",
        body: "呼びかけ、列挙、挿入を区切ります。日本語の読点より規則がはっきりしています。主語と動詞の間には置きません。",
        ex: [
          ["Anna, vieni qui!", "アンナ、ここに来て！"],
          ["Ho comprato pane, latte e uova.", "パン、牛乳、卵を買いました。"],
        ],
      },
      {
        h: "コロンとセミコロン",
        body: "<b>:</b> は説明や話の始まりを示します。<b>;</b> は文を切らずに長く続けるときの区切りで、古い本に多く出ます。",
        ex: [
          [
            "Ha detto una cosa: basta.",
            "彼は1つのことを言いました。もうたくさん、と。",
          ],
        ],
      },
      {
        h: "大文字とアポストロフィ",
        body: "月・曜日・国籍は小文字ですが、国名・町名・人名は大文字です。丁寧な Lei は手紙で大文字にします。<b>'</b> は母音が落ちた印で、<b>un'amica</b>（女性）と <b>un amico</b>（男性）の違いにも表れます。",
        ex: [
          [
            "Sono giapponese e vivo in Italia.",
            "私は日本人で、イタリアに住んでいます。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "「食べに行こう、子どもたち！」として正しいのは？",
        o: [
          "Andiamo a mangiare, bambini!",
          "Andiamo a mangiare bambini!",
          "Andiamo, a mangiare bambini!",
        ],
        a: 0,
        why: "呼びかけの前のコンマです。",
        say: "Andiamo a mangiare, bambini!",
      },
      {
        q: "月の名前の書き方は？",
        o: ["小文字", "大文字", "どちらも誤り"],
        a: 0,
        why: "maggio と書きます。",
      },
      {
        q: "国名の書き方は？",
        o: ["大文字で始める", "小文字で書く", "すべて大文字"],
        a: 0,
        why: "Italia と書きます。",
      },
      {
        q: "「女性の友達1人」はどれ？",
        o: ["un'amica", "un amica", "una' amica"],
        a: 0,
        why: "una の a が落ちます。",
        say: "un'amica",
      },
      {
        q: "「男性の友達1人」はどれ？",
        o: ["un amico", "un'amico", "una amico"],
        a: 0,
        why: "男性形にアポストロフィはつきません。",
        say: "un amico",
      },
      {
        q: "「:」の働きは？",
        o: ["説明や話の始まりを示す", "文の終わりを示す", "質問を示す"],
        a: 0,
        why: "コロンは続きを予告します。",
      },
      { t: "order", ja: "アンナ、ここに来て！", it: ["Anna, vieni qui!"] },
      {
        t: "order",
        ja: "パン、牛乳、卵を買いました。",
        it: ["Ho comprato pane, latte e uova."],
      },
    ],
    read: {
      kind: "説明文",
      title: "Una virgola importante",
      lines: [
        [
          "In Italia gli insegnanti raccontano spesso una storia.",
          "イタリアでは先生はよくこんな話をします。",
        ],
        [
          "Un re doveva decidere la sorte di un prigioniero.",
          "王が囚人の運命を決めなければなりませんでした。",
        ],
        [
          "Scrisse: «Graziato, non impiccato.»",
          "王は書きました。「許す、吊るすな」",
        ],
        [
          "Ma il segretario mise la virgola nel posto sbagliato: «Graziato non, impiccato.»",
          "しかし秘書はコンマを間違えて置きました。「許すな、吊るせ」",
        ],
        [
          "Forse la storia non è vera, ma la lezione è chiara.",
          "話は本当ではないかもしれませんが、教訓は明らかです。",
        ],
      ],
      gloss: [
        ["sorte", "運命"],
        ["prigioniero", "囚人"],
        ["graziato", "許された"],
        ["impiccato", "吊るされた"],
        ["scrisse", "書いた"],
      ],
      q: [
        {
          skill: "main",
          s: "この話の教訓は？",
          o: ["句読点が意味を変える", "王は残酷だ", "秘書を雇うな"],
          a: 0,
          why: "la lezione は virgola のことです。",
        },
        {
          skill: "fact",
          s: "筆者はこの話が事実だと言っている？",
          o: [
            "本当ではないかもしれないと言っている",
            "必ず事実だと言っている",
            "作者を知っていると言っている",
          ],
          a: 0,
          why: "Forse la storia non è vera.",
        },
        {
          skill: "infer",
          s: "コンマの位置で変わったことは？",
          o: ["囚人の生死", "王の名前", "手紙の日付"],
          a: 0,
          why: "文の意味が逆になります。",
        },
      ],
    },
    write: {
      task: "次の文に正しく句読点を入れましょう：anna vieni qui ho comprato pane latte e uova",
      hints: ["呼びかけの後にコンマ", "列挙にコンマ", "文頭は大文字"],
      model: "Anna, vieni qui! Ho comprato pane, latte e uova.",
      modelJa: "アンナ、ここに来て！パン、牛乳、卵を買いました。",
      check: ["文頭を大文字にした", "呼びかけの後にコンマを打った"],
    },
  },
  {
    id: "s6-mododire",
    g: 6,
    title: "慣用句を読む",
    goal: "よく出る慣用句を文脈から理解できる",
    talk: [
      ["Ale", "In bocca al lupo per l'esame!", "試験がんばって！"],
      [
        "Yu",
        "Crepi! Ho paura di fare una brutta figura.",
        "ありがとう！恥をかくのが怖いよ。",
      ],
      [
        "Ale",
        "Non ti preoccupare, sei in gamba.",
        "心配しないで、君はできる人だよ。",
      ],
      ["Yu", "Ma ho studiato all'ultimo momento.", "でも直前に勉強したんだ。"],
      [
        "Ale",
        "Meglio tardi che mai! Tieni duro.",
        "やらないよりましだよ！がんばれ。",
      ],
    ],
    words: [
      ["in bocca al lupo", "がんばって"],
      ["fare una brutta figura", "恥をかく"],
      ["essere in gamba", "有能だ"],
      ["tenere duro", "がんばり抜く"],
      ["avere le mani bucate", "浪費家だ"],
      ["essere al verde", "一文なしだ"],
      ["costare un occhio", "とても高い"],
      ["non vedere l'ora", "待ちきれない"],
      ["dare retta", "耳を貸す"],
      ["prendere in giro", "からかう"],
      ["cadere dalle nuvole", "驚く"],
      ["perdere la testa", "正気を失う"],
    ],
    learn: [
      {
        h: "文字どおりではない",
        body: "慣用句は語の意味を足しても理解できません。<b>avere le mani bucate</b>（手に穴がある）は「お金をすぐ使う人」です。読書で見つけたら、文脈から見当をつけて確かめます。",
        ex: [["Mio fratello ha le mani bucate.", "弟は浪費家です。"]],
      },
      {
        h: "体の語が多い",
        body: "<b>perdere la testa</b>（正気を失う）、<b>a occhio</b>（目分量で）、<b>dare una mano</b>（手を貸す）、<b>avere la testa fra le nuvole</b>（ぼんやりしている）。日本語の「手を貸す」のように近いものもあります。",
        ex: [["Mi dai una mano?", "手を貸してくれる？"]],
      },
      {
        h: "動物の語も多い",
        body: "<b>fame da lupi</b>（ひどい空腹）、<b>freddo cane</b>（ひどい寒さ）、<b>prendere due piccioni con una fava</b>（一石二鳥）、<b>in bocca al lupo</b>（がんばって）。",
        ex: [["Ho una fame da lupi!", "腹ぺこだ！"]],
      },
    ],
    gram: [
      {
        q: "Ha le mani bucate. の意味は？",
        o: ["浪費家だ", "手をけがした", "手が器用だ"],
        a: 0,
        why: "お金が手からこぼれます。",
      },
      {
        q: "Tieni duro! の意味は？",
        o: ["がんばれ", "固いものを持て", "離すな"],
        a: 0,
        why: "がんばり抜くことです。",
        say: "Tieni duro!",
      },
      {
        q: "「恥をかく」はどれ？",
        o: [
          "fare una brutta figura",
          "fare una bella figura",
          "fare un brutto tempo",
        ],
        a: 0,
        why: "figura は印象のことです。",
        say: "fare una brutta figura",
      },
      {
        q: "「一文なしだ」はどれ？",
        o: ["essere al verde", "essere in gamba", "essere al settimo cielo"],
        a: 0,
        why: "verde は緑ですが、慣用的な意味です。",
        say: "essere al verde",
      },
      {
        q: "In bocca al lupo! への返事は？",
        o: ["Crepi!", "Grazie mille!", "Prego!"],
        a: 0,
        why: "慣用的に Crepi! と返します。",
        say: "Crepi!",
      },
      {
        q: "Mi prendi in giro? の意味は？",
        o: ["からかってるの？", "散歩に連れて行くの？", "私をつかまえるの？"],
        a: 0,
        why: "prendere in giro は「からかう」。",
        say: "Mi prendi in giro?",
      },
      { t: "order", ja: "待ちきれない！", it: ["Non vedo l'ora!"] },
      { t: "order", ja: "手を貸してくれる？", it: ["Mi dai una mano?"] },
    ],
    read: {
      kind: "手紙",
      title: "Caro zio",
      lines: [
        [
          "Caro zio, ti scrivo perché sono al verde.",
          "おじさん、一文なしなので手紙を書いています。",
        ],
        [
          "Lo so, ho le mani bucate, ma Milano costa un occhio della testa.",
          "わかっています、僕は浪費家です。でもミラノはとても高いのです。",
        ],
        [
          "Non prendermi in giro, ti prego: ho una fame da lupi.",
          "からかわないでください。腹ぺこなのです。",
        ],
        [
          "Se mi dai una mano, ti prometto che terrò duro e troverò lavoro.",
          "手を貸してくれたら、がんばって仕事を見つけると約束します。",
        ],
        [
          "Non vedo l'ora di leggere la tua risposta.",
          "お返事を読むのが待ちきれません。",
        ],
      ],
      gloss: [["terrò duro", "がんばる（未来）"]],
      q: [
        {
          skill: "main",
          s: "手紙の目的は？",
          o: ["お金の援助を頼む", "結婚を知らせる", "苦情を言う"],
          a: 0,
          why: "sono al verde, mi dai una mano.",
        },
        {
          skill: "vocab",
          s: "costa un occhio della testa の意味は？",
          o: ["とても高い", "目が痛い", "頭が良い"],
          a: 0,
          why: "慣用句です。",
        },
        {
          skill: "infer",
          s: "書き手が自分を「浪費家」と認めた効果は？",
          o: ["正直に見せて頼みやすくする", "おじを怒らせる", "話題を変える"],
          a: 0,
          why: "先に認めて頼んでいます。",
        },
      ],
    },
    write: {
      task: "慣用句を3つ使って、友達へのメッセージを書きましょう。",
      hints: ["Sono al verde.", "Ho una fame da lupi.", "Non vedo l'ora."],
      model:
        "Ciao! Sono al verde e ho una fame da lupi. Mi dai una mano? Non vedo l'ora di vederti.",
      modelJa:
        "やあ！一文なしで腹ぺこだよ。手を貸してくれる？会うのが待ちきれないよ。",
      check: ["慣用句の形を崩さなかった"],
    },
  },
  {
    id: "s6-figure",
    g: 6,
    title: "比喩を読み取る",
    goal: "たとえの表現に気づき、書き手の意図を考えられる",
    talk: [
      [
        "Sua",
        "Che cosa vuol dire «bianca come il latte»?",
        "「牛乳のように白い」って？",
      ],
      [
        "Prof",
        "È una similitudine: paragona due cose con «come».",
        "直喩だよ。come で2つを比べるんだ。",
      ],
      ["Sua", "E «un mare di gente»?", "では「人の海」は？"],
      ["Prof", "È una metafora: non c'è «come».", "隠喩だよ。come がない。"],
      ["Sua", "Vuol dire tanta gente?", "たくさんの人ってこと？"],
      ["Prof", "Esatto!", "その通り！"],
    ],
    words: [
      ["similitudine", "直喩"],
      ["metafora", "隠喩"],
      ["paragone", "比較"],
      ["personificazione", "擬人法"],
      ["esagerazione", "誇張"],
      ["come", "〜のように"],
      ["sembrare", "〜のようだ"],
      ["simbolo", "象徴"],
      ["significato", "意味"],
      ["immagine", "イメージ"],
    ],
    learn: [
      {
        h: "直喩と隠喩",
        body: "<b>similitudine</b>（直喩）：come を使います：Corre come il vento。<br><b>metafora</b>（隠喩）：come なしで言い換えます：È un leone（ライオンのように勇敢だ）。国語で学ぶ比喩と同じです。",
        ex: [
          ["Bianca come il latte.", "牛乳のように真っ白。"],
          ["Un mare di gente.", "人の海。"],
        ],
      },
      {
        h: "擬人法と誇張",
        body: "物を人のように語るのが <b>personificazione</b>：Il vento canta。<br>大げさに言うのが <b>esagerazione</b>：Te l'ho detto mille volte!",
        ex: [
          ["Il sole sorride.", "太陽がほほえむ。"],
          ["Muoio di fame!", "お腹がすいて死にそう！"],
        ],
      },
      {
        h: "読み方",
        body: "比喩に出会ったら、① 何と何を比べているか ② どの点が似ているか ③ 書き手はどう感じさせたいか を考えます。読解で大切な力です。",
        ex: [["Il suo cuore era di pietra.", "彼の心は石でした（冷たい）。"]],
      },
    ],
    gram: [
      {
        q: "Corre come il vento. の表現は？",
        o: ["直喩", "隠喩", "誇張"],
        a: 0,
        why: "come があります。",
      },
      {
        q: "È un leone. の表現（人について）は？",
        o: ["隠喩", "直喩", "擬人法"],
        a: 0,
        why: "come なしで言い換えています。",
      },
      {
        q: "Il vento canta. の表現は？",
        o: ["擬人法", "直喩", "数字"],
        a: 0,
        why: "風を人のように語っています。",
      },
      {
        q: "Muoio di fame! の意味は？",
        o: ["とてもお腹がすいた（誇張）", "本当に死にそう", "食べ物が嫌いだ"],
        a: 0,
        why: "大げさな言い方です。",
        say: "Muoio di fame!",
      },
      {
        q: "Il suo cuore era di pietra. が伝えるのは？",
        o: ["冷たい人だ", "心臓の病気だ", "石を集めている"],
        a: 0,
        why: "石の冷たさ、固さです。",
      },
      {
        q: "un mare di gente の意味は？",
        o: ["たくさんの人", "海辺の人", "泳ぐ人"],
        a: 0,
        why: "多さのたとえです。",
        say: "un mare di gente",
      },
      { t: "order", ja: "牛乳のように真っ白。", it: ["Bianca come il latte."] },
      { t: "order", ja: "お腹がすいて死にそう！", it: ["Muoio di fame!"] },
    ],
    read: {
      kind: "詩のような文",
      title: "La sera",
      lines: [
        [
          "La sera scende piano sul paese, come una madre sul letto del bambino.",
          "夕暮れが村にゆっくり降りてきます。子どものベッドにかがむ母のように。",
        ],
        [
          "Il vento bussa alle finestre e nessuno gli apre.",
          "風が窓をたたきますが、誰も開けません。",
        ],
        ["Il mare è un vecchio che russa.", "海はいびきをかく老人です。"],
        [
          "Una stella si accende, poi cento, poi un mare di luci.",
          "星が1つ灯り、やがて百、そして光の海。",
        ],
      ],
      gloss: [
        ["bussa", "たたく"],
        ["russa", "いびきをかく"],
        ["si accende", "灯る"],
      ],
      q: [
        {
          skill: "vocab",
          s: "come una madre sul letto の表現は？",
          o: ["直喩", "隠喩", "誇張"],
          a: 0,
          why: "come があります。",
        },
        {
          skill: "vocab",
          s: "Il mare è un vecchio che russa. の表現は？",
          o: ["隠喩", "直喩", "数字"],
          a: 0,
          why: "come がありません。",
        },
        {
          skill: "main",
          s: "全体の雰囲気は？",
          o: ["穏やかで静か", "怖くて騒がしい", "怒っている"],
          a: 0,
          why: "母、いびき、星のイメージです。",
        },
      ],
    },
    write: {
      task: "自分の町の夜を、直喩と隠喩を1つずつ使って書きましょう。",
      hints: ["... come ...", "... è un ...", "Il vento ..."],
      model:
        "La città di notte è un grande mare. Le luci brillano come stelle.",
      modelJa: "夜の町は大きな海です。明かりは星のように輝きます。",
      check: ["come を使う文と使わない文を書いた"],
    },
  },
  {
    id: "s6-testi",
    g: 6,
    title: "文章の種類をとらえる",
    goal: "物語、説明文、案内、意見文を見分け、読み方を変えられる",
    talk: [
      ["Prof", "Che tipo di testo è questo?", "これはどんな種類の文章？"],
      [
        "Ama",
        "Racconta una storia: è narrativo.",
        "物語を語っているから、物語文です。",
      ],
      ["Prof", "E questo?", "ではこれは？"],
      [
        "Ama",
        "Spiega come funziona il cuore: è informativo.",
        "心臓の仕組みの説明だから、説明文です。",
      ],
      ["Prof", "E l'ultimo?", "最後のは？"],
      [
        "Ama",
        "Dice che cosa pensa l'autore: è argomentativo.",
        "書き手の考えを述べているから、意見文です。",
      ],
    ],
    words: [
      ["testo narrativo", "物語文"],
      ["testo informativo", "説明文"],
      ["testo descrittivo", "描写文"],
      ["testo argomentativo", "意見文"],
      ["testo regolativo", "手順や規則の文"],
      ["autore", "書き手"],
      ["argomento", "話題"],
      ["scopo", "目的"],
      ["titolo", "題"],
      ["paragrafo", "段落"],
      ["riassunto", "要約"],
      ["tesi", "主張"],
    ],
    learn: [
      {
        h: "種類と目印",
        body: "<b>narrativo</b>：登場人物、時間の流れ、過去形。<br><b>informativo</b>：事実、数字、現在形。<br><b>descrittivo</b>：形や色、様子。<br><b>argomentativo</b>：secondo me, quindi, però。<br><b>regolativo</b>：命令形、順序、規則。",
        ex: [
          ["C'era una volta...", "物語文の始まり。"],
          ["Prima metti l'acqua.", "手順の文。"],
        ],
      },
      {
        h: "問いに答える読み方",
        body: "読解で問われやすい力の例は、① 本文から<b>情報を探す</b> ② 複数の部分を<b>つなげて推測する</b> ③ <b>内容や形を評価する</b> です。答えの根拠となる文を必ず本文から探します。",
        ex: [["Da che cosa lo capisci?", "何からそうわかりますか？"]],
      },
      {
        h: "テストでよくある問い方の例",
        body: "<b>Qual è lo scopo del testo?</b>（文章の目的は？）、<b>A chi si riferisce ...?</b>（〜は誰を指す？）、<b>Che cosa significa ...?</b>（〜の意味は？）、<b>Secondo il testo ...</b>（本文によれば）、<b>Quale titolo è più adatto?</b>（最も適した題は？）などです（公式の一覧ではありません）。",
        ex: [["Qual è lo scopo del testo?", "文章の目的は何ですか？"]],
      },
    ],
    gram: [
      {
        q: "C'era una volta un re. の文章の種類は？",
        o: ["物語文", "説明文", "手順の文"],
        a: 0,
        why: "物語の始まりです。",
      },
      {
        q: "Il cuore batte centomila volte al giorno. の文章の種類は？",
        o: ["説明文", "物語文", "意見文"],
        a: 0,
        why: "事実を説明しています。",
      },
      {
        q: "Secondo me, la scuola deve cambiare. の文章の種類は？",
        o: ["意見文", "手順の文", "描写文"],
        a: 0,
        why: "secondo me が目印です。",
      },
      {
        q: "Metti il sale e mescola. の文章の種類は？",
        o: ["手順の文", "物語文", "意見文"],
        a: 0,
        why: "命令形が並びます。",
      },
      {
        q: "Qual è lo scopo del testo? の意味は？",
        o: ["文章の目的は何か", "文章の長さは何か", "作者は誰か"],
        a: 0,
        why: "scopo＝目的。",
        say: "Qual è lo scopo del testo?",
      },
      {
        q: "Secondo il testo の意味は？",
        o: ["本文によれば", "次の文章", "2番目の文章"],
        a: 0,
        why: "secondo＝〜によれば。",
        say: "Secondo il testo",
      },
      {
        t: "order",
        ja: "文章の目的は何ですか？",
        it: ["Qual è lo scopo del testo?"],
      },
      {
        t: "order",
        ja: "昔々、王がいました。",
        it: ["C'era una volta un re."],
      },
    ],
    read: {
      kind: "テスト形式の文章",
      title: "Il riciclo a scuola",
      lines: [
        [
          "Nella nostra scuola, dallo scorso anno, facciamo la raccolta differenziata.",
          "私たちの学校では、去年から分別収集をしています。",
        ],
        [
          "In ogni classe ci sono tre contenitori: carta, plastica e altri rifiuti.",
          "各クラスに紙、プラスチック、その他のごみの3つの容器があります。",
        ],
        [
          "In un anno la spazzatura è diminuita di un terzo.",
          "1年でごみは3分の1減りました。",
        ],
        [
          "Secondo noi, tutte le scuole dovrebbero farlo.",
          "私たちの考えでは、すべての学校がそうすべきです。",
        ],
        [
          "Non costa niente e insegna ai bambini a rispettare l'ambiente.",
          "費用はかからず、子どもに環境を大切にすることを教えます。",
        ],
      ],
      gloss: [
        ["contenitori", "容器"],
        ["è diminuita", "減った"],
        ["di un terzo", "3分の1だけ"],
        ["dovrebbero", "〜すべきだ"],
      ],
      q: [
        {
          skill: "main",
          s: "Qual è lo scopo del testo?（文章の目的は？）",
          o: ["他の学校にも勧める", "ごみの作り方を教える", "校長を紹介する"],
          a: 0,
          why: "Secondo noi, tutte le scuole dovrebbero farlo.",
        },
        {
          skill: "info",
          s: "Secondo il testo, quanti contenitori ci sono?（容器はいくつ？）",
          o: ["3つ", "2つ", "5つ"],
          a: 0,
          why: "tre contenitori.",
        },
        {
          skill: "fact",
          s: "「意見」にあたる文は？",
          o: [
            "すべての学校がそうすべきだ",
            "ごみが3分の1減った",
            "各クラスに容器が3つある",
          ],
          a: 0,
          why: "Secondo noi が目印です。",
        },
        {
          skill: "main",
          s: "Quale titolo è più adatto?（最も適した題は？）",
          o: [
            "Una buona idea per tutte le scuole",
            "La storia della plastica",
            "Come diventare insegnante",
          ],
          a: 0,
          why: "主張に合う題を選びます。",
        },
      ],
    },
    write: {
      task: "同じ話題（例：雨の日）で、物語文と説明文を1文ずつ書きましょう。",
      hints: ["Un giorno pioveva ...（物語）", "La pioggia è ...（説明）"],
      model:
        "Un giorno pioveva e Marco ha perso il treno. La pioggia cade quando le gocce nelle nuvole diventano pesanti.",
      modelJa:
        "ある日雨が降っていて、マルコは電車に乗り遅れました。雨は、雲のしずくが重くなると降ります。",
      check: ["物語は過去形にした", "説明は現在形にした"],
    },
  },
);
