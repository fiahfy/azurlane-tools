<template>
  <section class="container">
    <section>
      <mdc-typography tag="h2" type="title">Input</mdc-typography>
      <section>
        <mdc-typography tag="h3" type="subheading1">Level</mdc-typography>
        <mdc-list dense>
          <mdc-list-item>
            <mdc-select v-model="current">
              <mdc-list-item
                role="option"
                tabindex="0"
                :aria-selected="l === current"
                :id="l"
                :key="l"
                v-for="l in levels"
              >
                {{ l }}
              </mdc-list-item>
            </mdc-select>
            <span>to</span>
            <mdc-select v-model="target">
              <mdc-list-item
                role="option"
                tabindex="0"
                :aria-selected="l === target"
                :id="l"
                :key="l"
                v-for="l in levels"
              >
                {{ l }}
              </mdc-list-item>
            </mdc-select>
          </mdc-list-item>
        </mdc-list>
      </section>
      <section>
        <mdc-typography tag="h3" type="subheading1">Bonus</mdc-typography>
        <mdc-list dense>
          <mdc-list-item>
            <mdc-form-field align="end">
              <mdc-checkbox id="flagShip" v-model="flagShip"/>
              <label for="flagShip">Flag ship <small>(150%)</small></label>
            </mdc-form-field>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-form-field align="end">
              <mdc-checkbox id="mvp" v-model="mvp"/>
              <label for="mvp">MVP <small>(200%)</small></label>
            </mdc-form-field>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-form-field align="end">
              <mdc-checkbox id="bestCondition" v-model="bestCondition"/>
              <label for="bestCondition">Best condition <small>(120%)</small></label>
            </mdc-form-field>
          </mdc-list-item>
        </mdc-list>
      </section>
    </section>

    <section>
      <mdc-typography tag="h2" type="title">Result</mdc-typography>
      <mdc-list twoLine dense>
        <mdc-list-item>
          <span class="mdc-list-item__text">
            Total exp
            <span class="mdc-list-item__text__secondary">{{ exp }}</span>
          </span>
        </mdc-list-item>
      </mdc-list>
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
    const title = 'Ship exp calculator'
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
