import counterMutations from './mutations.js';
import counterActions from './actions';
import counterGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      counter: 0
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
