<template>
  <div>
    <v-container fil-height style="max-width:450px;">
    <v-layout row wrap style="margin-top: 30px">
      <v-flex xs12>
        <v-card class="justify-center">
          <v-toolbar flat style="padding: 45px">
            <v-toolbar-title>관리자 로그인하기</v-toolbar-title>
          </v-toolbar>
          <div style="padding: 60px">
            <v-text-field
            v-model="managerId"
            label="아이디를 입력하세요"
            ></v-text-field>
            <v-text-field
            v-model="password"
            type="password"
            label="패스워드를 입력하세요"
            ></v-text-field>
          </div>
           <div style="padding-left: 200px">
            <v-btn @click="login">로그인</v-btn>
            <v-btn :to="'/'">돌아가기</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
    name: 'ManagerLogin',
    computed: {

    },
    data() {
      return {
        managerId: "",
        password: "",

      }
    },
    methods: {
      login() {
        const payload = {
          managerId: this.managerId,
          password: this.password
        }
        console.log(this.managerId);
            console.log(this.password);
            this.$store.dispatch("managerLogin", payload);
      }
    }

}
</script>

<style>

</style>