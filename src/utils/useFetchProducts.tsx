// src/hooks/useSmartphoneProducts.ts
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  brand: string;
  id: number;
  title: string;
  images: string[];
  price: number;
  rating: number;
  discountPercentage: number;
}

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://dummyjson.com/products/category/smartphones"
        );
        setProducts(res.data.products);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
