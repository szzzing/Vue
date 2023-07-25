<template>
    <transition name="modal">
        <div class="modal-mask" @click="this.$store.commit('setIsContent')">
            <div class="modal-wrapper">
                <div class="modal-container" @click.stop="">
                    <img class="backdrop"
                        v-if="this.$store.state.details.backdrop_path!=null"
                        v-bind:src="'https://image.tmdb.org/t/p/original/'+this.$store.state.details.backdrop_path">
                    <div class="info">
                        <div class="title">
                            {{ this.$store.state.details.title }}
                            <div class="original-title" v-if="this.$store.state.details.title !=this.$store.state.details.original_title">
                                {{ this.$store.state.details.original_title }}
                            </div>
                            <div class="genre-release">
                                {{ this.genre }}
                                ・
                                {{ this.$store.state.details.release_date.split('-').join('.') }}
                            </div>
                            <div class="runtime">
                                {{ this.$store.state.details.runtime }}분
                            </div>
                        </div>
                        <div class="tagline">
                            {{ this.$store.state.details.tagline }}
                        </div>
                        <div class="overview">
                            {{ this.$store.state.details.overview }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    computed: {
        genre() {
            var genres = [];
            for(var g of this.$store.state.details.genres) {
                genres.push(g.name);
            }
            return genres.join('/');
        }
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