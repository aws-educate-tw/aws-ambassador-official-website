export interface CareerStep {
  id: string;
  text: string;
}

export interface AlumniProfile {
  name: string;
  title: string;
  image?: string;
  highlights: string[];
  quote: string;
  careerPath: CareerStep[];
  interviewer: string;
  interviewUrl?: string;
}

export interface StoryCategory {
  title: string;
  subtitle: string;
  alumni: Record<string, AlumniProfile>;
}

export const SUCCESS_STORIES: Record<string, StoryCategory> = {
  career: {
    title: '大使校友成功故事 -- 從大使到第一份工作或實習',
    subtitle: '大使經歷變現！把校園累積的實戰力，變成進入夢幻企業的通行證',
    alumni: {
      羅子函: {
        name: '羅子函',
        title: 'AWS Educate Taiwan 校園大使校友',
        image: '/images/Stories/Han.png',
        highlights: [
          '政大國貿背景的科技轉型，從文法商領域跨足科技業',
          '勇於跳脫舒適圈，前進歐洲深耕數據科學',
          '國際移動力的實踐者，具備強大決心與國際化思維',
        ],
        quote:
          '很多答案都是做了之後才慢慢長出來的，很多事情沒有標準答案，妳不能等準備好才上場，而是必須在場上邊做邊學。與其停在原地想，不如先往一個方向走，然後在過程中調整。',
        careerPath: [
          { id: '01', text: '曾任 AWS 台北辦公室 CS 團隊' },
          { id: '02', text: '零法文背景突圍法國 AI 軟體公司' },
          { id: '03', text: '於巴黎 Dataiku 負責數據導向的商務營運與策略' },
        ],
        interviewer: 'Allison, Elma',
        interviewUrl:
          'https://medium.com/@awseducate.cloudambassador/%E5%9C%A8%E5%B7%B4%E9%BB%8E-ai-%E5%85%AC%E5%8F%B8-%E6%96%87%E6%B3%95%E5%95%86%E8%83%8C%E6%99%AF%E5%A6%82%E4%BD%95%E6%89%BE%E5%88%B0%E5%AE%9A%E4%BD%8D-%E5%AD%90%E5%87%BD%E7%9A%84%E8%B7%A8%E5%9C%8B%E8%81%B7%E6%B6%AF%E8%B7%AF%E5%BE%91-8f00421db8af',
      },
      Chloe: {
        name: 'Chloe Chang',
        title: 'AWS Educate Taiwan 校園大使校友',
        image: '/images/Stories/Chloe.jpg',
        highlights: [
          '現任知名公司擔任資深產品分析師',
          '具備橫跨工業工程與資訊管理的跨領域專業背景',
          '第一屆 AWS Educate 校園大使',
        ],
        quote:
          '大使計畫不僅是累積經歷，更是學習如何拆解問題、並將數據轉化為影響力的起點；不要害怕面試被問倒，每一次失敗都是在優化你下一次的求職勝率。',
        careerPath: [
          {
            id: '01',
            text: '利用大使期間累積的專案管理與 KPI 導向思維，克服面試新手的焦慮。',
          },
          {
            id: '02',
            text: '透過 STAR 原則將大使經驗轉化為面試亮點，成功敲開科技外商大門。',
          },
          {
            id: '03',
            text: '精準掌握營運效率、數據說故事與使用者體驗之間的差異，成為技術與商業團隊間的關鍵翻譯官。',
          },
        ],
        interviewer: 'Selina, Jessie',
        interviewUrl:
          'https://medium.com/@awseducate.cloudambassador/alumni-stories-%E5%BE%9E%E5%B1%A5%E6%AD%B7%E7%A9%BA%E7%99%BD%E5%88%B0%E5%A4%96%E5%95%86%E8%B3%87%E6%B7%B1%E7%94%A2%E5%93%81%E5%88%86%E6%9E%90%E5%B8%AB-chloe-%E5%AD%B8%E5%A7%8A-%E7%9A%84-%E5%AE%9A%E7%BE%A9%E5%95%8F%E9%A1%8C-%E5%AF%A6%E6%88%B0%E8%B7%AF%E5%BE%91-c45ddaed6e5f',
      },
    },
  },
  tech: {
    title: '大使校友成功故事 -- 技術成長路徑',
    subtitle: '從小白到架構師，在雲端世界中煉成帶不走的實力',
    alumni: {
      Shiun: {
        name: 'Shiun Chiu',
        title: 'AWS Educate Taiwan 校園大使校友',
        image: '/images/Stories/Shiun.png',
        highlights: [
          '深耕 Networking 與 Linux Kernel 等底層技術的外商雲端工程師',
          '擅長把艱澀的架構轉譯為小白也能吸收的知識',
          '穩扎穩打的「農兵派」實踐者，主張扎根基礎技術並善用 AI 工具極大化學習效率',
        ],
        quote:
          '大使計畫是我技術職涯的加速器，它讓我學會將艱澀的雲端技術轉譯為影響力，了解不必等準備好才出發，唯有在實戰與社群的市場溫度中，才能真正煉成帶不走的技術實力。',
        careerPath: [
          {
            id: '01',
            text: '憑藉一週內考取 SAA 證照的衝勁，開啟連續四屆 AWS 校園大使的社群影響力',
          },
          {
            id: '02',
            text: '外商實戰應對高併發倒站壓力，由 API 後端開發轉型基礎設施架構專家',
          },
          {
            id: '03',
            text: '長期經營 Notion 技術輸出與個人品牌，獲邀至 K8s Summit 大型技術年會分享',
          },
        ],
        interviewer: 'Vincent, Angela, Selina',
        interviewUrl:
          'https://medium.com/@awseducate.cloudambassador/alumni-stories-shiun-%E7%9A%84%E9%9B%B2%E7%AB%AF%E9%80%B2%E5%8C%96%E6%97%85%E7%A8%8B-%E5%9C%A8%E5%A4%A7%E4%BD%BF%E6%B7%AC%E9%8D%8A%E8%88%87%E5%BA%95%E5%B1%A4%E9%91%BD%E7%A0%94%E4%B8%AD%E6%89%BE%E5%88%B0%E5%AE%9A%E4%BD%8D-3240506f757a',
      },
      Aaron: {
        name: 'Aaron Huang',
        title: 'AWS Educate Taiwan 校園大使校友',
        image: '',
        highlights: [
          '精準定位自我於「商業與技術的完美平衡」 ',
          '具備高情商與強大的跨領域溝通力，擅長管理客戶期待與解決複雜的專案需求',
          '現任 AWS 專業服務團隊 ProServe 顧問，專注於 AI/ML 領域的專案落地建置',
        ],
        quote:
          'AWS 校園大使計畫是我邁進頂尖外商的關鍵敲門磚。這段「從零到一」的經驗大幅訓練了我的自學與表達能力， 讓我在競爭激烈的雲端產業面試中精準展現自我，成功開啟技術顧問的職涯旅程。',
        careerPath: [
          { id: '01', text: '碩一擔任大使，從零經驗自學雲端技術並成功擔綱專屬講師' },
          { id: '02', text: '曾任職於多間雲端廠商，具備深厚的售前、售後與顧問實戰經驗' },
          { id: '03', text: '捨棄高薪售後客服職位，毅然重返 AWS 深耕專案實作' },
        ],
        interviewer: 'Vincent, Angela, Seren',
        interviewUrl:
          'https://medium.com/@awseducate.cloudambassador/alumni-stories-%E4%BD%A0%E4%B8%8D%E9%9C%80%E8%A6%81%E5%BE%88%E5%8E%B2%E5%AE%B3%E6%89%8B%E5%87%BA%E7%99%BC-%E4%BD%A0%E5%BF%85%E9%A0%88%E5%85%88%E5%87%BA%E7%99%BC-%E6%89%8B%E6%9C%89%E8%B7%A8%E5%A4%A7-aaron-%E7%9A%84%E5%A4%96%E5%95%86%E6%B1%82%E8%81%B7%E4%B9%8B%E8%B7%AF-951834d93582',
      },
      Alan: {
        name: 'Alan Hsu',
        title: 'AWS Educate Taiwan 校園大使校友',
        image: '/images/Stories/Alan.jpg',
        highlights: [
          '資管背景跨足智慧製造，以跨域視角深耕半導體產業',
          '從雲端大使到業界工程師，用每一次實戰累積技術判斷力',
          '擅長將複雜技術化繁為簡，致力於技術與人之間的溝通與轉譯',
        ],
        quote:
          'AWS 校園大使是我第一次把技術帶出課堂、放到真實場景裡驗證的機會，從中累積的實戰經驗與溝通歷練，為後來進入業界打下了重要的基礎。',
        careerPath: [
          {
            id: '01',
            text: '曾任 AWS Educate 第六屆校園大使技術組，並曾代表大使與企業高層對談雲端應用',
          },
          { id: '02', text: '碩班期間參與多項產學合作，涵蓋機台預知保養與 LLM 教育訓練等實務專案' },
          { id: '03', text: '現任半導體廠 IT 工程師，投入大型企業系統的開發與維護工作' },
        ],
        interviewer: 'Seren, Aaron, Selina',
        interviewUrl:
          'https://medium.com/@awseducate.cloudambassador/alumni-stories-%E6%8A%80%E8%A1%93%E6%88%90%E9%95%B7%E4%B8%A6%E9%9D%9E%E7%9B%B4%E7%B7%9A%E5%89%8D%E9%80%B2-%E8%80%8C%E6%98%AF%E5%9C%A8%E5%AF%A6%E6%88%B0%E4%B8%AD%E4%B8%8D%E6%96%B7%E4%BF%AE%E6%AD%A3%E6%96%B9%E5%90%91-alan-%E7%9A%84%E6%8A%80%E8%A1%93%E6%88%90%E9%95%B7%E8%B7%AF%E5%BE%91-f0e68dc6d9a4',
      },
    },
  },
  cross: {
    title: '大使校友成功故事 -- 跨域學習經驗',
    subtitle: '打破科系邊界，玩出妳意想不到的跨界賽道！',
    alumni: {
      Sharon: {
        name: 'Sharon Chen',
        title: 'AWS Educate Taiwan 校園大使校友',
        image: '/images/Stories/Sharon.png',
        highlights: [
          '北教大語文創作系出身，以人文領域跨足外商科技業',
          '將語文系的訓練內化為職場實力，以精準溝通、協調資源能力達成高效專案推進',
          '歷經微軟、獵頭、電商後鎖定雲端科技業，每段經歷皆成為職涯轉型的養分',
        ],
        quote:
          '多方嘗試，找到自己的熱情所在。大使計畫讓我更確定對雲端產業的熱忱，也讓我學會以客戶角度出發思考。你不需要一開始就選定方向，每個人都可以是你啟發與機會的來源。',
        careerPath: [
          {
            id: '01',
            text: '微軟實習期間考取 AI 與雲端基礎證照、跨部門建立人脈，將行政職位轉化為科技業入場券 ',
          },
          {
            id: '02',
            text: '擔任 AWS Educate 第三、四屆校園大使，主動 Reach out HR，以大使背景敲門轉正',
          },
          { id: '03', text: '現任 Amazon Lab 126 營運專案經理，跨國協調多方團隊' },
        ],
        interviewer: 'Jessie, Allison',
        interviewUrl:
          'https://medium.com/@awseducate.cloudambassador/alumni-stories-%E5%BE%9E%E8%AA%9E%E6%96%87%E5%89%B5%E4%BD%9C%E8%B5%B0%E5%85%A5%E9%9B%B2%E7%AB%AF-sharon-%E7%9A%84%E8%B7%A8%E5%9F%9F%E6%88%90%E9%95%B7%E8%BB%8C%E8%B7%A1-ecf19715f40d',
      },
      葉禹旋: {
        name: '葉禹旋',
        title: 'AWS Educate Taiwan 校園大使校友',
        image: '/images/Stories/Mina.png',
        highlights: [
          '政大資管背景出身，從技術端逐步探索至行銷與品牌領域',
          '擅長將複雜技術轉譯成大眾易懂的內容，兼具數據邏輯與溝通能力',
          '勇於跨域與跨產業嘗試，從科技、電信到外商品牌行銷從持續拓展視野',
        ],
        quote: '我相信跨域不是從零開始，而是在一次次嘗試中，慢慢找到自己真正想投入的位置。',
        careerPath: [
          { id: '01', text: '大學時期由校園 App 專案後端開發轉向行銷，開啟跨域契機' },
          {
            id: '02',
            text: '曾任 Acer Media Performance Marketing Intern、遠傳 Product Marketing Intern',
          },
          { id: '03', text: '現於 JTI 擔任 Brand Marketing Assistant，負責品牌行銷' },
        ],
        interviewer: 'Jessie, Elma',
        interviewUrl:
          'https://medium.com/@awseducate.cloudambassador/alumni-stories-%E5%BE%9E%E5%AF%AB%E7%A8%8B%E5%BC%8F%E5%88%B0%E8%AA%AA%E6%95%85%E4%BA%8B-mina-%E7%9A%84%E8%B7%A8%E5%9F%9F%E6%88%90%E9%95%B7%E8%B7%AF%E5%BE%91-18a9481ae40c',
      },
      Boyi: {
        name: 'Boyi Wang',
        title: 'AWS Educate Taiwan 校園大使校友',
        image: '/images/Stories/Boyi.png',
        highlights: [
          '台大生物產業傳播暨發展學系背景',
          '勇於跨領域學習，能夠將資料與分析技術應用於解決實際商業問題',
          '從 AWS 雲端校園大使到 AWS BD 再到 Marketing，積極探索多元職能',
        ],
        quote:
          '真正的職涯方向來自於不斷探索、學習和適應，不僅要精通某一技術，而是要具備在不同領域之間整合與協作的能力，而這也是 Boyi 認為在 AI 時代中不容易被取代的關鍵能力。',
        careerPath: [
          {
            id: '01',
            text: '以第六屆 AWS 校園大使為起點，一路走到 AWS Strategic Programs 的 BD 帶領大使計劃',
          },
          {
            id: '02',
            text: '樂於跨部門學習，曾轉任 AWS Field Marketing，負責 Startup 與 Developer 生態系相關專案',
          },
          { id: '03', text: '目前在創投公司 Mesh 擔任 Marketing，推動新創企業的市場發展' },
        ],
        interviewer: 'Jessie, Elma',
        interviewUrl:
          'https://medium.com/@awseducate.cloudambassador/alumni-stories-%E8%81%B7%E6%B6%AF%E4%B8%8D%E6%98%AF%E8%A6%8F%E5%8A%83%E5%87%BA%E4%BE%86%E7%9A%84-%E8%80%8C%E6%98%AF%E8%B5%B0%E5%87%BA%E4%BE%86%E7%9A%84-boyi-%E7%9A%84%E8%B7%A8%E5%9F%9F%E8%81%B7%E6%B6%AF%E6%8E%A2%E7%B4%A2-ff2c81c963c8',
      },
    },
  },
};

export interface DirectoryPerson {
  name: string;
  image?: string;
  school: string;
  dept: string;
  experience: {
    cohort: string;
    subRole:
      | 'Marketing'
      | 'Tech'
      | 'Event'
      | 'Mentor'
      | 'Marketing Team Lead'
      | 'Tech Team Lead'
      | 'Event Team Lead';
  }[];
  sideProjects: string[];
  certs: string[];
  links?: {
    linkedin?: string;
    story?: string;
  };
}

export const DIRECTORY: DirectoryPerson[] = [
  {
    name: '邱奕勳 Shiun Chiu',
    image: '/images/Ambassador/Shiun Chiu.png',
    school: '知名外商',
    dept: '',
    experience: [
      { cohort: '5th', subRole: 'Tech' },
      { cohort: '6th', subRole: 'Tech Team Lead' },
      { cohort: '7th', subRole: 'Mentor' },
      { cohort: '8th', subRole: 'Mentor' },
    ],
    sideProjects: [],
    certs: [],
    links: {
      linkedin: 'https://www.linkedin.com/in/shiunchiu',
      story:
        'https://medium.com/@shiunchiu.me/mentor-視角回顧-aws-educate-cloud-ambassador-大使計劃-40241223d36d',
    },
  },
  {
    name: '鍾至漢 Harry Chung',
    school: '知名外商',
    dept: '',
    experience: [
      { cohort: '6th', subRole: 'Tech' },
      { cohort: '7th', subRole: 'Tech Team Lead' },
      { cohort: '8th', subRole: 'Mentor' },
    ],
    sideProjects: [],
    certs: [],
    links: {
      linkedin: 'https://www.linkedin.com/in/chih-han-chung',
    },
  },
  {
    name: 'Tony',
    school: '知名台商',
    dept: '',
    experience: [
      { cohort: '6th', subRole: 'Tech' },
      { cohort: '7th', subRole: 'Tech Team Lead' },
      { cohort: '8th', subRole: 'Mentor' },
    ],
    sideProjects: [],
    certs: [],
    links: {
      linkedin: 'https://www.linkedin.com/in/tonywang1024/',
    },
  },
  {
    name: '廖珺安 Jingle Liao',
    school: 'University College London',
    dept: 'Creative and Collaborative Enterprise',
    experience: [
      { cohort: '7th', subRole: 'Marketing' },
      { cohort: '8th', subRole: 'Marketing Team Lead' },
    ],
    sideProjects: [],
    certs: [],
    links: {
      linkedin: 'https://www.linkedin.com/in/jun-an-jingle-liao-6b72b32a3/',
    },
  },
  {
    name: '莊詠淳 Tracy Chuang',
    school: '國立政治大學',
    dept: '國際經營與貿易學系',
    experience: [
      { cohort: '6th', subRole: 'Marketing' },
      { cohort: '7th', subRole: 'Marketing Team Lead' },
      { cohort: '8th', subRole: 'Marketing Team Lead' },
    ],
    sideProjects: [],
    certs: [],
  },
  {
    name: '蔡昕呈 Allison Tsai',
    image: '/images/Ambassador/Allison Tsai.png',
    school: '國立政治大學',
    dept: '經濟學系/金融科技專長學程',
    experience: [{ cohort: '8th', subRole: 'Marketing' }],
    sideProjects: ['DGR Program', 'Dev Team Official Website', 'Alumni stories Hub'],
    certs: ['AIF-C01', 'CLF-C02'],
    links: {
      linkedin: 'https://www.linkedin.com/in/allison-tsai-205702355/',
    },
  },
  {
    name: '陳儀珊 Selina Chen',
    image: '/images/Ambassador/Selina Chen.png',
    school: '國立台灣科技大學',
    dept: '管理學士班雙主修資訊管理系',
    experience: [{ cohort: '8th', subRole: 'Marketing' }],
    sideProjects: ['Dev Team Official Website', 'Alumni stories Hub'],
    certs: ['AIF-C01'],
    links: {
      linkedin: 'https://www.linkedin.com/in/selina-chen-050582170/',
      story:
        'https://medium.com/@yishan2004931022/aws-educate-cloud-ambassador-%E5%BF%83%E5%BE%97-cd6b3e031f78?postPublishedType=repub',
    },
  },
  {
    name: '李映嫻 Angela Li',
    image: '/images/Ambassador/Angela Li.png',
    school: '天主教輔仁大學',
    dept: '資訊管理學系',
    experience: [{ cohort: '8th', subRole: 'Tech' }],
    sideProjects: ['Dev Team Official Website', 'Alumni stories Hub'],
    certs: ['AIF-C01', 'CLF-C02'],
    links: {
      linkedin: 'https://www.linkedin.com/in/angeliii/',
    },
  },
  {
    name: '陳珊汝 Olivia Chen',
    school: '國立政治大學',
    dept: '企業管理研究所',
    experience: [{ cohort: '8th', subRole: 'Event' }],
    sideProjects: ['Dev Team Official Website'],
    certs: ['AIF-C01'],
    links: {
      linkedin: 'https://www.linkedin.com/in/selina-chen-050582170/',
    },
  },
  {
    name: '許惠心 Elma Syu',
    image: '/images/Ambassador/Elma Syu.png',
    school: '國立臺北大學',
    dept: '企業管理研究所',
    experience: [{ cohort: '8th', subRole: 'Marketing' }],
    sideProjects: ['DGR Program', 'Alumni stories Hub'],
    certs: [],
  },
  {
    name: '廖研伃 Seren Liao',
    image: '/images/Ambassador/Seren Liao.png',
    school: '國立中央大學',
    dept: '資訊管理學系',
    experience: [{ cohort: '8th', subRole: 'Tech' }],
    sideProjects: ['Dev Team TPET', 'Alumni stories Hub'],
    certs: ['AIF-C01', 'CLF-C02'],
    links: {
      linkedin: 'https://www.linkedin.com/in/yenyul/',
    },
  },
  {
    name: '毛羚芳 Kathy Mao',
    school: '國立臺灣大學',
    dept: '資訊管理學系',
    experience: [{ cohort: '8th', subRole: 'Event' }],
    sideProjects: ['Dev Team Official Website'],
    certs: [],
  },
  {
    name: '黃思恩 Jessie Huang',
    image: '/images/Ambassador/Jessie Huang.png',
    school: '國立台北大學',
    dept: '企業管理學系',
    experience: [{ cohort: '8th', subRole: 'Event' }],
    sideProjects: ['Alumni stories Hub'],
    certs: [],
  },
  {
    name: '張育鳳 Jessie Chang',
    image: '/images/Ambassador/Jessie Chang.png',
    school: '國立中正大學',
    dept: '外文系雙主修資訊管理學系',
    experience: [{ cohort: '8th', subRole: 'Event' }],
    sideProjects: ['Dev team Anti disinformation and fraud proposal'],
    certs: ['AIF-C01'],
    links: {
      linkedin: 'http://www.linkedin.com/in/jessie-chang-886485397',
    },
  },
  {
    name: '余芷葳 Ariel Yu',
    image: '/images/Ambassador/Ariel Yu.png',
    school: '國立政治大學',
    dept: '資管系',
    experience: [{ cohort: '8th', subRole: 'Tech' }],
    sideProjects: ['Dev Team TPET'],
    certs: [],
    links: {
      linkedin: 'https://www.linkedin.com/in/ariel-yu-183a66346/',
      story:
        'https://medium.com/@arielyu999/aws-educate-cloud-ambassador-%E9%9B%B2%E7%AB%AF%E4%B9%8B%E6%97%85-3445d4f58d20',
    },
  },
  {
    name: '陳璿修 Stanley Chen',
    school: '國立臺灣大學',
    dept: '資訊工程學系',
    experience: [{ cohort: '8th', subRole: 'Tech' }],
    sideProjects: ['Dev Team TPET'],
    certs: ['AIF-C01'],
  },
  {
    name: '陳俊瑋 Aaron Chen',
    image: '/images/Ambassador/Aaron Chen.png',
    school: '國立中央大學',
    dept: '資訊工程學系',
    experience: [{ cohort: '8th', subRole: 'Tech' }],
    sideProjects: ['Dev Team TPET', 'Alumni stories Hub'],
    certs: ['AIF-C01', 'CLF-C02'],
    links: {
      linkedin: 'https://www.linkedin.com/in/chun-wei-chen-494ab6354/',
    },
  },
  {
    name: '陳敬翰 Vincent Chen',
    image: '/images/Ambassador/Vincent Chen.png',
    school: '國立政治大學',
    dept: '資訊科學所',
    experience: [{ cohort: '8th', subRole: 'Tech' }],
    sideProjects: ['Dev Team TPET', 'Alumni stories Hub'],
    certs: [],
    links: {
      linkedin: 'https://www.linkedin.com/in/%E6%95%AC%E7%BF%B0-%E9%99%B3-15b727233/',
    },
  },
  {
    name: '蘇郁茗 Maggie Su',
    image: '/images/Ambassador/Maggie Su.png',
    school: '國立臺灣科技大學',
    dept: '企業管理學系',
    experience: [{ cohort: '8th', subRole: 'Event' }],
    sideProjects: ['Dev team Anti disinformation and fraud proposal'],
    certs: ['AIF-C01'],
    links: {
      linkedin: 'http://www.linkedin.com/in/maggie-ymsu',
    },
  },
  {
    name: '黃詠綺 Kiki Huang',
    school: '國立中央大學',
    dept: '資訊工程學系',
    experience: [
      { cohort: '7th', subRole: 'Tech' },
      { cohort: '8th', subRole: 'Tech Team Lead' },
    ],
    sideProjects: [],
    certs: ['AIF-C01', 'CLF-C02', 'SAA-C03'],
    links: {
      linkedin: 'https://www.linkedin.com/in/yung-chi-huang/',
      story:
        'https://medium.com/@hynnch1i/aws-eduacte-tw-cloud-ambassador-%E7%9A%84%E9%9B%B2%E7%AB%AF%E4%B9%8B%E6%97%85-79ded319d70b',
    },
  },
  {
    name: '吳哲丞 Reeve Wu',
    school: '國立臺北科技大學',
    dept: '資訊工程系',
    experience: [
      { cohort: '7th', subRole: 'Tech' },
      { cohort: '8th', subRole: 'Tech Team Lead' },
    ],
    sideProjects: [],
    certs: [],
    links: {
      linkedin: 'https://www.linkedin.com/in/reeve-wu/',
      story:
        'https://medium.com/@reeve0319/aws-educate-cloud-ambassador-%E7%B6%93%E9%A9%97%E5%88%86%E4%BA%AB-0927c5315a34',
    },
  },
  {
    name: '許雅筑 Sophia Hsu',
    school: '國立中山大學',
    dept: '行銷傳播研究所',
    experience: [{ cohort: '8th', subRole: 'Event' }],
    sideProjects: ['DGR Program', 'Dev Team Official Website', 'Alumni stories Hub'],
    certs: [],
  },
  {
    name: '王亭淇 Tiffany Wang',
    image: '/images/Ambassador/Tiffany Wang.png',
    school: '國立台北大學',
    dept: '會計系',
    experience: [
      { cohort: '7th', subRole: 'Event' },
      { cohort: '8th', subRole: 'Event Team Lead' },
    ],
    sideProjects: [],
    certs: ['AIF-C01', 'CLF-C02'],
    links: {
      linkedin: 'https://www.linkedin.com/in/ting-chi-wang/',
    },
  },
];
