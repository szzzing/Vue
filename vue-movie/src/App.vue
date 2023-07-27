<template>
    <div id="wrap">
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  components: {
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
html, body {
  background: #181818;
  margin: 0;
  padding: 0;
}
.inner {
  max-width: 1000px;
  margin: 0 auto;
}
a {
  text-decoration: none;
  color: unset;
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
@media screen and (max-width:1040px) {
  #wrap {
    margin: 0 20px;
  }
}
</style>