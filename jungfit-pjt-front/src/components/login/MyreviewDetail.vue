<template>
  <div>
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
        <v-col class="mt-5">
          <v-card height="390px">
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
            <v-card-actions>
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
  name: "MyreviewDetail",
  computed: {
    ...mapState(["detailReview", "user"])
  },
  created() {
    // console.log(this.detailReview)
  },
  data() {
    return {

    };
  },
  methods: {
      back() { 
        this.$router.push({name: "MyPage"})
      },
      del() {
        this.$store.dispatch("deleteMyReviewDetail", this.detailReview);
      },
      modify() {
        this.$router.push({name: "MyreviewUpdate"});
      }

  }
};
</script>

<style>
</style>