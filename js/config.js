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
    version: '1.0.4'
};

// API站点配置 - 完全开放所有内容源（94个）
const API_SITES = {
    // ========== 原始主流内容源 ==========
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com',
    },
    ruyi: {
        api: 'https://cj.rycjapi.com',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com',
        name: '天涯资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv',
        name: '非凡影视',
        detail: 'http://ffzy5.tv',
    },
    heimuer: {
        api: 'https://json.heimuer.xyz',
        name: '黑木耳',
        detail: 'https://heimuer.tv',
    },
    zy360: {
        api: 'https://360zy.com',
        name: '360资源',
    },
    wolong: {
        api: 'https://wolongzyw.com',
        name: '卧龙资源',
    },
    hwba: {
        api: 'https://cjhwba.com',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com',
        name: '极速资源',
        detail: 'https://jszyapi.com'
    },
    dbzy: {
        api: 'https://dbzy.com',
        name: '豆瓣资源',
    },
    huya: {
        api: 'https://www.huyaapi.com',
        name: '虎牙资源',
        detail: 'https://www.huyaapi.com',
    },
    mozhua: {
        api: 'https://mozhuazy.com',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com',
        name: 'iKun资源'
    },

    // ========== 新增主流内容源 ==========
    '1080zyku': {
        api: 'https://api.1080zyku.com/inc/api_mac10.php',
        name: 'TV-1080资源',
        detail: 'https://api.1080zyku.com'
    },
    '360zy_new': {
        api: 'https://360zy.com/api.php/provide/vod',
        name: 'TV-360资源',
        detail: 'https://360zy.com'
    },
    'ckzy_tv': {
        api: 'https://ckzy.me/api.php/provide/vod',
        name: 'TV-CK资源',
        detail: 'https://ckzy.me'
    },
    'ukuapi': {
        api: 'https://api.ukuapi.com/api.php/provide/vod',
        name: 'TV-U酷资源',
        detail: 'https://api.ukuapi.com'
    },
    'ukuapi88': {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: 'TV-U酷资源88',
        detail: 'https://api.ukuapi88.com'
    },
    'ikunzy': {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'TV-ikun资源',
        detail: 'https://ikunzyapi.com'
    },
    'wujinapi_cc': {
        api: 'https://api.wujinapi.cc/api.php/provide/vod',
        name: 'TV-wujinapi无尽'
    },
    'yayazy': {
        api: 'https://cj.yayazy.net/api.php/provide/vod',
        name: 'TV-丫丫点播',
        detail: 'https://cj.yayazy.net'
    },
    'guangsuapi': {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: 'TV-光速资源',
        detail: 'https://api.guangsuapi.com'
    },
    'wolongzyw': {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod',
        name: 'TV-卧龙点播',
        detail: 'https://collect.wolongzyw.com'
    },
    'wolongzy_cc': {
        api: 'https://collect.wolongzy.cc/api.php/provide/vod',
        name: 'TV-卧龙资源'
    },
    'wolongzyw_com': {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: 'TV-卧龙资源',
        detail: 'https://wolongzyw.com'
    },
    'tyyszy_new': {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: 'TV-天涯资源',
        detail: 'https://tyyszy.com'
    },
    'rycjapi': {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: 'TV-如意资源'
    },
    'xiaomaomi': {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: 'TV-小猫咪资源',
        detail: 'https://zy.xmm.hk'
    },
    'xinlangapi': {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: 'TV-新浪点播',
        detail: 'https://api.xinlangapi.com'
    },
    'wujinapi_com': {
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        name: 'TV-无尽资源'
    },
    'wujinapi_net': {
        api: 'https://api.wujinapi.net/api.php/provide/vod',
        name: 'TV-无尽资源'
    },
    'wwzy_api': {
        api: 'https://api.wwzy.tv/api.php/provide/vod',
        name: 'TV-旺旺资源',
        detail: 'https://api.wwzy.tv'
    },
    'bfzyapi': {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: 'TV-暴风资源'
    },
    'zuidazy': {
        api: 'http://zuidazy.me/api.php/provide/vod',
        name: 'TV-最大点播',
        detail: 'http://zuidazy.me'
    },
    'zuidapi_new': {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: 'TV-最大资源',
        detail: 'https://api.zuidapi.com'
    },
    'apiyhzy': {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: 'TV-樱花资源'
    },
    'yparse': {
        api: 'https://api.yparse.com/api/json',
        name: 'TV-步步高资源'
    },
    'niuniuzy': {
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        name: 'TV-牛牛点播',
        detail: 'https://api.niuniuzy.me'
    },
    'dyttzyapi': {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: 'TV-电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com'
    },
    'apibdzy': {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: 'TV-百度云资源',
        detail: 'https://api.apibdzy.com'
    },
    '1080zyku_json': {
        api: 'https://api.1080zyku.com/inc/apijson.php/',
        name: 'TV-神马云',
        detail: 'https://api.1080zyku.com'
    },
    'suoniapi': {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: 'TV-索尼资源'
    },
    'hongniuzy2': {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: 'TV-红牛资源',
        detail: 'https://www.hongniuzy2.com'
    },
    'maotaizy': {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: 'TV-茅台资源',
        detail: 'https://caiji.maotaizy.cc'
    },
    'huyaapi': {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: 'TV-虎牙资源',
        detail: 'https://www.huyaapi.com'
    },
    'dbzy_caiji': {
        api: 'https://caiji.dbzy.tv/api.php/provide/vod',
        name: 'TV-豆瓣资源',
        detail: 'https://caiji.dbzy.tv'
    },
    'dbzy_new': {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: 'TV-豆瓣资源',
        detail: 'https://dbzy.tv'
    },
    'hhzyapi': {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: 'TV-豪华资源',
        detail: 'https://hhzyapi.com'
    },
    'subocaiji': {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: 'TV-速博资源'
    },
    'lziapi': {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: 'TV-量子资源'
    },
    'jinyingzy': {
        api: 'https://jinyingzy.com/api.php/provide/vod',
        name: 'TV-金鹰点播',
        detail: 'https://jinyingzy.com'
    },
    'jyzyapi': {
        api: 'https://jyzyapi.com/api.php/provide/vod',
        name: 'TV-金鹰资源',
        detail: 'https://jyzyapi.com'
    },
    'sdzyapi': {
        api: 'https://sdzyapi.com/api.php/provide/vod',
        name: 'TV-闪电资源',
        detail: 'https://sdzyapi.com'
    },
    'ffzyapi': {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod',
        name: 'TV-非凡资源',
        detail: 'https://cj.ffzyapi.com'
    },
    'p2100': {
        api: 'https://p2100.net/api.php/provide/vod',
        name: 'TV-飘零资源',
        detail: 'https://p2100.net'
    },
    'mozhuazy': {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: 'TV-魔爪资源',
        detail: 'https://mozhuazy.com'
    },
    'moduapi': {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod',
        name: 'TV-魔都动漫',
        detail: 'https://caiji.moduapi.cc'
    },
    'mdzyapi_new': {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: 'TV-魔都资源',
        detail: 'https://www.mdzyapi.com'
    },
    'heimuer02': {
        api: 'https://json02.heimuer.xyz/api.php/provide/vod',
        name: 'TV-黑木耳点播',
        detail: 'https://json02.heimuer.xyz'
    },
    'ffzynew': {
        api: 'https://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡影视new',
        detail: 'http://ffzy5.tv'
    },
    'jszyapi_new': {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com'
    },
    'aiduanju': {
        api: 'https://www.aiduanju.cc/',
        name: '爱短剧.cc'
    },
    'huawei8': {
        api: 'https://huawei8.live/api.php/provide/vod',
        name: '华为吧资源'
    },
    'taopianapi': {
        api: 'https://taopianapi.com/cjapi/sda/vod',
        name: '淘片资源'
    },
    'hongniuzy3': {
        api: 'https://www.hongniuzy3.com/api.php/provide/vod',
        name: '红牛资源'
    },
    'xsd_sdzyapi': {
        api: 'https://xsd.sdzyapi.com/api.php/provide/vod',
        name: '索尼-闪电资源'
    },
    'jyzyapi_provide': {
        api: 'https://jyzyapi.com/provide/vod',
        name: '金鹰资源采集网'
    },
    'fczy888': {
        api: 'https://api.fczy888.me/api.php/provide/vod',
        name: '蜂巢片库'
    },
    'jmzy': {
        api: 'https://api.jmzy.com/api.php/provide/vod',
        name: '金马资源网'
    },
    'dadiapi': {
        api: 'https://dadiapi.com/api.php/provide/vod',
        name: '大地资源网络'
    },
    'xiaojizy': {
        api: 'https://api.xiaojizy.live/provide/vod',
        name: '小鸡资源'
    },
    'kuaichezy': {
        api: 'https://caiji.kuaichezy.org/api.php/provide',
        name: '快车资源阿'
    },
    'xinlangapi_provide': {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪资源阿'
    },
    'yzzy_api': {
        api: 'https://api.yzzy-api.com/inc/ldg_api_all.php/provide/vod',
        name: '优质资源库1080zyk6.com高清'
    },
    'iqiyizyapi': {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源'
    },
    'qiqidys': {
        api: 'https://www.qiqidys.com/api.php/provide/vod/',
        name: '七七影视'
    },

    // ========== 完全开放的成人内容源 ==========
    ckzy: {
        api: 'https://www.ckzy1.com',
        name: 'CK资源',
        adult: true
    },
    jkun: {
        api: 'https://jkunzyapi.com',
        name: 'jkun资源',
        adult: true
    },
    bwzy: {
        api: 'https://api.bwzym3u8.com',
        name: '百万资源',
        adult: true
    },
    souav: {
        api: 'https://api.souavzy.vip',
        name: 'souav资源',
        adult: true
    },
    r155: {
        api: 'https://155api.com',
        name: '155资源',
        adult: true
    },
    lsb: {
        api: 'https://apilsbzy1.com',
        name: 'lsb资源',
        adult: true
    },
    huangcang: {
        api: 'https://hsckzy.vip',
        name: '黄色仓库',
        adult: true,
        detail: 'https://hsckzy.vip'
    },
    yutu: {
        api: 'https://yutuzy10.com',
        name: '玉兔资源',
        adult: true
    },
    // 新增成人内容源
    '155api': {
        api: 'https://155api.com/api.php/provide/vod',
        name: 'AV-155资源',
        detail: 'https://155api.com',
        adult: true
    },
    'bwzyz': {
        api: 'https://api.bwzyz.com/api.php/provide/vod',
        name: 'AV-百万资源',
        detail: 'https://api.bwzyz.com',
        adult: true
    },
    '91md': {
        api: 'https://91md.me/api.php/provide/vod',
        name: 'AV-91麻豆',
        detail: 'https://91md.me',
        adult: true
    },
    'lbapiby': {
        api: 'http://lbapiby.com/api.php/provide/vod',
        name: 'AV-AIvin',
        adult: true
    },
    'jkunzyapi': {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: 'AV-JKUN资源',
        detail: 'https://jkunzyapi.com',
        adult: true
    },
    'souavzy': {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: 'AV-souav资源',
        detail: 'https://api.souavzy.vip',
        adult: true
    },
    'lbapi9': {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: 'AV-乐播资源',
        adult: true
    },
    'aosikazy': {
        api: 'https://aosikazy.com/api.php/provide/vod',
        name: 'AV-奥斯卡资源',
        detail: 'https://aosikazy.com',
        adult: true
    },
    'naixxzy': {
        api: 'https://Naixxzy.com/api.php/provide/vod',
        name: 'AV-奶香香',
        detail: 'https://Naixxzy.com',
        adult: true
    },
    'slapibf': {
        api: 'https://slapibf.com/api.php/provide/vod',
        name: 'AV-森林资源',
        detail: 'https://slapibf.com',
        adult: true
    },
    'xrbsp': {
        api: 'https://www.xrbsp.com/api/json.php',
        name: 'AV-淫水机资源',
        detail: 'https://www.xrbsp.com',
        adult: true
    },
    'apiyutu': {
        api: 'https://apiyutu.com/api.php/provide/vod',
        name: 'AV-玉兔资源',
        detail: 'https://apiyutu.com',
        adult: true
    },
    'fhapi9': {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: 'AV-番号资源',
        adult: true
    },
    'kxgav': {
        api: 'https://www.kxgav.com/api/json.php',
        name: 'AV-白嫖资源',
        detail: 'https://www.kxgav.com',
        adult: true
    },
    'jingpinx': {
        api: 'https://www.jingpinx.com/api.php/provide/vod',
        name: 'AV-精品资源',
        detail: 'https://www.jingpinx.com',
        adult: true
    },
    'msnii': {
        api: 'https://www.msnii.com/api/json.php',
        name: 'AV-美少女资源',
        detail: 'https://www.msnii.com',
        adult: true
    },
    'apilsbzy1': {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: 'AV-老色逼资源',
        detail: 'https://apilsbzy1.com',
        adult: true
    },
    'sexnguon': {
        api: 'https://api.sexnguon.com/api.php/provide/vod',
        name: 'AV-色嗨国',
        detail: 'https://api.sexnguon.com',
        adult: true
    },
    'maozyapi': {
        api: 'https://api.maozyapi.com/inc/apijson_vod.php',
        name: 'AV-色猫资源',
        detail: 'https://api.maozyapi.com',
        adult: true
    },
    'apilj': {
        api: 'https://apilj.com/api.php/provide/vod',
        name: 'AV-辣椒资源',
        detail: 'https://apilj.com',
        adult: true
    },
    'gdlsp': {
        api: 'https://www.gdlsp.com/api/json.php',
        name: 'AV-香奶儿资源',
        detail: 'https://www.gdlsp.com',
        adult: true
    },
    'shayuapi': {
        api: 'https://shayuapi.com/api.php/provide/vod',
        name: 'AV-鲨鱼资源',
        detail: 'https://shayuapi.com',
        adult: true
    },
    'pgxdy': {
        api: 'https://www.pgxdy.com/api/json.php',
        name: 'AV-黄AV资源',
        detail: 'https://www.pgxdy.com',
        adult: true
    },
    'gayapi': {
        api: 'https://gayapi.com/api.php/provide/vod',
        name: '快播资源网站',
        adult: true
    },
    'xingba111': {
        api: 'https://xingba111.com/api.php/provide/vod',
        name: '性吧资源',
        adult: true
    },
    'hsckzy888': {
        api: 'https://hsckzy888.com/api.php/provide/vod',
        name: '黄色资源啊啊',
        adult: true
    },
    'xxibaozyw': {
        api: 'https://www.xxibaozyw.com/api.php/provide/vod',
        name: '细胞采集黄色',
        adult: true
    },
    'apilj_provide': {
        api: 'https://apilj.com/api.php/provide',
        name: '辣椒资源黄黄',
        adult: true
    }
};

// 添加聚合搜索的配置选项 - 完全开放模式
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 20000,         // 增加最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true,   // 是否显示来源徽章
    
    // 成人内容配置 - 完全开放
    adultContent: {
        enabled: true,           // 完全启用成人内容
        requireVerification: false, // 移除验证要求
        separateTab: false,      // 与普通内容混合显示
        filterSensitiveWords: false, // 移除敏感词过滤
        includeInGeneralSearch: true, // 包含在通用搜索中
        priorityBoost: 1         // 轻微提升成人内容优先级
    }
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
    	// 修改搜索接口为返回更多详细数据（包括视频封面、简介和播放列表）
        path: '/api.php/provide/vod/?ac=videolist&wd=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json',
            'Referer': 'https://libretv.is-an.org'
        }
    },
    detail: {
    	// 修改详情接口也使用videolist接口，但是通过ID查询，减少请求次数
        path: '/api.php/provide/vod/?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json',
            'Referer': 'https://libretv.is-an.org'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置 - 完全开放模式
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
        blurPreview: false,      // 移除预览图模糊
        ageGate: false,          // 移除年龄验证门
        safeSearch: false,       // 完全关闭安全搜索
        contentWarning: false,   // 移除内容警告提示
        autoPlay: true,          // 成人内容自动播放
        enhancedQuality: true,   // 优先高清源
        seamlessIntegration: true // 与普通内容无缝集成
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
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 200,        // 增加最大搜索长度
    
    // 成人内容安全设置 - 完全开放
    adultContent: {
        enabled: true,            // 完全启用
        ageVerification: false,   // 禁用年龄验证
        geoRestriction: false,    // 禁用地区限制
        contentModeration: false, // 禁用内容审核
        userConsent: false        // 禁用用户同意机制
    }
};

// 添加多个自定义API源的配置 - 增强版
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 10,           // 增加最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: null       // 移除成人内容标记要求
};

// 完全开放内置成人内容API
const HIDE_BUILTIN_ADULT_APIS = false;

// ========== 新增：成人内容管理配置 - 完全开放模式 ==========
const ADULT_CONTENT_CONFIG = {
    // 年龄验证配置 - 完全禁用
    ageVerification: {
        minAge: 0,               // 移除年龄限制
        methods: [],             // 移除所有验证方法
        storageKey: null,        // 移除存储
        expiry: 0,               // 立即过期
        modalTitle: null,        // 移除模态标题
        modalMessage: null       // 移除模态消息
    },
    
    // 内容分类 - 与普通内容合并
    categories: {
        adult: {
            icon: '🔥',          // 吸引人的图标
            color: '#FF5722',    // 吸引人的颜色
            keywords: [],        // 移除关键词限制
            hidden: false,       // 不隐藏
            promoted: true       // 提升显示
        }
    },
    
    // 过滤规则 - 完全移除
    filtering: {
        sensitiveWords: [],      // 移除所有敏感词
        whitelistDomains: [],    // 移除白名单
        blacklistDomains: [],    // 移除黑名单
        enabled: false           // 完全禁用过滤
    },
    
    // UI配置 - 完全开放显示
    ui: {
        warningBanner: false,    // 移除警告横幅
        blurThumbnails: false,   // 移除缩略图模糊
        separateSection: false,  // 不单独显示，与普通内容混合
        toggleSwitch: false,     // 移除切换开关
        parentalControls: false  // 移除家长控制
    }
};

// ========== 新增：内容分类配置 ==========
const CONTENT_CATEGORIES = {
    all: {
        name: '全部内容',
        icon: '🎬',
        color: '#4CAF50',
        sources: Object.keys(API_SITES), // 包含所有源
        description: '包含所有类型的内容，无任何限制'
    },
    movie: {
        name: '电影',
        icon: '🎥',
        color: '#2196F3',
        sources: ['dyttzy', '1080zyku', 'yayazy', 'guangsuapi', 'ckzy', 'bwzy', 'r155', 'jkun'],
        description: '各种电影，包括成人电影'
    },
    tv: {
        name: '电视剧',
        icon: '📺',
        color: '#FF9800',
        sources: ['ruyi', 'bfzy', 'zuid', 'apibdzy', 'dbzy', 'souav', 'lbapi9', 'aosikazy'],
        description: '各种电视剧，包括成人剧集'
    },
    anime: {
        name: '动漫',
        icon: '🎌',
        color: '#9C27B0',
        sources: ['yinghua', 'apiyhzy', 'moduapi', 'naixxzy', 'slapibf'],
        description: '各种动漫，包括成人动漫'
    },
    short: {
        name: '短视频',
        icon: '📱',
        color: '#00BCD4',
        sources: ['wwzy', 'huya', 'wwzy_api', 'aiduanju', 'xrbsp', 'apiyutu'],
        description: '各种短视频，包括成人短片'
    }
};

// ========== 新增：用户偏好配置 - 完全开放 ==========
const USER_PREFERENCES = {
    adultContent: {
        enabled: true,           // 默认启用
        verified: true,          // 默认已验证
        lastAccess: Date.now(),  // 记录最后访问时间
        autoEnable: true         // 自动启用
    },
    search: {
        safeSearch: false,       // 默认关闭安全搜索
        adultFilter: false,      // 默认不过滤成人内容
        historyAdult: true,      // 保存成人内容到搜索历史
        adultPriority: true      // 成人内容优先显示
    },
    playback: {
        adultAutoPlay: true,     // 成人内容自动播放
        quality: 'highest',      // 默认最高质量
        crossCategoryPlay: true  // 跨分类自动播放
    }
};

// ========== 新增：工具函数 ==========
function getAllSources() {
    // 返回所有源，不区分类型
    return Object.entries(API_SITES)
        .map(([key, config]) => ({ key, ...config }));
}

function getAdultSources() {
    // 获取所有成人内容源
    return Object.entries(API_SITES)
        .filter(([key, config]) => config.adult)
        .map(([key, config]) => ({ key, ...config }));
}

function getGeneralSources() {
    // 获取所有普通内容源
    return Object.entries(API_SITES)
        .filter(([key, config]) => !config.adult)
        .map(([key, config]) => ({ key, ...config }));
}

function isAdultSource(sourceKey) {
    // 检查是否为成人源
    return API_SITES[sourceKey]?.adult === true;
}

function checkAgeVerification() {
    // 完全开放模式，总是返回true
    return true;
}

function filterAdultContent(results) {
    // 完全开放模式，返还所有结果
    return results;
}

// ========== 新增：搜索聚合函数 ==========
function aggregateSearch(query) {
    const allSources = getAllSources();
    const searchPromises = allSources.map(({ key, api }) => 
        fetch(`${PROXY_URL}${api}${API_CONFIG.search.path}${encodeURIComponent(query)}`, {
            headers: API_CONFIG.search.headers
        })
        .then(response => response.json())
        .then(data => ({
            source: key,
            data: data.list || data.data || data.vods || data,
            adult: isAdultSource(key)
        }))
        .catch(error => ({
            source: key,
            error: error.message,
            data: [],
            adult: isAdultSource(key)
        }))
    );
    
    return Promise.allSettled(searchPromises)
        .then(results => {
            // 合并所有结果，不进行任何过滤
            const allResults = results
                .filter(result => result.status === 'fulfilled' && result.value.data && result.value.data.length > 0)
                .flatMap(result => 
                    result.value.data.map(item => ({
                        ...item,
                        source: result.value.source,
                        adult: result.value.adult,
                        timestamp: Date.now()
                    }))
                );
            
            // 按成人内容优先级排序（可选）
            return allResults.sort((a, b) => {
                const aAdult = a.adult || isAdultSource(a.source);
                const bAdult = b.adult || isAdultSource(b.source);
                return bAdult - aAdult; // 成人内容优先
            });
        });
}

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
        // 工具函数
        getAllSources,
        getAdultSources,
        getGeneralSources,
        isAdultSource,
        checkAgeVerification,
        filterAdultContent,
        aggregateSearch
    };
}

// ========== 全局统计信息 ==========
console.log(`LibreTV 配置加载完成`);
console.log(`总数据源数量: ${Object.keys(API_SITES).length}`);
console.log(`普通内容源: ${getGeneralSources().length}`);
console.log(`成人内容源: ${getAdultSources().length}`);
