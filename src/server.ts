import { Http } from './infra/http/http'

const http = new Http(parseInt(process.env.HTTP_PORT) || 4000)

http.start()