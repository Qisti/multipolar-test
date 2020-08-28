<template>
  <v-app id="inspire">
    <v-app-bar app :color="colorBank">
      <v-toolbar-title class="justify-center align-center">
        <v-img src="/logo-mestika2.png" width="200px"/>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="10" md="10">
            <client-only>
              <nuxt/>
            </client-only>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    colorBank: "#232175"
  })
};
</script>