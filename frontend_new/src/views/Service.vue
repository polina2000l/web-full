<template>
  <div class="service">
    <div class="container">
    <div class="features">
        <div class="features__item">
            <img class="features__icon" src="../assets/img/serv/serv1.png" alt="">
            <div class="features__title">Мойка кузова</div>
            <div class="features__text">С поверхности кузова удаляются пыль, грязь, остатки насекомых и реагенты, которыми посыпают дорожное полотно в холодное время года.</div>
        </div>

        <div class="features__item">
            <img class="features__icon" src="../assets/img/serv/serv2.png" alt="">
            <div class="features__title">Уборка салона</div>
            <div class="features__text">Убирается весь мусор, чистка ковриков, салон протирается и пылесосится.</div>
        </div>

        <div class="features__item">
            <img class="features__icon" src="../assets/img/serv/serv3.png" alt="">
            <div class="features__title">Покрытие кузова воском</div>
            <div class="features__text">Воск придает кузову блеск и защищает от внешних воздействий.</div>
        </div>

        <div class="features__item">
            <img class="features__icon" src="../assets/img/serv/serv4.png" alt="">
            <div class="features__title">Чистка сидений</div>
            <div class="features__text">Удаление грязи и пятен с сидений авто, а также обработка специальными средствами.</div>
        </div>

        <div class="features__item">
            <img class="features__icon" src="../assets/img/serv/serv5.png" alt="">
            <div class="features__title">Очистка стекол</div>
            <div class="features__text">Удаление разводов и тяжело очищаемых загрязнений со стекол.</div>
        </div>

        <div class="features__item">
            <img class="features__icon" src="../assets/img/serv/serv6.png" alt="">
            <div class="features__title">Замена масла</div>
            <div class="features__text">Удаление старого масла и замена на новое, также возможна замена сопутствующих фильтров.</div>
        </div>
    </div>
</div>
  </div>
</template>

<style scoped>
/* Container
===================*/
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/* Features
===================*/
.features {
    display: flex;
    flex-wrap: wrap;
    margin: 95px 0;
    justify-content: center;
}

.features__item {
    
    padding: 0 40px;
    margin: 25px 0;
    width: 23.33333%;
    text-align: center;
}

.features__icon {
    margin-bottom: 25px;
    
}

.features__title {
    margin-bottom: 20px;
    font-family: Georgia, serif;
    font-size: 14px;
    color: #b60909;
    font-weight: 300;
    text-transform: uppercase;
    
}

.features__text {
    font-size: 14px;
    line-height: 1.5;
    color: #6c7279;
    font-family: Georgia, serif;
}
</style>