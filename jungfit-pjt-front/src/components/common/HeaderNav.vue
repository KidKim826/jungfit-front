<template>
  <header id="app" >
  <v-app>
    <div>
      <v-app-bar 
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
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title >Home</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>MyPage</v-list-item-title>
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
    }
  }

}
</script>

<style>

</style>