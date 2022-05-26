<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view />
    <footer-bar ></footer-bar>
  </div>
</template>

<script>
import HeaderNav from "@/components/common/HeaderNav.vue";
import FooterBar from "@/components/common/FooterBar.vue"
export default {
  components: {
    HeaderNav,
    FooterBar
  }
};
</script>

<style>
.v-application--wrap {
  min-height: unset;
}

.app {
  background-color: black !important;
}

.footer-bar{
  margin-top:100px;
  position: absolute;
}

</style>