<template>
  <div>
    <v-container>
      <br />
      <h3>부위 별 운동 영상 TOP12</h3>
      <div class="text-center" >
      <v-btn @click="searchPart('전신')" id="select-btn" outlined class="ma-2">전신</v-btn> 
      <v-btn @click="searchPart('상체')" id="select-btn" outlined class="ma-2">상체</v-btn>
      <v-btn @click="searchPart('하체')" id="select-btn" outlined class="ma-2">하체</v-btn>
      <v-btn @click="searchPart('복부')" id="select-btn" outlined class="ma-2">복부</v-btn>
      </div>

      <v-app id="inspire">
        <div>
          <v-row>
            <v-col cols="12">
              <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
                <v-carousel-item>
                  <div fill-height>
                    <v-row style="height: 400px;">
                      <v-col cols="4" v-for="(v,i) in p1" :key="i">
                        <v-card>
                          <iframe
                            width="338"
                            height="210"
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
                            <router-link :to="'/review/video-review/'+v.videoId">
                              <v-btn>리뷰</v-btn>
                            </router-link>
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
                  </div>
                </v-carousel-item>

                <v-carousel-item>
                  <div fill-height>
                    <v-row style="height: 400px;">
                      <v-col cols="4" v-for="(v,i) in p2" :key="i">
                        <v-card class="mx-auto" max-width="360">
                          <iframe
                            width="338"
                            height="210"
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
                            <router-link :to="'/review/video-review/'+v.videoId">
                              <v-btn>리뷰</v-btn>
                            </router-link>

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
                  </div>
                </v-carousel-item>

                <v-carousel-item>
                  <div fill-height>
                    <v-row style="height: 400px;">
                      <v-col cols="4" v-for="(v,i) in p3" :key="i">
                        <v-card class="mx-auto" max-width="360">
                          <iframe
                            width="338"
                            height="210"
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
                            <router-link :to="'/review/video-review/'+v.videoId">
                              <v-btn>리뷰</v-btn>
                            </router-link>

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
                  </div>
                </v-carousel-item>

                <v-carousel-item>
                  <div fill-height>
                    <v-row style="height: 400px;">
                      <v-col cols="4" v-for="(v,i) in p4" :key="i">
                        <v-card class="mx-auto" max-width="360">
                          <iframe
                            width="338"
                            height="210"
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
                            <router-link :to="'/review/video-review/'+v.videoId">
                              <v-btn>리뷰</v-btn>
                            </router-link>

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
                  </div>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </div>
      </v-app>
      <br />
      <div class="text-center">
        <v-btn @click="search('gymjongkook')" class="ma-2" id="select-btn" outlined >GYMJONGKOOK</v-btn>
        <v-btn @click="search('쾌걸근육맨')" class="ma-2" id="select-btn"  outlined >MUSCLEMAN</v-btn>
        <v-btn @click="search('토르')" class="ma-2" id="select-btn"  outlined >THOR</v-btn>
        <v-btn @click="search('비실이')" class="ma-2" id="select-btn"  outlined >BISIRI</v-btn>
      </div>
      <v-app id="inspire">
        <div>
          <v-row>
            <v-col cols="12">
              <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
                <v-carousel-item>
                  <div fill-height>
                    <v-row style="height: 400px;">
                      <v-col cols="4" v-for="(v,i) in a" :key="i">
                        <v-card class="mx-auto" max-width="360">
                          <iframe
                            width="338"
                            height="210"
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
                            <router-link :to="'/review/video-review/'+v.id.videoId">
                              <v-btn>리뷰</v-btn>
                            </router-link>

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
                  </div>
                </v-carousel-item>

                <v-carousel-item>
                  <div fill-height>
                    <v-row style="height: 400px;">
                      <v-col cols="4" v-for="(v,i) in b" :key="i">
                        <v-card class="mx-auto" max-width="360">
                          <iframe
                            width="338"
                            height="210"
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
                            <router-link :to="'/review/video-review/'+v.id.videoId">
                              <v-btn>리뷰</v-btn>
                            </router-link>

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
                  </div>
                </v-carousel-item>

                <v-carousel-item>
                  <div fill-height>
                    <v-row style="height: 400px;">
                      <v-col cols="4" v-for="(v,i) in c" :key="i">
                        <v-card class="mx-auto" max-width="360">
                          <iframe
                            width="338"
                            height="210"
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
                            <router-link :to="'/review/video-review/'+v.id.videoId">
                              <v-btn>리뷰</v-btn>
                            </router-link>

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
                  </div>
                </v-carousel-item>

                <v-carousel-item>
                  <div fill-height>
                    <v-row style="height: 400px;">
                      <v-col cols="4" v-for="(v,i) in d" :key="i">
                        <v-card class="mx-auto" max-width="360">
                          <iframe
                            width="338"
                            height="210"
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
                            <router-link :to="'/review/video-review/'+v.id.videoId">
                              <v-btn>리뷰</v-btn>
                            </router-link>

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
                  </div>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </div>
      </v-app>
    </v-container>
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
    this.$store.dispatch("getYoutubeList", this.defaultKey);
    this.$store.dispatch("getPartList", this.defaultPart);
  },
  methods: {
    search(value) {
      this.$store.dispatch("getYoutubeList", value);
    },
    searchPart(value) {
      this.$store.dispatch("getPartList", value);
    }
  }
};
</script>

<style scoped>
#select-btn{
  color: rgb(188, 218, 216);
  font-size: 15px;
  font-weight: bold;
}
*{
  font-size: 13px;
}
</style>