<template>
  <section class="container">
    <section>
      <mdc-typography tag="h2" type="title">Input</mdc-typography>
      <div>
        <mdc-textfield
          type="number"
          step="0.01"
          label="艦砲の攻撃速度"
          helptext="e.g. 76mm砲T3 (0.76s/回)"
          v-model="interval"
        >
          <small>s/回</small>
        </mdc-textfield>
      </div>
      <div>
        <mdc-textfield
          type="number"
          label="艦の装填値"
          helptext="e.g. エルドリッジ (201)"
          v-model="load"
        />
      </div>
      <div>
        <mdc-textfield
          type="number"
          label="スキルの装填上昇値"
          helptext="e.g. 装填指令 (25%)"
          v-model="bonus"
        >
          <small>%</small>
        </mdc-textfield>
      </div>
    </section>

    <section>
      <mdc-typography tag="h2" type="title">Result</mdc-typography>
      <mdc-list twoLine dense>
        <mdc-list-item>
          <span class="mdc-list-item__text">
            実際の攻撃速度
            <span class="mdc-list-item__text__secondary">{{ calculated }}<small>s/回</small></span>
          </span>
        </mdc-list-item>
      </mdc-list>
    </section>

    <section>
      <mdc-typography tag="h2" type="title">Reference</mdc-typography>
      <mdc-list dense>
        <mdc-list-item tag="a" href="http://azurlane.wikiru.jp/index.php?%A4%E8%A4%AF%A4%A2%A4%EB%BC%C1%CC%E4#t00cea35" target="_blank">
          よくある質問 - アズールレーン(アズレン)攻略 Wiki
          <mdc-icon icon="open_in_new" class="mdc-list-item__end-detail" aria-hidden="true"/>
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
import MdcTextfield from '~/components/MdcTextfield'
import MdcTypography from '~/components/MdcTypography'

export default {
  components: {
    MdcCheckbox,
    MdcFormField,
    MdcIcon,
    MdcList,
    MdcListItem,
    MdcTextfield,
    MdcTypography
  },
  asyncData ({ store }) {
    const title = '攻撃速度計算'
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
      interval: '',
      load: '',
      bonus: ''
    }
  },
  computed: {
    calculated () {
      const result = +this.interval * Math.pow(200 / (+this.load * (100 + +this.bonus) / 100 + 100), 0.5)
      return Math.round(result * Math.pow(10, 3)) / Math.pow(10, 3)
    }
  }
}
</script>

<style scoped>
.mdc-typography {
  margin-bottom: 0;
}
.mdc-list-item__text__secondary small {
  margin: 0 0 0 5px;
}
</style>
