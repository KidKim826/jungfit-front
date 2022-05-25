<template>
<div>
  <v-container fil-height style="max-width:450px;">
    <v-layout row wrap style="margin-top: 30px">
      <v-flex xs12>
        <v-card class="justify-center">
          <v-toolbar flat style="padding: 45px">
            <v-toolbar-title class="h1">로그인하기</v-toolbar-title>
          </v-toolbar>
          <div style="padding: 60px">
            <v-text-field
            v-model="userId"
            label="아이디를 입력하세요"
            ></v-text-field>
            <v-text-field
            v-model="password"
            type="password"
            label="패스워드를 입력하세요"
            ></v-text-field>
          </div>
           <div align="center" justify="space-around">
            <v-btn @click="login" class="mr-4 mb-4">로그인</v-btn>
            <v-btn :to="'signinform'" class="mr-4 mb-4">회원가입</v-btn>
           </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
  name: "MemberLogin",
  data() {
    return {
      userId: "",
      password: "",
    };
  },
  methods: {
        login() {
            const payload = {
                userId: this.userId,
                password: this.password,
            };
            console.log(this.userId);
            console.log(this.password);
            this.$store.dispatch("userLogin", payload);
        },
    },
};
</script>

<style>
</style>