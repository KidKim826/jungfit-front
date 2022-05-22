<template>
  <div>
  
  <div class="text-center">
    <v-btn @click="search" v-model="keyword"
      value="0"
      class="ma-2"
      outlined
      color="indigo"
    >
    전신
    </v-btn>

    <v-btn @click="search" v-model="keyword"
      value="1"
      class="ma-2"
      outlined
      color="indigo"
    >
    상체
    </v-btn>

    <v-btn @click="search" v-model="keyword"
      value="2"
      class="ma-2"
      outlined
      color="indigo"
    >
    하체
    </v-btn>

    <v-btn @click="search" v-model="keyword"
      value="3"
      class="ma-2"
      outlined
      color="indigo"
    >
    복부
    </v-btn>
    </div>
    </div>
</template>

<script>
export default {
  name:"videoList",
  data(){
    return{
      keywordlist:["전신","상체","하체","복부"],
      keyword:0,
    }
  },
   created(){
    this.$store.dispatch("getPartList", this.keywordlist[0])
  },
  methods:{
    search(){
      const payload = {
        keyword: this.keyword
      }
       this.$store.dispatch("getPartList", this.keywordlist[payload]) 
    }
  }

}
</script>

<style>

</style>