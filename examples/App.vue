<template>
  <div id="app">
    <div v-if="isIndex">
      <router-view class="page"></router-view>
    </div>
    <div v-else>
      <main-header></main-header>
      <div class="container">
        <side-nav class="nav"></side-nav>
        <router-view class="view"></router-view>
      </div>
      <main-footer v-if="!isIndex"></main-footer>
    </div>
  </div>
</template>

<script>
  import MainHeader from './components/Header.vue'
  import MainFooter from './components/Footer.vue'
  import SideNav from './components/SideNav.vue'

  export default {
    name: 'app',
    data () {
      return {
        init: false,
        isIndex: true
      }
    },
    watch: {
      $route () {
        this.isIndex = this.$route.name === 'Index'
      }
    },
    mounted () {
      //  这里模拟数据请求
      setTimeout(() => {
        this.init = true
      }, 250)
    },
    components: {
      MainHeader,
      SideNav,
      MainFooter
    }
  }
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";

  .container {
    margin: 48px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .nav {
      float: left;
      width: 210px;
    }
    .view {
      float: left;
      width: calc(~'100% - 215px');
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }

  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
