import SanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

const client = SanityClient({
  projectId: '8dh3akzl',
  dataset: 'production',
  useCdn: true,
  apiVersion: 'v2021-10-21',
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client
