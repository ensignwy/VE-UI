<template>

  <div class="switcher" ref="switcher">
    <button type="button" class="el-carousel__arrow el-carousel__arrow--left" @click.stop="leftClick"><i
      class="el-icon-arrow-left"></i></button>
    <div class="switcher-list" ref="switcherList">
      <span v-for="d in data" v-if="d.active" :value="d.value" class="switcher-item" v-html="d.label"></span>
    </div>
    <button type="button" class="el-carousel__arrow el-carousel__arrow--right" @click.stop="rightClick"><i
      class="el-icon-arrow-right"></i></button>
  </div>

</template>
<script>
  export default {
    name: 'VeSwitcher',
    data() {
      return {
        currentValue:null
      }
    },
    props: {
      data: {
        type: Array,
        required: true
      }

    },
    computed: {},
    created() {
      this.$nextTick(() => {

      })
    },
    methods: {
      leftClick: function () {
        var data = this.data
        for (let i = 0; i < data.length; i++) {
          if (data[i].active) {
            data[i].active = false
            var nextIndex = i - 1
            if (nextIndex < 0) {
              nextIndex = 0
            }
            data[nextIndex].active = true
            this.currentValue = data[nextIndex].value
            break
          }
        }
        this.$emit('change-value',this.currentValue)
      },
      rightClick: function () {
        var data = this.data
        for (let i = 0; i < data.length; i++) {
          if (data[i].active) {
            data[i].active = false
            var nextIndex = i + 1
            if (nextIndex >= data.length) {
              nextIndex = data.length - 1
            }
            data[nextIndex].active = true
            this.currentValue = data[nextIndex].value
            break
          }
        }
        this.$emit('change-value',this.currentValue)
      }
    }
  }
</script>

<style>
  .switcher {
    position: relative;
    padding: 0 40px;
  }

  .switcher-list {
    display: flex;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
    text-align: center;
  }

  .switcher-item {
    width: 100%;
  }

  .el-carousel__arrow {
    background-color: transparent;
  }

  .el-carousel__arrow:hover {
    background-color: transparent;
  }

  .el-carousel__arrow--left {
    position: absolute;
    left: 0px;
  }

  .el-carousel__arrow--left {
    position: absolute;
    right: 0px;
  }

  i {
    color: #409eff;
    font-size: 20px;
  }

</style>
