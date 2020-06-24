// api
import request from '../request'

  export function sendForm(data) {
    return request({
      url: '/?m=Index&a=MessageBoard',
      method: 'get',
      data
    })
  }