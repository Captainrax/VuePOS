import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [
            { text: "2", text2: "name", text3: "this is a description" },
            { text: "2", text2: "lmao", text3: "this is a description" },
            { text: "3", text2: "lmao", text3: "this is a description" },
            { text: "4", text2: "lmao", text3: "this is a description" }
        ]
    },
    getters: {

    },
    mutations: {
        ADD_ITEM: (state, item) => {
            state.items.push(item)
        },
        REMOVE_ITEM: (state, item) => {
            state.items.splice(item, 1)
        }
    },
    actions: {
        removeItem: (context, item) => {
            context.commit("REMOVE_ITEM", item)
        }
    }
})