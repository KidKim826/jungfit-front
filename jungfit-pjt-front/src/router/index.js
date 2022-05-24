import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AdminView from '@/views/AdminView.vue'
// import VideoView from '@/views/VideoView.vue'

import VReviewView from '@/views/VReviewView.vue'
import VideoList from '@/components/videos/VideoList.vue'
import VReviewList from '@/components/videos/VReviewList.vue'
import VReviewDetail from '@/components/videos/VReviewDetail.vue'
import VReviewCreate from '@/components/videos/VReviewCreate.vue'
import VReviewUpdate from '@/components/videos/VReviewUpdate.vue'
import MemberLogin from '@/components/login/MemberLogin.vue'
import SignIn from '@/components/login/SignIn.vue'
import ManagerLogin from '@/components/admin/ManagerLogin.vue'
import ManagerView from '@/components/admin/ManagerAdmin.vue'
import MyPage from '@/components/login/MyPage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/user',
        name: 'user',
        component: LoginView,
        children: [{
                path: "loginform",
                name: "MemberLogin",
                component: MemberLogin

            },
            {
                path: "signinform",
                name: "SignIn",
                component: SignIn
            },
            {
                path: "mypage/:userid",
                name: "MyPage",
                component: MyPage
            }
        ]
    },
    {
        path:'/admin',
        name: 'AdminView',
        component: AdminView,
        children: [
            {
                path: "login",
                name: "ManagerLogin",
                component: ManagerLogin
            },
            {
                path: "/manager",
                name: "ManagerView",
                component: ManagerView

            },
        ]
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
    },
    {
        path: '/review',
        name: 'review',
        component: VReviewView,
        children: [{
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