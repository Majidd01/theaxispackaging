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
        "Minimum order quantities depend on the product and the printing. Tell us the product and the quantity you need, and we will confirm it on your quotation.",
      category: "Orders",
    },
    {
      id: "2",
      question: "How long does production take?",
      answer:
        "Production timing depends on the packaging and the quantity. We confirm the expected timing on your quotation. Those dates are estimates and are not a guaranteed delivery time.",
      category: "Production",
    },
    {
      id: "3",
      question: "Do you offer custom printing?",
      answer:
        "Send the artwork you have and say what must be printed. Printing is discussed and confirmed on your quotation. A printing method is not named on this page.",
      category: "Customization",
    },
    {
      id: "4",
      question: "What materials do you use?",
      answer:
        "We supply corrugated cardboard, kraft paper and other packaging materials. Material options are confirmed on your quotation.",
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
