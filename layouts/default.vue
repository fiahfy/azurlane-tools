<template>
  <div>
    <mdc-temporary-drawer :open="open" @requestChange="requestChange"/>
    <mdc-toolbar title="test" :fixed="true">
      <mdc-icon slot="left" icon="menu" class="mdc-toolbar__icon--menu" @click.native="click"/>
      <nuxt slot="main"/>
    </mdc-toolbar>
  </div>
</template>

<script>
import MdcIcon from '~/components/MdcIcon'
import MdcTemporaryDrawer from '~/components/MdcTemporaryDrawer'
import MdcToolbar from '~/components/MdcToolbar'

export default {
  components: {
    MdcIcon,
    MdcTemporaryDrawer,
    MdcToolbar
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    click () {
      this.open = !this.open
    },
    requestChange (open) {
      this.open = open
    }
  }
}
</script>

<style>
@import 'material-components-web/dist/material-components-web.css';
@import 'material-design-icons/iconfont/material-icons.css';

:root {
    /* --mdc-theme-primary: red; */
}
</style>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
