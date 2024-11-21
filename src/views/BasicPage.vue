<script setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
import { ref } from 'vue'
const index = ref(1)
const library = ref([
  null,
  {question:'if the side of a cube is 3,how to compute its perimeter, surface area, volume?',answers:[]}
])
const activeNames = ref(['1'])
// const handleChange = (CSSMathValue) => {
//   console.log(val)
// }
</script>
<template>
  <el-row>
    <el-col :span="8">
      <el-progress :percentage="30" :format="format" />
    </el-col>
    <el-col :span="4" class="fragment">
      <el-collapse @change="handleChange">
        <el-collapse-item title="variables" name="1">
          <div>
            <el-button type="primary" round plain>fruit</el-button><br>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Operators" name="2">
          <div>
            <el-button type="success" round plain>+</el-button>
            <el-button type="success" round plain>-</el-button>
            <el-button type="success" round plain>*</el-button>
            <el-button type="success" round plain>/</el-button>
            <el-button type="success" round plain>%</el-button>
            <el-button type="success" round plain>=</el-button>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Efficiency" name="3">
          <div>Simplify the process: keep operating process simple and intuitive;</div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the users can quickly
            understand and make decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which helps the users to
            identify and frees them from memorizing and recalling.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Controllability" name="4">
          <div>
            Decision making: giving advices about operations is acceptable, but do not make
            decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to operate, including
            canceling, aborting or terminating current operation.
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-col>
    <el-col :span="12" class="run"> </el-col>
  </el-row>
</template>

<style lang="scss" scope>
.run {
  border: 2px solid #d4e7fb;
}
.fragment {
  background: #d4e7fb;
  // height: 70vh;
}
</style>
