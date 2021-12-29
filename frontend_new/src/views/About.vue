<template>
  <div class="about">
    <div class="container">
      <div class="about-item">   
        <div class="about-body"> 
          <h3>Настоящий детейлинг — это искусство, философия и стиль жизни.</h3>
          <p>Наша команда профессионалов с многолетним опытом, лучших в своей области, творчески, с
            высокой долей перфекционизма подходит к процессу работ с вашим автомобилем.</p>
          <p>Мы предлагаем, как лучшую комплексную защиту нового автомобиля, так и восстановление до
            первоначального состояния, и дальнейшую защиту автомобилей с пробегом.</p>
        </div>
         <div class="about-body">
           <img alt="image" src="../assets/img/about/ab_new.png">
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
.about-body {
    display: flex;
    flex-wrap: wrap;
    margin: 35px 0;
    justify-content: center;
}

p {
  font-family: Georgia, serif;
  text-transform: uppercase;
  padding: 0 0 4px 0;
}
h3 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgb(8, 17, 99);
    font-family: Georgia, serif;
}
img {
  max-width: 50%;
  max-height: 50%;
}
h1 {
  font-size: 50px;
  margin-top: 30px;
  margin-bottom: 20px;
}
p {
  font-size: 16px;
}


</style>
