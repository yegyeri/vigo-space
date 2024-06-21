export interface Inotify {
    styleClass: string
    icon: string
    text: string
}
export class notifyClass implements Inotify {
    styleClass: string
    icon: string
    text: string
    constructor(obj: {
        styleClass: string
        icon: string
        text: string
    }) {
        this.styleClass = obj.styleClass
        this.icon = obj.icon
        this.text = obj.text
    }
}

const success = new notifyClass({
    styleClass: 'notify-success',
    icon: 'bxs-check-circle',
    text: 'SUCCESS'
})

const info = new notifyClass({
    styleClass: 'notify-info',
    icon: 'bxs-info-circle',
    text: 'INFO'
})

const alert = new notifyClass({
    styleClass: 'notify-alert',
    icon: 'bxs-error-alt',
    text: 'ALERT'
})

const danger = new notifyClass({
    styleClass: 'notify-danger',
    icon: 'bxs-error',
    text: 'DANGER'
})

export {success,info,alert,danger}

