<template>
    <section class="src-components-inicio">
        <div class="jumbotron">
            <h2>Consigna</h2>
            <hr>
            <p>
                Realizar un desarrollo web front-end empleando Vue CLI 2 que contenga las siguientes vistas
                manejadas por un router:
                <br>
                1) Un formulario basado en vue-form que contenga 3 campos: nombre, edad y mail. Este debe
                tener validaciones mediante carteles de: campos requeridos, nombre entre 3 y 15 caracteres, edad
                entre 18 y 120 años e email válido. Los datos deben ser enviados a un recurso creado en mockapi.io
                <br>
                2) Realizar un componente que muestre los usuarios agregados a mockapi.io. En el caso de no
                haber ninguno, represente un cartel tipo alert avisando que no hay usuarios disponibles.
                <br>
                <br>
                Para la comunicación con mockapi.io utilizar axios con ambas sintaxis: then catch y async await.
                Incorporar bootstrap para manejar los estilos del sitio.
            </p>
        </div>
    </section>
</template>

<script lang="js">

export default {
    name:'src-components-inicio',
    props: [],
    mounted(){

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
    .src-components-inicio {
        
    }

    .jumbotron {
        background-color: rgb(236 86 86);
        color: rgb(242 255 132);
    }
</style>