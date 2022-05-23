import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistateState from "vuex-persistedstate";

Vue.use(Vuex)

const REST_API = `http://localhost:9999/jungfit`

export default new Vuex.Store({
    // plugins: [createPersistateState()],
    state: {
        videos: [],
        a: [],
        b: [],
        c: [],
        d: [],
        selectedVideo: [],
        topVideos:[],
        t1: [],
        t2: [],
        t3: [],
        t4: [],
    },
    getters: {},
    mutations: {
        GET_PART_LIST(state, value) {
            state.videos = value
            state.a = [value[0], value[1], value[2]]
            state.b = [value[3], value[4], value[5]]
            state.c = [value[6], value[7], value[8]]
            state.d = [value[9], value[10], value[11]]
            console.log(state.videos)
        },
        GET_TOP_LIST(state, value) {
            state.topVideos = value
            state.t1 = [value[0], value[1], value[2]]
            state.t2 = [value[3], value[4], value[5]]
            state.t3 = [value[6], value[7], value[8]]
            state.t4 = [value[9], value[10], value[11]]
          
            console.log(state.t1)
            console.log(state.t2)
            console.log(state.t3)
            console.log(state.t4)
        },
        GET_VREVIEW_LIST(state, value) {
            // console.log(value)
            state.selectedVideo = [];
            state.videos.forEach(v => {
                if (v.id.videoId === value) {
                    state.selectedVideo.push(v)
                        // console.log(state.selectedVideo)
                }
            });

        }

    },
    actions: {
        getTopList({commit}, value) {
            let params = null

            if(value) { //들어오는 payload가 있다면
              params = value //params는 payload로
            }
            const API_URL=`${REST_API}/video/list/part/`+params
            axios({
              url: API_URL,
              method:'GET',
              params, //그걸 같이 넘겨줘
            }).then((res) => {
              console.log(res)
              commit('GET_TOP_LIST', res.data)
            }).catch((err) => {
              console.log(err)
            })    
        },
        getYoutubeList({ commit }, value) {
            const YOUTUBE_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
            const API_URL = `https://www.googleapis.com/youtube/v3/search`
            const params = {
                key: YOUTUBE_KEY,
                part: 'snippet',
                type: 'video',
                q: value,
                maxResults: 12
            }

            axios({
                url: API_URL,
                method: 'GET',
                params: params,
            })

            .then((res) => {
                commit("GET_PART_LIST", res.data.items)
                    // console.log(res.data.items)
            })

            .catch((err) => {
                console.log(err)
                console.log("에러남")
            })
        },
        getVReviewList({ commit }, value) {
            commit('GET_VREVIEW_LIST', value)

        }
    },
    modules: {}
})