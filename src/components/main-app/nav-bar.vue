<template>
  <div>
    <v-navigation-drawer :mini-variant="mini" v-model="drawer" app>
      <div>
        <div
          style="
            width: 24px;
            height: 24px;
            display: flex;
            margin-top: 20px;
            margin-left: 16px;
          "
          @click="mini = !mini"
        >
          <v-img
            v-if="mini"
            src="../../assets/nav-bar-icons/to-true.svg"
            style="cursor: pointer"
          />
          <v-img
            v-else
            src="../../assets/nav-bar-icons/to-false.svg"
            style="cursor: pointer"
          />
        </div>
        <div>
          <div style="margin-top: 44px; margin-left: 16px; display: flex">
            <div style="width: 28px; height: 24px">
              <v-img src="../../assets/nav-bar-icons/mini-logo.svg" />
            </div>
            <div
              style="
                width: 109px;
                height: 24px;
                margin-top: 4px;
                margin-left: 10px;
              "
              v-if="!mini"
            >
              <v-img src="../../assets/nav-bar-icons/logo-text.svg" />
            </div>
          </div>
        </div>

        <!--        dashboard-->

        <div style="margin-top: 32px">
          <v-list>
            <v-list-group
              v-for="item in dashboard"
              :key="item.title"
              v-model="item.active"
              no-action
              @click="changeActive('dashboard')"
              class="border"
            >
              <template v-slot:activator>
                <div
                  v-if="!item.active"
                  style="width: 18px; height: 18px; margin-left: 3px"
                >
                  <v-img :src="item.icons_noactive" />
                </div>
                <div v-else style="width: 18px; height: 18px; margin-left: 3px">
                  <v-img :src="item.icon_active" />
                </div>
                <v-list-item-content>
                  <span
                    v-if="!item.active"
                    v-text="item.title"
                    style="font-size: 16px; margin-left: 15px; color: #8896a1"
                  ></span>
                  <span
                    v-else
                    v-text="item.title"
                    style="font-size: 16px; margin-left: 15px; color: #13cd61"
                  ></span>
                </v-list-item-content>
                <div
                  v-if="item.active"
                  style="
                    width: 8px;
                    height: 56px;
                    background: #13cd61;
                    border-radius: 0px 4px 4px 0px;
                    box-shadow: 0px 0px 16px rgba(19, 205, 97, 0.4);
                    position: absolute;
                    left: 0;
                  "
                ></div>
              </template>

              <v-list-item v-for="child in item.items" :key="child.title">
                <v-list-item-content>
                  <v-list-item-title
                    class="child"
                    v-text="child.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </div>

        <!--        dashboard-->

        <div
          style="margin: auto; width: 216px; height: 1px; background: #f0f2f5"
        ></div>

        <!--        main-menu-->
        <div>
          <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              no-action
              @click="changeActive('items')"
              class="border"
            >
              <template v-slot:activator>
                <div
                  v-if="!item.active"
                  style="width: 18px; height: 18px; margin-left: 3px"
                >
                  <v-img :src="item.icons_noactive" />
                </div>
                <div v-else style="width: 18px; height: 18px; margin-left: 3px">
                  <v-img :src="item.icon_active" />
                </div>
                <v-list-item-content>
                  <span
                    v-if="!item.active"
                    v-text="item.title"
                    style="font-size: 16px; margin-left: 15px; color: #8896a1"
                  ></span>
                  <span
                    v-else
                    v-text="item.title"
                    style="font-size: 16px; margin-left: 15px; color: #13cd61"
                  ></span>
                </v-list-item-content>
                <div
                  v-if="item.active"
                  style="
                    width: 8px;
                    height: 56px;
                    background: #13cd61;
                    border-radius: 0px 4px 4px 0px;
                    box-shadow: 0px 0px 16px rgba(19, 205, 97, 0.4);
                    position: absolute;
                    left: 0;
                  "
                ></div>
              </template>

              <v-list-item v-for="child in item.items" :key="child.title">
                <v-list-item-content>
                  <v-list-item-title
                    class="child"
                    v-text="child.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </div>
        <!--        main-menu-->

        <div
          style="margin: auto; width: 216px; height: 1px; background: #f0f2f5"
        ></div>

        <!--        admin-->
        <div>
          <v-list>
            <v-list-group
              v-for="item in admin"
              :key="item.title"
              v-model="item.active"
              no-action
              @click="changeActive('admin')"
              class="border"
            >
              <template v-slot:activator>
                <div
                  v-if="!item.active"
                  style="width: 18px; height: 18px; margin-left: 3px"
                >
                  <v-img :src="item.icons_noactive" />
                </div>
                <div v-else style="width: 18px; height: 18px; margin-left: 3px">
                  <v-img :src="item.icon_active" />
                </div>
                <v-list-item-content>
                  <span
                    v-if="!item.active"
                    v-text="item.title"
                    style="font-size: 16px; margin-left: 15px; color: #8896a1"
                  ></span>
                  <span
                    v-else
                    v-text="item.title"
                    style="font-size: 16px; margin-left: 15px; color: #13cd61"
                  ></span>
                </v-list-item-content>
                <div
                  v-if="item.active"
                  style="
                    width: 8px;
                    height: 56px;
                    background: #13cd61;
                    border-radius: 0px 4px 4px 0px;
                    box-shadow: 0px 0px 16px rgba(19, 205, 97, 0.4);
                    position: absolute;
                    left: 0;
                  "
                ></div>
              </template>

              <v-list-item v-for="child in item.items" :key="child.title">
                <v-list-item-content>
                  <v-list-item-title
                    class="child"
                    v-text="child.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </div>
        <!--        admin-->
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import dashboard_active from "../../assets/nav-bar-icons/dashboard-active.svg";
import dashboard_noactive from "../../assets/nav-bar-icons/dashboard-noactive.svg";
import message_active from "../../assets/nav-bar-icons/message_active.svg";
import message_noactive from "../../assets/nav-bar-icons/message_noactive.svg";
import settings_active from "../../assets/nav-bar-icons/settings_active.svg";
import settings_noactive from "../../assets/nav-bar-icons/settings_noactive.svg";
import admin_active from "../../assets/nav-bar-icons/admin-active.svg";
import admin_noactive from "../../assets/nav-bar-icons/admin_noactive.svg";
export default {
  name: "nav-bar",
  data() {
    return {
      drawer: true,
      mini: true,
      dashboard: [
        {
          icon_active: dashboard_active,
          icons_noactive: dashboard_noactive,
          items: [],
          title: "Dashboard",
        },
      ],
      items: [
        {
          icon_active: message_active,
          icons_noactive: message_noactive,
          active: false,
          items: [{ title: "Kiruvchi" }, { title: "Chiquvchi" }],
          title: "Murojaatlar",
        },
        {
          icon_active: settings_active,
          icons_noactive: settings_noactive,
          active: false,
          items: [
            { title: "Guruhlar" },
            { title: "Departamentlar" },
            { title: "Murojaat turi" },
            { title: "Baholash mezoni" },
          ],
          title: "Sozlamalar",
        },
      ],
      admin: [
        {
          icon_active: admin_active,
          icons_noactive: admin_noactive,
          active: false,
          items: [
            { title: "Barcha murojaatlar" },
            { title: "Rad etilganlar" },
            { title: "Bekor qilinganlar" },
          ],
          title: "Admin panel",
        },
      ],
    };
  },

  methods: {
    goDashboardPage() {
      localStorage.setItem("page_name", this.$route.name);
      this.$store.dispatch("path/setPageName", this.$route.name);
      console.log();
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
    changeActive(isChange) {
      if (isChange === "dashboard") {
        this.items.forEach((el) => (el.active = false));
        this.admin.forEach((el) => (el.active = false));
      } else if (isChange === "items") {
        this.dashboard.forEach((el) => (el.active = false));
        this.admin.forEach((el) => (el.active = false));
      } else if (isChange === "admin") {
        this.items.forEach((el) => (el.active = false));
        this.dashboard.forEach((el) => (el.active = false));
      }
    },
  },
};
</script>

<style lang="css">
.child:hover {
  color: #13cd61;
  cursor: pointer;
  transition: all 0.3s;
}
</style>
