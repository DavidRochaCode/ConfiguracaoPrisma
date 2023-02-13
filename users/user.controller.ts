import {Request, Response} from 'express'
import * as userService from './user.service'

export const creatUser = async (request: Request, response: Response) => {  
    const newUser = await userService.creatUser(request.body)
    console.log(newUser)
    return response.json(newUser)
}
export const getUsers = async(request: Request, response: Response) => {
    const users = await userService.getUsers()
    return response.json(users)
}
export const getOneUser = (request: Request, response: Response) => {  }
export const updateUser = (request: Request, response: Response) => {  }
export const deleteUser = (request: Request, response: Response) => {  }