const list = [
  {
    id: 278,
    name: '測試商品3',
    oldPrice: '43',
    newPrice: '30',
    desc: '測試商品3',
    enable: 0,
    imgUrl:
      'http://s11.mogucdn.com/mlcdn/c45406/170402_06ehihjk325cjc7jc4653k1bkek2b_640x960.jpg_560x999.jpg',
    inventoryCount: 10000,
    saleCount: 0,
    favorCount: 0,
    address: '天津',
    categoryId: 6,
    createAt: '2021-08-28T10:16:27.000Z',
    updateAt: '2021-08-28T10:16:27.000Z'
  },
  {
    id: 277,
    name: '測試商品2',
    oldPrice: '43',
    newPrice: '30',
    desc: '測試商品2',
    enable: 0,
    imgUrl:
      'http://s3.mogucdn.com/mlcdn/c45406/180819_44ee3hf251agika4lji8958i46e6d_640x960.jpg_560x999.jpg',
    inventoryCount: 6285,
    saleCount: 2,
    favorCount: 3,
    address: '天津',
    categoryId: 6,
    createAt: '2021-08-28T10:15:22.000Z',
    updateAt: '2021-08-28T10:15:22.000Z'
  },
  {
    id: 271,
    name: '測試商品',
    oldPrice: '15',
    newPrice: '10',
    desc: '測試商品簡介',
    enable: 0,
    imgUrl:
      'http://s11.mogucdn.com/mlcdn/c45406/180315_785cjdlddack0254cdh27bl065k9d_640x960.jpg_560x999.jpg',
    inventoryCount: 2021,
    saleCount: 1510,
    favorCount: 828,
    address: '测试商品地址',
    categoryId: 2,
    createAt: '2021-08-28T07:10:52.000Z',
    updateAt: '2021-08-28T07:10:52.000Z'
  },
  {
    id: 221,
    name: '2018春秋條紋拼接新款微喇叭九分褲運動褲彈力休閑褲流蘇褲女大碼胖MM',
    oldPrice: '85',
    newPrice: '60',
    desc: '2018春秋條紋拼接新款微喇叭九分褲運動褲彈力休閑褲流蘇褲女大碼胖MM',
    enable: 1,
    imgUrl:
      'http://s11.mogucdn.com/mlcdn/c45406/180315_785cjdlddack0254cdh27bl065k9d_640x960.jpg_560x999.jpg',
    inventoryCount: 9315,
    saleCount: 59,
    favorCount: 312,
    address: '上海',
    categoryId: 3,
    createAt: '2021-04-30T13:43:27.000Z',
    updateAt: '2021-04-30T13:43:27.000Z'
  },
  {
    id: 202,
    name: '2018夏季新款韓版寬松無袖短款弔帶背心女學生外穿清新打底雪紡上衣潮',
    oldPrice: '70',
    newPrice: '70',
    desc: '2018夏季新款韓版寬松無袖短款弔帶背心女學生外穿清新打底雪紡上衣潮',
    enable: 1,
    imgUrl:
      'http://s3.mogucdn.com/mlcdn/c45406/180621_6276g6e01jcl5jh9jjj2i3gl8ciia_640x960.jpg_560x999.jpg',
    inventoryCount: 4289,
    saleCount: 125,
    favorCount: 68,
    address: '深圳',
    categoryId: 5,
    createAt: '2021-04-30T13:43:16.000Z',
    updateAt: '2021-04-30T13:43:16.000Z'
  },
  {
    id: 183,
    name: '吊帶背心女夏2018秋季新款內搭弔帶衫短款性感修身針織打底衫上衣顯瘦',
    oldPrice: '43',
    newPrice: '30',
    desc: '吊帶背心女夏2018秋季新款內搭弔帶衫短款性感修身針織打底衫上衣顯瘦',
    enable: 1,
    imgUrl:
      'http://s11.mogucdn.com/mlcdn/17f85e/180927_5i77e04lhaalbg3dai0j4588lbahh_640x960.jpg_560x999.jpg',
    inventoryCount: 6285,
    saleCount: 2,
    favorCount: 3,
    address: '天津',
    categoryId: 6,
    createAt: '2021-04-30T13:43:16.000Z',
    updateAt: '2021-04-30T13:43:16.000Z'
  },
  {
    id: 174,
    name: '2018秋季新款時尚套裝蝴蝶結波點襯衫圓領麻花毛衣無袖馬甲百褶半身裙中長款A字裙套裝三件套',
    oldPrice: '86',
    newPrice: '60',
    desc: '2018秋季新款時尚套裝蝴蝶結波點襯衫圓領麻花毛衣無袖馬甲百褶半身裙中長款A字裙套裝三件套',
    enable: 1,
    imgUrl:
      'http://s11.mogucdn.com/mlcdn/c45406/180131_1kgh02j1j4lbb74g0427ljk976612_640x960.jpg_560x999.jpg',
    inventoryCount: 4118,
    saleCount: 1356,
    favorCount: 311,
    address: '青岛',
    categoryId: 8,
    createAt: '2021-04-30T13:42:55.000Z',
    updateAt: '2021-04-30T13:42:55.000Z'
  },
  {
    id: 173,
    name: '時尚套裝韓版氣質甜美鏤空燈籠袖針織衫百搭顯瘦毛衣女2018秋季新款連衣裙套裝',
    oldPrice: '70',
    newPrice: '70',
    desc: '時尚套裝韓版氣質甜美鏤空燈籠袖針織衫百搭顯瘦毛衣女2018秋季新款連衣裙套裝',
    enable: 1,
    imgUrl:
      'http://s11.mogucdn.com/mlcdn/c45406/180822_5bl46cl4g934133a6cbhkk8l37hl0_640x960.jpg_560x999.jpg',
    inventoryCount: 1615,
    saleCount: 1360,
    favorCount: 286,
    address: '沈阳',
    categoryId: 3,
    createAt: '2021-04-30T13:42:54.000Z',
    updateAt: '2021-04-30T13:42:54.000Z'
  },
  {
    id: 171,
    name: '2018秋冬新款時尚韓範百搭顯瘦背帶褲套裝燈芯絨褲子+毛衣兩件套女',
    oldPrice: '99',
    newPrice: '69',
    desc: '2018秋冬新款時尚韓範百搭顯瘦背帶褲套裝燈芯絨褲子+毛衣兩件套女',
    enable: 1,
    imgUrl:
      'http://s11.mogucdn.com/mlcdn/55cf19/180831_3lccd4912aec0lb8fga9ji7ah6bkd_640x960.jpg_560x999.jpg',
    inventoryCount: 4339,
    saleCount: 1382,
    favorCount: 55,
    address: '南京',
    categoryId: 8,
    createAt: '2021-04-30T13:42:54.000Z',
    updateAt: '2021-04-30T13:42:54.000Z'
  },
  {
    id: 170,
    name: '2018秋裝套裝新款韓版百搭顯瘦長袖條紋雪紡襯衫女寬松直筒背帶褲套裝兩件套',
    oldPrice: '84',
    newPrice: '59',
    enable: '2018秋裝套裝新款韓版百搭顯瘦長袖條紋雪紡襯衫女寬松直筒背帶褲套裝兩件套',
    status: 1,
    imgUrl:
      'http://s11.mogucdn.com/mlcdn/c45406/180312_5ebi8i8k389leic0g487h3l611kek_640x960.jpg_560x999.jpg',
    inventoryCount: 7966,
    saleCount: 1384,
    favorCount: 80,
    address: '西安',
    categoryId: 3,
    createAt: '2021-04-30T13:42:54.000Z',
    updateAt: '2021-04-30T13:42:54.000Z'
  }
]
export default [
  {
    url: '/goods/list',
    type: 'post',
    response: () => {
      return {
        code: 0,
        data: {
          list,
          totalCount: list.length * 15
        }
      }
    }
  }
]
