const routes = [
   {
           path: '/',
           redirect: '/demo'
   },
   {
           path: '/demo',
           component: () => import(/* webpackChunkName: "Demo" */ '@/views/Demo/Demo.vue')
   }
]
export default routes
