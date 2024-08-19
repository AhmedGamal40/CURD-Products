import React, { useState } from "react";
import { IProduct } from "../Interface";
import { textSlice } from "../Utils/function";
import Image from "./Image";
import Button from "./UI/Button";
import CircleColors from "./UI/CircleColors";
import ConfirmModal from "./UI/ConfirmModal ";

interface IProps {
  product: IProduct;
  setProductEdit: (product: IProduct) => void;
  openEdit: () => void;
  setProductEditIndex: (value: number) => void;
  index: number;
  deleteProduct: (index: number) => void
}
const ProductCard = ({
  product,
  setProductEdit,
  openEdit,
  setProductEditIndex,
  index,
  deleteProduct,
}: IProps) => {
  const [tempColors, setTempColor] = React.useState<string[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  // Reanding Product Colors
  const reanderProductColors = product.color.map((color) => (
    <CircleColors
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColor(tempColors.filter((c) => c !== color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

  // Handler Edit
  const onEdit = () => {
    setProductEdit(product);
    openEdit();
    setProductEditIndex(index);
  };

  // Handler Delete
  const handleDelete = () => {
    setProductEdit(product);
    setModalOpen(true);
  };

   const confirmDelete = () => {
     deleteProduct(index);
     setModalOpen(false);
   };

   const cancelDelete = () => {
     setModalOpen(false);
   };

  return (
    <>
      <div className="max-w-sm md-max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
        <Image
          imageUrl={product.imageURL}
          alt="BMW"
          className="rounded-md mb-2"
        />
        <h3>{product.title}</h3>
        <p>{textSlice(product.description)}</p>
        <div className="flex space-x-2 items-center flex-wrap my-4">
          {reanderProductColors}
        </div>
        <div className="flex items-center justify-between">
          <span>{product.price}$</span>
          <Image
            imageUrl={product.category.imageURL}
            alt="BMW"
            className="w-10 h-10 rounded-full object-center"
          />
        </div>
        <div className="flex items-center justify-between space-x-2 mt-5">
          <Button className="bg-indigo-700 " width="w-full" onClick={onEdit}>
            Edite
          </Button>
          <Button className="bg-red-700 " onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this product?"
        description={`Deleting "${product.title}" will remove it permanently from your inventory.`}
      />
    </>
  );
};

export default ProductCard;
