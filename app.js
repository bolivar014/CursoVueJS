new Vue({
    el: '#app',

    data () {
        return {
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: 10,
            value: 0,
            color: "f4f4f4",

            price: 4020,

            prices: [8400, 7900, 2300, 4020, 1000, 3000, 4566],
            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 2300 },
                { day: 'Jueves', value: 4020 },
                { day: 'Viernes', value: 1000 },
                { day: 'Sabado', value: 3000 },
                { day: 'Domingo', value: 4566 },
            ],
            
            showPrices: true,

        }
    },

    // Propiedades computadas - Permite recuperar parametros e imprimirlos en las vistas
    computed: {
        title() {
            return `${this.name} - ${this.symbol} `
        },

        convertedValue () {
            if(!this.value) {
                return 0
            }

            return this.value / this.price
        }
    },

    // 
    watch: {
        // El esquema es que el nombre de la variable debe ser igual a la función y este recibe dos parametros 1, valor nuevo -> 2, valor Anterior
        showPrices(newValue, oldValue) {
            console.log(newValue, oldValue)
        } 
    },

    // metodos de la vista
    methods: {
        toggleShowPrices () {
            this.showPrices = !this.showPrices
            this.color = this.color.split('')
            .reverse()
            .join('')
        }
    }
})