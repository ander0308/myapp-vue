<template>

<div class="s-sevices">
        <div class="container">
        <CardComponent />
        <CardComponent />
        <CardComponent />
</div>

</div>

</template>

<script>
import CardComponent from './components/CardComponent.vue'

export default {
    components: {
        CardComponent
    }
}
</script>

<style scoped>

.s-sevices {
    margin: 0 auto;
}
    .container{
        width: 100%;
        max-width: 1246px;
        padding: 0 15px;
        margin: 0 auto;
        padding-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>