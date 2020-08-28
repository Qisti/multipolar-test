<template>
  <div id="pendaftaran">
    <v-card class="mb-2">
      <v-card-title class="subtitle-1">Pendaftaran Internet Banking</v-card-title>
    </v-card>
    <v-card class="text-center align-content-center">
      <v-card-title class="justify-center">
        <span class="heading-5">Masukkan Data Dengan Benar</span>
      </v-card-title>
      <v-card-text>
        <validationObserver ref="observer" v-slot>
          <v-form>
            <v-spacer></v-spacer>
            <v-row align="center" justify="center">
              <v-col sm="8">
                <v-row no-gutters>
                  <v-col sm="3" class="d-flex align-content-center flex-wrap">
                    <span>Nomor Kartu ATM</span>
                  </v-col>
                  <v-col>
                    <validation-provider
                      v-slot="{ errors }"
                      name="ATM number"
                      rules="required|digits:16"
                    >
                      <v-text-field
                        v-model="nomorAtm"
                        :error-messages="errors"
                        append-outer-icon="mdi-dialpad"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col sm="3" class="d-flex align-content-center flex-wrap">
                    <span>Tanggal Lahir Nasabah</span>
                  </v-col>
                  <v-col>
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="tanggalLahirNasabah"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="tanggalLahirNasabah"
                          append-outer-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="tanggalLahirNasabah"
                        :max="maxDate"
                        locale="id-ID"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(tanggalLahirNasabah)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col sm="3" class="d-flex align-content-center flex-wrap">
                    <span>Exp Date Kartu</span>
                  </v-col>
                  <v-col>
                    <v-menu
                      ref="menu2"
                      v-model="menu2"
                      :close-on-content-click="false"
                      :return-value.sync="expDate"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="expDate"
                          append-outer-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="expDate"
                        type="month"
                        locale="id-ID"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu2.save(expDate)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col sm="1"></v-col>
                  <v-col sm="2" class="d-flex align-content-center flex-wrap">
                    <span>6 Digit PIN</span>
                  </v-col>
                  <v-col>
                    <validation-provider v-slot="{ errors }" name="PIN" rules="required|digits:6">
                      <v-text-field
                        v-model="pin"
                        data-test="password"
                        :error-messages="errors"
                        single-line
                        type="password"
                        append-outer-icon="mdi-dialpad"
                        @click:append="show1 = !show1"
                      />
                    </validation-provider>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col sm="3" class="d-flex align-content-center flex-wrap">
                    <span>Tulis Kode Verifikasi</span>
                  </v-col>
                  <v-col>
                    <div>
                      <my-captcha :callSuccess="captchaOk" color="blue" resolve="text"></my-captcha>
                    </div>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-checkbox
                    v-model="agreeement"
                    label="Saya setuju dengan syarat dan ketentuan yang berlaku"
                    color="primary"
                    value="primary"
                    hide-details
                  ></v-checkbox>
                </v-row>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col sm="4">
                <v-btn :disabled="!agreeement" :color="colorBank" class="white--text" block>Lanjut</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </validationObserver>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      nomorAtm: "",
      atmRules: "digits:16",
      atmError: "Format nomor kartu yang anda masukkan salah ",
      tanggalLahirNasabah: "",
      expDate: null,
      pin: "",
      captcha: "",
      date: null,
      maxDate: new Date().toISOString().substr(0, 10),
      menu: false,
      menu2: false,
      show1: true,
      recaptcha: "",
      colorBank: "#232175",
      agreeement: false
    };
  },
  methods: {
    captchaOk() {
      console.log("captcha ok.!");
    },
    async submit() {
      this.$validator.validateAll().then(result => {});
    }
  }
};
</script>
