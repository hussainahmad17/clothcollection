import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import { ArrowRight, ShoppingBag, Truck, CreditCard, RefreshCw } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="/hero1.webp"
          alt="Fashion collection"
          width={1200}
          height={600}
          className="w-full h-[70vh] object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start p-6 md:p-12 lg:p-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">New Season Arrivals</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Discover the latest trends and elevate your style with our new collection
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/products">
                Shop Now <ShoppingBag className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              asChild
            >
              <Link href="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
          <Link href="/products" className="text-primary hover:underline flex items-center">
            View all products <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <FeaturedProducts />
      </section>

      {/* Categories */}
      <section className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Men", "Women", "Accessories"].map((category) => (
            <Link
              key={category}
              href={`/products?category=${category.toLowerCase()}`}
              className="group relative overflow-hidden rounded-lg transition-transform hover:scale-[1.01]"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
              <Image
                src={`${category}.webp`}
                alt={category}
                width={600}
                height={400}
                className="h-[300px] w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Why Shop With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On all orders over $50</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-muted-foreground">Safe & encrypted checkout</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-muted-foreground">Handpicked premium items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container px-4 md:px-6">
        <div className="rounded-lg bg-primary/5 p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground">Get updates on new arrivals and special offers</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

