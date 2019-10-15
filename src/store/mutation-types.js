/**
 * 包含 n 个 mutations 的 type 名称常量
 */
export const RECEIVE_ADDRESS = 'receive_address' // 接收地址
export const RECEIVE_CATEGORYS = 'receive_categorys' // 接收食品分类数组
export const RECEIVE_SHOPS = 'receive_shops' // 接收商家数组
export const RECEIVE_USER_INFO = 'receive_user_info' // 接收用户信息对象
export const RESET_USER_INFO = 'reset_user_info' // 重置用户信息对象

export const RECEIVE_SHOP_GOODS = 'receive_shop_goods' // 接收商品信息数组
export const RECEIVE_SHOP_RATINGS = 'receive_shop_ratings' // 接收商家评价数组
export const RECEIVE_SHOP_INFO = 'RECEIVE_SHOP_INFO' // 接收商家信息对象

export const INCREMENT_FOOD_COUNT = 'increment_food_count' // 增加food中的count
export const DECREMENT_FOOD_COUNT = 'decrement_food_count' // 减少food中的count
export const CLEAR_CART = 'clear_cart' // 清除cartFoods中的food