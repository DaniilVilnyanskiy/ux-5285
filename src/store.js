import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            modal: {
                isVisible: false,
                id: null,
            },
            setToken: false,
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export default store;
