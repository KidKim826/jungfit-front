<template>
  <div>
  <br>
  <div class="text-center">
    <v-btn @click="search('전신 운동')"
      class="ma-2"
      outlined
      color="indigo"
    >
    전신
    </v-btn>

    <v-btn @click="search('상체 운동')"
      class="ma-2"
      outlined
      color="indigo"
    >
    상체
    </v-btn>

    <v-btn @click="search('하체 운동')" 
      class="ma-2"
      outlined
      color="indigo"
    >
    하체
    </v-btn>

    <v-btn @click="search('복부 운동')"
      class="ma-2"
      outlined
      color="indigo"
    >
    복부
    </v-btn>
    </div>

    <v-container 
     :key="start"   
      class="grey lighten-5 mb-6"
    >
      <v-row
        :align="start"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="n in 3"
          :key="n"
        >
          
        <v-card 
    class="mx-auto"
    max-width="360"
  >
  
 <iframe
            width="360"
            height="220"
            :src="'https://www.youtube.com/embed/'+'gMaB-fG4u4g'"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>



    <v-card-subtitle class="pb-0">
      Number 10
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn>
        리뷰
      </v-btn>

       <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

      
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
      </v-row>
    </v-container>




    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name:"videoList",
  data(){
    return{
      defaultKey:"전신 운동"
    }
  },
  computed:{
    ...mapState(["videos"])
  },
   created(){
    this.$store.dispatch("getPartList", this.defaultKey)
  },
  methods:{
    search(value){
       this.$store.dispatch("getPartList", value) 
    }
  }

}
</script>

<style>

</style>