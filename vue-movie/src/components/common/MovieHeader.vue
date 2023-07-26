<template>
   <div id="header">
        <router-link to="/">
            <div class="title">
                🌙
            </div>
            <div class="sub-title">어떤 영화가 궁금해?</div>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #header {
        margin: 60px 0;
    }
    .title {
        margin: 0 0 12px;
        font-size: 40px;
        font-weight: 900;
        text-align: center;
        color: #fff;
    }
    .sub-title {
        color: #aaa;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
    }
</style>