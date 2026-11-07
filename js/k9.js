/* 追加の文法単元（M4）前半。イタリアの小学校で習う綴りと文法用語、名詞の形、文の分析。 */
window.KOKUGO.push(
  {
    id: "s3-ortografia",
    g: 3,
    title: "同じ音で別の語（è と e、ha と a）",
    goal: "音が同じで綴りの違う基本語を書き分け、読み分けられる",
    talk: [
      [
        "Ada",
        "Maestra, si scrive «a» o «ha»?",
        "先生、a と ha のどちらで書きますか？",
      ],
      [
        "Sig.ra Neri",
        "Dipende. Leggi la frase.",
        "場合によります。文を読んでごらん。",
      ],
      ["Ada", "«Marco ... un cane.»", "「マルコは犬を……」"],
      [
        "Sig.ra Neri",
        "È il verbo avere, quindi con l'acca.",
        "動詞 avere だから、h をつけます。",
      ],
      ["Ada", "E in «vado ... casa»?", "では「家へ行く」では？"],
      [
        "Sig.ra Neri",
        "Lì è una preposizione: senza acca.",
        "そこは前置詞なので h なしです。",
      ],
    ],
    words: [
      ["acca", "h の文字"],
      ["accento", "アクセント記号"],
      ["frase", "文"],
      ["preposizione", "前置詞"],
      ["errore", "誤り"],
      ["dettato", "書き取り"],
      ["si scrive", "〜と書く"],
      ["dipende", "場合による"],
    ],
    learn: [
      {
        h: "h のある形は動詞 avere",
        body: "<b>ho, hai, ha, hanno</b> は avere の活用です。h のない <b>o</b>（または）、<b>ai</b>（a＋i）、<b>a</b>（へ）、<b>anno</b>（年）とは別の語です。見分け方は、aveva など avere の別の時制に置き換えて通じるなら h です（Marco ha un cane → Marco aveva un cane）。",
        ex: [
          ["Ho fame o ho sete?", "おなかがすいた、それとものどが渇いた？"],
          ["Hanno un figlio di un anno.", "彼らには1歳の息子がいます。"],
        ],
      },
      {
        h: "アクセント記号で別の語になる",
        body: "<b>è</b>（〜です）と <b>e</b>（そして）、<b>sì</b>（はい）と <b>si</b>（再帰の si）、<b>là</b>（あそこ）と <b>la</b>（冠詞）、<b>dà</b>（与える）と <b>da</b>（〜から）、<b>né</b>（〜も…ない）と <b>ne</b>（それについて）。読むときは記号を必ず見ます。",
        ex: [
          ["Sì, si è alzato presto.", "はい、彼は早く起きました。"],
          ["Lei mi dà un libro da leggere.", "彼女は読む本を私にくれます。"],
        ],
      },
    ],
    gram: [
      {
        q: "「マルコは犬を飼っている」の正しい綴りは？",
        o: ["Marco ha un cane.", "Marco a un cane.", "Marco à un cane."],
        a: 0,
        why: "動詞 avere なので h がつきます。",
      },
      {
        q: "「私は学校へ行く」の正しい綴りは？",
        o: ["Vado a scuola.", "Vado ha scuola.", "Vado à scuola."],
        a: 0,
        why: "前置詞の a です。",
      },
      {
        q: "「パンとチーズ」の正しい綴りは？",
        o: ["pane e formaggio", "pane è formaggio", "pane é formaggio"],
        a: 0,
        why: "「そして」は記号なしの e です。",
      },
      {
        q: "「彼は背が高い」の正しい綴りは？",
        o: ["Lui è alto.", "Lui e alto.", "Lui ha alto."],
        a: 0,
        why: "「〜です」は è です。",
      },
      {
        q: "「彼らには2匹の猫がいる」の正しい綴りは？",
        o: ["Hanno due gatti.", "Anno due gatti.", "Ànno due gatti."],
        a: 0,
        why: "avere の活用は hanno です。",
      },
      {
        q: "Non voglio né pane né vino. の né の意味は？",
        o: ["〜も…ない", "それについて", "そして"],
        a: 0,
        why: "né ... né ... で「〜も〜も…ない」です。",
        say: "Non voglio né pane né vino.",
      },
      { t: "order", ja: "はい、彼女は家にいます。", it: ["Sì, è a casa."] },
      { t: "order", ja: "彼らは犬を飼っています。", it: ["Hanno un cane."] },
    ],
    read: {
      kind: "書き取りの答え合わせ",
      title: "Il dettato di Ada",
      lines: [
        [
          "Ada ha fatto il dettato e ha sbagliato tre parole.",
          "アダは書き取りをして、3語間違えました。",
        ],
        [
          "Ha scritto «o fame» invece di «ho fame».",
          "「ho fame」を「o fame」と書きました。",
        ],
        [
          "Ha scritto «e bello» invece di «è bello».",
          "「è bello」を「e bello」と書きました。",
        ],
        [
          "E ha scritto «l'hanno scorso» invece di «l'anno scorso».",
          "そして「l'anno scorso」を「l'hanno scorso」と書きました。",
        ],
        [
          "La maestra ha sorriso: «Questi errori li fanno anche i bambini italiani!»",
          "先生はほほえみました。「こういう誤りはイタリアの子どももするのよ！」",
        ],
        [
          "Ada ha riscritto le frasi e non ha più sbagliato.",
          "アダは文を書き直し、もう間違えませんでした。",
        ],
      ],
      gloss: [
        ["invece di", "〜の代わりに"],
        ["ha riscritto", "書き直した"],
      ],
      q: [
        {
          skill: "match",
          s: "l'hanno scorso はなぜ誤り？",
          o: [
            "「去年」の anno に h はいらないから",
            "scorso の綴りが違うから",
            "冠詞が不要だから",
          ],
          a: 0,
          why: "anno は「年」で、h のつく hanno は動詞です。",
        },
        {
          skill: "info",
          s: "アダの誤りはいくつ？",
          o: ["3つ", "2つ", "5つ"],
          a: 0,
          why: "tre parole.",
        },
        {
          skill: "infer",
          s: "先生の言葉の意図は？",
          o: [
            "誰でもする誤りだと励ましている",
            "アダを叱っている",
            "イタリアの子どもを批判している",
          ],
          a: 0,
          why: "ha sorriso とあり、励ましの場面です。",
        },
      ],
    },
    write: {
      task: "ha と a、è と e を両方使って2文書きましょう。",
      hints: ["Marco ha ...", "... è ... e ..."],
      model: "Marco ha un fratello a Roma. La città è grande e bella.",
      modelJa: "マルコにはローマに兄弟がいます。その町は大きくて美しいです。",
      check: ["動詞の ha に h をつけた", "「〜です」に記号つきの è を使った"],
    },
  },
  {
    id: "s3-doppie",
    g: 3,
    title: "二重子音と難しい綴り",
    goal: "pala と palla のような音の違いを聞き分け、gli、gn、sc、qu の綴りを読める",
    talk: [
      [
        "Yuki",
        "Ho comprato una pala per la festa.",
        "パーティーのためにシャベルを買ったよ。",
      ],
      [
        "Pia",
        "Una pala? Forse vuoi dire una palla!",
        "シャベル？ボールのことじゃない？",
      ],
      [
        "Yuki",
        "Ah, sì! E mio nono viene con noi.",
        "あ、そう！それに、私の9番目（nono）が一緒に来る。",
      ],
      ["Pia", "Tuo nonno, con due enne!", "おじいさんでしょ、n が2つ！"],
      [
        "Yuki",
        "Le doppie sono difficili per i giapponesi.",
        "二重子音は日本人には難しいんだ。",
      ],
      [
        "Pia",
        "Ma voi avete la piccola «tsu». È la stessa idea.",
        "でも小さい「つ」があるでしょ。同じ考え方だよ。",
      ],
    ],
    words: [
      ["doppia", "二重子音"],
      ["pala", "シャベル"],
      ["palla", "ボール"],
      ["nono", "9番目の"],
      ["nonno", "祖父"],
      ["pena", "苦しみ"],
      ["penna", "ペン"],
      ["caro", "親愛な、高い"],
      ["carro", "荷車"],
    ],
    learn: [
      {
        h: "二重子音は長く発音する",
        body: "子音が2つ並ぶと、その音を少し長く保ちます。日本語の「いた」と「いった」の違いに近いものです。<b>pala / palla</b>、<b>caro / carro</b>、<b>sete / sette</b>。綴りを間違えると別の語になるので、聞くときも書くときも注意します。",
        ex: [
          ["Ho sete.", "のどが渇いた。"],
          ["Sono le sette.", "7時です。"],
        ],
      },
      {
        h: "綴りと音の決まり",
        body: "<b>gli</b> は「リ」に近い音（figlio）。<b>gn</b> は「ニャ」行の音（bagno、ogni）。<b>sc</b> は e, i の前で「シ」の音（pesce、sci）、a, o, u の前で「スク」の音（scuola）。<b>qu</b> は「クゥ」で後に母音（quadro）。例外的に <b>cuore, scuola, cuoco</b> は c で、<b>acqua</b> は cq で書きます。",
        ex: [
          [
            "Mio figlio beve acqua in bagno.",
            "息子が洗面所で水を飲んでいます。",
          ],
          ["Il cuoco cucina il pesce.", "料理人が魚を料理します。"],
        ],
      },
    ],
    gram: [
      {
        q: "「ペン」の綴りは？",
        o: ["penna", "pena", "pene"],
        a: 0,
        why: "n が2つです。pena は「苦しみ」です。",
      },
      {
        q: "「7」の綴りは？",
        o: ["sette", "sete", "setti"],
        a: 0,
        why: "sete は「のどの渇き」です。",
      },
      {
        q: "「水」の綴りは？",
        o: ["acqua", "aqua", "accua"],
        a: 0,
        why: "acqua は cq と書く決まった綴りです。",
      },
      {
        q: "「学校」の綴りは？",
        o: ["scuola", "squola", "sccuola"],
        a: 0,
        why: "scuola は c で書きます。",
      },
      {
        q: "「絵」の綴りは？",
        o: ["quadro", "cuadro", "cquadro"],
        a: 0,
        why: "qu で書きます。",
      },
      {
        q: "pesce の sce の音は？",
        o: ["「シェ」に近い", "「スケ」に近い", "「セ」に近い"],
        a: 0,
        why: "sc は e, i の前でシの音です。",
        say: "pesce",
      },
      {
        t: "order",
        ja: "祖父はボールを持っています。",
        it: ["Il nonno ha una palla."],
      },
      {
        t: "order",
        ja: "息子は学校にいます。",
        it: ["Mio figlio è a scuola."],
      },
    ],
    read: {
      kind: "小話",
      title: "Pena e penna",
      lines: [
        [
          "Un turista entra in un negozio e dice: «Vorrei una pena blu.»",
          "観光客が店に入って言います。「青い苦しみをください」",
        ],
        [
          "Il commesso sorride e gli dà una penna.",
          "店員はほほえんで、ペンを渡します。",
        ],
        [
          "Il turista è contento e aggiunge: «Oggi ho fatto molta strada, ho sette!»",
          "観光客は満足して付け加えます。「今日はたくさん歩いて、7を持っています！」",
        ],
        [
          "Il commesso capisce e gli offre un bicchiere d'acqua.",
          "店員はわかって、コップ1杯の水を出します。",
        ],
        [
          "Da quel giorno il turista ascolta bene le doppie.",
          "その日から、観光客は二重子音をよく聞くようになりました。",
        ],
      ],
      gloss: [
        ["commesso", "店員"],
        ["aggiunge", "付け加える"],
      ],
      q: [
        {
          skill: "infer",
          s: "観光客が本当に欲しかったものは？",
          o: ["ペン", "痛み止め", "青いコップ"],
          a: 0,
          why: "pena は penna の間違いです。",
        },
        {
          skill: "infer",
          s: "«ho sette» で言いたかったことは？",
          o: ["のどが渇いた", "7歳だ", "7時だ"],
          a: 0,
          why: "sete と sette を取り違えています。店員は水を出しました。",
        },
        {
          skill: "main",
          s: "この話の教訓は？",
          o: ["二重子音で意味が変わる", "店員は親切にすべき", "青いペンは高い"],
          a: 0,
          why: "最後の文につながります。",
        },
      ],
    },
    write: {
      task: "二重子音のある語を2つ以上使って文を書きましょう。",
      hints: ["Mio nonno ...", "... la palla ..."],
      model: "Mio nonno gioca a palla con il cane.",
      modelJa: "祖父は犬とボール遊びをします。",
      check: ["nonno の n を2つ書いた", "palla の l を2つ書いた"],
    },
  },
  {
    id: "s3-apostrofo",
    g: 3,
    title: "アポストロフィと語の切れ目",
    goal: "l'amico、un'amica、un po' などの形を読み、書き分けられる",
    talk: [
      ["Leo", "Chi è quella ragazza?", "あの女の子は誰？"],
      ["Sara", "È un'amica di mia sorella.", "妹の友だちだよ。"],
      ["Leo", "E quel ragazzo è un amico tuo?", "あの男の子は君の友だち？"],
      ["Sara", "Sì. Vuoi un po' d'acqua?", "うん。水を少し飲む？"],
      [
        "Leo",
        "Grazie. Qual è il tuo bicchiere?",
        "ありがとう。君のコップはどれ？",
      ],
      [
        "Sara",
        "Quello. Ma prendi pure l'altro.",
        "あれ。でも、もう1つを使っていいよ。",
      ],
    ],
    words: [
      ["apostrofo", "アポストロフィ"],
      ["un'amica", "（女性の）友人"],
      ["un amico", "（男性の）友人"],
      ["un po'", "少し"],
      ["qual è", "どれですか"],
      ["dell'acqua", "水（部分）"],
      ["c'è", "〜がある"],
      ["dov'è", "どこにあるか"],
    ],
    learn: [
      {
        h: "母音の前で母音が落ちる",
        body: "冠詞 lo, la は母音の前で <b>l'</b> になります（l'amico、l'isola）。di, ci, dove なども母音が落ちることがあります（d'acqua、c'è、dov'è）。<b>una</b> は母音の前で <b>un'</b> になりますが、男性の <b>un</b> には付きません。<b>un amico</b> と <b>un'amica</b> の違いで性がわかります。",
        ex: [
          ["L'isola è piccola.", "その島は小さいです。"],
          ["Lei è un'amica di Luca.", "彼女はルカの友だちです。"],
        ],
      },
      {
        h: "特別な形",
        body: "<b>un po'</b> は poco が短くなった形で、語尾の -co が落ちた印です。<b>qual è</b> はアポストロフィなしで書くのが正しい形です。命令形の短い形 <b>va'、fa'、di'、da'、sta'</b> にもアポストロフィがつきます。",
        ex: [
          ["Aspetta un po'.", "少し待って。"],
          ["Di' la verità!", "本当のことを言いなさい！"],
        ],
      },
    ],
    gram: [
      {
        q: "「（女性の）友人」の正しい形は？",
        o: ["un'amica", "un amica", "una'mica"],
        a: 0,
        why: "una は母音の前で un' になります。",
      },
      {
        q: "「（男性の）友人」の正しい形は？",
        o: ["un amico", "un'amico", "uno amico"],
        a: 0,
        why: "男性の un に記号はつきません。",
      },
      {
        q: "「少し待って」の正しい形は？",
        o: ["Aspetta un po'.", "Aspetta un pò.", "Aspetta un po."],
        a: 0,
        why: "po' はアポストロフィです。",
      },
      {
        q: "「どれ？」の正しい形は？",
        o: ["Qual è?", "Qual'è?", "Quale'è?"],
        a: 0,
        why: "qual è に記号はつきません。",
      },
      {
        q: "「その島」の正しい形は？",
        o: ["l'isola", "la isola", "lo isola"],
        a: 0,
        why: "母音の前で l' になります。",
      },
      {
        q: "Di' la verità! の Di' は？",
        o: ["dire の命令形", "前置詞 di", "冠詞"],
        a: 0,
        why: "記号つきの di' は命令形です。",
      },
      { t: "order", ja: "彼女は友人です。", it: ["Lei è un'amica."] },
      {
        t: "order",
        ja: "水を少しください。",
        it: ["Un po' d'acqua, per favore."],
      },
    ],
    read: {
      kind: "手紙の校正",
      title: "La lettera di Pietro",
      lines: [
        [
          "Pietro ha scritto una lettera, ma l'insegnante l'ha corretta.",
          "ピエトロは手紙を書きましたが、先生が直しました。",
        ],
        [
          "Aveva scritto «un'amico», ma Giorgio è un ragazzo.",
          "「un'amico」と書いていましたが、ジョルジョは男の子です。",
        ],
        [
          "Aveva scritto «un amica», ma Marta è una ragazza.",
          "「un amica」と書いていましたが、マルタは女の子です。",
        ],
        [
          "Aveva scritto «qual'è», ma la forma giusta è senza apostrofo.",
          "「qual'è」と書いていましたが、正しい形に記号はありません。",
        ],
        [
          "Pietro ha riletto tutto e ha detto: «Un po' di attenzione basta!»",
          "ピエトロは全部読み返して言いました。「少し注意すれば十分だ！」",
        ],
      ],
      gloss: [
        ["corretta", "直された"],
        ["giusta", "正しい"],
      ],
      q: [
        {
          skill: "match",
          s: "un'amico はなぜ誤り？",
          o: [
            "男性には記号をつけないから",
            "amico の綴りが違うから",
            "冠詞が不要だから",
          ],
          a: 0,
          why: "ジョルジョは男の子です。",
        },
        {
          skill: "ref",
          s: "l'ha corretta の l' は何？",
          o: ["手紙", "先生", "ピエトロ"],
          a: 0,
          why: "前の una lettera を受けています。",
        },
        {
          skill: "main",
          s: "文章の話題は？",
          o: ["アポストロフィの誤りを直すこと", "友情の大切さ", "郵便の仕組み"],
          a: 0,
          why: "3つの誤りが例です。",
        },
      ],
    },
    write: {
      task: "un amico と un'amica を使って友だちを紹介しましょう。",
      hints: ["Paolo è un amico ...", "Elena è un'amica ..."],
      model: "Paolo è un amico di scuola. Elena è un'amica di mia madre.",
      modelJa: "パオロは学校の友だちです。エレナは母の友人です。",
      check: ["女性にだけ un' を使った", "男性の un に記号をつけなかった"],
    },
  },
  {
    id: "s3-plurali",
    g: 3,
    title: "特別な複数形",
    goal: "uomini、mani、uova、amici、amiche などの形を見て元の語がわかる",
    talk: [
      ["Bea", "Quante uova ci vogliono?", "卵は何個いるの？"],
      ["Gino", "Due uova e tre mele.", "卵2個とリンゴ3個。"],
      ["Bea", "Lavati le mani prima di cucinare.", "料理の前に手を洗って。"],
      [
        "Gino",
        "Me le sono già lavate. E i miei amici?",
        "もう洗ったよ。僕の友だちは？",
      ],
      ["Bea", "Quanti amici vengono?", "友だちは何人来るの？"],
      ["Gino", "Due amici e due amiche.", "男の子2人と女の子2人。"],
    ],
    words: [
      ["uomo / uomini", "男、人"],
      ["mano / mani", "手"],
      ["uovo / uova", "卵"],
      ["braccio / braccia", "腕"],
      ["dito / dita", "指"],
      ["ginocchio / ginocchia", "ひざ"],
      ["amico / amici", "友人（男）"],
      ["amica / amiche", "友人（女）"],
      ["città / città", "町（変化なし）"],
      ["bue / buoi", "雄牛"],
    ],
    learn: [
      {
        h: "男性から女性に変わる語",
        body: "単数が男性 -o で、複数が女性 -a になる語があります。多くは体の部分や数えられる組です。<b>il braccio → le braccia</b>、<b>il dito → le dita</b>、<b>l'uovo → le uova</b>。<b>la mano → le mani</b> は女性名詞で -o で終わる例外です。<b>l'uomo → gli uomini</b> も特別です。",
        ex: [
          ["Ho male alle braccia.", "両腕が痛いです。"],
          [
            "Quest'uomo ha due mani grandi.",
            "この男は大きな両手をしています。",
          ],
        ],
      },
      {
        h: "-co, -ca, -go の複数",
        body: "<b>-ca, -ga</b> はいつも <b>-che, -ghe</b>（amica → amiche）。<b>-go</b> は多く <b>-ghi</b>（lago → laghi）。<b>-co</b> は語によって分かれ、amico → <b>amici</b>、medico → <b>medici</b> ですが、gioco → <b>giochi</b>、bosco → <b>boschi</b> です。読むときに元の語が浮かべば十分です。",
        ex: [["I laghi e i boschi sono belli.", "湖や森は美しいです。"]],
      },
      {
        h: "変化しない語",
        body: "最後にアクセントがある語（<b>la città → le città</b>）、1音節の語（il re → i re）、外来語（il computer → i computer）は変化しません。単数か複数かは冠詞で判断します。",
        ex: [["Ho visitato tre città.", "3つの町を訪れました。"]],
      },
    ],
    gram: [
      {
        q: "l'uovo の複数は？",
        o: ["le uova", "gli uovi", "le uove"],
        a: 0,
        why: "複数で女性の uova になります。",
      },
      {
        q: "la mano の複数は？",
        o: ["le mani", "le mane", "i mani"],
        a: 0,
        why: "女性名詞ですが -i になります。",
      },
      {
        q: "l'uomo の複数は？",
        o: ["gli uomini", "gli uomi", "le uome"],
        a: 0,
        why: "特別な形です。",
      },
      {
        q: "l'amica の複数は？",
        o: ["le amiche", "le amice", "le amici"],
        a: 0,
        why: "-ca は -che です。",
      },
      {
        q: "il lago の複数は？",
        o: ["i laghi", "i lagi", "le lage"],
        a: 0,
        why: "g の硬い音を保つため h が入ります。",
      },
      {
        q: "le dita の単数は？",
        o: ["il dito", "la dita", "il dite"],
        a: 0,
        why: "単数は男性の dito です。",
      },
      {
        q: "«le città» は何を表す？",
        o: ["複数の町", "1つの町", "町の人"],
        a: 0,
        why: "冠詞 le が複数を示します。",
      },
      { t: "order", ja: "両手を洗いなさい。", it: ["Lavati le mani."] },
      { t: "order", ja: "卵が2個あります。", it: ["Ci sono due uova."] },
    ],
    read: {
      kind: "ことば遊び",
      title: "Il mostro delle parole",
      lines: [
        [
          "In una favola c'è un mostro con tre braccia e venti dita.",
          "ある童話に、腕が3本、指が20本の怪物がいます。",
        ],
        [
          "Mangia dieci uova a colazione e non si lava mai le mani.",
          "朝食に卵を10個食べ、決して手を洗いません。",
        ],
        [
          "Vive tra i laghi e i boschi, lontano dagli uomini.",
          "人間から遠く離れた、湖と森の間に住んでいます。",
        ],
        [
          "Un giorno arrivano due bambine, due amiche coraggiose.",
          "ある日、女の子が2人、勇敢な友だち同士が来ます。",
        ],
        [
          "Il mostro ha paura: nessuno gli ha mai parlato!",
          "怪物は怖がります。誰も話しかけてくれたことがないのです！",
        ],
        [
          "Le bambine ridono, e il mostro impara a ridere con loro.",
          "女の子たちは笑い、怪物も一緒に笑うことを覚えます。",
        ],
      ],
      gloss: [
        ["mostro", "怪物"],
        ["coraggiose", "勇敢な"],
      ],
      q: [
        {
          skill: "fact",
          s: "bambine の後の due amiche は誰のこと？",
          o: ["2人の女の子自身", "怪物の友だち", "女の子たちの母親"],
          a: 0,
          why: "言い換えです。",
        },
        {
          skill: "infer",
          s: "怪物が怖がったのはなぜ？",
          o: [
            "話しかけられるのが初めてだから",
            "女の子が武器を持っていたから",
            "おなかがすいたから",
          ],
          a: 0,
          why: "nessuno gli ha mai parlato.",
        },
        {
          skill: "vocab",
          s: "laghi の単数は？",
          o: ["lago", "laga", "laghe"],
          a: 0,
          why: "-go → -ghi です。",
        },
      ],
    },
    write: {
      task: "体の部分や食べ物を複数形で使って、自分のことを書きましょう。",
      hints: ["Ho male alle ...", "A colazione mangio due ..."],
      model: "A colazione mangio due uova. Dopo mi lavo le mani.",
      modelJa: "朝食に卵を2個食べます。その後、手を洗います。",
      check: ["uova、mani などの形を正しく書いた", "冠詞と形が合っている"],
    },
  },
  {
    id: "s3-genere",
    g: 3,
    title: "名詞の性の例外と職業",
    goal: "il problema、la foto、attrice など、見た目と性が違う語を読める",
    talk: [
      ["Eva", "Qual è il problema?", "何が問題なの？"],
      ["Tom", "Ho perso la foto di mia zia.", "おばの写真をなくしたんだ。"],
      ["Eva", "Tua zia è un'attrice, vero?", "おばさんは女優さんだよね？"],
      ["Tom", "Sì, e mio zio è un dottore.", "うん、それにおじは医者だよ。"],
      ["Eva", "E tuo padre fa il pilota?", "お父さんはパイロット？"],
      [
        "Tom",
        "No, è un poeta. Ma guida la moto!",
        "いや、詩人だよ。でもバイクには乗る！",
      ],
    ],
    words: [
      ["il problema", "問題"],
      ["il sistema", "仕組み"],
      ["il poeta", "詩人"],
      ["il pilota", "パイロット"],
      ["la foto", "写真"],
      ["la moto", "バイク"],
      ["la radio", "ラジオ"],
      ["l'attore / l'attrice", "俳優／女優"],
      ["il cantante / la cantante", "歌手"],
      ["il dottore / la dottoressa", "医師"],
    ],
    learn: [
      {
        h: "見た目と性が違う語",
        body: "ギリシャ語由来の <b>-ma</b> は男性です（il problema、il sistema、il tema）。人を表す <b>-ta</b> は男女どちらにもなります（il poeta、il pilota、la pilota）。逆に <b>la foto、la moto、la radio、la mano</b> は女性です。foto と moto は長い語（fotografia、motocicletta）が短くなった語で、複数でも変わりません。",
        ex: [
          ["Questo è un grande problema.", "これは大きな問題です。"],
          ["Le foto sono belle.", "その写真は美しいです。"],
        ],
      },
      {
        h: "職業の男女の形",
        body: "基本は -o/-a（maestro/maestra）。ほかに <b>-tore/-trice</b>（attore/attrice）、<b>-e/-essa</b>（dottore/dottoressa、studente/studentessa）、変わらない <b>-ante, -ista</b>（il/la cantante、il/la dentista）。後者は冠詞で性がわかります。",
        ex: [
          [
            "La dentista è una mia amica.",
            "その歯医者さん（女性）は私の友人です。",
          ],
          [
            "Lo scrittore e la scrittrice parlano.",
            "男性作家と女性作家が話しています。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "「問題」に合う冠詞は？",
        o: ["il problema", "la problema", "lo problema"],
        a: 0,
        why: "-ma ですが男性です。",
      },
      {
        q: "「写真」に合う冠詞は？",
        o: ["la foto", "il foto", "lo foto"],
        a: 0,
        why: "fotografia の短縮で女性です。",
      },
      {
        q: "attore の女性形は？",
        o: ["attrice", "attora", "attoressa"],
        a: 0,
        why: "-tore → -trice です。",
      },
      {
        q: "dottore の女性形は？",
        o: ["dottoressa", "dottora", "dottrice"],
        a: 0,
        why: "-e → -essa です。",
      },
      {
        q: "«la cantante» は？",
        o: ["女性の歌手", "男性の歌手", "歌の名前"],
        a: 0,
        why: "-ante は冠詞で性がわかります。",
      },
      {
        q: "«i poeti» の単数は？",
        o: ["il poeta", "il poeto", "la poeti"],
        a: 0,
        why: "人を表す -ta で、男性複数は -i です。",
      },
      {
        q: "«le moto» の意味は？",
        o: ["複数のバイク", "1台のバイク", "バイクの運転手"],
        a: 0,
        why: "冠詞 le で複数とわかります。",
      },
      {
        t: "order",
        ja: "これは大きな問題です。",
        it: ["Questo è un grande problema."],
      },
      { t: "order", ja: "その女優は有名です。", it: ["L'attrice è famosa."] },
    ],
    read: {
      kind: "新聞の小記事",
      title: "Una pilota di dodici anni?",
      lines: [
        [
          "Sulla foto c'è una bambina dentro un piccolo aereo.",
          "写真には、小さな飛行機に乗った女の子が写っています。",
        ],
        [
          "Il titolo dice: «La pilota più giovane del mondo».",
          "見出しには「世界最年少のパイロット」とあります。",
        ],
        ["Il problema è che non è vero.", "問題は、それが本当でないことです。"],
        [
          "La bambina è la figlia di un attore e di una dottoressa.",
          "女の子は、男性俳優と女性医師の娘です。",
        ],
        [
          "Il padre ha fatto la foto per un film, e l'aereo non vola.",
          "父が映画のために写真を撮ったもので、その飛行機は飛びません。",
        ],
        [
          "Molte persone, però, l'hanno condivisa senza controllare.",
          "しかし多くの人が、確かめずにそれを共有しました。",
        ],
      ],
      gloss: [
        ["titolo", "見出し"],
        ["condivisa", "共有された"],
        ["controllare", "確かめる"],
      ],
      q: [
        {
          skill: "main",
          s: "記事が伝えたいことは？",
          o: [
            "確かめずに信じて広めた人が多い",
            "女の子の操縦がうまい",
            "飛行機は安全だ",
          ],
          a: 0,
          why: "最後の文が要点です。",
        },
        {
          skill: "ref",
          s: "l'hanno condivisa の l' は？",
          o: ["写真", "女の子", "映画"],
          a: 0,
          why: "形は女性単数で、意味から共有されるのは写真です。",
        },
        {
          skill: "info",
          s: "女の子の母親の職業は？",
          o: ["医師", "女優", "パイロット"],
          a: 0,
          why: "una dottoressa.",
        },
      ],
    },
    write: {
      task: "家族や知人の職業を、性に合わせて2人書きましょう。",
      hints: ["Mia zia è ...", "Mio cugino fa ..."],
      model: "Mia zia è dottoressa. Mio cugino è un poeta, ma lavora in banca.",
      modelJa: "おばは医師です。いとこは詩人ですが、銀行で働いています。",
      check: ["女性に女性形を使った", "冠詞と性が合っている"],
    },
  },
  {
    id: "s4-partidiscorso",
    g: 4,
    title: "品詞の名前を知る",
    goal: "イタリアの教科書の用語 nome、verbo、aggettivo などがわかる",
    talk: [
      ["Maestro", "Che cos'è «gatto»?", "gatto は何ですか？"],
      ["Rita", "È un nome comune.", "普通名詞です。"],
      ["Maestro", "E «Roma»?", "では Roma は？"],
      [
        "Rita",
        "È un nome proprio, con la maiuscola.",
        "固有名詞で、大文字です。",
      ],
      ["Maestro", "E «nero» in «un gatto nero»?", "un gatto nero の nero は？"],
      [
        "Rita",
        "È un aggettivo. Dice com'è il gatto.",
        "形容詞です。猫がどんなかを言っています。",
      ],
    ],
    words: [
      ["nome", "名詞、名前"],
      ["verbo", "動詞"],
      ["aggettivo", "形容詞"],
      ["articolo", "冠詞"],
      ["pronome", "代名詞"],
      ["avverbio", "副詞"],
      ["congiunzione", "接続詞"],
      ["maiuscola", "大文字"],
      ["minuscola", "小文字"],
      ["sinonimo", "同義語"],
      ["contrario", "反対語"],
    ],
    learn: [
      {
        h: "教科書の言葉で習う",
        body: "イタリアの小学校では品詞を分析する「analisi grammaticale」を習います。<b>nome</b>（名詞）、<b>articolo</b>（冠詞）、<b>aggettivo</b>（形容詞）、<b>pronome</b>（代名詞）、<b>verbo</b>（動詞）、<b>avverbio</b>（副詞）、<b>preposizione</b>（前置詞）、<b>congiunzione</b>（接続詞）、<b>esclamazione</b>（感嘆詞）の9つです。",
        ex: [["Il gatto nero dorme.", "黒猫が眠っています。"]],
      },
      {
        h: "名詞の分け方",
        body: "<b>nome comune</b>（普通名詞：città）と <b>nome proprio</b>（固有名詞：Roma。大文字）、<b>concreto</b>（具体：tavolo）と <b>astratto</b>（抽象：felicità）、<b>collettivo</b>（集合：gente、classe。形は単数でも多くの人や物を指します）。",
        ex: [
          ["La gente è contenta.", "人々は満足しています。"],
          ["La felicità non costa niente.", "幸せにはお金がかかりません。"],
        ],
      },
    ],
    gram: [
      {
        q: "aggettivo はどれ？",
        o: ["形容詞", "副詞", "動詞"],
        a: 0,
        why: "aggettivo は名詞を説明する語です。",
      },
      {
        q: "Il cane corre veloce. の corre の品詞は？",
        o: ["verbo", "nome", "articolo"],
        a: 0,
        why: "correre の活用です。",
      },
      {
        q: "Il cane corre veloce. の Il の品詞は？",
        o: ["articolo", "pronome", "avverbio"],
        a: 0,
        why: "定冠詞です。",
      },
      {
        q: "nome proprio の例は？",
        o: ["Firenze", "città", "felicità"],
        a: 0,
        why: "固有名詞で大文字です。",
      },
      {
        q: "nome astratto の例は？",
        o: ["paura", "tavolo", "cane"],
        a: 0,
        why: "形のない抽象名詞です。",
      },
      {
        q: "la gente に続く動詞の形は？",
        o: ["La gente parla.", "La gente parlano.", "La gente parliamo."],
        a: 0,
        why: "集合名詞は単数扱いです。",
      },
      {
        q: "grande の contrario は？",
        o: ["piccolo", "alto", "bello"],
        a: 0,
        why: "反対語です。",
      },
      { t: "order", ja: "猫がベッドで眠っています。", it: ["Il gatto dorme sul letto."] },
    ],
    read: {
      kind: "教科書の説明",
      title: "Le nove parti del discorso",
      lines: [
        [
          "Tutte le parole della lingua italiana si dividono in nove gruppi.",
          "イタリア語のすべての語は9つのグループに分かれます。",
        ],
        ["Si chiamano «parti del discorso».", "「品詞」と呼ばれます。"],
        [
          "Cinque cambiano forma: articolo, nome, aggettivo, pronome e verbo.",
          "5つは形が変わります。冠詞、名詞、形容詞、代名詞、動詞です。",
        ],
        [
          "Quattro non cambiano mai: avverbio, preposizione, congiunzione ed esclamazione.",
          "4つは決して変わりません。副詞、前置詞、接続詞、感嘆詞です。",
        ],
        [
          "Per esempio, «bello» può diventare «bella», «belli» o «belle».",
          "たとえば bello は bella、belli、belle になります。",
        ],
        [
          "Invece «molto», quando è avverbio, resta sempre uguale.",
          "一方 molto は、副詞のときはいつも同じままです。",
        ],
      ],
      gloss: [
        ["parti del discorso", "品詞"],
        ["dividono", "分ける"],
        ["uguale", "同じ"],
      ],
      q: [
        {
          skill: "info",
          s: "形が変わる品詞はいくつ？",
          o: ["5つ", "4つ", "9つ"],
          a: 0,
          why: "Cinque cambiano forma.",
        },
        {
          skill: "fact",
          s: "congiunzione について正しいのは？",
          o: ["形が変わらない", "形が変わる", "品詞ではない"],
          a: 0,
          why: "Quattro non cambiano mai の中にあります。",
        },
        {
          skill: "infer",
          s: "«quando è avverbio» と断っている理由は？",
          o: [
            "molto は形容詞なら形が変わるから",
            "副詞はいつも変わるから",
            "molto が品詞でないから",
          ],
          a: 0,
          why: "molti, molte のように変わる場合があるからです。",
        },
      ],
    },
    write: {
      task: "短い文を1つ書き、各語の品詞をイタリア語で書きましょう。",
      hints: ["Il: articolo", "gatto: nome"],
      model: "Il gatto dorme. Il: articolo. Gatto: nome. Dorme: verbo.",
      modelJa: "猫が眠っています。Il：冠詞。Gatto：名詞。Dorme：動詞。",
      check: ["品詞の名前をイタリア語で書いた", "各語を1つずつ分析した"],
    },
  },
  {
    id: "s4-analisi",
    g: 4,
    title: "文の組み立て（主語と述語）",
    goal: "soggetto、predicato、complemento の考え方で文を分けられる",
    talk: [
      [
        "Maestro",
        "«Luca mangia una mela.» Chi fa l'azione?",
        "「ルカはリンゴを食べる」。動作をするのは？",
      ],
      ["Rita", "Luca. È il soggetto.", "ルカです。主語です。"],
      ["Maestro", "E «mangia»?", "では mangia は？"],
      ["Rita", "Il predicato.", "述語です。"],
      ["Maestro", "E «una mela»?", "では una mela は？"],
      [
        "Rita",
        "Risponde alla domanda «che cosa?». È il complemento oggetto.",
        "「何を？」に答えます。直接目的語です。",
      ],
    ],
    words: [
      ["soggetto", "主語"],
      ["predicato", "述語"],
      ["complemento", "補語"],
      ["complemento oggetto", "直接目的語"],
      ["azione", "動作"],
      ["sottinteso", "省略された"],
      ["domanda", "問い"],
      ["rispondere", "答える"],
    ],
    learn: [
      {
        h: "問いかけて見つける",
        body: "文の分析（<b>analisi logica</b>）では、問いかけで要素を見つけます。述語をまず探し、「誰が？」に答えるのが <b>soggetto</b>、「誰を？何を？」に答えるのが <b>complemento oggetto</b> です。主語が文に書かれていないときは <b>soggetto sottinteso</b> と言います。",
        ex: [
          [
            "Mangio una mela.",
            "（私は）リンゴを食べます。主語は sottinteso で io。",
          ],
          ["La mela è buona.", "リンゴはおいしいです。"],
        ],
      },
      {
        h: "主語は後ろにも来る",
        body: "イタリア語の主語は動詞の後にも置かれます。<b>È arrivato Marco.</b> の主語は Marco です。動詞の活用と合う語を探すと見つかります。<b>Mi piacciono i gatti.</b> の文法上の主語は「猫」で、だから動詞が複数形です。",
        ex: [
          ["È arrivato Marco.", "マルコが着きました。"],
          ["Mi piacciono i gatti.", "私は猫が好きです。"],
        ],
      },
      {
        h: "そのほかの補語",
        body: "<b>dove?</b>（場所）、<b>quando?</b>（時）、<b>con chi?</b>（同伴）、<b>di chi?</b>（所有）などの問いに答える部分も complemento です。名前を覚えるより、問いで見分けることが読解に役立ちます。",
        ex: [["Domani vado a Roma con Luca.", "明日ルカとローマへ行きます。"]],
      },
    ],
    gram: [
      {
        q: "Il cane mangia la carne. の主語は？",
        o: ["il cane", "mangia", "la carne"],
        a: 0,
        why: "「誰が？」に答えます。",
      },
      {
        q: "Il cane mangia la carne. の直接目的語は？",
        o: ["la carne", "il cane", "mangia"],
        a: 0,
        why: "「何を？」に答えます。",
      },
      {
        q: "Parto domani. の主語は？",
        o: ["省略された io", "domani", "parto"],
        a: 0,
        why: "活用から io とわかります。",
      },
      {
        q: "Ieri è arrivata la nonna. の主語は？",
        o: ["la nonna", "ieri", "è arrivata"],
        a: 0,
        why: "動詞の後ろにあります。",
      },
      {
        q: "Mi piace la pizza. の文法上の主語は？",
        o: ["la pizza", "mi", "piace"],
        a: 0,
        why: "piace と合うのは pizza です。",
      },
      {
        q: "Vado a scuola con Anna. の con Anna が答える問いは？",
        o: ["con chi?", "dove?", "quando?"],
        a: 0,
        why: "同伴の補語です。",
      },
      {
        q: "Vado a scuola con Anna. の a scuola が答える問いは？",
        o: ["dove?", "con chi?", "che cosa?"],
        a: 0,
        why: "場所の補語です。",
      },
      { t: "order", ja: "マルコが着きました。", it: ["È arrivato Marco."] },
    ],
    read: {
      kind: "読み方の助言",
      title: "Chi ha mangiato il gatto?",
      lines: [
        [
          "In italiano le parole possono cambiare posto.",
          "イタリア語では語の位置が変わることがあります。",
        ],
        [
          "«Ha mangiato il pesce il gatto» è una frase possibile, anche se rara.",
          "「魚を猫が食べた」は、まれですがありえる文です。",
        ],
        [
          "Il senso comune ci dice che il soggetto è il gatto.",
          "常識から、主語は猫だとわかります。",
        ],
        [
          "Altre volte aiuta il verbo: «Hanno chiamato i bambini» può voler dire due cose.",
          "動詞が助けになることもありますが、「Hanno chiamato i bambini」は2つの意味になりえます。",
        ],
        [
          "Può darsi che i bambini abbiano chiamato, oppure che qualcuno li abbia chiamati.",
          "子どもたちが呼んだのかもしれませんし、誰かが子どもたちを呼んだのかもしれません。",
        ],
        [
          "Quando non si capisce, bisogna guardare il contesto.",
          "わからないときは、文脈を見る必要があります。",
        ],
      ],
      gloss: [
        ["senso comune", "常識"],
        ["rara", "まれな"],
        ["può darsi", "〜かもしれない"],
        ["contesto", "文脈"],
      ],
      q: [
        {
          skill: "main",
          s: "筆者の助言は？",
          o: [
            "語順だけでなく常識と文脈で主語を判断する",
            "主語はいつも文頭にある",
            "動詞を読まなくてもよい",
          ],
          a: 0,
          why: "最後の文にまとめられています。",
        },
        {
          skill: "infer",
          s: "Hanno chiamato i bambini が2通りになる理由は？",
          o: [
            "i bambini が主語にも目的語にもなれるから",
            "chiamare が2つの意味だから",
            "時制が不明だから",
          ],
          a: 0,
          why: "どちらでも動詞の複数形と矛盾しません。",
        },
        {
          skill: "vocab",
          s: "oppure の意味は？",
          o: ["あるいは", "だから", "しかし"],
          a: 0,
          why: "2つの可能性を並べています。",
        },
      ],
    },
    write: {
      task: "短い文を書き、主語、述語、目的語を分けましょう。",
      hints: ["Soggetto: ...", "Predicato: ...", "Complemento oggetto: ..."],
      model:
        "Anna legge un libro. Soggetto: Anna. Predicato: legge. Complemento oggetto: un libro.",
      modelJa:
        "アンナは本を読みます。主語：Anna。述語：legge。直接目的語：un libro。",
      check: ["問いかけで要素を見つけた", "動詞と主語の形が合っている"],
    },
  },
  {
    id: "s4-interrogativi",
    g: 4,
    title: "疑問詞と感嘆のまとめ",
    goal: "come mai、da quanto、quale、che bello! などを正しく読み取れる",
    talk: [
      ["Lia", "Come mai sei qui?", "どうしてここにいるの？"],
      [
        "Dan",
        "Aspetto mia sorella. Da quanto tempo non ci vediamo!",
        "妹を待ってるんだ。久しぶりだね！",
      ],
      [
        "Lia",
        "Che sorpresa! Dove abiti adesso?",
        "びっくり！今どこに住んでるの？",
      ],
      [
        "Dan",
        "Abito a Torino. A che ora parti?",
        "トリノに住んでる。何時に出発するの？",
      ],
      [
        "Lia",
        "Alle sei. Quanto è grande Torino?",
        "6時。トリノはどのくらい大きいの？",
      ],
      [
        "Dan",
        "Vieni a vederla. Com'è bella in autunno!",
        "見においでよ。秋はなんてきれいなんだろう！",
      ],
    ],
    words: [
      ["come mai", "どうして"],
      ["da quanto tempo", "どのくらい前から"],
      ["a che ora", "何時に"],
      ["di chi", "誰の"],
      ["con chi", "誰と"],
      ["quale", "どれ"],
      ["che bello!", "なんてすてき！"],
      ["quanto!", "なんとたくさん！"],
      ["sorpresa", "驚き"],
    ],
    learn: [
      {
        h: "前置詞は疑問詞の前",
        body: "英語と違い、前置詞を文末に残せません。<b>Con chi parli?</b>（誰と話してるの）、<b>Di chi è?</b>（誰のもの）、<b>Da dove vieni?</b>（どこから来たの）。疑問詞 che は「何の、どの」の意味で名詞の前にも置けます（Che ora è? Che libro leggi?）。",
        ex: [
          ["Di chi è questa penna?", "このペンは誰のですか？"],
          ["Con chi vai al cinema?", "誰と映画に行くの？"],
        ],
      },
      {
        h: "come mai と perché",
        body: "どちらも「なぜ」ですが、<b>come mai</b> は驚きを含む軽い問いです。perché の答えは <b>perché</b> で始められます（Perché? — Perché piove.）。イタリア語の perché は「なぜ」と「なぜなら」の両方です。",
        ex: [["Come mai non mangi?", "どうして食べないの？"]],
      },
      {
        h: "感嘆の言い方",
        body: "<b>Che</b>＋名詞や形容詞（Che bello! Che sorpresa!）、<b>Come</b>＋動詞（Come parli bene!）、<b>Quanto</b>（Quanto sei alto! Quanti libri!）で感嘆を表します。書き言葉では「!」が目印です。",
        ex: [["Quanti libri hai letto!", "なんとたくさんの本を読んだの！"]],
      },
    ],
    gram: [
      {
        q: "「誰と話しているの？」は？",
        o: ["Con chi parli?", "Chi parli con?", "Chi con parli?"],
        a: 0,
        why: "前置詞は疑問詞の前です。",
      },
      {
        q: "「これは誰の？」は？",
        o: ["Di chi è?", "Chi di è?", "Che è di?"],
        a: 0,
        why: "所有は di chi です。",
      },
      {
        q: "「どうしてここに？」の驚きを含む言い方は？",
        o: ["Come mai sei qui?", "Come sei qui?", "Quanto sei qui?"],
        a: 0,
        why: "驚きを含む「どうして」は come mai です。",
      },
      {
        q: "「なんと美しい！」は？",
        o: ["Che bello!", "Chi bello!", "Cui bello!"],
        a: 0,
        why: "Che＋形容詞です。",
      },
      {
        q: "«Da quanto tempo non ci vediamo!» の意味は？",
        o: ["久しぶりだね", "いつ会うの", "まだ時間がある"],
        a: 0,
        why: "決まった言い方です。",
      },
      {
        q: "Perché? への答えの最初の語は？",
        o: ["Perché", "Quando", "Quale"],
        a: 0,
        why: "perché は「なぜなら」にもなります。",
      },
      { t: "order", ja: "誰と映画に行くの？", it: ["Con chi vai al cinema?"] },
      { t: "order", ja: "なんて驚き！", it: ["Che sorpresa!"] },
    ],
    read: {
      kind: "クイズ",
      title: "Indovina chi è",
      lines: [
        [
          "Chi è? È alta, vecchia e vive in cielo. Di notte si vede bene.",
          "誰でしょう？高くて古くて空に住んでいます。夜によく見えます。",
        ],
        [
          "Quante facce mostra alla Terra? Una sola, ma non sempre la mostra tutta.",
          "地球に見せる顔はいくつ？1つだけですが、いつも全部は見せません。",
        ],
        [
          "Da dove prende la luce? Non da se stessa, ma dal Sole.",
          "光はどこから？自分からではなく、太陽からです。",
        ],
        [
          "Quanto tempo impiega a girare intorno alla Terra? Circa un mese.",
          "地球を回るのにどのくらいかかる？約1か月です。",
        ],
        [
          "Come si chiama? Se non l'hai capito, guarda su stasera!",
          "名前は？わからなければ、今夜上を見て！",
        ],
      ],
      gloss: [
        ["facce", "顔（複数）"],
        ["impiega", "（時間が）かかる"],
        ["indovina", "当ててごらん"],
      ],
      q: [
        {
          skill: "infer",
          s: "答えは何？",
          o: ["月", "太陽", "鳥"],
          a: 0,
          why: "太陽の光を受け、約1か月で地球を回ります。",
        },
        {
          skill: "match",
          s: "Quante facce mostra alla Terra? の答えは？",
          o: ["1つ", "2つ", "数えられない"],
          a: 0,
          why: "Una sola.",
        },
        {
          skill: "vocab",
          s: "se stessa の意味は？",
          o: ["自分自身", "太陽", "他のもの"],
          a: 0,
          why: "自分自身を指す言い方です。",
        },
      ],
    },
    write: {
      task: "身近なものを当てるクイズを、疑問詞を3つ使って書きましょう。",
      hints: ["Dove vive?", "Quanti anni ha?", "Che cosa mangia?"],
      model:
        "Dove vive? In casa. Che cosa mangia? Il pesce. Come si chiama? Non lo dico: dorme sul divano!",
      modelJa:
        "どこに住む？家の中。何を食べる？魚。名前は？言いません。ソファで寝ています！",
      check: ["疑問詞を3つ使った", "前置詞を疑問詞の前に置いた"],
    },
  },
  {
    id: "s4-tempo",
    g: 4,
    title: "時の順序をつなぐ語",
    goal: "prima di、dopo、appena、mentre、finché で出来事の順序を読み取れる",
    talk: [
      ["Ugo", "Quando esci?", "いつ出かけるの？"],
      ["Ines", "Appena finisco i compiti.", "宿題が終わったらすぐ。"],
      [
        "Ugo",
        "Prima di uscire, chiudi la finestra.",
        "出かける前に窓を閉めて。",
      ],
      [
        "Ines",
        "Va bene. Tu che cosa fai mentre sono fuori?",
        "わかった。私が出ている間は何をするの？",
      ],
      ["Ugo", "Resto qui finché non torni.", "君が帰るまでここにいるよ。"],
      [
        "Ines",
        "Dopo aver cenato, guardiamo un film?",
        "夕食の後、映画を見ない？",
      ],
    ],
    words: [
      ["prima di", "〜の前に"],
      ["dopo", "〜の後で"],
      ["appena", "〜するとすぐ"],
      ["mentre", "〜している間"],
      ["finché", "〜するまで"],
      ["ormai", "もはや"],
      ["allora", "そのとき、それなら"],
      ["nel frattempo", "その間に"],
      ["infine", "最後に"],
    ],
    learn: [
      {
        h: "順序を示す語",
        body: "<b>prima di</b>＋原形（prima di uscire 出かける前に）。<b>dopo</b>＋過去の原形（dopo aver mangiato 食べた後で／dopo essere uscito 出た後で）。<b>appena</b> は「〜するとすぐ」。書かれた順と起きた順が同じとは限りません。Dopo aver cenato, ho studiato. では夕食が先です。",
        ex: [
          ["Prima di mangiare, mi lavo le mani.", "食べる前に手を洗います。"],
          ["Dopo aver mangiato, sono uscito.", "食べた後で出かけました。"],
        ],
      },
      {
        h: "同時と「まで」",
        body: "<b>mentre</b> は同時です（Mentre cucino, ascolto la radio.）。<b>finché</b> は「〜するまで／する間」で、<b>non</b> が入っても否定の意味にはなりません（Aspetto finché non arrivi. 君が来るまで待つ）。物語の順序は <b>prima, poi, in seguito, nel frattempo, infine</b> で追います。",
        ex: [
          ["Aspetto finché non arrivi.", "君が来るまで待ちます。"],
          [
            "Appena l'ho visto, l'ho riconosciuto.",
            "見るとすぐ、彼だとわかりました。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "「出かける前に」は？",
        o: ["prima di uscire", "prima uscire", "dopo uscire"],
        a: 0,
        why: "prima di＋原形です。",
      },
      {
        q: "「食べた後で」は？",
        o: ["dopo aver mangiato", "dopo mangiare ho", "prima di aver"],
        a: 0,
        why: "dopo＋過去の原形です。",
      },
      {
        q: "Dopo aver cenato, ho studiato. で先に起きたのは？",
        o: ["夕食", "勉強", "同時"],
        a: 0,
        why: "dopo の部分が先です。",
      },
      {
        q: "Aspetto finché non arrivi. の意味は？",
        o: ["君が来るまで待つ", "君が来ないので待たない", "君が来たら帰る"],
        a: 0,
        why: "finché non の non に否定の意味はありません。",
      },
      {
        q: "Mentre cucino, ascolto la radio. の2つの動作は？",
        o: ["同時", "料理が先", "ラジオが先"],
        a: 0,
        why: "mentre は同時です。",
      },
      {
        q: "Appena arrivo, ti chiamo. の意味は？",
        o: ["着いたらすぐ電話する", "着く前に電話する", "着かないなら電話する"],
        a: 0,
        why: "appena は「するとすぐ」です。",
      },
      {
        t: "order",
        ja: "食べる前に手を洗います。",
        it: ["Prima di mangiare, mi lavo le mani."],
      },
      {
        t: "order",
        ja: "君が来るまで待ちます。",
        it: ["Aspetto finché non arrivi."],
      },
    ],
    read: {
      kind: "物語",
      title: "La torta bruciata",
      lines: [
        [
          "Prima di uscire, Marta aveva messo una torta nel forno.",
          "出かける前に、マルタはケーキをオーブンに入れていました。",
        ],
        [
          "Mentre era al mercato, ha incontrato una vecchia amica.",
          "市場にいる間に、昔の友人に会いました。",
        ],
        [
          "Hanno parlato finché non si è fatto buio.",
          "暗くなるまで話しました。",
        ],
        [
          "Appena è arrivata alla porta di casa, ha sentito odore di bruciato.",
          "家の戸口に着くとすぐ、焦げた匂いがしました。",
        ],
        [
          "Dopo aver aperto il forno, ha visto una cosa nera e dura.",
          "オーブンを開けた後、黒くて固いものを見ました。",
        ],
        [
          "Nel frattempo era arrivato suo figlio: «Che cosa c'è per cena?»",
          "その間に息子が来ていました。「夕飯は何？」",
        ],
        [
          "Infine hanno mangiato pane e formaggio, ridendo.",
          "結局、笑いながらパンとチーズを食べました。",
        ],
      ],
      gloss: [
        ["forno", "オーブン"],
        ["bruciato", "焦げた"],
        ["si è fatto buio", "暗くなった"],
      ],
      q: [
        {
          skill: "order",
          s: "起きた順序として正しいのは？",
          o: [
            "ケーキを入れる→友人に会う→匂いがする→パンを食べる",
            "友人に会う→ケーキを入れる→パンを食べる→匂いがする",
            "匂いがする→ケーキを入れる→友人に会う→パンを食べる",
          ],
          a: 0,
          why: "時を示す語で順序を追います。",
        },
        {
          skill: "infer",
          s: "ケーキが焦げた原因は？",
          o: [
            "話が長くなって帰りが遅れたから",
            "オーブンが壊れていたから",
            "息子がいじったから",
          ],
          a: 0,
          why: "finché non si è fatto buio.",
        },
        {
          skill: "fact",
          s: "aveva messo が大過去なのはなぜ？",
          o: ["話の時点より前の出来事だから", "未来の話だから", "命令だから"],
          a: 0,
          why: "出かける前のことです。",
        },
      ],
    },
    write: {
      task: "今日したことを、prima di と dopo を使って順序よく書きましょう。",
      hints: ["Prima di ...", "Dopo aver ..."],
      model:
        "Prima di uscire, ho fatto colazione. Dopo aver lavorato, sono tornato a casa.",
      modelJa: "出かける前に朝食をとりました。働いた後、家に帰りました。",
      check: ["prima di の後を原形にした", "dopo の後を aver＋過去分詞にした"],
    },
  },
  {
    id: "s4-aspetto",
    g: 4,
    title: "始まる・続く・やめる（stare per など）",
    goal: "stare per、mettersi a、continuare a、smettere di、tornare a を読み取れる",
    talk: [
      ["Pia", "Il treno sta per partire!", "電車がもうすぐ出るよ！"],
      ["Gio", "Aspetta, si è messo a piovere.", "待って、雨が降り出した。"],
      ["Pia", "Smetti di parlare e corri!", "しゃべるのをやめて走って！"],
      ["Gio", "Ho appena finito di mangiare...", "食べ終わったばかりなのに……"],
      ["Pia", "Continui a lamentarti!", "文句を言い続けてるね！"],
      ["Gio", "Va bene. Ricomincio a correre.", "わかった。また走り始めるよ。"],
    ],
    words: [
      ["stare per", "まさに〜するところ"],
      ["mettersi a", "〜し始める"],
      ["continuare a", "〜し続ける"],
      ["smettere di", "〜するのをやめる"],
      ["tornare a", "再び〜する"],
      ["appena", "〜したばかり"],
      ["lamentarsi", "文句を言う"],
      ["stare + -ndo", "〜している最中"],
    ],
    learn: [
      {
        h: "動作の段階を表す",
        body: "<b>stare per</b>＋原形は「まさに〜するところ」（Sta per piovere.）。<b>mettersi a</b> は「急に〜し始める」（Si è messa a ridere.）。<b>continuare a</b> は「〜し続ける」。<b>smettere di</b> は「やめる」。<b>avere appena</b>＋過去分詞は「〜したばかり」（Ho appena mangiato.）。",
        ex: [
          ["Sta per piovere.", "今にも雨が降りそうです。"],
          ["Ho appena mangiato.", "食べたばかりです。"],
        ],
      },
      {
        h: "物語でよく出る形",
        body: "物語では過去の形で出てきます。<b>stava per</b> は「もう少しで〜するところだった」の意味で、実際には起きなかったことも表します。Stava per cadere, ma... （落ちそうになったが……）。<b>si mise a</b> は遠過去で「〜し始めた」です。",
        ex: [
          [
            "Stava per cadere, ma il padre lo prese.",
            "落ちそうになりましたが、父がつかまえました。",
          ],
          ["Il bambino si mise a piangere.", "子どもは泣き出しました。"],
        ],
      },
    ],
    gram: [
      {
        q: "「今にも雨が降りそう」は？",
        o: ["Sta per piovere.", "Sta a piovere.", "Va per piovere."],
        a: 0,
        why: "stare per＋原形です。",
      },
      {
        q: "「たばこをやめた」は？",
        o: ["Ho smesso di fumare.", "Ho smesso a fumare.", "Ho smesso fumare."],
        a: 0,
        why: "smettere di です。",
      },
      {
        q: "「彼は読み続ける」は？",
        o: ["Continua a leggere.", "Continua di leggere.", "Continua leggere."],
        a: 0,
        why: "continuare a です。",
      },
      {
        q: "Si è messo a correre. の意味は？",
        o: ["走り始めた", "走るのをやめた", "走って疲れた"],
        a: 0,
        why: "mettersi a は開始です。",
      },
      {
        q: "Stava per cadere. で本当に落ちた？",
        o: ["落ちていないことが多い", "必ず落ちた", "落ちる前に寝た"],
        a: 0,
        why: "「もう少しで」の意味です。",
      },
      {
        q: "Ho appena finito. の意味は？",
        o: ["終えたばかり", "ほとんど終えていない", "もうすぐ終える"],
        a: 0,
        why: "avere appena＋過去分詞です。",
      },
      { t: "order", ja: "今にも雨が降りそうです。", it: ["Sta per piovere."] },
      {
        t: "order",
        ja: "彼女は笑い出しました。",
        it: ["Si è messa a ridere."],
      },
    ],
    read: {
      kind: "物語",
      title: "Quasi un disastro",
      lines: [
        [
          "Il piccolo Nino stava per attraversare la strada.",
          "小さなニーノは道を渡るところでした。",
        ],
        [
          "In quel momento una macchina arrivò velocissima.",
          "そのとき、車がとても速く来ました。",
        ],
        [
          "La sorella si mise a gridare e lo tirò per il braccio.",
          "姉は叫び出し、彼の腕を引っ張りました。",
        ],
        [
          "La macchina passò a pochi centimetri da loro, e continuò a correre senza fermarsi.",
          "車は2人から数センチの所を通り、止まらずに走り続けました。",
        ],
        [
          "Nino non riusciva a smettere di tremare.",
          "ニーノは震えが止まりませんでした。",
        ],
        [
          "Da quel giorno guarda sempre a destra e a sinistra prima di attraversare.",
          "その日から、渡る前にいつも左右を見ます。",
        ],
      ],
      gloss: [
        ["attraversare", "渡る"],
        ["tirò", "引っ張った"],
        ["gridare", "叫ぶ"],
      ],
      q: [
        {
          skill: "infer",
          s: "ニーノは事故にあった？",
          o: ["あっていない", "大けがをした", "車に乗っていた"],
          a: 0,
          why: "stava per と a pochi centimetri からわかります。",
        },
        {
          skill: "vocab",
          s: "si mise a gridare の意味は？",
          o: ["叫び出した", "叫ぶのをやめた", "叫ぶふりをした"],
          a: 0,
          why: "mettersi a は開始です。",
        },
        {
          skill: "match",
          s: "ニーノの変化は？",
          o: [
            "渡る前に左右を見るようになった",
            "道を渡らなくなった",
            "車を運転するようになった",
          ],
          a: 0,
          why: "最後の文です。",
        },
      ],
    },
    write: {
      task: "最近やめたことと、続けていることを書きましょう。",
      hints: ["Ho smesso di ...", "Continuo a ..."],
      model:
        "Ho smesso di bere il caffè la sera. Continuo a studiare l'italiano ogni giorno.",
      modelJa:
        "夜にコーヒーを飲むのをやめました。毎日イタリア語の勉強を続けています。",
      check: ["smettere の後に di を入れた", "continuare の後に a を入れた"],
    },
  },
);
