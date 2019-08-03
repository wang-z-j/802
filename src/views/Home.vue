<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <el-row>
        <el-col :span="8">
          <div class="logo">
            <img src="../assets/images/toubu.png" alt />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <img src="../assets/images/图层3.png" alt />王战军同学您好
            <i class="el-icon-arrow-down"></i>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <img src="../assets/images/图层3.png" alt />中国
            <i class="el-icon-arrow-down"></i>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 主体部分 -->
    <el-container id="container">
      <el-aside width="218px">
        <div class="admin">
          <img src="../assets/images/avatar.png" alt />
          <p>Admin</p>
          <p>前端43期</p>
        </div>
        <el-col>
          <el-menu active-text-color="#ff9800" :default-active="handleUrlPath()" :router="true">
            <el-menu-item-group>
              <el-menu-item index="/user">
                <img src="../assets/images/tab1.png" alt />
                <span slot="title">用户中心</span>
              </el-menu-item>
              <el-menu-item index="/assessment">
                <img src="../assets/images/tab2.png" alt />
                <span slot="title">评测中心</span>
              </el-menu-item>
              <el-menu-item index="/class">
                <img src="../assets/images/tab3.png" alt />
                <span slot="title">课程中心</span>
              </el-menu-item>
              <el-menu-item index="/task">
                <img src="../assets/images/tab4.png" alt />
                <span slot="title">任务中心</span>
              </el-menu-item>
              <el-menu-item index="/track">
                <img src="../assets/images/tab5.png" alt />
                <span slot="title">成长档案</span>
              </el-menu-item>
              <el-menu-item index="/database">
                <img src="../assets/images/tab6.png" alt />
                <span slot="title">全球数据库</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-col>
      </el-aside>

      <!-- 留出口 -->
      <router-view></router-view>
      <!-- <el-header>header</el-header>
      <el-main>Main</el-main>-->
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    handleUrlPath () {
      return this.$route.path
    }
  }
}
</script>
<style scoped lang="less">
// 头部样式
.header {
  background: url("../assets/images/header.png");
  height: 137px;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  .logo img {
    margin: 0 auto;
    display: block;
  }
  .bg-purple-light,
  .bg-purple {
    font-size: 12px;
    color: #fff;
    line-height: 32px;
    height: 32px;
    img {
      vertical-align: top;
      padding-right: 10px;
    }
  }
  .bg-purple-light {
    text-align: right;
  }
}
// 主体部分样式
.el-container {
  width: 80%;
  // background-color: skyblue;
  height: 100%;
  margin: 0 auto;
  // 侧栏
  .el-aside {
    text-align: center;
    .el-col {
      box-sizing: border-box;
    }
    .el-menu-item {
      img {
        padding-right: 10px;
      }
    }
    .admin {
      background: url("../assets/images/avatarbgc.png");
      height: 211px;
      width: 218px;
      text-align: center;
      color: #fff;
      box-sizing: border-box;
      padding: 16px;
      p {
        margin-top: 12px;
      }
      img {
        margin: 0 auto;
        display: block;
      }
    }
  }
}
</style>
