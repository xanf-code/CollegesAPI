import { Application ,Router } from 'https://deno.land/x/oak/mod.ts'
const port = 4000

const app = new Application()

const router =new Router()

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/api/v1/colleges', ({response}: {response: any}) => {
    response.body= 'Running'
})

console.log(`Server running on port ${port}`)

await app.listen({port})
