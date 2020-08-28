import Vue from "vue";
import VueRecaptcha from "vue-recaptcha";

Vue.use(VueRecaptcha, { siteKey: "<site key>" });
Vue.component("v-recaptcha", VueRecaptcha);
