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
    <div id="app">
      <v-app id="inspire">
        <v-data-table :headers="headers" :items="reviews" :items-per-page="5" class="elevation-1"></v-data-table>
      </v-app>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "VReviewList",
  data() {
    return {
      keyword: "",
      mode: 1,
      videoId: "",
      headers: [
        {
          text: "리뷰제목",
          align: "start",
          sortable: false,
          value: "title"
        },
        { text: "내용", value: "content" },
        { text: "작성자", value: "reviewId" },
        { text: "조회수", value: "viewCnt" },
        { text: "작성일자", value: "regDate" }
      ],
      reviews: this.$store.state.selectedReview
    };
  },
  computed: {
    ...mapState(["selectedVideo", "selectedReview"])
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const vdoId = pathName[pathName.length - 1];
    this.$store.dispatch("getVReviewVideo", vdoId);
    this.$store.dispatch("getVReviewList", vdoId);
  },
  methods: {
    search() {
      const payload = {
        mode: this.mode,
        keyword: this.keyword
      };
      this.$store.dispatch("getVReviewList", payload);
    }
  }
};
</script>

<style>
</style>