import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import VideoView from '@/views/VideoView.vue'

import VReviewView from '@/views/VReviewView.vue'
import VideoList from '@/components/videos/VideoList.vue'
import VReviewList from '@/components/videos/VReviewList.vue'
import VReviewDetail from '@/components/videos/VReviewDetail.vue'
import VReviewCreate from '@/components/videos/VReviewCreate.vue'
import VReviewUpdate from '@/components/videos/VReviewUpdate.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/video',
        name: 'videoList',
        component: VideoList
            // children: [{
            //         path: "/list",
            //         name: "videoList",
            //         component: VideoList
            //     }] // }, {
            //     path: "/detail",
            //     name: "VReviewDetail",
            //     component: VReviewDetail
            // }]
    }, {
        path: '/review',
        name: 'review',
        component: VReviewView,
        children: [
        {
            path: "video-review/:id",
            name: "VReviewList",
            component: VReviewList
        }, 
        {
            path: "video/:reviewId",
            name: "VReviewDetail",
            component: VReviewDetail
        }, 
        {
            path: "video/create/:id",
            name: "VReviewCreate",
            component: VReviewCreate
        },
        {
            path: "video/modify/:id",
            name: "VReviewUpdate",
            component: VReviewUpdate
        },
    
    ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router