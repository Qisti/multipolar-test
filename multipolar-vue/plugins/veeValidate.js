import * as VeeValidate from "vee-validate";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
// import { required } from "vee-validate/dist/";
import Vue from "vue";

Vue.use(VeeValidate);
Vue.component("validationProvider", ValidationProvider);
Vue.component("validationObserver", ValidationObserver);
