<template>
  <div class="team">
    <div class="container">
        <div class="team__inner">

            <div class="team__item">
                <img class="team__photo" src="../assets/img/team/team-1.jpg" alt="">
                <div class="team__name">Антон Иванова</div>
                <div class="team__prof">Специалист по уходу за кузовом</div>
                <div class="team__text">
                    <p>Антон работает в сфере детейлинга уже более пяти лет. Найдет лучшее средства по уходу за вашим авто.</p>
                </div>
            </div>

            <div class="team__item">
                <img class="team__photo" src="../assets/img/team/team-2.jpg" alt="">
                <div class="team__name">Григорий Синицин</div>
                <div class="team__prof">Специалист по очистке салона</div>
                <div class="team__text">
                    <p>Григорий работал в крупной зарубежной детейлинг компании 4 года.</p>
                </div>
            </div>

            <div class="team__item">
                <img class="team__photo" src="../assets/img/team/team-3.jpg" alt="">
                <div class="team__name">Марк Шастунов</div>
                <div class="team__prof">Автомеханик</div>
                <div class="team__text">
                    <p>Поможет за короткое время подобрать лучшее масло для вашего авто. Замена и обслуживание всех расходников.</p>
                </div>
            </div>

            <div class="team__item">
                <img class="team__photo" src="../assets/img/team/team-4.jpg" alt="">
                <div class="team__name">Александр Шевченко</div>
                <div class="team__prof">Специалист по уходу за кузовом</div>
                <div class="team__text">
                    <p>Подбор лучших средств для обновления и ухода за кузовом. Покрытие авто качественным воском.</p>
                </div>
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

/* Team
===================*/
.team {
    margin: 145px 0 70px;
}

.team__inner {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}

.team__item {
    width: 22.5%;
    padding: 0 15px;
    margin-bottom: 30px;
}

.team__photo {
    display: block;
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
}

.team__name {
    margin-bottom: 8px;

    font-size: 22px;
    color: #2d3033;
}

.team__prof {
    margin-bottom: 15px;

    font-size: 13px;
    color: #e84545;
    text-transform: uppercase;
}

.team__text {
    margin-bottom: 20px;

    font-size: 16px;
    line-height: 1.5;
    color: #6c7279;
}


</style>