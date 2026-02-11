import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div
      className="grid gap-4 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4"
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
