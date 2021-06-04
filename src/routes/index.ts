import { Router } from "express"

import {getTodos, getTodoById, createTodo, deleteTodo, updateTodo} from '../controllers/index.controller'

const router = Router()

router.get('/todos', getTodos)
router.get('/todos/:id', getTodoById)
router.post('/todos', createTodo)
router.delete('/todos/:id', deleteTodo)
router.patch('/todos/:id', updateTodo)

export default router