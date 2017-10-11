let total = 0
export const exps = [
  { level: 1, next: 100 },
  { level: 2, next: 200 },
  { level: 3, next: 400 },
  { level: 4, next: 800 },
  { level: 5, next: 1400 },
  { level: 6, next: 2200 },
  { level: 7, next: 3200 },
  { level: 8, next: 4400 },
  { level: 9, next: 5800 },
  { level: 10, next: 0 }
].map((exp) => {
  exp.total = total
  total += exp.next
  return exp
})

export const levels = exps.map((exps) => exps.level)

export const textbooks = [
  { id: 1, name: 'Tech 1', exp: 100, hour: 2 },
  { id: 2, name: 'Tech 2', exp: 300, hour: 4 },
  { id: 3, name: 'Tech 3', exp: 800, hour: 8 }
]

export function getTextbook (id) {
  return textbooks.find((textbook) => textbook.id === id) || null
}

export function getExp (level) {
  return exps.find((exp) => exp.level === level) || null
}

export function getTotalExp (from, to) {
  const result = getExp(to).total - getExp(from).total
  return result > 0 ? result : 0
}
