<template>
        <div class="nav">
            <ul>
                <li><a href="">Quem somos</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contato</a></li>
                <li><a href="">Orçamento</a></li>
            </ul>
        </div>
</template>


<style scoped>
 ul {
        list-style: none;
        display: flex;
        align-items: center;
   
    }
    ul li{
        margin-left: 20px;
    }

    ul li:first-child{
        margin-left: 0;
    }

    ul li a{
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        color: #495057;
        letter-spacing: 0.2px;
        transition: all .3s;
    }
     ul li a:hover {
        color: #20c997;
     }
</style>