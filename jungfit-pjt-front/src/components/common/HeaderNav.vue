<template>
  <header id="app">
    <v-app>
      <div>
        <v-app-bar color="#343434" dark>
          <v-row justify="space-between">
            <v-col class="d-flex justify-start align-center">
              <span>
                <v-app-bar-nav-icon @click="drawer = true" id="appbar-item"></v-app-bar-nav-icon>
              </span>
              <router-link :to="'/'" style="text-decoration:none">
                <span class="companyname text-uppercase ml-2" spellcheck="false">jungfit</span>
              </router-link>
              <!--여까지 완-->
            </v-col>

            <v-col class="d-flex justify-end align-center">
              <div>
                <span>
                  <toggle-button :value="false" :labels="{checked: 'Ar', unchecked: 'Ko'}" />
                </span>
                <!-- <span>
                  <input v-if="checked" type="checkbox" @change="changeSwitcher" checked="checked" />
                  <input v-else type="checkbox" @change="changeSwitcher" />
                </span>-->
                <span>
                  <router-link class="test" :to="{name:'videoList'}" style="text-decoration:none">
                    <v-btn text id="appbar-item">VIDEO</v-btn>
                  </router-link>
                </span>
                <span>
                  <router-link class="test" :to="{name:'KakaoMap'}" style="text-decoration:none">
                    <v-btn text id="appbar-item">LOCATION</v-btn>
                  </router-link>
                </span>
                <span v-if="isLogin">
                  <span>
                    <router-link :to="'/user/mypage/'" style="text-decoration:none">
                      <v-btn text id="appbar-item">MYPAGE</v-btn>
                    </router-link>
                  </span>
                  <span class="appbar-item">
                    <v-btn text id="appbar-item" @click="LogOut">
                      <span>LOGOUT</span>
                    </v-btn>
                  </span>
                </span>
                <span v-else>
                  <span class="appbar-item">
                    <router-link :to="'/user/loginform'" style="text-decoration:none">
                      <v-btn text id="appbar-item">
                        <span>LOGIN</span>
                      </v-btn>
                    </router-link>
                  </span>
                </span>
              </div>
            </v-col>
          </v-row>
        </v-app-bar>
      </div>
    </v-app>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img
              :src="`http://localhost:9999/jungfit/img/`+userInfo.fileName"
              alt="내프로필사진입니다."
              style="aspect-ratio: 1/1;"
            />
          </v-avatar>
          <p class="white--text subheading mt-1" v-if="isLogin" style="font-size:15px">{{user}}</p>
        </v-flex>
      </v-layout>
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">
          <!-- 홈 -->
          <router-link :to="'/'" style="text-decoration:none">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>HOME</v-list-item-title>
            </v-list-item>
          </router-link>
          <!-- 동영상 -->
          <router-link :to="'/video'" style="text-decoration:none">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-youtube</v-icon>
              </v-list-item-icon>
              <v-list-item-title>VIDEO</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
        <v-btn
          v-if="this.adminLogin === false"
          class="ma-2"
          dark
          :to="'/admin/login'"
          style="text-decoration:none"
        >
          <v-icon dark>mdi-wrench</v-icon>
        </v-btn>
        <v-btn v-else-if="this.adminLogin === true" dark @click="LogOutManager">logout</v-btn>
        <Translator @on-country-click="customEvent" :countries="arrayOfCountries" />
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import { Translator } from "vue-google-translate";
import { mapState } from "vuex";
export default {
  components: {
    Translator
  },
  data() {
    return {
      drawer: false,
      group: null,
      sync: true,
      islanguage: false,
      arrayOfCountries: [
        {
          code: "en|ko",
          title: "Korean",
          flagIconUrl: "https://flagicons.lipis.dev/flags/4x3/ko.svg",
          altText: "Korean language translation"
        },
        {
          code: "en|en",
          title: "English",
          flagIconUrl: "https://flagicons.lipis.dev/flags/4x3/en.svg",
          altText: "English language translation"
        },
        {
          code: "en|ar",
          title: "Arabic",
          flagIconUrl: "https://flagicons.lipis.dev/flags/4x3/ar.svg",
          altText: "Arabic language translation"
        }
      ]
    };
  },
  computed: {
    ...mapState(["isLogin", "user", "adminLogin", "userInfo"])
  },
  methods: {
    LogOut() {
      this.$store.dispatch("userLogout");
    },
    LogOutManager() {
      this.$store.dispatch("managerLogout");
    },
    changeLanguage() {
      console.log("이것이 싱크" + this.sync);

      this.$store.dispatch("changeLanguage", this.sync);
    }
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Exo+2:200i);

.v-avatar {
  margin: 78px;
}
p {
  margin-top: -60px;
  text-align: center;
}

:root {
  /* Base font size */
  font-size: 10px;

  /* Set neon color */
  --neon-text-color: #f40;
  --neon-border-color: #08f;
}

body {
  font-family: "Exo 2", sans-serif;
  justify-content: center;
  background: black;
  min-height: 100vh;
}

.companyname {
  font-size: 15px;
  font-weight: 300;
  font-style: italic;
  color: #fff;
  padding: 0.6rem 0.7rem 0.5rem 0.5rem;
  border: 0.4rem solid #fff;
  border-radius: 2rem;
  text-transform: uppercase;
  animation: flicker 1.5s infinite alternate;
}

#appbar-item {
  color: #43d7d9;
  font-size: 13px;
  text-shadow: 0 0 5px rgb(60, 186, 184), 0 0 10px rgb(99, 194, 193),
    0 0 20px rgb(131, 211, 210), 0 0 40px rgb(231, 254, 234), 0 0 80px #ffffff,
    0 0 90px rgb(132, 205, 203), 0 0 100px rgb(110, 209, 207),
    0 0 150px rgb(60, 186, 184);
  font-style: italic;
  font-weight: bold;
}

.appbar-main {
  text-decoration: none;
}

h1::-moz-selection {
  background-color: var(--neon-border-color);
  color: var(--neon-text-color);
}

h1::selection {
  background-color: var(--neon-border-color);
  color: var(--neon-text-color);
}

h1:focus {
  outline: none;
}

/* Animate neon flicker */
@keyframes flicker {
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow: -0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff,
      0 0 2rem var(--neon-text-color), 0 0 4rem var(--neon-text-color),
      0 0 6rem var(--neon-text-color), 0 0 8rem var(--neon-text-color),
      0 0 10rem var(--neon-text-color);

    box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff,
      0 0 2rem var(--neon-border-color), inset 0 0 2rem var(--neon-border-color),
      0 0 4rem var(--neon-border-color), inset 0 0 4rem var(--neon-border-color);
  }

  20%,
  24%,
  55% {
    text-shadow: none;
    box-shadow: none;
  }
}
</style>