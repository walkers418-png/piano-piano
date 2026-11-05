/* 段階3（小3相当・CEFR目安A1〜A2）：冠詞つき前置詞、piacere、近過去。ピノッキオの連載が始まる。 */
window.KOKUGO.push(
  {
    id: "s3-preposizioni",
    g: 3,
    title: "冠詞つき前置詞",
    goal: "al, nel, sul などを使い、場所を詳しく言える",
    talk: [
      ["Marta", "Dove sono le mie chiavi?", "私の鍵はどこ？"],
      [
        "Dario",
        "Sono sul tavolo, vicino al telefono.",
        "テーブルの上、電話の近くにあるよ。",
      ],
      [
        "Marta",
        "No, non ci sono. E nella borsa?",
        "ううん、ないよ。かばんの中は？",
      ],
      [
        "Dario",
        "Guarda nella tasca della giacca!",
        "上着のポケットを見てみて！",
      ],
      ["Marta", "Eccole! Grazie.", "あった！ありがとう。"],
      [
        "Dario",
        "Di niente. Andiamo al bar?",
        "どういたしまして。バールに行こうか？",
      ],
    ],
    words: [
      ["chiave", "鍵", "女性名詞"],
      ["borsa", "かばん"],
      ["tasca", "ポケット"],
      ["giacca", "上着"],
      ["libro", "本"],
      ["sedia", "いす"],
      ["letto", "ベッド"],
      ["camera", "部屋・寝室"],
      ["cucina", "台所"],
      ["finestra", "窓"],
      ["porta", "ドア"],
      ["sopra", "上に"],
      ["sotto", "下に"],
      ["dentro", "中に"],
      ["fuori", "外に"],
      ["davanti", "前に"],
      ["dietro", "後ろに"],
    ],
    learn: [
      {
        h: "前置詞＋定冠詞は1語になる",
        body: "a, da, di, in, su の後に定冠詞が来ると、くっついて1語になります。<br><b>a＋il＝al</b>、a＋la＝alla、a＋i＝ai、a＋le＝alle<br><b>di＋il＝del</b>、di＋la＝della<br><b>da＋il＝dal</b>、da＋la＝dalla<br><b>in＋il＝nel</b>、in＋la＝nella<br><b>su＋il＝sul</b>、su＋la＝sulla<br>母音の前は all', dell', nell' のように l' がつきます。",
        ex: [
          ["Vado al mare.", "海へ行きます。"],
          ["Il libro è sul tavolo.", "本はテーブルの上にあります。"],
          ["Il telefono è nella borsa.", "電話はかばんの中です。"],
        ],
      },
      {
        h: "di の使いどころ",
        body: "「〜の」を表す di も、定冠詞と結びつきます：la tasca <b>della</b> giacca（上着のポケット）。名前には冠詞がつかないので di のままです：il libro <b>di</b> Anna。",
        ex: [
          ["La porta della camera è chiusa.", "寝室のドアは閉まっています。"],
        ],
      },
      {
        h: "「少しの」は del, della でも言う",
        body: "del, della などは「いくらかの」という意味でも使います（部分冠詞）。量をぼかす言い方で、よく聞きます。",
        ex: [
          ["Vorrei del pane.", "パンを少しほしいのですが。"],
          ["Bevo dell'acqua.", "水を飲みます。"],
        ],
      },
      {
        h: "場所の副詞",
        body: "sopra／sotto（上／下）、dentro／fuori（中／外）、davanti／dietro（前／後ろ）も対で覚えます。名詞と一緒なら <b>sopra il tavolo</b>、<b>davanti alla porta</b>、<b>dietro la porta</b> のように言います。",
        ex: [
          ["Il gatto è sotto il letto.", "猫はベッドの下にいます。"],
          ["Ti aspetto davanti alla stazione.", "駅の前で待っています。"],
        ],
      },
    ],
    gram: [
      {
        q: "Vado ___ mare. (a + il)",
        o: ["al", "alla", "all'"],
        a: 0,
        why: "a＋il＝al。",
      },
      {
        q: "Il libro è ___ tavolo. (su + il)",
        o: ["sul", "sulla", "nel"],
        a: 0,
        why: "su＋il＝sul。",
      },
      {
        q: "Il telefono è ___ borsa. (in + la)",
        o: ["nella", "nel", "sulla"],
        a: 0,
        why: "in＋la＝nella。",
      },
      {
        q: "La tasca ___ giacca. (di + la)",
        o: ["della", "del", "di"],
        a: 0,
        why: "di＋la＝della。",
      },
      {
        q: "Il libro ___ Anna.",
        o: ["di", "della", "dell'"],
        a: 0,
        why: "人の名前には冠詞がつかないので di のまま。",
      },
      {
        q: "Vengo ___ stazione. (da + la)",
        o: ["dalla", "della", "alla"],
        a: 0,
        why: "da＋la＝dalla。",
      },
      {
        t: "order",
        ja: "鍵はテーブルの上にあります。",
        it: ["Le chiavi sono sul tavolo."],
      },
      {
        t: "order",
        ja: "駅の前で待っています。",
        it: ["Ti aspetto davanti alla stazione."],
      },
    ],
    read: {
      kind: "物語（連載1）",
      title: "Pinocchio 1: Un pezzo di legno",
      lines: [
        [
          "C'era una volta un pezzo di legno.",
          "昔々、1本の木ぎれがありました。",
        ],
        [
          "Era nella bottega di un vecchio falegname.",
          "年老いた大工の仕事場にありました。",
        ],
        [
          "Un giorno il falegname prende il legno e lo regala a un amico, Geppetto.",
          "ある日、大工はその木を、友人のジェッペットにあげます。",
        ],
        [
          "Geppetto è povero e abita in una piccola stanza.",
          "ジェッペットは貧しく、小さな部屋に住んでいます。",
        ],
        ["Vuole fare un burattino.", "あやつり人形を作りたいのです。"],
        [
          "Quando comincia a lavorare, sente una voce sottile.",
          "仕事を始めると、か細い声が聞こえます。",
        ],
        [
          "Chi parla? Nella stanza non c'è nessuno!",
          "誰が話しているのでしょう？部屋には誰もいません！",
        ],
      ],
      gloss: [
        ["c'era una volta", "昔々〜がありました（物語の決まり文句）"],
        ["pezzo di legno", "木ぎれ"],
        ["bottega", "仕事場"],
        ["falegname", "大工"],
        ["regala", "贈る"],
        ["burattino", "あやつり人形"],
        ["sottile", "細い・か細い"],
        ["nessuno", "誰も〜ない"],
      ],
      q: [
        {
          skill: "match",
          s: "木ぎれを最後に受け取ったのは誰？",
          o: ["ジェッペット", "年老いた大工", "ピノッキオ"],
          a: 0,
          why: "lo regala a un amico, Geppetto.",
        },
        {
          skill: "ref",
          s: "lo regala の lo が指すものは？",
          o: ["木ぎれ", "大工", "部屋"],
          a: 0,
          why: "直前の il legno を受けています。",
        },
        {
          skill: "infer",
          s: "「か細い声」の正体として、物語から予想できるのは？",
          o: ["木ぎれそのもの", "部屋の隣の人", "大工"],
          a: 0,
          why: "部屋には誰もいないのに声がする、という不思議さが続きを読ませます。",
        },
        {
          skill: "vocab",
          s: "C'era una volta は日本語の何に当たる？",
          o: ["昔々あるところに", "おしまい", "こんにちは"],
          a: 0,
          why: "物語の始まりの決まり文句です。",
        },
      ],
    },
    write: {
      task: "自分の部屋を3つの文で説明しましょう。何がどこにあるかを書きます。",
      hints: [
        "Nella mia camera c'è ...",
        "Il libro è sul / sulla ...",
        "Davanti alla finestra ...",
      ],
      model:
        "Nella mia camera c'è un letto. I libri sono sul tavolo. Davanti alla finestra c'è una sedia.",
      modelJa:
        "私の部屋にはベッドがあります。本はテーブルの上にあります。窓の前にいすがあります。",
      check: ["前置詞と定冠詞を1語にした", "c'è と ci sono を使い分けた"],
    },
  },
  {
    id: "s3-piacere",
    g: 3,
    title: "好きと代名詞",
    goal: "piacere と間接の言い方で、好みを話し合える",
    talk: [
      ["Nina", "Ti piace il cinema italiano?", "イタリア映画は好き？"],
      ["Sho", "Sì, mi piace molto. A te?", "うん、とても好き。君は？"],
      [
        "Nina",
        "Anche a me! Ma non mi piacciono i film tristi.",
        "私も！でも悲しい映画は好きじゃないな。",
      ],
      ["Sho", "A me invece piacciono.", "僕は逆に好きだよ。"],
      [
        "Nina",
        "Allora, che cosa vediamo stasera?",
        "じゃあ、今夜は何を見ようか？",
      ],
      ["Sho", "Scegli tu!", "君が選んで！"],
    ],
    words: [
      ["cinema", "映画館・映画", "男性名詞。複数も cinema"],
      ["film", "映画", "男性名詞。複数も film"],
      ["musica", "音楽"],
      ["canzone", "歌", "女性名詞"],
      ["sport", "スポーツ", "複数も sport"],
      ["calcio", "サッカー"],
      ["viaggio", "旅行"],
      ["lingua", "言語"],
      ["triste", "悲しい"],
      ["bello", "美しい・良い"],
      ["brutto", "醜い・悪い"],
      ["facile", "簡単な"],
      ["difficile", "難しい"],
      ["interessante", "面白い"],
      ["anche", "〜も"],
      ["invece", "一方・逆に"],
    ],
    learn: [
      {
        h: "piacere の仕組み",
        body: "mi piace は「私に、〜が気に入る」という形で、<b>好きなものが主語</b>です。だから好きなものが複数なら動詞も複数になります。<br>mi / ti / gli（彼に）/ le（彼女に）/ ci / vi / gli（彼らに）＋ piace・piacciono",
        ex: [
          ["Mi piace il calcio.", "サッカーが好きです。"],
          ["Ti piacciono i film?", "映画は好き？"],
          ["Le piace la musica.", "彼女は音楽が好きです。"],
        ],
      },
      {
        h: "動詞の原形も好きなものになる",
        body: "「〜することが好き」は、piace ＋動詞の原形です。動詞の原形は単数扱いなので piace のままです。",
        ex: [
          ["Mi piace viaggiare.", "旅行するのが好きです。"],
          ["Ci piace mangiare bene.", "私たちはおいしく食べるのが好きです。"],
        ],
      },
      {
        h: "「私も」「私は違う」",
        body: "相手に合わせて答える言い方です。<br><b>Anche a me.</b>（私も好き）／<b>A me no.</b>（私は好きじゃない）／<b>Neanche a me.</b>（私も好きじゃない）／<b>A me sì.</b>（私は好き）。<br>a me, a te は「私には」「君には」を強調します。",
        ex: [
          ["Mi piace il caffè. — Anche a me.", "コーヒーが好き。— 私も。"],
          [
            "Non mi piace la birra. — Neanche a me.",
            "ビールは好きじゃない。— 私も。",
          ],
        ],
      },
      {
        h: "理由を言う perché、逆接の ma / però",
        body: "意見を言うときは理由を添えます。<b>perché</b>（なぜなら）、<b>ma / però</b>（しかし）、<b>invece</b>（一方）。国語の「接続語」の学習に当たり、読解でも目印になります。",
        ex: [
          [
            "Mi piace Roma perché è bella.",
            "ローマが好きです。美しいからです。",
          ],
          ["È difficile, però è interessante.", "難しいけれど、面白いです。"],
        ],
      },
    ],
    gram: [
      {
        q: "Mi ___ il calcio.",
        o: ["piace", "piacciono", "piaci"],
        a: 0,
        why: "il calcio は単数。",
      },
      {
        q: "Mi ___ i film italiani.",
        o: ["piacciono", "piace", "piacere"],
        a: 0,
        why: "i film は複数（film は形が変わりません）。",
      },
      {
        q: "Mi piace ___.（旅行すること）",
        o: ["viaggiare", "viaggio", "viaggi"],
        a: 0,
        why: "動詞の原形を使います。",
      },
      {
        q: "「彼女は音楽が好きです」はどれ？",
        o: [
          "Le piace la musica.",
          "Gli piace la musica.",
          "Lei piace la musica.",
        ],
        a: 0,
        why: "彼女には le。",
        say: "Le piace la musica.",
      },
      {
        q: "「ビールは好きじゃない」への「私も」は？",
        o: ["Neanche a me.", "Anche a me.", "A me sì."],
        a: 0,
        why: "否定への同意は neanche。",
        say: "Neanche a me.",
      },
      {
        q: "film の複数形は？",
        o: ["film", "filmi", "filme"],
        a: 0,
        why: "外来語は複数でも形が変わりません。",
        say: "i film",
      },
      { t: "order", ja: "旅行するのが好きです。", it: ["Mi piace viaggiare."] },
      {
        t: "order",
        ja: "難しいけれど面白いです。",
        it: [
          "È difficile, però è interessante.",
          "È difficile, ma è interessante.",
        ],
      },
    ],
    read: {
      kind: "物語（連載2）",
      title: "Pinocchio 2: Il burattino",
      lines: [
        [
          "Geppetto prende il legno e fa la testa.",
          "ジェッペットは木を取り、頭を作ります。",
        ],
        [
          "Poi fa gli occhi: gli occhi si muovono e lo guardano!",
          "次に目を作ると、目が動いて彼を見つめます！",
        ],
        [
          "Poi fa il naso, ma il naso comincia a crescere.",
          "それから鼻を作りますが、鼻が伸び始めます。",
        ],
        [
          "Più Geppetto lo taglia, più il naso diventa lungo.",
          "切れば切るほど、鼻は長くなります。",
        ],
        [
          "Geppetto dà al burattino il nome di Pinocchio.",
          "ジェッペットは人形にピノッキオという名前をつけます。",
        ],
        [
          "Appena ha le gambe, Pinocchio salta giù e scappa per strada.",
          "足ができるとすぐ、ピノッキオは飛び降りて通りへ逃げ出します。",
        ],
        [
          "Povero Geppetto! Corre dietro al suo burattino.",
          "かわいそうなジェッペット！人形の後を追いかけます。",
        ],
      ],
      gloss: [
        ["si muovono", "動く"],
        ["naso", "鼻"],
        ["crescere", "伸びる・成長する"],
        ["più ..., più ...", "〜すればするほど…"],
        ["taglia", "切る"],
        ["appena", "〜するとすぐ"],
        ["salta giù", "飛び降りる"],
        ["scappa", "逃げる"],
      ],
      q: [
        {
          skill: "order",
          s: "ジェッペットが作った順番で正しいのは？",
          o: ["頭→目→鼻", "鼻→目→頭", "目→頭→足"],
          a: 0,
          why: "testa, occhi, naso の順に出てきます。poi が順序の目印です。",
        },
        {
          skill: "match",
          s: "鼻を切るとどうなる？",
          o: ["もっと長くなる", "なくなる", "声を出す"],
          a: 0,
          why: "più lo taglia, più il naso diventa lungo.",
        },
        {
          skill: "ref",
          s: "lo taglia の lo が指すものは？",
          o: ["鼻", "ジェッペット", "道"],
          a: 0,
          why: "文脈から鼻です。",
        },
        {
          skill: "infer",
          s: "Povero Geppetto! という言葉から読み取れる語り手の気持ちは？",
          o: ["同情", "怒り", "うらやましさ"],
          a: 0,
          why: "povero は「貧しい」のほかに「かわいそうな」の意味があります。",
        },
      ],
    },
    write: {
      task: "好きなものと、好きではないものを、理由をつけて書きましょう。",
      hints: ["Mi piace ... perché ...", "Non mi piacciono ...", "però / ma"],
      model:
        "Mi piace molto il cinema italiano perché è interessante, ma non mi piacciono i film tristi.",
      modelJa:
        "イタリア映画がとても好きです。面白いからです。でも悲しい映画は好きではありません。",
      check: [
        "好きなものの数に動詞を合わせた",
        "perché で理由を添えた",
        "ma か però でつないだ",
      ],
    },
  },
  {
    id: "s3-passato",
    g: 3,
    title: "昨日のこと（近過去）",
    goal: "近過去で、終わった出来事を話せる",
    talk: [
      ["Elena", "Che cosa hai fatto ieri?", "昨日は何をしたの？"],
      ["Yuto", "Ho lavorato fino alle sette.", "7時まで働いたよ。"],
      ["Elena", "E poi?", "それから？"],
      [
        "Yuto",
        "Sono andato al ristorante con un amico.",
        "友達とレストランに行ったよ。",
      ],
      ["Elena", "Che cosa avete mangiato?", "何を食べたの？"],
      [
        "Yuto",
        "Abbiamo mangiato la pasta. Era buonissima!",
        "パスタを食べたんだ。すごくおいしかった！",
      ],
    ],
    words: [
      ["ieri", "昨日"],
      ["stamattina", "今朝"],
      ["ieri sera", "昨晩"],
      ["la settimana scorsa", "先週"],
      ["l'anno scorso", "去年"],
      ["ristorante", "レストラン", "男性名詞"],
      ["pasta", "パスタ"],
      ["fino a", "〜まで"],
      ["già", "もう"],
      ["ancora", "まだ"],
      ["fa", "〜前に", "due giorni fa＝2日前"],
      ["fatto", "fare の過去分詞"],
      ["andato", "andare の過去分詞"],
      ["visto", "vedere の過去分詞"],
    ],
    learn: [
      {
        h: "近過去の作り方",
        body: "<b>avere または essere の現在形 ＋ 過去分詞</b> で作ります。規則形の過去分詞は -are → <b>-ato</b>、-ere → <b>-uto</b>、-ire → <b>-ito</b>。",
        ex: [
          ["Ho mangiato la pizza.", "ピザを食べました。"],
          ["Ho ricevuto una email.", "メールを受け取りました。"],
          ["Ho dormito bene.", "よく眠りました。"],
        ],
      },
      {
        h: "avere か essere か",
        body: "多くの動詞は <b>avere</b> です。<b>移動や状態の変化</b>を表す動詞（andare, venire, partire, arrivare, tornare, uscire, entrare, rimanere, stare など）と、再帰動詞は <b>essere</b> を使います。essere なら過去分詞の語尾を<b>主語の性数</b>に合わせます。",
        ex: [
          ["Sono andato a Roma.", "ローマへ行きました（男性）。"],
          ["Sono andata a Roma.", "ローマへ行きました（女性）。"],
          ["Siamo arrivati ieri.", "昨日着きました（複数）。"],
        ],
      },
      {
        h: "よく使う不規則な過去分詞",
        body: "fare → <b>fatto</b>、dire → <b>detto</b>、vedere → <b>visto</b>、prendere → <b>preso</b>、mettere → <b>messo</b>、leggere → <b>letto</b>、scrivere → <b>scritto</b>、aprire → <b>aperto</b>、chiudere → <b>chiuso</b>、venire → <b>venuto</b>、essere → <b>stato</b>。<br>どの動詞も「動詞」タブの近過去で確かめられます。",
        ex: [
          ["Ho visto un film.", "映画を見ました。"],
          ["Ho fatto colazione.", "朝ごはんを食べました。"],
        ],
      },
      {
        h: "時を表す語",
        body: "ieri（昨日）、la settimana scorsa（先週）、due giorni fa（2日前）のように時の語を添えます。<b>già</b>（もう）と <b>non ... ancora</b>（まだ〜ない）も一緒に使います。",
        ex: [
          ["Ho già mangiato.", "もう食べました。"],
          ["Non ho ancora mangiato.", "まだ食べていません。"],
        ],
      },
    ],
    gram: [
      {
        q: "Ieri ___ mangiato la pasta.",
        o: ["ho", "sono", "è"],
        a: 0,
        why: "mangiare は avere。",
      },
      {
        q: "Ieri Anna ___ andata a Roma.",
        o: ["è", "ha", "sono"],
        a: 0,
        why: "andare は essere。",
      },
      {
        q: "Marco è ___ a casa.",
        o: ["tornato", "tornata", "tornati"],
        a: 0,
        why: "essere なので主語（男性単数）に合わせます。",
      },
      {
        q: "Ho ___ un film.（vedere）",
        o: ["visto", "veduta", "vidi"],
        a: 0,
        why: "vedere の過去分詞は visto。",
      },
      {
        q: "Abbiamo ___ colazione.（fare）",
        o: ["fatto", "fato", "facuto"],
        a: 0,
        why: "fare の過去分詞は fatto。",
      },
      {
        q: "「まだ食べていません」はどれ？",
        o: [
          "Non ho ancora mangiato.",
          "Ho già mangiato.",
          "Non ancora ho mangiato.",
        ],
        a: 0,
        why: "non ... ancora で挟みます。",
        say: "Non ho ancora mangiato.",
      },
      {
        t: "order",
        ja: "昨日は何をしたの？",
        it: ["Che cosa hai fatto ieri?", "Ieri che cosa hai fatto?"],
      },
      { t: "order", ja: "もう食べました。", it: ["Ho già mangiato."] },
    ],
    read: {
      kind: "物語（連載3）",
      title: "Pinocchio 3: A scuola?",
      lines: [
        [
          "Un carabiniere ha preso Pinocchio per il naso.",
          "憲兵がピノッキオの鼻をつかまえました。",
        ],
        [
          "Geppetto è tornato a casa con il burattino.",
          "ジェッペットは人形を連れて家に帰りました。",
        ],
        [
          "Per comprare un libro di scuola, ha venduto la sua giacca.",
          "学校の本を買うために、自分の上着を売りました。",
        ],
        [
          "Fuori faceva freddo, ma Geppetto non ha detto niente.",
          "外は寒かったのですが、ジェッペットは何も言いませんでした。",
        ],
        [
          "La mattina Pinocchio è uscito con il libro.",
          "朝、ピノッキオは本を持って出かけました。",
        ],
        [
          "Per strada ha sentito una musica allegra: era il teatro dei burattini!",
          "通りで陽気な音楽が聞こえました。人形劇でした！",
        ],
        [
          "Pinocchio ha venduto il libro e ha comprato un biglietto.",
          "ピノッキオは本を売って、切符を買いました。",
        ],
      ],
      gloss: [
        ["carabiniere", "憲兵（警察官の一種）"],
        ["ha venduto", "売った（vendere）"],
        ["faceva freddo", "寒かった（半過去）"],
        ["niente", "何も〜ない"],
        ["allegra", "陽気な"],
        ["teatro dei burattini", "人形劇"],
      ],
      q: [
        {
          skill: "match",
          s: "ジェッペットは本を買うために何を売った？",
          o: ["上着", "人形", "切符"],
          a: 0,
          why: "ha venduto la sua giacca.",
        },
        {
          skill: "infer",
          s: "ジェッペットが何も言わなかったのは、なぜだと考えられる？",
          o: [
            "ピノッキオのために我慢している",
            "寒さに気づかなかった",
            "怒っている",
          ],
          a: 0,
          why: "寒いのに上着を売ったという行動から、愛情が読み取れます。",
        },
        {
          skill: "main",
          s: "この回で描かれている対比は？",
          o: ["ジェッペットの犠牲と、ピノッキオの身勝手", "夏と冬", "町と田舎"],
          a: 0,
          why: "上着を売って買った本を、ピノッキオは売ってしまいます。",
        },
        {
          skill: "order",
          s: "ピノッキオが切符を買う前にしたことは？",
          o: ["本を売った", "学校に行った", "上着を売った"],
          a: 0,
          why: "ha venduto il libro e ha comprato un biglietto.",
        },
      ],
    },
    write: {
      task: "昨日したことを4つの文で書きましょう。",
      hints: [
        "Ieri ho ...",
        "Sono andato/a ...",
        "Poi ...",
        "不規則な過去分詞に注意",
      ],
      model:
        "Ieri ho lavorato fino alle sette. Poi sono andato al ristorante con un amico. Abbiamo mangiato la pasta. Sono tornato a casa alle dieci.",
      modelJa:
        "昨日は7時まで働きました。それから友達とレストランに行きました。パスタを食べました。10時に家に帰りました。",
      check: [
        "avere と essere を使い分けた",
        "essere のとき語尾を自分の性に合わせた",
        "不規則な過去分詞を「動詞」タブで確かめた",
      ],
    },
  },
  {
    id: "s3-viaggio",
    g: 3,
    title: "旅の計画と困りごと",
    goal: "予約や問題の説明ができ、時刻表を読める",
    talk: [
      [
        "Impiegata",
        "Buonasera, come posso aiutarLa?",
        "こんばんは。どうなさいましたか？",
      ],
      [
        "Cliente",
        "Ho prenotato una camera a nome Sato.",
        "佐藤の名前で部屋を予約しました。",
      ],
      [
        "Impiegata",
        "Sì, una camera singola per due notti.",
        "はい、シングルで2泊ですね。",
      ],
      [
        "Cliente",
        "Scusi, ho perso il treno e sono arrivato tardi.",
        "すみません、電車に乗り遅れて遅くなりました。",
      ],
      [
        "Impiegata",
        "Non si preoccupi. Ecco la chiave.",
        "ご心配なく。鍵をどうぞ。",
      ],
      [
        "Cliente",
        "Grazie. A che ora è la colazione?",
        "ありがとうございます。朝食は何時ですか？",
      ],
    ],
    words: [
      ["albergo", "ホテル"],
      ["camera singola", "シングルルーム"],
      ["notte", "夜・泊", "due notti＝2泊"],
      ["prenotazione", "予約"],
      ["binario", "（駅の）番線"],
      ["partenza", "出発"],
      ["arrivo", "到着"],
      ["ritardo", "遅れ"],
      ["valigia", "スーツケース"],
      ["passaporto", "パスポート"],
      ["biglietto", "切符"],
      ["tardi", "遅く"],
      ["presto", "早く"],
      ["problema", "問題", "-a で終わるが男性名詞"],
    ],
    learn: [
      {
        h: "丁寧に頼む posso, può",
        body: "<b>Posso ...?</b>（〜してもいいですか）、<b>Può ...?</b>（〜していただけますか・Lei）に動詞の原形を続けます。丁寧に頼むなら per favore を添えましょう。条件法の <b>potrei</b>（できれば〜したいのですが）はさらに丁寧です。",
        ex: [
          ["Posso pagare con la carta?", "カードで払えますか？"],
          ["Può ripetere, per favore?", "もう一度お願いできますか？"],
        ],
      },
      {
        h: "-a で終わる男性名詞",
        body: "ギリシャ語由来の語には、-a で終わるのに男性名詞のものがあります：il problema, il sistema, il programma, il clima。逆に -o で終わる女性名詞もあります：la mano, la foto, la moto。例外は辞書の m. f. で確かめます。",
        ex: [
          ["Non c'è problema.", "問題ありません。"],
          ["Ho un problema.", "問題があります。"],
        ],
      },
      {
        h: "時刻表の読み方",
        body: "公共の時刻は24時間制です。<b>partenza</b>（出発）、<b>arrivo</b>（到着）、<b>binario</b>（番線）、<b>ritardo</b>（遅れ）、<b>soppresso</b>（運休）が基本の語です。国語の「情報の読み取り」に当たります。",
        ex: [
          ["Il treno parte dal binario 3.", "電車は3番線から出ます。"],
          ["Il treno è in ritardo.", "電車は遅れています。"],
        ],
      },
      {
        h: "比べ方の入口 più と meno",
        body: "<b>più</b>（より多く）と <b>meno</b>（より少なく）を形容詞の前に置きます。「〜より」は <b>di</b> です。",
        ex: [
          ["Il treno è più veloce dell'autobus.", "電車はバスより速いです。"],
          ["Questa camera è meno cara.", "この部屋はより安いです。"],
        ],
      },
    ],
    gram: [
      {
        q: "___ pagare con la carta?（払えますか）",
        o: ["Posso", "Puoi", "Vuole"],
        a: 0,
        why: "自分がしてよいか尋ねるのは Posso。",
      },
      {
        q: "___ ripetere, per favore?（Lei に頼む）",
        o: ["Può", "Posso", "Puoi"],
        a: 0,
        why: "Lei の形は può。",
      },
      {
        q: "___ problema（その問題）",
        o: ["il", "la", "l'"],
        a: 0,
        why: "problema は男性名詞。",
      },
      {
        q: "Il treno è più veloce ___ autobus.",
        o: ["dell'", "di", "del"],
        a: 0,
        why: "di＋l'＝dell'。",
      },
      {
        q: "「到着」はどれ？",
        o: ["arrivo", "partenza", "binario"],
        a: 0,
        why: "arrivo は到着、partenza は出発。",
        say: "arrivo",
      },
      {
        q: "la mano の性は？",
        o: ["女性", "男性"],
        a: 0,
        why: "-o で終わりますが女性名詞です。",
        say: "la mano",
      },
      {
        t: "order",
        ja: "もう一度お願いできますか？",
        it: ["Può ripetere, per favore?"],
      },
      { t: "order", ja: "問題ありません。", it: ["Non c'è problema."] },
    ],
    read: {
      kind: "時刻表を読む",
      title: "Partenze da Roma Termini",
      lines: [
        [
          "Treno per Firenze: partenza 9:15, binario 4, in orario.",
          "フィレンツェ行き：9時15分発、4番線、定刻。",
        ],
        [
          "Treno per Milano: partenza 9:30, binario 7, ritardo 20 minuti.",
          "ミラノ行き：9時30分発、7番線、20分遅れ。",
        ],
        [
          "Treno per Napoli: partenza 9:40, binario 2, in orario.",
          "ナポリ行き：9時40分発、2番線、定刻。",
        ],
        [
          "Treno per Venezia: partenza 10:05, binario 7, soppresso.",
          "ヴェネツィア行き：10時5分発、7番線、運休。",
        ],
        [
          "I passeggeri per Venezia possono prendere il treno delle 11:05.",
          "ヴェネツィア方面の方は11時5分発の電車をご利用いただけます。",
        ],
      ],
      gloss: [
        ["in orario", "定刻どおり"],
        ["ritardo", "遅れ"],
        ["soppresso", "運休"],
        ["passeggeri", "乗客"],
      ],
      q: [
        {
          skill: "info",
          s: "ミラノ行きは実際に何時ごろ出る？",
          o: ["9時50分", "9時30分", "10時5分"],
          a: 0,
          why: "9:30 に20分の遅れです。",
        },
        {
          skill: "info",
          s: "定刻どおりでないのは？",
          o: [
            "ミラノ行きとヴェネツィア行き",
            "フィレンツェ行きとナポリ行き",
            "すべて定刻",
          ],
          a: 0,
          why: "ミラノは遅れ、ヴェネツィアは運休です。",
        },
        {
          skill: "info",
          s: "ヴェネツィアへ行くには、どの電車に乗る？",
          o: ["11時5分発", "10時5分発", "9時15分発"],
          a: 0,
          why: "10:05 は運休で、代わりに 11:05 が案内されています。",
        },
        {
          skill: "vocab",
          s: "soppresso の意味は文脈から何と考えられる？",
          o: ["運休", "満席", "早発"],
          a: 0,
          why: "次の文が別の電車を案内していることが手がかりです。知らない語は前後から推測します。",
        },
      ],
    },
    write: {
      task: "ホテルに送る短いメールを書きましょう。遅れて到着することを伝えます。",
      hints: [
        "Buongiorno,",
        "Ho prenotato una camera a nome ...",
        "Arrivo tardi, alle ...",
        "Cordiali saluti,",
      ],
      model:
        "Buongiorno, ho prenotato una camera a nome Sato. Purtroppo arrivo tardi, alle undici di sera. Va bene? Cordiali saluti, Takuya Sato",
      modelJa:
        "こんにちは。佐藤の名前で部屋を予約しました。あいにく到着が遅くなり、夜の11時になります。よろしいでしょうか。よろしくお願いします。佐藤タクヤ",
      check: [
        "書き出しと結びを丁寧にした",
        "到着時刻を書いた",
        "近過去の ho prenotato を正しく使った",
      ],
    },
  },
);
