<template>
    <div class="main-wrapper">
        <h2>{{title}}</h2>
    </div>
</template>


<script>
export default{
    name:'v-main-wrapper',
    components: {
    },
    props: {},
    data(){
        return {
            title:'Main wrapper'
        }
    },
    computed: {},
    methods: {},
    watch: {}
}
</script>

<style scoped>
.v-main-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 980px;
    margin: 0 auto;
}
</style>