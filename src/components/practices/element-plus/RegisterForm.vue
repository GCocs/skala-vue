<script setup>
import { ref } from 'vue'
import { ElButton, ElCard, ElForm, ElFormItem, ElInput, ElMessage, ElSwitch } from 'element-plus'

const userForm = ref({
  email: '',
  agree: false,
})

const handleRegister = () => {
  if (!userForm.value.email.includes('@')) {
    ElMessage.error('❌ 올바른 이메일 형식이 아닙니다.')
    return
  }

  if (!userForm.value.agree) {
    ElMessage.warning('⚠️ 이용약관에 동의하셔야 합니다.')
    return
  }

  ElMessage.success('🎉 가입 신청이 정상적으로 완료되었습니다!')
}
</script>

<template>
  <el-card shadow="hover">
    <template #header>
      <strong>회원가입 연습</strong>
    </template>

    <el-form label-position="top" @submit.prevent="handleRegister">
      <el-form-item label="이메일 주소">
        <el-input v-model="userForm.email" placeholder="example@email.com" clearable />
      </el-form-item>

      <div class="agreement-row">
        <span>이용약관에 동의합니다.</span>
        <el-switch v-model="userForm.agree" />
      </div>

      <el-button type="primary" native-type="submit">회원가입</el-button>
    </el-form>
  </el-card>
</template>

<style scoped>
.agreement-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
</style>
