<template>
  <div>
    <v-app-bar class="elevation-0" app>
      <div class="app-bar">
        <span class="dashboard-text">{{ path ? path : page_name }}</span>
        <div class="left-block">
          <div style="display: flex">
            <div style="width: 20px; height: 20px; margin-right: 26px">
              <v-img
                src="../../assets/app-bar-icons/clock.svg"
                style="cursor: pointer"
              />
            </div>
            <div style="width: 20px; height: 20px; margin-right: 26px">
              <v-img
                src="../../assets/app-bar-icons/phone.svg"
                style="cursor: pointer"
              />
            </div>
            <div style="width: 20px; height: 20px; margin-right: 26px">
              <v-img
                src="../../assets/app-bar-icons/message.svg"
                style="cursor: pointer"
              />
            </div>
            <div style="width: 20px; height: 20px; margin-right: 26px">
              <v-img
                src="../../assets/app-bar-icons/natification.svg"
                style="cursor: pointer"
              />
            </div>
          </div>
          <div class="child-left-block">
            <div class="image-div">
              <v-img src="../../assets/app-bar-icons/person.png" />
            </div>
            <div>
              <span
                style="
                  font-size: 14px;
                  font-weight: 600;
                  position: absolute;
                  top: 7px;
                  left: 54px;
                "
                >Akbarjon Anvarjonov</span
              >
              <span
                style="
                  font-size: 12px;
                  font-weight: 400;
                  color: #8896a1;
                  position: absolute;
                  top: 26px;
                  left: 54px;
                "
                >General manager</span
              >
              <div
                style="width: 9px; height: 6px; position: absolute; right: 19px"
              >
                <v-img src="../../assets/app-bar-icons/bottom-icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app-bar",

  computed: {
    ...mapGetters({ path: "path/getPagePath" }),
  },

  data() {
    return {
      page_name: window.localStorage.getItem("page_name"),
    };
  },
};
</script>

<style lang="css">
.app-bar {
  width: 100%;
  height: 64px;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  display: flex;
}
.v-toolbar__content {
  padding: 0 !important;
}
.dashboard-text {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  margin-left: 24px;
}
.left-block {
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: right;
  align-items: center;
}
.child-left-block {
  width: 280px;
  height: 48px;
  border-radius: 4px;
  background: #fafafa;
  margin-right: 24px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.image-div {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-left: 12px;
}
</style>
