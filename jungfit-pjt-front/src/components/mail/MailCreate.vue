<template>
  <div>
    <v-card class="mx-auto my-12 mt-5" max-width="700" height="300">
      <v-card-text class="pa-5">
        <h3
          class="title blue-grey--text text--darken-2 font-weight-regular mb-4"
        >Message to {{member}}</h3>
        <v-timeline>
          <v-timeline-item>
            <template v-slot:icon>
              <v-avatar>
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLQwv2ve5gj5OuGokHy2_2DgyWlXmWxbT8CrVp7GnA=s176-c-k-c0x00ffffff-no-rj"
                />
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <v-btn text @click="sendEmail">전송하기</v-btn>
              <v-btn text @click="back">돌아가기</v-btn>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">{{user}}</v-card-title>
              <v-card-text>
                <v-text-field
                  type="message"
                  v-model="message"
                  :rules="messageRules"
                  label="메세지를 작성해주세요"
                  required
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "MailCreate",
  computed: {
    ...mapState(["detailReview", "mail", "member", "user"])
  },
  data() {
    return {
      message: "",
      messageRules: [v => !!v || "메세지는 필수 입력사항입니다."]
    };
  },
  methods: {
    sendEmail() {
      console.log(this.member)
      const mail = {
        message: this.message,
        receiveId: this.member,
        sendId: this.user,
      };
      this.$store.dispatch("sendEmail", mail);
    },
    back () {
      this.$router.go(-1)
    }
  }
};
</script>

<style>
</style>