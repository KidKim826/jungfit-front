<template>
  <div>
    <v-container fill-height>
      <br />
      <div class="d-flex justify-start">
        <p>제목 : {{detailReview.title}}</p>
      </div>
      <v-row style="height: 450px;">
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
        <v-col class="mt-5">
          <v-card height="390px">
            <v-card-text class="text">
              <div>
                <h1>
                  <strong>{{detailReview.title}}</strong>
                </h1>
              </div>
              <hr />
              <v-row justify-space-between>
                <v-col cols="3">
                  <h4>{{detailReview.userId}}</h4>
                </v-col>
                <v-col cols="6">
                  <h4>{{detailReview.regDate}}</h4>
                </v-col>
                <v-col cols="2">
                  <v-btn x-small color="secondary" depressed disabled>{{detailReview.viewCnt}}</v-btn>
                </v-col>
              </v-row>
              <hr />
              <div>
                <h2>{{detailReview.content}}</h2>
              </div>
            </v-card-text>
            <br>
            <v-card-actions class="d-flex self-align-end">
              <v-btn style="color: orange;" text @click="back">돌아가기</v-btn>
              <v-btn
                v-if="detailReview.userId == user"
                style="color: orange;"
                text
                @click="modify"
              >수정</v-btn>
              <v-btn v-if="detailReview.userId == user" style="color: orange;" text @click="del">삭제</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["detailReview", "user"])
  },
  data() {
    return {};
  },

  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const reviewId = pathName[pathName.length - 1];
    this.$store.dispatch("getVReviewDetail", reviewId);
    // console.log(reviewId)
  },
  methods: {
    back() {
      this.$router.push(`/review/video-review/` + this.detailReview.videoId);
    },
    del() {
      this.$store.dispatch("deleteVReview", this.detailReview)
    },
    modify() {
      this.$router.push(`/review/video/modify/` + this.detailReview.reviewId);
    }
  }
};
</script>

<style scoped>
.v-btn {
  font-size: 15px;
}
p {
  font-size: 30px;
  color: #bcdad8;
  font-weight: bold;
}
</style>