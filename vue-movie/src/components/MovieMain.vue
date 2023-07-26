<template>
    <movie-header></movie-header>
    <movie-search></movie-search>
    <movie-list></movie-list>
    <movie-footer></movie-footer>
</template>

<script>
import MovieHeader from './common/MovieHeader.vue';
import MovieSearch from './MovieSearch.vue'
import MovieList from './MovieList.vue'
import MovieFooter from './common/MovieFooter.vue';

export default {
    components: {
        MovieSearch,
        MovieList,
        MovieHeader,
        MovieFooter
    }
}
</script>

<style>

</style>