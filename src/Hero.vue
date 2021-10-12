<template>
    
<div class="container">
    <div class="info">
        <span>new post</span>
        <h1>Resources and insights</h1>
        <p>The latest industry news, interviews, technologies, and resources.</p>
    </div>
    <div class="ilustra">
        <!-- <img src="./assets/ilustra.png" alt=""> -->
        <img src="./assets/iphone.png" class="iphone" alt="iphone 12">
        <img src="./assets/notifications.svg" class="notification" alt="notificações">
    </div>
</div>
</template>

<style scoped>
    .container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1246px;
      padding: 32px 15px;
      margin: 0 auto;
   
    }
    .container h1{
        font-size: 64px;
        line-height: 68px;
        margin-bottom: 24px;
        letter-spacing: -2.2px;
    }
    .container p{
        font-size: 18px;
        width: 360px;
        line-height: 28px;
        position: relative;
    }

    .container p::after{
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background: #0ca678b2;
        bottom: -16px;
        left: 0px;
        
    }

    .info {
        text-align: start;
        width: 100%;
        max-width: 576px;
        position: relative;
        top: -50px;
    }

    .info span {
        display: inline-block;
        padding: 8px 16px;
        border-radius: 16px;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 16px;
        background-color: #e6fcf5;
        color: #0ca678;

    }
    .ilustra {
        width: 100%;
        max-width: 499px;
        height: 640px;
        position: relative;
        padding-top: 32px;
    }
    .iphone {
        position: absolute;
        right: 80px;
    }
    .notification{
        position: absolute;
        left: -120px;
        top: 150px;
    }

    @media (max-width: 768px) {
    .container {
    flex-direction: column;
    }

    .ilustra {
        margin: 0;
    }
    .iphone {
        position: initial;
    }
    .notification {
        display: none;
    }

}


</style>