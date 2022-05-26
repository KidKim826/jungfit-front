<template>
  <div id="app">
    <v-app id="inspire">
      <v-footer color="#343434" padless dark>
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
          >{{ link }}</v-btn>

          <v-btn v-for="icon in icons" :key="icon" class="m-2 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>

          <v-col class="grey py-4 text-center white--text" cols="12">
            {{ new Date().getFullYear() }} —
            <strong> Kim Jung-Ah & Jun Hee-Jung</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: ["Home", "About Us", "Team", "Services"],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  }
};
</script>

<style scoped>
#inspire{
    margin-top:40px;
}
</style>