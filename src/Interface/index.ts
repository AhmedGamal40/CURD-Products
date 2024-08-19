import { PoductName } from "../Components/Types"

export interface IProduct {
    id?:string ,
    title: string,
    description: string,
    imageURL: string,
    price: string,
    color: string[],
    category: {
        name: string,
        imageURL: string
    }
}

export interface IInput {
    id: string,
    name: PoductName ,
    type: string,
    lable: string
}

export interface ICategory {
    id?:string ,
    name: string,
    imageURL: string
}