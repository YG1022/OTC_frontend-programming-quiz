export type good = {
  id: string;
  name: string;
  description: string;
  cover: string;
  stock: number;
  price: number;
  amount: number;
};

export type goodsSate = {
  goodsList: good[];
  setGoodsList: (goodsList: goodsSate["goodsList"]) => void;
  updateGood: (good: good) => void;
};

export type order = {
  id: number;
  consignee: string;
  nickName: string;
  prefix: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  address: string;
  goods: good[];
  totalPrice: number;
};

export type ordersState = {
  ordersList: order[];
  setOrdersList: (ordersList: ordersState["ordersList"]) => void;
  deleteOrder: (id: number) => void;
};
