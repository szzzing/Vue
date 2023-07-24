<template>
    <div class="background">
        <div class="modal">
            
        </div>
    </div>
</template>

<script>
export default {
    props: ['id']
}
</script>

<style scoped>
    .background {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
    }
    
</style>