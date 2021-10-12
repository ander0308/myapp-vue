<template>
    <div class="container">
            <div class="box">
            <h2>Preencha o formulário!</h2>
            <input v-model="name" type="text">
            <p>Aqui está a reatividade do Vue: <span>{{name}}</span></p>
            <button @click="limpar">Limpar</button>
        </div>
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
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1246px;
        padding: 32px 15px;
        margin: 0 auto;
    }
    .box{
        margin: 0 auto;
        padding: 32px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #e6fcf5;
        border-radius: 8px;
    }

    .box span {
        font-weight: bold;
    }
    h2, p{
        color: #035c43;
    }
    h2{
        
        font-size: 24px;
        line-height: 32px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    p{
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 500;
 
    }
    input {
        width: 500px;
        padding: 12px;
        border-radius: 8px;
        border: none;
        outline: none;
        font-size: 14px;
        font-weight: 500;
        color: #495057;
        letter-spacing: 0.2px;
        font-family: 'Inter', sans-serif;
        margin-bottom: 20px;
    }
    button{
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        width: 180px;
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