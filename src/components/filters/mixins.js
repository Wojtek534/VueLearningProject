export const fruitMixin = {
  data () {
    return {
      fruits: ['apple', 'orange', 'banana', 'mellon', 'grape'],
      selected: ''
    }
  },
  computed: {
    filteredFruits () {
      return this.fruits.filter((element) => {
        return element.match(this.selected)
      })
    }
  }
}
