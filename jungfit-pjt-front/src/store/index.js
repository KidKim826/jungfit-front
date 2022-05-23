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
        partVideos:[],
        p1: [],
        p2: [],
        p3: [],
        p4: [],
    },
    getters: {},
    mutations: {
        GET_YOUTUBE_LIST(state, value) {
            state.videos = value
            state.a = [value[0], value[1], value[2]]
            state.b = [value[3], value[4], value[5]]
            state.c = [value[6], value[7], value[8]]
            state.d = [value[9], value[10], value[11]]
            console.log(state.videos)
        },
        GET_PART_LIST(state, value) {
            state.partVideos = value
            state.p1 = [value[0], value[1], value[2]]
            state.p2 = [value[3], value[4], value[5]]
            state.p3 = [value[6], value[7], value[8]]
            state.p4 = [value[9], value[10], value[11]]
          
            console.log(state.p1)
            console.log(state.p2)
            console.log(state.p3)
            console.log(state.p4)
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
            state.partVideos.forEach(v => {
                if (v.videoId === value) {
                    state.selectedVideo.push(v)
                        // console.log(state.selectedVideo)
                }
            });
        }

    },
    actions: {
        getPartList({commit}, value) {
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
              commit('GET_PART_LIST', res.data)
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
                commit("GET_YOUTUBE_LIST", res.data.items)
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