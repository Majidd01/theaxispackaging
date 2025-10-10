"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { nextTestimonial, prevTestimonial, setCurrentIndex } from "@/lib/slices/testimonialsSlice";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles, Users, Award, Heart } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Testimonials() {
  const dispatch = useAppDispatch();
  const { testimonials, currentIndex } = useAppSelector((state) => state.testimonials);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextTestimonial());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const currentTestimonial = testimonials[currentIndex];

  if (!currentTestimonial) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full border border-orange-200 mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Customer Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--axis-dark-blue)] mb-6 leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Happy Clients
            </span>{" "}
            Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about our packaging solutions and exceptional service.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Enhanced Main Testimonial */}
          <Card className="border-0 shadow-2xl mb-12 bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 group">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center">
                {/* Animated Quote Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  <Quote className="h-10 w-10 text-orange-600 group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Enhanced Rating */}
                <div className="flex justify-center mb-8">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200" />
                  ))}
                </div>

                {/* Enhanced Testimonial Content */}
                <blockquote className="text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-10 italic group-hover:text-gray-800 transition-colors duration-300">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Enhanced Customer Info */}
                <div className="flex items-center justify-center space-x-6">
                  <div className="relative">
                    <img
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-orange-200 group-hover:border-orange-400 transition-colors duration-300"
                    />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-[var(--axis-dark-blue)] text-xl group-hover:text-orange-600 transition-colors duration-300">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-gray-600 text-lg">{currentTestimonial.company}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Navigation */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => dispatch(prevTestimonial())}
              className="rounded-full w-12 h-12 p-0 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Enhanced Dots Indicator */}
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => dispatch(setCurrentIndex(index))}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg"
                    : "bg-gray-300 hover:bg-orange-300"
                }`}
              />
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => dispatch(nextTestimonial())}
              className="rounded-full w-12 h-12 p-0 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Enhanced All Testimonials Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm ${
                  index === currentIndex
                    ? "border-2 border-orange-400 shadow-2xl scale-105"
                    : "border-gray-200 hover:border-orange-300 hover:shadow-xl"
                }`}
                onClick={() => dispatch(setCurrentIndex(index))}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                      />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                        <Star className="w-2 h-2 text-white fill-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--axis-dark-blue)] text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Stats Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 mb-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2 group-hover:text-orange-600 transition-colors duration-300">50K+</div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Happy Clients</div>
              </div>
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <div className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2 group-hover:text-yellow-600 transition-colors duration-300">4.9/5</div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Average Rating</div>
              </div>
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2 group-hover:text-blue-600 transition-colors duration-300">10M+</div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Boxes Delivered</div>
              </div>
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2 group-hover:text-green-600 transition-colors duration-300">98%</div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12 animate-bounce delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full -translate-x-8 -translate-y-8 animate-ping delay-500"></div>
                <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-orange-300 rounded-full animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-300 rounded-full animate-bounce delay-300"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-orange-400/30 rounded-full animate-bounce delay-200"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-1/2 right-8 w-3 h-3 bg-white/40 rounded-full animate-ping delay-1000"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  <Heart className="h-10 w-10 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-orange-200 transition-colors duration-300">
                  Ready to Join Our Happy Customers?
                </h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg group-hover:text-white transition-colors duration-300">
                  Experience the same quality and service that our customers rave about. Get started with your custom packaging project today.
                </p>
                <Link to="/quote">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group/btn">
                    <span className="group-hover/btn:animate-pulse">Start Your Project</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
