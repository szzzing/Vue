<template>
    <div id="content">
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
                    {{ [this.$store.state.details.genres,this.$store.state.details.release_date].join(" ・ ") }}
                </div>
                <div class="runtime">
                    {{ this.$store.state.details.runtime+'분' }}
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
</template>

<script>
export default {
    beforeCreate() {
        this.$store.dispatch('getDetails', this.$route.params.id);
    }
}
</script>

<style scoped>
    .backdrop {
        width: 100%;
    }
    .info {
        padding: 20px 40px 40px;
    }
    .title {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 40px;
        color: #fff;
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
        color: #aaa;
    }
    .tagline {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 12px;
    }
    .overview {
        color: #ddd;
    }
</style>