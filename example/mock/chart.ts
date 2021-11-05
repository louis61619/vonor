const goodsAmountList = [
  {
    amount: 'sale',
    title: '商品銷售總量',
    tips: '所有商品銷售總量',
    subtitle: '商品銷售總量',
    number1: 511685,
    number2: 511685
  },
  {
    amount: 'favor',
    title: '商品總收藏',
    tips: '所有商品總收藏',
    subtitle: '商品總收藏',
    number1: 88437,
    number2: 88437
  },
  {
    amount: 'inventory',
    title: '商品總庫存',
    tips: '所有商品總庫存',
    subtitle: '商品總庫存',
    number1: 885577,
    number2: 885577
  },
  {
    amount: 'saleroom',
    title: '商品總銷售額',
    tips: '所有商品總銷售額',
    subtitle: '商品總銷售額',
    number1: 43145980,
    number2: 43145980
  }
]

const goodsCategoryCount = [
  {
    id: 2,
    name: '上衣',
    goodsCount: 15
  },
  {
    id: 3,
    name: '褲子',
    goodsCount: 20
  },
  {
    id: 4,
    name: '鞋子',
    goodsCount: 19
  },
  {
    id: 5,
    name: '廚具',
    goodsCount: 19
  },
  {
    id: 6,
    name: '家具',
    goodsCount: 20
  },
  {
    id: 7,
    name: '床上用品',
    goodsCount: 19
  },
  {
    id: 8,
    name: '女裝',
    goodsCount: 35
  }
]

const goodsCategorySale = [
  {
    id: 2,
    name: '上衣',
    goodsCount: 51259
  },
  {
    id: 3,
    name: '褲子',
    goodsCount: 84813
  },
  {
    id: 4,
    name: '鞋子',
    goodsCount: 58283
  },
  {
    id: 5,
    name: '廚具',
    goodsCount: 57479
  },
  {
    id: 6,
    name: '家具',
    goodsCount: 49004
  },
  {
    id: 7,
    name: '床上用品',
    goodsCount: 98579
  },
  {
    id: 8,
    name: '女裝',
    goodsCount: 112268
  }
]

const goodsCategoryFavor = [
  {
    id: 2,
    name: '上衣',
    goodsFavor: 6919
  },
  {
    id: 3,
    name: '褲子',
    goodsFavor: 5251
  },
  {
    id: 4,
    name: '鞋子',
    goodsFavor: 19647
  },
  {
    id: 5,
    name: '廚具',
    goodsFavor: 13974
  },
  {
    id: 6,
    name: '家具',
    goodsFavor: 15428
  },
  {
    id: 7,
    name: '床上用品',
    goodsFavor: 7307
  },
  {
    id: 8,
    name: '女裝',
    goodsFavor: 19911
  }
]

const goodsAddressSale = [
  { address: '新竹市', count: 62298 },
  { address: '澎湖縣', count: 55683 },
  { address: '屏東縣', count: 53716 },
  { address: '南投縣', count: 6364 },
  { address: '宜蘭縣', count: 64976 },
  { address: '新竹市', count: 4142 },
  { address: '基隆市', count: 9524 },
  { address: '桃園縣', count: 28212 },
  { address: '澎湖縣', count: 60777 }
]

export default [
  {
    url: '/goods/amount/list',
    type: 'get',
    response: () => {
      return {
        code: 0,
        data: goodsAmountList
      }
    }
  },
  {
    url: '/goods/category/count',
    type: 'get',
    response: () => {
      return {
        code: 0,
        data: goodsCategoryCount
      }
    }
  },
  {
    url: '/goods/category/sale',
    type: 'get',
    response: () => {
      return {
        code: 0,
        data: goodsCategorySale
      }
    }
  },
  {
    url: '/goods/category/favor',
    type: 'get',
    response: () => {
      return {
        code: 0,
        data: goodsCategoryFavor
      }
    }
  },
  {
    url: '/goods/address/sale',
    type: 'get',
    response: () => {
      return {
        code: 0,
        data: goodsAddressSale
      }
    }
  }
]
