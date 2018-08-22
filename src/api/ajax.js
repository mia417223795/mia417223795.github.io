import axios from 'axios'

export default function ajax (url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求的代码
    let promise

    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = ''
      // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.length - 1)
        url = url + '?' + dataStr
      }
      // 发送get请求
      // get请求必须进行拼串，不用传递参数
      promise = axios.get(url)
    } else {
      // 发送post请求
      // post请求必须传递参数
      promise = axios.post(url, data)
    }
    // 成功了，调用resolve
    promise
      .then(response => {
        resolve(response.data)
      })
      // 失败了，调用reject
      .catch(error => {
        reject(error)
      })
  })
}
