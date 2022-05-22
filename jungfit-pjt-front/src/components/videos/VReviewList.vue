<template>
 <div>
     <h2>비디오 리뷰 리스트</h2>
    <iframe
              width="355"
              height="220"
              :src="'https://www.youtube.com/embed/'+selectedVideo[0].id.videoId"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
 </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"VReviewList",
    data(){
      return{
          
        }
    },
    computed:{
        ...mapState(['videos','selectedVideo'])
    },
    created(){
    const pathName = new URL(document.location).pathname.split("/");
    const videoId = pathName[pathName.length-1]
    this.$store.dispatch('getVReviewList', videoId)
    // console.log(videoId)
    
  },

}
</script>

<style>

</style>