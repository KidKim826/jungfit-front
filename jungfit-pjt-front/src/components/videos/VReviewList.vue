<template>
  <div>
    <v-container>
      <div>
        <h2>비디오 리뷰 리스트</h2>
      </div>
      <div class="mb-2">
        <iframe
          width="355"
          height="220"
          :src="'https://www.youtube.com/embed/'+selectedVideo[0].videoId"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <v-app id="button-pos">
          <span class="d-flex justify-end">
            <router-link :to="'/review/video/create/'+selectedVideo[0].videoId" style="text-decoration: none;">
              <v-btn id="write-button" small outlined>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </router-link>
          </span>
        </v-app>
      </div>

      <div id="app">
        <v-app id="inspire">
          <v-card>
            <v-card-title>
              Video Review List
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="selectedReview"
              :search="search"
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
                <div class="text-truncate" style="max-width: 500px; max-height: 48px;">{{ value }}</div>
              </template>
              <template v-slot:[`item.title`]="{ value }">
                <div class="text-truncate" style="max-width: 150px; max-height: 48px;">{{ value }}</div>
              </template>
            </v-data-table>
          </v-card>
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
      search: "",
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
      label: ""
    };
  },
  computed: {
    ...mapState(["selectedVideo", "selectedReview", "isLogin"])
  },
  created() {
   
    const pathName = new URL(document.location).pathname.split("/");
    const vdoId = pathName[pathName.length - 1];
    this.$store.dispatch("getVReviewList", vdoId)
    this.$store.dispatch("getVReviewVideo", vdoId)
    //  console.log(vdoId)
  },
  methods: {
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

<style scoped>
a {
  text-decoration: none;
}
#button-pos {
  background-color: #2a2828;
}
#write-button{
  color: rgb(188, 218, 216);
}
</style>