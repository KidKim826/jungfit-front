<template>
  <div>
    <v-card class="mx-auto my-12 mt-5" max-width="700" height="300">
      <v-card-text class="pa-5">
        <h3
          class="title blue-grey--text text--darken-2 font-weight-regular mb-4"
        >Message from {{mail.sendId}}</h3>
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
              <v-btn text :to="'/mail/form'">답장하기</v-btn>
              <v-btn text :to="'/user/mypage'">돌아가기</v-btn>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">{{mail.sendId}}</v-card-title>
              <v-card-text>{{mail.message}}</v-card-text>
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
  name: "MailDetail",
  computed: {
    ...mapState(["mail"])
  }
};
</script>

<style>
</style>