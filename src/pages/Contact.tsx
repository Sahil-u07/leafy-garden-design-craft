
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Contact = () => {
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
              <Link to="/shop" className="text-muted-foreground hover:text-green-600 transition-colors font-medium">Shop</Link>
              <Link to="/about" className="text-muted-foreground hover:text-green-600 transition-colors font-medium">About</Link>
              <Link to="/contact" className="text-foreground hover:text-green-600 transition-colors font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Hero */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our plants or need gardening advice? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border shadow-lg">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Send us an email</p>
                <a 
                  href="mailto:sahillenka44@gmail.com" 
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  sahillenka44@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border shadow-lg">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Call us directly</p>
                <a 
                  href="tel:+917439968486" 
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  +91 7439968486
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border shadow-lg">
              <CardHeader>
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">We serve across</p>
                <p className="text-green-600 font-medium">India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Person */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Meet Our Founder</h2>
          <div className="bg-background rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Sahil Lenka</h3>
            <p className="text-muted-foreground mb-4">Founder & Plant Expert</p>
            <p className="text-muted-foreground mb-6">
              Passionate about plants and helping others discover the joy of gardening. 
              Always ready to share knowledge and help you grow your green family.
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:sahillenka44@gmail.com" 
                className="flex items-center justify-center text-green-600 hover:text-green-700"
              >
                <Mail className="h-4 w-4 mr-2" />
                sahillenka44@gmail.com
              </a>
              <a 
                href="tel:+917439968486" 
                className="flex items-center justify-center text-green-600 hover:text-green-700"
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 7439968486
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
