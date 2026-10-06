import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface QuoteFormData {
  productType: string
  quantity: string
  dimensions: {
    length: string
    width: string
    height: string
  }
  material: string
  printing: string
  timeline: string
  contactInfo: {
    name: string
    email: string
    phone: string
    company: string
  }
  additionalRequirements: string
  files: File[]
}

interface QuoteFormState {
  formData: QuoteFormData
  isSubmitting: boolean
  submitted: boolean
}

const initialState: QuoteFormState = {
  formData: {
    productType: "",
    quantity: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    material: "",
    printing: "",
    timeline: "",
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      company: "",
    },
    additionalRequirements: "",
    files: [],
  },
  isSubmitting: false,
  submitted: false,
}

const quoteFormSlice = createSlice({
  name: "quoteForm",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<QuoteFormData>>) => {
      state.formData = { ...state.formData, ...action.payload }
    },
    updateContactInfo: (state, action: PayloadAction<Partial<QuoteFormData["contactInfo"]>>) => {
      state.formData.contactInfo = { ...state.formData.contactInfo, ...action.payload }
    },
    updateDimensions: (state, action: PayloadAction<Partial<QuoteFormData["dimensions"]>>) => {
      state.formData.dimensions = { ...state.formData.dimensions, ...action.payload }
    },
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload
    },
    setSubmitted: (state, action: PayloadAction<boolean>) => {
      state.submitted = action.payload
    },
    resetForm: (state) => {
      state.formData = initialState.formData
      state.submitted = false
      state.isSubmitting = false
    },
  },
})

export const { updateFormData, updateContactInfo, updateDimensions, setSubmitting, setSubmitted, resetForm } =
  quoteFormSlice.actions
export default quoteFormSlice.reducer
