<template>
    <div class="btn-red">
        <button @click="add">Записаться сейчас</button>
    </div>
</template>


<script>
export default{
    name:'v-btn',
    components: {
    },
    props: {},
    data(){
        return {
            title:'v-btn',
        }
    },
    computed: {},
    methods: {
        add() {
            
        }
    },
    watch: {}
}
</script>

<style scoped>
button {
    padding: 14px 40px;

    border-radius: 2px;
    border: 0;
    cursor: pointer;

    font-family: 'Raleway', sans-serif;
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;

    transition: background .1s linear;
    background-color: #e84545;
}

</style>