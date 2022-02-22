<template>
  <div class="page-index">
    首页
    <p>{{ loadingTxt }}</p>
    <br />
    <br />
    <img src="" class="avatar" />
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

import Toast from "vant/lib/toast";
import "vant/lib/toast/style";

export default {
  name: "pageIndex",
  data() {
    return {
      loadingTxt: 0,
      root: "https://vwx.linkroutes.com/",
      auth: "wx/authorize",
      openId: "",
    };
  },
  created() {
    let urlData = this.$tool.parseURL(location.href).params;
    console.log("页面携带的参数：", urlData);
    this.openId = urlData.openId;
    this.checkAuth(this.openId, this.token);
  },
  methods: {
    checkAuth(openId, token) {
      console.log("是否有openId:", openId);
      if (openId) {
        Toast("授权成功");
      } else {
        this.go2auth(location.href);
      }
    },
    go2auth(url) {
      console.log("跳转前的url:", url);
      let target =
        this.root + this.auth + `?redirect=` + encodeURIComponent(url);
        location.replace(target);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
.page-index {
  .avatar {
    width: 2rem;
    height: 2rem;
    @include gPlaceholder();
    margin: 0 auto;
  }
}
</style>
