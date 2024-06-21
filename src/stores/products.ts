import { defineStore } from 'pinia'
import { advanced, juniorPrice, middlePrice, proPrice, unlimit } from '@/components/ts/priceList'
import { shopProducts } from '@/components/ts/shopProducts'
import { coach1, coach2, coach3, coach4, coach10, coach11, coach12, coach13, coach14, coach5, coach6, coach7, coach8, coach9 } from "@/components/ts/coaches-list"
import { success, info, alert, danger } from '@/components/ts/notifications'
import { VK, insta, youtube, phoneNumber, googleMail, telegram, twitter } from '@/components/ts/socialLinks'
import { post1, post2, post3, post4, post5, post6, post7 } from '@/components/ts/blog-news'

import { contains } from '@/components/ts/modules'

const productStore = defineStore('products', {
  state: () => ({
    tickets: [advanced, juniorPrice, middlePrice, proPrice, unlimit],
    coaches: [coach1, coach2, coach3, coach4, coach10, coach11, coach12, coach13, coach14, coach5, coach6, coach7, coach8, coach9],
    shopProducts: shopProducts,
    notifications: { success, info, alert, danger },
    socialLinks: {
      signUp: { googleMail, phoneNumber, twitter },
      social: { VK, insta, youtube, telegram }
    },
    posts: [post1, post2, post3, post4, post5, post6, post7],
    cart: [],
    user: {
      name: 'Veronica Porter',
      profilePic: 'https://i.pinimg.com/564x/a1/d4/d4/a1d4d4daceb7281a363bdfab0541b948.jpg',
      location: 'London',
      balance: 7.33,
      date: 'March, 15, 1993',
      mail: 'veronica_porter93@gmail.com',
      gender: 'Female'
    }
  }),

  actions: {
    addToCart(product: Object) {
      if (!contains(this.cart, product)) {
        this.cart.push(product)
      }
    },

    removeFromCart(id: number) {
      this.cart = this.cart.filter((item) => item.id !== id)
    },
  }
})

export { productStore }