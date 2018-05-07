<template>
  <table border="0" cellspacing="0" cellpadding="0" class="el-table el-table--fit el-table--striped el-table--border el-table--enable-row-hover el-table--enable-row-transition" role="grid" style="width: 100%">
    <colgroup v-if="columns.length > 0">
      <col v-for="col in columns" :width="col.width"/>
    </colgroup>
    <thead v-if="columns.length > 0">

    <tr>
      <th v-for="col in columns">{{col.name}}</th>
    </tr>

    </thead>
    <thead v-else>
    <tr>
      <th></th>
    </tr>
    </thead>
  </table>
</template>
<script>
  import _ from 'lodash'
  import 'datatables.net-bs'
  import './custom'
  import './datatables.css'
  import 'datatables.net-buttons'

  export default {
    name: 'DataTables',
    props: ['options', 'columns', 'ajaxUrl'],
    data() {
      return {
        cssCls: 'col-md-12',
        tableData: []
      }
    },
    methods: {
      reload: function () {
        this.dataTable.ajax.reload();
      },
      table: function (options) {
        var vm = this;
        this.dataTable && this.dataTable.destroy();

        var defaultsOpts = vm.options;
        if (vm.ajaxUrl != null) {
          _.extend(defaultsOpts.ajax, {
            url: vm.ajaxUrl
          });
        }

        _.extend(defaultsOpts, {
          columns: vm.columns
        });

        _.extend(defaultsOpts, options || {});

        vm.$el = $(vm.$el);

        if (defaultsOpts.serverSide === true) {
          vm.dataTable = vm.$el.dataTable(defaultsOpts);
        } else {
          vm.dataTable = vm.$el.DataTable({
            data: vm.tableData
          });
        }

        vm.dataTable.on('error.dt', function (e, settings, techNote, message) {
          console.error(e);
          console.error(settings);
          console.error(techNote);
          console.error(message);
          // TODO: 自定义 dataTables 的错误处理
          // if ()
          // router.go('login');
        });

        // 绑定xhr事件
        vm.dataTable.on('xhr.dt', function (e, settings, json, xhr) {
          if (xhr.status === 401) {
            vm.$router.push({path: '/login'})
          }

        });
      }
    },

  }


</script>
<style>
  .el-table__row.el-table__row--striped{
    background-color: #F5F7FA;
  }
  .el-table__row.el-table__row--striped:hover{
    background-color: #D5E6FF;
  }

</style>
