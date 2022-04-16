<template>
  <v-app>
    <router-view class="background" />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  },
};
</script>

<style lang="css">
.background {
  background: #fafafa;
  padding: 24px;
  width: 100%;
  height: 100%;
}
</style>
