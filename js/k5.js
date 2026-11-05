/* 段階5（小5相当・CEFR目安A2〜B1）：読んで慣れる。未来、条件法、比較、関係詞 che、間接目的語代名詞。 */
window.KOKUGO.push(
  {
    id: "s5-futuro",
    g: 5,
    title: "未来と計画",
    goal: "未来形で予定と推測を話せる",
    talk: [
      ["Marco", "Che cosa farai quest'estate?", "今年の夏は何をするの？"],
      ["Saki", "Andrò in Italia per due settimane.", "2週間イタリアに行くよ。"],
      ["Marco", "Davvero? Dove starai?", "本当？どこに泊まるの？"],
      [
        "Saki",
        "Prima a Roma, poi forse a Firenze.",
        "まずローマで、それからたぶんフィレンツェかな。",
      ],
      [
        "Marco",
        "Se vieni a Bologna, ti porterò a mangiare bene.",
        "ボローニャに来るなら、おいしいお店に連れていくよ。",
      ],
      [
        "Saki",
        "Grazie! Ti scriverò quando arriverò.",
        "ありがとう！着いたら連絡するね。",
      ],
    ],
    words: [
      ["futuro", "未来・将来"],
      ["progetto", "計画"],
      ["vacanza", "休暇"],
      ["forse", "たぶん"],
      ["sicuramente", "きっと"],
      ["presto", "すぐに・早く"],
      ["fra poco", "もうすぐ"],
      ["fra due giorni", "2日後に"],
      ["l'anno prossimo", "来年"],
      ["la settimana prossima", "来週"],
      ["sperare", "望む"],
      ["cambiare", "変える・変わる"],
      ["previsioni del tempo", "天気予報"],
      ["temperatura", "気温"],
    ],
    learn: [
      {
        h: "未来形の作り方",
        body: "語尾は <b>-ò, -ai, -à, -emo, -ete, -anno</b>。-are と -ere は語幹が <b>-er-</b>、-ire は <b>-ir-</b> です。<br>parlare → parl<b>erò</b>、leggere → legg<b>erò</b>、dormire → dorm<b>irò</b>。<br>綴りの調整：cercare → cer<b>cherò</b>、pagare → pa<b>gherò</b>、mangiare → man<b>gerò</b>。",
        ex: [
          ["Parlerò con lui.", "彼と話します。"],
          ["Partiremo domani.", "明日出発します。"],
        ],
      },
      {
        h: "不規則な未来形",
        body: "語幹が縮まるものがあります：essere → <b>sarò</b>、avere → <b>avrò</b>、andare → <b>andrò</b>、fare → <b>farò</b>、potere → <b>potrò</b>、dovere → <b>dovrò</b>、vedere → <b>vedrò</b>、venire → <b>verrò</b>、volere → <b>vorrò</b>、bere → <b>berrò</b>。「動詞」タブの未来で確かめられます。",
        ex: [
          ["Sarò a casa alle otto.", "8時には家にいます。"],
          ["Verrò con te.", "君と一緒に行きます。"],
        ],
      },
      {
        h: "会話では現在形も未来を表す",
        body: "近い予定には現在形をよく使います。Domani vado a Roma.（明日ローマへ行く）。未来形は、計画や、まだ確定していないことに使います。",
        ex: [
          ["Domani lavoro.", "明日は仕事です。"],
          ["Un giorno vivrò in Italia.", "いつかイタリアに住みます。"],
        ],
      },
      {
        h: "推測の未来と、quando の後",
        body: "未来形は「たぶん〜だろう」という今の推測にも使います。Saranno le otto.（8時ごろだろう）。<br><b>quando</b> や <b>se</b> の後は、未来の話なら未来形か現在形を使います。",
        ex: [
          ["Che ore sono? Saranno le otto.", "何時？8時ごろだろう。"],
          ["Quando arriverò, ti scriverò.", "着いたら連絡します。"],
        ],
      },
    ],
    gram: [
      {
        q: "Domani ___ a Roma. (andare, io)",
        o: ["andrò", "anderò", "andarò"],
        a: 0,
        why: "andare の未来語幹は andr-。",
      },
      {
        q: "L'anno prossimo ___ l'italiano. (studiare, io)",
        o: ["studierò", "studiarò", "studiavo"],
        a: 0,
        why: "-are の語幹は -er-。",
      },
      {
        q: "Noi ___ alle otto. (partire)",
        o: ["partiremo", "partivamo", "partirete"],
        a: 0,
        why: "-ire は -ir- ＋ -emo。",
      },
      {
        q: "Ti ___ io. (pagare)",
        o: ["pagherò", "pagarò", "pagerò"],
        a: 0,
        why: "-gare は h を入れて硬い音を保ちます。",
      },
      {
        q: "Domani ___ bel tempo. (fare)",
        o: ["farà", "fara", "fa bene"],
        a: 0,
        why: "fare の未来語幹は far-。",
      },
      {
        q: "「8時ごろだろう」はどれ？",
        o: ["Saranno le otto.", "Sono le otto.", "Saremo le otto."],
        a: 0,
        why: "推測の未来。le otto が複数なので saranno。",
        say: "Saranno le otto.",
      },
      {
        t: "order",
        ja: "今年の夏は何をするの？",
        it: ["Che cosa farai quest'estate?", "Quest'estate che cosa farai?"],
      },
      {
        t: "order",
        ja: "着いたら連絡します。",
        it: ["Quando arriverò, ti scriverò."],
      },
    ],
    read: {
      kind: "天気予報を読む",
      title: "Le previsioni del tempo per domani",
      lines: [
        [
          "Al Nord il cielo sarà nuvoloso e pioverà soprattutto nel pomeriggio.",
          "北部は曇りで、特に午後に雨が降るでしょう。",
        ],
        [
          "La temperatura massima sarà di 12 gradi a Milano.",
          "ミラノの最高気温は12度でしょう。",
        ],
        [
          "Al Centro ci sarà il sole la mattina, ma la sera arriveranno le nuvole.",
          "中部は朝は晴れますが、夕方には雲が広がるでしょう。",
        ],
        [
          "A Roma farà più caldo: fino a 18 gradi.",
          "ローマはより暖かく、18度まで上がるでしょう。",
        ],
        [
          "Al Sud sarà una bella giornata, con sole e poco vento.",
          "南部は晴れて風も弱く、良い一日になるでしょう。",
        ],
        ["A Napoli avremo 21 gradi.", "ナポリは21度でしょう。"],
        [
          "Attenzione: in montagna potrà nevicare.",
          "ご注意：山では雪が降るかもしれません。",
        ],
      ],
      gloss: [
        ["Nord / Centro / Sud", "北部／中部／南部"],
        ["nuvoloso", "曇った"],
        ["soprattutto", "特に"],
        ["massima", "最高の"],
        ["gradi", "度"],
        ["nuvole", "雲"],
      ],
      q: [
        {
          skill: "info",
          s: "傘が最も必要なのはどこ？",
          o: ["ミラノ", "ナポリ", "ローマの朝"],
          a: 0,
          why: "北部は午後に雨です。",
        },
        {
          skill: "info",
          s: "いちばん暖かい町は？",
          o: ["ナポリ", "ローマ", "ミラノ"],
          a: 0,
          why: "12度、18度、21度の順です。",
        },
        {
          skill: "infer",
          s: "屋外の夕食を計画するのに最も向くのは？",
          o: ["南部", "北部", "山"],
          a: 0,
          why: "南部は一日晴れて風も弱い予報です。中部は夕方に雲が出ます。",
        },
        {
          skill: "fact",
          s: "この文章で未来形が多いのはなぜ？",
          o: ["まだ起きていない予想だから", "昔の話だから", "命令だから"],
          a: 0,
          why: "予報は確定した事実ではなく見込みです。",
        },
      ],
    },
    write: {
      task: "来年の計画を4つの文で書きましょう。",
      hints: [
        "L'anno prossimo ...",
        "Andrò a ...",
        "Forse ...",
        "Quando ..., ...",
      ],
      model:
        "L'anno prossimo andrò in Italia. Prima starò a Roma, poi forse a Firenze. Parlerò italiano con tutti. Quando tornerò, ti racconterò tutto.",
      modelJa:
        "来年イタリアに行きます。まずローマに滞在して、それからたぶんフィレンツェへ。みんなとイタリア語で話します。帰ったら全部話します。",
      check: [
        "未来形の語幹を確かめた",
        "不規則形を「動詞」タブで確かめた",
        "forse や quando で文をつないだ",
      ],
    },
  },
  {
    id: "s5-condizionale",
    g: 5,
    title: "丁寧な依頼と助言",
    goal: "条件法で、頼む・勧める・希望を言える",
    talk: [
      [
        "Paziente",
        "Buongiorno, vorrei prendere un appuntamento.",
        "こんにちは。予約を取りたいのですが。",
      ],
      [
        "Segretaria",
        "Certo. Potrebbe venire domani alle dieci?",
        "かしこまりました。明日の10時に来ていただけますか？",
      ],
      [
        "Paziente",
        "Purtroppo lavoro. Sarebbe possibile nel pomeriggio?",
        "あいにく仕事です。午後は可能でしょうか？",
      ],
      [
        "Segretaria",
        "Sì, alle quattro. Le andrebbe bene?",
        "はい、4時です。よろしいでしょうか？",
      ],
      [
        "Paziente",
        "Perfetto. Dovrei portare qualcosa?",
        "完璧です。何か持参すべきでしょうか？",
      ],
      [
        "Segretaria",
        "Solo un documento. A domani!",
        "身分証だけです。では明日！",
      ],
    ],
    words: [
      ["appuntamento", "予約・約束"],
      ["documento", "身分証・書類"],
      ["consiglio", "助言"],
      ["possibile", "可能な"],
      ["impossibile", "不可能な"],
      ["purtroppo", "あいにく"],
      ["volentieri", "喜んで"],
      ["medico", "医者"],
      ["febbre", "熱", "女性名詞"],
      ["riposare", "休む"],
      ["mi piacerebbe", "〜したいなあ"],
      ["dovresti", "〜すべきだよ（tu）"],
      ["potrebbe", "〜していただけますか（Lei）"],
    ],
    learn: [
      {
        h: "条件法の作り方",
        body: "未来形と同じ語幹に <b>-ei, -esti, -ebbe, -emmo, -este, -ebbero</b> をつけます。<br>parlare → parl<b>erei</b>、fare → f<b>arei</b>、essere → <b>sarei</b>、avere → <b>avrei</b>、volere → <b>vorrei</b>、potere → <b>potrei</b>、dovere → <b>dovrei</b>。<br>段階1で丸ごと覚えた vorrei の正体がこれです。",
        ex: [
          ["Vorrei un caffè.", "コーヒーをいただきたいのですが。"],
          ["Parlerei volentieri.", "喜んで話したいのですが。"],
        ],
      },
      {
        h: "丁寧さの段階",
        body: "日本語の敬語に当たる部分です。同じ依頼でも、下へ行くほど丁寧です。<br><b>Apri la finestra!</b>（開けて）<br><b>Puoi aprire la finestra?</b>（開けてくれる？）<br><b>Potresti aprire la finestra?</b>（開けてもらえるかな）<br><b>Potrebbe aprire la finestra?</b>（開けていただけますか・Lei）",
        ex: [
          ["Potrebbe aiutarmi?", "手伝っていただけますか？"],
          ["Mi potresti aiutare?", "手伝ってもらえるかな？"],
        ],
      },
      {
        h: "助言と希望",
        body: "<b>dovresti</b>（〜すべきだよ）は助言、<b>mi piacerebbe</b>（〜したいなあ）は希望、<b>sarebbe meglio</b>（〜の方がいい）はやわらかい提案です。",
        ex: [
          ["Dovresti riposare.", "休むべきだよ。"],
          ["Mi piacerebbe vivere a Roma.", "ローマに住みたいなあ。"],
          ["Sarebbe meglio partire presto.", "早く出た方がいいでしょう。"],
        ],
      },
      {
        h: "ニュースの条件法",
        body: "新聞では、確認されていない情報を条件法で書きます。<b>Il ministro partirebbe domani.</b>（大臣は明日出発するとのこと）。事実と断定していないしるしで、読解の大事な手がかりです。",
        ex: [
          ["Il treno sarebbe in ritardo.", "電車は遅れているとのことです。"],
        ],
      },
    ],
    gram: [
      {
        q: "___ un caffè, per favore. (volere, io・丁寧に)",
        o: ["Vorrei", "Voglio", "Volerei"],
        a: 0,
        why: "丁寧な注文は vorrei。",
      },
      {
        q: "___ aiutarmi? (potere, Lei)",
        o: ["Potrebbe", "Potresti", "Può essere"],
        a: 0,
        why: "Lei の丁寧な依頼は potrebbe。",
      },
      {
        q: "Sei stanco. ___ riposare. (dovere, tu)",
        o: ["Dovresti", "Dovrei", "Devo"],
        a: 0,
        why: "助言は dovresti。",
      },
      {
        q: "Mi ___ vivere in Italia.（住みたいなあ）",
        o: ["piacerebbe", "piacerei", "piaceva"],
        a: 0,
        why: "「住むこと」が主語で3人称単数。",
      },
      {
        q: "最も丁寧な依頼はどれ？",
        o: [
          "Potrebbe aprire la finestra?",
          "Puoi aprire la finestra?",
          "Apri la finestra!",
        ],
        a: 0,
        why: "条件法かつ Lei の形です。",
        say: "Potrebbe aprire la finestra?",
      },
      {
        q: "Il ministro partirebbe domani. の読み方は？",
        o: [
          "未確認の情報として伝えている",
          "必ず出発すると断定している",
          "昨日の出来事を伝えている",
        ],
        a: 0,
        why: "報道の条件法は、確認されていない情報を表します。",
      },
      {
        t: "order",
        ja: "予約を取りたいのですが。",
        it: ["Vorrei prendere un appuntamento."],
      },
      { t: "order", ja: "休むべきだよ。", it: ["Dovresti riposare."] },
    ],
    read: {
      kind: "相談と回答",
      title: "Posta dei lettori",
      lines: [
        [
          "Cara redazione, ho quarant'anni e vorrei imparare l'italiano.",
          "編集部のみなさま。私は40歳で、イタリア語を学びたいと思っています。",
        ],
        [
          "Ho poco tempo e mi dimentico subito le parole.",
          "時間がなく、単語をすぐ忘れてしまいます。",
        ],
        [
          "Secondo voi, è troppo tardi? Kenji",
          "遅すぎるでしょうか？ケンジより",
        ],
        [
          "Caro Kenji, non è mai troppo tardi!",
          "ケンジさん、遅すぎることはありません！",
        ],
        [
          "Gli studi dicono che dimenticare è normale a tutte le età.",
          "忘れるのはどの年齢でも普通だと、研究は述べています。",
        ],
        [
          "Dovresti studiare poco, ma ogni giorno: bastano dieci minuti.",
          "少しずつ毎日勉強するとよいでしょう。10分で十分です。",
        ],
        [
          "Secondo noi, sarebbe utile anche ascoltare canzoni italiane.",
          "私たちの考えでは、イタリアの歌を聴くのも役に立つでしょう。",
        ],
        ["Buono studio!", "勉強がんばってください！"],
      ],
      gloss: [
        ["redazione", "編集部"],
        ["dimenticarsi", "忘れる"],
        ["secondo voi / noi", "あなたがた／私たちの考えでは"],
        ["studi", "研究"],
        ["età", "年齢"],
        ["bastano", "十分である"],
        ["utile", "役に立つ"],
      ],
      q: [
        {
          skill: "main",
          s: "回答の要点は？",
          o: [
            "遅すぎない。毎日少しずつ続ければよい",
            "若いうちに始めるべきだ",
            "単語より文法を学ぶべきだ",
          ],
          a: 0,
          why: "non è mai troppo tardi と ogni giorno が中心です。",
        },
        {
          skill: "fact",
          s: "書き手の「意見」として書かれているのは？",
          o: [
            "歌を聴くのも役に立つ",
            "ケンジは40歳だ",
            "忘れるのは普通だと研究が述べている",
          ],
          a: 0,
          why: "secondo noi が意見の目印です。研究の話は根拠として示されています。",
        },
        {
          skill: "vocab",
          s: "Dovresti studiare ... はどんな働き？",
          o: ["助言", "命令", "過去の報告"],
          a: 0,
          why: "dovresti は「〜するとよい」という助言です。",
        },
        {
          skill: "infer",
          s: "ケンジの悩みでないものは？",
          o: ["教材が高い", "時間が少ない", "単語を忘れる"],
          a: 0,
          why: "費用の話は本文にありません。",
        },
      ],
    },
    write: {
      task: "Kenji のように悩んでいる友達へ、助言のメッセージを書きましょう。",
      hints: [
        "Caro/a ...,",
        "Secondo me ...",
        "Dovresti ...",
        "Sarebbe meglio ...",
      ],
      model:
        "Caro Kenji, secondo me non è troppo tardi. Dovresti studiare dieci minuti ogni giorno. Sarebbe meglio anche parlare con un amico italiano.",
      modelJa:
        "ケンジさん、私の考えでは遅すぎません。毎日10分勉強するとよいでしょう。イタリア人の友達と話すのもよいと思います。",
      check: [
        "dovresti や sarebbe meglio で助言した",
        "secondo me で意見だと示した",
        "書き出しに Caro / Cara を使った",
      ],
    },
  },
  {
    id: "s5-confronti",
    g: 5,
    title: "比べて、説明する",
    goal: "比較を使い、数字のある説明文を読める",
    talk: [
      [
        "Vera",
        "Come andiamo a Milano, in treno o in aereo?",
        "ミラノへはどう行く？電車？飛行機？",
      ],
      [
        "Taro",
        "Il treno è più comodo dell'aereo.",
        "電車の方が飛行機より快適だよ。",
      ],
      ["Vera", "Ma l'aereo è più veloce, no?", "でも飛行機の方が速いでしょ？"],
      [
        "Taro",
        "Non proprio. In aeroporto si perde molto tempo.",
        "そうでもないよ。空港で時間がかかるから。",
      ],
      ["Vera", "Ed è meno caro?", "それに安いの？"],
      [
        "Taro",
        "Dipende. Il treno è migliore, secondo me.",
        "場合によるね。僕は電車の方がいいと思うな。",
      ],
    ],
    words: [
      ["aereo", "飛行機"],
      ["aeroporto", "空港"],
      ["comodo", "快適な・便利な"],
      ["veloce", "速い"],
      ["lento", "遅い"],
      ["migliore", "より良い"],
      ["peggiore", "より悪い"],
      ["meglio", "より上手に・より良く"],
      ["peggio", "より下手に・より悪く"],
      ["inquinamento", "汚染"],
      ["ambiente", "環境", "男性名詞"],
      ["dipende", "場合による"],
      ["circa", "およそ"],
      ["percento", "パーセント"],
    ],
    learn: [
      {
        h: "比較の基本",
        body: "<b>più ... di</b>（〜より…だ）、<b>meno ... di</b>（〜ほど…でない）、<b>tanto ... quanto</b>（〜と同じくらい…）。di は定冠詞と結びつきます。",
        ex: [
          [
            "Roma è più grande di Firenze.",
            "ローマはフィレンツェより大きいです。",
          ],
          ["Il treno è meno caro dell'aereo.", "電車は飛行機より安いです。"],
          [
            "Anna è tanto alta quanto Marco.",
            "アンナはマルコと同じくらい背が高いです。",
          ],
        ],
      },
      {
        h: "「最も」と -issimo",
        body: "「最も〜」は <b>il più ...</b>、「〜の中で」は <b>di</b> です。「とても〜」は語尾を <b>-issimo</b> にします。形容詞なので性数を合わせます：bellissima, buonissimi。",
        ex: [
          [
            "Il Po è il fiume più lungo d'Italia.",
            "ポー川はイタリアで最も長い川です。",
          ],
          ["Questa pizza è buonissima!", "このピザはとてもおいしい！"],
        ],
      },
      {
        h: "buono と bene の比較",
        body: "形容詞 buono の比較は <b>migliore</b>、cattivo は <b>peggiore</b>。副詞 bene の比較は <b>meglio</b>、male は <b>peggio</b>。名詞を説明するなら migliore、動作を説明するなら meglio が基本です（È meglio ... の言い方もよく使います）。",
        ex: [
          ["Questo vino è migliore.", "このワインの方が良いです。"],
          ["Oggi sto meglio.", "今日は体調が良くなりました。"],
        ],
      },
      {
        h: "数字とグラフの読み方",
        body: "percentuale（割合）、la metà（半分）、un terzo（3分の1）、circa（およそ）、aumentare（増える）、diminuire（減る）。説明文では、数字が<b>何の数か</b>を確かめます。国語の「資料を読む」学習に当たります。",
        ex: [
          [
            "Il 40 per cento degli italiani usa il treno.",
            "イタリア人の40パーセントが電車を使います（例文）。",
          ],
          ["La metà degli studenti è d'accordo.", "学生の半分が賛成です。"],
        ],
      },
    ],
    gram: [
      {
        q: "Roma è ___ grande di Firenze.",
        o: ["più", "molto", "tanto"],
        a: 0,
        why: "比較は più ... di。",
      },
      {
        q: "Il treno è più comodo ___ aereo.",
        o: ["dell'", "di", "che"],
        a: 0,
        why: "di＋l'＝dell'。",
      },
      {
        q: "Il Po è ___ fiume più lungo d'Italia.",
        o: ["il", "un", "lo"],
        a: 0,
        why: "最上級は定冠詞をつけます。",
      },
      {
        q: "Oggi sto ___ di ieri.",
        o: ["meglio", "migliore", "più buono"],
        a: 0,
        why: "stare を説明する副詞なので meglio。",
      },
      {
        q: "Questo vino è ___ di quello.",
        o: ["migliore", "più migliore", "più bene"],
        a: 0,
        why: "名詞 vino を説明する形容詞なので migliore。",
      },
      {
        q: "「とてもおいしいピザ」はどれ？",
        o: [
          "una pizza buonissima",
          "una pizza buonissimo",
          "una buona pizzissima",
        ],
        a: 0,
        why: "pizza に合わせて -issima。",
        say: "una pizza buonissima",
      },
      {
        t: "order",
        ja: "電車は飛行機より安いです。",
        it: ["Il treno è meno caro dell'aereo."],
      },
      {
        t: "order",
        ja: "今日は体調が良くなりました。",
        it: ["Oggi sto meglio."],
      },
    ],
    read: {
      kind: "説明文",
      title: "Treno o aereo?",
      lines: [
        [
          "Da Milano a Roma, in treno, ci sono circa 570 chilometri.",
          "ミラノからローマまで、電車でおよそ570キロです。",
        ],
        [
          "Con il treno veloce il viaggio dura circa tre ore.",
          "高速列車の所要時間はおよそ3時間です。",
        ],
        [
          "Con l'aereo il volo dura solo un'ora, ma bisogna arrivare in aeroporto molto prima.",
          "飛行機は飛行時間こそ1時間ですが、ずっと早く空港に着く必要があります。",
        ],
        [
          "Il treno arriva in centro; gli aeroporti, invece, sono lontani dalla città.",
          "電車は中心部に着きます。一方、空港は町から離れています。",
        ],
        [
          "Inoltre, il treno produce meno CO2 dell'aereo.",
          "さらに、電車は飛行機より二酸化炭素の排出が少ないです。",
        ],
        [
          "Per questo, secondo noi, su questa tratta il treno è la scelta migliore.",
          "そのため、私たちの考えでは、この区間では電車が最良の選択です。",
        ],
        [
          "Certo, per chi trova un'offerta, l'aereo può costare meno.",
          "もちろん、お得な料金を見つけた人には、飛行機の方が安いこともあります。",
        ],
      ],
      gloss: [
        ["dura", "（時間が）かかる"],
        ["volo", "フライト"],
        ["bisogna", "〜する必要がある"],
        ["inoltre", "さらに"],
        ["tratta", "区間"],
        ["scelta", "選択"],
        ["offerta", "特別価格"],
      ],
      q: [
        {
          skill: "main",
          s: "筆者の主張は？",
          o: [
            "この区間は電車の方がよい",
            "飛行機が常に安い",
            "ミラノとローマは遠すぎる",
          ],
          a: 0,
          why: "secondo noi の文が主張です。",
        },
        {
          skill: "fact",
          s: "「事実」にあたるものは？",
          o: [
            "およそ570キロある",
            "電車が最良の選択だ",
            "電車の方がよいと思う",
          ],
          a: 0,
          why: "距離は確かめられる事実です。他は判断です。",
        },
        {
          skill: "infer",
          s: "最後の文（Certo, ...）を入れた理由は？",
          o: [
            "反対の場合も認め、公平に見せるため",
            "主張を取り消すため",
            "話題を変えるため",
          ],
          a: 0,
          why: "反論を先に認めると、主張の説得力が増します。",
        },
        {
          skill: "ref",
          s: "Per questo（そのため）の「その」は何を指す？",
          o: [
            "電車の利点が前に並んでいること",
            "飛行機が速いこと",
            "空港が多いこと",
          ],
          a: 0,
          why: "中心部に着く、排出が少ない、などの理由を受けています。",
        },
      ],
    },
    write: {
      task: "2つのもの（町、乗り物、食べ物など）を比べ、どちらがよいか理由をつけて書きましょう。",
      hints: [
        "... è più ... di ...",
        "Però ...",
        "Inoltre ...",
        "Secondo me ... è migliore.",
      ],
      model:
        "Osaka è meno grande di Tokyo, però il cibo è buonissimo. Inoltre, la gente è molto simpatica. Secondo me Osaka è migliore.",
      modelJa:
        "大阪は東京ほど大きくありませんが、食べ物がとてもおいしいです。さらに、人々もとても感じがいいです。私の考えでは大阪の方がよいです。",
      check: [
        "più / meno と di を正しく使った",
        "migliore と meglio を区別した",
        "意見に secondo me を添えた",
      ],
    },
  },
  {
    id: "s5-relativi",
    g: 5,
    title: "人に伝える、文をつなぐ",
    goal: "gli, le と che を使い、長い文を作れる",
    talk: [
      ["Lea", "Hai parlato con il direttore?", "部長と話した？"],
      ["Sota", "Sì, gli ho scritto ieri.", "うん、昨日メールしたよ。"],
      ["Lea", "E alla signora Conti?", "コンティさんには？"],
      [
        "Sota",
        "Le telefono oggi. È la collega che conosce bene il progetto.",
        "今日電話するよ。計画をよく知っている同僚なんだ。",
      ],
      [
        "Lea",
        "Bene. Le puoi dire che la riunione è alle tre?",
        "いいね。会議は3時だと彼女に伝えてくれる？",
      ],
      ["Sota", "Certo, glielo dico subito.", "もちろん、すぐに伝えるよ。"],
    ],
    words: [
      ["direttore", "部長・責任者"],
      ["riunione", "会議", "女性名詞"],
      ["collega", "同僚", "男女同形"],
      ["ufficio", "オフィス"],
      ["azienda", "会社"],
      ["dire", "言う"],
      ["spiegare", "説明する"],
      ["raccontare", "語る"],
      ["regalare", "贈る"],
      ["quindi", "だから"],
      ["infatti", "実際"],
      ["siccome", "〜なので"],
      ["bugia", "うそ"],
      ["verità", "真実"],
    ],
    learn: [
      {
        h: "間接目的語の代名詞",
        body: "「〜に」を表します。mi（私に）、ti（君に）、<b>gli</b>（彼に）、<b>le</b>（彼女に）、<b>Le</b>（あなたに・丁寧）、ci（私たちに）、vi（君たちに）、<b>gli</b>（彼らに）。動詞の前に置きます。「〜を」の lo, la とは別物です。",
        ex: [
          ["Gli scrivo un'email.", "彼にメールを書きます。"],
          ["Le telefono stasera.", "今晩彼女に電話します。"],
          ["Ti spiego tutto.", "君に全部説明します。"],
        ],
      },
      {
        h: "「〜に〜を」を一緒に使う",
        body: "2つ続くと形が変わります。mi → <b>me</b>、ti → <b>te</b>、gli / le → <b>glie-</b>。<br>me lo（私にそれを）、te lo（君にそれを）、glielo（彼・彼女にそれを）。まずは読んでわかれば十分です。",
        ex: [
          ["Me lo dici?", "私にそれを言ってくれる？"],
          ["Glielo dico subito.", "彼にすぐそれを言います。"],
        ],
      },
      {
        h: "関係詞 che",
        body: "<b>che</b> は「〜である人・もの」と、名詞を後ろから説明します。日本語では説明が前に来ますが、イタリア語では<b>後ろ</b>です。主語にも目的語にもなり、省略できません。",
        ex: [
          [
            "La ragazza che parla è mia sorella.",
            "話している女の子は私の妹です。",
          ],
          [
            "Il libro che leggo è interessante.",
            "私が読んでいる本は面白いです。",
          ],
        ],
      },
      {
        h: "文をつなぐ言葉",
        body: "<b>perché</b>（なぜなら）、<b>siccome</b>（〜なので・文頭）、<b>quindi</b>（だから）、<b>però</b>（しかし）、<b>infatti</b>（実際）、<b>inoltre</b>（さらに）。説明文を読むときに、理由や結論の位置がわかります。",
        ex: [
          ["Siccome piove, resto a casa.", "雨なので家にいます。"],
          ["Piove, quindi resto a casa.", "雨です。だから家にいます。"],
        ],
      },
    ],
    gram: [
      {
        q: "Conosci Marco? Sì, ___ scrivo domani.（彼に）",
        o: ["gli", "le", "lo"],
        a: 0,
        why: "「彼に」は gli。",
      },
      {
        q: "Vedi Anna? Sì, ___ telefono stasera.（彼女に）",
        o: ["le", "gli", "la"],
        a: 0,
        why: "telefonare a のあとは間接なので le。",
      },
      {
        q: "Il libro ___ leggo è bello.",
        o: ["che", "di", "chi"],
        a: 0,
        why: "名詞を説明する関係詞は che。",
      },
      {
        q: "La ragazza ___ parla è mia sorella.",
        o: ["che", "chi", "la"],
        a: 0,
        why: "che は主語にもなります。",
      },
      {
        q: "Piove, ___ resto a casa.（だから）",
        o: ["quindi", "perché", "però"],
        a: 0,
        why: "結論を導くのは quindi。",
      },
      {
        q: "___ piove, resto a casa.（雨なので）",
        o: ["Siccome", "Quindi", "Però"],
        a: 0,
        why: "文頭で理由を述べるのは siccome。",
      },
      {
        t: "order",
        ja: "彼にメールを書きます。",
        it: ["Gli scrivo un'email."],
      },
      {
        t: "order",
        ja: "話している女の子は私の妹です。",
        it: ["La ragazza che parla è mia sorella."],
      },
    ],
    read: {
      kind: "物語（連載6）",
      title: "Pinocchio 6: Il naso",
      lines: [
        [
          "Pinocchio, che era stanco e triste, ha trovato una casa nel bosco.",
          "疲れて悲しいピノッキオは、森の中に1軒の家を見つけました。",
        ],
        [
          "Lì abitava una Fata che aveva i capelli turchini.",
          "そこには青い髪の妖精が住んでいました。",
        ],
        [
          "La Fata gli ha dato una medicina e gli ha chiesto: «Dove sono le monete?»",
          "妖精は薬をくれて、尋ねました。「金貨はどこにあるの？」",
        ],
        [
          "«Le ho perse» ha risposto Pinocchio, ma non era vero.",
          "「なくしました」とピノッキオは答えましたが、それは本当ではありませんでした。",
        ],
        ["Subito il naso è diventato più lungo.", "すぐに鼻が長くなりました。"],
        [
          "A ogni bugia il naso cresceva ancora, e alla fine non poteva più uscire dalla porta.",
          "うそをつくたびに鼻はまた伸び、ついにドアから出られなくなりました。",
        ],
        ["La Fata rideva: «Ci sono bugie che hanno le gambe corte e bugie che hanno il naso lungo.»", "妖精は笑いました。「足の短いうそと、鼻の長いうそがあるのよ」"],
        ["Più tardi Pinocchio ha rivisto la Volpe e il Gatto e ha messo le monete sotto terra: il giorno dopo non c'erano più.", "その後、ピノッキオはキツネとネコに再会し、金貨を土に埋めましたが、翌日にはなくなっていました。"],
      ],
      gloss: [
        ["bosco", "森"],
        ["fata", "妖精"],
        ["capelli turchini", "青い髪"],
        ["medicina", "薬"],
        ["a ogni", "〜のたびに"],
        ["rideva", "笑っていた"],
        ["gambe corte", "短い足"],
      ],
      q: [
        {
          skill: "ref",
          s: "gli ha chiesto の gli は誰？",
          o: ["ピノッキオ", "妖精", "ジェッペット"],
          a: 0,
          why: "妖精が尋ねた相手です。",
        },
        {
          skill: "match",
          s: "鼻が伸びたのはどんなとき？",
          o: ["うそをついたとき", "薬を飲んだとき", "泣いたとき"],
          a: 0,
          why: "A ogni bugia il naso cresceva.",
        },
        {
          skill: "vocab",
          s: "che era stanco e triste の che が説明しているのは？",
          o: ["ピノッキオ", "家", "森"],
          a: 0,
          why: "che の直前の名詞を後ろから説明しています。",
        },
        {
          skill: "infer",
          s: "「足の短いうそ」が示すのは？",
          o: [
            "うそはすぐにばれる",
            "うそは遠くまで広がる",
            "足の短い人はうそをつく",
          ],
          a: 0,
          why: "イタリアのことわざ le bugie hanno le gambe corte（うそは足が短い＝すぐ追いつかれる）に基づきます。",
        },
      ],
    },
    write: {
      task: "あなたがついた小さなうそ、または聞いた話を、文をつないで書きましょう。",
      hints: [
        "Siccome ...",
        "... che ...（関係詞）",
        "Gli / Le ho detto che ...",
        "quindi ...",
      ],
      model:
        "Siccome ero stanco, ho scritto a un collega che lavora con me. Gli ho detto che avevo la febbre, ma non era vero. Quindi mi sento un po' come Pinocchio.",
      modelJa:
        "疲れていたので、一緒に働いている同僚にメールしました。熱があると言いましたが、本当ではありませんでした。だから少しピノッキオの気分です。",
      check: [
        "che で名詞を説明した",
        "gli / le を相手に合わせた",
        "つなぐ言葉を2つ以上使った",
      ],
    },
  },
);
