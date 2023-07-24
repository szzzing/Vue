<template>
    <div>
        <div class="input-box">
            <input type="text" placeholder="검색어를 입력하세요." v-model="query">
        </div>
        <div class="result" v-if="query!=''">
            {{ query }}에 대한 검색결과
        </div>
    </div>
</template>

<script>
import axios from 'axios';
var list = {};

export default {
    data: function() {
        return {
            query: '',
            list : {}
        }
    },
    computed: {
        url() {
            return 'https://api.themoviedb.org/3/search/movie?query='+this.query.trim()+'&api_key=7bf40bf859def4eaf9886f19bb497169&language=ko-KR';
        }
    },
    watch: {
        // axios보다 emit이 먼저 실행되는 문제
        // this를 변수에 저장해 해결
        query: function() {
            var vm = this;
            console.log(this.query);
            console.log(this.url);
            axios
            .get(this.url)
            .then(function(response) {
                console.log(1);
                list = response.data;
                vm.$emit('returnList', list);
            });
        }
    }
}
</script>

<style scoped>
    div {
        text-align: center;
    }
    input[type=text] {
        border: none;
        width: 200px;
        background: #f7f7f7;
        font-size: 16px;
    }
    .input-box {
        background: #f7f7f7;
        width: 240px;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
        margin: 20px auto;
    }
    :focus {
        outline: none;
    }
    .result {
        font-size: 20px;
        margin: 20px 0 60px;
    }
</style>