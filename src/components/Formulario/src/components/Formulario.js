
export default {
    name: 'src-components-formulario',
    components: {},
    props: [],
    data () {
      return {
        url: 'https://60af31f85b8c300017debe4c.mockapi.io/personas',
        formData : this.getInicialData(),
        formState: {},
        nameLengthMin : 3,
        nameLengthMax: 15,
        ageMin: 18,
        ageMax: 120,
        users: []
      }
    },
    computed: {
  
    },
    mounted () {
  
    },
    methods: {
        getInicialData() {
            return {
                name: '',
                age: '',
                email: ''
            }
        },
        async sendPersona() {    
            let persona = {
              nombre: this.formData.name,
              edad: this.formData.age,
              mail: this.formData.email
            }

            try {
              await this.axios.post(this.url, persona, {'content-type':'application/json'})
              this.formData = this.getInicialData()
              this.formState._reset()
            }
            catch(error) {
              console.log(error)
            }
          }
    }
} 