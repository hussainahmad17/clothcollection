"use client"

import { useState, useEffect } from "react"
import ProductCard from "@/components/product-card"
import { getProducts } from "@/lib/products"

export default function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await getProducts()
        // Filter featured products or just take the first few
        const featured = allProducts.filter((p) => p.featured).slice(0, 4)
        setProducts(featured)
      } catch (error) {
        console.error("Error loading featured products:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg overflow-hidden">
            <div className="h-64 bg-muted animate-pulse" />
            <div className="p-4 space-y-2">
              <div className="h-4 bg-muted animate-pulse rounded" />
              <div className="h-4 bg-muted animate-pulse rounded w-2/3" />
              <div className="h-6 bg-muted animate-pulse rounded w-1/3 mt-2" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

