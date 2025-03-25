"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ProductFilters({
  selectedCategory,
  selectedPriceRange,
  onCategoryChange,
  onPriceRangeChange,
  onClearFilters,
}) {
  const categories = [
    { id: "men", name: "Men" },
    { id: "women", name: "Women" },
    { id: "accessories", name: "Accessories" },
    { id: "footwear", name: "Footwear" },
    { id: "sale", name: "Sale" },
  ]

  const priceRanges = [
    { id: "0-25", name: "Under $25" },
    { id: "25-50", name: "$25 to $50" },
    { id: "50-100", name: "$50 to $100" },
    { id: "100-200", name: "$100 to $200" },
    { id: "200-", name: "$200 & Above" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={onClearFilters}>
          Clear All
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["category", "price"]} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategory === category.id}
                    onCheckedChange={() => onCategoryChange(category.id)}
                  />
                  <Label htmlFor={`category-${category.id}`} className="text-sm font-normal cursor-pointer">
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <div key={range.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`price-${range.id}`}
                    checked={selectedPriceRange === range.id}
                    onCheckedChange={() => onPriceRangeChange(range.id)}
                  />
                  <Label htmlFor={`price-${range.id}`} className="text-sm font-normal cursor-pointer">
                    {range.name}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

