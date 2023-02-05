import {createRouter, createWebHistory} from "vue-router";

import Index from '../views/Index.vue';
import Main from '../views/Main.vue';
import Ui from '../views/Ui.vue';
import UiButton from '../views/ui/UiButton.vue';
import UiInput from '../views/ui/UiInput.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
        },
        {
            path: '/main',
            name: 'Main',
            component: Main,
        },
        {
            path: '/ui',
            name: 'ui',
            component: Ui,
            children: [
                {
                    path: 'ui-button',
                    name: 'UiButton',
                    component: UiButton,
                },
                {
                    path: 'ui-input',
                    name: 'UiInput',
                    component: UiInput,
                },
            ]
        }
    ],
})

export default router;
