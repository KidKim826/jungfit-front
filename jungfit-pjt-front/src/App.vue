<template>
  <div>
    <header-nav></header-nav>
    <router-view/>
  </div>
</template>

<script>
import HeaderNav from "@/components/common/HeaderNav.vue"
export default {
  components: {
    HeaderNav
  }
}
</script>

<style>
.v-application--wrap {
  min-height: unset;
}
</style>