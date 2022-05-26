<template>
  <div class="container">
    <v-container fill-height>
      <v-row style="height: 450px; ">
        <v-col>
          <iframe
            style="margin: 10px; box-shadow: 7px 5px 5px #43d7d9;"
            width="670"
            height="430"
            :src="'https://www.youtube.com/embed/'+detailReview.videoId"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-col>
        <v-col>
          <v-card-text class="text">
            <div>
              <h1>
                <strong>{{detailReview.userId}}</strong>
              </h1>
            </div>
            <div>
              <h4>{{detailReview.regDate}}</h4>
            </div>
            <div>
              <h3>{{detailReview.viewCnt}}</h3>
            </div>
            <div>
              <h2>{{detailReview.content}}</h2>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MyreviewDetail",
  computed: {
    ...mapState(["detailReview"])
  },
  created() {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>