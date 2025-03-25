"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { getProductById } from "@/lib/products"
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from "lucide-react"

export default function ProductPage({ params }) {
  const { id } = params
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id)
        setProduct(data)
      } catch (error) {
        console.error("Error loading product:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProduct()
  }, [id])

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity)
    }
  }

  if (isLoading) {
    return (
      <div className="container px-4 md:px-6 py-8 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container px-4 md:px-6 py-8 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <Link href="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative">
          <div className="sticky top-20">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={product.image || "/placeholder.svg?height=600&width=600"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />

              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                  {product.discount}% OFF
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="flex items-center mt-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">{product.rating} out of 5 stars</span>
          </div>

          <div className="mt-4 mb-6">
            {product.originalPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Category</h3>
              <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm capitalize">{product.category}</div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-l-md border hover:bg-muted"
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <div className="w-14 h-10 flex items-center justify-center border-t border-b">{quantity}</div>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-r-md border hover:bg-muted"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <Button size="lg" variant="outline" className="flex-1" onClick={() => setIsFavorite(!isFavorite)}>
                <Heart className={`mr-2 h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                {isFavorite ? "Saved" : "Save"}
              </Button>

              <Button size="icon" variant="outline" aria-label="Share product">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="border-t pt-6 mt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Free shipping over $100</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>30-day returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Quality guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

