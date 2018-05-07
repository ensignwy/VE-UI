<template>
  <div class="wrapper">
    <main-header :header-props="headerProps"></main-header>
    <div class="content-wrapper">
      <main-sidebar :menus="menus"></main-sidebar>
      <div class="content" :class="isCollapse?'content-expanded':'content-collapsed'">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import MainHeader from './MainHeader'
  import MainSidebar from './MainSidebar'
  import Bus from './bus'

  export default {
    name: 'SidebarLayout',
    props:['menus','headerProps'],
    data() {
      return {
        isCollapse: false
      }
    },
    components: {
      MainHeader,
      MainSidebar
    },
    mounted: function () {
      // 在钩子函数中监听来自兄弟组件MainHeader的数据
      Bus.$on('collapsed', (e) => {
        this.isCollapse = e
      })
    }
  }
</script>
<style scoped>
  .wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .wrapper .content-wrapper {
    position: absolute;
    top: 50px;
    bottom: 0;
    width: 100%;
  }

  .wrapper .content-wrapper .content {
    padding: 0 15px 15px 15px;
    background-color: #EDF0F5;
    text-align: left;
    transition: all 0.3s ease 0s;
  }

  .content-collapsed {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 201px;
  }

  .content-expanded {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 65px;
  }


</style>
