/**
 * 包含多个基于 state 的 getter 的计算属性的对象
 */
export default {
  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => {
      return preTotal + food.count
    }, 0)
  },

  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => {
      return preTotal + food.count * food.price
    }, 0)
  },

  // satisfyingSize(state){
  //   return state.ratings.reduce((preTotal+rating) => {
  //     return preTotal + (rating.rateType === 0 ? 1 : 0)
  //   }, 0)
  // },
}
