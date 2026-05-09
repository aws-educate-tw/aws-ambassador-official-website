export interface CareerStep {
  id: string;
  text: string;
}

export interface AlumniProfile {
  name: string;
  title: string;
  tags: string[];
  image: string;
  highlights: string[];
  quote: string;
  careerPath: CareerStep[];
  interviewer: string;
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
        tags: ['數據決策', '國際化'],
        image: '/images/Stories/Han.png',
        highlights: [
          '政大國貿背景的科技轉型，從文法商領域跨足科技業',
          '勇於跳脫舒適圈，前進歐洲深耕數據科學',
          '國際移動力的實踐者，具備強大決心與國際化思維',
        ],
        quote:
          '很多答案都是做了之後才慢慢長出來的，很多事情沒有標準答案，妳不能等準備好才上場，而是必須在場上邊做邊學。',
        careerPath: [
          { id: '01', text: '曾任 AWS 台北辦公室 CS 團隊' },
          { id: '02', text: '零法文背景突圍法國 AI 軟體公司' },
          { id: '03', text: '於巴黎 Dataiku 負責數據導向的商務營運與策略' },
        ],
        interviewer: 'Allison, Elma',
      },
      Chloe: {
        name: 'Chloe Chang',
        title: '第一屆 AWS Educate 校園大使',
        tags: ['數據決策', '國際化'],
        image: '/images/Stories/Chloe.png',
        highlights: [
          '現任知名公司擔任資深產品分析師',
          '具備橫跨工業工程與資訊管理的跨領域專業背景',
          '第一屆 AWS Educate 校園大使，擅長以數據驅動影響力',
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
            text: '精準掌握營運效率與數據說故事的差異，成為技術與商業團隊間的關鍵翻譯官。',
          },
        ],
        interviewer: 'Selina, Jessie Huang',
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
        tags: ['數據決策', '國際化'],
        image: '/images/Stories/Shiun.png',
        highlights: [
          '深耕 Networking 與 Linux Kernel 等底層技術的外商雲端工程師',
          '擅長把艱澀的架構轉譯為小白也能吸收的知識',
          '穩扎穩打的「農兵派」實踐者，主張扎根基礎技術並善用 AI 工具',
        ],
        quote:
          '大使計畫是我技術職涯的加速器，它讓我學會將艱澀的雲端技術轉譯為影響力，了解不必等準備好才出發。',
        careerPath: [
          { id: '23', text: '憑藉一週內考取 SAA 證照，開啟連續四屆大使影響力' },
          { id: '24', text: '外商實戰應對高併發倒站壓力，轉型架構專家' },
          { id: '25', text: '獲邀至 K8s Summit 大型技術年會分享' },
        ],
        interviewer: 'Selina, Jessie Huang',
      },
      Aaron: {
        name: 'Aaron Huang',
        title: 'AWS Educate Taiwan 校園大使校友',
        tags: ['數據決策', '國際化'],
        image: '/images/Stories/Aaron.png',
        highlights: [
          '現任 AWS 專業服務團隊 ProServe 顧問，專注於 AI/ML 專案落地',
          '精準定位自我於「商業與技術的完美平衡」，具備強大跨領域溝通力',
          '擅長管理客戶期待與解決複雜的專案需求，具備高情商實戰經驗',
        ],
        quote:
          'AWS 校園大使計畫是我邁進頂尖外商的關鍵敲門磚。這段「從零到一」的經驗大幅訓練了我的自學與表達能力，成功開啟技術顧問的職涯旅程。',
        careerPath: [
          { id: '01', text: '碩一擔任大使，從零經驗自學雲端技術並成功擔綱專屬講師' },
          { id: '02', text: '曾任職於多間雲端廠商，具備深厚的售前、售後與顧問實務經驗' },
          { id: '03', text: '捨棄高薪售後客服職位，毅然重返 AWS 深耕專案實作' },
        ],
        interviewer: 'Allison, Elma',
      },
      許銘軒: {
        name: '許銘軒',
        title: 'AWS Educate Taiwan 校園大使校友',
        tags: ['數據決策', '國際化'],
        image: '/images/Stories/Hsuan.png',
        highlights: [
          '現任半導體廠 IT 工程師，以資管背景跨足智慧製造與半導體產業',
          '曾任第六屆校園大使技術組，代表大使與企業高層對談雲端應用',
          '擅長將複雜技術化繁為簡，致力於技術與人之間的溝通轉譯',
        ],
        quote:
          'AWS 校園大使是我第一次把技術帶出課堂、放到真實場景裡驗證的機會，從中累積的實戰經驗為後來進入業界打下了重要的基礎。',
        careerPath: [
          { id: '01', text: '擔任第六屆技術組大使，並與企業高層對談雲端實務應用' },
          { id: '02', text: '碩班期間參與機台預知保養與 LLM 教育訓練等產學合作專案' },
          { id: '03', text: '進入半導體產業，投入大型企業系統的開發與維護工作' },
        ],
        interviewer: 'Seren, Aaron, Selina',
      },
    },
  },
  cross: {
    title: '大使校友成功故事 -- 跨域學習經驗',
    subtitle: '打破科系邊界，玩出妳意想不到的跨界賽道！',
    alumni: {
      Sharon: {
        name: 'Sharon Chen',
        title: '第二屆 AWS Educate Taiwan 校園大使',
        tags: ['數據決策', '國際化'],
        image: '/images/Stories/Sharon.png',
        highlights: [
          '北教大語文創作系出身，以人文領域跨足外商科技業',
          '將語文系的訓練內化為職場實力，以精準溝通達成高效專案推進',
          '歷經微軟、獵頭、電商後鎖定雲端科技業，每段經歷皆成為養分',
        ],
        quote:
          '多方嘗試，找到自己的熱情所在。大使計畫讓我更確定對雲端產業的熱忱，也讓我學會以客戶角度出發思考。',
        careerPath: [
          { id: '01', text: '微軟實習期間考取 AI 與雲端基礎證照' },
          { id: '02', text: '擔任 AWS 校園大使，主動 Reach out HR 轉正' },
          { id: '03', text: '現任 Amazon Lab 126 營運專案經理' },
        ],
        interviewer: 'Sharon 訪談記錄（未標註具體大使姓名）', // 根據原始 code 補回
      },
      葉禹旋: {
        name: '葉禹旋',
        title: 'AWS Educate Taiwan 校園大使校友',
        tags: ['數據決策', '國際化'],
        image: '/images/Stories/Mina.png',
        highlights: [
          '政大資管背景出身，從技術端逐步探索至行銷與品牌領域',
          '勇於跨域與跨產業嘗試，持續從科技、電信到外商品牌拓展視野',
          '擅長將複雜技術轉譯成大眾易懂的內容，兼具數據邏輯與溝通力',
        ],
        quote: '我相信跨域不是從零開始，而是在一次次嘗試中，慢慢找到自己真正想投入的位置。',
        careerPath: [
          { id: '01', text: '大學時期由校園 App 專案後端開發轉向行銷，開啟跨域契機' },
          { id: '02', text: '曾任 Acer 性能行銷實習生與遠傳產品行銷實習生' },
          { id: '03', text: '現於 JTI 擔任 Brand Marketing Assistant，負責品牌行銷' },
        ],
        interviewer: 'Jessie Huang, Elma',
      },
      王柏詒: {
        name: '王柏詒',
        title: 'AWS Educate Taiwan 校園大使校友',
        tags: ['數據決策', '國際化'],
        image: '/images/Stories/Boyi.png',
        highlights: [
          '台大生物產業傳播暨發展學系背景，勇於跨領域學習',
          '從 AWS 校園大使到 AWS BD 再到 Marketing，積極探索多元職能',
          '具備整合與協作能力，能將資料分析技術應用於解決商業問題',
        ],
        quote:
          '真正的職涯方向來自於不斷探索、學習和適應，整合不同領域的協作能力，是 AI 時代中不容易被取代的關鍵。',
        careerPath: [
          { id: '01', text: '以第六屆大使為起點，後成為 AWS Strategic Programs BD 帶領大使計劃' },
          { id: '02', text: '轉任 AWS Field Marketing，負責 Startup 與 Developer 生態系相關專案' },
          { id: '03', text: '目前在創投公司 Mesh 擔任 Marketing，推動新創企業市場發展' },
        ],
        interviewer: 'Elma, Jessie Huang',
      },
    },
  },
};

export interface DirectoryPerson {
  name: string;
  school: string;
  dept: string;
  role: string;
  side: string;
  certs: string[];
}

export const DIRECTORY: DirectoryPerson[] = [
  {
    name: '邱奕勳 Shiun Chiu',
    school: '知名外商',
    dept: 'AWS Educate Taiwan Student Ambassador',
    role: '8th Mentor',
    side: '5th Tech, 6th Tech Lead, 7th Mentor',
    certs: [],
  },
  {
    name: '鍾至漢 Harry Chung',
    school: '知名外商',
    dept: 'AWS Educate Taiwan Student Ambassador',
    role: '8th Mentor',
    side: '6th Tech, 7th Tech Team Lead',
    certs: [],
  },
  {
    name: 'Tony',
    school: '知名台商',
    dept: 'AWS Educate Taiwan Student Ambassador',
    role: '8th Mentor',
    side: '6th Tech, 7th Tech Team Lead',
    certs: [],
  },
  {
    name: '廖珺安 Jingle Liao',
    school: 'University College London',
    dept: 'Creative and Collaborative Enterprise',
    role: 'AWS Educate Taiwan Student Ambassador',
    side: '',
    certs: [],
  },
  {
    name: '莊詠淳 Tracy Chuang',
    school: '國立政治大學',
    dept: '國際經營與貿易學系',
    role: '8th Marketing Team Lead',
    side: '6th Marketing, 7th Marketing Team Lead',
    certs: [],
  },
  {
    name: '蔡昕呈 Allison Tsai',
    school: '國立政治大學',
    dept: '經濟學系/金融科技專長學程',
    role: '8th Marketing',
    side: 'DGR Program, Dev Team Official Website...',
    certs: ['AIF-C01', 'CLF-C02'],
  },
  {
    name: '陳儀珊 Selina Chen',
    school: '國立台灣科技大學',
    dept: '管理學士班雙主修資訊管理系',
    role: '8th Marketing',
    side: 'Dev Team Official Website, Alumni stories Hub',
    certs: ['AIF-C01'],
  },
  {
    name: '李映嫻 Angela Li',
    school: '天主教輔仁大學',
    dept: '資訊管理學系',
    role: '8th Tech',
    side: 'Dev Team Official Website, Alumni stories Hub',
    certs: ['AIF-C01', 'CLF-C02'],
  },
  {
    name: '陳珊汝 Olivia Chen',
    school: '國立政治大學',
    dept: '企業管理研究所',
    role: '8th Event',
    side: 'DGR Program',
    certs: ['AIF-C01'],
  },
  {
    name: '許惠心 Elma Syu',
    school: '國立臺北大學',
    dept: '企業管理研究所',
    role: '8th Marketing',
    side: 'DGR Program, Alumni stories Hub',
    certs: ['AIF-C01'],
  },
  {
    name: '廖研伃 Seren Liao',
    school: '國立中央大學',
    dept: '資管系',
    role: '8th Tech',
    side: 'Dev Team TPET, Alumni stories Hub',
    certs: ['AIF-C01', 'CLF-C02'],
  },
  {
    name: '毛羚芳 Kathy Mao',
    school: '國立臺灣大學',
    dept: '資訊管理系',
    role: '8th Event',
    side: 'Dev Team Official Website',
    certs: [],
  },
  {
    name: '黃思恩 Jessie Huang',
    school: '國立台北大學',
    dept: '企管系',
    role: '8th Event',
    side: 'Alumni stories Hub',
    certs: [],
  },
  {
    name: '張育鳳 Jessie Chang',
    school: '國立中正大學',
    dept: '外文系/雙資管系',
    role: '8th Event',
    side: 'Dev team Anti disinformation and fraud proposal',
    certs: ['AIF-C01'],
  },
  {
    name: '余芷葳 Ariel Yu',
    school: '國立政治大學',
    dept: '資管系',
    role: '8th Tech',
    side: 'Dev Team TPET',
    certs: [],
  },
  {
    name: '陳璿修 Stanley Chen',
    school: '國立臺灣大學',
    dept: '資訊工程學系',
    role: '8th Tech',
    side: 'Dev Team TPET',
    certs: ['AIF-C01'],
  },
  {
    name: '陳敬翰 Vincent Chen',
    school: '國立政治大學',
    dept: '資訊科學所',
    role: '8th Tech',
    side: 'Dev Team TPET, Alumni stories Hub',
    certs: [],
  },
  {
    name: '蘇郁茗 Maggie Su',
    school: '國立臺灣科技大學',
    dept: '企管系',
    role: '8th Event',
    side: 'Dev team Anti disinformation and fraud proposal',
    certs: ['AIF-C01'],
  },
  {
    name: '黃詠綺 Kiki Huang',
    school: '國立中央大學',
    dept: '資工系',
    role: '8th Tech Team Lead',
    side: '7th Tech',
    certs: ['AIF-C01', 'CLF-C02', 'SAA-C03'],
  },
  {
    name: '吳哲丞 Reeve Wu',
    school: '國立臺北科技大學',
    dept: '資訊工程系',
    role: '8th Tech Team Lead',
    side: '7th Tech',
    certs: [],
  },
  {
    name: '許雅筑 Sophia Hsu',
    school: '國立中山大學',
    dept: '行銷傳播研究所',
    role: '8th Marketing',
    side: 'DGR Program, Dev Team Official Website, Alumni stories Hub',
    certs: [],
  },
];
