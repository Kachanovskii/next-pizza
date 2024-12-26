import { cn } from "@/lib/utils";
import { ingredients } from "@/prisma/constans";
import React from "react";
import { ProductImage } from "./product-image";
import { Title } from "./title";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl
  ingredients,
  items,
  onClickAdd,
  className,
}) => {
  const textDetails = 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.';

  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} size={30} />

      <div className="w-[490px] bg-[#fcfcfc] p-7">
        <Title text={name} size="md" className='font-extrabold mb-1' />

        <p className="text-gray-400">{textDetails}</p>

        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
