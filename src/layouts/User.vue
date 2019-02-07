<template>
  <q-layout view="hHh Lpr lFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar>
        <!-- <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        /> -->
        <q-toolbar-title>
          Review Teacher
          <span slot="subtitle">Review Teacher</span>
        </q-toolbar-title>
      </q-toolbar>
        </q-layout-header>



    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <!-- <q-layout-drawer
      side="left"
      v-model="leftDrawer"
    > -->
      <!-- QScrollArea is optional -->
      <!-- <q-scroll-area class="fit q-pa-sm">
      
      </q-scroll-area> -->
    <!-- </q-layout-drawer> -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

    <!-- (Optional) The Footer -->
     <q-layout-footer  >
        <q-tabs v-model="selectedTab" color="orange" align="center">
          <q-route-tab slot="title" name="tab-0" icon="home" label="Home" to="/"/>
          <q-route-tab slot="title" name="tab-1" icon="today" label="booking" to="/booking" />
          <q-route-tab slot="title" name="tab-2" icon="school" label="Teachers" to="/teacher/profile"/>
          <q-tab slot="title" name="tab-3" icon="assignment_turned_in" label="My Sessions"/>
      
        </q-tabs>
      </q-layout-footer>

  </q-layout>
</template>

<script>
import { QScrollArea } from 'quasar'

export default {
  components: {QScrollArea},

  // name: 'LayoutName',
  data () {
    return {
      selectedTab:'tab-0'
    }
  }
}
</script>

<style>
</style>
