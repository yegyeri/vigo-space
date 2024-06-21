interface IBlogPost {
    id: number
    title: string
    text: string
    date: string
    img: string
    popular: string
    author: string
    likes: number
    like: boolean
    comments: number
    commentList: []
    addLike(): void
    addComment(product: Object): void
}

export class BlogPost implements IBlogPost {
    id: number
    title: string
    text: string
    date: string
    img: string
    popular: string
    author: string
    likes: number
    like: boolean
    comments: number
    commentList: []
    constructor(obj: {
        id: number
        title: string
        text: string
        date: string
        img: string
        popular: string
        author: string
        likes: number
        like: boolean
        comments: number
        commentList: any
    }) {
        this.id = obj.id
        this.title = obj.title
        this.text = obj.text
        this.date = obj.date
        this.img = obj.img
        this.popular = obj.popular
        this.author = obj.author
        this.likes = obj.likes
        this.like = obj.like
        this.comments = obj.comments
        this.commentList = obj.commentList
    }
    addLike(): void {
        if (!this.like) {
            this.likes += 1
            this.like = true
        } else if (this.like) {
            this.likes -= 1
            this.like = false
        }


    }
    addComment(product: Object): void {
        this.commentList.push(product)
    }
}

const post1 = new BlogPost({
    id: 1,
    title: 'Top Sports Trends in 2024',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a Contrary to Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of class popular belief, Lorem Ipsum is not simply Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of class random text. It has roots in a piece of class piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a Contrary to Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of class popular belief, Lorem Ipsum is not simply Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of class random text. It has roots in a piece of class piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a Contrary to Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of class popular belief, Lorem Ipsum is not simply Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of class random text. It has roots in a piece of class piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    date: 'March 22, 2022',
    img: 'https://img3.akspic.ru/crops/8/0/9/5/3/135908/135908-ruka-myshca-muaj_taj-plot-kikboksing-2560x1440.jpg',
    popular: 'popular',
    author: 'Hazel Kennedy',
    like: false,
    likes: 756,
    comments: 43,
    commentList: [
        {
            id: 1,
            name: 'Thomas Lopez',
            text: 'So good post, i love this author'
        },
        {
            id: 2,
            name: 'Darrell Schneider',
            text: 'Curabitur lorem purus, posuere sit.'
        },
        {
            id: 3,
            name: 'David Dean',
            text: 'Sed ac massa laoreet, sagittis.'
        },
        {
            id: 4,
            name: 'Steve Gonzales',
            text: 'Pellentesque habitant morbi tristique senectus.'
        },
        {
            id: 5,
            name: 'James Parker',
            text: 'good'
        },
        
    ]
})

const post2 = new BlogPost({
    id: 2,
    title: 'Guide to Sports Nutrition in 2024',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using king it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search foover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    date: 'July 5, 2023',
    img: 'https://img2.akspic.ru/crops/7/7/3/0/20377/20377-zanyatie_sportom-borec-ruka-bokserskaya_perchatka-fizicheskaya_podgotovka-2560x1440.jpg',
    popular: '',
    author: 'Donna Jacobs',
    likes: 446,
    like: false,
    comments: 22,
    commentList: []
})
const post3 = new BlogPost({
    id: 3,
    title: 'The Evolution of Basketball in 2024',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    date: 'April 10, 2024',
    img: 'https://img2.akspic.ru/crops/4/3/4/0/20434/20434-chelovecheskaya_noga-ruka-zdorove-fizicheskaya_podgotovka-plecho-2560x1440.jpg',
    popular: 'popular',
    author: 'Brenda Burns',
    likes: 656,
    like: false,
    comments: 23,
    commentList: []
})
const post4 = new BlogPost({
    id: 4,
    title: 'Top Sports Trends in 2024',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    date: 'August 22, 2023',
    img: 'https://img2.akspic.ru/crops/1/3/9/9/19931/19931-sportivnoe_oborudovanie-sustav-silovaya_trenirovka-ves-fitness_centr-2560x1440.jpg',
    popular: '',
    author: 'Hazel Kennedy',
    likes: 666,
    like: false,
    comments: 13,
    commentList: []
})
const post5 = new BlogPost({
    id: 5,
    title: 'The Basketball Strategy in 2024',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    date: 'March 12, 2023',
    img: 'https://img1.akspic.ru/crops/8/0/4/2408/2408-aerobnoe_uprazhnenie-ves-plecho-silovye_trenirovki-trenazhery-2560x1440.jpg',
    popular: '',
    author: 'Juanita Stevens',
    likes: 756,
    like: false,
    comments: 43,
    commentList: []
})
const post6 = new BlogPost({
    id: 6,
    title: 'Basketball Athletes in 2024',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    date: 'May 13, 2024',
    img: 'https://img2.akspic.ru/crops/6/5/9/5/3/135956/135956-fizicheskaya_podgotovka-silovaya_trenirovka-ves-trening-uprazhnenie-2560x1440.jpg',
    popular: '',
    author: 'Hazel Kennedy',
    likes: 226,
    like: false,
    comments: 9,
    commentList: []
})
const post7 = new BlogPost({
    id: 7,
    title: 'Top Danil Trends to Watch in 2024',
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatiContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classn literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    date: 'April 8, 2024',
    img: 'https://img2.akspic.ru/crops/1/0/1/6/3/136101/136101-sportivnyj_inventar-gimnastika-uprazhnenie-silovaya_trenirovka-krossfit-2560x1440.jpg',
    popular: 'popular',
    author: 'Denzel Washington',
    likes: 999,
    like: false,
    comments: 99,
    commentList: []
})

export { post1, post2, post3, post4, post5, post6, post7 }