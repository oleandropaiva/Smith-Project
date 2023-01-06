export interface IAddProducts {
  id?: number,
  name:string,
  amount:string
}
export interface IGetProducts {
  id: number,
  name:string,
  amount:string,
  orderId: number | null,
}

export interface IGetOrders {
  id: number,
  userId: number,
  productsIds: number[],
}
