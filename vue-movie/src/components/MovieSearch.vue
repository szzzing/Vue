<template>
    <div>
        <div class="input-box">
            <input type="text" placeholder="엘리멘탈" v-model="query">
        </div>
        <div class="result" v-if="this.$store.state.query!=''">
            <b>{{ this.$store.state.query }}</b>에 대한 영화를 보여줄게.
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
// var list = {};

export default {
    data: function() {
        return {
            query: ''
        }
    },
    watch: {
        // axios보다 emit이 먼저 실행되는 문제
        // this를 변수에 저장해 해결
        query: function() {
            // var vm = this;
            // axios
            // .get('https://api.themoviedb.org/3/search/movie?query='+vm.query.trim()+'&api_key=7bf40bf859def4eaf9886f19bb497169&language=ko-KR')
            // .then(function(response) {
            //     list = response.data;
            //     vm.$emit('returnList', list);
            // });
            this.$store.commit('setQuery', this.query);
            this.$store.dispatch('searchList');
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
        width: 360px;
        background: #f7f7f7;
        font-size: 20px;
        text-align: center;
    }
    input::placeholder {
        color: #ddd;
    }
    .input-box {
        background: #f9f9f9;
        width: 400px;
        height: 60px;
        line-height: 60px;
        border-radius: 16px;
        margin: 20px auto 40px;
    }
    :focus {
        outline: none;
    }
    .result {
        font-size: 24px;
        margin: 40px 0 60px;
        color: #fff;
    }
</style>