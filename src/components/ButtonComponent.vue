<template>
    <button @click="chama">Fale conosco</button>
</template>


<script>
export default {

    methods: {
        chama: function(){
            alert('Clicou no botão!')
        }
    }
}
</script>

<style scoped>
    button{
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        letter-spacing: 0.2px;
        font-weight: 500;
        line-height: 44px;
        border-radius: 8px;
        border: none;
        background: #0ca678;
        color: #fff;
        cursor: pointer;
        transition: all .3s;
        padding: 0 16px;
        display: block;
    
    }
    button:hover{
        background: #20c997;
    }
</style>