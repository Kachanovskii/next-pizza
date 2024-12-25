import { Container, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const catagories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={catagories.filter((category) => category.products.length > 0)} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px] min-w-[250px]">
            <Filters />
          </div>
          <div className="flex flex-col gap-16">
            {catagories.map(
              (category) =>
                category.products.length > 0 && (
                  <ProductsGroupList
                    key={category.id}
                    title={category.name}
                    categoryId={category.id}
                    items={category.products}
                  />
                )
            )}
            {/* <ProductCard id={0} name={'Пицца'} price={550} imageUrl={'https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg'} /> */}
          </div>
        </div>
      </Container>
    </>
  );
}
