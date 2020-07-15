import Logger from './lib/logger';
import Vue from 'vue';

const initAppCore = () => {
    Vue.prototype.$logger = new Logger(
      process.env.VUE_APP_VERBOSITY_LEVEL,
      process.env.VUE_APP_SHOW_ERROR_ON_PRODUCTION
    );
}

export { initAppCore };