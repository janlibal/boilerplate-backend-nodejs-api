import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import koaBody from 'koa-body'
import koaCompress from 'koa-compress'
import koaHelmet  from 'koa-helmet'
import cors from '@koa/cors'
import koaLogger from 'koa-logger'
import errorHandler from '../middleware/errorHandler'
import router from '../routes'

const app = new Koa()


app.use(errorHandler)
app.use(koaHelmet())
app.use(koaCompress())
app.use(koaBody())
app.use(koaLogger())
app.use(cors())
app.use(
  bodyParser({
    enableTypes: ["json"],
  }),
)

app.use(router.routes())
app.use(router.allowedMethods())

export default app