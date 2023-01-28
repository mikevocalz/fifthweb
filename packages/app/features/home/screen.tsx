/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { H4, Row, Image as Image, ScrollView } from 'app/design/layout'
import { View } from 'app/design/view'
import { MotiLink } from 'solito/moti'
import { Dimensions, } from 'react-native'
import sanityClient from '../../sanity'
import { urlFor } from '../../sanity'
import axios from 'axios';
//import Image from 'next/image'

const query = `
*[_type == "post"]{
  ...,
  author->,
    categories[]->
} | order(_createdAt desc)
`
export function HomeScreen() {
  const screenHeight = Dimensions.get('window').height
  const screenWidth = Dimensions.get('window').width

  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        setError(err)
      })
  }, []);
  console.log(posts)
  return (
    <View className="bg-zinc-900 "
      style={{
        width: '100%',
        height: '100%',
        maxHeight: screenHeight,
      }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        //contentInsetAdjustmentBehavior='automatic'
        scrollEventThrottle={16}
        contentContainerStyle={{
          //overflow: 'hidden',
          flexGrow: 1,
          position: 'relative',
          paddingBottom: 100,
          alignItems: 'center'
        }}
        className="container p-3 self-center text-white bg-zinc-900 max-w-7xl "
      >

        <H1 className="text-white text-center">Home</H1>
        <H4>{posts[0]?.title}</H4>
        {/* <SolitoImage
          resizeMode={'contain'}
          src={urlFor(posts[0]?.author?.image?.asset).url()}
          height={100}
          width={100}
          alt="A cool artist's image."
          style={{
            height: 100,
            width: 100
          }}
        /> */}
        <Text>{posts[0]?.body[0]?.children[0]?.text}</Text>
        {/* 
        <Image
          source={{
            uri: urlFor(posts[0]?.author?.image?.asset).auto('format').toString()
          }}
          alt="author image"
          className="h-24 w-24 rounded-full"
        /> */}
        <H4>{JSON.stringify(posts[0])}</H4>
        <Image
          resizeMode='contain'
          source={{
            uri: urlFor(posts[0]?.mainImage?.asset).auto('format').toString()
          }}
          alt="author image"
          className="flex h-[300px] w-[400px]  "
        />
      </ScrollView>
    </View>
  )
}