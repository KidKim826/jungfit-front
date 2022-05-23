<template>
  <div>
    <!-- <v-container> -->
    <div>
      <h2>비디오 리뷰 리스트</h2>
    </div>
    <div>
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
    <div>
      
    <div class="search">
      
      <select v-model="mode">
        <option value="1">제목</option>
        <option value="2">내용</option>
        <option value="3">제목+내용</option>
      </select>
      <input type="text" v-model="keyword" />
      <button @click="search">검색</button>
    </div>





    </div>
    <div><v-btn
      class="mx-2"
      fab
      dark
      small
      color="indigo"
    >
      <v-icon dark>




        <router-link> 작성 폼 가는 링크</router-link>
        



        mdi-pencil
      </v-icon>
    </v-btn></div>
    </div>
    <div id="app">
      <v-app id="inspire" >
        <v-data-table :headers="headers" :items="reviews" :items-per-page="5" class="elevation-1">
          <template v-slot:[`item.reviewId`]="{ value }" >
            <router-link :to="'/review/video/'+value">
            <div class="text-truncate" style="max-width: 500px; max-height: 48px;">
            {{ value }}
            </div>
            </router-link>
          </template>
          <template v-slot:[`item.content`]="{ value }" >
            <!-- <router-link :to="'/review/video/'+reviewId"> -->
            <div class="text-truncate" style="max-width: 500px; max-height: 48px;">
            {{ value }}
            </div>
            <!-- </router-link> -->
          </template>
          <template v-slot:[`item.title`]="{ value }">
            <div class="text-truncate" style="max-width: 150px; max-height: 48px;">
            {{ value }}
            </div>
          </template>
        </v-data-table>
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
        { text: "리뷰번호", value: "reviewId" },
        {
          text: "리뷰제목",
          align: "start",
          sortable: false,
          value: "title"
        },
        { text: "내용", value: "content" },
        { text: "작성자", value: "userId" },
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
        keyword: this.keyword,
        videoId: this.reviews[0].videoId
      };
      // console.log(this.mode)
      // console.log(this.keyword)
      this.$store.dispatch("getVReviewList", payload);
    },

  }
};
</script>

<style>


</style>