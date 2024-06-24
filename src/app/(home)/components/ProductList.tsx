import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Category, Product } from "@/lib/types";
import ProductCard from "./ProductCard";

async function ProductList() {
  const categoryResponse = await fetch(
    `${process.env.BACKEND_URL}/api/catalog/categories`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!categoryResponse.ok) {
    throw new Error("Failed to fetch category");
  }

  const categories: Category[] = await categoryResponse.json();

  //add pagination

  const productResponse = await fetch(
    //dynamical tennat id
    `${process.env.BACKEND_URL}/api/catalog/products?Page=100&tenantId=9`
  );

  const products: { data: Product[] } = await productResponse.json();

  console.log(products);
  return (
    <section>
      <div className="container py-12 ">
        <Tabs defaultValue={categories[0]._id}>
          <TabsList>
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category._id}
                  value={category._id}
                  className="text-md"
                >
                  {category.name}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {categories.map((category) => {
            return (
              <TabsContent key={category._id} value={category._id}>
                <div className="grid grid-cols-4 gap-6 mt-6">
                  {products.data
                    .filter((product) => product.category._id === category._id)
                    .map((product) => (
                      <ProductCard product={product} key={product._id} />
                    ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}

export default ProductList;
