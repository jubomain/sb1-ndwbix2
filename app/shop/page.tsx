'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  ShoppingCart, 
  Filter,
  CreditCard,
  PaypalIcon,
  ChevronDown 
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';
import { useCart } from '@/hooks/use-cart';
import { toast } from 'sonner';

const categories = [
  'All',
  'Books',
  'Music',
  'Art',
  'Digital',
  'Merchandise'
];

const products = [
  {
    id: 1,
    name: 'African History Collection',
    description: 'A comprehensive set of books covering African history and culture.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80',
    category: 'Books',
    inStock: true,
    featured: true,
    details: {
      format: 'Hardcover',
      pages: '500+',
      language: 'English/Swahili',
      publisher: 'Uhuru Press'
    }
  },
  {
    id: 2,
    name: 'Traditional Instruments Kit',
    description: 'Learn to play traditional African instruments with this starter kit.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1516663235285-845fac339ca7?auto=format&fit=crop&q=80',
    category: 'Music',
    inStock: true,
    featured: true,
    details: {
      includes: ['Drum', 'Shakers', 'Learning Guide'],
      material: 'Authentic Materials',
      difficulty: 'Beginner'
    }
  },
  {
    id: 3,
    name: 'Cultural Art Supplies',
    description: 'High-quality art supplies for traditional African art projects.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80',
    category: 'Art',
    inStock: true,
    details: {
      includes: ['Paints', 'Brushes', 'Canvas'],
      type: 'Professional Grade',
      suitable: 'All Levels'
    }
  },
  {
    id: 4,
    name: 'Digital Learning Bundle',
    description: 'Access to premium digital courses and resources.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80',
    category: 'Digital',
    inStock: true,
    details: {
      access: 'Lifetime',
      format: 'Online/Offline',
      updates: 'Free Updates'
    }
  },
  {
    id: 5,
    name: 'Uhuru Learning T-Shirt',
    description: 'Premium cotton t-shirt with traditional African patterns.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80',
    category: 'Merchandise',
    inStock: true,
    details: {
      material: '100% Cotton',
      sizes: ['S', 'M', 'L', 'XL'],
      care: 'Machine Washable'
    }
  },
  {
    id: 6,
    name: 'African Literature Set',
    description: 'Collection of classic and contemporary African literature.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80',
    category: 'Books',
    inStock: true,
    details: {
      books: '6 Books',
      authors: 'Various',
      edition: 'Special Edition'
    }
  }
];

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart, cartCount } = useCart();
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'priceLow':
          return a.price - b.price;
        case 'priceHigh':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return b.featured ? 1 : -1;
      }
    });

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="font-lora text-4xl font-bold">Educational Store</h1>
              <p className="text-muted-foreground">Quality resources for learning and cultural connection</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Image 
                  src="/stripe.svg" 
                  alt="Stripe" 
                  width={50} 
                  height={20} 
                  className="h-8 w-auto"
                />
                <Image 
                  src="/paypal.svg" 
                  alt="PayPal" 
                  width={50} 
                  height={20} 
                  className="h-8 w-auto"
                />
              </div>
              <Button variant="outline" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-[120px]">
                    {selectedCategory}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSortBy('featured')}>
                    Featured
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('priceLow')}>
                    Price: Low to High
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('priceHigh')}>
                    Price: High to Low
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('name')}>
                    Name
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col overflow-hidden">
                <div className="relative h-48 group">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {product.featured && (
                    <Badge className="absolute top-2 right-2">Featured</Badge>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Badge className="w-fit mb-2">{product.category}</Badge>
                  <h3 className="font-lora text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{product.description}</p>
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      {Object.entries(product.details).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key}:</span>
                          <span>{Array.isArray(value) ? value.join(', ') : value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">${product.price}</span>
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}