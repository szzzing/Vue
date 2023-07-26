export const mutations = {
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
    },
    setIsContent(state) {
        state.isContent = !state.isContent;
    }
}