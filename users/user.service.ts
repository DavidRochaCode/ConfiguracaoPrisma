import {prisma} from '../config'

export const creatUser = (userDTO: any) => {  
    return prisma.user.create({data: userDTO})
}
export const getUsers = () => {
    return prisma.user.findMany()
}
export const getOneUser = (id:string) => {  }
export const updateUser = (userDTO:any) => {  }
export const deleteUser = (id:string) => {  }

export const createAddress = (addressDTO:any) =>{
    return prisma.address.create({data:addressDTO})
}

export const getAddress = () =>{
    return prisma.address.findMany()
}