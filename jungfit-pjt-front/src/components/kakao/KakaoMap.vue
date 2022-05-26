<template>
  <v-container>
    <h1>MyPage</h1>
    <v-card class="position-relative profile-card mb-7 mt-4">
      <br />
      <v-card-text class="pa-5">
        <div id="map" style="width:500px;height:400px;"></div>
        <h1 class="font-weight-regular">주소</h1>
        <h4 class="op-5 font-weight-regular">JUNGFIT</h4>
        <v-btn
          color="deep-purple accent-2"
          medium
          class="text-capitalize white--text mt-4 mb-4"
          rounded
        >
          <v-icon dark>mdi-heart</v-icon>
        </v-btn>
      </v-card-text>
      <br />
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "KakaoMap",
  data() {
    return {
      map: null
    };
  },
  mounted() {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_MAP_API_KEY}`;

    script.addEventListener("load", () => {
      kakao.maps.load(this.initMap);
    });

    /* global kakao */
    document.head.appendChild(script);
  },
  methods: {
    initMap() {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };

      this.map = new kakao.maps.Map(mapContainer, mapOption);

      //   // 주소-좌표 변환 객체를 생성합니다
      //   var geocoder = new kakao.maps.services.Geocoder();
    }
  }
};
</script>

<style>
</style>