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
      signature: "wx/signature",
      openId: "",
    };
  },
  created() {
    let urlData = this.$tool.parseURL(location.href).params;
    console.log("页面携带的参数：", urlData);
    this.openId = urlData.openid;
    this.checkAuth(this.openId, this.token);
  },
  methods: {
    checkAuth(openId, token) {
      console.log("是否有openId:", openId);
      if (openId) {
        Toast("授权成功");
        console.log(99999)
        this.setShare();
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
    setShare(cb) {
      axios({
        method: "post",
        url: this.root + this.signature,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        transformRequest: [
          (data) => {
            data = qs.stringify(data);
            return data;
          },
        ],
        data: {
          url: encodeURIComponent(location.href.split("#")[0]),
        },
      })
        .then((data) => {
          console.log('8888888',data)
        })
        .catch((err) => {
          console.log(err);
        });
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
