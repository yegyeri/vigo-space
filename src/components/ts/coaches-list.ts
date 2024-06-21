export interface Icoach {
    id: number
    name: string
    gender: string
    age: number
    kind: string
    img: string
}

export class coach implements Icoach {
    id: number
    name: string
    gender: string
    age: number
    kind: string
    img: string
    constructor(obj: {
        id: number
        name: string
        gender: string
        age: number
        kind: string
        img: string
    }) {
        this.id = obj.id
        this.name = obj.name
        this.gender = obj.gender
        this.age = obj.age
        this.kind = obj.kind
        this.img = obj.img
    }
}

const coach1 = new coach({
    id: 1,
    name: 'Calvin Anderson',
    gender: 'male',
    age: 27,
    kind: 'Cross-Fit',
    img: 'https://i.pinimg.com/736x/15/72/d8/1572d8def9d442ae1cd84be9e27e3981.jpg'
})
const coach2 = new coach({
    id: 2,
    name: 'Thomas Williams',
    gender: 'male',
    age: 33,
    kind: 'Weightlifting',
    img: 'https://i.pinimg.com/564x/ce/a0/49/cea049a3ca7db74773db92b7c8e25be3.jpg'
})
const coach3 = new coach({
    id: 3,
    name: 'Richard Mitchell',
    gender: 'male',
    age: 28,
    kind: 'Fitness & Weight',
    img: 'https://i.pinimg.com/564x/3c/41/60/3c4160cddf4dfdc1c2b52a6a8dee4d5c.jpg'
})
const coach4 = new coach({
    id: 4,
    name: 'Joseph Hill',
    gender: 'male',
    age: 30,
    kind: 'Weight',
    img: 'https://i.pinimg.com/564x/68/35/7a/68357ad114ece5e5390ea6d2a0cbc8ac.jpg'
})
const coach5 = new coach({
    id: 5,
    name: 'David Long',
    gender: 'male',
    age: 25,
    kind: 'Fitness & Footbal',
    img: 'https://i.pinimg.com/564x/53/ad/2d/53ad2d66dd0c85e77faa54fbcc060b8a.jpg'
})
const coach6 = new coach({
    id: 6,
    name: 'Anthony Armstrong',
    gender: 'male',
    age: 35,
    kind: 'Fitness & Weight',
    img: 'https://i.pinimg.com/564x/89/30/a7/8930a79aaad813e18bf9226f208c435f.jpg'
})
const coach7 = new coach({
    id: 7,
    name: 'Carlos Mason',
    gender: 'male',
    age: 28,
    kind: 'Cross-Fit',
    img: 'https://i.pinimg.com/564x/43/6e/9d/436e9df000f857d26f9fe6dc71094b58.jpg'
})
const coach8 = new coach({
    id: 8,
    name: 'Suzanne Lyons',
    gender: 'girl',
    age: 24,
    kind: 'Cross-Fit',
    img: 'https://i.pinimg.com/564x/e2/fc/45/e2fc45e9426d2e72a66df11fea3270ba.jpg'
})
const coach9 = new coach({
    id: 9,
    name: 'Karen Howard',
    gender: 'girl',
    age: 38,
    kind: 'Fitness',
    img: 'https://i.pinimg.com/736x/a9/e8/b9/a9e8b95e1bafa8a3da8d889328f62c09.jpg'
})
const coach10 = new coach({
    id: 10,
    name: 'Patricia Christensen',
    gender: 'girl',
    age: 28,
    kind: 'Fitness',
    img: 'https://i.pinimg.com/564x/05/c2/80/05c2802fddbd245077f7888b0bf6eba0.jpg'
})
const coach11 = new coach({
    id: 11,
    name: 'Mary Fox',
    gender: 'girl',
    age: 23,
    kind: 'Cross-fit',
    img: 'https://i.pinimg.com/564x/bb/c8/52/bbc85221254395aad5f89e775f93a7cd.jpg'
})
const coach12 = new coach({
    id: 12,
    name: 'Virginia Powers',
    gender: 'girl',
    age: 30,
    kind: 'Group Fitness',
    img: 'https://i.pinimg.com/564x/4e/54/d4/4e54d4fb62281a78cf4b3ad6ba945996.jpg'
})
const coach13 = new coach({
    id: 13,
    name: 'Patricia Turner',
    gender: 'girl',
    age: 32,
    kind: 'Fitness',
    img: 'https://i.pinimg.com/564x/1d/9f/f8/1d9ff81f375cd36cfdd0686d2bce7c7d.jpg'
})
const coach14 = new coach({
    id: 14,
    name: 'Deborah Jackson',
    gender: 'girl',
    age: 25,
    kind: 'Group Fitness',
    img: 'https://i.pinimg.com/564x/b2/25/a1/b225a1ec441c6d848ae4e1107541fd7a.jpg'
})

export {coach1,coach2,coach3,coach4,coach10,coach11,coach12,coach13,coach14,coach5,coach6,coach7,coach8,coach9}