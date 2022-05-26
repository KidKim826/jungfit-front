<template>
  <v-container>
    <div>
      <b-card bg-variant="light">
        <b-form-group
          label-cols-lg="3"
          label="리뷰 수정하기"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group label="리뷰 제목:" label-for="title" label-cols-sm="3" label-align-sm="right">
            <b-form-input id="title" v-model="detailReview.title"></b-form-input>
          </b-form-group>

          <b-form-group label="작성자:" label-for="userId" label-cols-sm="3" label-align-sm="right">
            <b-form-input id="userId" v-model="detailReview.userId" disabled></b-form-input>
          </b-form-group>

          <b-form-group label="리뷰 내용:" label-for="content" label-cols-sm="3" label-align-sm="right">
            <b-form-textarea id="content" style="height:150px" v-model="detailReview.content"></b-form-textarea>
          </b-form-group>

          <!-- <b-form-group
        label="Ship via:"
        label-cols-sm="3"
        label-align-sm="right"
        class="mb-0"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          class="pt-2"
          :options="['Air', 'Courier', 'Mail']"
          :aria-describedby="ariaDescribedby"
        ></b-form-radio-group>
          </b-form-group>-->
        </b-form-group>
        <div>
          <b-button variant="outline-dark" @click="back">취소</b-button>
          <b-button variant="outline-primary" @click="update">수정</b-button>
          <b-button variant="outline-danger" @click="deletereview">삭제</b-button>
        </div>
      </b-card>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "MyreviewUpdate",
     computed: {
    ...mapState(["selectedVideo", "detailReview", "user"])
  },
  data() {
    return {

    };
  },
  created() {
    // console.log(this.detailReview);
  },
  methods: {
    submit() {
      console.log(this.title, this.content);
    },
    back() {
      this.$router.push({name: "MyreviewDetail"});
    },
    update() {
      const review = {
        reviewId: this.detailReview.reviewId,
        videoId: this.detailReview.videoId,
        userId: this.detailReview.userId,
        title: this.detailReview.title,
        content: this.detailReview.content
      };
      this.$store.dispatch("updateMyReview", review);
    },
    deletereview() {
      this.$store.dispatch("deleteMyReviewDetail", this.detailReview)
    }
  }
}
</script>

<style>

</style>