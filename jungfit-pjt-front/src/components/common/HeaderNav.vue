<template>

  <header id="app" >

  <v-app>
    <div>
      <v-app-bar class="text-uppercase"
        color="deep-purple"
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>jungfit</v-toolbar-title>
        <v-spacer></v-spacer>
           <router-link :to="{name:'videoList'}">영상보기 </router-link>     
        
        <v-spacer></v-spacer>
        <div v-if="isLogin">
          <router-link :to="'/user/mypage/'+user">{{user}} </router-link>
          <span> 님 환영합니다!</span>
          <v-btn flat @click="LogOut"><span>로그아웃</span></v-btn>
        </div>
        <div v-else>
          <router-link :to="'/user/loginform'">
          <v-btn flat>
            <span>로그인</span>
          </v-btn>
          </router-link>
        </div>
        
        
      </v-app-bar>
  </div>
  </v-app>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-avatar size="100">
              <img src="https://img.icons8.com/emoji/344/princess.png" alt="내프로필사진입니다.">
            </v-avatar>
            <p class="white--text subheading mt-1" v-if="isLogin">
              {{user}}
            </p>
          </v-flex>
        </v-layout>
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <!-- 홈 -->
            <router-link :to="'/'">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title> HOME</v-list-item-title>
              </v-list-item>
            </router-link>
            <!-- 동영상 -->
            <router-link :to="'/video'">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-youtube</v-icon>
                </v-list-item-icon>
                <v-list-item-title> VIDEO</v-list-item-title>
              </v-list-item>
            </router-link>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
</header>

</template>

<script>
import { mapState } from "vuex";
export default {
  
  data() {
    return {
    drawer: false,
    group: null,
    
    }
  },
  computed: {
    ...mapState(["isLogin", "user"])
  },
  methods: {
    LogOut() {
       this.$store.dispatch("userLogout");
    }
  },

}
</script>

<style>
.v-avatar{
  margin: 78px;
}
p {
  margin-top: -60px;
  text-align: center;
}
div>.v-list-item {
  
}

</style>