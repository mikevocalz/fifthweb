import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import sanityClient from '../sanity'

interface StoreState {
  posts: string[]
  fetch: () => void
}

const query = `
*[_type == "post"]{
...,
   title,
     body,
  slug,
     description,
     mainImage,
  author->{
    name,
    image
  },
  
    categories[]->
} | order(_createdAt desc)
`

const usePostStore = create<StoreState>()(
  devtools((set) => ({
    posts: [],
    fetch: async (data) => {
      sanityClient.fetch(query).then((data) => {
        set({ posts: data })
      })
    },
  }))
)

export default usePostStore
