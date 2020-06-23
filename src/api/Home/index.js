// api
import {login} from '../index'

export function sendForm(data) {
    return ({
      url: login,
      method: 'post',
      data
    })
  }