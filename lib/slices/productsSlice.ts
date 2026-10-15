import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
  features: string[]
}

interface ProductsState {
  categories: string[]
  products: Product[]
  selectedCategory: string | null
}

const initialState: ProductsState = {
  categories: [
    "Custom Boxes",
    "Retail Packaging",
    "Food Packaging",
    "Cosmetic Boxes",
    "Electronics Packaging",
    "Pharmaceutical Boxes",
  ],
  products: [
    {
      id: "1",
      name: "Custom Cardboard Boxes",
      description: "High-quality custom cardboard boxes for all your packaging needs",
      image: "/assets/packify-custom-boxes.jpg",
      category: "Custom Boxes",
      features: ["Recyclable", "Custom Printing", "Various Sizes"],
    },
    {
      id: "2",
      name: "Retail Display Boxes",
      description: "Eye-catching retail display boxes to showcase your products",
      image: "/assets/packify-display-boxes.png",
      category: "Retail Packaging",
      features: ["Premium Design", "Brand Visibility", "Durable Material"],
    },
    {
      id: "3",
      name: "Food Safe Containers",
      description: "Food packaging solutions",
      image: "/assets/packify-food-containers.jpg",
      category: "Food Packaging",
      features: ["Food packaging", "Leak Proof", "Temperature Resistant"],
    },
  ],
  selectedCategory: null,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
    },
  },
})

export const { setSelectedCategory, addProduct } = productsSlice.actions
export default productsSlice.reducer
