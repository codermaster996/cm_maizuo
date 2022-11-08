<template>
    <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['2']">
      <el-submenu :index="data.id" v-for="data in titlelist" :key="data.id">
        <template slot="title"><i class="el-icon-message">{{data.title}}</i></template>
        <el-menu-item-group v-for="item in data.children" :key="item.id">
          <template slot="title">{{item.id}}</template>
          <el-menu-item :index="item.id">{{item.nrname}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{myname}}</span>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>

</template>
<script>
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
Vue.use(ElementUI)
export default {
  data () {
    //   date: '2016-05-02',
    //   name: '王小虎',
    //   address: '上海市普陀区金沙江路 1518 弄'
    return {
      myname: 'dashi',
      titlelist: [
        {
          id: '1',
          title: '用户导航',
          children: [
            {
              id: '1',
              nrname: '用户列表'
            },
            {
              id: '2',
              nrname: '用户权限'
            },
            {
              id: '3',
              nrname: '用户情况'
            }

          ]
        },
        {
          id: '2',
          title: '具体情况',
          children: [
            {
              id: '1',
              nrname: '情况列表'
            },
            {
              id: '2',
              nrname: '究极权限'
            },
            {
              id: '3',
              nrname: '期刊名称'
            }

          ]
        }
      ],
      tableData: [
        {
          name: 'dashi',
          date: '2021-12-14',
          address: '淮安'
        },
        {
          name: 'laobie',
          date: '2021-10-14',
          address: '南京'
        },
        {
          name: 'tiechui',
          date: '2025-8-14',
          address: 'null'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
html,body{
    height: 100%;
    width: 100%;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
