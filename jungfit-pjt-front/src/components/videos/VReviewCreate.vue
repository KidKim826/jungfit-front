<template>
  <v-container>
    <div>
      <b-card bg-variant="light">
        <b-form-group
          label-cols-lg="3"
          label="리뷰 작성하기"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group label="리뷰 제목:" label-for="title" label-cols-sm="3" label-align-sm="right">
            <b-form-input id="title" v-model="title"></b-form-input>
          </b-form-group>

          <b-form-group label="작성자:" label-for="userId" label-cols-sm="3" label-align-sm="right">
            <b-form-input id="userId" v-model="user" disabled></b-form-input>
          </b-form-group>

          <b-form-group label="리뷰 내용:" label-for="content" label-cols-sm="3" label-align-sm="right">
            <b-form-textarea id="content" style="height:150px" v-model="content"></b-form-textarea>
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
          <b-button variant="outline-danger" @click="back">취소</b-button>
          <b-button variant="outline-primary" @click="regist">등록</b-button>
        </div>
      </b-card>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["selectedVideo", "user"])
  },
  data() {
    return {
      videoId: "",
      title: "",
      content: ""
    };
  },
  methods: {
    back() {
      this.$router.push(
        `/review/video-review/` + this.selectedVideo[0].videoId
      );
    },
    regist() {
      const vreview = {
        reviewId: 0,
        videoId: this.selectedVideo[0].videoId,
        userId: this.user,
        title: this.title,
        content: this.content
      };
      this.$store.dispatch("createVReview", vreview);
      this.$router.push(
        `/review/video-review/` + this.selectedVideo[0].videoId
      );
    }
  }
};
</script>

<style>
</style>