import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import VideoView from '@/views/VideoView.vue'

import VideoList from '@/components/videos/VideoList.vue'
import VReviewList from '@/components/videos/VReviewList.vue'
// import VReviewDetail from '@/components/videos/VReviewDetail.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/video',
        name: 'video',
        component: VideoView,
        children: [{
            path: "",
            name: "videoList",
            component: VideoList
        }, {
            path: "review/:id",
            name: "VReviewList",
            component: VReviewList
        }]

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router