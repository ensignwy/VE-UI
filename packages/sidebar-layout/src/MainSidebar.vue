<template>
  <aside>
    <!--菜单栏展开-->
    <el-menu class="el-menu-vertical-demo" :router="true" @open="handleOpen" @close="handleClose" text-color="#000"
             :collapse="isCollapse">
      <template v-for="item in menus">
        <template v-if="item.children">
          <el-submenu :index="item.code">
            <template slot="title"><i class="el-icon-menu"></i><span>{{item.title}}</span></template>
            <el-menu-item v-for="(child,i) in item.children" :key="i" :index="child.code" :route="child.href">
              <i class="el-icon-menu"></i>
              <span>{{child.title}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.code" :route="item.href">
            <i class="el-icon-menu"></i>
            <span>{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </aside>
</template>
<script>
  import Bus from './bus'

  export default {
    props: ['menus'],
    data () {
      return {
        isCollapse: false
      }
    },
    mounted: function () {
      // 在钩子函数中监听来自兄弟组件MainHeader的数据
      Bus.$on('collapsed', (e) => {
        this.isCollapse = e
      })
    },
    created: function () {
    },
    methods: {
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      }
    }
  }
</script>
<style scoped>
  aside {
    transition: all 0.3s ease 0s;
    height: 100%;
  }
</style>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }

  .el-menu-vertical-demo {
    height: 100%;
  }
</style>
