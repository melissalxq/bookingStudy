<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="orange"
        :inverted="$q.theme === 'ios'"
      >  <!-- :glossy="$q.theme === 'mat'" -->

        <!-- <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        > -->
          <!-- <q-icon name="menu" /> -->
        <!-- </q-btn> -->

        <q-toolbar-title class="hometitle">
          <div>
            <img alt="Chattykids logo" src="~assets/LogoChattyKids.jpg" width="250" height="50">
            <div></div>
              Booking System
          <!-- <div slot="subtitle">Booking a Tutoring session v{{ $q.version }}</div> -->
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <!-- <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    > -->
      <!-- <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header > 
          <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="home" />
          <q-item-main label="Home"  />
        </q-item>
        </q-list-header>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="today" />
          <q-item-main label="Booking" sublabel="Booking a session" />
        </q-item>
        <q-item to="teacher/profile">
          <q-item-side icon="school" />
          <q-item-main label="Teachers" sublabel="view teacher's profile" />
        </q-item>
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
          <q-item-side icon="assignment_turned_in" />
          <q-item-main label="My sessions" sublabel="Manage my sessions" />
        </q-item>
        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Contact Us" sublabel="Contact ChattyKids" />
        </q-item>
       
      </q-list> -->
    <!-- </q-layout-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer  >
         <q-tabs v-model="selectedTab" color="orange" align="center">
          <q-route-tab slot="title" name="tab-0" icon="home" label="Home" to="/"/>
          <q-route-tab slot="title" name="tab-1" icon="today" label="booking" to="/booking" />
          <q-route-tab slot="title" name="tab-2" icon="school" label="Teachers" to="/teacher"/>
          <q-tab slot="title" name="tab-3" icon="assignment_turned_in" label="My Sessions"/>
      
        </q-tabs>
      </q-layout-footer>

    
    <!-- <q-btn @click="selectThirdTab">Select Third Tab</q-btn> -->
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
