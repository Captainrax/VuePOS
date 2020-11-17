<template>
    <div>
        <div class="AddButton">
            <div class="donttouchme">Create new shelf item: </div>
            <input v-model="input1" placeholder="price">
            <input v-model="input2" placeholder="name">
            <input v-model="input3" placeholder="description">
            <button v-on:click="addNewItem">create</button>
        </div>

        <div class="Item">
            <div class="donttouchme">Shelf: </div>
            <item v-for="item in items"
                v-bind:item="item"
                v-bind:key="item.string"
                @removeitem="removeItem(index)"
                @newlist="addNewItem"
                id="listitem">
            </item>
        </div>
    </div>
</template>

<script>
    import Item from './Item-Edit.vue';
    import { mapState, mapMutations } from "vuex";

    export default {
        name: 'Shelf',
        components: {
            Item
        },
        computed: {
            ...mapState(
                ["items"]
            )
        },
        data() {
            return {
                //items: [
                //    { text: "2", text2: "name", text3: "this is a description" },
                //    { text: "2", text2: "lmao", text3: "this is a description" },
                //    { text: "3", text2: "lmao", text3: "this is a description" },
                //    { text: "4", text2: "lmao", text3: "this is a description" }
                //],
                input1: "",
                input2: "",
                input3: ""
            }
        },
        methods: {
            ...mapMutations([
                'ADD_ITEM'
            ]),
            addNewItem: function() {
                let item = {
                    text: this.input1,
                    text2: this.input2,
                    text3: this.input3
                }
                this.ADD_ITEM(item)

            },
            removeItem(index) {
                for (var idx in this.items) {
                    if (this.items[idx].text == item.text) {
                        break;
                    }
                }
                this.items.splice(idx, 1);
            },
            presetvalues() {
                this.input1 = "1";
                this.input2 = "Lmao";
                this.input3 = "description";
            },
            //goBack() {
            //    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            //}
        },
        mounted: function () {
            this.presetvalues()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

