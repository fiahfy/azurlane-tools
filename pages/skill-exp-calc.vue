<template>
  <section class="container">
    <section>
      <mdc-typography tag="h2" type="title">Input</mdc-typography>
      <section>
        <mdc-list dense>
          <mdc-list-item>
            <mdc-typography tag="h3" type="subheading1">LEVEL</mdc-typography>
          </mdc-list-item>
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
            <span>から</span>
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
            <span>まで</span>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-typography tag="h3" type="subheading1">教科書</mdc-typography>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-select v-model="textbookId">
                  <mdc-list-item
                    role="option"
                    tabindex="0"
                    :aria-selected="t.id === textbookId"
                    :id="t.id"
                    :key="t.id"
                    v-for="t in textbooks"
                  >
                    {{ t.name }}
                  </mdc-list-item>
                </mdc-select>
          </mdc-list-item>
          <mdc-list-item>
            <mdc-form-field align="end">
              <mdc-checkbox id="bonus" v-model="bonus"/>
              <label for="bonus">同タイプボーナス <small>(150%)</small></label>
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
            総経験値
            <span class="mdc-list-item__text__secondary">{{ exp }}</span>
          </span>
        </mdc-list-item>
        <mdc-list-item>
          <span class="mdc-list-item__text">
            教科書の必要数
            <span class="mdc-list-item__text__secondary">{{ number }}</span>
          </span>
        </mdc-list-item>
        <mdc-list-item>
          <span class="mdc-list-item__text">
            必要時間
            <span class="mdc-list-item__text__secondary">{{ time }}</span>
          </span>
        </mdc-list-item>
      </mdc-list>
    </section>

    <section>
      <mdc-typography tag="h2" type="title">Reference</mdc-typography>
      <mdc-list dense>
        <mdc-list-item tag="a" href="http://azurlane.wikiru.jp/index.php?%B3%D8%B1%E0#p707f95f" target="_blank">
          学園 - アズールレーン(アズレン)攻略 Wiki
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
import MdcSelect from '~/components/MdcSelect'
import MdcTypography from '~/components/MdcTypography'
import { levels, textbooks, getTotalExp, getTextbook } from '~/utils/skill'

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
    const title = 'スキル経験値計算'
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
      textbooks,
      current: 1,
      target: 10,
      textbookId: 3,
      bonus: true
    }
  },
  computed: {
    exp () {
      return getTotalExp(this.current, this.target)
    },
    textbook () {
      return getTextbook(this.textbookId) || {}
    },
    number () {
      let exp = this.textbook.exp
      exp *= this.bonus ? 1.5 : 1
      return Math.ceil(this.exp / exp)
    },
    time () {
      const hour = this.textbook.hour
      let hours = hour * this.number
      const days = Math.floor(hours / 24)
      hours = hours % 24
      let result = ''
      if (days) {
        result = days + '日 '
      }
      return result + hours + '時間'
    }
  }
}
</script>

<style scoped>
.mdc-list-item .mdc-typography {
  margin-bottom: 0;
}
</style>
