import { Router } from "https://deno.land/x/oak/mod.ts"
import { getColleges,getCollege,updateCollege,addCollege,deleteCollege } from "./controller/colleges.ts"

const router = new Router()

router.get("/api/v1/colleges" , getColleges)
        .get("/api/v1/colleges/:id", getCollege)
        .put("/api/v1/colleges/:id", updateCollege)
        .post("/api/v1/colleges/", addCollege)
        .delete("/api/v1/colleges/:id", deleteCollege)

export default router