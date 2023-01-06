export interface IAddProducts {
  id?: number,
  name:string,
  amount:string
}
export interface IGetProducts extends IAddProducts{
  orderId: number | null,
}

// {
//   "id": 1,
//   "name": "Poção de cura",
//   "amount": "20 gold",
//   "orderId": null
// },