<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
        <q-toolbar
        color="orange"
        :inverted="$q.theme === 'ios'">  

            <q-toolbar-title class="hometitle">
                <div>
                    <img alt="Chattykids logo" src="~assets/LogoChattyKids.jpg" width="250" height="50">
                <div></div>
                    Booking Management
                </div>
            </q-toolbar-title>
        </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer  >
        <q-tabs v-model="selectedTab" color="orange" align="center">
            <q-route-tab slot="title" name="tab-0"  label="The best booking system forever!" to="/" />
        </q-tabs>
    </q-layout-footer>


</q-layout>

    
 

</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
    data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      selectedTab:'tab-0',
      }
  },
  methods: {
    openURL
  }
}
</script>

<style>
.hometitle { text-align: center}

</style>
