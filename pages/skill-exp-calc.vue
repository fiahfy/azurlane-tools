<template>
  <section class="container">
    <section>
      <mdc-typography tag="h2" type="title">Input</mdc-typography>
      <mdc-list twoLine dense>
        <mdc-list-item>
          <span class="mdc-list-item__text">
            Current Level
            <span class="mdc-list-item__text__secondary">
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
            </span>
          </span>
        </mdc-list-item>
        <mdc-list-item>
          <span class="mdc-list-item__text">
            Target Level
            <span class="mdc-list-item__text__secondary">
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
            </span>
          </span>
        </mdc-list-item>
        <mdc-list-item>
          <span class="mdc-list-item__text">
            Textbook
            <span class="mdc-list-item__text__secondary">
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
            </span>
          </span>
        </mdc-list-item>
        <mdc-list-item>
          <mdc-form-field align="end">
            <mdc-checkbox id="bonus" v-model="bonus"/>
            <label for="bonus">Bonus <small>(150%)</small></label>
          </mdc-form-field>
        </mdc-list-item>
      </mdc-list>
    </section>

    <section>
      <mdc-typography tag="h2" type="title">Result</mdc-typography>
      <mdc-list twoLine dense>
        <mdc-list-item>
          <span class="mdc-list-item__text">
            Total EXP
            <span class="mdc-list-item__text__secondary">{{ exp }}</span>
          </span>
        </mdc-list-item>
        <mdc-list-item>
          <span class="mdc-list-item__text">
            Total textbooks
            <span class="mdc-list-item__text__secondary">{{ number }}</span>
          </span>
        </mdc-list-item>
        <mdc-list-item>
          <span class="mdc-list-item__text">
            Total time
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
import { levels, textbooks, getExp, getTextbook } from '~/utils/skill'

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
    const title = 'Skill EXP calculator'
    store.commit('setTitle', { title })
    return { title }
  },
  data () {
    return {
      current: 1,
      target: 10,
      levels,
      textbookId: 3,
      textbooks,
      bonus: true
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
    exp () {
      return getExp(this.current, this.target)
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
        result = days + 'd '
      }
      return result + hours + 'h'
    }
  }
}
</script>

<style scoped>
.container {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
}
.container>section:first-child .mdc-list-item__text__secondary {
  top: -5px;
  position: relative;
}
</style>
