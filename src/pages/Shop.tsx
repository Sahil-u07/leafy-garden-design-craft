import React from 'react';
import { ShoppingCart, Heart, Star, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Shop = () => {
  const plants = [
    {
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop&crop=center",
      name: "Monstera Deliciosa",
      price: "₹1,800",
      originalPrice: "₹2,200",
      rating: 4.8,
      category: "Indoor"
    },
    {
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=400&fit=crop&crop=center",
      name: "Snake Plant",
      price: "₹1,280",
      originalPrice: "₹1,500",
      rating: 4.9,
      category: "Indoor"
    },
    {
      image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=400&h=400&fit=crop&crop=center",
      name: "Fiddle Leaf Fig",
      price: "₹2,600",
      originalPrice: "₹3,000",
      rating: 4.7,
      category: "Indoor"
    },
    {
      image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400&h=400&fit=crop&crop=center",
      name: "Peace Lily",
      price: "₹1,200",
      originalPrice: "₹1,400",
      rating: 4.6,
      category: "Indoor"
    },
    {
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=400&fit=crop&crop=center",
      name: "Rubber Plant",
      price: "₹1,500",
      originalPrice: "₹1,800",
      rating: 4.8,
      category: "Indoor"
    },
    {
      image: "https://images.unsplash.com/photo-1509423350716-97f2360af7e4?w=400&h=400&fit=crop&crop=center",
      name: "Aloe Vera",
      price: "₹800",
      originalPrice: "₹1,000",
      rating: 4.9,
      category: "Succulent"
    },
    {
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=400&fit=crop&crop=center",
      name: "Pothos",
      price: "₹900",
      originalPrice: "₹1,100",
      rating: 4.7,
      category: "Indoor"
    },
    {
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop&crop=center",
      name: "ZZ Plant",
      price: "₹1,600",
      originalPrice: "₹1,900",
      rating: 4.8,
      category: "Indoor"
    },
    {
      image: "https://images.unsplash.com/photo-1502780402662-acc01917189e?w=400&h=400&fit=crop&crop=center",
      name: "Philodendron",
      price: "₹1,300",
      originalPrice: "₹1,550",
      rating: 4.6,
      category: "Indoor"
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop&crop=center",
      name: "Jade Plant",
      price: "₹700",
      originalPrice: "₹900",
      rating: 4.5,
      category: "Succulent"
    },
    {
      image: "https://images.unsplash.com/photo-1583317094806-b64f20ad2d4d?w=400&h=400&fit=crop&crop=center",
      name: "Spider Plant",
      price: "₹600",
      originalPrice: "₹800",
      rating: 4.7,
      category: "Indoor"
    },
    {
      image: "https://images.unsplash.com/photo-1535455868629-ef5d6968e3d3?w=400&h=400&fit=crop&crop=center",
      name: "Boston Fern",
      price: "₹1,100",
      originalPrice: "₹1,300",
      rating: 4.4,
      category: "Indoor"
    },
    {
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop&crop=center",
      name: "Cactus Mix",
      price: "₹500",
      originalPrice: "₹700",
      rating: 4.8,
      category: "Succulent"
    },
    {
      image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400&h=400&fit=crop&crop=center",
      name: "Lavender",
      price: "₹1,000",
      originalPrice: "₹1,200",
      rating: 4.9,
      category: "Outdoor"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/5d45b831-8bef-4a01-941e-60e75e8bc270.png" 
                alt="Paudha Bhai" 
                className="h-24 w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 brightness-110 contrast-125"
              />
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-muted-foreground hover:text-green-600 transition-colors font-medium">Home</Link>
              <Link to="/shop" className="text-foreground hover:text-green-600 transition-colors font-medium">Shop</Link>
              <Link to="/about" className="text-muted-foreground hover:text-green-600 transition-colors font-medium">About</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-green-600 transition-colors font-medium">Contact</Link>
            </nav>
            
            <div className="flex items-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
                Cart (0)
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Shop Hero */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Shop Plants</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our amazing collection of healthy plants for your home and garden
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input className="pl-10 w-64" placeholder="Search plants..." />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Showing {plants.length} products
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plants.map((plant, index) => (
              <Card key={index} className="border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={plant.image} 
                      alt={plant.name}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm hover:bg-background"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {plant.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(plant.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">({plant.rating})</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">{plant.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-600">{plant.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{plant.originalPrice}</span>
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
