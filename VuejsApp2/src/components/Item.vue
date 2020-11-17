<template>
    <div>
        <div>Price: {{ item.text }} | Name: {{item.text2}} | Description: {{item.text3}}</div>
        <button @click="addtocheckout">add</button>
    </div>
        
</template>

<script>
    export default {
        name: 'item',
        props: ["item"],

        methods: {
            //die() {
            //    // Instead of calling the method we emit an event
            //    this.$emit("removeitem", this.item);
            //},
            addtocheckout() {
                // Instead of calling the method we emit an event
                this.$emit("additem", this.item);
            }
        }
        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

