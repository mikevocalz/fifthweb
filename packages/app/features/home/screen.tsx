/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { H1, Text, TextLink } from 'app/design/typography'
import { Article, FlatList } from 'app/design/layout'
import { View } from 'app/design/view'
import { Dimensions, Platform } from 'react-native'
import sanityClient from '../../sanity'
import { urlFor } from '../../sanity'

import { Skeleton } from 'moti/skeleton'
import { MotiPressable } from 'moti/interactions'
import { MotiView } from 'moti'
import CustomLoader from '../../components/CustomLoader';
import { BlogItem } from 'app/components/BlogItem'
import { useRouter } from 'solito/router'
import usePostStore from '../../store/store';
import { Post } from '../../../../apps/expo/types'
import slugify from 'slugify'

import { toPlainText } from '@portabletext/react-native'


const query = `
*[_type == "post"]{
...,
  _id,
   title,
     body,
   "slug": slug.current,
     description,
     mainImage,
  author->{
    name,
    image
  },
    categories[]->{
      title
    }
} | order(_createdAt desc)
`

const Spacer = ({ height = 16, width }) => <MotiView style={{ height, width }} />

const isWeb = Platform.OS === "web"

export function HomeScreen({ navigation }) {

  const { push } = useRouter()

  const screenHeight = Dimensions.get('window').height
  const screenWidth = Dimensions.get('window').width

  const [loading, setLoading] = useState(true)
  //const [posts, setPosts] = useState(null)
  const [error, setError] = useState('')

  // const getPosts = () => {
  //   sanityClient
  //     .fetch(query)
  //     .then((data) => {
  //       setPosts(data)
  //     })
  //     .catch((err) => {
  //       setError(err)
  //     })
  // }

  const { posts, fetch } = usePostStore((state) => state)

  useEffect(() => {
    //getPosts()
    //fetch()
    setLoading(false)
  }, []);


  console.log('im posts:', posts)

  // item.posts[0]?.body[0]?.children[0]?.text

  const goToPostDetails = (item) => {
    const slug = slugify(item.slug.current,
      {
        replacement: '-',
        strict: true,     // strip special characters except replacement, defaults to `false`
        trim: true
      }
    )  // some_string

    const categ = item.categories
    let cats = categ.map((item) => item);


    console.log('im cats:', cats)
    const body = item.body[0]?.children[0]?.text
    // const auImg = urlFor(item.author?.image?.asset)?.auto('format').toString();
    //const imgMain = urlFor(item.mainImage?.asset)?.auto('format').toString();
    push({
      pathname: `/user/${slug}`,
      query: {
        ...item,
        slug,
        id: item._id,
        author: item.author?.name,
        authorImgSrc: urlFor(item.author?.image?.asset)?.auto('format').toString(),
        categories: cats,
        item: item,
        title: item.title,
        body: toPlainText(item.body),
        date: item._createdAt,
        imgSrc: urlFor(item.mainImage?.asset)?.auto('format').toString()
      }
    })
  }


  const renderItem = ({ item }) => (
    <>
      {
        loading && !posts ? <CustomLoader /> :
          <BlogItem
            onPress={() => goToPostDetails(item)}
            title={item.title}
            authorImgSrc={item.author?.image?.asset}
            body={item.body[0]?.children[0]?.text}
            date={item._createdAt}
            imgSrc={item.mainImage?.asset}
            categories={item.categories}
          />
      }</>
  )

  return (
    <View className="bg-zinc-900 flex-1"
      style={{
        width: '100%',
        height: '100%',
        maxHeight: screenHeight,
      }}>
      {error ?
        <H1 className="text-white text-center">{error}</H1> :
        <Article>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={posts}
            renderItem={(item) => renderItem(item)}
            keyExtractor={({ item }, i) => i.toString()}
            ItemSeparatorComponent={() => <View className='h-10' />}
            maxToRenderPerBatch={Math.ceil(screenHeight / 140)}
            initialNumToRender={Math.ceil(screenHeight / 140)}
            contentContainerStyle={{
              flexGrow: 1,
              position: 'relative',
              paddingTop: isWeb ? 100 : 20,
              paddingBottom: 100,
              alignItems: 'center'
            }}
            className="container p-4 self-center text-white bg-zinc-900 max-w-7xl "
            extraData={posts}
          />
        </Article>

      }
    </View>
  )
}


export default HomeScreen