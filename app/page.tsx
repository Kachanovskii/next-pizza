import { Container, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px] min-w-[250px]">
            <Filters />
          </div>
          <div className="flex flex-col gap-16">
            <ProductsGroupList
              title="Пиццы"
              items={[
                {
                  id: 0,
                  name: "Пицца",
                  imageUrl:
                    "https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Пицца",
                  imageUrl:
                    "https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Пицца",
                  imageUrl:
                    "https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "Пицца",
                  imageUrl:
                    "https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "Пицца",
                  imageUrl:
                    "https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 5,
                  name: "Пицца",
                  imageUrl:
                    "https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={1}
            />
            <ProductsGroupList
              title="Комбо"
              items={[
                {
                  id: 0,
                  name: "Пицца",
                  imageUrl:
                    "https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Пицца",
                  imageUrl:
                    "https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "Пицца",
                  imageUrl:
                    "https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "Пицца",
                  imageUrl:
                    "https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 6,
                  name: "Пицца",
                  imageUrl:
                    "https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 7,
                  name: "Пицца",
                  imageUrl:
                    "https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={2}
            />
            {/* <ProductCard id={0} name={'Пицца'} price={550} imageUrl={'https://la.ua/rivne/wp-content/uploads/sites/9/2024/11/napoli-new-3.jpg'} /> */}
          </div>
        </div>
      </Container>
    </>
  );
}
