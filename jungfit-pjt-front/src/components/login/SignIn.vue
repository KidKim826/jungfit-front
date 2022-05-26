<template>
  <v-container>
    <v-card style="border-radius:5%; margin:100px 250px 100px 250px  ">
      <v-app id="inspire" justify-center>
        <v-form ref="form" v-model="valid" lazy-validation class="justify-center ma-16 pa-10">
          <b style="font-size:40px">회원가입</b>

          <v-text-field
            class="mt-7"
            v-model="userId"
            :counter="15"
            :rules="idRules"
            label="아이디"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="password"
            :counter="12"
            :rules="passwordRules"
            label="비밀번호"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="pwcheck"
            :counter="12"
            :rules="pwcheckRules"
            label="비밀번호 확인"
            required
          ></v-text-field>

          <v-text-field v-model="name" :rules="nameRules" label="이름" required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-text-field v-model="address" :rules="addressRules" label="주소" required></v-text-field>

          <v-text-field v-model="height" :rules="heightRules" label="키" required></v-text-field>

          <v-text-field v-model="weight" :rules="weightRules" label="몸무게" required></v-text-field>

          <v-text-field v-model="age" :rules="ageRules" label="나이" required></v-text-field>

          <div>JUNGFIT 이용약관, 개인정보 수집 및 이용, 위치정보 이용약관(선택), 프로모션 정보 수신(선택)에 모두 동의합니다.</div>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || '약관에 동의해주세요!']"
            label="약관에 동의하고 가입하시겠습니까?"
            required
          ></v-checkbox>
          <div align="center" justify="space-around">
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">가입</v-btn>

            <v-btn color="error" class="mr-4" @click="reset">폼 비우기</v-btn>

            <v-btn color="warning" :to="{name: 'home'}">돌아가기</v-btn>
          </div>
        </v-form>
      </v-app>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "SignIn",
  computed: {},
  data() {
    return {
      errors: [],
      valid: true,
      userId: null,
      idRules: [
        v => !!v || "아이디는 필수 입력사항입니다.",
        v => !(v && v.length >= 15) || "아이디는 15자 이상 입력할 수 없습니다.",
        v =>
          !/[~!@#$%^&*()_+|<>?:{}]/.test(v) ||
          "아이디에는 특수문자를 사용할 수 없습니다."
      ],
      password: null,
      passwordRules: [
        v => !!v || "비밀번호는 필수 입력사항입니다.",
        v => (v && v.length <= 12) || "비밀번호는 12자 이하여야 합니다."
      ],
      pwcheck: null,
      pwcheckRules: [
        v => v === this.password || "비밀번호가 일치하지 않습니다."
      ],
      name: null,
      nameRules: [v => !!v || "이름은 필수 입력사항입니다."],
      email: null,
      emailRules: [
        v => !!v || "E-mail은 필수 입력사항입니다.",
        v => /.+@.+\..+/.test(v) || "올바르지 않은 이메일 입니다."
      ],
      address: null,
      addressRules: [
        v => !!v || "주소는 필수 입력사항입니다.",
        v => /.+동+/.test(v) || "00동 형식으로 주소를 입력해주세요"
      ],
      height: null,
      heightRules: [v => /^[0-9]*$/.test(v) || "키는 숫자만 입력 가능합니다."],
      weight: null,
      weightRules: [
        v => /^[0-9]*$/.test(v) || "몸무게는 숫자만 입력 가능합니다."
      ],
      age: null,
      ageRules: [v => /^[0-9]*$/.test(v) || "나이는 숫자만 입력 가능합니다."],
      checkbox: false
    };
  },
  methods: {
    validate() {
      const User = {
        userId: this.userId,
        password: this.password,
        name: this.name,
        email: this.email,
        address: this.address,
        bmi:
          this.weight /
          ((this.height / 100) * (this.height / 100)).toPrecision(4),
        height: this.height,
        weight: this.weight,
        age: this.age
      };
      // console.log(User.bmi)
      this.$refs.form.validate();
      this.$store.dispatch("userSignin", User);
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
</style>