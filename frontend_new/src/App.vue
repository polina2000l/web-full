
<template>
    <div id="main-container">
        <Header />
            <main>
                <router-view />
            </main>
        <Footer />
    </div>
</template>

<script>
import VBtn from './components/v-btn.vue'
import vMainWrapper from './components/v-main-wrapper.vue'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    vMainWrapper,
    VBtn,
    Header,
    Footer
  }, 
  data(){
    return{
      message: 'Hello Vue!'
    }
  }
}

</script>
<style>
#app {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

#main-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

* {
    margin: 0;
    padding: 0;
}

html,
body {
    height: 100%;
}

main {
    flex: 1 0 auto;
}

/* Container
===================*/
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}


/* Header
===================*/

.header {
    width: 100%;
}

.header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0;
}


/* Nav
===================*/

.nav {
    display: flex;
    font-size: 20px;
    font-weight: 10;
    text-transform: uppercase;
}

.nav a {
    margin-left: 50px;

    color: rgb(233, 12, 12);
    text-decoration: none;
    opacity: .75;
    font-family: Georgia, serif;
    transition: opacity .1s linear;
}

.nav a.first-child {
    margin-left: 0;
}

.nav a.hover {
    opacity: 1;
}

/* Footer
===================*/

.footer {
    background-color: #3a3e64;
}

.footer__inner {
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0;
}

.footer__block {
    width: 30.33333%;
    padding: 0 15px;

    text-align: center;
}

.footer__title {
    margin-bottom: 10px;

    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
}

.footer__address {
    font-size: 14px;
    line-height: 1.5;
    font-style: normal;
    color: rgba(255, 255, 255, .5);
}

.footer__text {
    font-size: 14px;
    line-height: 1.5;
    color: rgba(255, 255, 255, .5);
}



/* Copyright
===================*/

.copyright {
    padding: 20px 0;

    background-color: #313454;
}

.copyright__text {
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    color: #808080;
}

.copyright__text span {
    color: #fff;
}
</style>
