<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="nav">
                    <router-link to="/">Главная</router-link> 
                    <router-link to="/about">О нас</router-link>
                    <router-link to="/price">Цены</router-link> 
                    <router-link to="/service">Услуги</router-link>
                    <router-link to="/team">специалисты</router-link> 
                    <router-link to="/authorization">Авторизация</router-link> 
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    'name': "Header"
}
</script>

<style scoped>
header {
    flex: 0 0 auto;
}
</style>