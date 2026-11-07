/* 追加の文法単元（M4）後半。会話の語感、論理をつなぐ語、物語・詩・辞書の読み方。 */
window.KOKUGO.push(
  {
    id: "s5-pronominali",
    g: 5,
    title: "ce la faccio（代名詞がついた動詞）",
    goal: "andarsene、farcela、cavarsela、metterci、volerci を読み取れる",
    talk: [
      ["Nora", "Ce la fai a portare la valigia?", "そのスーツケース、運べる？"],
      [
        "Elio",
        "Sì, me la cavo. Ma è pesante! Quanto ci vuole per la stazione?",
        "うん、何とかなる。でも重い！駅までどのくらいかかる？",
      ],
      ["Nora", "Ci vogliono dieci minuti.", "10分かかるよ。"],
      ["Elio", "Con questa valigia io ci metto venti minuti! Che rabbia!", "このスーツケースだと僕は20分かかるよ！もう！"],
      [
        "Nora",
        "Non te la prendere, ti aiuto io.",
        "気を悪くしないで、手伝うから。",
      ],
      [
        "Elio",
        "Grazie. Allora, ce ne andiamo?",
        "ありがとう。じゃあ、出ようか？",
      ],
    ],
    words: [
      ["andarsene", "立ち去る"],
      ["farcela", "やり遂げる"],
      ["cavarsela", "何とかやっていく"],
      ["volerci", "（時間・物が）必要だ"],
      ["metterci", "（人が）時間をかける"],
      ["prendersela", "気を悪くする"],
      ["valigia", "スーツケース"],
      ["stazione", "駅"],
    ],
    learn: [
      {
        h: "辞書の見出しの形",
        body: "動詞に代名詞がついて、別の意味になった語です。辞書には <b>andarsene、farcela</b> の形で載っています。活用すると代名詞は動詞の前に出ます。<b>me ne vado</b>（私は立ち去る）、<b>ce la faccio</b>（やれる）、<b>non ce la faccio più</b>（もう無理）。",
        ex: [
          ["Me ne vado.", "もう行きます。"],
          ["Non ce la faccio più.", "もう無理です。"],
        ],
      },
      {
        h: "volerci と metterci",
        body: "どちらも「時間がかかる」です。<b>volerci</b> は必要な時間が主語で、<b>ci vuole un'ora / ci vogliono due ore</b> と数で形が変わります。<b>metterci</b> は人が主語で、<b>ci metto un'ora</b>（私は1時間かかる）です。物が必要なときも volerci を使います（Ci vuole pazienza.）。",
        ex: [
          ["Ci vuole pazienza.", "忍耐が必要です。"],
          ["Quanto ci metti?", "君はどのくらいかかる？"],
        ],
      },
    ],
    gram: [
      {
        q: "「私は立ち去る」は？",
        o: ["Me ne vado.", "Mi vado ne.", "Ne me vado."],
        a: 0,
        why: "me ne＋活用です。",
      },
      {
        q: "「もう無理だ」は？",
        o: [
          "Non ce la faccio più.",
          "Non la ce faccio più.",
          "Non ci faccio la più.",
        ],
        a: 0,
        why: "ce la＋活用です。",
      },
      {
        q: "「2時間かかる」は？",
        o: [
          "Ci vogliono due ore.",
          "Ci vuole due ore.",
          "Ci metto due ore vogliono.",
        ],
        a: 0,
        why: "複数なので vogliono です。",
      },
      {
        q: "「私は30分かかる」は？",
        o: [
          "Ci metto mezz'ora.",
          "Ci vuole io mezz'ora.",
          "Mi metto mezz'ora.",
        ],
        a: 0,
        why: "人が主語なら metterci です。",
      },
      {
        q: "Non te la prendere. の意味は？",
        o: ["気を悪くしないで", "それを取らないで", "行かないで"],
        a: 0,
        why: "prendersela は「気を悪くする」です。",
      },
      {
        q: "Me la cavo. の意味は？",
        o: ["何とかやれる", "それを切る", "もう帰る"],
        a: 0,
        why: "cavarsela です。",
      },
      { t: "order", ja: "もう行きます。", it: ["Me ne vado."] },
      { t: "order", ja: "忍耐が必要です。", it: ["Ci vuole pazienza."] },
    ],
    read: {
      kind: "体験談",
      title: "Ce l'ho fatta",
      lines: [
        [
          "Il primo anno in Italia è stato difficile.",
          "イタリアでの最初の年は大変でした。",
        ],
        [
          "Per fare una telefonata ci mettevo mezz'ora a preparare le frasi.",
          "電話をするのに、文を準備するのに30分かかりました。",
        ],
        [
          "Spesso pensavo: «Non ce la faccio, me ne torno a casa».",
          "よく思いました。「無理だ、家に帰ろう」",
        ],
        [
          "Una vicina mi diceva: «Non te la prendere, ci vuole tempo».",
          "隣の女性は言いました。「気を悪くしないで、時間が必要よ」",
        ],
        [
          "A poco a poco ho cominciato a cavarmela.",
          "少しずつ、何とかやれるようになりました。",
        ],
        [
          "Ieri ho litigato al telefono con la banca, in italiano, e ho vinto.",
          "昨日はイタリア語で銀行と電話で言い争って、勝ちました。",
        ],
        ["Ce l'ho fatta!", "やり遂げました！"],
      ],
      gloss: [
        ["vicina", "隣人"],
        ["a poco a poco", "少しずつ"],
        ["ho litigato", "言い争った"],
      ],
      q: [
        {
          skill: "main",
          s: "筆者の気持ちの変化は？",
          o: [
            "あきらめかけたが、やれるようになった",
            "最初から簡単だった",
            "最後に帰国した",
          ],
          a: 0,
          why: "Non ce la faccio から Ce l'ho fatta へ変わります。",
        },
        {
          skill: "infer",
          s: "銀行との話がなぜ「成果」なのか？",
          o: [
            "難しい電話の交渉をイタリア語でできたから",
            "お金をたくさん得たから",
            "銀行員になったから",
          ],
          a: 0,
          why: "最初は電話の準備に30分かかっていました。",
        },
        {
          skill: "vocab",
          s: "ci mettevo の主語は？",
          o: ["私", "電話", "文"],
          a: 0,
          why: "metterci は人が主語で、語尾が io です。",
        },
      ],
    },
    write: {
      task: "家から職場や学校までの時間を、volerci と metterci で書きましょう。",
      hints: ["Da casa a ... ci vuole ...", "Io ci metto ..."],
      model:
        "Da casa a scuola ci vuole mezz'ora in treno, ma a piedi io ci metto un'ora.",
      modelJa:
        "家から学校まで電車で30分かかりますが、歩くと私は1時間かかります。",
      check: [
        "時間の数で vuole / vogliono を選んだ",
        "人が主語のときに metto を使った",
      ],
    },
  },
  {
    id: "s5-chi",
    g: 5,
    title: "「〜する人」「〜すること」（chi、ciò che）",
    goal: "chi、quello che、ciò che、il quale の働きを読み取れる",
    talk: [
      [
        "Lina",
        "Chi dorme non piglia pesci.",
        "寝ている者は魚を捕まえられない。",
      ],
      ["Ezio", "Cioè?", "つまり？"],
      [
        "Lina",
        "È un proverbio: chi non lavora non ottiene niente.",
        "ことわざだよ。働かない人は何も得られない。",
      ],
      [
        "Ezio",
        "Non capisco tutto quello che dici.",
        "君の言うことが全部はわからない。",
      ],
      ["Lina", "Ciò che conta è provare.", "大事なのは、やってみることだよ。"],
      [
        "Ezio",
        "Hai ragione. Fa' quello che vuoi, io dormo!",
        "そのとおり。好きにして、僕は寝る！",
      ],
    ],
    words: [
      ["chi", "〜する人"],
      ["quello che", "〜すること、もの"],
      ["ciò che", "〜すること（書き言葉）"],
      ["il quale", "その人は（関係詞）"],
      ["proverbio", "ことわざ"],
      ["ottenere", "得る"],
      ["contare", "重要である、数える"],
      ["tutto quello che", "〜のすべて"],
    ],
    learn: [
      {
        h: "chi は「〜する人」",
        body: "chi は疑問文の「誰」のほかに、「〜する人（は誰でも）」の意味があります。動詞は単数です。<b>Chi studia impara.</b>（勉強する人は学ぶ）。ことわざや規則によく出ます。<b>Chi</b> で文が始まっても、最後に「?」がなければ疑問ではありません。",
        ex: [
          ["Chi cerca trova.", "探す者は見つける。"],
          ["Chi arriva tardi non entra.", "遅れて来た人は入れません。"],
        ],
      },
      {
        h: "quello che、ciò che",
        body: "「〜すること、もの」を表します。<b>ciò che</b> の方が書き言葉です。tutto をつけると「〜のすべて」です（tutto quello che so 私の知るすべて）。名詞の後の <b>che</b> と違い、前に指す語がありません。",
        ex: [
          ["Non è quello che volevo.", "それは私が望んだものではありません。"],
          ["Ciò che dici è vero.", "君の言うことは本当です。"],
        ],
      },
      {
        h: "il quale",
        body: "che と同じ関係詞ですが、書き言葉で使い、性数が変わります。<b>il quale, la quale, i quali, le quali</b>。形からどの語を指すかわかるので、長い文で役立ちます。前置詞がつく形（<b>del quale, con la quale</b>）もあります。",
        ex: [
          [
            "La sorella di Marco, la quale vive a Roma, è medico.",
            "ローマに住んでいるマルコの姉は医師です。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "Chi studia impara. の意味は？",
        o: ["勉強する人は学ぶ", "誰が勉強するの？", "誰も勉強しない"],
        a: 0,
        why: "「?」がなく、「〜する人」の意味です。",
      },
      {
        q: "「遅れた人」の動詞の形は？",
        o: ["Chi arriva tardi", "Chi arrivano tardi", "Chi arrivi tardi"],
        a: 0,
        why: "chi は単数です。",
      },
      {
        q: "「それは私の望んだものではない」は？",
        o: [
          "Non è quello che volevo.",
          "Non è chi volevo.",
          "Non è il quale volevo.",
        ],
        a: 0,
        why: "「もの」は quello che です。",
      },
      {
        q: "«ciò che» に近いのは？",
        o: ["quello che", "chi", "perché"],
        a: 0,
        why: "書き言葉の言い方です。",
      },
      {
        q: "la sorella di Marco, la quale vive a Roma で、ローマに住むのは？",
        o: ["マルコの姉", "マルコ", "2人とも"],
        a: 0,
        why: "la quale は女性単数です。",
      },
      {
        q: "«Il ragazzo con il quale parlo» の意味は？",
        o: [
          "私が話している男の子",
          "私と話す男の子の友だち",
          "男の子が話すこと",
        ],
        a: 0,
        why: "con il quale は「その人と」です。",
      },
      { t: "order", ja: "探す者は見つける。", it: ["Chi cerca trova."] },
      {
        t: "order",
        ja: "君の言うことは本当です。",
        it: ["Quello che dici è vero."],
      },
    ],
    read: {
      kind: "ことわざ集",
      title: "Cinque proverbi italiani",
      lines: [
        [
          "Chi dorme non piglia pesci: chi non si impegna non ottiene risultati.",
          "寝ている者は魚を捕まえない。努力しない人は結果を得られない。",
        ],
        [
          "Chi va piano va sano e va lontano: la calma è più utile della fretta.",
          "ゆっくり行く者は無事に遠くへ行く。落ち着きは急ぎより役に立つ。",
        ],
        [
          "Chi trova un amico trova un tesoro: un vero amico vale molto.",
          "友を見つける者は宝を見つける。本当の友には大きな価値がある。",
        ],
        [
          "Chi fa da sé fa per tre: ciò che fai da solo è fatto meglio.",
          "自分でする者は3人分をする。自分でしたことはよりよくできる。",
        ],
        [
          "Non è tutto oro quello che luccica: ciò che sembra bello può non valere niente.",
          "光るものがすべて金ではない。美しく見えるものに価値がないこともある。",
        ],
        [
          "Non tutti, però, sono d'accordo con il quarto: chi fa da sé può anche sbagliare da solo.",
          "ただし、誰もが4つ目に賛成するわけではありません。自分でする人は、ひとりで間違えることもあります。",
        ],
      ],
      gloss: [
        ["piglia", "捕まえる"],
        ["si impegna", "努力する"],
        ["fretta", "急ぎ"],
        ["tesoro", "宝"],
        ["luccica", "光る"],
      ],
      q: [
        {
          skill: "match",
          s: "ゆっくり落ち着いて行く方がよい、という教えは？",
          o: [
            "Chi va piano va sano e va lontano.",
            "Chi trova un amico trova un tesoro.",
            "Chi dorme non piglia pesci.",
          ],
          a: 0,
          why: "落ち着きを勧めています。",
        },
        {
          skill: "match",
          s: "見た目にだまされるなという意味は？",
          o: [
            "Non è tutto oro quello che luccica.",
            "Chi fa da sé fa per tre.",
            "Chi va piano va sano.",
          ],
          a: 0,
          why: "ciò che sembra bello と説明があります。",
        },
        {
          skill: "fact",
          s: "最後の文の役割は？",
          o: [
            "ことわざに別の見方を示す",
            "もう1つのことわざを紹介する",
            "全部を否定する",
          ],
          a: 0,
          why: "però で別の見方を示しています。",
        },
      ],
    },
    write: {
      task: "chi で始まる自分の決まり文句を書き、意味を説明しましょう。",
      hints: ["Chi ... ", "Cioè ..."],
      model:
        "Chi legge ogni giorno impara molte parole. Cioè, leggere è il modo migliore di studiare.",
      modelJa:
        "毎日読む人は多くの語を覚える。つまり、読むことが最良の勉強法です。",
      check: ["chi の後の動詞を単数にした", "cioè で言い換えた"],
    },
  },
  {
    id: "s5-particelle",
    g: 5,
    title: "話の調子を作る小さな語",
    goal: "mica、pure、anzi、magari、addirittura、insomma の語感がわかる",
    talk: [
      ["Bice", "Non sei mica arrabbiato?", "まさか怒ってないよね？"],
      ["Rino", "No, anzi, sono contento!", "いや、むしろうれしいよ！"],
      ["Bice", "Vieni pure con noi domani.", "明日、遠慮なく一緒においでよ。"],
      ["Rino", "Magari! Ma lavoro.", "そうできたらなあ！でも仕事なんだ。"],
      ["Bice", "Anche di domenica? Addirittura!", "日曜も？そこまで！"],
      [
        "Rino",
        "Insomma, ci vediamo la prossima volta.",
        "要するに、また次の機会にね。",
      ],
    ],
    words: [
      ["mica", "まさか、全然"],
      ["pure", "どうぞ、〜も"],
      ["anzi", "それどころか"],
      ["magari", "そうだといいな、たぶん"],
      ["addirittura", "〜さえ"],
      ["insomma", "要するに"],
      ["dunque", "さて、それで"],
      ["ecco", "ほら"],
      ["perfino", "〜さえ"],
    ],
    learn: [
      {
        h: "否定と訂正を強める",
        body: "<b>mica</b> は否定を強めます（Non è mica vero. 全然本当じゃない）。話し言葉です。<b>anzi</b> は前の内容を訂正して、より強く言います（Non è brutto, anzi è bello. 悪くない、むしろいい）。",
        ex: [
          ["Non sono mica stanco.", "全然疲れていません。"],
          ["Non mi dispiace, anzi!", "嫌じゃない、むしろ歓迎です！"],
        ],
      },
      {
        h: "気持ちを添える",
        body: "<b>pure</b> は命令形の後で「遠慮なく」（Entra pure!）、文中で「〜も」（Viene pure lui.）。<b>magari</b> は単独で「そうだといいな！」、文中で「たぶん、もしかすると」（Magari domani piove.）。<b>addirittura、perfino</b> は「〜さえ」で驚きを表します。",
        ex: [
          ["Entra pure!", "どうぞ入って！"],
          ["Ha mangiato perfino il piatto!", "お皿まで食べました！"],
        ],
      },
      {
        h: "話をまとめる",
        body: "<b>insomma</b>（要するに、まあまあ）、<b>dunque</b>（さて、それで）、<b>ecco</b>（ほら、そう）、<b>cioè</b>（つまり）は話の流れを示します。訳さなくても意味がわかることがあります。Come stai? — Insomma... は「まあまあ」で、あまり良くない感じです。",
        ex: [["Come stai? — Insomma...", "元気？——まあまあ……"]],
      },
    ],
    gram: [
      {
        q: "Non è mica vero. の意味は？",
        o: ["全然本当じゃない", "たぶん本当だ", "本当にほしい"],
        a: 0,
        why: "mica は否定を強めます。",
      },
      {
        q: "Magari! の単独の意味は？",
        o: ["そうだといいな！", "絶対にいやだ！", "ありがとう！"],
        a: 0,
        why: "願望を表します。",
      },
      {
        q: "Entra pure! の意味は？",
        o: ["どうぞ入って", "入らないで", "入ることもある"],
        a: 0,
        why: "命令形の後の pure は許可です。",
      },
      {
        q: "「悪くない、むしろいい」は？",
        o: [
          "Non è male, anzi è buono.",
          "Non è male, mica è buono.",
          "Non è male, ecco buono.",
        ],
        a: 0,
        why: "anzi は「むしろ」です。",
      },
      {
        q: "Ha pianto perfino il nonno. の意味は？",
        o: ["祖父さえ泣いた", "祖父は泣かなかった", "祖父も笑った"],
        a: 0,
        why: "perfino は「〜さえ」です。",
      },
      {
        q: "Come stai? — Insomma... の気分は？",
        o: ["あまり良くない", "最高だ", "怒っている"],
        a: 0,
        why: "まあまあ、の調子です。",
      },
      { t: "order", ja: "どうぞ入って！", it: ["Entra pure!"] },
      { t: "order", ja: "全然疲れていません。", it: ["Non sono mica stanco."] },
    ],
    read: {
      kind: "会話文",
      title: "Il compleanno dimenticato",
      lines: [
        [
          "«Oggi è il mio compleanno.» «Non è mica vero! È domani.»",
          "「今日は僕の誕生日だ」「全然違うよ！明日だよ」",
        ],
        [
          "«Ma no, è oggi, anzi era oggi: è già mezzanotte!»",
          "「いや今日だ、いや、今日だった。もう真夜中だ！」",
        ],
        [
          "«Scusami, non mi sono ricordato. Volevi una festa?»",
          "「ごめん、覚えていなかった。パーティーがしたかった？」",
        ],
        [
          "«Magari! Invece ho lavorato fino a tardi.»",
          "「そうだったらなあ！でも遅くまで働いたよ」",
        ],
        [
          "«Addirittura di sabato? Dunque, facciamo così: domani invito tutti.»",
          "「土曜まで？じゃあ、こうしよう。明日みんなを呼ぶよ」",
        ],
        [
          "«Insomma, ti sei ricordato troppo tardi.» «Ecco, ma la torta la porto io!»",
          "「要するに、思い出すのが遅すぎたね」「そう、でもケーキは僕が持っていく！」",
        ],
      ],
      gloss: [
        ["mezzanotte", "真夜中"],
        ["invece", "ところが"],
      ],
      q: [
        {
          skill: "infer",
          s: "«Magari!» の後でわかる事実は？",
          o: ["パーティーはなかった", "パーティーをした", "仕事を休んだ"],
          a: 0,
          why: "願望で、現実は働いていました。",
        },
        {
          skill: "vocab",
          s: "anzi era oggi の anzi の働きは？",
          o: ["言い直して正確にする", "理由を述べる", "例を挙げる"],
          a: 0,
          why: "真夜中を過ぎたので言い直しています。",
        },
        {
          skill: "infer",
          s: "話し手2人の関係は？",
          o: ["親しい仲", "初対面", "客と店員"],
          a: 0,
          why: "tu で話し、軽い語を使っています。",
        },
      ],
    },
    write: {
      task: "anzi と magari を使って、友だちとの短い会話を書きましょう。",
      hints: ["Sei stanco? — No, anzi ...", "Vieni? — Magari! Ma ..."],
      model:
        "Sei stanco? — No, anzi, sto benissimo. Vieni al mare domani? — Magari! Ma devo lavorare.",
      modelJa:
        "疲れてる？——いや、むしろ絶好調。明日海に来る？——そうできたらなあ！でも働かないと。",
      check: ["anzi で前の内容を強めた", "magari を願望で使った"],
    },
  },
  {
    id: "s5-causa",
    g: 5,
    title: "理由と結果をつなぐ語",
    goal: "poiché、siccome、perciò、quindi、così ... che を読み取れる",
    talk: [
      ["Dino", "Siccome piove, resto a casa.", "雨なので、家にいるよ。"],
      ["Mara", "Allora non vieni alla partita?", "じゃあ試合には来ないの？"],
      [
        "Dino",
        "No. Ero così stanco che ho dormito fino a mezzogiorno.",
        "うん。とても疲れてて、昼まで寝たんだ。",
      ],
      [
        "Mara",
        "Dato che sei libero, mi aiuti?",
        "暇なんだから、手伝ってくれる？",
      ],
      ["Dino", "A cosa?", "何を？"],
      [
        "Mara",
        "La casa è sporca, quindi puliamo!",
        "家が汚いから、掃除しよう！",
      ],
    ],
    words: [
      ["siccome", "〜なので（文頭）"],
      ["poiché", "〜なので（書き言葉）"],
      ["dato che", "〜である以上"],
      ["perciò", "だから"],
      ["quindi", "したがって"],
      ["infatti", "実際、その証拠に"],
      ["così ... che", "とても…なので〜"],
      ["tanto ... da", "〜するほど…"],
      ["a causa di", "〜のせいで"],
      ["grazie a", "〜のおかげで"],
    ],
    learn: [
      {
        h: "理由を示す語",
        body: "<b>perché</b>（なぜなら。普通は後ろに来る）。<b>siccome</b>（文頭で「〜なので」）。<b>poiché</b>（文語的）、<b>dato che</b>（説明でよく使う）。名詞の前では、悪い原因に <b>a causa di</b>、良い原因に <b>grazie a</b> を使います。",
        ex: [
          [
            "Siccome ero malato, non sono andato a scuola.",
            "病気だったので、学校へ行きませんでした。",
          ],
          ["Grazie a te, ho capito.", "君のおかげでわかりました。"],
        ],
      },
      {
        h: "結果を示す語",
        body: "<b>quindi, perciò, dunque</b> は「だから」で、結果の文を導きます。<b>così ... che</b>、<b>talmente ... che</b> は「とても…なので〜」、<b>tanto ... da</b>＋原形は「〜するほど…」です。<b>infatti</b> は「実際、その証拠に」で、前の内容を裏づけます（「ところが実は」ではありません）。",
        ex: [
          [
            "Era così buono che ne ho mangiati tre.",
            "とてもおいしくて、3つ食べました。",
          ],
          [
            "Sapevo che pioveva: infatti, ho preso l'ombrello.",
            "雨だと知っていました。実際、傘を持ちました。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "「雨なので家にいる」で文頭に置けるのは？",
        o: [
          "Siccome piove, resto a casa.",
          "Quindi piove, resto a casa.",
          "Infatti piove, resto a casa.",
        ],
        a: 0,
        why: "siccome は文頭で理由を示します。",
      },
      {
        q: "「君のおかげで」は？",
        o: ["grazie a te", "a causa di te grazie", "perciò te"],
        a: 0,
        why: "良い原因は grazie a です。",
      },
      {
        q: "「雪のせいで」は？",
        o: ["a causa della neve", "grazie alla neve", "perciò la neve"],
        a: 0,
        why: "悪い原因は a causa di です。",
      },
      {
        q: "Era così stanco che è andato a letto. の意味は？",
        o: [
          "とても疲れていたので寝た",
          "疲れていたが寝なかった",
          "寝たので疲れた",
        ],
        a: 0,
        why: "così ... che は結果です。",
      },
      {
        q: "Ha studiato molto, quindi ... に続くのは？",
        o: [
          "ha superato l'esame.",
          "non sa niente.",
          "perché ha superato l'esame.",
        ],
        a: 0,
        why: "quindi の後は自然な結果です。",
      },
      {
        q: "infatti の働きは？",
        o: ["前の内容を裏づける", "前の内容を否定する", "話題を変える"],
        a: 0,
        why: "「実際、その証拠に」です。",
      },
      {
        t: "order",
        ja: "君のおかげでわかりました。",
        it: ["Grazie a te, ho capito."],
      },
      {
        t: "order",
        ja: "雨なので家にいます。",
        it: ["Siccome piove, resto a casa."],
      },
    ],
    read: {
      kind: "説明文",
      title: "Perché cadono le foglie",
      lines: [
        [
          "In autunno le giornate diventano più corte e c'è meno luce.",
          "秋には昼が短くなり、光が少なくなります。",
        ],
        [
          "Poiché le foglie hanno bisogno di luce per produrre il nutrimento, lavorano sempre meno.",
          "葉は栄養を作るのに光が必要なので、だんだん働かなくなります。",
        ],
        [
          "Inoltre in inverno l'acqua nel terreno può gelare, quindi l'albero ne riceve poca.",
          "さらに冬は土の水が凍ることがあり、そのため木に届く水は少なくなります。",
        ],
        [
          "Le foglie perdono molta acqua, perciò l'albero se ne libera per risparmiarla.",
          "葉は多くの水を失うので、木は水を節約するために葉を手放します。",
        ],
        [
          "A causa di questo processo le foglie cambiano colore e poi cadono.",
          "この過程のため、葉は色を変えて落ちます。",
        ],
        [
          "Grazie a questo «sonno», l'albero sopravvive fino alla primavera.",
          "この「眠り」のおかげで、木は春まで生き延びます。",
        ],
      ],
      gloss: [
        ["nutrimento", "栄養"],
        ["gelare", "凍る"],
        ["se ne libera", "それを手放す"],
        ["sopravvive", "生き延びる"],
      ],
      q: [
        {
          skill: "match",
          s: "葉を落とす理由に当たるのは？",
          o: ["水を節約するため", "鳥に場所を空けるため", "土を暖めるため"],
          a: 0,
          why: "per risparmiarla.",
        },
        {
          skill: "ref",
          s: "se ne libera の ne は何を指す？",
          o: ["葉", "水", "光"],
          a: 0,
          why: "手放すのは葉です。",
        },
        {
          skill: "main",
          s: "文章の中心は？",
          o: [
            "葉が落ちるのは木が冬を越すためだ",
            "秋の葉は美しい",
            "冬は水が多い",
          ],
          a: 0,
          why: "最後の文にまとまっています。",
        },
      ],
    },
    write: {
      task: "最近の出来事を、siccome と quindi を使って書きましょう。",
      hints: ["Siccome ..., ...", "... quindi ..."],
      model:
        "Siccome ieri ero stanco, sono andato a letto presto. Stamattina sto meglio, quindi studio un'ora.",
      modelJa:
        "昨日は疲れていたので早く寝ました。今朝は調子がいいので、1時間勉強します。",
      check: ["siccome の節を文頭に置いた", "quindi の後を結果にした"],
    },
  },
  {
    id: "s5-contrasto",
    g: 5,
    title: "対比と逆接の語",
    goal: "però、invece、tuttavia、anche se、nonostante で話の転換をつかめる",
    talk: [
      ["Sofia", "Hai letto il libro?", "その本、読んだ？"],
      [
        "Aldo",
        "Sì. È lungo, però mi è piaciuto.",
        "うん。長いけど、気に入ったよ。",
      ],
      [
        "Sofia",
        "A me, invece, non è piaciuto.",
        "私の方は、好きじゃなかった。",
      ],
      ["Aldo", "Perché è difficile?", "難しいから？"],
      [
        "Sofia",
        "Non è difficile. Tuttavia è noioso.",
        "難しくはないよ。ただ、退屈なの。",
      ],
      [
        "Aldo",
        "Nonostante tutto, ne ha venduti molti.",
        "それでも、たくさん売れたね。",
      ],
    ],
    words: [
      ["però", "しかし"],
      ["invece", "一方、それどころか"],
      ["tuttavia", "しかしながら"],
      ["eppure", "それでも"],
      ["anche se", "たとえ〜でも"],
      ["nonostante", "〜にもかかわらず"],
      ["mentre", "〜である一方"],
      ["al contrario", "反対に"],
      ["noioso", "退屈な"],
    ],
    learn: [
      {
        h: "読解の曲がり角",
        body: "<b>ma, però, tuttavia, eppure</b> の後には、筆者の本音や大事な内容が来ることがよくあります。読むときの目印にします。<b>invece</b> は2つを比べて「一方」（Io lavoro, lui invece dorme.）。<b>mentre</b> も「一方」の意味で使います。",
        ex: [
          ["È vecchio, però funziona.", "古いですが、動きます。"],
          ["Io lavoro, lui invece dorme.", "私は働いて、彼の方は寝ています。"],
        ],
      },
      {
        h: "anche se と nonostante",
        body: "事実を述べる <b>anche se</b> には普通の活用が続きます（Anche se piove, esco.）。<b>nonostante</b> は名詞が続くか（nonostante la pioggia）、接続法が続きます（nonostante piova）。<b>eppure</b> は「それでも」で、意外な気持ちを含みます。",
        ex: [
          ["Anche se piove, esco.", "雨でも出かけます。"],
          [
            "Nonostante la pioggia, siamo usciti.",
            "雨にもかかわらず、出かけました。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "「雨でも出かける」は？",
        o: [
          "Anche se piove, esco.",
          "Anche piove se, esco.",
          "Quindi piove, esco.",
        ],
        a: 0,
        why: "事実を述べるときの anche se は普通の活用です。",
      },
      {
        q: "「雨にもかかわらず」は？",
        o: [
          "nonostante la pioggia",
          "anche se la pioggia",
          "grazie alla pioggia",
        ],
        a: 0,
        why: "nonostante＋名詞です。",
      },
      {
        q: "Io lavoro, lui invece dorme. の invece は？",
        o: ["2人を比べている", "理由を述べている", "順序を示している"],
        a: 0,
        why: "対比です。",
      },
      {
        q: "È ricco, eppure ... に続くのは？",
        o: ["non è felice.", "ha molti soldi.", "è ricco."],
        a: 0,
        why: "予想に反する内容が続きます。",
      },
      {
        q: "筆者の本音が来やすいのは？",
        o: ["tuttavia の後", "per esempio の前", "題名の前"],
        a: 0,
        why: "逆接の後は重要です。",
      },
      {
        q: "Non è caro, al contrario è economico. の意味は？",
        o: [
          "高くない、反対に安い",
          "高くない、だから買わない",
          "安くない、反対に高い",
        ],
        a: 0,
        why: "al contrario は「反対に」です。",
      },
      {
        t: "order",
        ja: "古いですが、動きます。",
        it: ["È vecchio, però funziona."],
      },
      { t: "order", ja: "雨でも出かけます。", it: ["Anche se piove, esco."] },
    ],
    read: {
      kind: "意見文",
      title: "Compiti sì o compiti no?",
      lines: [
        [
          "Molti genitori pensano che i compiti siano necessari.",
          "多くの親は宿題が必要だと考えます。",
        ],
        [
          "Servono, dicono, per ripetere ciò che si è imparato a scuola.",
          "学校で習ったことを繰り返すのに役立つと言います。",
        ],
        [
          "Altri, invece, ritengono che i bambini ne abbiano troppi.",
          "一方、子どもの宿題は多すぎると考える人もいます。",
        ],
        [
          "Anche se a scuola passano molte ore, a casa devono ancora lavorare.",
          "学校で長い時間を過ごしても、家でまだ勉強しなければなりません。",
        ],
        [
          "Nonostante ciò, nessuno vuole eliminarli del tutto.",
          "それでも、完全になくしたい人はいません。",
        ],
        [
          "Tuttavia, secondo me, il problema non è la quantità: è il senso.",
          "しかし私の考えでは、問題は量ではなく意味です。",
        ],
        [
          "Un compito utile si fa volentieri; uno inutile è tempo perso.",
          "役に立つ宿題は進んでやり、無意味な宿題は時間の無駄です。",
        ],
      ],
      gloss: [
        ["ritengono", "考える"],
        ["quantità", "量"],
        ["volentieri", "喜んで"],
        ["eliminarli", "それらをなくす"],
      ],
      q: [
        {
          skill: "main",
          s: "筆者の主張は？",
          o: [
            "量より宿題の意味が大事だ",
            "宿題はなくすべきだ",
            "宿題はもっと増やすべきだ",
          ],
          a: 0,
          why: "Tuttavia, secondo me 以下です。",
        },
        {
          skill: "fact",
          s: "第3文の考えは誰のもの？",
          o: ["一部の人", "筆者", "教師全員"],
          a: 0,
          why: "Altri ... ritengono.",
        },
        {
          skill: "vocab",
          s: "Nonostante ciò の ciò が指すのは？",
          o: ["宿題が多すぎるという不満", "学校の場所", "親の仕事"],
          a: 0,
          why: "直前の内容です。",
        },
      ],
    },
    write: {
      task: "好きなものの長所と短所を、però と anche se を使って書きましょう。",
      hints: ["... è ..., però ...", "Anche se ..., ..."],
      model:
        "Il caffè è buono, però di sera non dormo. Anche se lo so, ne bevo una tazza.",
      modelJa:
        "コーヒーはおいしいですが、夜は眠れなくなります。わかっていても1杯飲みます。",
      check: [
        "però の後に反対の内容を書いた",
        "事実なので anche se の後を普通の活用にした",
      ],
    },
  },
  {
    id: "s6-gerpass",
    g: 6,
    title: "分詞とジェルンディオの過去の形",
    goal: "avendo fatto、essendo arrivato、finito il lavoro の時間関係を読める",
    talk: [
      [
        "Guida",
        "Avendo perso il treno, il re arrivò tardi.",
        "列車に乗り遅れて、王は遅れて着きました。",
      ],
      ["Turista", "E che cosa fece?", "それで何をしたのですか？"],
      [
        "Guida",
        "Essendo stanco, andò a dormire.",
        "疲れていたので、寝に行きました。",
      ],
      ["Turista", "E il giorno dopo?", "翌日は？"],
      [
        "Guida",
        "Finita la cena, parlò al popolo.",
        "夕食が終わると、人々に語りました。",
      ],
      [
        "Turista",
        "Sembra una frase di un vecchio libro!",
        "古い本の文みたいですね！",
      ],
    ],
    words: [
      ["avendo", "持っていて"],
      ["essendo", "〜であって"],
      ["avendo fatto", "〜してしまって"],
      ["essendo arrivato", "着いてしまって"],
      ["finito", "終わった"],
      ["detto ciò", "そう言って"],
      ["popolo", "民衆"],
      ["re", "王"],
    ],
    learn: [
      {
        h: "過去のジェルンディオ",
        body: "<b>avendo / essendo</b>＋過去分詞で「〜した後で、〜したので」です。主節より前の出来事で、ふつう主語は主節と同じです。essendo のときは過去分詞が性数変化します（<b>essendo arrivata</b>）。",
        ex: [
          ["Avendo finito, sono uscito.", "終えたので、出かけました。"],
          [
            "Essendo arrivata tardi, non ha trovato posto.",
            "遅く着いたので、彼女は席を見つけられませんでした。",
          ],
        ],
      },
      {
        h: "分詞の節",
        body: "過去分詞だけで節を作る形もあります。<b>Finita la cena, ...</b>（夕食が終わると）、<b>Detto ciò, ...</b>（そう言うと）、<b>Arrivato a casa, ...</b>（家に着くと）。分詞が修飾する語に合わせて性数が変わります。原文の物語によく出ます。",
        ex: [
          ["Finita la cena, uscirono.", "夕食が終わると、彼らは出かけました。"],
          ["Detto ciò, se ne andò.", "そう言うと、立ち去りました。"],
        ],
      },
    ],
    gram: [
      {
        q: "Avendo finito, sono uscito. で先に起きたのは？",
        o: ["終えること", "出かけること", "同時"],
        a: 0,
        why: "過去のジェルンディオは主節より前です。",
      },
      {
        q: "「遅く着いたので（彼女）」の正しい形は？",
        o: [
          "Essendo arrivata tardi",
          "Avendo arrivata tardi",
          "Essendo arrivato lei tardi",
        ],
        a: 0,
        why: "arrivare は essere で、性数が一致します。",
      },
      {
        q: "Finita la cena の意味は？",
        o: ["夕食が終わると", "夕食を作って", "夕食を始めると"],
        a: 0,
        why: "分詞の節です。",
      },
      {
        q: "Detto ciò, se ne andò. の順序は？",
        o: [
          "言って、それから去った",
          "去って、それから言った",
          "言わずに去った",
        ],
        a: 0,
        why: "分詞が先の出来事です。",
      },
      {
        q: "Finite le lezioni の finite が女性複数の理由は？",
        o: ["le lezioni に合わせるから", "主語が女性だから", "命令形だから"],
        a: 0,
        why: "修飾する語に合わせます。",
      },
      {
        q: "Avendo mangiato troppo, stava male. の意味は？",
        o: [
          "食べすぎたので具合が悪かった",
          "具合が悪いのに食べすぎた",
          "食べすぎるところだった",
        ],
        a: 0,
        why: "理由を表します。",
      },
      {
        t: "order",
        ja: "終えたので、出かけました。",
        it: ["Avendo finito, sono uscito."],
      },
    ],
    read: {
      kind: "古い物語風の文章",
      title: "Il mercante e il ladro",
      lines: [
        [
          "Un mercante, avendo venduto tutta la sua merce, tornava a casa di notte.",
          "ある商人が、品物を全部売って、夜に家へ帰っていました。",
        ],
        [
          "Essendo molto stanco, si fermò a dormire sotto un albero.",
          "とても疲れていたので、木の下で寝るため立ち止まりました。",
        ],
        [
          "Un ladro, visto il sacco che sembrava pieno di monete, si avvicinò in silenzio.",
          "泥棒は硬貨でいっぱいに見える袋を見て、静かに近づきました。",
        ],
        [
          "Preso il sacco, stava per fuggire quando sentì una voce.",
          "袋を取って逃げようとしたとき、声が聞こえました。",
        ],
        [
          "«Portalo pure» disse il mercante, che non dormiva. «Dentro ci sono soltanto sassi.»",
          "「持って行くといい」と眠っていなかった商人は言いました。「中身は石だけだ」",
        ],
        [
          "Il ladro, aperto il sacco e trovati i sassi, fuggì pieno di vergogna.",
          "泥棒は袋を開けて石を見つけ、恥ずかしさでいっぱいになって逃げました。",
        ],
        [
          "Le monete, nascoste nella scarpa, erano al sicuro.",
          "硬貨は靴に隠され、無事でした。",
        ],
      ],
      gloss: [
        ["mercante", "商人"],
        ["merce", "品物"],
        ["ladro", "泥棒"],
        ["fuggire", "逃げる"],
        ["sassi", "石（複数）"],
        ["vergogna", "恥"],
        ["al sicuro", "安全に"],
      ],
      q: [
        {
          skill: "infer",
          s: "商人が賢かった点は？",
          o: [
            "硬貨を靴に隠して袋に石を入れた",
            "泥棒を捕まえた",
            "夜に寝なかった",
          ],
          a: 0,
          why: "最後の文が種明かしです。",
        },
        {
          skill: "vocab",
          s: "Preso il sacco の意味は？",
          o: ["袋を取ると", "袋を買って", "袋をなくして"],
          a: 0,
          why: "prendere の過去分詞の節です。",
        },
        {
          skill: "fact",
          s: "泥棒が袋を見たのはいつ？",
          o: ["近づく前", "逃げた後", "朝"],
          a: 0,
          why: "visto il sacco ..., si avvicinò.",
        },
      ],
    },
    write: {
      task: "短い物語の文を、avendo か essendo を使って書きましょう。",
      hints: ["Avendo ..., ...", "Essendo ..., ..."],
      model:
        "Avendo perso le chiavi, Luca non poté entrare. Essendo stanco, si sedette sulle scale.",
      modelJa:
        "鍵をなくしたので、ルカは入れませんでした。疲れていたので、階段に座りました。",
      check: ["主節より前の出来事を書いた", "主語が主節と同じになっている"],
    },
  },
  {
    id: "s6-congconj",
    g: 6,
    title: "接続法をとる接続詞",
    goal: "benché、affinché、purché、prima che、senza che の意味を読み取れる",
    talk: [
      [
        "Alba",
        "Benché sia tardi, resto ancora un po'.",
        "遅いけれど、もう少しいるよ。",
      ],
      [
        "Ciro",
        "Purché tu non perda l'ultimo treno.",
        "終電に乗り遅れなければね。",
      ],
      [
        "Alba",
        "Ti aiuto, affinché tu finisca presto.",
        "早く終わるように手伝うよ。",
      ],
      [
        "Ciro",
        "Grazie. Parti prima che arrivi tuo padre?",
        "ありがとう。お父さんが来る前に出るの？",
      ],
      [
        "Alba",
        "Sì. Esco senza che nessuno mi veda.",
        "うん。誰にも見られずに出るよ。",
      ],
      ["Ciro", "Sembri una spia!", "スパイみたい！"],
    ],
    words: [
      ["benché", "〜だけれども"],
      ["sebbene", "〜だけれども"],
      ["affinché", "〜するように"],
      ["perché", "〜するように（接続法で）"],
      ["purché", "〜しさえすれば"],
      ["a meno che", "〜でない限り"],
      ["prima che", "〜する前に"],
      ["senza che", "〜することなしに"],
      ["spia", "スパイ"],
    ],
    learn: [
      {
        h: "読むときの意味",
        body: "<b>benché, sebbene</b>（〜だけれども）、<b>affinché</b>（〜するように）、<b>purché, a condizione che</b>（〜という条件で）、<b>a meno che ... non</b>（〜でない限り）、<b>prima che</b>（〜する前に）、<b>senza che</b>（〜なしに）。後ろの動詞は接続法ですが、読むときは接続詞の意味を押さえれば十分です。",
        ex: [
          [
            "Benché sia ricco, vive in una casa piccola.",
            "お金持ちですが、小さな家に住んでいます。",
          ],
          ["Vengo, purché tu mi aspetti.", "待ってくれるなら行きます。"],
        ],
      },
      {
        h: "perché の2つの顔",
        body: "<b>perché</b>＋普通の活用は「なぜなら」、<b>perché</b>＋接続法は「〜するように」です。Parlo piano perché dorme.（寝ているので小声で話す）、Parlo piano perché lui dorma.（彼が眠れるように小声で話す）。<b>a meno che</b> の後の <b>non</b> は否定に数えません。",
        ex: [
          [
            "Te lo dico perché tu lo sappia.",
            "君が知っておくように言うのです。",
          ],
          ["Vado, a meno che non piova.", "雨でない限り行きます。"],
        ],
      },
    ],
    gram: [
      {
        q: "Benché sia stanco, lavora. の意味は？",
        o: ["疲れているが働く", "疲れているので働かない", "働くので疲れる"],
        a: 0,
        why: "benché は譲歩です。",
      },
      {
        q: "Vengo purché tu mi aspetti. の条件は？",
        o: ["待ってくれること", "来ないこと", "急ぐこと"],
        a: 0,
        why: "purché は条件です。",
      },
      {
        q: "Te lo spiego affinché tu capisca. の意味は？",
        o: [
          "君がわかるように説明する",
          "君がわかったので説明する",
          "わからないのに説明する",
        ],
        a: 0,
        why: "affinché は目的です。",
      },
      {
        q: "Vado, a meno che non piova. で行くのは？",
        o: ["雨でないとき", "雨のとき", "いつも行かない"],
        a: 0,
        why: "「〜でない限り」です。",
      },
      {
        q: "Parlo piano perché lui dorma. の意味は？",
        o: [
          "彼が眠れるように小声で話す",
          "彼が寝ているので小声で話す",
          "彼が小声で話す",
        ],
        a: 0,
        why: "接続法なので目的です。",
      },
      {
        q: "È uscito senza che lo vedessimo. の意味は？",
        o: [
          "私たちに見られずに出た",
          "私たちを見ずに出た",
          "私たちと一緒に出た",
        ],
        a: 0,
        why: "主語は「彼」で、見られなかったのです。",
      },
      {
        t: "order",
        ja: "お金持ちですが、小さな家に住んでいます。",
        it: ["Benché sia ricco, vive in una casa piccola."],
      },
    ],
    read: {
      kind: "案内",
      title: "Regole per l'escursione",
      lines: [
        [
          "L'escursione si farà sabato, a meno che non ci sia un temporale.",
          "遠足は、雷雨でない限り土曜に行います。",
        ],
        [
          "Benché il sentiero sia facile, servono scarpe da montagna.",
          "道はやさしいですが、登山靴が必要です。",
        ],
        [
          "I bambini possono partecipare, purché siano accompagnati da un adulto.",
          "大人が付き添えば、子どもも参加できます。",
        ],
        [
          "Partiremo alle sette, affinché tutti possano tornare prima che faccia buio.",
          "暗くなる前に全員が帰れるよう、7時に出発します。",
        ],
        [
          "Nessuno lasci il gruppo senza che la guida lo sappia.",
          "ガイドの知らないうちに誰もグループを離れないこと。",
        ],
        [
          "Chi non può venire avvisi entro venerdì.",
          "来られない人は金曜までに連絡してください。",
        ],
      ],
      gloss: [
        ["escursione", "遠足"],
        ["temporale", "雷雨"],
        ["sentiero", "山道"],
        ["avvisi", "知らせてください（命令）"],
      ],
      q: [
        {
          skill: "info",
          s: "遠足が中止になるのは？",
          o: ["雷雨のとき", "子どもが来るとき", "金曜に連絡があったとき"],
          a: 0,
          why: "a meno che non ci sia un temporale.",
        },
        {
          skill: "info",
          s: "子どもの参加条件は？",
          o: ["大人の付き添い", "登山の経験", "7時前に来ること"],
          a: 0,
          why: "purché siano accompagnati.",
        },
        {
          skill: "match",
          s: "7時に出発する目的は？",
          o: ["暗くなる前に帰るため", "ガイドの都合のため", "雷雨を避けるため"],
          a: 0,
          why: "affinché ... prima che faccia buio.",
        },
      ],
    },
    write: {
      task: "benché を使った文を1つ、読み物をまねて書きましょう（形は見本を参考に）。",
      hints: ["Benché sia ..., ..."],
      model: "Benché sia difficile, l'italiano mi piace molto.",
      modelJa: "難しいけれど、イタリア語がとても好きです。",
      check: ["benché の後に sia を使った", "後半に主な内容を書いた"],
    },
  },
  {
    id: "s6-dialogo",
    g: 6,
    title: "物語の会話を読む",
    goal: "会話の記号と disse、esclamò などから、誰の言葉か追える",
    talk: [
      [
        "Lettore",
        "Chi parla qui? Non capisco.",
        "ここは誰が話しているの？わからない。",
      ],
      [
        "Bibliotecaria",
        "Guarda il verbo dopo le virgolette.",
        "かぎかっこの後の動詞を見て。",
      ],
      [
        "Lettore",
        "«Vieni qui» disse la madre.",
        "「ここにおいで」と母は言った。",
      ],
      [
        "Bibliotecaria",
        "Ecco: il soggetto è dopo il verbo.",
        "そう、主語が動詞の後ろにあるの。",
      ],
      ["Lettore", "E se non c'è niente?", "何も書いてないときは？"],
      [
        "Bibliotecaria",
        "Di solito parlano a turno.",
        "ふつうは交代で話しているの。",
      ],
    ],
    words: [
      ["virgolette", "引用符"],
      ["disse", "言った"],
      ["rispose", "答えた"],
      ["esclamò", "叫んだ"],
      ["domandò", "尋ねた"],
      ["mormorò", "つぶやいた"],
      ["gridò", "叫んだ"],
      ["a turno", "交代で"],
      ["battuta", "（会話の）せりふ"],
    ],
    learn: [
      {
        h: "記号の種類",
        body: "会話は <b>« »</b> か <b>“ ”</b>、古い本や一部の本では <b>— </b>（長い線）で示します。線の場合、地の文へ戻るところにも線があることがあります。<b>— Vieni qui — disse la madre.</b>。段落が変わると話し手も変わることが多いです。",
        ex: [
          ["«Vieni qui» disse la madre.", "「ここにおいで」と母は言いました。"],
        ],
      },
      {
        h: "話す動詞で気持ちがわかる",
        body: "<b>disse</b>（言った）のほかに、<b>esclamò</b>（叫んだ）、<b>mormorò</b>（つぶやいた）、<b>sussurrò</b>（ささやいた）、<b>urlò</b>（わめいた）、<b>balbettò</b>（どもった）などがあります。遠過去の形が多く、主語が動詞の後ろに置かれます。",
        ex: [
          [
            "«Ho paura» mormorò il bambino.",
            "「怖い」と子どもはつぶやきました。",
          ],
          ["«Basta!» urlò il padre.", "「もういい！」と父はわめきました。"],
        ],
      },
    ],
    gram: [
      {
        q: "«Sì» rispose Anna. で話したのは？",
        o: ["アンナ", "別の人", "語り手"],
        a: 0,
        why: "主語が動詞の後ろです。",
      },
      {
        q: "mormorò の話し方は？",
        o: ["小さな声で", "大きな声で", "歌って"],
        a: 0,
        why: "「つぶやいた」です。",
      },
      {
        q: "urlò の話し方は？",
        o: ["大声で", "小さな声で", "黙って"],
        a: 0,
        why: "「わめいた」です。",
      },
      {
        q: "domandò の意味は？",
        o: ["尋ねた", "答えた", "笑った"],
        a: 0,
        why: "domandare の遠過去です。",
      },
      {
        q: "— Vieni — disse. の線は何を示す？",
        o: ["せりふの範囲", "マイナス", "題名"],
        a: 0,
        why: "引用符の代わりです。",
      },
      {
        q: "話者の名前がなく新しい段落でせりふが続くときは？",
        o: [
          "話し手が交代したと考える",
          "同じ人が話し続ける",
          "語り手の説明と考える",
        ],
        a: 0,
        why: "ふつう交代で話しています。",
      },
      {
        t: "order",
        ja: "「怖い」と子どもはつぶやきました。",
        it: ["«Ho paura» mormorò il bambino."],
      },
    ],
    read: {
      kind: "物語",
      title: "Il lupo alla porta",
      lines: [
        [
          "— Chi è? — domandò la vecchia, senza aprire.",
          "「誰だい？」と老婆は開けずに尋ねました。",
        ],
        [
          "— Sono il figlio del fornaio — rispose una voce profonda.",
          "「パン屋の息子です」と低い声が答えました。",
        ],
        [
          "— Il figlio del fornaio ha sette anni — disse lei. — E tu?",
          "「パン屋の息子は7歳だよ」と彼女は言いました。「お前は？」",
        ],
        [
          "— Ho... un brutto raffreddore — balbettò la voce.",
          "「僕は……ひどい風邪をひいて」と声はどもりました。",
        ],
        ["— Fammi vedere la mano.", "「手を見せておくれ」"],
        ["— Non posso.", "「できません」"],
        [
          "— Lo immaginavo — mormorò la vecchia, e prese il bastone.",
          "「思ったとおりだ」と老婆はつぶやいて、杖を取りました。",
        ],
      ],
      gloss: [
        ["fornaio", "パン屋"],
        ["profonda", "低い"],
        ["raffreddore", "風邪"],
        ["bastone", "杖"],
      ],
      q: [
        {
          skill: "infer",
          s: "«Non posso.» と言ったのは？",
          o: ["戸の外の声", "老婆", "パン屋"],
          a: 0,
          why: "交代で話しています。",
        },
        {
          skill: "infer",
          s: "老婆が疑った理由は？",
          o: [
            "7歳の子の声に聞こえなかったから",
            "手紙が来なかったから",
            "パンを頼んでいなかったから",
          ],
          a: 0,
          why: "ha sette anni の直前に voce profonda とあります。",
        },
        {
          skill: "vocab",
          s: "balbettò から感じられる様子は？",
          o: ["あわてている", "うれしい", "眠い"],
          a: 0,
          why: "言葉に詰まっています。",
        },
      ],
    },
    write: {
      task: "2人の短い会話を書き、disse と rispose を入れましょう。",
      hints: ["«...» disse ...", "«...» rispose ..."],
      model: "«Hai fame?» disse la madre. «Sì, moltissima» rispose il bambino.",
      modelJa:
        "「おなかすいた？」と母は言いました。「うん、とても」と子どもは答えました。",
      check: ["記号でせりふを囲んだ", "動詞の後ろに話し手を書いた"],
    },
  },
  {
    id: "s6-poesia",
    g: 6,
    title: "詩を読む",
    goal: "verso、strofa、rima の用語を知り、短い詩の内容と響きをつかめる",
    talk: [
      ["Maestra", "Oggi leggiamo una poesia.", "今日は詩を読みます。"],
      ["Sami", "Quante strofe ha?", "連はいくつありますか？"],
      [
        "Maestra",
        "Due, di quattro versi ciascuna.",
        "2つで、それぞれ4行です。",
      ],
      [
        "Sami",
        "Ho visto che «mare» fa rima con «cantare».",
        "mare が cantare と韻を踏んでいますね。",
      ],
      ["Maestra", "Bravo! E che cosa senti?", "すばらしい！どう感じますか？"],
      ["Sami", "Un po' di nostalgia.", "少し懐かしさを。"],
    ],
    words: [
      ["poesia", "詩"],
      ["poeta", "詩人"],
      ["verso", "詩行"],
      ["strofa", "連"],
      ["rima", "韻"],
      ["ciascuno", "それぞれ"],
      ["nostalgia", "懐かしさ"],
      ["a memoria", "暗記して"],
      ["paragone", "比較、たとえ"],
    ],
    learn: [
      {
        h: "詩の用語",
        body: "1行を <b>verso</b>、まとまりを <b>strofa</b> と呼びます。行の最後の音が重なると <b>rima</b>（韻）です。mare / cantare のように、最後のアクセントから後ろの音が同じになります。イタリアの小学校では詩を暗記して朗読します（<b>imparare a memoria</b>）。",
        ex: [
          ["Il sole sul mare, il vento a cantare.", "海の上の太陽、歌う風。"],
        ],
      },
      {
        h: "語順と省略",
        body: "詩では響きのために語順が変わり、語尾が省略されます。<b>cuor</b>（cuore）、<b>amor</b>（amore）、<b>son</b>（sono）などです。主語が後ろに来ることも多くあります。声に出して読み、まず音を楽しんでから意味を確認します。",
        ex: [["Batte il mio cuor.", "私の心が打っています。"]],
      },
    ],
    gram: [
      {
        q: "verso の意味は？",
        o: ["詩の1行", "詩のまとまり", "詩の題名"],
        a: 0,
        why: "strofa はまとまりです。",
      },
      {
        q: "strofa の意味は？",
        o: ["詩のまとまり（連）", "詩の1行", "作者"],
        a: 0,
        why: "複数は strofe です。",
      },
      {
        q: "amare と韻を踏むのは？",
        o: ["cantare", "amore", "casa"],
        a: 0,
        why: "最後の -are が同じです。",
      },
      {
        q: "詩の中の cuor の元の語は？",
        o: ["cuore", "cuoco", "corsa"],
        a: 0,
        why: "語尾が省略されています。",
      },
      {
        q: "imparare a memoria の意味は？",
        o: ["暗記する", "思い出を作る", "忘れる"],
        a: 0,
        why: "決まった言い方です。",
      },
      {
        q: "「Batte il mio cuor」の主語は？",
        o: ["il mio cuor", "batte", "省略された io"],
        a: 0,
        why: "語順が逆で、主語が後ろです。",
      },
      {
        t: "order",
        ja: "今日は詩を読みます。",
        it: ["Oggi leggiamo una poesia."],
      },
    ],
    read: {
      kind: "詩（この教材のための作）",
      title: "La neve",
      lines: [
        ["Scende la neve piano piano,", "雪がそっと、そっと降りてくる、"],
        ["sul tetto, sul prato, sulla mia mano.", "屋根に、牧場に、私の手に。"],
        ["Tace la strada, dorme il paese,", "道は黙り、村は眠る、"],
        [
          "è tutto bianco, dal monte alle chiese.",
          "山から教会まで、すべてが白い。",
        ],
        ["Domani il sole la porterà via,", "明日、太陽が雪を持ち去るだろう、"],
        [
          "ma oggi è neve, e la neve è mia.",
          "でも今日は雪、そしてその雪は私のもの。",
        ],
      ],
      gloss: [
        ["scende", "降りる"],
        ["tetto", "屋根"],
        ["prato", "牧場"],
        ["tace", "黙る"],
      ],
      q: [
        {
          skill: "match",
          s: "piano と韻を踏むのは？",
          o: ["mano", "prato", "strada"],
          a: 0,
          why: "-ano が同じです。",
        },
        {
          skill: "infer",
          s: "最後の行の気持ちは？",
          o: [
            "消えるものだからこそ今を味わう",
            "雪が嫌いだ",
            "明日が待ち遠しい",
          ],
          a: 0,
          why: "ma oggi ... と対比しています。",
        },
        {
          skill: "ref",
          s: "la porterà via の la は？",
          o: ["雪", "道", "村"],
          a: 0,
          why: "形は女性単数で、意味から雪です。",
        },
      ],
    },
    write: {
      task: "韻を踏む2行の短い詩を書きましょう。",
      hints: ["... mare", "... cantare"],
      model: "Il vento viene dal mare, e il mio cuore vuole cantare.",
      modelJa: "風は海から来て、私の心は歌いたがる。",
      check: ["2行の終わりの音をそろえた", "声に出して読んでみた"],
    },
  },
  {
    id: "s6-dizionario",
    g: 6,
    title: "語の家族と辞書の使い方",
    goal: "語の家族から意味を推測し、辞書で見出し語を探せる",
    talk: [
      [
        "Rosa",
        "Non trovo «andò» nel dizionario.",
        "辞書に andò が見つからない。",
      ],
      [
        "Tino",
        "Devi cercare l'infinito: «andare».",
        "原形の andare を探さないと。",
      ],
      ["Rosa", "E «panettiere»?", "では panettiere は？"],
      [
        "Tino",
        "Viene da «pane». È della stessa famiglia.",
        "pane から来ているよ。同じ語の家族なんだ。",
      ],
      ["Rosa", "Allora è chi fa il pane!", "じゃあパンを作る人だね！"],
      [
        "Tino",
        "Esatto. Spesso si può indovinare.",
        "そのとおり。よく推測できるんだよ。",
      ],
    ],
    words: [
      ["dizionario", "辞書"],
      ["vocabolario", "辞書、語彙"],
      ["infinito", "原形"],
      ["significato", "意味"],
      ["radice", "語根"],
      ["famiglia di parole", "語の家族"],
      ["sinonimo", "同義語"],
      ["indovinare", "推測する"],
      ["panettiere", "パン職人"],
    ],
    learn: [
      {
        h: "見出し語の探し方",
        body: "動詞は原形（<b>andò → andare</b>、<b>fu → essere</b>）、名詞は単数（<b>uova → uovo</b>）、形容詞は男性単数（<b>belle → bello</b>）で載っています。アルファベット順で、辞書の略語は <b>s.m.</b>（男性名詞）、<b>s.f.</b>（女性名詞）、<b>agg.</b>（形容詞）、<b>v.</b>（動詞）です。",
        ex: [["Cerco la parola nel dizionario.", "辞書でその語を探します。"]],
      },
      {
        h: "語の家族で推測する",
        body: "同じ語根の語は意味がつながっています。<b>fiore → fioraio</b>（花屋）<b>→ fiorire</b>（咲く）<b>→ fioritura</b>（開花）。<b>mare → marino</b>（海の）<b>→ marinaio</b>（船員）。知らない語に出会ったら、知っている語が中に入っていないか探します。外れることもあるので、大事なときは辞書で確かめます。",
        ex: [
          ["Il fioraio vende i fiori.", "花屋は花を売ります。"],
          ["Il marinaio lavora sul mare.", "船員は海で働きます。"],
        ],
      },
    ],
    gram: [
      {
        q: "andarono を辞書で探すには？",
        o: ["andare", "andarono", "andò"],
        a: 0,
        why: "動詞は原形で探します。",
      },
      {
        q: "belle を辞書で探すには？",
        o: ["bello", "belle", "bella"],
        a: 0,
        why: "形容詞は男性単数です。",
      },
      {
        q: "uova を辞書で探すには？",
        o: ["uovo", "uova", "uove"],
        a: 0,
        why: "名詞は単数です。",
      },
      {
        q: "s.f. の意味は？",
        o: ["女性名詞", "男性名詞", "形容詞"],
        a: 0,
        why: "sostantivo femminile です。",
      },
      {
        q: "giornalaio の意味を推測すると？",
        o: ["新聞を売る人", "毎日の仕事", "1日の長さ"],
        a: 0,
        why: "giornale ＋ -aio です。",
      },
      {
        q: "fiore と同じ家族の語は？",
        o: ["fiorire", "fiume", "fine"],
        a: 0,
        why: "fior- が共通です。",
      },
      {
        t: "order",
        ja: "辞書でその語を探します。",
        it: ["Cerco la parola nel dizionario."],
      },
    ],
    read: {
      kind: "辞書の項目",
      title: "Marinaio, marino, marina",
      lines: [
        [
          "mare, s.m. Grande distesa di acqua salata. Esempio: «Vado al mare».",
          "mare（男性名詞）。塩水の広い広がり。例：「海へ行く」",
        ],
        [
          "marino, agg. Del mare. Esempio: «animali marini».",
          "marino（形容詞）。海の。例：「海の動物」",
        ],
        [
          "marinaio, s.m. Chi lavora su una nave.",
          "marinaio（男性名詞）。船で働く人。",
        ],
        [
          "marina, s.f. 1. Zona vicino al mare. 2. L'insieme delle navi di uno Stato.",
          "marina（女性名詞）。1. 海辺の地域。2. 国の船の全体。",
        ],
        [
          "marinare, v. 1. Mettere pesce o carne in aceto. 2. (familiare) Marinare la scuola: non andarci senza permesso.",
          "marinare（動詞）。1. 魚や肉を酢につける。2.（くだけて）学校をさぼる：許可なく行かないこと。",
        ],
      ],
      gloss: [
        ["distesa", "広がり"],
        ["insieme", "全体"],
        ["aceto", "酢"],
        ["permesso", "許可"],
      ],
      q: [
        {
          skill: "info",
          s: "«Ha marinato la scuola» の意味は？",
          o: ["学校をさぼった", "学校で魚を料理した", "海の学校へ行った"],
          a: 0,
          why: "marinare の2番目の意味です。",
        },
        {
          skill: "info",
          s: "marino の品詞は？",
          o: ["形容詞", "男性名詞", "動詞"],
          a: 0,
          why: "agg. と書かれています。",
        },
        {
          skill: "vocab",
          s: "(familiare) の意味は？",
          o: ["くだけた言い方", "家族の話", "古い言い方"],
          a: 0,
          why: "辞書の注記です。",
        },
      ],
    },
    write: {
      task: "知っている語を1つ選び、語の家族を3語書いて意味を添えましょう。",
      hints: ["pane: ...", "panettiere: ...", "panificio: ..."],
      model:
        "Pane: il cibo. Panettiere: chi fa il pane. Panificio: il negozio del pane.",
      modelJa: "パン：食べ物。パン職人：パンを作る人。パン屋：パンの店。",
      check: ["同じ語根の語を選んだ", "意味を自分の言葉で書いた"],
    },
  },
);
