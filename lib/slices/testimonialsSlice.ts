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
  testimonials: [],
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
