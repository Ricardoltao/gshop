/**
 * 使用 mockjs 提供 mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回 goods 接口
Mock.mock('/goods', {code: 0, data: data.goods})
// 返回 ratings 接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
// 返回 info 接口
Mock.mock('/info', {code: 0, data: data.info})
