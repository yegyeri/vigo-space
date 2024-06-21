import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/components/home-view-app/home__view.vue'
import home_about from '@/components/about-gyms-apps/about-gym.vue'
import coaches from '@/components/coaches-apps/coach_feed.vue'
import price_fit from '@/components/tickets-prices-apps/price_fit.vue'
import blog_news from '@/components/blog-news-apps/blog_news.vue'
import shop_fit from '@/components/shop-apps/shop_feed.vue'
import contacts from '@/components/contacts-apps/contact_feed.vue'
import paymentInfo from '@/components/home-view-app/cart-components/payment-info.vue'
import ProfileSettings from '@/components/authentific-apps/profile-settings.vue'
import LoginPage from '@/components/authentific-apps/login-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/about',
          component: home_about,
          
        },
        {
          path: '/coaches',
          component: coaches
        },
        {
          path: '/price',
          component: price_fit
        },
        {
          path: '/blog',
          name: 'blog-news',
          component: blog_news
        },
        {
          path: '/shop_fit',
          component: shop_fit,
        },
        {
          path: '/contacts',
          component: contacts
        },
        {
          path: '/payment',
          component: paymentInfo
        },
        {
          path: '/profile',
          component: ProfileSettings
        }
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      alias: '/'
    }
  ]
})

export default router
