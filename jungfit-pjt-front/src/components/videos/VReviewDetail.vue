<template>
   <div id="app">
    <h2> &#10004; 리뷰 상세보기 </h2>
    
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
    this.$store.dispatch("getVReviewDetail", reviewId);
    console.log(reviewId)
  },
}
</script>

<style>

</style>