<template>
  <div class="home">
     <!-- <img alt="Vue logo" src="../assets/logo2.png">  -->
      <div class="intro">
      <div class="container">
          <div class="intro__inner">
              <h1 class="intro__title">ДЕТЕЙЛИНГ УХОД ЗА АВТОМОБИЛЕМ</h1>
              <vBtn/>
          </div>
      </div>
  </div>
  </div>
</template>


<script>

</script>
<style scoped>

/* Container
===================*/
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}
/* Intro
===================*/

.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 600px;
    padding-top: 100px;

    background: #31344e url("../assets/img/fon2.jpg") center no-repeat;
    background-size: cover;
}

.intro__inner {
    width: 100%;
    max-width: 970px;
    margin: 0 auto;

    text-align: center;
}

.intro__title {
    margin: 0 0 30px;

    font-family: 'Open Sans', sans-serif;
    font-size: 65px;
    line-height: 1.1;
    color: rgb(8, 17, 99);
    font-weight: 700;
    text-transform: uppercase;
}

.intro__subtitle {
    margin-bottom: 60px;

    font-size: 22px;
    color: #fff;
    line-height: 1.5;
    font-weight: 400;
}
</style>

