/**
 * Created by tangyue on 2017-10-23.
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
