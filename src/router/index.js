import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'danh-muc-nhan-vien',
    component: () => import( '../views/danh-muc-nhan-vien.vue')
  },
  {
    path: '/danhmuckhachhang',
    name: 'danh-muc-khach-hang',
    component: () => import( '../views/danh-muc-khach-hang.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
