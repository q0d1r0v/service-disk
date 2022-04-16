<template>
  <div>
    <app-bar />
    <nav-bar />
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
import appBar from "./app-bar";
import navBar from "./nav-bar";
export default {
  name: "main",
  components: { appBar, navBar },
};
</script>
