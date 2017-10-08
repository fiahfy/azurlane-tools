<template>
  <section class="container">
    <section>
      <h2>Input</h2>
      <div>
        <mdc-form-field align="end">
          <label for="level">Current Lv:</label>
          <select class="mdc-select" id="level" v-model="current">
            <option :key="l" :value="l" v-for="l in levels">{{ l }}</option>
          </select>
        </mdc-form-field>
      </div>
      <div>
        <mdc-form-field align="end">
          <label for="level">Target Lv:</label>
          <select class="mdc-select" id="level" v-model="target">
            <option :key="l" :value="l" v-for="l in levels">{{ l }}</option>
          </select>
        </mdc-form-field>
      </div>
      <div>
        <mdc-form-field align="end">
          <label for="textbook">Textbook:</label>
          <select class="mdc-select" id="textbook" v-model="textbookId">
            <option :key="t.id" :value="t.id" v-for="t in textbooks">
              {{ t.name }} ({{ t.exp }}exp)
            </option>
          </select>
        </mdc-form-field>
      </div>
      <div>
        <mdc-form-field>
          <label/>
          <mdc-checkbox id="bonus" v-model="bonus"/>
          <label for="bonus">Bonus<small>(150%)</small></label>
        </mdc-form-field>
      </div>
    </section>
    <section>
      <h2>Result</h2>
      <div>
        <mdc-form-field align="end">
          <label>Total EXP: </label>
          <span>{{ exp }}</span>
        </mdc-form-field>
      </div>
      <div>
        <mdc-form-field align="end">
          <label>Total textbooks: </label>
          <span>{{ number }}</span>
        </mdc-form-field>
      </div>
      <div>
        <mdc-form-field align="end">
          <label>Total time: </label>
          <span>{{ time }}</span>
        </mdc-form-field>
      </div>
    </section>
    <section>
      <h2>Reference</h2>
      <ul>
        <li>
          <a href="http://azurlane.wikiru.jp/index.php?%B3%D8%B1%E0#p707f95f" target="_blank">Azurlane Wiki</a>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import MdcCheckbox from '~/components/MdcCheckbox'
import MdcFormField from '~/components/MdcFormField'

const levels = Array.from(Array(10).keys()).map(i => i + 1)
const textbooks = [
  { id: 1, name: 'Tier 1', exp: 100, hour: 2 },
  { id: 2, name: 'Tier 2', exp: 300, hour: 4 },
  { id: 3, name: 'Tier 3', exp: 800, hour: 8 }
]
const exps = {
  1: 0,
  2: 100,
  3: 200,
  4: 400,
  5: 800,
  6: 1400,
  7: 2200,
  8: 3200,
  9: 4400,
  10: 5800
}

export default {
  components: {
    MdcCheckbox,
    MdcFormField
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
      return levels.reduce((p, c) => {
        if (c > this.current && c <= this.target) {
          return p + exps[c]
        }
        return p
      }, 0)
    },
    textbook () {
      return textbooks.find((textbook) => textbook.id === this.textbookId) || {}
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
  padding: 15px;
}
h2 {
  font-size: large;
}
section>div {
  margin: 15px 0;
}
.mdc-select {
  max-width: none;
  padding-left: 15px;
}
label {
  width: 128px;
}
label small {
  margin-left: 5px;
}
span {
  font-weight: bold;
}
</style>
