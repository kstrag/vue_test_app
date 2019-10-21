<template>
  <v-app>
    <v-content>
        <appHeader/>
     <v-container>

       <keep-alive>
           <router-view></router-view>
       </keep-alive>
     </v-container>
    </v-content>
  </v-app>
</template>

<script>
import appHeader from './components/Header'
export default {
  name: 'App',
  components: {
      appHeader,
  },
  data: () => ({
    //
  }),
};
</script>
