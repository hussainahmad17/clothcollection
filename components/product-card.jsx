"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { ShoppingCart, Heart } from "lucide-react"
import FallbackImage from "./fallback-image"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  const toggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <div
      className="group relative rounded-lg overflow-hidden border bg-card transition-all hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <FallbackImage
            src={product.image || "/images/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />

          {product.discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}

          <button
            onClick={toggleFavorite}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          </button>

          <div
            className={`absolute bottom-0 left-0 right-0 bg-black/70 p-3 transform transition-transform ${isHovered ? "translate-y-0" : "translate-y-full"}`}
          >
            <Button onClick={handleAddToCart} className="w-full" size="sm">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold truncate">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 h-10">{product.description}</p>
          <div className="mt-2 flex items-center justify-between">
            {product.originalPrice ? (
              <div className="flex items-center gap-2">
                <span className="font-semibold">${product.price.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-semibold">${product.price.toFixed(2)}</span>
            )}

            {product.rating && (
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

