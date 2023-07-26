export const mutations = {
    // 영화 상세정보 수정
    setDetails(state, payload) {
        payload.release_date = payload.release_date.split('-').join('.');
        var genre = [];
        for(var g of payload.genres) {
            genre.push(g.name);
        }
        payload.genres = genre.join('/');
        state.details = payload;
    },
    setSearchList(state, payload) {
        state.searchList = payload;
    },
    setQuery(state, payload) {
        state.query = payload;
    }
}