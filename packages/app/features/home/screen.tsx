/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from 'react'
import { H1, P, Text, TextLink } from 'app/design/typography'
import { H4, H5, Row, Image, ScrollView, Div, A, H3, Section, Article, FlatList } from 'app/design/layout'
import { View } from 'app/design/view'
import { MotiLink } from 'solito/moti'
import { Dimensions, Platform } from 'react-native'
import sanityClient from '../../sanity'
import { urlFor } from '../../sanity'
import axios from 'axios';
import { Skeleton } from 'moti/skeleton'
import { MotiPressable } from 'moti/interactions'
import { MotiView } from 'moti'
import CustomLoader from '../../components/CustomLoader';
import { BlogItem } from 'app/components/BlogItem'

const query = `
*[_type == "post"]{
  ...,
   title,
        slug,
  author->,
    categories[]->
} | order(_createdAt desc)
`

const Spacer = ({ height = 16, width }) => <MotiView style={{ height, width }} />

const isWeb = Platform.OS === "web"

export function HomeScreen() {
  const screenHeight = Dimensions.get('window').height
  const screenWidth = Dimensions.get('window').width

  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')

  function getPosts() {
    sanityClient
      .fetch(query)
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        setError(err)
      })
  }

  useEffect(() => {
    getPosts()
  }, []);

  console.log('im posts:', posts)


  const renderItem = ({ item }) => (
    <BlogItem
      title={item.title}
      authorImgSrc={item.author?.image?.asset}
      description={item.posts[0]?.body[0]?.children[0]?.text}
      date={item._createdAt}
      imgSrc={item.mainImage?.asset}
      categories={item.categories}
    />
  )

  return (
    <View className="bg-zinc-900 "
      style={{
        width: '100%',
        height: '100%',
        maxHeight: screenHeight,
        justifyContent: 'center'
      }}>
      {error ?
        <H1 className="text-white text-center">{error}</H1> :

        <FlatList
          showsVerticalScrollIndicator={false}
          data={posts}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item, index) => item._id.toString()}
          ItemSeparatorComponent={() => <View className='h-[16px] bg-red-400' />}
          contentContainerStyle={{
            flexGrow: 1,
            position: 'relative',
            paddingTop: 100,
            paddingBottom: 100,
            alignItems: 'center',
          }}
          className="container p-4 self-center text-white bg-zinc-900 max-w-7xl "
        />

      }
    </View>
  )
}