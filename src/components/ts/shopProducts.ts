export interface Iproduct {
    id: number
    name: string
    about: string
    category: string
    cost: number
    qty: number
    img: string
    addQty():void
    removeQty():void
    totalCost(): number
}

export class product implements Iproduct {
    id: number
    name: string
    about: string
    category: string
    cost: number
    qty: number
    img: string
    constructor(obj: {
        id: number
        name: string
        about: string
        category: string
        cost: number
        qty: number
        img: string
    }) {
        this.id = obj.id
        this.name = obj.name
        this.about = obj.about
        this.category = obj.category
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

const sportBottle = new product({
    id: 4,
    name: 'Sport Water Bottle',
    about: '350ml, grey',
    category: 'inventory',
    cost: 2,
    qty: 1,
    img: 'https://i.pinimg.com/564x/18/b8/e4/18b8e49ad8dee538f4ed8f1e4fb109bb.jpg'
})
const bandage = new product({
    id: 5,
    name: 'Bandage',
    about: 'white',
    category: 'inventory',
    cost: 3,
    qty: 1,
    img: 'https://i.pinimg.com/564x/fa/41/23/fa412341b835f1de30df12b9af7de735.jpg'
})
const wristBand = new product({
    id: 6,
    name: 'Wrist Band',
    about: 'Green',
    category: 'inventory',
    cost: 5,
    qty: 1,
    img: 'https://i.pinimg.com/564x/20/74/ba/2074ba5a2a6464a265063083245be8c2.jpg'
})
const pickle = new product({
    id: 7,
    name: 'Pickleball',
    about: 'Black',
    category: 'inventory',
    cost: 7,
    qty: 1,
    img: 'https://i.pinimg.com/564x/7b/03/fd/7b03fd3fed33950666afbe8d4e6241cf.jpg'
})
const dumbbell = new product({
    id: 8,
    name: 'Dumbbell',
    about: '10LB, Blue',
    category: 'inventory',
    cost: 12,
    qty: 1,
    img: 'https://i.pinimg.com/564x/28/85/ce/2885ce7620dc28a5a9da9896c7bdd210.jpg'
})
const kettlebell = new product({
    id: 9,
    name: 'Kettlebell',
    about: '20LB, blue',
    category: 'inventory',
    cost: 15,
    qty: 1,
    img: 'https://i.pinimg.com/564x/74/bf/91/74bf91511e46e3b336e28bef1d6cbef7.jpg'
})
const puller = new product({
    id: 10,
    name: 'Puller',
    about: '4 collor',
    category: 'inventory',
    cost: 11,
    qty: 1,
    img: 'https://i.pinimg.com/564x/c2/50/4c/c2504c689b1a225697c8d98a121a7ab7.jpg'
})
const handGrip = new product({
    id: 10,
    name: 'Hand Grip',
    about: '70-80LB, black',
    category: 'inventory',
    cost: 8,
    qty: 1,
    img: 'https://i.pinimg.com/564x/1d/08/7b/1d087b637ea3fdd51a3228fc8e1a4004.jpg'
})
const protein1 = new product({
    id: 11,
    name: 'Impact Whey Protein',
    about: '500g, white',
    category: 'pharmacy',
    cost: 15,
    qty: 1,
    img: 'https://i.pinimg.com/564x/a5/0a/45/a50a451afd231450bff8b5797cc11a11.jpg'
})
const protein2 = new product({
    id: 12,
    name: 'Jap Mockup',
    about: '700g, green',
    category: 'pharmacy',
    cost: 17,
    qty: 1,
    img: 'https://i.pinimg.com/564x/37/11/4e/37114e8df1b1a13d43f9304f9d522971.jpg'
})
const protein3 = new product({
    id: 13,
    name: 'Advanced Whey',
    about: '300g, orange',
    category: 'pharmacy',
    cost: 10,
    qty: 1,
    img: 'https://i.pinimg.com/564x/57/b3/ed/57b3ed72a52024f46c1a6ffd33d9f796.jpg'
})
const protein4 = new product({
    id: 14,
    name: 'Recovery Protein',
    about: '400g, pink',
    category: 'pharmacy',
    cost: 12,
    qty: 1,
    img: 'https://i.pinimg.com/564x/f3/52/46/f352467ae72062c51e6ff74da55d4be6.jpg'
})
const protein5 = new product({
    id: 15,
    name: 'Blackisolate',
    about: '500g, Black',
    category: 'pharmacy',
    cost: 13,
    qty: 1,
    img: 'https://i.pinimg.com/564x/5b/55/36/5b5536250ed5d441038b16f27e013480.jpg'
})
const cofee = new product({
    id: 16,
    name: 'Eco Coffee',
    about: 'Capuccino, 300g',
    category: 'pharmacy',
    cost: 15,
    qty: 1,
    img: 'https://i.pinimg.com/564x/51/35/50/513550891cc6cf5425d8830cbf55196f.jpg'
})
const vitamine = new product({
    id: 17,
    name: 'Vitamines STUNN',
    about: 'Multiple Complex',
    category: 'pharmacy',
    cost: 16,
    qty: 1,
    img: 'https://i.pinimg.com/564x/cd/8e/5b/cd8e5b6b4a64eed3689b74f3b9a531d3.jpg'
})
const vitamine2 = new product({
    id: 18,
    name: 'VidaCap',
    about: '60 tablets',
    category: 'pharmacy',
    cost: 10,
    qty: 1,
    img: 'https://i.pinimg.com/564x/52/2f/4f/522f4fef316de6fabfde5f3f48238ee6.jpg'
})
const wear1 = new product({
    id: 19,
    name: 'Gym Wear',
    about: 'Black',
    category: 'clothes',
    cost: 5,
    qty: 1,
    img: 'https://i.pinimg.com/564x/09/c3/3b/09c33bc0f76d56b1734a9d5a474c6e85.jpg'
})
const wear2 = new product({
    id: 20,
    name: 'Wear Muscle Doctor',
    about: 'White',
    category: 'clothes',
    cost: 6,
    qty: 1,
    img: 'https://i.pinimg.com/564x/81/1d/db/811ddb98114deb189b7634c827457a0a.jpg'
})
const wear3 = new product({
    id: 21,
    name: 'Mr Alpha',
    about: '300g, orange',
    category: 'clothes',
    cost: 7,
    qty: 1,
    img: 'https://i.pinimg.com/564x/77/16/8a/77168a1fdfda25f6ebc1137ab4bf8dbb.jpg'
})
const wear4 = new product({
    id: 22,
    name: 'Hoodie',
    about: 'Black',
    category: 'clothes',
    cost: 10,
    qty: 1,
    img: 'https://i.pinimg.com/564x/05/cf/b0/05cfb0f2738343ab347990b8e8f44e0d.jpg'
})
const wear5 = new product({
    id: 23,
    name: 'Red Hoodie',
    about: 'Red',
    category: 'clothes',
    cost: 15,
    qty: 1,
    img: 'https://i.pinimg.com/736x/ca/4a/b2/ca4ab2aae01ece4b3604121bb08b89bc.jpg'
})
const japanWear = new product({
    id: 24,
    name: 'Japan Merch',
    about: 'Original',
    category: 'clothes',
    cost: 13,
    qty: 1,
    img: 'https://i.pinimg.com/564x/cf/f8/e3/cff8e36e6380de809536b4fc39b7e4b4.jpg'
})
const hawaiiWear = new product({
    id: 25,
    name: 'Hawaian Wear',
    about: 'White, original',
    category: 'clothes',
    cost: 15,
    qty: 1,
    img: 'https://i.pinimg.com/564x/0d/b2/e3/0db2e3ad4e6c1e6926eb6b074faeea1f.jpg'
})
const blackWear = new product({
    id: 26,
    name: 'Rubashka blin',
    about: 'black',
    category: 'clothes',
    cost: 10,
    qty: 1,
    img: 'https://i.pinimg.com/564x/d2/45/8a/d2458a414102c4647d27820b04afb367.jpg'
})
const clock1 = new product({
    id: 27,
    name: 'Clock Xiaomi',
    about: 'Black',
    category: 'clocks',
    cost: 20,
    qty: 1,
    img: 'https://i.pinimg.com/564x/2a/1f/eb/2a1feb4c5d1eddb2be5fc69245b433bc.jpg'
})
const clock2 = new product({
    id: 28,
    name: 'Clock Samsung',
    about: 'Red',
    category: 'clocks',
    cost: 26,
    qty: 1,
    img: 'https://i.pinimg.com/564x/16/e2/a9/16e2a94d5d3ee844494f2029c7b12a11.jpg'
})
const clock3 = new product({
    id: 29,
    name: 'Clock Apple',
    about: 'White',
    category: 'clocks',
    cost: 30,
    qty: 1,
    img: 'https://i.pinimg.com/736x/ae/4a/23/ae4a234c6c8b449dbe92c06d5fa9e615.jpg'
})
const clock4 = new product({
    id: 30,
    name: 'Clock Negr',
    about: 'Black',
    category: 'clocks',
    cost: 22,
    qty: 1,
    img: 'https://i.pinimg.com/564x/29/3b/4c/293b4ca7f735bc516e9b23b25c7a5e59.jpg'
})

const shopProducts = [sportBottle,bandage,wristBand,pickle,dumbbell,kettlebell,puller,handGrip,protein1, protein2, protein3, protein4, protein5, cofee, vitamine, vitamine2, wear1,wear2,wear3,wear4,wear5,japanWear,hawaiiWear,blackWear,clock1,clock2,clock3,clock4 ]

export {shopProducts}