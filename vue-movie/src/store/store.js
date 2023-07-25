import Vuex from 'vuex'
import axios from 'axios'

export const store = new Vuex.Store({
    state: {
        headerText: 'Movie👍👎',
        id: '',  // 선택한 영화 아이디
        query: '',
        details: {},
        searchList: {}
    },
    mutations: {
        setId(state, payload) {
            state.id = payload;
        },
        setDetails(state, payload) {
            state.details = payload;
        },
        setSearchList(state, payload) {
            state.searchList = payload;
        },
        setQuery(state, payload) {
            state.query = payload;
        }
    },
    actions: {
        // 영화 검색하기
        searchList(context) {
            axios
            .get('https://api.themoviedb.org/3/search/movie?query='+context.state.query+'&api_key=7bf40bf859def4eaf9886f19bb497169&language=ko-KR')
            .then(function(response) {
                console.log(response.data);
                context.commit('setSearchList', response.data);
            });
        },
        // 영화 상세정보 불러오기
        getDetails(context) {
            var list = {};
            axios
            .get('https://api.themoviedb.org/3/movie/'+context.state.id+'?api_key=7bf40bf859def4eaf9886f19bb497169&language=ko-KR')
            .then(function(response) {
                list = response.data;
                console.log(list);
                }
            );
            context.commit('setSearchList', list);
        }
    }
});