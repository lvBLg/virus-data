export const dateFormat = (fmt, value) => {
  const o = {
    'M+': value.getMonth() + 1,
    'd+': value.getDate(),
    'h+': value.getHours(),
    'm+': value.getMinutes(),
    's+': value.getSeconds(),
    'q+': Math.floor((value.getMonth() + 3) / 3),
    S: value.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (value.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  return fmt
}
