import axios from './http.js'

// 获取疫情详细信息-天行api
export const getVirusData = () => axios.get('tianxing/ncov/index', {
  params: { key: '8381392c3d804138ae98efbb067e92e5' }
})

// 疫情统计-用友api
export const getHomeData = () => axios.get('apis/dst/ncov/country', { headers: { apicode: 'e3b676f2f67641268c4dd6d9f0b2bfac' } })

// 分布地图-用友api
export const getMapData = () => axios.get('apis/dst/ncov/spreadQuery', { headers: { apicode: 'e3b676f2f67641268c4dd6d9f0b2bfac' } })
