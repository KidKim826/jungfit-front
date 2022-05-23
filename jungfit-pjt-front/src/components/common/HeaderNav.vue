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
        <v-spacer> </v-spacer>
        <router-link :to="{name:'videoList'}">영상보기 </router-link>        
        
        <v-spacer> </v-spacer>
        <v-btn flat color="white">
          <span>
          <router-link :to="{name:'login'}">로그인 </router-link>
          </span>
        </v-btn>
        
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
              <img src="logo.png" alt="내프로필사진입니다.">
            </v-avatar>
            <p class="white--text subheading mt-1">
              전희정
            </p>
          </v-flex>
        </v-layout>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            v-for="l in links" :key="l.text" router :to="l.route"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>{{l.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{l.text}}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
</header>

</template>

<script>
export default {
 
  data() {
    return {
    drawer: false,
    group: null,
    links: [
      {icon: 'mdi-home', text: 'home', route: '/'},
      {icon: 'mdi-account', text: 'videos', route: '/video'},
      // {icon: 'trainer', text: 'trainers', route: '/'},
      // {icon: 'email', text: 'mail-box', route: '/'},
    ]
    }
  }

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