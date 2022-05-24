<template>
  <v-container>
      <h2>마이페이지</h2>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="5"> 
        <div>
          <div>
            <v-avatar size="200">
              <img src="https://img.icons8.com/emoji/344/princess.png" alt="내프로필사진입니다.">
            </v-avatar>
            <div class="white--text subheading mt-1" v-if="isLogin">
              <div>아이디 : {{userInfo.userId}}</div>
              <div>이름 : {{userInfo.name}}</div>
              <div>나이 : {{userInfo.age}}</div>
              <div>이메일 : {{userInfo.email}}</div>
              <div>키 : {{userInfo.height}} </div> <!-- 변수+f : filter라는 뜻.. -->
              <!-- <div>몸무게 : {{userInfo.weight | weightf}} kg</div>
              <div>멤버십 : {{userInfo.membership | membershipf}}</div>
              <div>트레이너 : {{userInfo.trainer | trainerf}}</div> -->
            </div>
          </div>
        </div>
        </v-col>
        <v-col cols="5">
        
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="pink"
          >
          <v-icon dark>
            mdi-heart
          </v-icon>
          </v-btn>
        
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
  </v-container>

</template>

<script>
import { mapState } from "vuex";

export default {
  name:"MyPage",
  computed:{
    ...mapState(["user","userInfo","isLogin"])
  },
  created(){
    this.$store.dispatch("getUserInfo",this.user)
  },
  methods:{
  },
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
}
</script>

<style>

</style>