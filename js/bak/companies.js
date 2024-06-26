/** 企業名單 */
const joint_signature_companies = [
  {
    name: "佛教慈濟醫療財團法人花蓮慈濟醫院",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/001.jpg",
    link: "https://hlm.tzuchi.com.tw/index.php/news/recruit/item/2216-talent-in-taiwan",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "智崴資訊科技股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/067.jpg",
    link: "https://www.brogent.com/zh-tw/bulletin.html",
    industries: ["科技業"],
    faceted_index: ["身心健康", "人才成長", "意義與價值"],
  },
  {
    name: "中華大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/065.jpg",
    link: "https://www.chu.edu.tw/p/406-1000-25286,r259.php?Lang=zh-tw",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "AIA友邦人壽",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/002.jpg",
    link: "https://www.aia.com.tw/zh-tw/about-aia/careers.html",
    industries: ["服務業"],
    faceted_index: ["組織溝通", "身心健康", "人才成長", "意義與價值"],
  },
  {
    name: "時碩工業",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/003.jpg",
    link: "http://www.globaltek.com.tw/%E6%99%82%E7%A2%A9%E5%B7%A5%E6%A5%AD%E5%8A%A0%E5%85%A5%E5%8F%B0%E7%81%A3%E4%BA%BA%E6%89%8D%E6%B0%B8%E7%BA%8C%E8%A1%8C%E5%8B%95%E8%81%AF%E7%9B%9F/",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "晨安企業",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/004.jpg",
    link: "https://www.facebook.com/AomoriBlackGarlic/photos/a.1759096227636855/3076009842612147/",
    industries: ["製造業"],
    faceted_index: ["人才成長", "意義與價值"],
  },
  {
    name: "緯凱工業有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/005.jpg",
    link: "https://way-kai.com/zh/talentintaiwanwk0113/",
    industries: ["製造業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "希華晶體科技",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/006.jpg",
    link: "https://www.siward.com.tw/tw/csr.php",
    industries: ["科技業"],
    faceted_index: ["人才成長"],
  },
  {
    name: "國立臺東大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/007.jpg",
    link: "https://enews.nttu.edu.tw/p/405-1045-118745,c4007.php",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "信義企業集團(信義房屋)",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/010.jpg",
    link: "https://hr.sinyi.com.tw/",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "吐司利亞國際餐飲",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/011.jpg",
    link: "https://www.facebook.com/toasteriacafe/photos/a.306137076114672/4944515225610144/",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "南亞科技",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/017.jpg",
    link: "https://www.nanya.com/en/",
    industries: ["科技業"],
    faceted_index: [
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "崑山科技大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/019.jpg",
    link: "https://www.facebook.com/ksu.edu.tw/posts/5156826127695765",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "致伸科技",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/018.jpg",
    link: "https://www.primax.com.tw/press-center/company-news?view=article&id=189:primax-electronics-ltd-officially-announced-to-join-the-talent-in-taiwan-taiwan-talent-sustainability-action-alliance&catid=15",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "宏正自動科技",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/014.jpg",
    link: "https://www.aten.com/tw/zh/campaign-page/talent-in-taiwan/",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "華夏玻璃",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/020.jpg",
    link: "https://www.hwahsiaglass.com/tw/news",
    industries: ["製造業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "久舜營造",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/012.jpg",
    link: "https://jioushun.com.tw/talent-in-taiwan2022/",
    industries: ["製造業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "台新金融控股",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/016.jpg",
    link: "https://tshr.taishinholdings.com.tw/About/Declar",
    industries: ["金融業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "台灣富士軟片資訊",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/013.jpg",
    link: " https://www.fujifilm.com/fbtw/zh-tw/company/important-notice/corporate-notice/2022/1/talent-in-taiwan",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "國立虎尾科技大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/021.jpg",
    link: "https://www.nfu.edu.tw/zh/approved-news-nfu/approved-news-nfu-news/8828-%E6%9C%AC%E6%A0%A1%E6%AD%A3%E5%BC%8F%E5%AE%A3%E5%B8%83%E5%8A%A0%E5%85%A5%E3%80%8Ctalent,-in-taiwan%EF%BC%8C%E5%8F%B0%E7%81%A3%E4%BA%BA%E6%89%8D%E6%B0%B8%E7%BA%8C%E8%A1%8C%E5%8B%95%E8%81%AF%E7%9B%9F%E3%80%8D",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "永智顧問",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/022.jpg",
    link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fycholdingsinc%2Fposts%2F470197108073313",
    industries: ["金融業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "宏全國際",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/023.jpg",
    link: "https://www.honchuan.com/tw/news/breaking-news",
    industries: ["製造業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "愛德華先進科技",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/024.jpg",
    link: "https://www.edwardsvacuum.com/zh-tw/about-us/news-and-events/talent-in-taiwan",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "安麗台灣",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/025.jpg",
    link: "https://www.amway.com.tw/amway_talent/amway_talent.html",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "美芝城實業",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/026.jpg",
    link: "https://www.macc.com.tw/news.php?act=view&id=84",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "明新科技大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/027.jpg",
    link: "https://www.facebook.com/mustminghsin/photos/a.582179621909841/4553115438149553",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "天下雜誌",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/028.jpg",
    link: " https://site.cwlearning.com.tw/events/talent/article/list.html#",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "豐睿創新",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/029.jpg",
    link: "https://abuntree.com.tw/%e6%ad%a3%e5%bc%8f%e5%ae%a3%e5%b8%83%e5%8a%a0%e5%85%a5%e3%80%8ctalent-in-taiwan%ef%bc%8c%e5%8f%b0%e7%81%a3%e4%ba%ba%e6%89%8d%e6%b0%b8%e7%ba%8c%e8%a1%8c%e5%8b%95%e8%81%af%e7%9b%9f%e3%80%8d/",
    industries: ["服務業"],
    faceted_index: ["獎酬激勵", "身心健康", "人才成長", "意義與價值"],
  },
  {
    name: "勤美集團",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/030.jpg",
    link: "https://www.facebook.com/355963068225730/posts/1274761319679229/?app=fbl",
    industries: ["製造業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "南華大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/031.jpg",
    link: "https://www.facebook.com/NHU.Taiwan/photos/a.478160745564576/4769780956402512/",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "緯創軟體",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/032.jpg",
    link: "https://www.wistronits.com/tw/news/2022-02-08/",
    industries: ["科技業"],
    faceted_index: ["多元與包容", "組織溝通", "人才成長"],
  },
  {
    name: "Ness Wellness",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/033.jpg",
    link: "https://www.linkedin.com/posts/nesswellness_iwxhuliiqmfo-cheersjelkbuiunhakhxe-talentabrinabrtaiwan-activity-6897347656398495744-BmEo/",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "中租控股股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/034.jpg",
    link: "https://www.facebook.com/186789711382208/posts/4994211987306599/?d=n",
    industries: ["金融業"],
    faceted_index: ["人才成長"],
  },
  {
    name: "崇越科技股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/035.jpg",
    link: "https://www.topco-global.com/archives/121531",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "理博農業生物科技有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/036.jpg",
    link: "http://www.reboot.com.tw/hot_416884.html",
    industries: ["科技業"],
    faceted_index: ["人才成長"],
  },
  {
    name: "秀傳醫療財團法人彰濱秀傳紀念醫院",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/037.jpg",
    link: "https://www.facebook.com/1695497484041928/posts/3098687410389588/?d=n",
    industries: ["服務業"],
    faceted_index: ["身心健康"],
  },
  {
    name: "三久建材工業股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/039.jpg",
    link: "https://www.sjtch.com.tw/news_list",
    industries: ["製造業"],
    faceted_index: ["多元與包容", "意義與價值"],
  },
  {
    name: "中華航空股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/040.jpg",
    link: "https://www.china-airlines.com/tw/zh/discover/news/press-release/20220216",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "長庚大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/041.jpg",
    link: "https://cgunews.cgu.edu.tw/p/404-1049-92477.php?Lang=zh-tw",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "和德昌股份有限公司(台灣麥當勞)",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/042.jpg",
    link: "https://www.facebook.com/taiwan.mcdonalds.all/posts/4806626999418831",
    industries: ["服務業"],
    faceted_index: ["多元與包容", "人才成長", "意義與價值"],
  },
  {
    name: "極限電競股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/043.jpg",
    link: "https://www.facebook.com/ExtremeEsportsTv/posts/1339397486499306",
    industries: ["服務業"],
    faceted_index: ["多元與包容", "身心健康", "意義與價值"],
  },
  {
    name: "宏威環球事業股份有限公司(品牌名稱：太陽人全民電廠)",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/044.jpg",
    link: "https://www.facebook.com/189053895206333/posts/1090838271694553/",
    industries: ["製造業"],
    faceted_index: ["多元與包容", "組織溝通", "獎酬激勵"],
  },
  {
    name: "巴拿馬商帝亞吉歐有限公司台灣分公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/045.jpg",
    link: "https://www.diageotwcsr.com/diageoCsr.php",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "國立東華大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/046.jpg",
    link: "https://www.facebook.com/ndhu.page/photos/a.363740828223/10158696306643224/",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "均豪精密工業股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/047.jpg",
    link: "https://www.gpmcorp.com.tw/enterprise_sustainable.php",
    industries: ["科技業"],
    faceted_index: ["身心健康"],
  },
  {
    name: "酩悅軒尼詩台灣 Moët Hennessy Taiwan",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/048.jpg",
    link: "https://www.104.com.tw/company/wj8pfvk",
    industries: ["服務業"],
    faceted_index: ["多元與包容", "人才成長"],
  },
  {
    name: "台灣雅瑪多國際物流股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/049.jpg",
    link: "https://www.yamato.com.tw/zh/talent_in_taiwan/",
    industries: ["服務業"],
    faceted_index: ["多元與包容", "身心健康", "人才成長"],
  },
  {
    name: "新加坡商鈦坦科技",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/050.jpg",
    link: "https://www.titansoft.com/tw/news/cwlearning-talent",
    industries: ["科技業"],
    faceted_index: [
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "安聯人壽保險股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/051.jpg",
    link: "https://www.allianz.com.tw/zh_TW/news-and-annoucement/allianz-annoucement.html#",
    industries: ["服務業"],
    faceted_index: ["多元與包容", "身心健康", "人才成長", "意義與價值"],
  },
  {
    name: "佳世達科技股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/052.jpg",
    link: "https://www.facebook.com/102482996462974/posts/5232894676755088/",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "建興儲存科技股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/053.jpg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6902923375870656512?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6902923375870656512%29",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "臺灣新光商業銀行股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/054.jpg",
    link: "https://www.skbank.com.tw/364fe61316.html?",
    industries: ["金融業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "文藻外語大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/055.jpg",
    link: "https://www.facebook.com/WenzaoUP/posts/5065673610164495",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "南茂科技股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/056.jpg",
    link: "https://www.chipmos.com/chinese/csr/ndetail.aspx?NID=72",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "廣運機械",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/057.jpg",
    link: "https://www.kenmec.com/tw/news-content.aspx?p=1&id=191&y=2022",
    industries: ["製造業"],
    faceted_index: ["獎酬激勵", "人才成長", "意義與價值"],
  },
  {
    name: "燁輝企業股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/058.jpg",
    link: "https://www.yiehphui.com.tw/upload/myfiles/news/TALENT_in_Taiwan(2022).pdf",
    industries: ["製造業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "Acer 宏碁",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/059.jpg",
    link: "https://www.acer-group.com/sustainability/zh",
    industries: ["科技業"],
    faceted_index: ["組織溝通", "身心健康"],
  },
  {
    name: "斜作股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/060.jpg",
    link: "https://www.facebook.com/slashstudio2020/photos/a.343850497252911/510781800559779",
    industries: ["服務業"],
    faceted_index: ["組織溝通", "人才成長", "意義與價值"],
  },
  {
    name: "和康生物科技股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/061.jpg",
    link: "https://www.linkedin.com/posts/maxigen-biotech-inc-_iwxhuliiqmfo-cheersjelkbuiunhakhxe-talentabrinabrtaiwan-activity-6902075975597735936-84EX/",
    industries: ["科技業"],
    faceted_index: ["獎酬激勵"],
  },
  {
    name: "國立臺中科技大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/062.jpg",
    link: "https://www.nutc.edu.tw/bin/home.php",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "遠雄人壽保險事業股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/063.jpg",
    link: "https://www.facebook.com/FGmember/posts/4709397969169106",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "大氣整合行銷股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/064.jpg",
    link: "https://www.dachi-pr.com/",
    industries: ["服務業"],
    faceted_index: ["人才成長"],
  },
  {
    name: "中華大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/065.jpg",
    link: "https://www.chu.edu.tw/p/406-1000-25286,r259.php?Lang=zh-tw",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "生命之星國際股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/066.jpg",
    link: "https://www.facebook.com/273964856278619/posts/1653135048361586/?d=n",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "智崴資訊科技股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/067.jpg",
    link: "https://www.brogent.com/zh-tw/bulletin.html",
    industries: ["科技業"],
    faceted_index: ["身心健康", "人才成長", "意義與價值"],
  },
  {
    name: "薩摩亞商竣邦國際股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/068.jpg",
    link: "https://www.facebook.com/100598375191088/posts/453737436543845/?d=n",
    industries: ["製造業"],
    faceted_index: ["組織溝通", "人才成長"],
  },
  {
    name: "臺灣納諾帕瑪股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/069.jpg",
    link: "https://www.facebook.com/105581608265647/posts/327176819439457/",
    industries: ["製造業"],
    faceted_index: [
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "宏岳國際有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/070.jpg",
    link: "https://www.facebook.com/hepingislandpark/posts/2153988671443120",
    industries: ["服務業"],
    faceted_index: ["多元與包容", "組織溝通", "人才成長", "意義與價值"],
  },
  {
    name: "欣陸投資控股股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/071.jpg",
    link: "https://www.continental-holdings.com/zh/csr/%e7%a4%be%e6%9c%83/#%E4%BA%BA%E6%89%8D%E6%B0%B8%E7%BA%8C%E5%AE%A3%E8%A8%80",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
    ],
  },
  {
    name: "大陸工程股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/073.jpg",
    link: "https://www.continental-holdings.com/zh/csr/%e7%a4%be%e6%9c%83/#%E4%BA%BA%E6%89%8D%E6%B0%B8%E7%BA%8C%E5%AE%A3%E8%A8%80",
    industries: ["製造業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
    ],
  },
  {
    name: "欣達環工股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/074.jpg",
    link: "https://www.continental-holdings.com/zh/csr/%e7%a4%be%e6%9c%83/#%E4%BA%BA%E6%89%8D%E6%B0%B8%E7%BA%8C%E5%AE%A3%E8%A8%80",
    industries: ["製造業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
    ],
  },
  {
    name: "英富霖諮詢有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/076.jpg",
    link: "https://www.facebook.com/infoLinkConsulting/photos/a.106479381358379/356254509714197",
    industries: ["服務業"],
    faceted_index: ["組織溝通", "人才成長", "意義與價值"],
  },
  {
    name: "台灣中外製藥股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/077.jpg",
    link: "https://www.chugai.com.tw/tw/news/4/60",
    industries: ["製造業"],
    faceted_index: [
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "友達光電",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/078.jpg",
    link: "https://www.facebook.com/AUOcareer/photos/a.655315761177429/7125057804203160/",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "中華開發金控",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/079.jpg",
    link: "https://www.cdfholding.com/zh-tw/career",
    industries: ["金融業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "慧榮科技",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/080.jpg",
    link: "https://www.linkedin.com/posts/siliconmotion_talent-activity-6909460851989118977-HYof/?utm_source=linkedin_share&utm_medium=member_desktop_web",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "信邦電子股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/081.jpg",
    link: "https://www.facebook.com/SINBONELECTRONICS/posts/334688608674928",
    industries: ["科技業"],
    faceted_index: ["多元與包容", "組織溝通", "人才成長", "意義與價值"],
  },
  {
    name: "亞太電信",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/082.jpg",
    link: "https://www.facebook.com/162174107155573/posts/5297269726979293/?d=n",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "台耀化學股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/083.jpg",
    link: "https://www.facebook.com/permalink.php?story_fbid=5232653423452663&id=861720680545981",
    industries: ["製造業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "中部汽車股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/084.jpg",
    link: "https://www.toyotacm.com.tw/toyota/TALENT_in_CM",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "遠傳電信股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/085.jpg",
    link: "https://corporate.fetnet.net/content/corp/tw/CSR/CSRManagement/CSRActivity/CSRActivity_content.html?uuid=1d669a5c-0731-455b-8dd4-bdeb89dbfbe0",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "亞洲大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/086.jpg",
    link: "https://www.facebook.com/AU.TW2001/posts/10160011956450802",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "龍華科技大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/087.jpg",
    link: "https://www.lhu.edu.tw/index2.asp",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "宇瞻科技股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/088.jpg",
    link: "https://www.apacer.com/zh/Csr/Detail/2022-apacer-esg-talent-in-taiwan",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "中國信託金融控股股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/089.jpg",
    link: "https://www.facebook.com/CTBCcareers/posts/5041079235986670",
    industries: ["金融業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "豐群水產股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/090.jpg",
    link: "https://fcf.com.tw/cn/fcf-joins-talent-in-taiwan-project-to-call-for-sustainable-talent-ecosystem/",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "台達電子",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/091.jpg",
    link: "https://www.facebook.com/deltacareer/posts/1833091810414472",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "宏碁資訊服務股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/092.jpg",
    link: "https://www.aceraeb.com/mainssl/modules/MySpace/BlogInfo.php?xmlid=7323",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "賽諾菲股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/093.jpg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6912201986616541184/",
    industries: ["製造業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "瀚宇彩晶股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/094.jpg",
    link: "https://www.hannstar.com/news-detail/160/",
    industries: ["製造業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "國泰金融控股股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/095.jpg",
    link: "https://www.cathayholdings.com/holdings/information-centre/intro/quarterly/299",
    industries: ["金融業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "義守大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/096.jpg",
    link: "https://www2.isu.edu.tw/2018/shownews_v01.php?id=145789&dept_id=2&dept_mno=642",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "創科資訊股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/097.jpg",
    link: "https://trunk-studio.com/talent/",
    industries: ["科技業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "淡江大學",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/098.jpg",
    link: "https://www.facebook.com/100063717494044/posts/382024890598091/?d=n",
    industries: ["學校"],
    faceted_index: [],
  },
  {
    name: "永豐金融控股股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/099.jpg",
    link: "https://www.facebook.com/155069867842135/posts/5628091680539899/?d=n",
    industries: ["金融業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "台灣睛姿股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/100.jpg",
    link: "https://www.facebook.com/jinstaiwan/posts/5000333656713963",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "星展（台灣）商業銀行股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/101.jpg",
    link: "https://www.104.com.tw/company/oct97rc",
    industries: ["金融業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "家褔股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/102.jpg",
    link: "https://www.carrefour.com.tw/career-development/",
    industries: ["服務業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "奇美實業股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/103.jpg",
    link: "https://www.chimeicorp.com/zh-TW/?page=article&id=623c136bfc216e969023b34b",
    industries: ["製造業"],
    faceted_index: [
      "多元與包容",
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
  {
    name: "艾斯移動股份有限公司",
    img: "https://site.cwlearning.com.tw/events/talent/assets/img/cosign/104.jpg",
    link: "https://www.eyesmedia.com.tw/news/press/%e8%89%be%e6%96%af%e7%a7%bb%e5%8b%95%e6%ad%a3%e5%bc%8f%e5%ae%a3%e5%b8%83%e5%8a%a0%e5%85%a5%e3%80%8ctalent-in-taiwan%ef%bc%8c%e5%8f%b0%e7%81%a3%e4%ba%ba%e6%89%8d%e6%b0%b8%e7%ba%8c%e8%a1%8c%e5%8b%95/",
    industries: ["服務業"],
    faceted_index: [
      "組織溝通",
      "獎酬激勵",
      "身心健康",
      "人才成長",
      "意義與價值",
    ],
  },
];

let select_industry = "所有產業";
let select_faceted_index = "所有構面指標";
/** 渲染企業名單 */
function renderCompaniesList(companies) {
  const companies_list = document.querySelector("#companies-list");
  const button_industry = document.querySelector("#button_industry");
  const button_faceted_index = document.querySelector("#button_faceted_index");
  const button_industry_items = document.querySelectorAll(
    "#button_industry ~ .dropdown-menu li a"
  );
  const button_faceted_index_items = document.querySelectorAll(
    "#button_faceted_index ~ .dropdown-menu li a"
  );
  let outputHTML = "";

  button_industry.innerText =
    select_industry === "所有產業" ? "五大產業別" : select_industry;
  button_faceted_index.innerText =
    select_faceted_index === "所有構面指標"
      ? "六大構面指標"
      : select_faceted_index;

  [].slice.call(button_industry_items).map(function (item) {
    item.classList.remove("active");
    if (item.innerText === select_industry) {
      item.classList.add("active");
    }
  });
  [].slice.call(button_faceted_index_items).map(function (item) {
    item.classList.remove("active");
    if (item.innerText === select_faceted_index) {
      item.classList.add("active");
    }
  });

  companies.map(function (company) {
    const companyHTML = getFilterCompanyHTML(company);
    if (companyHTML) {
      outputHTML += companyHTML;
    }
  });
  companies_list.innerHTML = outputHTML;
}

function getFilterCompanyHTML(company) {
  if (
    (company.industries &&
      company.industries.includes(select_industry) &&
      company.faceted_index &&
      company.faceted_index.includes(select_faceted_index)) ||
    (company.industries &&
      company.industries.includes(select_industry) &&
      select_faceted_index === "所有構面指標") ||
    (company.faceted_index &&
      company.faceted_index.includes(select_faceted_index) &&
      select_industry === "所有產業") ||
    (select_industry === "所有產業" && select_faceted_index === "所有構面指標")
  ) {
    let facetedIndexHTML = "";
    if (company.faceted_index && company.faceted_index.length !== 0) {
      company.faceted_index.map(function (index) {
        facetedIndexHTML += `
                                <span class="p-partlist__tag">${index}</span>
                            `;
      });
    }
    return `
                        <div class="p-partlist__item">
                            <a class="p-partlist__item--img" href="${company.link}" target="_blank" rel="noopener noreferrer">
                                <div class="imgWrap">
                                    <img src="${company.img}" alt="${company.name}">
                                </div>
                            </a>
                            <div class="p-partlist__item--text">
                                <h5>${company.name}</h5>
                                ${facetedIndexHTML}
                            </div>
                        </div>
                    `;
  } else {
    return null;
  }
}

renderCompaniesList(joint_signature_companies);
