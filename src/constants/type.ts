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
