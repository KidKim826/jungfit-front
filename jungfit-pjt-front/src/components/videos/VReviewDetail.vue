<template>
   <div id="app">
    <h2> &#10004; 리뷰 상세보기 </h2>
    <div id="app">
  <v-app id="inspire">
    <v-card
      class="mx-auto"
      width="700"
      height="600"
    >
  
      <v-card-title class="pb-0" >
        {{detailReview.title}}
      </v-card-title>
  
  
      <v-card-text class="text--primary">
        <div>{{detailReview.userId}}</div>
        <div>{{detailReview.regDate}}</div>
        <div>{{detailReview.viewCnt}}</div>
        <div>{{detailReview.content}}</div>
      </v-card-text>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn
          color="orange"
          text
          @click="back"
        >
          돌아가기
        </v-btn>
  
        <v-btn
          color="orange"
          text
          @click="modify"
        >
          수정
        </v-btn >
         <v-btn
          color="orange"
          text
          @click="del"
        >
          삭제
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</div>
</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed:{
    ...mapState([
      'detailReview'
    ])
  },
  data(){
    return{

    }
  },

  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const reviewId = pathName[pathName.length - 1];
    this.$store.dispatch("getVReviewDetail", reviewId)
    // console.log(reviewId)
  },
  methods:{
    back(){
      this.$router.push(`/review/video-review/`+this.detailReview.videoId)    
    },
    del(){
      this.$store.dispatch('deleteVReview',this.detailReview)
    },
    modify() {
      this.$router.push(`/review/video/modify/`+this.detailReview.reviewId)  
      
    },

  }
}
</script>

<style>

</style>