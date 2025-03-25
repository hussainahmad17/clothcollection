"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import SearchBar from "@/components/search-bar"
import { getProducts } from "@/lib/products"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "")
  const [selectedPriceRange, setSelectedPriceRange] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
        setFilteredProducts(data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error loading products:", error)
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  useEffect(() => {
    if (categoryParam && products.length > 0) {
      setSelectedCategory(categoryParam.toLowerCase())
    }
  }, [categoryParam, products])

  useEffect(() => {
    let result = [...products]

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (product) => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query),
      )
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Filter by price range
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split("-").map(Number)
      result = result.filter((product) => product.price >= min && (max ? product.price <= max : true))
    }

    setFilteredProducts(result)
  }, [searchQuery, selectedCategory, selectedPriceRange, products])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category)
  }

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range === selectedPriceRange ? "" : range)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("")
    setSelectedPriceRange("")
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Our Products</h1>

      <div className="mb-6">
        <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
      </div>

      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        <ProductFilters
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
          onCategoryChange={handleCategoryChange}
          onPriceRangeChange={handlePriceRangeChange}
          onClearFilters={clearFilters}
        />

        <div>
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
              <button onClick={clearFilters} className="text-primary hover:underline">
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

