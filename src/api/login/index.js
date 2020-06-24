import request from '../../api/request'

export function sendForm(data) {
  return request({
    url: '/registersms',
    method: 'post',
    data
  })
}

export function getIndex() {
  return request({
    url: '/index',
    method: 'get',
  })
}