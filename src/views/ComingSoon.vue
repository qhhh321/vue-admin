<template>
    <div class="home-container">
        <div class="home-content">
            <Input :rows="30" style="margin-top: 20px" v-model="userInfo" type="textarea" />
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            userInfo: 'coming soon。。。',
        }
    },

}
</script>

<style scoped>
.home-container {
    padding: 10px;
    padding-top: 5px;
}
.home-content {
    padding: 10px;
    border-radius: 5px;
    background: #fff;
}
</style>