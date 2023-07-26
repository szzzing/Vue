<template>
    <div id="wrap">
      <movie-header></movie-header>
      <router-view></router-view>
      <movie-footer></movie-footer>
    </div>
</template>

<script>
import MovieFooter from './components/common/MovieFooter.vue';
import MovieHeader from './components/common/MovieHeader.vue';

export default {
  components: {
    MovieHeader,
    MovieFooter
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
  list-style: none;
}
html {
  background: #181818;
}
#wrap {
  max-width: 1000px;
  margin: 60px auto;
}
a {
  text-decoration: none;
}
::-webkit-scrollbar {
  width: 0px;
	height: 0;
}
::-webkit-scrollbar-track {
  display: none;
}
::-webkit-scrollbar-thumb {
  background: var(--G50);
  border-radius: 5px;
}
</style>