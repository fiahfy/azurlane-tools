<template>
  <section class="container">
    <section>
      <mdc-typography tag="h2" type="title">Input</mdc-typography>
      <section>
        <mdc-typography tag="h3" type="subheading1">Ship gun</mdc-typography>
        <mdc-list dense>
          <mdc-list-item>
            sec / 1 times
          </mdc-list-item>
        </mdc-list>
      </section>
    </section>
  </section>
</template>

<script>
import MdcCheckbox from '~/components/MdcCheckbox'
import MdcFormField from '~/components/MdcFormField'
import MdcIcon from '~/components/MdcIcon'
import MdcList from '~/components/MdcList'
import MdcListItem from '~/components/MdcListItem'
import MdcSelect from '~/components/MdcSelect'
import MdcTypography from '~/components/MdcTypography'
import { levels, getTotalExp } from '~/utils/ship'

export default {
  components: {
    MdcCheckbox,
    MdcFormField,
    MdcIcon,
    MdcList,
    MdcListItem,
    MdcSelect,
    MdcTypography
  },
  asyncData ({ store }) {
    const title = 'Rof calculator'
    store.commit('setTitle', { title })
    return { title }
  },
  head () {
    return {
      title: this.title
    }
  },
  data () {
    return {
      levels,
      current: 1,
      target: 100,
      flagShip: true,
      mvp: true,
      bestCondition: true
    }
  },
  computed: {
    exp () {
      return getTotalExp(this.current, this.target)
    }
  }
}
</script>

<style scoped>
.container {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 15px;
  width: 100%;
}
.mdc-select+span {
  margin: 0 15px;
}
</style>
