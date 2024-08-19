// Product Validation

export const productValidation = (product : {title:string, description:string, imageURL:string, price:string}) => {
    // return object
    const errors:{title:string, description:string, imageURL:string, price:string} = {
        title: "",
        price: "",
        description: "",
        imageURL: "",
    }

    // validate imageURL
    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL)
    // trim() uesd to remove white space
    if(!product.title.trim() || product.title.length < 10 || product.title.length > 80){
        errors.title = "Title must be between 10 and 80 characters"
    }
    if(!product.description.trim() || product.description.length < 10 || product.description.length > 500){
        errors.description = "Description must be between 10 and 500 characters"
    }
    // used Regular Expression to validate image URL
    if(!product.imageURL.trim() || !validUrl){
        errors.imageURL = "Image URL must be valid"
    }
     // used validate price number
    if(!product.price.trim() || isNaN(Number(product.price))){
        errors.price = "Price must be a number"
    }
    return errors
}