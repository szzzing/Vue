<template>
    <movie-header></movie-header>
    <movie-search></movie-search>
    <movie-list></movie-list>
</template>

<script>
import MovieHeader from './common/MovieHeader.vue';
import MovieSearch from './MovieSearch.vue'
import MovieList from './MovieList.vue'

export default {
    components: {
        MovieSearch,
        MovieList,
        MovieHeader
    }
}
</script>

<style>

</style>