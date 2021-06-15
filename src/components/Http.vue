<template>
    <section class="src-components-http">
        <div class="jumbotron">
            <h2>Obtener personas</h2>
            <hr>

            <div v-if="personas.length" class="table-responsive">
                <table class="table table-dark">
                    <tr>
                        <th v-for="(column, index) in getColumns" :key="index">{{column}}</th>
                    </tr>
                    <tr v-for="(persona, index) in personas" :key="index">
                        <td v-for="(column, index) in getColumns" :key="index">{{persona[column]}}</td>
                    </tr>
                </table>
            </div>
            <h4 v-else class="alert alert-danger">No se encontraron personas</h4>
        </div>
    </section>
</template>

<script>
export default {
    name: 'src-components-http',
    props: [],
    mounted() {
        this.getPersonas()
    },
    data() {
        return {
            url: 'https://60af31f85b8c300017debe4c.mockapi.io/personas',
            personas: []
        }
    },
    methods: {
        getPersonas(){
            this.axios(this.url)
            .then(response => {
                this.personas = response.data
            })
            .catch(error => console.log('Error Axios ->',error))
        }
    },
    computed: {
        getColumns() {
            return Object.keys(this.personas[0])
        }
    }
}
</script>

<style scoped lang="css">
    .src-components-http{

    }
    .jumbotron {
        background-color: rgb(189, 200, 221);
        color: rgb(2, 2, 128);
    }

    hr {
        background-color: #333;
    }
</style>