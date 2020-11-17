<template>
    <div id="app">

        <div class="Item">
            <div class="donttouchme">Shelf: </div>
            <item v-for="item in items"
                  v-bind:item="item"
                  v-bind:key="item.string"
                  @additem="addToBasket"
                  id="listitem">
            </item>
        </div>
        <div class="Basket">
            <div class="donttouchme">Basket: </div>
            <Basket v-for="item in basket"
                    v-bind:item="item"
                    v-bind:key="item.string"
                    @removeitem="removeItemBasket"
                    id="basketitem">
            </Basket>
        </div>
        <div id="totalamount"></div>

        <p>
            <router-link to="/Shelf">lmao</router-link>
        </p>
        <router-view> </router-view>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    import { mapState } from 'vuex'

    import Item from './components/Item.vue';
    import Basket from './components/Basket.vue';
    import Shelf from './components/Shelf.vue';

    Vue.use(VueRouter);

    export default {
        name: 'app',
        components: {
            Item,
            Basket,
            Shelf
        },
        data() {
            return {
                basket: [
                ]
            }

        },
        computed: {
            ...mapState(
                ["items"]
            )
        },
        methods: {
            addToBasket(item) {
                this.basket.push(item);
                //price update
                var price = 0;
                this.basket.forEach(function (newItem) {
                    price = parseInt(price) + parseInt(newItem.text);
                });
                document.querySelector("#totalamount").textContent = "Price: " + price;
            },
            removeItemBasket(item) {
                for (var idx in this.basket) {
                    if (this.basket[idx].text == item.text) {
                        break;
                    }
                }
                this.basket.splice(idx, 1);
                // price update, i know i can do this more dynamically.. but idk how
                var price = 0;
                this.basket.forEach(function (newItem) {
                    price = parseInt(price) + parseInt(newItem.text);
                });
                document.querySelector("#totalamount").textContent = "Price: " + price;
            },
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
        },
        mounted: function() {
        }
    
};
</script>

<style>
    #app {
        position: absolute;
        display: grid;
        height: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        border: solid 2px rgba(0,0,200,0.9);
        overflow: hidden;
    }
    .AddButton {
        display: grid;
        grid-template-columns: 200px;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        justify-content: center;
        align-self: center;
        border: solid 2px rgba(0,220,0,0.9);
        overflow: hidden;
    }
    .Item {
        display: inline-block;
        height: 100%;
        border: solid 2px rgba(0,0,200,0.9);
        overflow-y: scroll;
    }
    .Basket {
        display: inline-block;
        height: 100%;
        border: solid 2px rgba(0,220,200,1);
        overflow-y: scroll;
    }
    #listitem {
        border: solid 1px rgb(0, 0, 0);
    }
    #basketitem{
    border: solid 1px rgb(0, 0, 0);
    }
    #totalamount{
        position: absolute;
        height:20px;
        left: 80%;
        top: 51%;
    }
    .donttouchme{
        user-select: none;
    }

</style>

