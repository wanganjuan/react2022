import qs from 'querystring'
import axios from './axios'
const baseUrl = 'up-api/union-server/common/'

// 获取字典
export function config(): Promise<any> {
  const url = '/apis/v1/webConfig'
  return axios.get(url)
}

// 退出用户
export function logOut() {
  const url = '/apis/v1/users/logout'
  return axios.post(url)
  // return axios.get(url)
}
// 获取用户信息
export function curInfo(): Promise<any> {
  const url = '/apis/v1/users/current'
  return axios.get(url)
}
// /users/login用户登陆
export function login(data: { loginName: string; password: string }) {
  const url = '/apis/v1/users/login'
  return axios.post(url, data)
}
const List = [
  { id: 0, title: '社求常种图现习', author: '方军', readings: 911, star: '★', status: 'published', date: '1998-11-05 03:49:17' },
  { id: 1, title: '经争龙华起样被使少技', author: '廖刚', readings: 2392, star: '★★', status: 'published', date: '2006-05-24 08:12:30' },
  { id: 2, title: '议压合省复特何展活被', author: '陆洋', readings: 3950, star: '★', status: 'published', date: '1993-12-24 17:12:10' },
  { id: 3, title: '规万家石信织她', author: '雷刚', readings: 2755, star: '★★', status: 'draft', date: '2003-02-11 10:58:53' },
  { id: 4, title: '统毛但几离', author: '于霞', readings: 3712, star: '★★', status: 'published', date: '1973-01-14 12:31:54' },
  { id: 5, title: '类极参深技众', author: '何强', readings: 2038, star: '★★★', status: 'published', date: '1970-04-07 00:52:51' },
  { id: 6, title: '想越次者法门', author: '吕霞', readings: 2181, star: '★', status: 'published', date: '1975-10-05 13:03:19' },
  { id: 7, title: '但行角化高此重', author: '锺秀兰', readings: 2839, star: '★', status: 'draft', date: '1974-06-15 02:31:36' },
  { id: 8, title: '收铁转义观什么院总', author: '石杰', readings: 1088, star: '★★', status: 'draft', date: '1987-02-07 15:53:11' },
  { id: 9, title: '使几情回少边', author: '谭勇', readings: 978, star: '★★★', status: 'draft', date: '1991-02-05 01:29:27' },
  { id: 10, title: '特划四代志了', author: '姚杰', readings: 1174, star: '★', status: 'draft', date: '1975-09-03 03:00:47' },
  { id: 11, title: '海中天持能', author: '薛敏', readings: 3341, star: '★★★', status: 'published', date: '1973-11-09 15:11:31' },
  { id: 12, title: '名道这矿原务', author: '崔娟', readings: 1346, star: '★★', status: 'draft', date: '2010-05-03 08:22:31' },
  { id: 13, title: '加里只命族设改容', author: '傅军', readings: 4701, star: '★★', status: 'published', date: '2017-07-27 19:10:53' },
  { id: 14, title: '查写斯看土少员况公', author: '叶桂英', readings: 1568, star: '★★', status: 'published', date: '2012-04-11 13:22:17' },
  { id: 15, title: '整发两时器率厂步算事', author: '董明', readings: 2207, star: '★★', status: 'draft', date: '1975-01-06 22:40:57' },
  { id: 16, title: '存般省即事民已代', author: '郝刚', readings: 1378, star: '★', status: 'draft', date: '1993-03-12 11:22:38' },
  { id: 17, title: '史却还料打', author: '夏超', readings: 978, star: '★★', status: 'published', date: '1996-10-28 21:53:22' },
  { id: 18, title: '把报导程们料活', author: '曹勇', readings: 3692, star: '★', status: 'published', date: '1971-12-05 14:53:48' },
  { id: 19, title: '导论所位劳政圆听起', author: '杨军', readings: 3488, star: '★★', status: 'draft', date: '2010-12-20 11:04:40' },
  { id: 20, title: '常况始记活习料', author: '蔡涛', readings: 2021, star: '★', status: 'draft', date: '1990-05-27 09:37:54' },
  { id: 21, title: '自九查由眼交和变', author: '阎敏', readings: 1867, star: '★★', status: 'draft', date: '1974-05-28 07:18:31' },
  { id: 22, title: '更了代格格至那阶教指', author: '黄秀兰', readings: 3154, star: '★★★', status: 'draft', date: '1990-07-01 21:03:42' },
  { id: 23, title: '京才程样色', author: '曾桂英', readings: 2722, star: '★★', status: 'published', date: '1970-10-07 21:05:47' },
  { id: 24, title: '便器斗东龙红本把按引', author: '邵娟', readings: 2400, star: '★★★', status: 'draft', date: '1998-05-31 00:37:42' },
  { id: 25, title: '候要复眼走养才', author: '江丽', readings: 2140, star: '★', status: 'draft', date: '1979-06-24 02:01:48' },
  { id: 26, title: '总里断革然', author: '赵芳', readings: 4756, star: '★★', status: 'published', date: '1981-05-08 06:47:30' },
  { id: 27, title: '看矿龙打青', author: '韩勇', readings: 337, star: '★★', status: 'draft', date: '2020-05-24 10:24:21' },
  { id: 28, title: '通把运由这持书', author: '姚明', readings: 4410, star: '★★', status: 'draft', date: '1978-03-09 02:10:40' },
  { id: 29, title: '年需解华万表你', author: '邱磊', readings: 3882, star: '★★', status: 'draft', date: '1970-06-04 15:45:02' },
  { id: 30, title: '正支等龙办', author: '萧芳', readings: 2189, star: '★★', status: 'published', date: '2020-08-25 02:18:55' },
  { id: 31, title: '据带低题再大变近只', author: '贺明', readings: 2631, star: '★★★', status: 'draft', date: '2004-04-16 13:16:51' },
  { id: 32, title: '他方几过重治并各增维', author: '白洋', readings: 3022, star: '★', status: 'published', date: '1999-04-29 08:17:31' },
  { id: 33, title: '示再思参是用进思土来', author: '姚杰', readings: 4802, star: '★★', status: 'published', date: '2004-02-13 22:04:31' },
  { id: 34, title: '委习着活门位从都空层', author: '易勇', readings: 695, star: '★', status: 'draft', date: '1998-11-11 12:51:46' },
  { id: 35, title: '量合热完较表按', author: '阎敏', readings: 1385, star: '★', status: 'draft', date: '2019-12-04 12:35:09' },
  { id: 36, title: '观十温而先力', author: '冯杰', readings: 349, star: '★★', status: 'draft', date: '1977-01-04 17:08:59' },
  { id: 37, title: '格因活都是平写', author: '苏勇', readings: 2433, star: '★★', status: 'published', date: '2008-06-28 15:09:23' },
  { id: 38, title: '技查西成查', author: '金磊', readings: 4111, star: '★★★', status: 'published', date: '1991-07-14 10:53:19' },
  { id: 39, title: '难月除般离持毛完', author: '许娟', readings: 4240, star: '★★', status: 'draft', date: '2000-07-05 15:18:19' },
  { id: 40, title: '千制想手打命所', author: '卢秀兰', readings: 2710, star: '★', status: 'draft', date: '1985-04-17 19:32:34' },
  { id: 41, title: '商风式际车信', author: '万艳', readings: 3805, star: '★★★', status: 'draft', date: '2000-05-16 15:48:44' },
  { id: 42, title: '民有拉派细期义广段名', author: '段丽', readings: 3151, star: '★★', status: 'draft', date: '1999-02-03 08:54:00' },
  { id: 43, title: '情边指内主深', author: '常桂英', readings: 592, star: '★★★', status: 'published', date: '1985-10-07 13:39:44' },
  { id: 44, title: '影学率强养专料油', author: '史超', readings: 3712, star: '★★', status: 'published', date: '2007-03-19 16:00:37' },
  { id: 45, title: '二白候或特军', author: '段洋', readings: 2633, star: '★★★', status: 'draft', date: '2019-10-08 11:29:07' },
  { id: 46, title: '分基外等线想片', author: '孟洋', readings: 3861, star: '★★', status: 'published', date: '2008-07-21 16:01:33' },
  { id: 47, title: '工保约造路江', author: '陈丽', readings: 1927, star: '★★★', status: 'draft', date: '2020-04-23 10:46:33' },
  { id: 48, title: '目史规外放资学深', author: '田杰', readings: 4051, star: '★', status: 'published', date: '1980-11-24 07:22:32' },
  { id: 49, title: '意铁人参取变给万非', author: '袁芳', readings: 3047, star: '★★', status: 'published', date: '2013-10-14 17:29:52' },
  { id: 50, title: '建生高志业', author: '吴磊', readings: 812, star: '★★★', status: 'draft', date: '1991-04-22 16:54:33' },
  { id: 51, title: '多国指此处', author: '薛超', readings: 1830, star: '★★', status: 'draft', date: '1983-10-30 04:58:57' },
  { id: 52, title: '然不出义经却型县结', author: '邵平', readings: 4118, star: '★', status: 'published', date: '2000-06-30 21:40:38' },
  { id: 53, title: '自统队声专今光化己值', author: '金丽', readings: 832, star: '★', status: 'published', date: '2016-09-05 02:39:48' },
  { id: 54, title: '并报住住火思斗持而', author: '崔芳', readings: 696, star: '★★', status: 'draft', date: '1999-09-13 09:22:53' },
  { id: 55, title: '马出林查至温斯素般', author: '谭刚', readings: 3620, star: '★★', status: 'draft', date: '1975-10-21 19:43:56' },
  { id: 56, title: '这影再重体值同话时集', author: '谭敏', readings: 3745, star: '★★', status: 'published', date: '1993-05-10 06:28:32' },
  { id: 57, title: '实严求种往九省', author: '唐娜', readings: 494, star: '★★', status: 'published', date: '1983-02-07 14:12:54' },
  { id: 58, title: '科养料历角设', author: '吴平', readings: 4560, star: '★★★', status: 'published', date: '1985-12-18 05:26:18' },
  { id: 59, title: '专成电华先发西', author: '马艳', readings: 3028, star: '★★', status: 'draft', date: '2002-09-29 21:15:35' },
  { id: 60, title: '用收中比同叫连观', author: '武霞', readings: 1769, star: '★★', status: 'draft', date: '2009-08-02 21:17:05' },
  { id: 61, title: '学方百品江去之', author: '胡芳', readings: 353, star: '★★★', status: 'published', date: '1982-09-21 21:58:27' },
  { id: 62, title: '行资精研业务质', author: '侯娟', readings: 963, star: '★', status: 'published', date: '1988-06-02 08:10:02' },
  { id: 63, title: '强府事联广点亲', author: '魏刚', readings: 2673, star: '★', status: 'published', date: '2012-11-27 13:59:38' },
  { id: 64, title: '拉见产条王把', author: '程强', readings: 3581, star: '★★', status: 'published', date: '2008-09-01 00:46:37' },
  { id: 65, title: '证周造类改强义', author: '汤艳', readings: 1944, star: '★', status: 'draft', date: '1984-07-31 01:58:06' },
  { id: 66, title: '活者她除增状海然', author: '夏勇', readings: 695, star: '★★', status: 'published', date: '1984-01-21 14:26:09' },
  { id: 67, title: '相战比到话权满青光', author: '秦军', readings: 466, star: '★★★', status: 'published', date: '2009-02-09 11:31:32' },
  { id: 68, title: '用素并都点', author: '邹涛', readings: 1005, star: '★★', status: 'published', date: '1989-07-10 23:01:45' },
  { id: 69, title: '易东火由调育型月位说', author: '叶明', readings: 2793, star: '★★★', status: 'draft', date: '2020-08-29 08:13:25' },
  { id: 70, title: '劳存它照低写', author: '叶杰', readings: 4049, star: '★★★', status: 'published', date: '1997-08-17 07:20:40' },
  { id: 71, title: '何每儿车天消委提下才', author: '尹明', readings: 1557, star: '★★', status: 'published', date: '1990-06-26 05:57:01' },
  { id: 72, title: '处主查而商单山派间', author: '段勇', readings: 1616, star: '★★★', status: 'published', date: '1989-03-11 18:31:04' },
  { id: 73, title: '务海阶县劳因社', author: '梁强', readings: 907, star: '★★', status: 'draft', date: '2010-11-14 23:53:21' },
  { id: 74, title: '响线点小第因温', author: '唐磊', readings: 672, star: '★', status: 'draft', date: '2009-03-04 02:11:44' },
  { id: 75, title: '酸料难化了品据大示', author: '薛静', readings: 2790, star: '★★', status: 'draft', date: '2007-09-25 17:43:52' },
  { id: 76, title: '张六观志她形及', author: '段伟', readings: 2941, star: '★★★', status: 'draft', date: '2005-10-17 15:56:42' },
  { id: 77, title: '七百平史你器满研', author: '易娜', readings: 1960, star: '★★', status: 'published', date: '2002-05-30 09:55:59' },
  { id: 78, title: '际求革求及老', author: '林霞', readings: 2615, star: '★★', status: 'draft', date: '1973-03-20 19:39:32' },
  { id: 79, title: '手知老边题组象收', author: '万霞', readings: 342, star: '★', status: 'published', date: '2001-10-17 17:47:02' },
  { id: 80, title: '什节调阶小件情拉再率', author: '赖平', readings: 3652, star: '★★', status: 'published', date: '1982-10-29 12:29:26' },
  { id: 81, title: '公影不问基它织置', author: '陈磊', readings: 3705, star: '★★', status: 'published', date: '1995-12-16 08:20:04' },
  { id: 82, title: '至圆政者温当前劳同式', author: '赖军', readings: 375, star: '★★', status: 'draft', date: '1977-01-09 02:53:25' },
  { id: 83, title: '人他期起北张', author: '卢芳', readings: 4004, star: '★★', status: 'draft', date: '1974-06-30 06:25:03' },
  { id: 84, title: '象被这之同里拉连京报', author: '余静', readings: 1099, star: '★★', status: 'draft', date: '1985-10-03 19:48:50' },
  { id: 85, title: '级文原提权期多道程效', author: '黎丽', readings: 1346, star: '★', status: 'draft', date: '2009-06-27 23:46:06' },
  { id: 86, title: '作关府色手立基场', author: '阎丽', readings: 2095, star: '★★', status: 'published', date: '1991-10-12 04:10:25' },
  { id: 87, title: '六院值必机改却有育角', author: '何刚', readings: 2040, star: '★★★', status: 'draft', date: '1975-03-14 11:20:32' },
  { id: 88, title: '水细力写划文', author: '谢洋', readings: 2870, star: '★★', status: 'published', date: '1978-03-20 11:25:34' },
  { id: 89, title: '期委断十五长引类级', author: '冯秀英', readings: 2476, star: '★★★', status: 'draft', date: '2015-09-20 10:43:01' },
  { id: 90, title: '应大查题与立成众', author: '高娜', readings: 4518, star: '★★★', status: 'draft', date: '1982-01-22 14:39:08' },
  { id: 91, title: '满明料义清以个', author: '梁伟', readings: 2689, star: '★', status: 'published', date: '2007-02-10 05:51:05' },
  { id: 92, title: '技值多空众海一厂青', author: '杜娜', readings: 4576, star: '★', status: 'published', date: '2019-07-22 22:19:11' },
  { id: 93, title: '文想系必内把文', author: '吕洋', readings: 4469, star: '★★', status: 'draft', date: '2003-07-26 14:35:29' },
  { id: 94, title: '相路金号要日', author: '高芳', readings: 1865, star: '★★', status: 'draft', date: '2005-10-18 02:35:16' },
  { id: 95, title: '非便少设听最装', author: '卢涛', readings: 1256, star: '★★★', status: 'published', date: '1986-08-27 08:08:58' },
  { id: 96, title: '形问清压劳没易', author: '贺勇', readings: 2799, star: '★★★', status: 'draft', date: '1980-05-05 05:45:53' },
  { id: 97, title: '把前新也应反空年', author: '崔伟', readings: 4637, star: '★', status: 'published', date: '2021-08-19 12:12:49' },
  { id: 98, title: '知色完之查议每', author: '杨娜', readings: 4267, star: '★★', status: 'published', date: '1978-08-18 00:31:30' },
  { id: 99, title: '定团得重只角', author: '高娜', readings: 520, star: '★★', status: 'draft', date: '1999-10-03 05:23:13' }
]
// test
export function list(data: any) {
  const { author, title, curpage, size } = data
  const _list = List.filter((item) => item.author.includes(author || '') && item.title.includes(title || ''))
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(_list.slice((curpage - 1) * size))
    }, 1000)
  })
}
