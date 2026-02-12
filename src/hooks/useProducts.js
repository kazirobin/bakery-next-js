"use client";

import { useState, useEffect } from 'react';
import { products as initialProducts } from '@/data/products';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load products from localStorage or initialize with default data
  useEffect(() => {
    const storedProducts = localStorage.getItem('bakeryProducts');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('bakeryProducts', JSON.stringify(initialProducts));
    }
    setIsLoading(false);
  }, []);

  // Save to localStorage whenever products change
  useEffect(() => {
    if (products.length > 0 && !isLoading) {
      localStorage.setItem('bakeryProducts', JSON.stringify(products));
    }
  }, [products, isLoading]);

  // Add product
  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Math.max(...products.map(p => p.id), 0) + 1,
      price: parseFloat(product.price)
    };
    setProducts([...products, newProduct]);
    return newProduct;
  };

  // Update product
  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map(product => 
      product.id === id 
        ? { 
            ...product, 
            ...updatedProduct,
            price: parseFloat(updatedProduct.price)
          }
        : product
    ));
  };

  // Delete product
  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Get product by id
  const getProduct = (id) => {
    return products.find(product => product.id === id);
  };

  return {
    products,
    isLoading,
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct
  };
}