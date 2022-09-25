<template>
  <v-app>
    <HeaderCom/>
      <v-main>
        <router-view/>
      </v-main>
    <FooterCom/>
  </v-app>
</template>

<script>
import HeaderCom from './global/HeaderCom'
import FooterCom from './global/FooterCom'

export default {
  name: 'App',
  components: {
    HeaderCom,
    FooterCom
  },
  data: () => ({
    //
  }),
};
</script>
