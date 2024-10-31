import { getCategoriesWithProducts } from "@/actions/categories";
import { getProductWithCategories } from "@/actions/products";
import { ProductPageComponent } from "@/app/admin/products/page-component";

export default async function Products() {
  const categories = await getCategoriesWithProducts();
  const productsWithCategories = await getProductWithCategories();

  return (
    <ProductPageComponent
      categories={categories}
      productsWithCategories={productsWithCategories}
    />
  );
}
