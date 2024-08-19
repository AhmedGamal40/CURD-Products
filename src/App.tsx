import { FormEvent, useState } from 'react';
import { categoryList, colors, inputsList, productList } from './Components/data';
import ProductCard from './Components/ProductCard';
import Modal from './Components/UI/Modal';
import Button from './Components/UI/Button';
import Input from './Components/UI/Input';
import { IProduct } from './Interface';
import { productValidation } from './Validation';
import ErrorMessage from './Components/UI/ErrorMessage';
import CircleColors from './Components/UI/CircleColors';
import { v4 as uuid } from "uuid";
import Select from './Components/UI/Select';
import { PoductName } from './Components/Types';
import toast, { Toaster } from "react-hot-toast";
function App() {
  const defaultProduct = {
    title: "",
    price: "",
    description: "",
    imageURL: "",
    color: [],
    category: { name: "", imageURL: "" },
  };
  // State
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [productEdit, setProductEdit] = useState<IProduct>(defaultProduct);
  const [productEditIndex, setProductEditIndex] =  useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColors, setTempColor] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [selected, setSelected] = useState(categoryList[0]);
  // console.log(productEditIndex);
  // Handler State
  // Open Add Modal
  function open() {
    setIsOpen(true);
  }
  // Open Edit Modal
  function openEdit() {
    setIsOpenEditModal(true);
  }
  // Close Add Modal
  function close() {
    setIsOpen(false);
  }
  // Close Edit Modal
  function closedEdit() {
    setIsOpenEditModal(false);
  }
  // Change Handler (Add)
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  // Change Handler (Edit)
  const onChangeHandlerEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductEdit({
      ...productEdit,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  // Form Add Submit
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = productValidation(product);
    // check validation errors and set state errors if any
    const hasErrors =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrors) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      { ...product, id: uuid(), color: tempColors, category: selected },
      ...prev,
    ]);
    setProduct(defaultProduct);
    setTempColor([]);
    close();
    toast(" Add Naw Product Successfully.", {
      icon: "👏",
      className: "bg-blue-500 color-white text-white",
    });
  };
  // Form Edit Submit
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = productValidation(productEdit);
    // check validation errors and set state errors if any
    const hasErrors =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrors) {
      setErrors(errors);
      return;
    }
    // setProducts((prev) =>
    //   prev.map((p) => (p.id === productEdit.id ? productEdit : p))
    // );
    const editProducts = [...products];
    editProducts[productEditIndex] = {...productEdit , color: tempColors.concat(editProducts[productEditIndex].color)};
    setProducts(editProducts);
    setProductEdit(defaultProduct);
    closedEdit();
    setTempColor([]);
    toast(" Edit Successfully.", {
      icon: "👏",
      className: "bg-blue-500 color-white text-white",
    });
  };
  // Delete Product
  const deleteProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
    toast(" Delete Successfully.", {
      icon: "👏",
      className: "bg-black color-white text-white",
    });
  };
  // Reandering ProductList
  const reanderProduct = products.map((product, index) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductEdit={setProductEdit}
      openEdit={openEdit}
      setProductEditIndex={setProductEditIndex}
      index={index}
      deleteProduct={deleteProduct}
    />
  ));
  // Reandering InputtList
  const reanderInput = inputsList.map((input) => (
    <div key={input.id}>
      <label htmlFor={input.id} className=" font-medium ">
        {input.lable}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        placeholder={input.lable}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));
  // Reanding Product Colors
  const reanderProductColors = colors.map((color) => (
    <CircleColors
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColor(prev => prev.filter(c => c !== color));
          return;
        }
        if (productEdit.color.includes(color)) {
          setTempColor((prev) => prev.filter((c) => c !== color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));
  // Reanding Product
  const reanderProductEdit = (id: string, lable: string, name: PoductName) => {
    return (
      <div className="flex flex-col">
        <label className=" font-medium ">{lable}</label>
        <Input
          type="text"
          name={name}
          id={id}
          placeholder={"title"}
          value={productEdit[name]}
          onChange={onChangeHandlerEdit}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };
  return (
    <>
      <main className="container">
        <div className="flex items-center justify-around my-5">
          <Button className="bg-indigo-700 w-2/5" onClick={open}>
            Add Product
          </Button>
        </div>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 rounded-md">
          {reanderProduct}
        </div>

        {/* Add Product Modal */}
        <Modal isOpen={isOpen} close={close} title="Add New Product">
          <div className="space-y-4">
            <form onSubmit={submitHandler} className="space-y-4">
              {reanderInput}
              <Select selected={selected} setSelected={setSelected} />
              <div className="flex space-x-2 items-center flex-wrap my-4">
                {reanderProductColors}
              </div>
              <div className="flex space-x-2 items-center flex-wrap my-4">
                {tempColors.map((color) => (
                  <span
                    className={` text-yellow-100 rounded-lg text-sm mr-2 mb-1 p-1`}
                    style={{ backgroundColor: color }}
                    key={color}
                  >
                    {color}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <Button className="bg-indigo-700 ">Submit</Button>
                <Button className="bg-red-700 " onClick={close}>
                  Cancle
                </Button>
              </div>
            </form>
          </div>
        </Modal>

        {/* Edit Product Modal */}
        <Modal isOpen={isOpenEditModal} close={close} title="Edit Product">
          <div className="space-y-4">
            <form onSubmit={submitEditHandler} className="space-y-4">
              {reanderProductEdit("title", "Title", "title")}
              {reanderProductEdit("description", "Description", "description")}
              {reanderProductEdit("imageURL", "Image URL", "imageURL")}
              {reanderProductEdit("price", "Price", "price")}

              <Select selected={productEdit.category} setSelected={(value) => setProductEdit({...productEdit , category: value})} />

              <div className="flex space-x-2 items-center flex-wrap my-4">
                {reanderProductColors}
              </div>
              <div className="flex space-x-2 items-center flex-wrap my-4">
                {tempColors.concat(productEdit.color).map((color) => (
                  <span
                    className={` text-yellow-100 rounded-lg text-sm mr-2 mb-1 p-1`}
                    style={{ backgroundColor: color }}
                    key={color}
                  >
                    {color}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <Button className="bg-indigo-700 ">Submit</Button>
                <Button className="bg-red-700 " onClick={closedEdit}>
                  Cancle
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      </main>

      <Toaster />
    </>
  );
}

export default App
