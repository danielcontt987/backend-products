import { Router } from "express"

const router = Router();

//Routing
router.get('/', (req, res) => {
    res.send("desde GET")
})

router.post('/', (req, res) => {
    res.send("desde POST")
})

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