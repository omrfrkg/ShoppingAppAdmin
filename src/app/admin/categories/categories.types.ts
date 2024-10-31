export type Product = {
    id: number;
    title: string;
    slug: string;
    image_url: string[];
    price: number;
    hero_image: string;
    category: number;
    max_quantity: number;
}

export type CategoryWithProducts = {
    created_at : string;
    id: number;
    imageUrl: string;
    name: string;
    products: Product[];
    slug: string;
}

export type CategoriesWithProductsResponse = CategoryWithProducts[];