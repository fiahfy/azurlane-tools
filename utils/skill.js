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

export const levels = Array.from(Array(10).keys()).map(i => i + 1)

export const textbooks = [
  { id: 1, name: 'Tier 1', exp: 100, hour: 2 },
  { id: 2, name: 'Tier 2', exp: 300, hour: 4 },
  { id: 3, name: 'Tier 3', exp: 800, hour: 8 }
]

export function getExp (from, to) {
  return levels.reduce((p, c) => {
    if (c > from && c <= to) {
      return p + exps[c]
    }
    return p
  }, 0)
}

export function getTextbook (id) {
  return textbooks.find((textbook) => textbook.id === id) || null
}
