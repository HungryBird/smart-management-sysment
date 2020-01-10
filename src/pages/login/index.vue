<template>
    <div class="content">
        <h3>登录页面</h3>
        <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="name">
                <el-input v-model="form.name" placeholder="用户名" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" placeholder="密码" type="password" />
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="remeber" label="记住密码"></el-checkbox>
            </el-form-item>
        </el-form>
        <el-button type="primary" style="display: block;width: 100%;" @click="toLogin">登录</el-button>
    </div>
</template>

<script>
import { token } from '@/api/login'
export default {
    data() {
        return{
            form: {},
            rules: {
                name: [
                    {required: true, message: '请输入用户名'},
                ],
                password: [
                    {required: true, message: '请输入密码'}
                ]
            },
            remeber: false,
        }
    },
    methods: {
        toLogin() {
            this.$refs.form.validate(valid => {
                window.console.log('valid: ', valid)
                window.console.log('this: ', this);
                if(valid) {
                    // console.log('token(this.form): ', token(this.form))
                    token(this.form).then(res => {
                        console.log('res: ', res)
                    }).then(err => {
                        console.error(err);
                    })
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    html,body{
        width: 100%;
        height: 100%;
        background: #eee;
    }
    .content{
        width: 460px;
        margin: 120px auto;
        text-align: left;
        h3{
            text-align: center;
        }
    }
</style>