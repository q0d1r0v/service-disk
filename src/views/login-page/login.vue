<template>
  <div class="login">
    <div class="login-form">
      <span class="login-text">Tizimga kirish</span>
      <span class="username-text">Username</span>
      <div class="username">
        <v-text-field
          placeholder="Foydalanuvchi nomi"
          height="46px"
          dense
          hide-details
          flat
          solo
          style="
            border: 1px solid #bdbdbd;
            border-radius: 4px;
            padding-left: 5px;
          "
        />
      </div>

      <span class="password-text">Password</span>
      <div class="password">
        <v-text-field
          type="password"
          placeholder="Foydalanuvchi paroli"
          dense
          height="46px"
          hide-details
          flat
          solo
          style="
            border: 1px solid #bdbdbd;
            border-radius: 4px;
            padding-left: 5px;
          "
        />
      </div>
      <div style="display: flex; justify-content: center" class="mt-13">
        <v-btn
          depressed
          width="380px"
          height="46px"
          style="background: #13cd61; color: #fff"
        >
          kirish
        </v-btn>
      </div>
    </div>
    <div class="img-parent-div">
      <v-img src="../../assets/login-resources/background-img.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>

<style lang="css">
.login {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-form {
  width: 480px;
  height: 580px;
  border: 1px solid #e5e5e5;
  margin-right: 100px;
}
.login-text {
  font-weight: 500;
  font-size: 32px;
  color: #13cd61;
  margin-top: 103px;
  display: flex;
  justify-content: center;
}
.username-text {
  display: flex;
  justify-content: left;
  margin-top: 28px;
  margin-left: 50px;
  font-weight: 400;
  font-size: 16px;
  color: #828282;
}
.password-text {
  display: flex;
  justify-content: left;
  margin-top: 30px;
  margin-left: 50px;
  font-weight: 400;
  font-size: 16px;
  color: #828282;
}
.username {
  width: 380px;
  margin: auto;
}
.password {
  width: 380px;
  margin: auto;
}
.img-parent-div {
  width: 740px;
  height: 740px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
