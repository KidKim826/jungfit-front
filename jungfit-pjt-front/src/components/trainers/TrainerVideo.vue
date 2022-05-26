<template>
<v-container>
  <div>
    <p style="font-size:100px;">{{trainerVideo[0].trainerId}}</p>

    <div id="app">
      <v-app id="inspire">
           <v-row dense>
          <v-col
            v-for="v in trainerVideo"
            :key="v.videoId"
            :cols="4"
          >
        <v-card class="ma-3">
      <iframe
        width="350"
        height="210"
        :src="'https://www.youtube.com/embed/'+v.videoId"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <v-card-subtitle class="pb-0">{{v.trainerId}}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div class="text-truncate">{{v.title}}</div>
      </v-card-text>

      <v-card-actions>
        <router-link :to="'/review/video-review/'+v.videoId" style="text-decoration:none;">
          <v-btn>리뷰</v-btn>
        </router-link>
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
      </v-app>
    </div>

  </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      cards: [
        {
          title: "Pre-fab homes",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          flex: 6
        },
        {
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          flex: 6
        },
        {
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 6
        }
      ]
    };
  },
  computed: {
    ...mapState(["trainerVideo"])
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const trainer = pathName[pathName.length - 1];
    this.$store.dispatch("getTrainerVideo", trainer);
  }
};
</script>

<style scoped>
p {
  color: #393f42;
  font-size: 13px;
  text-shadow: 0 0 20px rgb(112, 128, 128), 0 0 60px #aac9c9,
    0 0 90px rgb(161, 175, 175);
  font-style: italic;
  font-weight: bold;
}
.theme--light.v-application {
  background-color: #2a2828;
}

</style>