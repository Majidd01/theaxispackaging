import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Testimonial {
  id: string
  name: string
  company: string
  content: string
  rating: number
  image: string
}

interface TestimonialsState {
  testimonials: Testimonial[]
  currentIndex: number
}

const initialState: TestimonialsState = {
  testimonials: [
    {
      id: "1",
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content:
        "Packify.ai delivered exceptional quality boxes for our product launch. The attention to detail and customer service was outstanding.",
      rating: 5,
      image: "/assets/packify-client-sarah.png",
    },
    {
      id: "2",
      name: "Michael Chen",
      company: "GreenLeaf Organics",
      content:
        "Their eco-friendly packaging solutions perfectly aligned with our brand values. Fast delivery and competitive pricing.",
      rating: 5,
      image: "/assets/packify-client-michael.png",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      company: "Boutique Beauty",
      content:
        "The custom cosmetic boxes exceeded our expectations. Beautiful design and sturdy construction that our customers love.",
      rating: 5,
      image: "/assets/packify-client-emily.png",
    },
  ],
  currentIndex: 0,
}

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload
    },
    nextTestimonial: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.testimonials.length
    },
    prevTestimonial: (state) => {
      state.currentIndex = state.currentIndex === 0 ? state.testimonials.length - 1 : state.currentIndex - 1
    },
  },
})

export const { setCurrentIndex, nextTestimonial, prevTestimonial } = testimonialsSlice.actions
export default testimonialsSlice.reducer
