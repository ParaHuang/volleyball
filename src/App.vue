<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu :default-active="$route.path" mode="horizontal" :ellipsis="false" router>
          <el-menu-item index="0">
            <img src="@/assets/icon.png" />
          </el-menu-item>
          <el-menu-item index="/">Basic Syntax</el-menu-item>
          <el-menu-item index="/if">If</el-menu-item>
          <el-menu-item index="/for">For</el-menu-item>
          <el-menu-item index="/list">List</el-menu-item>
          <el-menu-item index="/other">Other API</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
