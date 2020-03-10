import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response } from 'express'
import * as httpProxy from 'http-proxy'

@Injectable()
export class ProxyMiddleware implements NestMiddleware {
  use(req: Request, res: Response) {
    const apiProxy = httpProxy.createProxyServer()
    apiProxy.web(req, res, {
      changeOrigin: true,
      target: 'https://api.github.com'
    })
  }
}
