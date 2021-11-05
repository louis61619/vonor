/* eslint-disable prefer-rest-params */
import mockJs from 'mockjs'
import { pathToRegexp } from 'path-to-regexp'

const Mock = mockJs as any
export function createProdMockServer(mockList: any[]) {
  Mock.XHR.prototype.__send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    if (this.custom.requestHeaders) {
      const headers: any = {}
      for (const k in this.custom.requestHeaders) {
        headers[k.toString().toLowerCase()] = this.custom.requestHeaders[k]
      }
      this.custom.options = Object.assign({}, this.custom.options, { headers })
    }
    // eslint-disable-next-line prefer-spread
    this.__send.apply(this, arguments)
  }

  Mock.XHR.prototype.proxy_open = Mock.XHR.prototype.open

  Mock.XHR.prototype.open = function () {
    const responseType = this.responseType
    // eslint-disable-next-line prefer-rest-params
    this.proxy_open(...arguments)
    if (this.custom.xhr) {
      if (responseType) {
        this.custom.xhr.responseType = responseType
      }
    }
  }

  for (const { url, type, response } of mockList) {
    __setupMock__(100)
    Mock.mock(
      pathToRegexp(url, undefined, { end: false }),
      type || 'get',
      __XHR2ExpressReqWrapper__(response)
    )
  }
}

function __param2Obj__(url: string) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

function __XHR2ExpressReqWrapper__(handle: (d: any) => any) {
  return function (options: any) {
    let result = null
    if (typeof handle === 'function') {
      const { body, type, url, headers } = options

      let b = body
      try {
        b = JSON.parse(body)
      } catch {
        return
      }
      result = handle({
        method: type,
        body: b,
        query: __param2Obj__(url),
        headers
      })
    } else {
      result = handle
    }

    return Mock.mock(result)
  }
}

function __setupMock__(timeout = 0) {
  timeout &&
    Mock.setup({
      timeout
    })
}
