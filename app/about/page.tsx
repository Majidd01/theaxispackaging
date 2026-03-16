import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Heart, Target, Users } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every package we create, ensuring the highest quality standards.",
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and materials that protect our planet for future generations.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build lasting relationships with our clients, becoming their trusted packaging partner.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Continuously pushing boundaries with cutting-edge design and manufacturing technologies.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
              image: "/assets/packify-team-ceo.png",
      bio: "15+ years in packaging industry, passionate about sustainable solutions.",
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
              image: "/assets/packify-team-designer.png",
      bio: "Award-winning designer specializing in brand-focused packaging solutions.",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director",
              image: "/assets/packify-team-operations.png",
      bio: "Expert in manufacturing processes and quality assurance systems.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Axis Packaging - Premium Custom Packaging Solutions</title>
        <meta name="description" content="Learn about Axis Packaging, your partner in innovative, sustainable, and high-quality custom packaging solutions since 2014." />
        <link rel="canonical" href="https://theaxispackaging.com/about" />
      </Helmet>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-[var(--axis-orange)] text-white mb-6">About Axis Packaging</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Crafting Packaging Excellence Since 2014</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                We're more than just a packaging company. We're your partners in creating memorable brand experiences
                through innovative, sustainable, and high-quality custom packaging solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2014 with a simple mission: to help businesses create packaging that not only protects
                    their products but also tells their brand story. What started as a small operation has grown into a
                    leading custom packaging provider serving over 500 companies worldwide.
                  </p>
                  <p>
                    Our journey began when our founder, Sarah Johnson, noticed a gap in the market for truly custom,
                    sustainable packaging solutions. With her background in industrial design and passion for
                    environmental responsibility, she set out to create a company that would revolutionize how
                    businesses think about packaging.
                  </p>
                  <p>
                    Today, we're proud to be at the forefront of packaging innovation, combining cutting-edge technology
                    with traditional craftsmanship to deliver exceptional results for our clients.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/assets/packify-company-story.png"
                  alt="Packify.ai facility and team"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we serve our clients and community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[var(--axis-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-[var(--axis-orange)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">Meet Our Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The passionate experts behind Axis Packaging's success and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-1">{member.name}</h3>
                    <p className="text-[var(--axis-orange)] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us with their packaging needs. Let's create something
              amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)] bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatSupport />
    </div>
  )
}

