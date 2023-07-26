<template>
    <div>
        <transition-group name="list" tag="ul" class="movies">
            <li class="movie"
                v-for="(movie) in searchList.results" :key="movie"
                @click="this.clickContent(movie.id)">
                <span class="movie-inner">
                    <div class="thum">
                        <img
                        v-if="movie.poster_path!=null"
                        :src="'https://image.tmdb.org/t/p/original/'+movie.poster_path">
                        <div class="vote-average">
                            ⭐️
                            {{ movie.vote_average.toFixed(1) }}
                        </div>
                    </div>
                    <div class="info">
                        <div class="title">
                            {{ movie.title }}
                        </div>
                        <div class="date">
                            {{ movie.release_date.split('-')[0] }}
                        </div>
                    </div>
                </span>
            </li>
        </transition-group>

        <!-- 영화 자세히 보기 모달 -->
        <movie-content
            @closeContent="isContent=false;"
            v-if="this.$store.state.isContent">
        </movie-content>
    <div>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
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
    computed: {
        ...mapState(['searchList'])
    },
    methods: {
        clickContent(id) {
            this.$store.commit('setId', id);
            this.$store.dispatch('getDetails');
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
        width: calc((100% - 60px)/4);
        cursor: pointer;
        overflow: visible;
    }
    .movie-inner {
        display: block;
        border-radius: 16px;
        overflow: hidden;
        background: #222;
        /* box-shadow: 2px 4px 40px #F7F9F1; */
    }
    .movie .info {
        text-align: center;
        padding: 8px 20px 12px;
    }
    .thum {
        position: relative;
    }
    .movie .thum img {
        width: 240px;
    }
    .movie .info .title {
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        word-break: keep-all !important;
        margin-bottom: 8px;
        color: #fff;
    }
    .movie .info .date {
        color: #aaa;
        font-size: 14px;
        margin-bottom: 4px;
    }
    .movie .vote-average {
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        position: absolute;
        top: 12px;
        right: 12px;
        height: 32px;
        line-height: 32px;
        padding: 0px 12px 0px 10px;
        border-radius: 16px;
        background: #222;
    }
</style>