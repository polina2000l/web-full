<template>
  <div class="price">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="price-item">
                    <div class="price-header">
                        <h3>БАЗОВЫЙ ТАРИФ</h3>
                        <h2><strong>800</strong><span>P</span></h2>
                    </div>
                    <div class="price-body">
                        <ul>
                            <div class="fa-check-circle">Мойка кузова</div>
                            <div class="fa-check-circle">Уборка салона</div>
                            <div class="fa-check-circle">Очистка стекол</div>
                        </ul>
                    </div>
                    <div class="price-footer">
                        <vBtn/>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
              <div class="price-item">
                <div class="featured-item">
                    <div class="price-header">
                        <h3>ПРЕМИУМ ТАРИФ</h3>
                        <h2><strong>1600</strong><span>P</span></h2>
                    </div>
                    <div class="price-body">
                        <ul>
                            <div class="fa-check-circle">Мойка кузова</div>
                            <div class="fa-check-circle">Уборка салона</div>
                            <div class="fa-check-circle">Очистка стекол</div>
                            <div class="fa-check-circle">Покрытие кузова воском</div>
                            <div class="fa-check-circle">Чистка сидений</div>
                        </ul>
                    </div>
                    <div class="price-footer">
                        <vBtn/>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
                <div class="price-item">
                    <div class="price-header">
                        <h3>КОМПЛЕКСНЫЙ ТАРИФ</h3>
                        <h2><strong>2800</strong><span>P</span></h2>
                    </div>
                    <div class="price-body">
                        <ul>
                            <div class="fa-check-circle">Мойка кузова</div>
                            <div class="fa-check-circle">Уборка салона</div>
                            <div class="fa-check-circle">Очистка стекол</div>
                            <div class="fa-check-circle">Покрытие кузова воском</div>
                            <div class="fa-check-circle">Чистка сидений</div>
                            <div class="fa-check-circle">Замена масла</div>
                        </ul>
                    </div>
                    <div class="price-footer">
                        <vBtn/>
                    </div>
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

/*******************************/
/********* Pricing CSS *********/
/*******************************/
.price {
    /* position: relative; */
    width: 100%;
    padding: 45px 0 15px 0;
}

.row {
    padding: 0 15px;
}

.col-md-4 {
    padding: 0;
}

.price-item {
    /* position: relative; */
    margin-bottom: 30px;
    background: #fdfdfd;
    border-radius: 5px;
    text-align: center;
}

.featured-item {
    box-shadow: 0 0 30px rgba(19, 32, 212, 0.753);
    z-index: 1;
}

.price-header {
    padding: 45px 0 30px 0;
}

h3 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgb(8, 17, 99);
    font-family: Georgia, serif;
}

h2 {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 5px;
    color: rgb(233, 12, 12);
    font-family: Georgia, serif;
}

span {
    font-size: 25px;
    line-height: 55px;
}

.price-body {
    padding: 0 0 20px 0;
}

.price-body ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.price-body ul li {
    padding: 0 0 15px 0;
}

.price-body ul li i {
    margin-right: 10px;
}

.fa-check-circle {
    color: rgb(8, 17, 99);
    font-family: Georgia, serif;
    text-transform: uppercase;
    padding: 0 0 10px 0;
}


.price-footer {
    padding-bottom: 45px;
}

</style>