<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <img class="backdrop" v-bind:src="'https://image.tmdb.org/t/p/original/'+details.backdrop_path">
                    {{ details }}
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
            details: {}
        }
    },
    created() {
        console.log(this.id);
        var vm = this;
        axios
        .get('https://api.themoviedb.org/3/movie/'+vm.id+'?api_key=7bf40bf859def4eaf9886f19bb497169&language=ko-KR')
        .then(function(response) {
            vm.details = response.data;
        });
    }
}
</script>

<style scoped>
    .backdrop {
        width: 100%;
    }
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    .modal-container {
        max-width: 820px;
        height: 60%;
        margin: 0px auto;
        background: #fff;
        border-radius: 16px;
        overflow: hidden;
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