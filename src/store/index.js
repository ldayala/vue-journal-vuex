//creacion y configuracion del store

import {createStore} from 'vuex'
import journal from '@/modules/daybook/store/journal';

const store= createStore({
    //en este caso lo vamos a trabajar modularizado , no de forma global
    modules:{
        journal
    }

})


export default store;