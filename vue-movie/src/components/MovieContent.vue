<template>
    <transition name="modal">
        <div class="modal-mask" @click="$emit('closeContent')">
            <div class="modal-wrapper">
                <div class="modal-container" @click.stop="">
                    <img class="backdrop" v-bind:src="'https://image.tmdb.org/t/p/original/'+details.backdrop_path">
                    <div class="info">
                        <div class="title">
                            {{ details.title }}
                            <div class="original-title" v-if="details.title != details.original_title">
                                {{ details.original_title }}
                            </div>
                            <div class="genre-release">
                                {{ genre.join('/') }} ・ {{ details.release_date }}
                            </div>
                            <div class="runtime">
                                {{ details.runtime }}분
                            </div>
                        </div>
                        <div class="tagline">
                            {{ details.tagline }}
                        </div>
                        <div class="overview">
                            {{ details.overview }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return {
            details: {},
            genre: []
        }
    },
    created() {
        console.log(this.id);
        var vm = this;
        axios
        .get('https://api.themoviedb.org/3/movie/'+vm.id+'?api_key=7bf40bf859def4eaf9886f19bb497169&language=ko-KR')
        .then(function(response) {
            vm.details = response.data;
            for(var g of response.data.genres) {
                vm.genre.push(g.name);
            }
        });
    }
}
</script>

<style scoped>
    .info {
        padding: 20px 40px 40px;
    }
    .title {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 40px;
    }
    .original-title {
        font-size: 28px;
        font-weight: 400;
    }
    .genre-release {
        margin-top: 8px;
    }
    .runtime {
        margin-top: 4px;
    }
    .genre-release, .runtime {
        font-size: 16px;
        font-weight: 400;
        color: #777;
    }
    .tagline {
        font-size: 20px;
        margin-bottom: 12px;
    }
    .overview {
        color: #777;
    }


    .backdrop {
        width: 100%;
    }
    .modal-mask {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .03);
        display: table;
        transition: opacity .3s ease;
        backdrop-filter: blur(10px);
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    .modal-container {
        max-width: 820px;
        height: 75%;
        margin: 0px auto;
        background: #fff;
        border-radius: 16px;
        overflow: scroll;
    }
    .modal-header h3 {
        margin-top: 0;
        color: #62acde;
    }
    .modal-body {
        margin: 20px 0;
    }
    .modal-default-button {
        float: right;
    }

    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */
    .modal-enter-active, .modal-leave-active {
        transition: all .3s ease;
    }
    .modal-enter {
        opacity: 0;
    }
    .modal-leave-active {
        opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>