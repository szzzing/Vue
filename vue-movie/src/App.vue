<template>
  <div id="app">
    <div id="wrap">
      <movie-header></movie-header>
      <movie-search v-on:returnList="getList"></movie-search>
      <movie-list v-bind:movieList="movieList"></movie-list>
      <movie-footer></movie-footer>
    </div>
  </div>
</template>

<script>
import MovieHeader from './components/common/MovieHeader.vue'
import MovieFooter from './components/common/MovieFooter.vue' 
import MovieSearch from './components/MovieSearch.vue'
import MovieList from './components/MovieList.vue'

export default {
  components: {
    'movie-header': MovieHeader,
    'movie-footer': MovieFooter,
    'movie-search': MovieSearch,
    'movie-list': MovieList
  },
  data() {
    return {
      movieList: {}
    }
  },
  methods: {
    getList(list) {
      this.movieList = list;
    }
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css');
@import url('https://static.toss.im/tps/main.css');
@import url('https://static.toss.im/tps/others.css');

* {
  padding: 0;
  margin: 0;
  font-family: 'Toss Product Sans', TossFace;
}
#app {
  min-height: 100vh;
}
#wrap {
  max-width: 1020px;
  min-height: 100vh;
  margin: 0 auto;
}
</style>