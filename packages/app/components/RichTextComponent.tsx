import { Image, LI, UL, H1, H2, H3, H4, H5, BlockQuote } from "app/design/layout"
import { View } from "app/design/view"
import { urlFor } from '../sanity'
import { TextLink } from 'solito/link'
import { Text } from "app/design/typography"

import { } from "@expo/html-elements"
import { PortableTextComponents } from '@portabletext/react'


const RichTextComponent: PortableTextComponents = {
  types: {
    mainImage: ({ value }: any) => {
      return (<View className="w-full flex-1 h-[300px] w-full bg-red-600">
        <Image
          resizeMode='cover'
          style={{
            flex: 1,
            width: '100%',
            height: 400
          }}
          source={{
            uri: value

          }}
          alt={'main oic'}
        />
      </View>
      )
    },
    image: ({ value }: any) => {
      return (
        <View className='w-full h-[300px] flex-1 bg-red-800'  >
          <Image
            className="flex-1 object-contain object-left aspect-video	 w-[100%]   h-full md:h-[100%] md:w-48 lg:object-center "
            source={value}
            alt="blog image" />
        </View >
      );
    },
    video: ({ value }) => {
      return null;
    }

  },
  list: {
    bullet: ({ children }: any) => (
      <UL className="ml-10 py-5 list-disc space-y-5 text-white">{children}</UL>
    ),
    number: ({ children }: any) => (
      <LI className="mt-lg list-decimal text-white">{children}</LI>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <H1 className="py-10 font-bold text-white">{children}</H1>
    ),
    h2: ({ children }: any) => (
      <H2 className="py-10 font-bold text-white">{children}</H2>
    ),
    h3: ({ children }: any) => (
      <H3 className="py-10 font-bold text-white">{children}</H3>
    ),
    h4: ({ children }: any) => (
      <H4 className="py-10 font-bold text-white">{children}</H4>
    ),
    h5: ({ children }: any) => (
      <H5 className="py-10 font-bold text-white">{children}</H5>
    ),
    blockqoute: ({ children }: any) => (
      <BlockQuote className="border-l-white border-l-4 pl-5 py-5 my-5 text-white">{children}</BlockQuote>
    ),
  },
  marks: {
    links: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;

      return (
        <TextLink href={value.href} rel={rel}
          className='underline decoration-white hover:decoration-black text-white'>
          <Text>{children}</Text>
        </TextLink>
      );
    },
  },
}

export default RichTextComponent