<template>
 <div>
   <!-- <v-container> -->
     <div>
     <h2>비디오 리뷰 리스트</h2>
     </div>
     <div>
    <iframe
              width="355"
              height="220"
              :src="'https://www.youtube.com/embed/'+selectedVideo[0].videoId"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
  </div>
  <!-- <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="Standard"
        ></v-select>
      </v-col>
 </v-row> -->
 
<!-- </v-container> -->
 </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"VReviewList",
    data(){
      return{
        keyword:"",
        mode:1,
        videoId: "",
        }
    },
    computed:{
        ...mapState(['selectedVideo'])

    },
    created(){
    const pathName = new URL(document.location).pathname.split("/");
    const videoId = pathName[pathName.length-1]
    this.$store.dispatch('getVReviewList', videoId)
    console.log(videoId)
  },
  methods:{
    search(){
    const payload ={
      
      mode:this.mode,
      keyword:this.keyword
    }
    this.$store.dispatch("getVReviewList",payload)
    }
  }

}
</script>

<style>

</style>