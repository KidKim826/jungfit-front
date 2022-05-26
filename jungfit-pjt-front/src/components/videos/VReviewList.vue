<template>
  <div>
    <v-container>
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
      <div>
        <div>
          <b-dropdown v-model="mode" id="dropdown-1" :text="label" class="m-md-2">
            <b-dropdown-item value="1">제목</b-dropdown-item>
            <b-dropdown-item value="2">내용</b-dropdown-item>
            <b-dropdown-item value="3">제목+내용</b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="search">
          <input type="text" v-model="keyword" />
          <button @click="search">검색</button>
        </div>
        <router-link :to="'/review/video/create/'+selectedVideo[0].videoId">
          <div>
            <v-btn class="mx-2" fab dark small color="indigo">
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
          </div>
        </router-link>
      </div>

      <div id="app">
        <v-app id="inspire">
          <v-data-table
            :headers="headers"
            :items="selectedReview"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:[`item.reviewId`]="{ value }">
              <div
                class="text-truncate"
                style="max-width: 500px; max-height: 48px; cursor:pointer;"
                @click="showdetail(value)"
              >상세보기</div>
            </template>
            <template v-slot:[`item.content`]="{ value }">
              <!-- <router-link :to="'/review/video/'+reviewId"> -->
              <div class="text-truncate" style="max-width: 500px; max-height: 48px;">{{ value }}</div>
              <!-- </router-link> -->
            </template>
            <template v-slot:[`item.title`]="{ value }">
              <div class="text-truncate" style="max-width: 150px; max-height: 48px;">{{ value }}</div>
            </template>
          </v-data-table>
        </v-app>
      </div>
    </v-container>
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
        { text: "", value: "reviewId" },
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
      items: ["제목", "내용", "제목+내용"],
      label: ""
    };
  },
  computed: {
    ...mapState(["selectedVideo", "selectedReview", "isLogin"])
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const vdoId = pathName[pathName.length - 1];
    this.$store.dispatch("getVReviewList", vdoId);
    this.$store.dispatch("getVReviewVideo", vdoId);
  },
  methods: {
    search() {
      const payload = {
        mode: this.mode,
        keyword: this.keyword,
        videoId: this.selectedReview[0].videoId
      };
      console.log(this.mode);
      console.log(this.keyword);
      console.log(this.videoId);
      this.$store.dispatch("getVReviewList", payload);
    },
    showdetail(payload) {
      console.log(payload);
      if (this.isLogin) {
        const value = payload;
        this.$store.dispatch("get");
        this.$router.push(`/review/video/` + value);
      } else {
        this.$router.push({ name: "SignIn" });
      }
    }
  }
};
</script>

<style>
</style>