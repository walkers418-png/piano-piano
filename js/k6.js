/* 段階6（小6相当・B1の入口）：読んで慣れる。Lei の命令形、ci/ne、接続法と遠過去は読んでわかる範囲、要約。 */
window.KOKUGO.push(
  {
    id: "s6-formale",
    g: 6,
    title: "公の場の言葉",
    goal: "Lei の命令形を聞き取り、正式なメールや案内を読み書きできる",
    talk: [
      ["Impiegato", "Buongiorno, mi dica.", "こんにちは、ご用件をどうぞ。"],
      [
        "Utente",
        "Vorrei rinnovare il permesso. Che cosa devo fare?",
        "許可を更新したいのですが。何をすればよいでしょうか？",
      ],
      [
        "Impiegato",
        "Compili questo modulo e prenda un numero.",
        "この用紙に記入して、番号札をお取りください。",
      ],
      ["Utente", "Devo pagare subito?", "すぐに支払う必要がありますか？"],
      [
        "Impiegato",
        "No, paghi alla cassa dopo la firma.",
        "いいえ、署名の後に窓口でお支払いください。",
      ],
      [
        "Utente",
        "La ringrazio per l'aiuto.",
        "助けていただき、ありがとうございます。",
      ],
    ],
    words: [
      ["modulo", "用紙・書式"],
      ["firma", "署名"],
      ["cassa", "会計窓口"],
      ["ufficio postale", "郵便局"],
      ["comune", "市役所・自治体", "男性名詞"],
      ["permesso", "許可"],
      ["rinnovare", "更新する"],
      ["compilare", "記入する"],
      ["allegare", "添付する"],
      ["gentile", "親切な・（手紙で）〜様"],
      ["distinti saluti", "敬具"],
      ["in attesa di", "〜をお待ちしつつ"],
      ["La ringrazio", "感謝いたします"],
    ],
    learn: [
      {
        h: "Lei の命令形",
        body: "<b>-are → -i</b>（parli, paghi, giri）、<b>-ere / -ire → -a</b>（prenda, senta）。tu の命令形と語尾が入れ替わる点が要注意です。<br>不規則：vada（行く）、venga（来る）、faccia（する）、dica（言う）、dia（与える）、stia（いる）、abbia（持つ）、sia（である）。<br>代名詞は前に置きます：<b>mi dica</b>、<b>si accomodi</b>。",
        ex: [
          ["Mi dica.", "ご用件をどうぞ。"],
          ["Si accomodi.", "おかけください。"],
          ["Vada sempre dritto.", "まっすぐ行ってください。"],
        ],
      },
      {
        h: "正式なメールの型",
        body: "書き出し：<b>Gentile Signora Conti,</b> ／ <b>Egregio Direttore,</b>（より改まる）<br>用件：<b>Le scrivo per ...</b>（〜のためにご連絡します）<br>依頼：<b>La prego di ...</b>（〜をお願いします）<br>結び：<b>In attesa di una Sua risposta, Le porgo distinti saluti.</b>",
        ex: [
          [
            "Le scrivo per chiedere informazioni.",
            "お問い合わせのためご連絡します。",
          ],
          ["La ringrazio in anticipo.", "あらかじめお礼申し上げます。"],
        ],
      },
      {
        h: "改まった語と日常の語",
        body: "同じ意味でも、公的な文書では別の語を使います。avere → <b>possedere</b>（所有する）、dare → <b>fornire</b>（提供する）、chiedere → <b>richiedere</b>（請求する）、mandare → <b>inviare</b>（送付する）。日本語の「言う／申し上げる」のような違いです。",
        ex: [["Può inviare il modulo?", "用紙を送付いただけますか？"]],
      },
      {
        h: "公の案内の読み方",
        body: "案内文では、<b>è vietato</b>（禁止）、<b>è obbligatorio</b>（必須）、<b>si prega di</b>（〜してください）、<b>entro</b>（〜までに）がよく出ます。誰が、何を、いつまでに、を探して読みます。",
        ex: [
          ["È vietato fumare.", "禁煙です。"],
          ["Si prega di non parlare.", "お話しにならないでください。"],
        ],
      },
    ],
    gram: [
      {
        q: "___ un numero, per favore. (prendere, Lei)",
        o: ["Prenda", "Prendi", "Prende"],
        a: 0,
        why: "-ere の Lei の命令形は -a。",
      },
      {
        q: "___ alla cassa. (pagare, Lei)",
        o: ["Paghi", "Paga", "Pago"],
        a: 0,
        why: "-are の Lei の命令形は -i。h で硬い音を保ちます。",
      },
      {
        q: "___ pure. (dire, Lei; 〜を私に言う)",
        o: ["Mi dica", "Dimmi", "Mi dici"],
        a: 0,
        why: "Lei では代名詞が前。dimmi は tu の形。",
      },
      {
        q: "正式なメールの書き出しはどれ？",
        o: ["Gentile Signora Conti,", "Ciao Conti!", "Cara amica,"],
        a: 0,
        why: "Gentile は改まった書き出しです。",
        say: "Gentile Signora Conti,",
      },
      {
        q: "「送付する」の改まった語は？",
        o: ["inviare", "mandare", "dare"],
        a: 0,
        why: "mandare の改まった語が inviare です。",
        say: "inviare",
      },
      {
        q: "È vietato fumare. の意味は？",
        o: ["禁煙です", "喫煙してください", "喫煙所があります"],
        a: 0,
        why: "vietato は「禁止された」。",
        say: "È vietato fumare.",
      },
      { t: "order", ja: "おかけください。", it: ["Si accomodi."] },
      {
        t: "order",
        ja: "お問い合わせのためご連絡します。",
        it: ["Le scrivo per chiedere informazioni."],
      },
    ],
    read: {
      kind: "公的な案内",
      title: "Comune di Bologna: avviso",
      lines: [
        [
          "Si informano i cittadini che l'ufficio anagrafe resterà chiuso dal 3 al 7 marzo.",
          "市民の皆様へ。住民登録窓口は3月3日から7日まで閉鎖します。",
        ],
        [
          "I lavori di ristrutturazione dureranno cinque giorni.",
          "改修工事は5日間かかります。",
        ],
        [
          "Per le richieste urgenti, si prega di rivolgersi alla sede di Via Roma 12.",
          "緊急のお申し出は、ローマ通り12番の窓口へお願いします。",
        ],
        [
          "È obbligatorio presentare un documento di identità.",
          "身分証の提示が必須です。",
        ],
        [
          "Le domande possono essere inviate anche per email entro il 28 febbraio.",
          "申請書は2月28日までならメールでも送付できます。",
        ],
        ["Ci scusiamo per il disagio.", "ご不便をおかけして申し訳ありません。"],
      ],
      gloss: [
        ["si informano", "お知らせします"],
        ["anagrafe", "住民登録"],
        ["ristrutturazione", "改修"],
        ["urgenti", "緊急の"],
        ["rivolgersi a", "〜に問い合わせる"],
        ["sede", "窓口・拠点"],
        ["disagio", "不便"],
        ["cittadini", "市民"],
        ["entro", "〜までに"],
        ["domande", "申請書（質問の意味もある）"],
        ["presentare", "提示する"],
        ["obbligatorio", "必須の"],
      ],
      q: [
        {
          skill: "info",
          s: "Quando è chiuso l'ufficio? （窓口が閉まるのはいつ？）",
          o: ["dal 3 al 7 marzo", "il 28 febbraio", "tutto marzo"],
          a: 0,
          why: "dal 3 al 7 marzo.",
        },
        {
          skill: "info",
          s: "3月5日に急ぎの用がある人は、どうする？",
          o: ["ローマ通り12番へ行く", "工事の終わりを待つ", "電話をかける"],
          a: 0,
          why: "si prega di rivolgersi alla sede di Via Roma 12.",
        },
        {
          skill: "info",
          s: "窓口で必ず必要なものは？",
          o: ["身分証", "メール", "手数料"],
          a: 0,
          why: "È obbligatorio presentare un documento.",
        },
        {
          skill: "main",
          s: "Perché il Comune scrive questo avviso?（市がこの案内を書く目的は？）",
          o: [
            "閉鎖と代わりの方法を知らせるため",
            "工事業者を募集するため",
            "市の歴史を伝えるため",
          ],
          a: 0,
          why: "閉鎖の期間と、その間の手続きを伝えています。",
        },
      ],
    },
    write: {
      task: "イタリアの語学学校へ、コースについて尋ねる正式なメールを書きましょう。",
      hints: [
        "Gentile Signora / Signore,",
        "Le scrivo per chiedere ...",
        "Vorrei sapere ...",
        "In attesa di una Sua risposta, Le porgo distinti saluti.",
      ],
      model:
        "Gentile Signora, Le scrivo per chiedere informazioni sui corsi di italiano. Vorrei sapere quanto costa un corso di due settimane. In attesa di una Sua risposta, Le porgo distinti saluti. Takuya",
      modelJa:
        "拝啓。イタリア語コースについてお問い合わせいたします。2週間のコースの料金を知りたいです。ご返信をお待ちしております。敬具。タクヤ",
      check: [
        "書き出しと結びを改まった形にした",
        "Le / Sua を大文字で書いた",
        "vorrei で丁寧に尋ねた",
      ],
    },
  },
  {
    id: "s6-cine",
    g: 6,
    title: "ci と ne",
    goal: "ci（そこに）と ne（それを少し）を聞き取り、使える",
    talk: [
      ["Ada", "Sei mai stato a Venezia?", "ヴェネツィアに行ったことはある？"],
      ["Ren", "Sì, ci sono stato due volte.", "うん、2回行ったよ。"],
      [
        "Ada",
        "Quanto tempo ci vuole in treno da qui?",
        "ここから電車でどのくらいかかる？",
      ],
      ["Ren", "Ci vogliono due ore.", "2時間かかるよ。"],
      ["Ada", "Hai delle foto?", "写真はある？"],
      [
        "Ren",
        "Sì, ne ho tantissime. Te ne mando qualcuna.",
        "うん、たくさんある。何枚か送るね。",
      ],
    ],
    words: [
      ["mai", "今までに・決して"],
      ["volta", "回", "due volte＝2回"],
      ["ci vuole", "（時間・物が）必要だ", "複数は ci vogliono"],
      ["qualcuno", "誰か・いくつか"],
      ["qualcosa", "何か"],
      ["niente", "何も〜ない"],
      ["nessuno", "誰も〜ない"],
      ["un po'", "少し"],
      ["abbastanza", "十分に"],
      ["troppo", "多すぎる"],
      ["giocattolo", "おもちゃ"],
      ["asino", "ロバ"],
      ["amicizia", "友情"],
      ["promessa", "約束"],
    ],
    learn: [
      {
        h: "ci：「そこに」",
        body: "すでに話に出た<b>場所</b>を受けます。動詞の前に置きます。近過去では ci の後に essere が続き、<b>ci sono stato</b> の形になります。a Roma, in Italia のような語を繰り返さずに済みます。",
        ex: [
          ["Vai a Roma? Sì, ci vado domani.", "ローマへ行く？うん、明日行く。"],
          [
            "Sei stato in Italia? Sì, ci sono stato.",
            "イタリアへ行ったことある？うん、あるよ。",
          ],
        ],
      },
      {
        h: "ci vuole：「〜が必要だ」",
        body: "時間や物が必要なときの決まり文句です。単数なら <b>ci vuole</b>、複数なら <b>ci vogliono</b>。",
        ex: [
          ["Ci vuole un'ora.", "1時間かかります。"],
          ["Ci vogliono due ore.", "2時間かかります。"],
          ["Ci vuole pazienza.", "忍耐が必要です。"],
        ],
      },
      {
        h: "ne：「それを（いくらか）」",
        body: "数や量を言うときに、名詞の代わりに使います。日本語にない語で、省くと不自然になります。「どのくらい？」に答える文でよく出ます。",
        ex: [
          [
            "Quanti caffè bevi? Ne bevo due.",
            "コーヒーは何杯飲む？2杯飲むよ。",
          ],
          [
            "Vuoi della pasta? Sì, ne voglio un po'.",
            "パスタいる？うん、少しほしい。",
          ],
          ["Non ne ho.", "それは持っていません。"],
        ],
      },
      {
        h: "否定の組み合わせ",
        body: "英語と違い、イタリア語では否定語を重ねても肯定になりません（日本語の「誰も来ない」と同じ感覚です）。<b>non ... niente</b>（何も〜ない）、<b>non ... nessuno</b>（誰も〜ない）、<b>non ... mai</b>（決して〜ない）、<b>non ... più</b>（もう〜ない）。",
        ex: [
          ["Non vedo niente.", "何も見えません。"],
          ["Non c'è nessuno.", "誰もいません。"],
          ["Non bevo mai caffè.", "コーヒーは全く飲みません。"],
        ],
      },
    ],
    gram: [
      {
        q: "Vai a scuola? Sì, ___ vado adesso.",
        o: ["ci", "ne", "lo"],
        a: 0,
        why: "場所を受けるのは ci。",
      },
      {
        q: "Quanti libri hai? ___ ho dieci.",
        o: ["Ne", "Ci", "Li"],
        a: 0,
        why: "数を言うときは ne。",
      },
      {
        q: "___ vogliono due ore.",
        o: ["Ci", "Ne", "Si"],
        a: 0,
        why: "「かかる」は ci vuole / ci vogliono。",
      },
      {
        q: "Ci ___ un'ora.",
        o: ["vuole", "vogliono", "voglio"],
        a: 0,
        why: "un'ora は単数。",
      },
      {
        q: "Non vedo ___.（何も）",
        o: ["niente", "nessuno", "mai"],
        a: 0,
        why: "「何も〜ない」は non ... niente。",
      },
      {
        q: "「イタリアへ行ったことがある」はどれ？",
        o: ["Ci sono stato.", "Ne ho stato.", "Ci ho stato."],
        a: 0,
        why: "stare の近過去は essere を使います。",
        say: "Ci sono stato.",
      },
      { t: "order", ja: "2時間かかります。", it: ["Ci vogliono due ore."] },
      { t: "order", ja: "誰もいません。", it: ["Non c'è nessuno."] },
    ],
    read: {
      kind: "物語（連載7）",
      title: "Pinocchio 7: Il Paese dei Balocchi",
      lines: [
        [
          "Pinocchio aveva promesso alla Fata di andare a scuola, e per un po' ci è andato davvero.",
          "ピノッキオは学校へ行くと妖精に約束し、しばらくは本当に通いました。",
        ],
        [
          "Ma un giorno il suo amico Lucignolo gli ha parlato di un posto meraviglioso.",
          "しかしある日、友人のルチーニョロが、すばらしい場所の話をしました。",
        ],
        [
          "«Nel Paese dei Balocchi non ci sono scuole né libri. Si gioca tutto il giorno!»",
          "「おもちゃの国には、学校も本もない。一日中遊べるんだ！」",
        ],
        [
          "Pinocchio ci ha pensato un momento e poi è partito con lui.",
          "ピノッキオは少し考えて、彼と一緒に出発しました。",
        ],
        [
          "Per cinque mesi non ha fatto altro che giocare.",
          "5か月の間、遊んでばかりいました。",
        ],
        [
          "Una mattina si è svegliato con due lunghe orecchie.",
          "ある朝、目覚めると長い耳が2つありました。",
        ],
        [
          "Era diventato un asino! Purtroppo, di amici veri, là, non ne aveva nessuno.",
          "ロバになっていたのです！あいにく、そこに本当の友達は1人もいませんでした。",
        ],
      ],
      gloss: [
        ["aveva promesso", "約束していた（大過去）"],
        ["Paese dei Balocchi", "おもちゃの国"],
        ["né", "〜も（ない）"],
        ["si gioca", "人は遊ぶ"],
        ["non fare altro che", "〜してばかりいる"],
        ["orecchie", "耳（複数）"],
        ["era diventato", "〜になっていた"],
      ],
      q: [
        {
          skill: "ref",
          s: "ci è andato davvero の ci が指す場所は？",
          o: ["学校", "おもちゃの国", "妖精の家"],
          a: 0,
          why: "直前の a scuola を受けています。",
        },
        {
          skill: "ref",
          s: "ci ha pensato の ci は何を指す？",
          o: ["おもちゃの国へ行く話", "ロバ", "学校の本"],
          a: 0,
          why: "ci は場所だけでなく、話題を受けることもあります（pensare a）。",
        },
        {
          skill: "order",
          s: "順序が正しいのは？",
          o: [
            "約束→誘われる→遊ぶ→ロバになる",
            "遊ぶ→約束→ロバになる→誘われる",
            "ロバになる→約束→遊ぶ→誘われる",
          ],
          a: 0,
          why: "時間の語（un giorno, per cinque mesi, una mattina）が目印です。",
        },
        {
          skill: "main",
          s: "この回が伝えていることは？",
          o: [
            "楽なことだけを選ぶと、結局は大きなものを失う",
            "遊びは体に良い",
            "学校は不要だ",
          ],
          a: 0,
          why: "約束を破って遊び続けた結末から読み取れます。",
        },
      ],
    },
    write: {
      task: "行ったことのある場所について、ci と ne を使って短い会話を書きましょう。",
      hints: [
        "Sei mai stato/a a ...?",
        "Sì, ci sono stato/a ... volte.",
        "Quanto tempo ci vuole?",
        "Hai delle foto? Sì, ne ho ...",
      ],
      model:
        "Sei mai stato a Kyoto? Sì, ci sono stato tre volte. Quanto tempo ci vuole da Osaka? Ci vuole un'ora. Hai delle foto? Sì, ne ho molte.",
      modelJa:
        "京都に行ったことはある？うん、3回行ったよ。大阪からどのくらいかかる？1時間かかるよ。写真はある？うん、たくさんあるよ。",
      check: [
        "場所を ci で受けた",
        "数や量を ne で受けた",
        "ci vuole と ci vogliono を使い分けた",
      ],
    },
  },
  {
    id: "s6-opinioni",
    g: 6,
    title: "意見と接続法（読むだけ）",
    goal: "接続法に気づき、筆者の主張と根拠を読み分けられる",
    talk: [
      [
        "Dino",
        "Pensi che sia utile imparare una lingua da adulti?",
        "大人になって言語を学ぶのは役に立つと思う？",
      ],
      [
        "Kaori",
        "Sì, credo che sia molto utile.",
        "うん、とても役に立つと思う。",
      ],
      ["Dino", "Ma non è difficile?", "でも難しくない？"],
      [
        "Kaori",
        "È vero, però è importante che tu parli ogni giorno.",
        "そうだけど、毎日話すことが大事だよ。",
      ],
      [
        "Dino",
        "Hai ragione. Spero di riuscirci!",
        "その通りだね。うまくいくといいな！",
      ],
      ["Kaori", "Sono sicura che ce la farai.", "きっとできると思うよ。"],
    ],
    words: [
      ["opinione", "意見", "女性名詞"],
      ["ragione", "理由・正しさ", "avere ragione＝正しい"],
      ["torto", "誤り", "avere torto＝間違っている"],
      ["importante", "大切な"],
      ["utile", "役に立つ"],
      ["inutile", "役に立たない"],
      ["credere", "思う・信じる"],
      ["pensare", "思う・考える"],
      ["sperare", "望む"],
      ["sembrare", "〜のように見える"],
      ["anzitutto", "まず第一に"],
      ["tuttavia", "しかしながら"],
      ["dunque", "したがって"],
      ["ce la farai", "きっとできるよ"],
    ],
    learn: [
      {
        h: "接続法は「事実と断定しない」しるし",
        body: "この段階では<b>読んでわかれば十分</b>です。penso che（〜と思う）、credo che（〜と信じる）、spero che（〜を望む）、è importante che（〜が大切だ）の後で動詞の形が変わります。「事実」ではなく「頭の中のこと」を述べているしるしです。",
        ex: [
          ["Penso che sia vero.", "それは本当だと思います。"],
          ["Spero che tu venga.", "君が来ることを望みます。"],
        ],
      },
      {
        h: "よく見る接続法の形",
        body: "essere → <b>sia</b>（複数 siano）、avere → <b>abbia</b>、andare → <b>vada</b>、fare → <b>faccia</b>、venire → <b>venga</b>、-are 動詞 → <b>parli</b>、-ere / -ire 動詞 → <b>prenda, parta</b>。Lei の命令形と同じ形です。",
        ex: [
          ["Credo che abbia ragione.", "彼が正しいと思います。"],
          ["È importante che tu parli.", "君が話すことが大切です。"],
        ],
      },
      {
        h: "話すときの近道",
        body: "自分が話すときは、接続法を避けて言えます。<b>Secondo me è vero.</b>（私の考えでは本当だ）、<b>Per me è importante parlare.</b>（私には話すことが大切だ）、<b>Spero di venire.</b>（行きたいと思う）。まずはこの形で十分通じます。",
        ex: [
          ["Secondo me è vero.", "私の考えでは本当です。"],
          ["Spero di venire.", "行けるといいと思います。"],
        ],
      },
      {
        h: "主張と根拠を読み分ける",
        body: "説明文は、<b>主張</b>（secondo me, credo che, dunque）と<b>根拠</b>（infatti, perché, gli studi dicono）でできています。<b>反論を認める語</b>（è vero che, tuttavia, certo, ma）にも注意します。国語の「筆者の主張をつかむ」学習そのものです。",
        ex: [
          [
            "È vero che è difficile, tuttavia è utile.",
            "難しいのは確かですが、それでも役に立ちます。",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "Penso che ___ vero.",
        o: ["sia", "è la", "sono"],
        a: 0,
        why: "penso che の後は接続法 sia。",
      },
      {
        q: "Credo che Marco ___ ragione.",
        o: ["abbia", "abbiamo", "avete"],
        a: 0,
        why: "avere の接続法は abbia。",
      },
      {
        q: "「君が正しい」はどれ？",
        o: ["Hai ragione.", "Sei ragione.", "Fai ragione."],
        a: 0,
        why: "avere ragione を使います。",
        say: "Hai ragione.",
      },
      {
        q: "接続法を避けて「それは本当だと思う」と言うなら？",
        o: [
          "Secondo me è vero.",
          "Secondo me sia vero.",
          "Penso che è vero me.",
        ],
        a: 0,
        why: "secondo me の後は直説法です。",
        say: "Secondo me è vero.",
      },
      {
        q: "文章中で「主張」の目印になる語は？",
        o: ["dunque", "ieri", "sotto"],
        a: 0,
        why: "dunque（したがって）は結論を導きます。",
        say: "dunque",
      },
      {
        q: "「きっとできるよ」はどれ？",
        o: ["Ce la farai.", "La farai ce.", "Ci farai la."],
        a: 0,
        why: "ce la fare で「やり遂げる」。",
        say: "Ce la farai.",
      },
      { t: "order", ja: "私の考えでは本当です。", it: ["Secondo me è vero."] },
      { t: "order", ja: "君が正しいです。", it: ["Hai ragione."] },
    ],
    read: {
      kind: "意見文",
      title: "Il telefono a tavola",
      lines: [
        [
          "Oggi molte persone usano il telefono anche durante i pasti.",
          "今日、多くの人が食事中にも電話を使います。",
        ],
        [
          "Secondo me, è un'abitudine da cambiare.",
          "私の考えでは、これは変えるべき習慣です。",
        ],
        [
          "Anzitutto, il pasto è un momento per parlare con gli altri.",
          "まず第一に、食事は他の人と話す時間です。",
        ],
        [
          "Inoltre, alcuni studi dicono che chi mangia guardando lo schermo mangia di più.",
          "さらに、画面を見ながら食べる人は食べる量が増える、という研究もあります。",
        ],
        [
          "È vero che a volte dobbiamo rispondere a messaggi urgenti.",
          "確かに、急ぎのメッセージに返事をしなければならないこともあります。",
        ],
        [
          "Tuttavia, credo che la maggior parte possa aspettare dieci minuti.",
          "しかし、ほとんどは10分待てると思います。",
        ],
        [
          "Dunque, è importante che mettiamo via il telefono quando siamo a tavola.",
          "したがって、食卓では電話を片付けることが大切です。",
        ],
      ],
      gloss: [
        ["durante", "〜の間"],
        ["pasti", "食事"],
        ["abitudine da cambiare", "変えるべき習慣"],
        ["schermo", "画面"],
        ["la maggior parte", "大部分"],
        ["mettere via", "片付ける"],
      ],
      q: [
        {
          skill: "main",
          s: "Qual è l'opinione dell'autore?（筆者の意見は？）",
          o: [
            "A tavola non bisogna usare il telefono.",
            "Il telefono fa bene.",
            "Bisogna mangiare di più.",
          ],
          a: 0,
          why: "Secondo me と Dunque の文が主張です。",
        },
        {
          skill: "fact",
          s: "「根拠」として示されているのは？",
          o: [
            "画面を見ながら食べると量が増えるという研究",
            "電話を片付けるべきだ",
            "変えるべき習慣だ",
          ],
          a: 0,
          why: "alcuni studi dicono が根拠の目印です。他は主張です。",
        },
        {
          skill: "infer",
          s: "È vero che ... の文の働きは？",
          o: ["反対意見を先に認める", "主張を変える", "話を終える"],
          a: 0,
          why: "次の Tuttavia で自分の主張に戻す、説得の型です。",
        },
        {
          skill: "vocab",
          s: "possa, mettiamo が接続法なのはなぜ？",
          o: [
            "credo che / è importante che の後だから",
            "過去の話だから",
            "命令だから",
          ],
          a: 0,
          why: "頭の中の考えを述べる表現の後です。",
        },
      ],
    },
    write: {
      task: "「毎日外国語を勉強するのは大切か」について、主張と根拠を入れて書きましょう。接続法は使わなくて構いません。",
      hints: [
        "Secondo me ...",
        "Anzitutto ...",
        "È vero che ...",
        "Tuttavia ...",
        "Dunque ...",
      ],
      model:
        "Secondo me è importante studiare ogni giorno. Anzitutto, dieci minuti bastano. È vero che a volte non abbiamo tempo. Tuttavia, possiamo ascoltare una canzone. Dunque, studiare poco è meglio di non studiare.",
      modelJa:
        "私の考えでは、毎日勉強することが大切です。まず第一に、10分で十分です。確かに時間がない日もあります。それでも歌を聴くことはできます。したがって、少しでも勉強する方が、しないよりよいです。",
      check: [
        "主張を最初に書いた",
        "根拠を入れた",
        "反対意見を認める文を入れた",
        "結論を dunque で締めた",
      ],
    },
  },
  {
    id: "s6-riassunto",
    g: 6,
    title: "要約と、物語の結末",
    goal: "遠過去を読み取り、文章を短くまとめられる",
    talk: [
      [
        "Maestra",
        "Hai letto tutta la storia di Pinocchio?",
        "ピノッキオの話を全部読んだ？",
      ],
      [
        "Kai",
        "Sì, ieri ho finito l'ultimo capitolo.",
        "はい、昨日最後の章を読み終えました。",
      ],
      ["Maestra", "Puoi raccontarla in poche parole?", "短い言葉で話せる？"],
      [
        "Kai",
        "Un burattino disobbediente impara ad amare e diventa un bambino.",
        "言うことを聞かない人形が、愛することを学び、人間の子どもになります。",
      ],
      [
        "Maestra",
        "Bravo! Questo è un buon riassunto.",
        "よくできました！それは良い要約です。",
      ],
      [
        "Kai",
        "Grazie. Mi è piaciuta molto la fine.",
        "ありがとうございます。結末がとても好きでした。",
      ],
    ],
    words: [
      ["riassunto", "要約"],
      ["capitolo", "章"],
      ["racconto", "物語・短編"],
      ["autore", "作者"],
      ["personaggio", "登場人物"],
      ["protagonista", "主人公", "男女同形"],
      ["fine", "終わり・結末"],
      ["in poche parole", "手短に言うと"],
      ["soprattutto", "特に"],
      ["ultimo", "最後の"],
      ["disobbediente", "言うことを聞かない"],
      ["vero", "本当の"],
      ["pescecane", "サメ"],
      ["salvare", "救う"],
    ],
    learn: [
      {
        h: "遠過去は「本の中の過去」",
        body: "昔話や小説の語りに使う過去形で、<b>読んでわかれば十分</b>です。会話では近過去を使います（南部では会話でも使います）。<br>語尾の目印：parlare → <b>parlò</b>、credere → <b>credé</b>、partire → <b>partì</b>。loro は -arono, -erono, -irono です。",
        ex: [
          ["Pinocchio partì.", "ピノッキオは出発した。"],
          ["I due amici parlarono.", "2人の友達は話した。"],
        ],
      },
      {
        h: "よく出る不規則な遠過去",
        body: "essere → <b>fu</b>、avere → <b>ebbe</b>、fare → <b>fece</b>、dire → <b>disse</b>、vedere → <b>vide</b>、venire → <b>venne</b>、prendere → <b>prese</b>、rispondere → <b>rispose</b>。«...» disse（と言った）はとてもよく見ます。辞書で引くときは原形に戻します。",
        ex: [
          ["«Aiuto!» disse Pinocchio.", "「助けて！」とピノッキオは言った。"],
          ["Fu un giorno felice.", "幸せな一日だった。"],
        ],
      },
      {
        h: "要約の手順",
        body: "① <b>段落ごとに要点</b>を1文にする ② <b>人物、出来事、結果</b>を残し、例や飾りを削る ③ つなぐ語（prima, poi, quindi, alla fine）で並べる ④ 自分の感想は入れない。国語の要約とまったく同じ手順で、母語で身につけた力が使えます。",
        ex: [
          ["In poche parole, ...", "手短に言うと、…"],
          ["La storia parla di ...", "この話は〜についての話です。"],
        ],
      },
      {
        h: "イタリアの言葉の文化",
        body: "<b>Carlo Collodi</b> の『ピノッキオの冒険』は1883年に本になり、世界中で読まれています。他に覚えておきたい名前：<b>Dante</b>（『神曲』）。「イタリア語の父」と呼ばれます。童謡の <b>Giro giro tondo</b> は、日本の「かごめかごめ」のように輪になって遊ぶ歌です。",
        ex: [
          [
            "Giro giro tondo, casca il mondo, casca la terra, tutti giù per terra!",
            "まわれまわれ、世界が落ちる、大地が落ちる、みんな地面に！",
          ],
        ],
      },
    ],
    gram: [
      {
        q: "disse の原形は？",
        o: ["dire", "disegnare", "dare"],
        a: 0,
        why: "disse は dire の遠過去です。",
        say: "disse",
      },
      {
        q: "fu の原形は？",
        o: ["essere", "fare", "fumare"],
        a: 0,
        why: "fu は essere の遠過去です。",
        say: "fu",
      },
      {
        q: "fece の原形は？",
        o: ["fare", "finire", "essere"],
        a: 0,
        why: "fece は fare の遠過去です。",
        say: "fece",
      },
      {
        q: "parlò の時制は？",
        o: ["遠過去", "現在", "未来"],
        a: 0,
        why: "最後の ò は遠過去の目印です（未来の parlerò と区別）。",
        say: "parlò",
      },
      {
        q: "要約に入れないものは？",
        o: ["自分の感想", "主人公の名前", "話の結果"],
        a: 0,
        why: "要約は内容をまとめるもので、感想は別に書きます。",
      },
      {
        q: "「手短に言うと」はどれ？",
        o: ["In poche parole", "Poche volte", "Per poco tempo"],
        a: 0,
        why: "in poche parole で「手短に言うと」。",
        say: "In poche parole",
      },
      {
        t: "order",
        ja: "この話はある人形についての話です。",
        it: ["La storia parla di un burattino."],
      },
      {
        t: "order",
        ja: "結末がとても好きでした。",
        it: ["Mi è piaciuta molto la fine."],
      },
    ],
    read: {
      kind: "物語（最終回）",
      title: "Pinocchio 8: Un bambino vero",
      lines: [
        [
          "Pinocchio, che era ormai un asino, fu venduto a un circo.",
          "もうロバになっていたピノッキオは、サーカスに売られました。",
        ],
        [
          "Un giorno fu gettato in mare, e l'acqua gli restituì la sua forma di burattino.",
          "ある日、海に投げ込まれ、水のおかげで人形の姿に戻りました。",
        ],
        [
          "Mentre nuotava, un enorme Pescecane lo inghiottì.",
          "泳いでいると、巨大なサメが彼を飲み込みました。",
        ],
        [
          "Nel buio vide una piccola luce: era Geppetto, che lo cercava da due anni!",
          "暗闇に小さな明かりが見えました。2年もの間、彼を探していたジェッペットでした！",
        ],
        [
          "«Babbo mio!» gridò Pinocchio, e lo abbracciò.",
          "「お父さん！」とピノッキオは叫び、抱きしめました。",
        ],
        [
          "Pinocchio lo prese sulle spalle e nuotò fino alla riva.",
          "ピノッキオは父を背負い、岸まで泳ぎました。",
        ],
        [
          "Da quel giorno lavorò ogni giorno per curare il padre malato, e studiò la sera.",
          "その日から毎日働いて病気の父の世話をし、夜は勉強しました。",
        ],
        [
          "Una mattina si svegliò e si guardò allo specchio: non era più un burattino, ma un bambino vero.",
          "ある朝目覚めて鏡を見ると、もう人形ではなく、本当の子どもになっていました。",
        ],
      ],
      gloss: [
        ["ormai", "もう"],
        ["fu gettato", "投げ込まれた"],
        ["restituì", "返した"],
        ["inghiottì", "飲み込んだ"],
        ["buio", "暗闇"],
        ["babbo", "お父さん（トスカーナの言い方）"],
        ["spalle", "肩"],
        ["riva", "岸"],
        ["curare", "世話をする"],
        ["specchio", "鏡"],
      ],
      q: [
        {
          skill: "main",
          s: "Perché Pinocchio diventa un bambino vero?（なぜ本当の子どもになったか、物語から考えると？）",
          o: [
            "他人のために働き、学ぶようになったから",
            "海で泳いだから",
            "鏡を見たから",
          ],
          a: 0,
          why: "魔法のきっかけは書かれていませんが、これまでとの違いは、父のために働き学ぶようになったことです。",
        },
        {
          skill: "order",
          s: "順序が正しいのは？",
          o: [
            "サーカス→海→サメ→ジェッペットと再会",
            "海→サーカス→再会→サメ",
            "再会→サーカス→サメ→海",
          ],
          a: 0,
          why: "fu venduto, fu gettato, inghiottì, vide の順です。",
        },
        {
          skill: "ref",
          s: "Pinocchio lo prese の lo は誰？",
          o: ["ジェッペット", "サメ", "ロバ"],
          a: 0,
          why: "直前で再会した父です。",
        },
        {
          skill: "infer",
          s: "これまでのピノッキオと、この回で最も違う点は？",
          o: [
            "自分より他人を優先している",
            "泳げるようになった",
            "うそが上手になった",
          ],
          a: 0,
          why: "父を背負って泳ぎ、働いて世話をする行動に表れています。",
        },
      ],
    },
    write: {
      task: "『ピノッキオ』全体を4つの文で要約しましょう。人物、出来事、結果を入れ、感想は入れません。",
      hints: [
        "La storia parla di ...",
        "Prima ...",
        "Poi ...",
        "Alla fine ...",
      ],
      model:
        "La storia parla di un burattino, Pinocchio. Prima non ascolta nessuno e diventa un asino. Poi trova Geppetto nel Pescecane e lo salva. Alla fine lavora e studia, e diventa un bambino vero.",
      modelJa:
        "この話は人形のピノッキオの物語です。最初は誰の言うことも聞かず、ロバになります。その後サメの中でジェッペットを見つけて救います。最後は働いて学び、本当の子どもになります。",
      check: [
        "人物、出来事、結果を入れた",
        "つなぐ語で順序を示した",
        "感想を入れなかった",
      ],
    },
  },
);
