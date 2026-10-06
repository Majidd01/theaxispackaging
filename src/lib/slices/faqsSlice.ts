import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

interface FAQsState {
  faqs: FAQ[]
  activeCategory: string
}

const initialState: FAQsState = {
  faqs: [
    {
      id: "1",
      question: "What is your minimum order quantity?",
      answer:
        "Our minimum order quantity varies by product type. For custom boxes, we typically require a minimum of 100 units. However, we can accommodate smaller orders for certain products.",
      category: "Orders",
    },
    {
      id: "2",
      question: "How long does production take?",
      answer:
        "Standard production time is 7-10 business days after artwork approval. Rush orders can be completed in 3-5 business days with additional fees.",
      category: "Production",
    },
    {
      id: "3",
      question: "Do you offer custom printing?",
      answer:
        "Yes, we offer full-color custom printing, including logos, graphics, and text. We support various printing techniques including offset, digital, and flexographic printing.",
      category: "Customization",
    },
    {
      id: "4",
      question: "What materials do you use?",
      answer:
        "We use high-quality materials including corrugated cardboard, kraft paper, and eco-friendly options. All materials are sourced from certified suppliers.",
      category: "Materials",
    },
  ],
  activeCategory: "All",
}

const faqsSlice = createSlice({
  name: "faqs",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload
    },
    addFAQ: (state, action: PayloadAction<FAQ>) => {
      state.faqs.push(action.payload)
    },
  },
})

export const { setActiveCategory, addFAQ } = faqsSlice.actions
export default faqsSlice.reducer
