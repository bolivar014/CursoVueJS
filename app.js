// Componente auxiliar
Vue.component('CoinDetail', {
    // Recibe parametros desde el componente Maestro
    // props: ['changePercent', 'title', 'img', 'name', 'value', 'price'], // Enviando cada una de las variables desde el master hacia los componentes
    props: ['coin'], 

    data () {
        return {
            showPrices: false,
            value: 0
        }
    },

    methods: {
        toggleShowPrices () {
            this.showPrices = !this.showPrices
    
            // emite un evento que ejecuta el cambio de color, cada vez que ejecuta este metodo
            this.$emit('change-color',
            this.showPrices ? 'FF96C8' : '3D3D3D') 
        },
    },

    computed: {
        title() {
            return `${this.coin.name} - ${this.coin.symbol} `
        },

        convertedValue () {
            if(!this.value) {
                return 0
            }
            return this.value / this.coin.price
        }
    },

    template: `
        <div>
            <!-- INICIO IMAGEN - BITCOIN -->
            <img
                v-on:mouseover="toggleShowPrices"
                v-on:mouseout="toggleShowPrices"
                v-bind:src="coin.img" v-bind:alt="coin.name" >
            <!-- FIN IMAGEN - BITCOIN -->

            
            <!-- INICIO TITULO - BITCOIN -->
            <h1 
            v-bind:class="changePercent > 0 ? 'green' : 'red'">
                <!--{{ name }} - {{ symbol }}-->
                {{ title }}
                <span v-if="coin.changePercent > 0">👍</span>
                <span v-else-if="coin.changePercent < 0">👎</span>
                <span v-else>🤞</span>

                
                <!--<span v-show="changePercent > 0">👍</span>
                <span v-show="changePercent < 0">👎</span>
                <span v-show="changePercent == 0">🤞</span>-->

                <span v-on:click="toggleShowPrices">
                    {{ showPrices ? '🙈' : '🐵' }}
                </span>
            </h1>
            <!-- FIN TITULO - BITCOIN -->

            <!-- INICIO INPUT - CONVERSOR BITCOIN -->
            <input type="number" v-model="value" placeholder="Ingrese Valor de moneda">
            <!-- imprimir valor capturado desde el input
            <span>{{ value }}</span> -->
            <span>{{ convertedValue }}</span>
            <!-- FIN INPUT - CONVERSOR BITCOIN -->

            
            <!-- INICIO LISTA - DOLAR DE BITCOIN X DÍA -->
            <ul v-show="showPrices">
                <li
                    class="uppercase"
                    v-bind:class="{ orange: p.value === coin.price, red: p.value < coin.price, green: p.value > coin.price }" 
                    v-for="(p, i) in coin.pricesWithDays" 
                    v-bind:key="p.day">
                    {{ i }} - {{ p.day }} - {{ p.value }}
                </li
                >
            </ul>
            <!-- FIN LISTA - DOLAR DE BITCOIN X DÍA -->
        </div>
    `
})

// Componente Maestro - Principal
new Vue({
    el: '#app',

    data () {
        return {
            btc: {
                name: 'Bitcoin',
                symbol: 'BTC',
                img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: 10,
                price: 4020,
                // prices: [8400, 7900, 2300, 4020, 1000, 3000, 4566],
                pricesWithDays: [
                    { day: 'Lunes', value: 8400 },
                    { day: 'Martes', value: 7900 },
                    { day: 'Miercoles', value: 2300 },
                    { day: 'Jueves', value: 4020 },
                    { day: 'Viernes', value: 1000 },
                    { day: 'Sabado', value: 3000 },
                    { day: 'Domingo', value: 4566 },
                ],
            },
            color: "f4f4f4",
        }
    },

   

    // metodos de la vista
    methods: {
        updateColor (color) {
            // sino recibe un color en la variable, muestra el color por defecto
            this.color = color || this.color.split('')
            .reverse()
            .join('')
        }
    }
})