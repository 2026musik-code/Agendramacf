import { Router } from 'itty-router'
import handleIndex from './src/index.js'

const router = Router()

router.get('/', () => new Response('Hello from Agendramacf!'))
router.get('/api', handleIndex)

export default {
  fetch: (request, env, ctx) => router.handle(request, env, ctx),
}
