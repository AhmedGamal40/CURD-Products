import { v4 as uuid } from "uuid";
import { ICategory, IInput, IProduct } from "../../Interface";

// Products
export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageURL:
      "https://wallup.net/wp-content/uploads/2016/01/290880-orange-BMW-car-German_car-BMW_M3_GTS.jpg",
    price: "450000",
    color: ["#FF0000", "#00FF00", "#FFC0CB"],
    category: {
      name: "Car",
      imageURL:
        "https://wallup.net/wp-content/uploads/2016/01/290880-orange-BMW-car-German_car-BMW_M3_GTS.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageURL:
      "https://wallup.net/wp-content/uploads/2016/01/65578-BMW_M3-BMW-car-blue_cars.jpg",
    price: "450000",
    color: ["#FF0000", "#00FF00", "#FFC0CB"],
    category: {
      name: "Car",
      imageURL:
        "https://wallup.net/wp-content/uploads/2016/01/65578-BMW_M3-BMW-car-blue_cars.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageURL:
      "https://uhdwallpapers.org/uploads/converted/18/05/29/bmw-i8-hybrid-car-3840x2160_56884-mm-90.jpg",
    price: "450000",
    color: ["#FF0000", "#00FF00", "#FFC0CB"],
    category: {
      name: "Car",
      imageURL:
        "https://uhdwallpapers.org/uploads/converted/18/05/29/bmw-i8-hybrid-car-3840x2160_56884-mm-90.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageURL:
      "https://wendypeterson.org/wp-content/uploads/2018/01/BMW-i5-luxury-electric-car-4k-hd-wallpaper.jpg",
    price: "470000",
    color: ["#FF0000", "#00FF00", "#FFC0CB"],
    category: {
      name: "Car",
      imageURL:
        "https://wendypeterson.org/wp-content/uploads/2018/01/BMW-i5-luxury-electric-car-4k-hd-wallpaper.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageURL:
      "https://www.gannett-cdn.com/-mm-/e85b1826767c6582310454f09d2c68f143a4e5cc/c=659-1177-4464-3327/local/-/media/2017/08/28/USATODAY/USATODAY/636395579971189203-P90273523-highRes-the-new-bmw-i3s-08-2-1-.jpg?width=3200&height=1809&fit=crop&format=pjpg&auto=webp",
    price: "4150000",
    color: ["#FF0000", "#00FF00", "#FFC0CB"],
    category: {
      name: "Car",
      imageURL:
        "https://www.gannett-cdn.com/-mm-/e85b1826767c6582310454f09d2c68f143a4e5cc/c=659-1177-4464-3327/local/-/media/2017/08/28/USATODAY/USATODAY/636395579971189203-P90273523-highRes-the-new-bmw-i3s-08-2-1-.jpg?width=3200&height=1809&fit=crop&format=pjpg&auto=webp",
    },
  },
  {
    id: uuid(),
    title: "Product 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageURL: "https://images.hdqwalls.com/wallpapers/bmw-m-performance-nu.jpg",
    price: "950000",
    color: ["#FF0000", "#00FF00", "#FFC0CB"],
    category: {
      name: "Car",
      imageURL:
        "https://images.hdqwalls.com/wallpapers/bmw-m-performance-nu.jpg",
    },
  },
  {
    id: uuid(),
    title: "Product 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageURL:
      "https://3.bp.blogspot.com/-Uvj4eXpWOfk/T6J-dOMbhvI/AAAAAAAAAVo/Vizoqm0pooQ/s1600/BMW_Concept_Vision_Efficient_Dynamics_Front.JPG",
    price: "4000000",
    color: ["#FF0000", "#00FF00", "#FFC0CB"],
    category: {
      name: "Car",
      imageURL:
        "https://3.bp.blogspot.com/-Uvj4eXpWOfk/T6J-dOMbhvI/AAAAAAAAAVo/Vizoqm0pooQ/s1600/BMW_Concept_Vision_Efficient_Dynamics_Front.JPG",
    },
  },
];

// Inputs
export const inputsList: IInput[] = [
  {
    id: "title",
    name: "title",
    type: "text",
    lable: "Title",
  },
  {
    id: "description",
    name: "description",
    type: "text",
    lable: "Description",
  },
  {
    id: "imageURL",
    name: "imageURL",
    type: "text",
    lable: "Image URL",
  },
  {
    id: "price",
    name: "price",
    type: "text",
    lable: "Price",
  },
];

// Colors
export const colors: string[] = [
' #FF0000',
' #00FF00',
'#000000',
' #FFC0CB',
' #FFA500',
' #A52A2A',
' #808080',
' #C0C0C0',
];

// Category
export const categoryList:ICategory[] = [
  {
    id:uuid(),
    name: "Car",
    imageURL: 'https://www.pngmart.com/files/4/Car-PNG-Photos.png'
  },
   {
    id:uuid(),
    name: "T-shirt",
    imageURL: 'https://purepng.com/public/uploads/large/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839zoswy.png'
  },
   {
    id:uuid(),
    name: "PC Desktop",
    imageURL: 'https://g-ecx.images-amazon.com/images/G/02/uk-electronics/product_content/HP/CompaqQ42011/Get-the-complete-package._V163679618_.jpg'
  },
   {
    id:uuid(),
    name: "Mobile",
    imageURL: 'https://pishondesigns.org/Dbase/wp-content/uploads/2012/05/real-mobile-2x-1400x770.png'
  },

]