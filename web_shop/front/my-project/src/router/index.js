import Vue from 'vue'
import Router from 'vue-router'
import Proizvod from '../components/Proizvod.vue'
import Proizvod_detalji from '../components/Proizvod_detalji.vue';
import { proizvodi } from '../../../../server/data';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/proizvod',
            name: proizvod,
            component: Proizvod
        },
        {
            path: '/proizvod:id',
            name: Proizvod_detalji,
            component: Proizvod_detalji
        }
    ]
})