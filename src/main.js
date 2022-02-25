import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router/index.js'
import 'normalize.css/normalize.css'

import {
        Toast,
        Skeleton,
        Swipe,
        SwipeItem
} from 'vant';

let router = createRouter({
        history: createWebHashHistory(),
        routes
})

let instance = createApp(App)
instance.use(router)
instance.use(Toast)
instance.use(Skeleton)
instance.use(Swipe)
instance.use(SwipeItem)
instance.mount('#app');
