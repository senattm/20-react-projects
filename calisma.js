const data = [
  {
    modelVersion: "3",
    totalConversations: 20550,
    totalRatings: 9,
    averageRating: 4.31,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "3",
      model_name: "Mürşit 3",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: true,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "3.1",
    totalConversations: 188,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki belgelerde, örneğin dilekçe veya sözleşme taslaklarında belirli bir formatı takip eden temel metin bloklarını oluşturmak için kullanılabilir. (Örneğin, adres veya tarih gibi standart alanları doldurmak.)",
      capabilities: ["Hukuki Metin Analizi", "Hukuki Soruları Yanıtlama"],
      questions: [
        "Bir sözleşmenin ihlal edilmesi durumunda, alacaklının başvurabileceği hukuki yollar nelerdir ve bu süreçler nasıl işler?",
        "Bir şirket birleşmesi sürecinde, due diligence (hukuki inceleme) aşaması neden önemlidir ve bu aşamada hangi hususlara dikkat edilmelidir?",
        "Kişisel verilerin korunması hukuku kapsamında, bir şirketin yükümlülükleri nelerdir ve veri ihlali durumunda hangi adımlar atılmalıdır?",
        "Bir eserin fikri mülkiyet hakları nasıl korunur ve bu hakların ihlali durumunda hangi hukuki yollara başvurulabilir?",
      ],
    },
    modelHealth: {
      model_version: "3.1",
      model_name: "Mürşit 3.1",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "3.2",
    totalConversations: 55,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "3.2",
      model_name: "Mürşit 3.2 O (L)",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "3.3",
    totalConversations: 27,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "3.3",
      model_name: "Mürşit 3.3 O (S)",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "4.5",
    totalConversations: 26647,
    totalRatings: 314,
    averageRating: 4.41,
    modelMetadata: {
      description:
        "Bu model, ticaret hukuku ve şirket yönetimi konusunda daha derinlemesine bilgi sağlar. Özellikle işletme yönetimiyle ilgili sorulara yönelik yetenekleri bulunur.",
      capabilities: ["Mevzuat Bilgisi", "Hukuki Metin Analizi"],
      questions: [
        "Şirket birleşmesi nasıl yapılır?",
        "Şirket kar dağıtım politikası nasıl belirlenir?",
        "Çalışan sözleşmesi nasıl hazırlanır?",
        "Şirket genel kurulu nasıl yapılır?",
      ],
    },
    modelHealth: {
      model_version: "4.5",
      model_name: "Mürşit 4.5",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        searchProvider: "provider1",
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "4.6",
    totalConversations: 2333,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "4.6",
      model_name: "Mürşit 4.6",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "4.7",
    totalConversations: 4240,
    totalRatings: 3,
    averageRating: 4.92,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "4.7",
      model_name: "Mürşit 4.7",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 32768,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "4.7.1",
    totalConversations: 1061,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "4.7.1",
      model_name: "Mürşit 4.7.1",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Deep Search",
          value: "provider4",
        },
      ],
      defaultParams: {
        makeRag: false,
        searchProvider: "provider4",
        makeOrchestration: false,
      },
      forcedParams: {
        searchProvider: "provider4",
      },
    },
  },
  {
    modelVersion: "6.4.2",
    totalConversations: 255,
    totalRatings: 12,
    averageRating: 4.44,
    modelMetadata: {
      description:
        "Bu model, çeşitli hukuki metinleri genel olarak işleyebilir. Metin analizi, özetleme, anahtar kelime çıkarma gibi temel görevleri yerine getirebilirler.",
      capabilities: ["Hukuki Problem Çözme"],
      questions: [
        "Tüketici hakları nelerdir ve bir tüketici olarak hangi durumlarda şikayet hakkımı kullanabilirim?",
        "Bir kira sözleşmesinde, kiracının ödeme yükümlülükleri nelerdir?",
        "Türkiye'de arabuluculuk hangi davalarda zorunludur ve arabuluculuk süreci nasıl işler?",
        "Türk Borçlar Kanunu'na göre sözleşme serbestisi ilkesi ne anlama gelir?",
      ],
    },
    modelHealth: {
      model_version: "6.4.2",
      model_name: "Mürşit 6.4.2",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "6.5.1",
    totalConversations: 171,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "6.5.1",
      model_name: "Mürşit 6.5.1",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "6.6.1",
    totalConversations: 42,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "6.6.1",
      model_name: "Mürşit 6.6.1 G (S)",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
        {
          name: "Mürşit Deep Search",
          value: "provider4",
        },
        {
          name: "Mürşit Browser Search",
          value: "provider9",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "6.6.2",
    totalConversations: 35,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "6.6.2",
      model_name: "Mürşit 6.6.2 G (M)",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
        {
          name: "Mürşit Deep Search",
          value: "provider4",
        },
        {
          name: "Mürşit Browser Search",
          value: "provider9",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.4.5.3",
    totalConversations: 492,
    totalRatings: 2,
    averageRating: 4,
    modelMetadata: {
      description:
        "Bu model, sağlık hukuku alanında uzmanlaşmış modeldir. Sağlık hukuku ile ilgili konularda, sözleşmelerin incelenmesi, madde analizi, risk tespiti ve sözleşme oluşturma süreçlerinde avukatlara yardımcı olur. Sağlık hukuku alanında uzmanlaşmış bu model, avukatların sağlık hukuku ile ilgili davaları ve sözleşmeleri daha etkili bir şekilde hazırlamasına ve yürütmesine yardımcı olur.",
      capabilities: ["Sağlık Hukukunu Anlama ve Analiz"],
      questions: [
        "Bir hastalığı yanlış teşhis eden bir doktorun hukuki sorumluluğu nedir?",
        "Bir hastaya onayı olmadan bir tıbbi müdahalede bulunulabilir mi?",
        "Hasta hakları ihlalinde hangi hukuki yollara başvurulabilir?",
        "Doktorun yanlış bir ameliyat yapması halinde hastane sorumlu tutulabilir mi?",
      ],
    },
    modelHealth: {
      model_version: "7.4.5.3",
      model_name: "Mürşit Sağlık Hukuku-2",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_health_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.4.5.3.2",
    totalConversations: 200,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.4.5.3.2",
      model_name: "Mürşit Sağlık Hukuku-6",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_health_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.4.5.3.7",
    totalConversations: 4,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.4.5.3.7",
      model_name: "Mürşit Sağlık Hukuku-7",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_health_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.4.5.3.8",
    totalConversations: 4,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.4.5.3.8",
      model_name: "Mürşit Sağlık Hukuku-8",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_health_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.7.5.3",
    totalConversations: 247,
    totalRatings: 1,
    averageRating: 5,
    modelMetadata: {
      description:
        "Bu model, rekabet hukuku alanında uzmanlaşmış modeldir. Rekabet hukuku ile ilgili konularda, hukuki riskleri değerlendirmek, uyumluluk analizleri yapmak ve şirketlerin hukuki durumunu değerlendirmek için kullanılır. Rekabet hukuku alanında uzmanlaşmış bu model, avukatların rekabet hukuku ile ilgili davaları ve sözleşmeleri daha etkili bir şekilde hazırlamasına ve yürütmesine yardımcı olur.",
      capabilities: ["Rekabet Hukukunu Anlama ve Analiz"],
      questions: [
        "Bir şirketin hisselerinin tamamını devralacağım. Rekabet Kurulundan izin almam gerekir mi?",
        "Rekabet kurulu şirketimize incelemeye geldiğinde nelere dikkat etmemiz gerekir?",
        "Şirketimizin üyesi olduğu sektörel bir dernek var. Kendi aramızda fiyat belirleme yapmak istiyoruz. Bu durum rekabet ihlali oluşturur mu?",
        "Rekabet Kurulu şirketimizden bilgi ve belge talebinde bulundu. Vermezsek bunun hukuki sonucu nedir?",
      ],
    },
    modelHealth: {
      model_version: "7.7.5.3",
      model_name: "Mürşit Rekabet Hukuku-2",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_competition_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.7.5.3.2",
    totalConversations: 137,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.7.5.3.2",
      model_name: "Mürşit Rekabet Hukuku-6",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_competition_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.7.5.3.7",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.7.5.3.7",
      model_name: "Mürşit Rekabet Hukuku-7",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_competition_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.7.5.3.8",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.7.5.3.8",
      model_name: "Mürşit Rekabet Hukuku-8",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_competition_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.8.5.3",
    totalConversations: 173,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Bu model, enerji hukuku alanında uzmanlaşmış modeldir. Enerji hukuku ile ilgili konularda, hukuki süreçlerin ve belgelerin takibi, dava ve sözleşme envanterlerinin düzenlenmesi için kullanılır. Enerji hukuku alanında uzmanlaşmış bu model, avukatların enerji hukuku ile ilgili davaları ve sözleşmeleri daha etkili bir şekilde hazırlamasına ve yürütmesine yardımcı olur.",
      capabilities: ["Enerji Hukukunu Anlama ve Analiz"],
      questions: [
        "Enerji piyasasında faaliyet göstermek isteyen şirketlerin lisans alma süreçleri ve karşılaması gereken asgari şartlar nelerdir?",
        "Bir elektrik dağıtım şirketinde hisselerim var. Bunları devretmek istediğimde EPDK’dan izin ya da onay almam gerekir mi?",
        "Bir elektrik dağıtım şirketinin hangi giderleri tarifeye yansıtılabilir?",
        "Elektrik dağıtım şirketlerinin esas sözleşmelerinde bulunması gereken asgari unsurlar nelerdir?",
      ],
    },
    modelHealth: {
      model_version: "7.8.5.3",
      model_name: "Mürşit Enerji Hukuku-2",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_energy_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.8.5.3.2",
    totalConversations: 61,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.8.5.3.2",
      model_name: "Mürşit Enerji Hukuku-6",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_energy_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.8.5.3.7",
    totalConversations: 2,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.8.5.3.7",
      model_name: "Mürşit Enerji Hukuku-7",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_energy_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.8.5.3.8",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.8.5.3.8",
      model_name: "Mürşit Enerji Hukuku-8",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_energy_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.9.5.3",
    totalConversations: 120,
    totalRatings: 2,
    averageRating: 5,
    modelMetadata: {
      description:
        "Kişisel verilerin işlenmesi, depolanması ve korunması süreçlerinde KVK mevzuatına uygunluğu denetlemek için kullanılır.",
      capabilities: ["KVKK Hukukunu Anlama"],
      questions: [
        "Açık rıza ne zaman gereklidir?",
        "Kişisel verilerin işlenmesinde hukuka uygunluk şartları nelerdir?",
        "Veri ihlali durumunda şirketlerin sorumluluğu nedir?",
      ],
    },
    modelHealth: {
      model_version: "7.9.5.3",
      model_name: "Mürşit KVKK-2",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_data_protection_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.9.5.3.2",
    totalConversations: 46,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.9.5.3.2",
      model_name: "Mürşit KVKK-6",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_data_protection_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.9.5.3.7",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.9.5.3.7",
      model_name: "Mürşit KVKK-7",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_data_protection_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.9.5.3.8",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.9.5.3.8",
      model_name: "Mürşit KVKK-8",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_data_protection_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.10.5.3",
    totalConversations: 129,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Vergi mevzuatına uygunluğu analiz etmek, vergi hesaplamaları yapmak, vergi davalarını takip etmek ve vergi hukuku ile ilgili hukuki görüşler hazırlamak için kullanılır. Vergi planlaması ve risk yönetimi için önemlidir.",
      capabilities: ["Vergi Hukukunu Anlama ve Analiz"],
      questions: [
        "Yurtdışına hizmet verdiğimde faturayı KDV dahil mi kesmeliyim?",
        "Hangi belgelerden damga vergisi doğar?",
        "Bir tek yaz aylarında Türkiyeye geliyorum. Türkiye’de vergiye tabi olur muyum?",
        "Şirketimizin ortağının bir başka şirketi daha var. İki şirket arasında bir hizmet sözleşmesi imzalayacağız. Vergisel olarak dikkat etmemiz gereken bir şey var mı?",
      ],
    },
    modelHealth: {
      model_version: "7.10.5.3",
      model_name: "Mürşit Vergi Hukuku-2",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_tax_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.10.5.3.2",
    totalConversations: 68,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.10.5.3.2",
      model_name: "Mürşit Vergi Hukuku-6",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_tax_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.10.5.3.7",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.10.5.3.7",
      model_name: "Mürşit Vergi Hukuku-7",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_tax_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.10.5.3.8",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.10.5.3.8",
      model_name: "Mürşit Vergi Hukuku-8",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_tax_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "14.4.1",
    totalConversations: 12,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "14.4.1",
      model_name: "Mürşit 14.4.1 G (M)",
      type: "chat",
      max_input_token: 130000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "15.1.1",
    totalConversations: 7714,
    totalRatings: 1,
    averageRating: 1,
    modelMetadata: {
      description:
        "Bu modeller, çeşitli hukuki metinleri genel olarak işleyebilir. Metin analizi, özetleme, anahtar kelime çıkarma gibi temel görevleri yerine getirebilirler.",
      capabilities: [
        "Risk Değerlendirmesi",
        "Hukuki Araştırma",
        "Belge İnceleme",
      ],
      questions: [
        "Tüketici Hukuku'na göre 'tüketici sözleşmesi' nedir?",
        "İcra ve İflas Kanunu'na göre 'haciz' nedir?",
        "Türk Ticaret Kanunu'na göre 'anonim şirket' nasıl kurulur?",
        "Türk Medeni Kanunu'na göre 'vesayet' nedir?",
      ],
    },
    modelHealth: {
      model_version: "15.1.1",
      model_name: "Mürşit 15.1.1",
      type: "chat",
      max_input_token: 130000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "15.1.1.1",
    totalConversations: 36,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "15.1.1.1",
      model_name: "Mürşit 15.1.1.1",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "15.1.1.6",
    totalConversations: 50,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "15.1.1.6",
      model_name: "Mürşit 15.1.1.6",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "15.2.1",
    totalConversations: 964,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "15.2.1",
      model_name: "Mürşit 15.2.1",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "15.2.2",
    totalConversations: 38,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "15.2.2",
      model_name: "Mürşit 15.2.2",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "15.4.1",
    totalConversations: 46,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "15.4.1",
      model_name: "Mürşit 15.4.1",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "15.5.1",
    totalConversations: 375,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "15.5.1",
      model_name: "Mürşit 15.5.1",
      type: "chat",
      max_input_token: 8192,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "16.1.1",
    totalConversations: 780,
    totalRatings: 1,
    averageRating: 3.67,
    modelMetadata: {
      description:
        "Hızlı bir şekilde hukuki metinler üzerinde sorgulama yapmak için kullanılır. Belirli bir hukuki kavramı veya maddeyi hızlı bir şekilde bulmanızı sağlar.",
      capabilities: ["Hukuki Araştırma", "Karar Destek", "Hukuki Süreç Takibi"],
      questions: [
        "Tüketici Hukuku'na göre 'taksitle satış sözleşmesi' nedir?",
        "İcra ve İflas Kanunu'na göre 'rehin' nedir?",
        "Türk Ceza Kanunu'na göre 'hırsızlık' suçu nedir?",
        "Türk Borçlar Kanunu'na göre, 'kira sözleşmesi' nedir?",
      ],
    },
    modelHealth: {
      model_version: "16.1.1",
      model_name: "Mürşit 16.1.1",
      type: "chat",
      max_input_token: 131072,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "17.1.1",
    totalConversations: 162,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "17.1.1",
      model_name: "Mürşit 17.1.1",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "17.1.2",
    totalConversations: 46,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "17.1.2",
      model_name: "Mürşit 17.1.2",
      type: "chat",
      max_input_token: 131000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "17.1.3",
    totalConversations: 45,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "17.1.3",
      model_name: "Mürşit 17.1.3",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "18.1.1",
    totalConversations: 23136,
    totalRatings: 21,
    averageRating: 4.49,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "18.1.1",
      model_name: "Mürşit 18.1.1",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search 2",
          value: "provider2",
        },
        {
          name: "Mürşit Deep Research",
          value: "provider3",
        },
      ],
      defaultParams: {
        makeRag: false,
        searchProvider: "provider2",
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "19.1.1",
    totalConversations: 2341,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "19.1.1",
      model_name: "Mürşit 19.1.1",
      type: "chat",
      max_input_token: 131000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider7",
        },
      ],
      defaultParams: {
        makeRag: false,
        searchProvider: "provider7",
        makeOrchestration: false,
      },
      forcedParams: {
        searchProvider: "provider7",
      },
    },
  },
  {
    modelVersion: "19.2.1",
    totalConversations: 35,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "19.2.1",
      model_name: "Mürşit 19.2.1",
      type: "chat",
      max_input_token: 131000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider8",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "20.1.1",
    totalConversations: 436,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "20.1.1",
      model_name: "Mürşit 20.1.1",
      type: "chat",
      max_input_token: 200000,
      max_output_token: 64000,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: null,
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "20.1.2",
    totalConversations: 2562,
    totalRatings: 10,
    averageRating: 2.75,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "20.1.2",
      model_name: "Mürşit 20.1.2",
      type: "chat",
      max_input_token: 200000,
      max_output_token: 64000,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search 3",
          value: "provider10",
        },
        {
          name: "Mürşit Quick Search 4",
          value: "provider11",
        },
      ],
      defaultParams: {
        makeRag: false,
        searchProvider: "provider11",
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "20.1.2.1",
    totalConversations: 550,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "20.1.2.1",
      model_name: "Mürşit 20.1.2.1",
      type: "chat",
      max_input_token: 200000,
      max_output_token: 64000,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: null,
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "21.1.2",
    totalConversations: 59,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "21.1.2",
      model_name: "Mürşit 21.1.2",
      type: "chat",
      max_input_token: 200000,
      max_output_token: 0,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search 3",
          value: "provider10",
        },
        {
          name: "Mürşit Quick Search 4",
          value: "provider11",
        },
      ],
      defaultParams: {
        makeRag: false,
        searchProvider: "provider11",
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "21.1.4",
    totalConversations: 3,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "21.1.4",
      model_name: "Mürşit 21.1.4",
      type: "chat",
      max_input_token: 131072,
      max_output_token: 0,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search 3",
          value: "provider10",
        },
        {
          name: "Mürşit Quick Search 4",
          value: "provider11",
        },
      ],
      defaultParams: {
        makeRag: false,
        searchProvider: "provider11",
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "21.1.6",
    totalConversations: 1,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "21.1.6",
      model_name: "Mürşit 21.1.6",
      type: "chat",
      max_input_token: 1050000,
      max_output_token: 0,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search 3",
          value: "provider10",
        },
        {
          name: "Mürşit Quick Search 4",
          value: "provider11",
        },
      ],
      defaultParams: {
        makeRag: false,
        searchProvider: "provider11",
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "21.1.7",
    totalConversations: 4,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "21.1.7",
      model_name: "Mürşit 21.1.7",
      type: "chat",
      max_input_token: 262100,
      max_output_token: 0,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search 3",
          value: "provider10",
        },
        {
          name: "Mürşit Quick Search 4",
          value: "provider11",
        },
      ],
      defaultParams: {
        makeRag: false,
        searchProvider: "provider11",
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "20.2.2",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "20.2.2",
      model_name: "Mürşit 20.1.2 (New)",
      type: "chat",
      max_input_token: 200000,
      max_output_token: 64000,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search 3",
          value: "provider10",
        },
        {
          name: "Mürşit Quick Search 4",
          value: "provider11",
        },
      ],
      defaultParams: {
        makeRag: false,
        searchProvider: "provider11",
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "rag_test_1",
    totalConversations: 8,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "rag_test_1",
      model_name: "Rag Test 1",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 0,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["rag"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "rag_test_2",
    totalConversations: 5,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "rag_test_2",
      model_name: "Rag Test 2",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["rag"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "rag_test_3",
    totalConversations: 7,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "rag_test_3",
      model_name: "Rag Test 3",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["rag"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "rag_test_4",
    totalConversations: 9,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "rag_test_4",
      model_name: "Rag Test 4",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["rag"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "rag_test_5",
    totalConversations: 9,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "rag_test_5",
      model_name: "Rag Test 5",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["rag"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "rag_test_6",
    totalConversations: 4,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "rag_test_6",
      model_name: "Rag Test 6",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["rag"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "rag_test_7",
    totalConversations: 6,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "rag_test_7",
      model_name: "Rag Test 7",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["rag"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "rag_test_8",
    totalConversations: 3,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "rag_test_8",
      model_name: "Rag Test 8",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["rag"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "rag_test_9",
    totalConversations: 5,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "rag_test_9",
      model_name: "Rag Test 9",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["rag"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "rag_test_10",
    totalConversations: 4,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "rag_test_10",
      model_name: "Rag Test 10",
      type: "chat",
      max_input_token: 1000000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: ["rag"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.11.5.3",
    totalConversations: 121,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Fikri mülkiyet haklarının korunması, lisanslanması ve uygulanması süreçlerinde avukatlara hukuki danışmanlık ve destek sağlamak için kullanılır. Fikri mülkiyet alanındaki süreçlerin daha verimli ve etkin bir şekilde yönetilmesine ve avukatların başarı oranlarının artırılmasına katkıda bulunur.",
      capabilities: ["Fikri Mülkiyet Hukukunu Anlama ve Analiz"],
      questions: [
        "Marka tescil başvuruma itiraz gelmiş. Ne yapmam gerekir?",
        "Bir buluşun patentlenebilir olması için hangi kriterleri karşılaması gerekir?",
        "Bir roman yazdım. Adımın belirtilmesini istemiyorum. Bu durumda yayıncıya hangi hakları devretmem gerekir?",
        "TURKPATENT’e tescil edilmiş bir marka yurtdışında da korunur mu?",
      ],
    },
    modelHealth: {
      model_version: "7.11.5.3",
      model_name: "Mürşit Fikri Mülkiyet Hukuku-2",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_ip_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.11.5.3.2",
    totalConversations: 76,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.11.5.3.2",
      model_name: "Mürşit Fikri Mülkiyet Hukuku-6",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_ip_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.11.5.3.7",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.11.5.3.7",
      model_name: "Mürşit Fikri Mülkiyet Hukuku-7",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_ip_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.11.5.3.8",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.11.5.3.8",
      model_name: "Mürşit Fikri Mülkiyet Hukuku-8",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_ip_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.12.5.3",
    totalConversations: 65,
    totalRatings: 1,
    averageRating: 1,
    modelMetadata: {
      description:
        "Fonların kurulması, yönetilmesi ve denetlenmesi süreçlerini düzenlemek için kullanılır. Fon yöneticilerinin yükümlülüklerini, yatırımcıların haklarını ve fon faaliyetlerini hukuki çerçevede değerlendirmek açısından önemlidir.",
      capabilities: ["Fon Hukukunu Anlama ve Analiz"],
      questions: [
        "Girişim sermeyesi yatırım fonu nasıl kurulur?",
        "Bir gayrimenkule yatırım yapmak istiyorum. Gayrimenkul yatırım fonu kurmamım bir avantajı olur mu?",
        "Fon yönetimi için portföy yönetim şirketi ile anlaşmak zorunlu mudur?",
        "Fonun kar payı dağıtımı nasıl gerçekleşir?",
      ],
    },
    modelHealth: {
      model_version: "7.12.5.3",
      model_name: "Mürşit Kitle Fonlaması Hukuku-2",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_fund_manager"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.12.5.3.2",
    totalConversations: 30,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.12.5.3.2",
      model_name: "Mürşit Kitle Fonlaması Hukuku-6",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_fund_manager"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.12.5.3.7",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.12.5.3.7",
      model_name: "Mürşit Kitle Fonlaması Hukuku-7",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_fund_manager"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.12.5.3.8",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.12.5.3.8",
      model_name: "Mürşit Kitle Fonlaması Hukuku-8",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_fund_manager"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.13.5.3",
    totalConversations: 73,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "İşveren-işçi ilişkilerini düzenleyen tüm hukuki konularda avukatlara kapsamlı destek sağlamak için kullanılır. İş sözleşmeleri, işten çıkarma süreçleri, toplu iş sözleşmeleri müzakereleri, iş kazaları, meslek hastalıkları davaları, mobbing ve ayrımcılık iddiaları gibi konularda güncel mevzuat ve içtihatlar ışığında bilgi ve analiz sunar. İş hukuku alanındaki karmaşık sorunların etkin ve verimli bir şekilde ele alınmasına yardımcı olur, avukatların müvekkillerine en iyi hizmeti sunmalarını sağlar.",
      capabilities: ["İş Hukukunu Anlama"],
      questions: [
        "İş sözleşmemi geçerli nedenle feshettiler. Kıdem tazminatımı alabilir miyim?",
        "İş sözleşmesinde düzenlenen rekabet etmeme hükümleri geçerli midir?",
        "İş sözleşmesini feshederken işçiden nasıl bir ibraname almalıyım?",
        "İş kazası halinde şirketin tek imza yetkilisinin bir sorumluluğu doğar mı?",
      ],
    },
    modelHealth: {
      model_version: "7.13.5.3",
      model_name: "Mürşit İş Hukuku-2",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_labor_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.13.5.3.2",
    totalConversations: 42,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.13.5.3.2",
      model_name: "Mürşit İş Hukuku-6",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_labor_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.13.5.3.7",
    totalConversations: 1,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.13.5.3.7",
      model_name: "Mürşit İş Hukuku-7",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_labor_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.13.5.3.8",
    totalConversations: 1,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.13.5.3.8",
      model_name: "Mürşit İş Hukuku-8",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_labor_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "10.1.2",
    totalConversations: 1254,
    totalRatings: 2,
    averageRating: 5,
    modelMetadata: {
      description:
        "Bu modeller, çeşitli hukuki metinleri genel olarak işleyebilir. Metin analizi, özetleme, anahtar kelime çıkarma gibi temel görevleri yerine getirebilirler.",
      capabilities: ["Hukuki Araştırma", "Belge İnceleme"],
      questions: [
        "İş Hukuku'na göre, işverenin eşit davranma borcu nedir ve bu borcun ihlali durumunda işçinin hakları nelerdir?",
        "Kat Mülkiyeti Kanunu'na göre, kat maliklerinin hak ve yükümlülükleri nelerdir?",
        "Anonim şirketlerde genel kurulun devredilemez yetkileri nelerdir?",
        "Türk Ceza Kanunu'na göre, 'Kasten Yaralama' suçunun unsurları nelerdir?",
      ],
    },
    modelHealth: {
      model_version: "10.1.2",
      model_name: "Mürşit 10.1.2",
      type: "chat",
      max_input_token: 8192,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "14.2.1",
    totalConversations: 104,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "14.2.1",
      model_name: "Mürşit 14.2.1",
      type: "chat",
      max_input_token: 130000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: true,
      competition_category: [],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "14.3.1",
    totalConversations: 74,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "14.3.1",
      model_name: "Mürşit 14.3.1",
      type: "chat",
      max_input_token: 130000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["non-reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "14.3.2",
    totalConversations: 162,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "14.3.2",
      model_name: "Mürşit 14.3.2",
      type: "chat",
      max_input_token: 130000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["reasoning"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: false,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "test",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "test",
      model_name: "test",
      type: "chat",
      max_input_token: 8192,
      max_output_token: 123,
      generation_config: "",
      status: "stopped",
      makeOrchestration: true,
      authorized_user: [],
      makeRag: false,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_capital_markets_law"],
      searchProviders: [
        {
          name: "Mürşit Deep Search",
          value: "provider4",
        },
        {
          name: "Mürşit Browser Search",
          value: "provider9",
        },
      ],
      defaultParams: {
        is_multimodal: true,
        searchProvider: "provider4",
      },
      forcedParams: {
        is_multimodal: false,
        searchProvider: "provider8",
        makeOrchestration: true,
      },
    },
  },
  {
    modelVersion: "7.14.5.3",
    totalConversations: 64,
    totalRatings: 3,
    averageRating: 3.58,
    modelMetadata: {
      description:
        "Halka açık şirketler, menkul kıymetler, borsalar ve sermaye piyasalarını düzenleyen tüm hukuki konularda avukatlara kapsamlı destek sağlamak için kullanılır. Halka arzlar, birleşme ve devralmalar, sermaye artırımları, şirket yönetimi, içeriden öğrenenlerin ticareti ve piyasa dolandırıcılığı gibi konularda güncel mevzuat ve içtihatlar ışığında bilgi ve analiz sunar. Sermaye piyasası hukuku alanındaki karmaşık ve sürekli değişen düzenlemeleri anlamalarına yardımcı olur ve avukatların müvekkillerine en uygun stratejileri geliştirmelerini sağlar.",
      capabilities: ["Sermaye ve Piyasa Hukukunu Anlama ve Analizi"],
      questions: [
        "Halka açık bir şirkette hisselerim var. Genel kurula nasıl katılabilirim?",
        "Halka açık şirketler hangi durumları kamuya açıklamak zorundadır?",
        "Borsa dışı işlemler (OTC) ile borsada yapılan işlemler arasındaki farklar nelerdir?",
        "Bir şirketin halka arzının temel aşamaları nelerdir?",
      ],
    },
    modelHealth: {
      model_version: "7.14.5.3",
      model_name: "Mürşit Sermaye Piyasaları Hukuku-2",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_capital_markets_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.14.5.3.2",
    totalConversations: 38,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.14.5.3.2",
      model_name: "Mürşit Sermaye Piyasaları Hukuku-6",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_capital_markets_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.14.5.3.7",
    totalConversations: 1,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.14.5.3.7",
      model_name: "Mürşit Sermaye Piyasaları Hukuku-7",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_capital_markets_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.14.5.3.8",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.14.5.3.8",
      model_name: "Mürşit Sermaye Piyasaları Hukuku-8",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_capital_markets_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.15.5.3",
    totalConversations: 54,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Arazi mülkiyeti, imar planlaması, yapılaşma ve kentsel dönüşüm gibi konularda avukatlara kapsamlı destek sağlamak için kullanılır. İmar planlarının incelenmesi ve itirazı, kamulaştırma davaları, tapu tescil ve iptal işlemleri, yapı ruhsat izinleri, kat mülkiyeti ve irtifak hakları gibi konularda güncel mevzuat ve içtihatlar ışığında bilgi ve analiz sunar. Toprak ve imar hukuku alanındaki karmaşık süreçlerin anlaşılmasına yardımcı olur ve avukatların müvekkillerinin haklarını en iyi şekilde korumalarını sağlar. ",
      capabilities: ["Toprak ve İmar Hukukunu Anlama ve Amaliz"],
      questions: [
        "Orman vasfını haiz bir arazi orman vasfından çıkartılabilir mi?",
        "Yapı kullanım izin belgesi olmadan bir binayı kullanmanın yaptırımı nedir?",
        "Satıcı ve Alıcı olarak kendi aramızda bir gayrimenkul satış vaadi sözleşmesi imzaladık. Bu sözleşme geçerli olur mu?",
        "Site yönetim planına aykırı davranan bir site sakinine karşı hangi hukuki yollara başvurabiliriz?",
      ],
    },
    modelHealth: {
      model_version: "7.15.5.3",
      model_name: "Mürşit Toprak ve İmar Hukuku-2",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_land_and_zoning_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.15.5.3.2",
    totalConversations: 69,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.15.5.3.2",
      model_name: "Mürşit Toprak ve İmar Hukuku-6",
      type: "chat",
      max_input_token: 128000,
      max_output_token: 8192,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: true,
      is_multimodal: false,
      competition_category: ["expert_non_reasoning_land_and_zoning_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.15.5.3.7",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.15.5.3.7",
      model_name: "Mürşit Toprak ve İmar Hukuku-7",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_land_and_zoning_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
  {
    modelVersion: "7.15.5.3.8",
    totalConversations: 0,
    totalRatings: 0,
    averageRating: 0,
    modelMetadata: {
      description:
        "Hukuki konularda uzmanlaşmış bir yapay zeka modelidir. Avukatlara hukuki belge analizi, sözleşme yazımı, hukuki soruları yanıtlama ve daha birçok konuda yardımcı olmak üzere tasarlanmıştır.",
      capabilities: [
        "Hukuki Metin Analizi",
        "Mevzuat Araştırması",
        "Hızlı ve Verimli Yanıtlar",
      ],
      questions: [
        "Boşanma davası nasıl açılır?",
        "Bir icra takibi başlattım. Bundan sonraki süreçte neler yapmam gerekiyor? Hangi adımları takip etmeliyim?",
        "Miras nasıl paylaşılır?",
        "Tüketici olarak online alışverişte iade hakkım hangi durumlarda geçerli? Cayma hakkımı nasıl kullanabilirim?",
      ],
    },
    modelHealth: {
      model_version: "7.15.5.3.8",
      model_name: "Mürşit Toprak ve İmar Hukuku-8",
      type: "chat",
      max_input_token: 32768,
      max_output_token: 4096,
      generation_config: "",
      status: "running",
      makeOrchestration: false,
      authorized_user: [],
      makeRag: true,
      isGuidedDecoding: false,
      is_multimodal: false,
      competition_category: ["expert_reasoning_land_and_zoning_law"],
      searchProviders: [
        {
          name: "Mürşit Quick Search",
          value: "provider1",
        },
      ],
      defaultParams: {
        makeRag: true,
        makeOrchestration: false,
      },
      forcedParams: {},
    },
  },
];

//descriptionun hepsi küçük, capabilites hepsi büyük, questionsun her kelimenin ilk harfi büyük kalanı küçük

function changeString(data) {
  return data.map((model) => {
    const meta = { ...model.modelMetadata }; 
    let description = meta.description;
    let capabilities = meta.capabilities;
    let questions = meta.questions;

    if (description) {
      description = description.toLowerCase();
    }
    if (capabilities) {
      if (Array.isArray(capabilities)) {
        capabilities = capabilities.map((c) => c.toUpperCase());
      } else {
        capabilities = capabilities.toUpperCase();
      }
    }

    if (Array.isArray(questions)) {
      questions = questions.map((q) =>
        q
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")
      );
    }

    return {
      description,
      capabilities,
      questions,
    };
  });
}

const changedData = changeString(data);
console.log(changedData);


//average rating 2.5'tan büyük olanların model versiyonu, total conversationu, total ratingi ve average ratingi dönsün
function getHighRatings(data) {
  return data
    .filter((item) => item.averageRating > 2.5)
    .map((item) => ({
      modelVersion: item.modelVersion,
      totalConversations: item.totalConversations,
      totalRatings: item.totalRatings,
      averageRating: item.averageRating,
    }));
}

const result = getHighRatings(data);
console.log(result);

//total conversationu 30 dan büyük olanların descriptionları dönsün
function getHighConversations(data) {
  return data
    .filter((item) => item.totalConversations > 30)
    .map((item) => ({
      totalConversations: item.totalConversations,
      description: item.modelMetadata.description,
    }));
}

const sonuc = getHighConversations(data);
console.log(sonuc);

//max input token ortalaması
function avgInputToken(data) {
  const items = data.filter(s => s.modelHealth.max_input_token);
  let total = 0;
  items.forEach(s => total += s.modelHealth.max_input_token);
  return total / items.length;
}

const average = avgInputToken(data);
console.log("max input token ortalaması:", average);

//max output token toplamı
function sumOutputToken(data){
const item = data.filter(d => d.modelHealth.max_output_token);
let sum = 0;
item.forEach(d => sum += d.modelHealth.max_output_token);
return sum;
}

const sum = sumOutputToken(data);
console.log("max output token toplamı:", sum);

//model health içindeki snake case keyler camelCase olmalı
function toCamel(str) {
  return str
    .split("_")
    .map((w, i) => (i ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join("");
}

const convertModelHealthKeys = data =>
  data.map(m => ({
    ...m,
    modelHealth: Object.fromEntries(
      Object.entries(m.modelHealth).map(([k, v]) => [toCamel(k), v])
    )
  }));

const convertedData = convertModelHealthKeys(data);
console.log(convertedData);


