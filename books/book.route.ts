import {creatCategory, deleteCategory, getOneCategory, getCategories, updateCategory} from './book.controller'
import {Router} from 'express'

export const router = Router()

router.post('/', creatCategory)
router.get('/',getCategories)
router.get('/:id', getOneCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)