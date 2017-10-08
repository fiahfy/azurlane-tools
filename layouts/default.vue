<template>
  <div>
    <mdc-temporary-drawer header="Azurlane tools" :open="open" @requestChange="requestChange">
      <template slot>
        <nuxt-link class="mdc-list-item mdc-temporary-drawer--selected" to="/skill-exp-calc">
          <mdc-icon icon="star" class="mdc-list-item__start-detail" aria-hidden="true"/>Skill EXP calculator
        </nuxt-link>
        <mdc-list-divider/>
        <a href="https://github.com/fiahfy/azurlane-tools" target="_blank" class="mdc-list-item">
          <github-mark icon="github" class="mdc-list-item__start-detail"/>GitHub
          <mdc-icon icon="open_in_new" class="mdc-list-item__end-detail" aria-hidden="true"/>
        </a>
      </template>
    </mdc-temporary-drawer>
    <mdc-toolbar :title="title" :fixed="true">
      <mdc-icon slot="left" icon="menu" class="mdc-toolbar__icon--menu" @click.native="click"/>
      <nuxt slot="main"/>
    </mdc-toolbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GithubMark from '~/components/GithubMark'
import MdcIcon from '~/components/MdcIcon'
import MdcListDivider from '~/components/MdcListDivider'
import MdcTemporaryDrawer from '~/components/MdcTemporaryDrawer'
import MdcToolbar from '~/components/MdcToolbar'

export default {
  components: {
    GithubMark,
    MdcIcon,
    MdcListDivider,
    MdcTemporaryDrawer,
    MdcToolbar
  },
  data () {
    return {
      open: false
    }
  },
  computed: mapState([
    'title'
  ]),
  methods: {
    click () {
      this.open = !this.open
    },
    requestChange (open) {
      this.open = open
    }
  },
  watch: {
    '$route' () {
      this.open = false
    }
  }
}
</script>

<style>
@import 'material-components-web/dist/material-components-web.css';
@import 'material-design-icons/iconfont/material-icons.css';

:root {
  --mdc-theme-primary: #2c999c;
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

html, body {
  margin: 0;
  padding: 0;
}

/* *, *:before, *:after {
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
} */
</style>
