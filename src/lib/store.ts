import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "./slices/productsSlice"
import faqsSlice from "./slices/faqsSlice"
import testimonialsSlice from "./slices/testimonialsSlice"
import quoteFormSlice from "./slices/quoteFormSlice"

export const store = configureStore({
  reducer: {
    products: productsSlice,
    faqs: faqsSlice,
    testimonials: testimonialsSlice,
    quoteForm: quoteFormSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
