
import React from 'react';
import { ArrowRight, Leaf, Truck, Shield, Users, Star, ShoppingCart, Heart, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/components/theme-provider';

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo - Enhanced Paudha Bhai logo with better visibility */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/5d45b831-8bef-4a01-941e-60e75e8bc270.png" 
                alt="Paudha Bhai" 
                className="h-20 w-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-foreground hover:text-green-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors font-medium">Shop</a>
              <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors font-medium">About</a>
              <a href="#" className="text-muted-foreground hover:text-green-600 transition-colors font-medium">Contact</a>
            </nav>
            
            {/* Theme Toggle & CTA */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 p-0"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Bring Nature
                  <span className="text-green-600 block">To Your Home</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Discover our collection of beautiful plants that will transform your space into a green paradise. Perfect for beginners and experts alike.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Shop Plants
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950/20 px-8 py-3">
                  Learn More
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold text-foreground">1000+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Plant Varieties</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4.8</p>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop&crop=center" 
                  alt="Beautiful plants" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-lg z-20 border">
                <div className="flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <span className="font-medium text-sm text-card-foreground">Air Purifying</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-lg z-20 border">
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <span className="font-medium text-sm text-card-foreground">Easy Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide the best service and highest quality plants to make your gardening journey successful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Free Delivery</h3>
                <p className="text-muted-foreground">Free delivery on orders over ₹2,000. Get your plants delivered safely to your doorstep.</p>
              </CardContent>
            </Card>
            
            <Card className="border shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Plant Guarantee</h3>
                <p className="text-muted-foreground">30-day guarantee on all plants. We ensure they arrive healthy and thriving.</p>
              </CardContent>
            </Card>
            
            <Card className="border shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Expert Support</h3>
                <p className="text-muted-foreground">Get advice from our plant experts. We're here to help your plants flourish.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Plants</h2>
            <p className="text-muted-foreground">Discover our most popular and beautiful plants</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop&crop=center",
                name: "Monstera Deliciosa",
                price: "₹1,800",
                rating: 4.8
              },
              {
                image: "https://images.unsplash.com/photo-1509423350716-97f2360af7e4?w=400&h=400&fit=crop&crop=center",
                name: "Snake Plant",
                price: "₹1,280",
                rating: 4.9
              },
              {
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
                name: "Fiddle Leaf Fig",
                price: "₹2,600",
                rating: 4.7
              }
            ].map((plant, index) => (
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
                      <span className="text-2xl font-bold text-green-600">{plant.price}</span>
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
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950/20">
              View All Plants
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Plant Journey?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who have transformed their homes with our beautiful plants. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-50 px-8">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/a695aff2-4e75-492e-a08b-bee9727f0545.png" 
                alt="Paudha Bhai" 
                className="h-10 w-auto mb-4 filter brightness-110 contrast-110"
              />
              <p className="text-muted-foreground">
                Bringing nature to your home with the finest collection of plants and expert care guidance.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Categories</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Indoor Plants</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Outdoor Plants</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Succulents</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Plant Care</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Contact Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>123 Garden Street</li>
                <li>New Delhi, Delhi 110001</li>
                <li>Phone: +91 98765 43210</li>
                <li>Email: hello@paudhabliai.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Paudha Bhai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
