<template>
    <div class="content">
        这是主页
        <el-button @click="toLogin">去登陆</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 
        }
    },
    methods: {
        toLogin() {
            this.$router.push('/login');
        }
    }
}
</script>