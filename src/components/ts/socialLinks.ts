export interface ISocialLink {
    id: number
    name: string
    linkText: string
    linkTo: string
    icon: string
    signUp: boolean
    social: boolean
}

export class socialLinkClass implements ISocialLink {
    id: number
    name: string
    linkText: string
    linkTo: string
    icon: string
    signUp: boolean
    social: boolean
    constructor(obj: {
        id: number
        name: string
        linkText: string
        linkTo: string
        icon: string
        signUp: boolean
        social: boolean
    }) {
        this.id = obj.id
        this.name = obj.name
        this.linkText = obj.linkText
        this.linkTo = obj.linkTo
        this.icon = obj.icon
        this.signUp = obj.signUp
        this.social = obj.social
    }
}

const VK = new socialLinkClass({
    id: 1,
    name: 'VK GROUP',
    linkText: '@vigo-sports',
    linkTo: '#',
    icon: 'bxl-vk',
    signUp: false,
    social: true,
})
const insta = new socialLinkClass({
    id: 2,
    name: 'INSTAGRAM',
    linkText: '@vigo_gyms_sport',
    linkTo: '#',
    icon: 'bxl-instagram-alt',
    signUp: false,
    social: true,
})
const youtube = new socialLinkClass({
    id: 3,
    name: 'YOUTUBE',
    linkText: 'vigo-coachemaster',
    linkTo: '#',
    icon: 'bxl-youtube',
    signUp: false,
    social: true,
})
const phoneNumber = new socialLinkClass({
    id: 4,
    name: 'WHATS APP',
    linkText: '+7-923-005-67-85',
    linkTo: '#',
    icon: 'bx-phone',
    signUp: true,
    social: false,
})
const googleMail = new socialLinkClass({
    id: 5,
    name: 'G-MAil',
    linkText: 'vigo_gyms@gmail.com',
    linkTo: '#',
    icon: 'bxl-gmail',
    signUp: true,
    social: false,
})
const telegram = new socialLinkClass({
    id: 6,
    name: 'TELEGRAM',
    linkText: '@vigogyms',
    linkTo: '#',
    icon: 'bxl-telegram',
    signUp: false,
    social: true,
})
const twitter = new socialLinkClass({
    id: 7,
    name: 'TWITTER',
    linkText: '@vigogyms',
    linkTo: '#',
    icon: 'bxl-twitter',
    signUp: true,
    social: false,
})

export { VK, insta, youtube, phoneNumber, googleMail, telegram, twitter }