<template>
   <div class="login_container">
     <div class="login_box">
       <div class="avatar_box">
         <img src="../../assets/logo.png">
       </div>
       <el-form ref="form" :model="form" label-width="0px" class="login_form">
         <!--用户名-->
         <el-form-item>
           <el-input v-model="form.username" placeholder="用户名">
             <i slot="prefix" class="iconfont icon-ren"></i>
           </el-input>
         </el-form-item>
         <!--密码-->
         <el-form-item>
           <el-input v-model="form.password" type="password" placeholder="密码">
             <i slot="prefix" class="iconfont icon-mima"></i>
           </el-input>
         </el-form-item>
         <!--按钮区域-->
         <el-form-item class="btns">
           <el-button type="primary" @click="submitForm">登录</el-button>
           <el-button @click="resetForm('form')" type="info">重置</el-button>
         </el-form-item>
       </el-form>
     </div>
   </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm () {
      console.log(this.form)
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  .login_container {
    background-color: powderblue;
    height: 100%;
  }
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 25px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .avatar_box {
    height: 130px;
    width: 130px;
    border:1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
  .avatar_box img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #eee;
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
</style>
