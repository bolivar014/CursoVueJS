new Vue({
    el: '#app',

    data () {
        return {
            name: 'Bitcoin',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: 10,

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

    methods: {
        toggleShowPrices () {
            this.showPrices = !this.showPrices
            this.color = this.color.split('')
            .reverse()
            .join('')
        }
    }
})