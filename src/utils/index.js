export function realMask (value) {
    if(!value) return
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
  