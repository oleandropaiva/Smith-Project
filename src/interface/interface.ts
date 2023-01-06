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

// {
//   "id": 1,
//   "name": "Poção de cura",
//   "amount": "20 gold",
//   "orderId": null
// },