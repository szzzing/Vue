<template>
    <div>
        <transition-group name="list" tag="div" class="movies">
            <div class="movie" v-for="(movie) in movies" :key="movie" @click="this.selected=movie.id; this.isContent=true">
                <div class="thum">
                    <img :src="'https://image.tmdb.org/t/p/original/'+movie.poster_path">
                </div>
                <div class="info">
                    <div class="title">
                        {{ movie.title }}
                    </div>
                    <div class="date">
                        {{ movie.release_date }}
                    </div>
                </div>
            </div>
        </transition-group>

        <movie-content @closeContent="isContent=false;" v-if="isContent" v-bind:id="selected">
        </movie-content>
    <div>

    </div>
  </div>
</template>

<script>
import MovieContent from './MovieContent.vue'
export default {
    components: {
        'movie-content': MovieContent
    },
    data() {
        return {
            isContent: false,
            selected: ''
        }
    },
    props: ['movieList'],
    computed: {
        movies() {
            return this.movieList.results
        },
        page() {
            return this.movieList.page
        }
    }
}
</script>

<style scoped>
    .movies {
        display: flex;
        gap: 60px 20px;
        flex-wrap: wrap;
    }
    .movie {
        flex: 0 240px;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        box-shadow: 2px 4px 40px #F7F9F1;
    }
    .movie .info {
        text-align: center;
        padding: 4px 20px 20px;
    }
    .movie .thum img {
        width: 240px;
    }
    .movie .info .title {
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        word-break: keep-all !important;
        margin-bottom: 2px;
    }
    .movie .info .date {
        color: #aaa;
    }
</style>