import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
    modal: {
        isVisible: boolean,
        id: any,
    },
    setToken: boolean
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        modal: {
            isVisible: false,
            id: null,
        },
        setToken: false,
    }
})
// import { createStore } from 'vuex'
//
// const store = createStore({
//     state () {
//         return {
//             modal: {
//                 isVisible: false,
//                 id: null,
//             },
//             setToken: false,
//         }
//     }
// })
//
// export default store;
