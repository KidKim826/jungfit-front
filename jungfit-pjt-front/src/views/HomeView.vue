<template>
  <div>
    <hello-world />
    <v-row no-gutters style="margin-top: 20px;">
      <v-col cols="12" lg="4">
        
      </v-col>
      <v-col cols="12" lg="4">
        

      </v-col>
    </v-row>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "HomeView",

  components: {
    HelloWorld
  }
};
</script>
