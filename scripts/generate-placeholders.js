const fs = require("fs")
const path = require("path")

// Create directories if they don't exist
const directories = ["public/images", "public/images/products", "public/images/categories", "public/images/team"]

directories.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
})

// Generate a simple SVG placeholder
function generateSvg(text, width = 400, height = 400) {
  return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#888" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
  `
}

// Create placeholder images
const placeholders = [
  { path: "public/images/placeholder.jpg", text: "Placeholder", width: 400, height: 400 },
  { path: "public/images/hero.jpg", text: "Hero Image", width: 1200, height: 600 },
  { path: "public/images/about.jpg", text: "About Us", width: 600, height: 400 },

  // Categories
  { path: "public/images/categories/men.jpg", text: "Men", width: 600, height: 400 },
  { path: "public/images/categories/women.jpg", text: "Women", width: 600, height: 400 },
  { path: "public/images/categories/accessories.jpg", text: "Accessories", width: 600, height: 400 },

  // Products
  { path: "public/images/products/tshirt.jpg", text: "T-Shirt", width: 400, height: 400 },
  { path: "public/images/products/jeans.jpg", text: "Jeans", width: 400, height: 400 },
  { path: "public/images/products/dress.jpg", text: "Dress", width: 400, height: 400 },
  { path: "public/images/products/bag.jpg", text: "Bag", width: 400, height: 400 },
  { path: "public/images/products/sneakers.jpg", text: "Sneakers", width: 400, height: 400 },
  { path: "public/images/products/sweater.jpg", text: "Sweater", width: 400, height: 400 },
  { path: "public/images/products/sunglasses.jpg", text: "Sunglasses", width: 400, height: 400 },
  { path: "public/images/products/jacket.jpg", text: "Jacket", width: 400, height: 400 },
  { path: "public/images/products/wallet.jpg", text: "Wallet", width: 400, height: 400 },
  { path: "public/images/products/headphones.jpg", text: "Headphones", width: 400, height: 400 },
  { path: "public/images/products/button-shirt.jpg", text: "Button Shirt", width: 400, height: 400 },
  { path: "public/images/products/yoga-pants.jpg", text: "Yoga Pants", width: 400, height: 400 },

  // Team
  { path: "public/images/team/hussain.jpg", text: "Hussain", width: 400, height: 400 },
  { path: "public/images/team/salahudin.jpg", text: "Salahudin", width: 400, height: 400 },
  { path: "public/images/team/aisha.jpg", text: "Aisha", width: 400, height: 400 },
  { path: "public/images/team/awais.jpg", text: "Awais", width: 400, height: 400 },
]

// Write SVG files
placeholders.forEach(({ path: filePath, text, width, height }) => {
  const svg = generateSvg(text, width, height)
  fs.writeFileSync(filePath, svg)
  console.log(`Created: ${filePath}`)
})

console.log("All placeholder images generated successfully!")

