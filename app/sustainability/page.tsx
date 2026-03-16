import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Recycle, Award, TreePine } from "lucide-react"
import { Helmet } from "react-helmet-async"

export default function SustainabilityPage() {
  const initiatives = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Eco-Friendly Materials",
      description: "100% recyclable and biodegradable packaging materials sourced from sustainable forests.",
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "Circular Economy",
      description: "Designing packaging for reuse and recycling to minimize environmental impact.",
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "FSC Certified",
      description: "All our paper products are certified by the Forest Stewardship Council.",
    },
    {
      icon: <TreePine className="h-8 w-8 text-green-600" />,
      title: "Carbon Neutral",
      description: "Committed to carbon-neutral operations through renewable energy and offset programs.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Sustainable Packaging Solutions - Axis Packaging</title>
        <meta name="description" content="Discover Axis Packaging's commitment to sustainability. We offer eco-friendly materials and carbon-neutral operations for a greener future." />
        <link rel="canonical" href="https://theaxispackaging.com/sustainability" />
      </Helmet>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-green-600 text-white mb-4">Sustainability</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Sustainable Packaging Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to protecting our planet while delivering exceptional packaging solutions. Discover our
              eco-friendly initiatives and sustainable practices.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="mb-4">{initiative.icon}</div>
                    <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">{initiative.title}</h3>
                    <p className="text-gray-600">{initiative.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
