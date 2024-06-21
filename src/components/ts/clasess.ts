import type { Iproduct } from "./interfaces";
export class product implements Iproduct {
    id: number
    name: string
    about: string
    cost: number
    qty: number
    img: string
    constructor(obj: {
        id: number
        name: string
        about: string
        cost: number
        qty: number
        img: string
    }) {
        this.id = obj.id
        this.name = obj.name
        this.about = obj.about
        this.cost = obj.cost
        this.qty = obj.qty
        this.img = obj.img
    }
    totalCost(): number {
        return this.qty * this.cost
    }
    addQty(): void {
        this.qty += 1
    }
    removeQty(): void{
        if(this.qty >= 2){
            this.qty -= 1
        }
    }
}