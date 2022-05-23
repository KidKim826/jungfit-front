<template>
  <div>
    <br />
    <h3>부위 별 운동 영상 TOP12</h3>
    <div class="text-center">
      <v-btn @click="searchPart('전신')" class="ma-2" outlined color="indigo">전신</v-btn>
      <v-btn @click="searchPart('상체')" class="ma-2" outlined color="indigo">상체</v-btn>
      <v-btn @click="searchPart('하체')" class="ma-2" outlined color="indigo">하체</v-btn>
      <v-btn @click="searchPart('복부')" class="ma-2" outlined color="indigo">복부</v-btn>
    </div>

    <v-app id="inspire">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
              <v-carousel-item>
                <v-container fill-height>
                  <v-row style="height: 400px;">
                    <v-col cols="4" v-for="(v,i) in p1" :key="i">
                      <v-card class="mx-auto" max-width="360">
                        <iframe
                          width="355"
                          height="220"
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
                          <v-btn>
                            <router-link :to="'/review/video-review/'+v.videoId">리뷰</router-link>
                          </v-btn>

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
                </v-container>
              </v-carousel-item>

              <v-carousel-item>
                <v-container fill-height>
                  <v-row style="height: 400px;">
                    <v-col cols="4" v-for="(v,i) in p2" :key="i">
                      <v-card class="mx-auto" max-width="360">
                        <iframe
                          width="355"
                          height="220"
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
                          <v-btn>
                            <router-link :to="'/review/video-review/'+v.videoId">리뷰</router-link>
                          </v-btn>

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
                </v-container>
              </v-carousel-item>

              <v-carousel-item>
                <v-container fill-height>
                  <v-row style="height: 400px;">
                    <v-col cols="4" v-for="(v,i) in p3" :key="i">
                      <v-card class="mx-auto" max-width="360">
                        <iframe
                          width="355"
                          height="220"
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
                          <v-btn>
                            <router-link :to="'/review/video-review/'+v.videoId">리뷰</router-link>
                          </v-btn>

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
                </v-container>
              </v-carousel-item>

              <v-carousel-item>
                <v-container fill-height>
                  <v-row style="height: 400px;">
                    <v-col cols="4" v-for="(v,i) in p4" :key="i">
                      <v-card class="mx-auto" max-width="360">
                        <iframe
                          width="355"
                          height="220"
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
                          <v-btn>
                            <router-link :to="'/review/video-review/'+v.videoId">리뷰</router-link>
                          </v-btn>

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
                </v-container>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </v-app>

    <br />
    <div class="text-center">
      <v-btn @click="search('요가 홈트')" class="ma-2" outlined color="indigo">요가</v-btn>
      <v-btn @click="search('명상')" class="ma-2" outlined color="indigo">명상</v-btn>
      <v-btn @click="search('스트레칭')" class="ma-2" outlined color="indigo">스트레칭</v-btn>
      <v-btn @click="search('자세교정')" class="ma-2" outlined color="indigo">자세교정</v-btn>
    </div>

    <v-app id="inspire">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
              <v-carousel-item>
                <v-container fill-height>
                  <v-row style="height: 400px;">
                    <v-col cols="4" v-for="(v,i) in a" :key="i">
                      <v-card class="mx-auto" max-width="360">
                        <iframe
                          width="355"
                          height="220"
                          :src="'https://www.youtube.com/embed/'+v.id.videoId"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>

                        <v-card-subtitle class="pb-0">{{v.snippet.channelTitle}}</v-card-subtitle>

                        <v-card-text class="text--primary">
                          <div class="text-truncate">{{v.snippet.title}}</div>
                        </v-card-text>

                        <v-card-actions>
                          <v-btn>
                            <router-link :to="`/review/video-review/${v.id.videoId}`">리뷰</router-link>
                          </v-btn>

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
                </v-container>
              </v-carousel-item>

              <v-carousel-item>
                <v-container fill-height>
                  <v-row style="height: 400px;">
                    <v-col cols="4" v-for="(v,i) in b" :key="i">
                      <v-card class="mx-auto" max-width="360">
                        <iframe
                          width="355"
                          height="220"
                          :src="'https://www.youtube.com/embed/'+v.id.videoId"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>

                        <v-card-subtitle class="pb-0">{{v.snippet.channelTitle}}</v-card-subtitle>

                        <v-card-text class="text--primary">
                          <div class="text-truncate">{{v.snippet.title}}</div>
                        </v-card-text>

                        <v-card-actions>
                          <v-btn>
                            <router-link :to="`/review/video-review/${v.id.videoId}`">리뷰</router-link>
                          </v-btn>

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
                </v-container>
              </v-carousel-item>

              <v-carousel-item>
                <v-container fill-height>
                  <v-row style="height: 400px;">
                    <v-col cols="4" v-for="(v,i) in c" :key="i">
                      <v-card class="mx-auto" max-width="360">
                        <iframe
                          width="355"
                          height="220"
                          :src="'https://www.youtube.com/embed/'+v.id.videoId"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>

                        <v-card-subtitle class="pb-0">{{v.snippet.channelTitle}}</v-card-subtitle>

                        <v-card-text class="text--primary">
                          <div class="text-truncate">{{v.snippet.title}}</div>
                        </v-card-text>

                        <v-card-actions>
                          <v-btn>
                            <router-link :to="`/review/video-review/${v.id.videoId}`">리뷰</router-link>
                          </v-btn>

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
                </v-container>
              </v-carousel-item>

              <v-carousel-item>
                <v-container fill-height>
                  <v-row style="height: 400px;">
                    <v-col cols="4" v-for="(v,i) in d" :key="i">
                      <v-card class="mx-auto" max-width="360">
                        <iframe
                          width="355"
                          height="220"
                          :src="'https://www.youtube.com/embed/'+v.id.videoId"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>

                        <v-card-subtitle class="pb-0">{{v.snippet.channelTitle}}</v-card-subtitle>

                        <v-card-text class="text--primary">
                          <div class="text-truncate">{{v.snippet.title}}</div>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn>
                            <router-link :to="`/review/video-review/${v.id.videoId}`">리뷰</router-link>
                          </v-btn>

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
                </v-container>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </v-app>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "videoList",
  data() {
    return {
      defaultKey: "요가 홈트",
      defaultPart: "전신"
    };
  },
  computed: {
    ...mapState(["a", "b", "c", "d", "partVideos", "p1", "p2", "p3", "p4"])
  },
  created() {
    this.$store.dispatch("getYoutubeList", this.defaultKey)
    this.$store.dispatch("getPartList", this.defaultPart)
  },
  methods: {
    search(value) {
      this.$store.dispatch("getYoutubeList", value)
    },
    searchPart(value) {
      this.$store.dispatch("getPartList", value)
    }

  }
};
</script>

<style>
</style>