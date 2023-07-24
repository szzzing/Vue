<template>
    <div>
        <transition-group name="list" tag="div" class="movies">
            <div class="movie" v-for="(movie) in movies" :key="movie" @click="this.selected=movie.id; this.isModal=true">
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

        <movie-modal v-if="isModal" v-bind:id="selected">
        </movie-modal>
    <div>

    </div>
  </div>
</template>

<script>
import MovieModal from './common/MovieModal.vue'
export default {
    components: {
        'movie-modal': MovieModal
    },
    data() {
        return {
            isModal: false,
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
        gap: 20px 20px;
        flex-wrap: wrap;
    }
    .movie {
        flex: 0 200px;
        border-radius: 16px;
        overflow: hidden;
    }
    .movie .info {
        text-align: center;
    }
    .movie .thum img {
        width: 200px;
    }
    .movie .info .title {
        font-size: 18px;
        text-align: center;
    }
</style>