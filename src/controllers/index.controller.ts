import {Request, Response} from 'express'
import {QueryResult} from 'pg'

import { pool } from '../database'

export const getTodos = async(req: Request, res: Response): Promise<Response> => {
   try {
    const result: QueryResult = await pool.query('select * from asdasd')
    return res.status(200).send(result.rows)
   }
   catch(e) {
    console.log('e :>> ', e);
    return res.status(500).send('Internal Server Error!')
   }
}

export const getTodoById = async(req: Request, res: Response): Promise<Response> => {
    const {id} = req.params
    try {
     const result: QueryResult = await pool.query('select * from todos where id = $1', [Number(id)])
     console.log('result :>> ', result);
     return res.status(200).send(result.rows)
    }
    catch(e) {
     console.log('e :>> ', e);
     return res.status(500).send('Internal Server Error!')
    }
 }

 export const createTodo = async(req: Request, res: Response): Promise<Response> => {
    const {title, description} = req.body
     const result: QueryResult = await pool.query('insert into todos (title, desctiption) values($1, $2)',[title, description])
     return res.status(200).send('created todo')
 }

 export const updateTodo = async(req: Request, res: Response): Promise<Response> => {
    const {id} = req.params
    const {title, description} = req.body
    const result: QueryResult = await pool.query('update todos set title = $1, desctiption = $2 where id = $3',[title, description, Number(id)])
    return res.status(200).send('updated')
 }

 export const deleteTodo = async(req: Request, res: Response): Promise<Response> => {
    const {id} = req.params
    const result: QueryResult = await pool.query('delete from todos where id = $1', [Number(id)])
    return res.status(200).send('deleted')
 }


