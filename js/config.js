// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台 - 完整开放版',
    logo: 'https://images.icon-icons.com/38/PNG/512/retrotv_5520.png',
    version: '1.0.4'  // 版本更新
};

// ========== 扩展的API站点配置 - 完全开放所有内容源 ==========
const API_SITES = {
    // ========== 主流影视内容源 (TV) ==========
    "1080zyku": {
        api: "https://api.1080zyku.com/inc/api_mac10.php",
        name: "TV-1080资源",
        detail: "https://api.1080zyku.com",
        category: "tv",
        type: "general"
    },
    "360zy": {
        api: "https://360zy.com/api.php/provide/vod",
        name: "TV-360资源",
        detail: "https://360zy.com",
        category: "tv",
        type: "general"
    },
    "ckzy": {
        api: "https://ckzy.me/api.php/provide/vod",
        name: "TV-CK资源",
        detail: "https://ckzy.me",
        category: "tv",
        type: "general"
    },
    "ukuapi": {
        api: "https://api.ukuapi.com/api.php/provide/vod",
        name: "TV-U酷资源",
        detail: "https://api.ukuapi.com",
        category: "tv",
        type: "general"
    },
    "ukuapi88": {
        api: "https://api.ukuapi88.com/api.php/provide/vod",
        name: "TV-U酷资源88",
        detail: "https://api.ukuapi88.com",
        category: "tv",
        type: "general"
    },
    "ikunzy": {
        api: "https://ikunzyapi.com/api.php/provide/vod",
        name: "TV-ikun资源",
        detail: "https://ikunzyapi.com",
        category: "tv",
        type: "general"
    },
    "wujinapi_cc": {
        api: "https://api.wujinapi.cc/api.php/provide/vod",
        name: "TV-wujinapi无尽",
        detail: "",
        category: "tv",
        type: "general"
    },
    "yayazy": {
        api: "https://cj.yayazy.net/api.php/provide/vod",
        name: "TV-丫丫点播",
        detail: "https://cj.yayazy.net",
        category: "tv",
        type: "general"
    },
    "guangsuapi": {
        api: "https://api.guangsuapi.com/api.php/provide/vod",
        name: "TV-光速资源",
        detail: "https://api.guangsuapi.com",
        category: "tv",
        type: "general"
    },
    "wolongzyw": {
        api: "https://collect.wolongzyw.com/api.php/provide/vod",
        name: "TV-卧龙点播",
        detail: "https://collect.wolongzyw.com",
        category: "tv",
        type: "general"
    },
    "wolongzy_cc": {
        api: "https://collect.wolongzy.cc/api.php/provide/vod",
        name: "TV-卧龙资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "wolongzyw_com": {
        api: "https://wolongzyw.com/api.php/provide/vod",
        name: "TV-卧龙资源",
        detail: "https://wolongzyw.com",
        category: "tv",
        type: "general"
    },
    "tyyszy": {
        api: "https://tyyszy.com/api.php/provide/vod",
        name: "TV-天涯资源",
        detail: "https://tyyszy.com",
        category: "tv",
        type: "general"
    },
    "rycjapi": {
        api: "https://cj.rycjapi.com/api.php/provide/vod",
        name: "TV-如意资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "xiaomaomi": {
        api: "https://zy.xmm.hk/api.php/provide/vod",
        name: "TV-小猫咪资源",
        detail: "https://zy.xmm.hk",
        category: "tv",
        type: "general"
    },
    "xinlangapi": {
        api: "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
        name: "TV-新浪点播",
        detail: "https://api.xinlangapi.com",
        category: "tv",
        type: "general"
    },
    "wujinapi_com": {
        api: "https://api.wujinapi.com/api.php/provide/vod",
        name: "TV-无尽资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "wujinapi_me": {
        api: "https://api.wujinapi.me/api.php/provide/vod",
        name: "TV-无尽资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "wujinapi_net": {
        api: "https://api.wujinapi.net/api.php/provide/vod",
        name: "TV-无尽资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "wwzy": {
        api: "https://wwzy.tv/api.php/provide/vod",
        name: "TV-旺旺短剧",
        detail: "https://wwzy.tv",
        category: "short",
        type: "general"
    },
    "wwzy_api": {
        api: "https://api.wwzy.tv/api.php/provide/vod",
        name: "TV-旺旺资源",
        detail: "https://api.wwzy.tv",
        category: "short",
        type: "general"
    },
    "bfzyapi": {
        api: "https://bfzyapi.com/api.php/provide/vod",
        name: "TV-暴风资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "zuidazy": {
        api: "http://zuidazy.me/api.php/provide/vod",
        name: "TV-最大点播",
        detail: "http://zuidazy.me",
        category: "tv",
        type: "general"
    },
    "zuidapi": {
        api: "https://api.zuidapi.com/api.php/provide/vod",
        name: "TV-最大资源",
        detail: "https://api.zuidapi.com",
        category: "tv",
        type: "general"
    },
    "apiyhzy": {
        api: "https://m3u8.apiyhzy.com/api.php/provide/vod",
        name: "TV-樱花资源",
        detail: "",
        category: "anime",
        type: "general"
    },
    "yparse": {
        api: "https://api.yparse.com/api/json",
        name: "TV-步步高资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "niuniuzy": {
        api: "https://api.niuniuzy.me/api.php/provide/vod",
        name: "TV-牛牛点播",
        detail: "https://api.niuniuzy.me",
        category: "tv",
        type: "general"
    },
    "dyttzyapi": {
        api: "http://caiji.dyttzyapi.com/api.php/provide/vod",
        name: "TV-电影天堂资源",
        detail: "http://caiji.dyttzyapi.com",
        category: "movie",
        type: "general"
    },
    "apibdzy": {
        api: "https://api.apibdzy.com/api.php/provide/vod",
        name: "TV-百度云资源",
        detail: "https://api.apibdzy.com",
        category: "tv",
        type: "general"
    },
    "1080zyku_json": {
        api: "https://api.1080zyku.com/inc/apijson.php/",
        name: "TV-神马云",
        detail: "https://api.1080zyku.com",
        category: "tv",
        type: "general"
    },
    "suoniapi": {
        api: "https://suoniapi.com/api.php/provide/vod",
        name: "TV-索尼资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "hongniuzy2": {
        api: "https://www.hongniuzy2.com/api.php/provide/vod",
        name: "TV-红牛资源",
        detail: "https://www.hongniuzy2.com",
        category: "tv",
        type: "general"
    },
    "maotaizy": {
        api: "https://caiji.maotaizy.cc/api.php/provide/vod",
        name: "TV-茅台资源",
        detail: "https://caiji.maotaizy.cc",
        category: "tv",
        type: "general"
    },
    "huyaapi": {
        api: "https://www.huyaapi.com/api.php/provide/vod",
        name: "TV-虎牙资源",
        detail: "https://www.huyaapi.com",
        category: "short",
        type: "general"
    },
    "dbzy_caiji": {
        api: "https://caiji.dbzy.tv/api.php/provide/vod",
        name: "TV-豆瓣资源",
        detail: "https://caiji.dbzy.tv",
        category: "tv",
        type: "general"
    },
    "dbzy": {
        api: "https://dbzy.tv/api.php/provide/vod",
        name: "TV-豆瓣资源",
        detail: "https://dbzy.tv",
        category: "tv",
        type: "general"
    },
    "hhzyapi": {
        api: "https://hhzyapi.com/api.php/provide/vod",
        name: "TV-豪华资源",
        detail: "https://hhzyapi.com",
        category: "tv",
        type: "general"
    },
    "subocaiji": {
        api: "https://subocaiji.com/api.php/provide/vod",
        name: "TV-速博资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "lziapi": {
        api: "https://cj.lziapi.com/api.php/provide/vod",
        name: "TV-量子资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "jinyingzy": {
        api: "https://jinyingzy.com/api.php/provide/vod",
        name: "TV-金鹰点播",
        detail: "https://jinyingzy.com",
        category: "tv",
        type: "general"
    },
    "jyzyapi": {
        api: "https://jyzyapi.com/api.php/provide/vod",
        name: "TV-金鹰资源",
        detail: "https://jyzyapi.com",
        category: "tv",
        type: "general"
    },
    "sdzyapi": {
        api: "https://sdzyapi.com/api.php/provide/vod",
        name: "TV-闪电资源",
        detail: "https://sdzyapi.com",
        category: "tv",
        type: "general"
    },
    "ffzyapi": {
        api: "https://cj.ffzyapi.com/api.php/provide/vod",
        name: "TV-非凡资源",
        detail: "https://cj.ffzyapi.com",
        category: "tv",
        type: "general"
    },
    "p2100": {
        api: "https://p2100.net/api.php/provide/vod",
        name: "TV-飘零资源",
        detail: "https://p2100.net",
        category: "tv",
        type: "general"
    },
    "mozhuazy": {
        api: "https://mozhuazy.com/api.php/provide/vod",
        name: "TV-魔爪资源",
        detail: "https://mozhuazy.com",
        category: "tv",
        type: "general"
    },
    "moduapi": {
        api: "https://caiji.moduapi.cc/api.php/provide/vod",
        name: "TV-魔都动漫",
        detail: "https://caiji.moduapi.cc",
        category: "anime",
        type: "general"
    },
    "mdzyapi": {
        api: "https://www.mdzyapi.com/api.php/provide/vod",
        name: "TV-魔都资源",
        detail: "https://www.mdzyapi.com",
        category: "tv",
        type: "general"
    },
    "heimuer": {
        api: "https://json.heimuer.xyz/api.php/provide/vod",
        name: "TV-黑木耳",
        detail: "https://json.heimuer.xyz",
        category: "tv",
        type: "general"
    },
    "heimuer02": {
        api: "https://json02.heimuer.xyz/api.php/provide/vod",
        name: "TV-黑木耳点播",
        detail: "https://json02.heimuer.xyz",
        category: "tv",
        type: "general"
    },
    "ffzynew": {
        api: "https://api.ffzyapi.com/api.php/provide/vod",
        name: "非凡影视new",
        detail: "http://ffzy5.tv",
        category: "tv",
        type: "general"
    },
    "jszyapi": {
        api: "https://jszyapi.com/api.php/provide/vod",
        name: "极速资源",
        detail: "https://jszyapi.com",
        category: "tv",
        type: "general"
    },
    "aiduanju": {
        api: "https://www.aiduanju.cc/",
        name: "爱短剧.cc",
        detail: "",
        category: "short",
        type: "general"
    },
    "huawei8": {
        api: "https://huawei8.live/api.php/provide/vod",
        name: "华为吧资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "taopianapi": {
        api: "https://taopianapi.com/cjapi/sda/vod",
        name: "淘片资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "hongniuzy3": {
        api: "https://www.hongniuzy3.com/api.php/provide/vod",
        name: "红牛资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "xsd_sdzyapi": {
        api: "https://xsd.sdzyapi.com/api.php/provide/vod",
        name: "索尼-闪电资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "jyzyapi_provide": {
        api: "https://jyzyapi.com/provide/vod",
        name: "金鹰资源采集网",
        detail: "",
        category: "tv",
        type: "general"
    },
    "fczy888": {
        api: "https://api.fczy888.me/api.php/provide/vod",
        name: "蜂巢片库",
        detail: "",
        category: "tv",
        type: "general"
    },
    "jmzy": {
        api: "https://api.jmzy.com/api.php/provide/vod",
        name: "金马资源网",
        detail: "",
        category: "tv",
        type: "general"
    },
    "dadiapi": {
        api: "https://dadiapi.com/api.php/provide/vod",
        name: "大地资源网络",
        detail: "",
        category: "tv",
        type: "general"
    },
    "xiaojizy": {
        api: "https://api.xiaojizy.live/provide/vod",
        name: "小鸡资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "kuaichezy": {
        api: "https://caiji.kuaichezy.org/api.php/provide",
        name: "快车资源阿",
        detail: "",
        category: "tv",
        type: "general"
    },
    "xinlangapi_provide": {
        api: "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
        name: "新浪资源阿",
        detail: "",
        category: "tv",
        type: "general"
    },
    "apilj_provide": {
        api: "https://apilj.com/api.php/provide",
        name: "辣椒资源黄黄",
        detail: "",
        category: "adult",
        type: "adult"
    },
    "yzzy_api": {
        api: "https://api.yzzy-api.com/inc/ldg_api_all.php/provide/vod",
        name: "优质资源库1080zyk6.com高清",
        detail: "",
        category: "tv",
        type: "general"
    },
    "iqiyizyapi": {
        api: "https://www.iqiyizyapi.com/api.php/provide/vod",
        name: "iqiyi资源",
        detail: "",
        category: "tv",
        type: "general"
    },
    "xxibaozyw": {
        api: "https://www.xxibaozyw.com/api.php/provide/vod",
        name: "细胞采集黄色",
        detail: "",
        category: "adult",
        type: "adult"
    },
    "qiqidys": {
        api: "https://www.qiqidys.com/api.php/provide/vod/",
        name: "七七影视",
        detail: "",
        category: "tv",
        type: "general"
    },

    // ========== 成人内容源 (AV) - 完全开放 ==========
    "155api": {
        api: "https://155api.com/api.php/provide/vod",
        name: "AV-155资源",
        detail: "https://155api.com",
        category: "adult",
        type: "adult",
        priority: 1  // 高优先级
    },
    "bwzyz": {
        api: "https://api.bwzyz.com/api.php/provide/vod",
        name: "AV-百万资源",
        detail: "https://api.bwzyz.com",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "91md": {
        api: "https://91md.me/api.php/provide/vod",
        name: "AV-91麻豆",
        detail: "https://91md.me",
        category: "adult",
        type: "adult",
        priority: 2
    },
    "lbapiby": {
        api: "http://lbapiby.com/api.php/provide/vod",
        name: "AV-AIvin",
        detail: "",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "jkunzyapi": {
        api: "https://jkunzyapi.com/api.php/provide/vod",
        name: "AV-JKUN资源",
        detail: "https://jkunzyapi.com",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "souavzy": {
        api: "https://api.souavzy.vip/api.php/provide/vod",
        name: "AV-souav资源",
        detail: "https://api.souavzy.vip",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "lbapi9": {
        api: "https://lbapi9.com/api.php/provide/vod",
        name: "AV-乐播资源",
        detail: "",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "aosikazy": {
        api: "https://aosikazy.com/api.php/provide/vod",
        name: "AV-奥斯卡资源",
        detail: "https://aosikazy.com",
        category: "adult",
        type: "adult",
        priority: 2
    },
    "naixxzy": {
        api: "https://Naixxzy.com/api.php/provide/vod",
        name: "AV-奶香香",
        detail: "https://Naixxzy.com",
        category: "adult",
        type: "adult",
        priority: 2
    },
    "slapibf": {
        api: "https://slapibf.com/api.php/provide/vod",
        name: "AV-森林资源",
        detail: "https://slapibf.com",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "xrbsp": {
        api: "https://www.xrbsp.com/api/json.php",
        name: "AV-淫水机资源",
        detail: "https://www.xrbsp.com",
        category: "adult",
        type: "adult",
        priority: 2
    },
    "apiyutu": {
        api: "https://apiyutu.com/api.php/provide/vod",
        name: "AV-玉兔资源",
        detail: "https://apiyutu.com",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "fhapi9": {
        api: "http://fhapi9.com/api.php/provide/vod",
        name: "AV-番号资源",
        detail: "",
        category: "adult",
        type: "adult",
        priority: 2
    },
    "kxgav": {
        api: "https://www.kxgav.com/api/json.php",
        name: "AV-白嫖资源",
        detail: "https://www.kxgav.com",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "jingpinx": {
        api: "https://www.jingpinx.com/api.php/provide/vod",
        name: "AV-精品资源",
        detail: "https://www.jingpinx.com",
        category: "adult",
        type: "adult",
        priority: 2
    },
    "msnii": {
        api: "https://www.msnii.com/api/json.php",
        name: "AV-美少女资源",
        detail: "https://www.msnii.com",
        category: "adult",
        type: "adult",
        priority: 2
    },
    "apilsbzy1": {
        api: "https://apilsbzy1.com/api.php/provide/vod",
        name: "AV-老色逼资源",
        detail: "https://apilsbzy1.com",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "sexnguon": {
        api: "https://api.sexnguon.com/api.php/provide/vod",
        name: "AV-色嗨国",
        detail: "https://api.sexnguon.com",
        category: "adult",
        type: "adult",
        priority: 2
    },
    "maozyapi": {
        api: "https://api.maozyapi.com/inc/apijson_vod.php",
        name: "AV-色猫资源",
        detail: "https://api.maozyapi.com",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "apilj": {
        api: "https://apilj.com/api.php/provide/vod",
        name: "AV-辣椒资源",
        detail: "https://apilj.com",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "gdlsp": {
        api: "https://www.gdlsp.com/api/json.php",
        name: "AV-香奶儿资源",
        detail: "https://www.gdlsp.com",
        category: "adult",
        type: "adult",
        priority: 2
    },
    "shayuapi": {
        api: "https://shayuapi.com/api.php/provide/vod",
        name: "AV-鲨鱼资源",
        detail: "https://shayuapi.com",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "pgxdy": {
        api: "https://www.pgxdy.com/api/json.php",
        name: "AV-黄AV资源",
        detail: "https://www.pgxdy.com",
        category: "adult",
        type: "adult",
        priority: 2
    },
    "gayapi": {
        api: "https://gayapi.com/api.php/provide/vod",
        name: "快播资源网站",
        detail: "",
        category: "adult",
        type: "adult",
        priority: 1
    },
    "xingba111": {
        api: "https://xingba111.com/api.php/provide/vod",
        name: "性吧资源",
        detail: "",
        category: "adult",
        type: "adult",
        priority: 2
    },
    "hsckzy888": {
        api: "https://hsckzy888.com/api.php/provide/vod",
        name: "黄色资源啊啊",
        detail: "",
        category: "adult",
        type: "adult",
        priority: 1
    }
};

// 添加聚合搜索的配置选项 - 增强版
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             
    timeout: 8000,            
    maxResults: 20000,         // 增加最大结果数量
    parallelRequests: true,   
    showSourceBadges: true,    
    cacheTime: 7200,           // 缓存时间（秒）
    
    // 成人内容配置 - 完全开放
    adultContent: {
        enabled: true,           
        requireVerification: false, 
        separateTab: false,      
        filterSensitiveWords: false, 
        includeInGeneralSearch: true, 
        priorityBoost: 1,        // 轻微提升成人内容优先级
        maxAdultResults: 5000    // 每个搜索最多返回5000个成人结果
    },
    
    // 新增：源质量配置
    sourceQuality: {
        highPriority: ['155api', 'jkunzyapi', 'souavzy', 'bwzyz', '91md'], // 高质量源
        mediumPriority: ['ckzy', 'apilsbzy1', 'maozyapi'], // 中等质量源
        backupPriority: [] // 备用源
    }
};

// 抽象API请求配置 - 统一接口
const API_CONFIG = {
    search: {
        path: '/api.php/provide/vod/?ac=videolist&wd=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json',
            'Referer': 'https://libretv.is-an.org'
        }
    },
    detail: {
        path: '/api.php/provide/vod/?ac=detail&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json',
            'Referer': 'https://libretv.is-an.org'
        }
    },
    // 新增：分类浏览配置
    category: {
        path: '/api.php/provide/vod/?ac=videolist&t=',
        headers: API_CONFIG.search.headers
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置 - 增强版
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled', // 存储广告过滤设置的键名
    
    // 成人内容播放配置 - 完全开放
    adultContent: {
        blurPreview: false,      
        ageGate: false,          
        safeSearch: false,       
        contentWarning: false,   
        autoPlay: true,          
        enhancedQuality: true,   
        seamlessIntegration: true,
        // 新增：成人内容增强功能
        quickLoad: true,         // 快速加载
        highResPriority: true,   // 高分辨率优先
        adaptiveQuality: true    // 自适应质量
    },
    
    // 新增：批量源切换配置
    sourceSwitching: {
        enabled: true,
        maxRetries: 3,
        autoSwitch: true,
        preferredFormats: ['m3u8', 'mp4', 'flv']
    }
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试',
    SOURCE_UNAVAILABLE: '当前源暂时不可用，正在切换到其他源...',
    TOO_MANY_RESULTS: '结果过多，已限制显示前20000个'
};

// 添加进一步安全设置 - 最小化限制
const SECURITY_CONFIG = {
    enableXSSProtection: true,  
    sanitizeUrls: true,         
    maxQueryLength: 200,         // 增加查询长度限制
    
    // 成人内容安全设置 - 完全开放
    adultContent: {
        enabled: true,            
        ageVerification: false,   
        geoRestriction: false,    
        contentModeration: false, 
        userConsent: false,       
        storageKey: null,         
        consentExpiry: 0          
    }
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           
    maxSources: 10,            // 增加最大自定义源数量
    testTimeout: 5000,        
    namePrefix: 'Custom-',    
    validateUrl: true,        
    cacheResults: true,       
    cacheExpiry: 5184000000,  
    adultPropName: null       
};

// 完全开放内置成人内容API
const HIDE_BUILTIN_ADULT_APIS = false;

// ========== 增强的成人内容配置 ==========
const ADULT_CONTENT_CONFIG = {
    // 年龄验证配置 - 完全禁用
    ageVerification: {
        minAge: 0,               
        methods: [],             
        storageKey: null,        
        expiry: 0,               
        modalTitle: null,        
        modalMessage: null       
    },
    
    // 内容分类 - 与普通内容合并
    categories: {
        adult: {
            icon: '🔥',          
            color: '#FF5722',    
            keywords: [],        
            hidden: false,       
            promoted: true,      
            maxResults: 5000     // 每个分类最多5000个结果
        }
    },
    
    // 过滤规则 - 完全移除
    filtering: {
        sensitiveWords: [],      
        whitelistDomains: [],    
        blacklistDomains: [],    
        enabled: false           
    },
    
    // UI配置 - 完全开放显示
    ui: {
        warningBanner: false,    
        blurThumbnails: false,   
        separateSection: false,  
        toggleSwitch: false,     
        parentalControls: false,
        // 新增：增强显示
        highlightAdult: true,     // 高亮显示成人内容
        quickAccess: true,        // 快速访问按钮
        featuredSection: true     // 特色成人内容区域
    },
    
    // 统计和监控 - 完全开放
    analytics: {
        trackViews: true,        
        anonymize: false,        
        maxHistory: 100          // 增加历史记录限制
    }
};

// ========== 扩展的内容分类管理 ==========
const CONTENT_CATEGORIES = {
    all: {                    
        name: '全部内容',
        icon: '🎬',
        color: '#4CAF50',
        sources: Object.keys(API_SITES), 
        description: '包含所有类型的内容，无任何限制',
        resultLimit: 20000
    },
    movie: {
        name: '电影',
        icon: '🎥',
        color: '#2196F3',
        sources: [
            'dyttzyapi', '1080zyku', 'yayazy', 'guangsuapi', 
            '155api', 'bwzyz', '91md', 'jkunzyapi'
        ], 
        description: '各种电影，包括成人电影',
        resultLimit: 5000
    },
    tv: {
        name: '电视剧',
        icon: '📺',
        color: '#FF9800',
        sources: [
            'rycjapi', 'bfzyapi', 'zuidapi', 'apibdzy', 
            'dbzy', 'dbzy_caiji', 'souavzy', 'lbapi9'
        ], 
        description: '各种电视剧，包括成人剧集',
        resultLimit: 5000
    },
    anime: {
        name: '动漫',
        icon: '🎌',
        color: '#9C27B0',
        sources: [
            'apiyhzy', 'moduapi', 'mdzyapi', 
            'aosikazy', 'naixxzy'
        ], 
        description: '各种动漫，包括成人动漫',
        resultLimit: 3000
    },
    short: {
        name: '短视频',
        icon: '📱',
        color: '#00BCD4',
        sources: [
            'wwzy', 'wwzy_api', 'huyaapi', 'aiduanju',
            'slapibf', 'xrbsp', 'apiyutu'
        ], 
        description: '各种短视频，包括成人短片',
        resultLimit: 3000
    },
    adult: {
        name: '成人专区',
        icon: '🔥',
        color: '#f44336',
        sources: [
            '155api', 'bwzyz', '91md', 'lbapiby', 'jkunzyapi', 
            'souavzy', 'lbapi9', 'aosikazy', 'naixxzy', 'slapibf',
            'xrbsp', 'apiyutu', 'fhapi9', 'kxgav', 'jingpinx',
            'msnii', 'apilsbzy1', 'sexnguon', 'maozyapi', 'apilj',
            'gdlsp', 'shayuapi', 'pgxdy', 'gayapi', 'xingba111',
            'hsckzy888', 'xxibaozyw', 'apilj_provide'
        ],
        description: '专业成人内容，无任何限制',
        resultLimit: 10000,
        featured: true  // 特色分类
    }
};

// ========== 增强的用户偏好配置 ==========
const USER_PREFERENCES = {
    adultContent: {
        enabled: true,           
        verified: true,          
        lastAccess: Date.now(),  
        autoEnable: true,        
        preferredCategories: ['adult', 'movie'], // 默认偏好
        maxAdultResults: 5000    // 最大成人结果数
    },
    search: {
        safeSearch: false,       
        adultFilter: false,      
        historyAdult: true,      
        adultPriority: true,     
        maxResults: 20000,       // 最大搜索结果
        autoAggregate: true      // 自动聚合搜索
    },
    playback: {
        adultAutoPlay: true,     
        quality: 'highest',      
        crossCategoryPlay: true,
        // 新增：播放增强
        rememberPosition: true,
        speedControl: true,
        pictureInPicture: true
    },
    general: {
        contentMixing: true,     
        noRestrictions: true,    
        enhancedAdult: true,
        // 新增：界面偏好
        theme: 'dark',
        language: 'zh-CN',
        resultLayout: 'grid'
    },
    sources: {
        enabledSources: Object.keys(API_SITES), // 默认启用所有源
        favoriteSources: ['155api', 'jkunzyapi', 'souavzy', 'rycjapi', 'bfzyapi']
    }
};

// ========== 增强的工具函数 ==========
function getAllSources() {
    return Object.entries(API_SITES)
        .map(([key, config]) => ({ key, ...config }));
}

function getAdultSources() {
    return Object.entries(API_SITES)
        .filter(([key, config]) => config.type === 'adult')
        .map(([key, config]) => ({ key, ...config }))
        .sort((a, b) => (b.priority || 0) - (a.priority || 0)); // 按优先级排序
}

function getGeneralSources() {
    return Object.entries(API_SITES)
        .filter(([key, config]) => config.type === 'general')
        .map(([key, config]) => ({ key, ...config }));
}

function isAdultSource(sourceKey) {
    return API_SITES[sourceKey]?.type === 'adult';
}

function getCategorySources(category) {
    const categoryConfig = CONTENT_CATEGORIES[category];
    if (!categoryConfig) return [];
    
    return categoryConfig.sources
        .filter(sourceKey => API_SITES[sourceKey])
        .map(sourceKey => ({ key: sourceKey, ...API_SITES[sourceKey] }));
}

// ========== 年龄验证工具函数 - 完全禁用 ==========
function checkAgeVerification() {
    return true;
}

function setAgeVerification() {
    return true;
}

function showAgeVerificationModal(callback) {
    if (callback) callback(true);
}

// ========== 内容过滤函数 - 完全禁用 ==========
function filterAdultContent(results, options = {}) {
    return results;
}

// ========== 增强的搜索聚合函数 ==========
function aggregateSearch(query, options = {}) {
    const { 
        category = 'all', 
        maxResults = AGGREGATED_SEARCH_CONFIG.maxResults,
        includeAdult = true 
    } = options;
    
    const sources = category === 'all' ? getAllSources() : getCategorySources(category);
    const searchPromises = sources.map(({ key, api }) => {
        const url = `${PROXY_URL}${api}${API_CONFIG.search.path}${encodeURIComponent(query)}`;
        return fetch(url, {
            headers: API_CONFIG.search.headers,
            timeout: AGGREGATED_SEARCH_CONFIG.timeout
        })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then(data => {
            const results = data.list || data.data || data.vods || data;
            return {
                source: key,
                data: Array.isArray(results) ? results : [],
                category: API_SITES[key].category || 'general',
                timestamp: Date.now()
            };
        })
        .catch(error => ({
            source: key,
            error: error.message,
            data: [],
            category: API_SITES[key].category || 'general'
        }));
    });
    
    return Promise.allSettled(searchPromises)
        .then(results => {
            const allResults = results
                .filter(result => result.status === 'fulfilled' && result.value.data && result.value.data.length > 0)
                .flatMap(result => 
                    result.value.data.slice(0, 100).map(item => ({  // 每个源限制100个结果
                        ...item,
                        source: result.value.source,
                        category: result.value.category,
                        timestamp: result.value.timestamp,
                        searchScore: calculateSearchScore(item, query)
                    }))
                );
            
            // 按相关性排序
            return allResults
                .sort((a, b) => (b.searchScore || 0) - (a.searchScore || 0))
                .slice(0, maxResults);
        });
}

// ========== 新增：搜索评分计算 ==========
function calculateSearchScore(item, query) {
    const score = 100;
    const title = (item.vod_name || item.title || '').toLowerCase();
    const queryWords = query.toLowerCase().split(/\s+/);
    
    let relevanceScore = 0;
    
    // 标题匹配
    queryWords.forEach(word => {
        if (title.includes(word)) {
            relevanceScore += 30;
        }
    });
    
    // 分类匹配
    if (item.vod_class || item.category) {
        const itemCategory = (item.vod_class || item.category).toLowerCase();
        queryWords.forEach(word => {
            if (itemCategory.includes(word)) {
                relevanceScore += 20;
            }
        });
    }
    
    // 源优先级
    const sourcePriority = API_SITES[item.source]?.priority || 0;
    relevanceScore += sourcePriority * 10;
    
    return Math.min(score + relevanceScore, 200);
}

// ========== 增强的内容推荐 ==========
function getRecommendedContent(userPrefs = USER_PREFERENCES) {
    const recommendations = [];
    
    // 优先推荐热门成人内容源
    const topAdultSources = getAdultSources().slice(0, 8);
    topAdultSources.forEach(source => {
        recommendations.push({
            type: 'source',
            source: source.key,
            name: source.name,
            category: 'adult',
            priority: 1,
            icon: '🔥'
        });
    });
    
    // 推荐热门普通内容源
    const topGeneralSources = getGeneralSources().slice(0, 6);
    topGeneralSources.forEach(source => {
        recommendations.push({
            type: 'source',
            source: source.key,
            name: source.name,
            category: 'general',
            priority: 2,
            icon: '🎬'
        });
    });
    
    // 推荐特色分类
    Object.entries(CONTENT_CATEGORIES).forEach(([key, config]) => {
        if (config.featured && key !== 'all') {
            recommendations.push({
                type: 'category',
                category: key,
                name: config.name,
                icon: config.icon,
                priority: 3
            });
        }
    });
    
    return recommendations.sort((a, b) => a.priority - b.priority);
}

// ========== 新增：源健康检查 ==========
function checkSourceHealth(sources = getAllSources()) {
    const healthChecks = sources.map(({ key, api }) => {
        const testUrl = `${PROXY_URL}${api}/api.php/provide/vod/?ac=videolist&wd=test`;
        return fetch(testUrl, { 
            headers: API_CONFIG.search.headers,
            timeout: 5000 
        })
        .then(response => response.ok ? 'healthy' : 'unhealthy')
        .catch(() => 'unhealthy')
        .then(status => ({ source: key, status }));
    });
    
    return Promise.allSettled(healthChecks)
        .then(results => 
            results
                .filter(r => r.status === 'fulfilled')
                .map(r => r.value)
                .filter(health => health.status === 'healthy')
        );
}

// ========== 内容标签系统 - 增强版 ==========
const CONTENT_TAGS = {
    adult: {
        name: '成人',
        icon: '🔥',
        color: '#FF5722',
        keywords: ['成人', '18+', 'AV', '情色', '性感', '番号']
    },
    hd: {
        name: '高清',
        icon: 'HD',
        color: '#4CAF50',
        keywords: ['1080p', '4K', '高清']
    },
    new: {
        name: '最新',
        icon: 'NEW',
        color: '#2196F3',
        keywords: ['最新', '更新', '2024']
    },
    popular: {
        name: '热门',
        icon: 'HOT',
        color: '#FF9800',
        keywords: ['热门', '排行', '推荐']
    },
    anime: {
        name: '动漫',
        icon: '🎌',
        color: '#9C27B0',
        keywords: ['动漫', '动画', '日漫']
    },
    short: {
        name: '短剧',
        icon: '📱',
        color: '#00BCD4',
        keywords: ['短剧', '微电影', '短视频']
    }
};

// ========== 新增：批量操作工具 ==========
const BULK_OPERATIONS = {
    testAllSources: () => checkSourceHealth(),
    getSourceStats: () => ({
        total: Object.keys(API_SITES).length,
        adult: getAdultSources().length,
        general: getGeneralSources().length,
        categories: Object.keys(CONTENT_CATEGORIES).length
    }),
    clearCache: () => {
        // 清除所有缓存
        localStorage.clear();
        sessionStorage.clear();
        console.log('所有缓存已清除');
    }
};

// 导出配置（如果使用模块）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        API_SITES,
        AGGREGATED_SEARCH_CONFIG,
        API_CONFIG,
        PLAYER_CONFIG,
        SECURITY_CONFIG,
        CUSTOM_API_CONFIG,
        HIDE_BUILTIN_ADULT_APIS,
        ADULT_CONTENT_CONFIG,
        CONTENT_CATEGORIES,
        USER_PREFERENCES,
        ERROR_MESSAGES,
        SITE_CONFIG,
        PASSWORD_CONFIG,
        CONTENT_TAGS,
        BULK_OPERATIONS,
        // 工具函数
        getAllSources,
        getAdultSources,
        getGeneralSources,
        isAdultSource,
        getCategorySources,
        checkAgeVerification,
        setAgeVerification,
        showAgeVerificationModal,
        filterAdultContent,
        aggregateSearch,
        calculateSearchScore,
        getRecommendedContent,
        checkSourceHealth
    };
}

// ========== 全局统计信息 ==========
console.log(`LibreTV 配置加载完成`);
console.log(`总数据源数量: ${Object.keys(API_SITES).length}`);
console.log(`普通内容源: ${getGeneralSources().length}`);
console.log(`成人内容源: ${getAdultSources().length}`);
console.log(`分类数量: ${Object.keys(CONTENT_CATEGORIES).length}`);
