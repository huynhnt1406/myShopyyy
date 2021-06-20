

import express from 'express'
import { addOne, deleteOne, getAll, getOne, updateOne } from '../controller/product.controller.js'

const router = express.Router()

router.route('/').get(getAll)
router.route('/:id').get(getOne)
router.route('/add').post(addOne)
router.route('/delete/:id').delete(deleteOne)
router.route('/update/:id').post(updateOne)

export default router