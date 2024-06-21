export interface Iproduct {
    id: number
    name: string
    about: string
    cost: number
    qty: number
    img: string
    addQty():void
    removeQty():void
    totalCost(): number
}