<template>
    <div class="box">
        <h2>Preencha o formulário!</h2>
        <input v-model="name" type="text">
        <p>{{name}}</p>
        <button @click="limpar">Limpar</button>
    </div>
</template>

<script>

export default {
    data: function(){
        return {
            name: ''
        }
    },

    methods: {
        limpar: function(){
            this.name = '';
        }
    }
}
</script>

<style scoped>
    .box{
        margin: 0 auto;
        width: 100%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #099268;
        border-radius: 8px;
    }
    h2, p{
        color: #fff;
        padding: 12px 0;
    }
    input {
        width: 350px;
        padding: 8px 8px;
        border-radius: 8px;
        border: none;
        outline: none;
        font-size: 14px;
        font-weight: 500;
        color: #495057;
        letter-spacing: 0.2px;
        font-family: 'Inter', sans-serif;
    }
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
        margin-bottom: 16px;
    
    }
    button:hover{
        background: #20c997;
    }
</style>