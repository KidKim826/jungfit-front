<template>
  <v-container>
    <h1>MyPage</h1>
    <v-card class="position-relative profile-card mb-7 mt-4">
      <br />
      <v-card-text class="pa-5">
        <div class="text-center" v-if="isLogin">
          <img
            src="https://img.icons8.com/emoji/344/princess.png"
            alt="프로필사진입니다."
            class="rounded-circle"
            width="100"
          />
          <h1 class="font-weight-regular">{{userInfo.userId}}</h1>
          <h4 class="op-5 font-weight-regular">{{userInfo.name}}</h4>
          <v-btn
            color="deep-purple accent-2"
            medium
            class="text-capitalize white--text mt-4 mb-4"
            rounded
          >
            <v-icon dark>mdi-heart</v-icon>
          </v-btn>
          <v-row class="mt-6">
            <v-col cols="4">
              <h1 class="mb-0 font-weight-light blue-grey--text text--darken-2">{{userInfo.age}}</h1>
              <h2 class="blue-grey--text text--darken-2">age</h2>
            </v-col>
            <v-col cols="4">
              <h1 class="mb-0 font-weight-light blue-grey--text text--darken-2">{{userInfo.email}}</h1>
              <h2 class="blue-grey--text text--darken-2">email</h2>
            </v-col>
            <v-col cols="4">
              <h1 class="mb-0 font-weight-light blue-grey--text text--darken-2">{{userInfo.height}}</h1>
              <h2 class="blue-grey--text text--darken-2">height</h2>
            </v-col>

            <v-col cols="4" v-if="userInfo.bmi<=18.5">
              <h1 class="mb-0 font-weight-light blue-grey--text text--darken-2">저체중</h1>
              <h2 class="blue-grey--text text--darken-2">bmi</h2>
            </v-col>
            <v-col cols="4" v-else-if="userInfo.bmi<=23">
              <h1 class="mb-0 font-weight-light blue-grey--text text--darken-2">정상</h1>
              <h2 class="blue-grey--text text--darken-2">bmi</h2>
            </v-col>
            <v-col cols="4" v-else-if="userInfo.bmi<=25">
              <h1 class="mb-0 font-weight-light blue-grey--text text--darken-2">과체중</h1>
              <h2 class="blue-grey--text text--darken-2">bmi</h2>
            </v-col>
            <v-col cols="4" v-else-if="userInfo.bmi<=30">
              <h1 class="mb-0 font-weight-light blue-grey--text text--darken-2">비만</h1>
              <h2 class="blue-grey--text text--darken-2">bmi</h2>
            </v-col>
            <v-col cols="4" v-else>
              <h1 class="mb-0 font-weight-light blue-grey--text text--darken-2">과체중</h1>
              <h2 class="blue-grey--text text--darken-2">bmi</h2>
            </v-col>

            <v-col cols="4">
              <h1 class="mb-0 font-weight-light blue-grey--text text--darken-2">23,469</h1>
              <h2 class="blue-grey--text text--darken-2">Followers</h2>
            </v-col>
            <v-col cols="4">
              <h1 class="mb-0 font-weight-light blue-grey--text text--darken-2">6035</h1>
              <h2 class="blue-grey--text text--darken-2">Following</h2>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
      <br />
    </v-card>
    <v-row no-gutters style="margin-top: 20px">
      <v-col cols="12" lg="4">
        <v-card>
          <v-card-text>
            <h1 class="title blue-grey--text text--darken-2 font-weight-regular">Mailbox</h1>
            <v-list two-line>
              <v-list-item-group v-model="selected" multiple active-class="info--text">
                <template>
                  <v-list-item v-for="(m, index) in mails" :key="index" @click="readMail(m)">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title class="h4" v-text="m.sendId"></v-list-item-title>
                        <v-list-item-subtitle v-text="m.message"></v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-list-item-action-text v-if="m.view===1">읽음</v-list-item-action-text>
                        <v-list-item-action-text v-else>읽지않음</v-list-item-action-text>
                        <v-icon v-if="!active" color="grey lighten-1">mdi-star-outline</v-icon>
                        <v-icon v-else color="yellow">mdi-star</v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                  <v-divider v-if="index+1 < mails.length" :key="index"></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card>
          <v-card-text>
            <h1 class="title blue-grey--text text--darken-2 font-weight-regular">My reviews</h1>
            <v-list two-line>
              <v-list-item-group v-model="selected" multiple active-class="info--text">
                <template>
                  <v-list-item
                    v-for="(u, index) in userReviews"
                    :key="index"
                    @click="readReview(u)"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title class="h4" v-text="u.title"></v-list-item-title>
                        <v-list-item-subtitle class="text--primary" v-text="u.viewCnt"></v-list-item-subtitle>
                        <v-list-item-subtitle v-text="u.content"></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text v-text="u.action"></v-list-item-action-text>
                        <v-icon v-if="!active" color="grey lighten-1">mdi-star-outline</v-icon>
                        <v-icon v-else color="yellow">mdi-star</v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider v-if="index + 1 < userReviews.length" :key="index"></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card>
          <v-card-text>
            <h1 class="title blue-grey--text text--darken-2 font-weight-regular">My Followers</h1>
            <v-list two-line>
              <v-list-item-group v-model="selected" multiple active-class="info--text">
                <template>
                  <v-list-item v-for="(f, index) in followers" :key="index">
                    <template v-slot:default="{ active }">
                      <img
                          src="https://img.icons8.com/emoji/344/princess.png"
                          alt="프로필사진입니다."
                          class="rounded-circle"
                          width="40"
                        />
                      <v-list-item-content>
                        <v-list-item-title class="h4" v-text="f.myId"></v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text v-text="f.action"></v-list-item-action-text>
                        <v-icon v-if="!active" color="grey lighten-1">mdi-star-outline</v-icon>
                        <v-icon v-else color="yellow">mdi-star</v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider v-if="index + 1 < followers.length" :key="index"></v-divider>
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
    ...mapState([
      "user",
      "userInfo",
      "isLogin",
      "userReviews",
      "mails",
      "followers"
    ])
  },
  data() {
    return {
      selected: [2]
    };
  },
  created() {
    console.log(this.user);
    this.$store.dispatch("getUserInfo", this.user);
    this.$store.dispatch("getUserReviews", this.user);
    this.$store.dispatch("getUserMessages", this.user);
    this.$store.dispatch("getFollower", this.user);
    this.$store.dispatch("getFollowing", this.user);
  },
  methods: {
    readMail(data) {
      this.$store.dispatch("readMail", data);
    },
    readReview(data) {
      console.log(data);
      this.$store.dispatch("userReviewDetail", data.reviewId);
    }
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

<style scoped>
</style>