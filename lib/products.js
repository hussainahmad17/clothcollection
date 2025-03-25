// This file simulates fetching products from an API or JSON file
// In a real application, this would fetch from an actual API endpoint

const products = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    description: "A comfortable and versatile white t-shirt made from 100% organic cotton. Perfect for everyday wear.",
    price: 19.99,
    category: "men",
    image: "/shirt1.jpg",
    featured: true,
    rating: 4,
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans with a comfortable stretch. Versatile and stylish for any casual occasion.",
    price: 49.99,
    category: "men",
    image: "/shirt2.jpg",
    featured: true,
    rating: 5,
  },
  {
    id: "3",
    name: "Floral Summer Dress",
    description: "A beautiful floral print dress perfect for summer days. Light and flowy fabric.",
    price: 39.99,
    category: "women",
    image: "/shirt3.webp",
    featured: true,
    rating: 4,
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    description: "Stylish and practical leather crossbody bag with multiple compartments.",
    price: 79.99,
    originalPrice: 99.99,
    category: "accessories",
    image: "/shirt4.avif",
    featured: true,
    rating: 5,
    discount: 20,
  },
  {
    id: "5",
    name: "Running Sneakers",
    description: "Lightweight and comfortable running shoes with excellent support and cushioning.",
    price: 89.99,
    category: "footwear",
    image: "/shirt5.jpg",
    rating: 4,
  },
  {
    id: "6",
    name: "Oversized Sweater",
    description: "Cozy oversized sweater perfect for chilly days. Made from a soft wool blend.",
    price: 59.99,
    category: "women",
    image: "/shirt6.jpg",
    rating: 4,
  },
  {
    id: "7",
    name: "Aviator Sunglasses",
    description: "Classic aviator sunglasses with UV protection. Timeless style for any season.",
    price: 29.99,
    category: "accessories",
    image: "/shirt7.jpg",
    rating: 3,
  },
  {
    id: "8",
    name: "Denim Jacket",
    description: "Versatile denim jacket that goes with everything. A wardrobe essential.",
    price: 69.99,
    category: "men",
    image: "/shirt8.webp",
    rating: 5,
  },
  {
    id: "9",
    name: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots and a coin pocket.",
    price: 34.99,
    originalPrice: 44.99,
    category: "accessories",
    image: "/shirt9.webp",
    discount: 22,
    rating: 4,
  },
  {
    id: "10",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    price: 129.99,
    category: "accessories",
    image: "/shirt10.avif",
    rating: 5,
  },
  {
    id: "11",
    name: "Casual Button-Up Shirt",
    description: "Relaxed fit button-up shirt made from breathable cotton. Perfect for casual outings.",
    price: 44.99,
    category: "men",
    image: "/shirt11.avif",
    rating: 4,
  },
  {
    id: "12",
    name: "High Waist Yoga Pants",
    description: "Comfortable high waist yoga pants with four-way stretch. Perfect for workouts or casual wear.",
    price: 54.99,
    category: "women",
    image: "/shirt12.jpg",
    rating: 5,
  },
]

export async function getProducts() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  return products
}

export async function getProductById(id) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return products.find((product) => product.id === id) || null
}

