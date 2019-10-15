import format from 'date-fns/format'
import Vue from 'vue'

Vue.filter('date-format',function(value,formatStr){
  return format(value,formatStr || 'yyyy-mm-dd hh:MM:ss')
})