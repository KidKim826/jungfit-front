<template>
  <v-container>
    <h2>MyPage</h2>
    <v-card class="position-relative profile-card mb-7">
      <v-card-text class="pa-5">
        <div class="text-center" v-if="isLogin">
          <img
            src="https://img.icons8.com/emoji/344/princess.png"
            alt="프로필사진입니다."
            class="rounded-circle"
            width="100"
          />
          <h2 class="font-weight-regular">아이디 : {{userInfo.userId}}</h2>
          <h6 class="op-5 font-weight-regular">이름 : {{userInfo.name}}</h6>
          <v-btn
            color="deep-purple accent-2"
            x-large
            class="text-capitalize white--text mt-7"
            rounded
          >
            <v-icon dark>mdi-heart</v-icon>
          </v-btn>
          <v-row class="mt-6">
            <v-col cols="4">
              <h3
                class="mb-0 font-weight-light blue-grey--text text--darken-2"
              >나이 : {{userInfo.age}}</h3>
              <small class="blue-grey--text text--darken-2">age</small>
            </v-col>
            <v-col cols="4">
              <h3
                class="mb-0 font-weight-light blue-grey--text text--darken-2"
              >이메일 : {{userInfo.email}}</h3>
              <small class="blue-grey--text text--darken-2">email</small>
            </v-col>
            <v-col cols="4">
              <h3
                class="mb-0 font-weight-light blue-grey--text text--darken-2"
              >키 : {{userInfo.height}}</h3>
              <small class="blue-grey--text text--darken-2">height</small>
            </v-col>
            <v-col cols="4">
              <h3
                class="mb-0 font-weight-light blue-grey--text text--darken-2"
              >BMI : {{userInfo.bmi}}</h3>
              <small class="blue-grey--text text--darken-2">bmi</small>
            </v-col>
            <v-col cols="4">
              <h3 class="mb-0 font-weight-light blue-grey--text text--darken-2">23,469</h3>
              <small class="blue-grey--text text--darken-2">Followers</small>
            </v-col>
            <v-col cols="4">
              <h3 class="mb-0 font-weight-light blue-grey--text text--darken-2">6035</h3>
              <small class="blue-grey--text text--darken-2">Following</small>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
    <v-row  no-gutters style="margin-top: 20px">
      <v-col cols="12" lg="4">
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Mailbox</h3>
            <v-list two-line>
              <v-list-item-group v-model="selected" multiple active-class="info--text">
                <template>
                  <v-list-item v-for="(m, index) in mails" :key="index">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title v-text="m.sendId"></v-list-item-title>
                        <v-list-item-subtitle class="text--primary" v-text="m.view"></v-list-item-subtitle>
                        <v-list-item-subtitle v-text="m.message"></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text v-text="i.action"></v-list-item-action-text>
                        <v-icon v-if="!active" color="grey lighten-1">mdi-star-outline</v-icon>
                        <v-icon v-else color="yellow">mdi-star</v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
        <v-col cols="12" lg="4">
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">My reviews</h3>
            <v-list two-line>
              <v-list-item-group v-model="selected" multiple active-class="info--text">
                <template>
                  <v-list-item v-for="(i, index) in items" :key="index">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title v-text="i.title"></v-list-item-title>
                        <v-list-item-subtitle class="text--primary" v-text="i.headline"></v-list-item-subtitle>
                        <v-list-item-subtitle v-text="i.subtitle"></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text v-text="i.action"></v-list-item-action-text>
                        <v-icon v-if="!active" color="grey lighten-1">mdi-star-outline</v-icon>
                        <v-icon v-else color="yellow">mdi-star</v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyPage",
  computed: {
    ...mapState(["user", "userInfo", "isLogin", "userReviews", "mails"])
  },
  data() {
    return {
      selected: [2],
      items: [
        {
          action: "15 min",
          headline: "Brunch this weekend?",
          title: "Ali Connors",
          subtitle:
            "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          action: "2 hr",
          headline: "Summer BBQ",
          title: "me, Scrott, Jennifer",
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          title: "Sandra Adams",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        }
      ]
    };
  },
  created() {
    console.log(this.user)
    this.$store.dispatch("getUserInfo", this.user)
    // this.$store.dispatch("getUserReviews", this.user)
    this.$store.dispatch("getUserMessages", this.user)
    
  },
  methods: {


  }
  // 필터 .. 하고싶은데 어렵다..
  // filters:{
  //   heightf(){
  //     if(this.userInfo.height===0){
  //       return '키를 등록해주세요'
  //     }else{
  //       return this.userInfo.height+"cm"
  //     }
  //   },
  // weightf(){

  // },
  // membershipf(){

  // },
  // trainerf(){

  // }
  // }
};
</script>

<style>
</style>