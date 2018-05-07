# vue-project-base

This project is build for Vue.js 2 + vue-router + webpack2 + iView 2, just install and run.

1. 引入vuex
    a. 新建vuex文件夹, 
        新建index.js: ( vuex加载模块对象 , vue加载vuex  )
            import Vue from 'vue'
            /* vuex 数据状态管理器 */
            import Vuex from 'vuex'
            /* 通用组件 Vuex对象 */

            /* 具体业务模块 */
            import homeIndex from './modules/homeIndex'

            /* Vue加载状态管理器实例 */
            Vue.use(Vuex);
            /* 实例化Vuex状态管理器对象 */
            export default new Vuex.Store({
                modules: {
                    homeIndex,
                },
                strict: false
            });
    b. 新建home.js ( 具体业务的store对象 , action, state对象, mutations绑定 )
        /**
         - Created by tangyue on 2017-10-23.
         */
        import axios from 'axios'
        import * as CommonConst from '../CommonConst'

        const state = {
            testData: ''
        };
        const getters = {
            testData:state => state.testData,
        };
        const actions = {
            
            test({commit}, {reqData}){
                axios.get(CommonConst.TEST_DATA_URL)
                    .then(resData => {
                        let commitData = resData;
                        commit(CommonConst.TEST_DATA, {resData: commitData});
                    })
                    .catch(e => {
                        commit(CommonConst.TEST_DATA, {resData: []});
                    });
            },
        };
        const mutations = {
            [CommonConst.TEST_DATA](state, {resData}) {
                state.testData = resData;
            },
        };
        export default {
            state,
            actions,
            getters,
            mutations
        }
    c. 新建CommonConst.js 常量管理 ( mutasion绑定数据 和 请求URL )
        export const TEST_DATA = "TEST_DATA";
        export const TEST_DATA_URL = '/test/getUser/1';

    d. main.js 中注册vuex store:
        /* 加载vue状态管理器 */
        import store from './vuex'
        new Vue({
            el: '#app',
            router: router,
            store,
            render: h => h(App)
        });
        # vue-base
# scyz-vue
