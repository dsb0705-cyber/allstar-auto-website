import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wrench, Car, BatteryCharging, Phone, MapPin, Star, Clock } from "lucide-react";

export default function AllstarAutoWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <head>
        <title>Mechanic Lynbrook | Roadworthy Certificate | Allstar Auto</title>
        <meta
          name="description"
          content="Allstar Auto Pty Ltd in Lynbrook VIC provides Roadworthy Certificates, logbook servicing, repairs, hybrid & EV servicing. Call 0477 058 927."
        />
      </head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Allstar Auto Pty Ltd
          </motion.h1>
          <p className="text-lg md:text-xl mb-8">
            Mechanic & Roadworthy Certificate Specialist in Lynbrook
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="rounded-2xl text-lg px-6 py-4">
              Book Roadworthy Inspection
            </Button>
            <Button variant="outline" className="rounded-2xl text-lg px-6 py-4 bg-white text-gray-900">
              Call 0477 058 927
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <Car className="mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Roadworthy Certificates</h3>
                <p>Licensed inspections including Uber, DiDi & Ola vehicles.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <Wrench className="mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Servicing & Repairs</h3>
                <p>Minor & major services, logbook servicing, petrol & diesel repairs.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <BatteryCharging className="mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Hybrid & EV Service</h3>
                <p>High-voltage safety procedures & EV servicing. On-site charging available.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Services</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {['Battery & Electrical', 'Transmission & Gearbox', 'Brake Service', 'Towing Assistance'].map((service, i) => (
              <Card key={i} className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <Wrench className="mb-4" size={40} />
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p>Professional and reliable service for your vehicle.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Booking Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Book an Appointment</h2>
          <div className="grid gap-4">
            <Input placeholder="Full Name" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Vehicle Registration Number" />
            <Textarea placeholder="Service Required (RWC, Service, Repairs etc.)" />
            <Button className="rounded-2xl text-lg py-4">
              Submit Booking Request (You will receive an email notification)
            </Button>
          </div>
        </div>
      </section>

      {/* Working Hours Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Working Hours</h2>
          <div className="flex justify-center items-center gap-4 text-lg">
            <Clock />
            <span>Mon-Fri: 8:00 AM – 6:00 PM | Sat: 8:00 AM – 1:00 PM | Sun: Closed</span>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((review) => (
              <Card key={review} className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="mx-1" />
                    ))}
                  </div>
                  <p>
                    "Professional service, honest pricing and quick turnaround.
                    Highly recommended!"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Find Us</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Allstar Auto Location"
              src="https://www.google.com/maps?q=19+Wally+Place+Lynbrook+VIC+3975&output=embed"
              width="100%"
              height="350"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-10 text-center">
        <div className="space-y-4 text-lg">
          <div className="flex justify-center items-center gap-2">
            <MapPin />
            <span>19 Wally Place, Lynbrook VIC 3975</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Phone />
            <span>0477 058 927</span>
          </div>
        </div>
        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} Allstar Auto Pty Ltd – All Rights Reserved
        </p>
      </section>
    </div>
  );
}
