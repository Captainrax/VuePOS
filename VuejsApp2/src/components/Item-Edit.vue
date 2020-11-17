<template>
    <div>
        <div>Price: {{ item.text }} | Name: {{item.text2}} | Description: {{item.text3}}</div>
        <button @click="removeitem">Delete</button>
    </div>

</template>

<script>
    export default {
        name: 'item',
        props: ["item"],

        methods: {
            removeitem() {
                // Instead of calling the method we emit an event
                this.$emit("removeitem", this.item);
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

