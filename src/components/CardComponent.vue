<template>
    <div class="card-box">
        <div class="imagem">
            <img src="../assets/foto.png"  alt="Imagem card">
        </div>
        <div class="info">
            <span>Design</span>
            <div class="titulo">
                <h4>UX review presentations</h4>
                <img src="../assets/arrow-up-right.svg" alt="arrow">
            </div>
            <p>How do you create compelling presentations that wow your colleagues and impress your managers?   
            </p>

        </div>
        <div class="user">
            <div class="avatar">
                <img src="../assets/Avatar.png" alt="">
            </div>
            <div class="info-user">
                <p>Olivia Rhye</p>
                <span>20 Jan 2022</span>
            </div>
        </div>

    </div>
</template>


<style scoped>
    .card-box{
        width: 384px;
        height: 580px;
        background: #FFFFFF;
        box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05);
        padding: 24px;
        transition: all .3s;
    }
    .card-box:hover{
        box-shadow: 0px 18px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05);
    }
    .imagem {
        margin-bottom: 32px;
    }

    .info{
        text-align: start;
    }

    .info span{
        display: block;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #0ca678;
        margin-bottom: 12px;
       
    }
    .info .titulo{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .info .titulo h4{
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #101828;
    }

    .info p{
        font-size: 16px;
        line-height: 24px;
        color: #667085;
        margin-bottom: 64px;
    }
    .user{
        display: flex;
        align-items: center;
    }
    .user .avatar{
        margin-right: 12px;
    }

    .user .info-user{
        text-align: start;
    }
    .user .info-user p{
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #101828;
    }
    .user .info-user span {
        font-size: 14px;
        line-height: 20px;
        color: #667085;
    }
</style>