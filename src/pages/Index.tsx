
import React, { useState } from 'react';
import { ArrowRight, Leaf, Truck, Shield, Users, Star, ShoppingCart, Heart, Sun, Moon, Volume2, Mic, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/components/theme-provider';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState('en');
  const [isListening, setIsListening] = useState(false);

  const translations = {
    en: {
      home: "Home",
      shop: "Shop",
      about: "About", 
      contact: "Contact",
      getStarted: "Get Started",
      bringNature: "Bring Nature",
      toYourHome: "To Your Home",
      heroDescription: "Discover our collection of beautiful plants that will transform your space into a green paradise. Perfect for beginners and experts alike.",
      shopPlants: "Shop Plants",
      learnMore: "Learn More",
      happyCustomers: "Happy Customers",
      plantVarieties: "Plant Varieties",
      rating: "Rating",
      whyChooseUs: "Why Choose Us?",
      whyChooseDescription: "We provide the best service and highest quality plants to make your gardening journey successful.",
      freeDelivery: "Free Delivery",
      freeDeliveryDesc: "Free delivery on orders over ₹2,000. Get your plants delivered safely to your doorstep.",
      plantGuarantee: "Plant Guarantee",
      plantGuaranteeDesc: "30-day guarantee on all plants. We ensure they arrive healthy and thriving.",
      expertSupport: "Expert Support",
      expertSupportDesc: "Get advice from our plant experts. We're here to help your plants flourish.",
      featuredPlants: "Featured Plants",
      featuredDesc: "Discover our most popular and beautiful plants",
      addToCart: "Add to Cart",
      viewAllPlants: "View All Plants",
      readyToStart: "Ready to Start Your Plant Journey?",
      readyDescription: "Join thousands of happy customers who have transformed their homes with our beautiful plants. Get started today!",
      shopNow: "Shop Now",
      contactUs: "Contact Us",
      quickLinks: "Quick Links",
      categories: "Categories",
      contactInfo: "Contact Info",
      indoorPlants: "Indoor Plants",
      outdoorPlants: "Outdoor Plants",
      succulents: "Succulents",
      plantCare: "Plant Care",
      footerDescription: "Bringing nature to your home with the finest collection of plants and expert care guidance.",
      copyright: "© 2024 Paudha Bhai. All rights reserved.",
      voiceAssistant: "Voice Assistant",
      listening: "Listening...",
      clickToSpeak: "Click to speak"
    },
    hi: {
      home: "होम",
      shop: "दुकान",
      about: "हमारे बारे में",
      contact: "संपर्क",
      getStarted: "शुरू करें",
      bringNature: "प्रकृति को",
      toYourHome: "अपने घर लाएं",
      heroDescription: "हमारे सुंदर पौधों के संग्रह की खोज करें जो आपके स्थान को हरित स्वर्ग में बदल देंगे। शुरुआती और विशेषज्ञों दोनों के लिए परफेक्ट।",
      shopPlants: "पौधे खरीदें",
      learnMore: "और जानें",
      happyCustomers: "खुश ग्राहक",
      plantVarieties: "पौधों की किस्में",
      rating: "रेटिंग",
      whyChooseUs: "हमें क्यों चुनें?",
      whyChooseDescription: "हम आपकी बागवानी यात्रा को सफल बनाने के लिए सर्वोत्तम सेवा और उच्चतम गुणवत्ता के पौधे प्रदान करते हैं।",
      freeDelivery: "मुफ्त डिलीवरी",
      freeDeliveryDesc: "₹2,000 से अधिक के ऑर्डर पर मुफ्त डिलीवरी। अपने पौधों को सुरक्षित रूप से अपने दरवाजे तक पहुंचाएं।",
      plantGuarantee: "पौधे की गारंटी",
      plantGuaranteeDesc: "सभी पौधों पर 30-दिन की गारंटी। हम सुनिश्चित करते हैं कि वे स्वस्थ और पनपते हुए पहुंचें।",
      expertSupport: "विशेषज्ञ सहायता",
      expertSupportDesc: "हमारे पौधों के विशेषज्ञों से सलाह लें। हम आपके पौधों को फलने-फूलने में मदद करने के लिए यहां हैं।",
      featuredPlants: "विशेष पौधे",
      featuredDesc: "हमारे सबसे लोकप्रिय और सुंदर पौधों की खोज करें",
      addToCart: "कार्ट में जोड़ें",
      viewAllPlants: "सभी पौधे देखें",
      readyToStart: "अपनी पौधों की यात्रा शुरू करने के लिए तैयार हैं?",
      readyDescription: "हजारों खुश ग्राहकों में शामिल हों जिन्होंने हमारे सुंदर पौधों से अपने घरों को बदल दिया है। आज ही शुरू करें!",
      shopNow: "अभी खरीदें",
      contactUs: "संपर्क करें",
      quickLinks: "त्वरित लिंक",
      categories: "श्रेणियां",
      contactInfo: "संपर्क जानकारी",
      indoorPlants: "घरेलू पौधे",
      outdoorPlants: "बाहरी पौधे",
      succulents: "रसीले पौधे",
      plantCare: "पौधों की देखभाल",
      footerDescription: "बेहतरीन पौधों के संग्रह और विशेषज्ञ देखभाल मार्गदर्शन के साथ आपके घर में प्रकृति लाना।",
      copyright: "© 2024 पौधा भाई। सभी अधिकार सुरक्षित।",
      voiceAssistant: "आवाज सहायक",
      listening: "सुन रहा है...",
      clickToSpeak: "बोलने के लिए क्लिक करें"
    }
  };

  const t = translations[language];

  const handleVoiceCommand = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice recognition not supported in this browser');
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = language === 'hi' ? 'hi-IN' : 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsListening(true);

    recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript.toLowerCase();
      console.log('Voice command:', command);
      
      // Voice navigation commands
      if (command.includes('shop') || command.includes('दुकान')) {
        window.location.href = '/shop';
      } else if (command.includes('about') || command.includes('हमारे बारे में')) {
        window.location.href = '/about';
      } else if (command.includes('contact') || command.includes('संपर्क')) {
        window.location.href = '/contact';
      } else if (command.includes('home') || command.includes('होम')) {
        window.location.href = '/';
      } else {
        // Text-to-speech response
        const speech = new SpeechSynthesisUtterance(
          language === 'hi' 
            ? 'मैं आपकी मदद कर सकता हूं। कहें "दुकान", "हमारे बारे में", या "संपर्क" नेविगेट करने के लिए।'
            : 'I can help you navigate. Say "shop", "about", or "contact" to go to those pages.'
        );
        speech.lang = language === 'hi' ? 'hi-IN' : 'en-US';
        speechSynthesis.speak(speech);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/5d45b831-8bef-4a01-941e-60e75e8bc270.png" 
                alt="Paudha Bhai" 
                className="h-24 w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 brightness-110 contrast-125"
              />
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-foreground hover:text-green-600 transition-colors font-medium">{t.home}</Link>
              <Link to="/shop" className="text-muted-foreground hover:text-green-600 transition-colors font-medium">{t.shop}</Link>
              <Link to="/about" className="text-muted-foreground hover:text-green-600 transition-colors font-medium">{t.about}</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-green-600 transition-colors font-medium">{t.contact}</Link>
            </nav>
            
            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-20">
                  <Globe className="h-4 w-4" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="hi">हिं</SelectItem>
                </SelectContent>
              </Select>

              {/* Voice Assistant */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleVoiceCommand}
                className={`w-9 h-9 p-0 ${isListening ? 'text-red-500' : ''}`}
                title={t.voiceAssistant}
              >
                {isListening ? <Volume2 className="h-4 w-4 animate-pulse" /> : <Mic className="h-4 w-4" />}
              </Button>

              {/* Theme Toggle */}
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

              <Link to="/shop">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
                  {t.getStarted}
                </Button>
              </Link>
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
                  {t.bringNature}
                  <span className="text-green-600 block">{t.toYourHome}</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  {t.heroDescription}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                    {t.shopPlants}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950/20 px-8 py-3">
                    {t.learnMore}
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold text-foreground">1000+</p>
                  <p className="text-sm text-muted-foreground">{t.happyCustomers}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">{t.plantVarieties}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4.8</p>
                  <p className="text-sm text-muted-foreground">{t.rating}</p>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.whyChooseUs}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.whyChooseDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{t.freeDelivery}</h3>
                <p className="text-muted-foreground">{t.freeDeliveryDesc}</p>
              </CardContent>
            </Card>
            
            <Card className="border shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{t.plantGuarantee}</h3>
                <p className="text-muted-foreground">{t.plantGuaranteeDesc}</p>
              </CardContent>
            </Card>
            
            <Card className="border shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{t.expertSupport}</h3>
                <p className="text-muted-foreground">{t.expertSupportDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.featuredPlants}</h2>
            <p className="text-muted-foreground">{t.featuredDesc}</p>
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
                image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=400&fit=crop&crop=center",
                name: "Snake Plant",
                price: "₹1,280",
                rating: 4.9
              },
              {
                image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=400&h=400&fit=crop&crop=center",
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
                        {t.addToCart}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950/20">
                {t.viewAllPlants}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.readyToStart}
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            {t.readyDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-50 px-8">
                {t.shopNow}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                {t.contactUs}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/5d45b831-8bef-4a01-941e-60e75e8bc270.png" 
                alt="Paudha Bhai" 
                className="h-12 w-auto mb-4 filter brightness-110 contrast-110"
              />
              <p className="text-muted-foreground">
                {t.footerDescription}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">{t.quickLinks}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-foreground transition-colors">{t.home}</Link></li>
                <li><Link to="/shop" className="hover:text-foreground transition-colors">{t.shop}</Link></li>
                <li><Link to="/about" className="hover:text-foreground transition-colors">{t.about}</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">{t.contact}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">{t.categories}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/shop" className="hover:text-foreground transition-colors">{t.indoorPlants}</Link></li>
                <li><Link to="/shop" className="hover:text-foreground transition-colors">{t.outdoorPlants}</Link></li>
                <li><Link to="/shop" className="hover:text-foreground transition-colors">{t.succulents}</Link></li>
                <li><Link to="/shop" className="hover:text-foreground transition-colors">{t.plantCare}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">{t.contactInfo}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Sahil Lenka</li>
                <li>Email: sahillenka44@gmail.com</li>
                <li>Phone: +91 7439968486</li>
                <li>New Delhi, Delhi 110001</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>{t.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
