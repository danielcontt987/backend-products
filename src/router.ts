import { Router } from "express"
import { createProduct } from './handlers/product'; 


const router = Router();

//Routing
router.get('/', (req, res) => {
    res.send("desde GET")
})

router.post('/', createProduct)

router.put('/', (req, res) => {
    res.send("desde PUT")
})

router.patch('/', (req, res) => {
    res.send("desde PATCH")
})

router.delete('/', (req, res) => {
    res.send("desde DELETE")
})

export default router