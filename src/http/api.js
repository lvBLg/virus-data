import axios from './http.js'

// 获取疫情详细信息
export const getVirusData = () => axios.get('tianxing/ncov/index', {
  params: { key: '8381392c3d804138ae98efbb067e92e5' }
})

export const getHomeData = () => axios.get('apis/dst/ncov/country', { headers: { apicode: 'e3b676f2f67641268c4dd6d9f0b2bfac' } })
