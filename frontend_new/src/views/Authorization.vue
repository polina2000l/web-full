<template>
    <div class="container auth">
        <form class="auth-form" onsubmit="return false;">
            <h2>{{this.info}}</h2>
            <label for="email">Почта</label>
            <input type="text" v-model="email" name="" required="" class="auth-input">
            <label for="password">Пароль</label>
            <input type="password" v-model="password" name="" required="" class="auth-input">
            <button class="auth-input" @click = "authorization()">Войти</button>
        </form>
    </div>
</template>

<script>
    export default {
    "name": "Authorization",
    beforeCreate: function() {
    document.body.className = 'auth';
     },  
    data() {
        return {
            userId: null,
            email: null,
            password: null,
            info: null,
            correct: false
        }
    },
     methods: {
        authorization(){
            const params = {
                email: this.email, password: this.password
            }
            this.$http.post('/user', params)
            .then(response => this.checkCorrect(response.data.userId))
        },
        checkCorrect(data){
            if(data !== -1)
            {
                this.userId = data
                this.correct = true
                this.$router.push('Price')
                this.info = "Успешный вход"
                localStorage.userId = this.userId;
            }
            else
            {
                this.info = "Неверные данные, повторите попытку"
            }
            console.log(this.correct)
        }
    },
    mounted(){
        if (localStorage.userId) {
            this.userId = localStorage.userId;
        }
    }
}
</script>

<style>
.auth {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.auth-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.auth-input {
    max-width: 300px;
}

input {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 5px;
    border: 2px solid #6081c0
}

button {
    padding: 8px;
    background: #6081c0;
    border-radius: 5px;
    border: 2px solid #6081c0;
    color: #ebf1f3;
}

label,
button {
    font-size: 1.25rem;
}
</style>