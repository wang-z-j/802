<template>
  <el-container>
    <el-header style="height:350px;width:100%">
      <!-- 导航栏部分 -->
      <el-tabs v-model="activeName">
        <el-tab-pane label="VIA优势测试" name="first">VIA优势测试的内容</el-tab-pane>
        <el-tab-pane label="ONet职业测评" name="second">
          <!-- 标签部分 -->
          <div class="tag">
            <el-tag style="color:orange">职业兴趣</el-tag>
            <el-tag style="color:orange">职业价值观</el-tag>
            <el-tag color="orange" style="color:#fff">职业推荐</el-tag>
          </div>
          <!-- 文字内容 -->
          <div class="content">
            <el-row type="flex" align="middle" justify="center">
              <el-col :span="18">
                黑马程序前端43期黑马程序前端43期黑马程序前端43期黑马程序前端43期黑马程序前端43期黑马程序前端43期
                黑马程序前端43期黑马程序前端43期黑马程序前端43期黑马程序前端43期
              </el-col>
              <el-col :span="6">
                <img src="../../assets/images/图层55.png" alt />
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="报告管理" name="third">报告管理的内容</el-tab-pane>
      </el-tabs>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="12">
          <span>相关职业推荐</span>
        </el-col>
        <el-col :span="12">
          <el-col :span="12">
            账户:
            <el-select placeholder="全部" size="mini" style="width:120px"></el-select>
          </el-col>
          <el-col :span="12">
            教育水平:
            <el-select placeholder="全部" size="mini" style="width:120px"></el-select>
          </el-col>
        </el-col>
      </el-row>
      <ul>
        <li>职业</li>
        <li>STEM</li>
        <li>教育水平等级</li>
        <li>所属行业</li>
        <li>分数</li>
      </ul>
      <div class="content">
        <img src="../../assets/images/unfinish.png" alt />
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'second'
    }
  }
}
</script>

<style scoped lang='less'>
.el-container {
  margin-left: 15px;
  z-index: 999;
  .el-header {
    background-color: #ffffff;
    border-radius: 15px;
    padding: 12px;
    box-sizing: border-box;
    margin-bottom: 15px;
  }
  .el-tag {
    margin-right: 12px;
  }
  .content {
    img {
      display: block;
      margin: 0 auto;
    }
  }
  .el-main {
    border-radius: 15px;
    background-color: #fff;
    span {
      border-left: 2px solid orange;
      padding: 0 12px;
    }
    ul {
      color: #ffffff;
      text-align: center;
      // width: 100%;
      margin-top: 20px;

      li {
        background-color: skyblue;
        line-height: 30px;
        height: 30px;
        float: left;
        width: 20%;
      }
    }
    .content {
      img {
        display: block;
        margin: 100px auto;
        box-sizing: border-box;
      }
    }
  }
}
</style>
