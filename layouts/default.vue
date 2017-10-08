<template>
  <div>
    <mdc-temporary-drawer header="Azurlane tools" :open="open" @requestChange="requestChange">
      <template slot>
        <mdc-list-item tag="nuxt-link" to="/skill-exp-calc" class="mdc-temporary-drawer--selected">
          <mdc-icon icon="star" class="mdc-list-item__start-detail" aria-hidden="true"/>
          Skill EXP calculator
        </mdc-list-item>
        <mdc-list-divider/>
        <mdc-list-item tag="a" href="https://github.com/fiahfy/azurlane-tools" target="_blank">
          <github-mark icon="github" class="mdc-list-item__start-detail" aria-hidden="true"/>
          GitHub
          <mdc-icon icon="open_in_new" class="mdc-list-item__end-detail" aria-hidden="true"/>
        </mdc-list-item>
      </template>
    </mdc-temporary-drawer>
    <mdc-toolbar :title="title" fixed @menuClick="menuClick">
      <nuxt/>
    </mdc-toolbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GithubMark from '~/components/GithubMark'
import MdcIcon from '~/components/MdcIcon'
import MdcListDivider from '~/components/MdcListDivider'
import MdcListItem from '~/components/MdcListItem'
import MdcTemporaryDrawer from '~/components/MdcTemporaryDrawer'
import MdcToolbar from '~/components/MdcToolbar'

export default {
  components: {
    GithubMark,
    MdcIcon,
    MdcListDivider,
    MdcListItem,
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
    menuClick () {
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
  --mdc-theme-primary: #3B8070;
}

html {
  /* font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: Roboto,sans-serif; */
  /* font-size: 16px; */
  /* word-spacing: 1px; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
}
</style>
