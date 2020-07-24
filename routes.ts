import { Router } from "https://deno.land/x/oak/mod.ts"

const router = new Router()

router.get("/api/v1/colleges", ({ response }: { response: any }) => {
  response.body = "Running"
})

export default router