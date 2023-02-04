/* eslint-disable react-hooks/rules-of-hooks */
import { createParam } from 'solito'
import { useLayoutEffect } from 'react'
import { useNavigation, } from "expo-router";
import { Text, TextLink } from 'app/design/typography'
import { Image, Row, ScrollView, } from 'app/design/layout'
import { View } from 'app/design/view'
import { Dimensions, Platform } from 'react-native'
// @ts-ignore  
import { PortableText } from '@portabletext/react-native'
//import { PortableText } from '@portabletext/react-'

import RichTextComponent from 'app/components/RichTextComponent';
import { urlFor } from '../../sanity';

const { useParam } = createParam<{
  id: string,
  body: any,
  categories: any,
  title: string,
  author: any,
  authorImgSrc: string,
  item: any,
  imgSrc: string
}>()


interface Props {
  navigation: (val: string) => void;
  route: string | string[];
}

const isWeb = Platform.OS === "web"

export function UserDetailScreen({ navigation }: Props) {

  //const { title, imgSrc, date, authorImgSrc, _id, } = route.params

  const [id] = useParam('id');
  const [body, setBody] = useParam('body')
  const [categories] = useParam('categories')
  const [title] = useParam('title')
  const [author] = useParam('author')
  const [item] = useParam('item')
  const [authorImgSrc] = useParam('authorImgSrc')
  const [imgSrc] = useParam('imgSrc')


  const screenHeight = Dimensions.get('window').height
  const screenWidth = Dimensions.get('window').width



  console.log('Here i Am:', JSON.stringify(item))


  if (!isWeb) {
    const nav = useNavigation()

    useLayoutEffect(() => {
      nav.setOptions({
        headerTitle: () => <View className='justify-center align-center h-20'>
          <Text
            className='text-center mb-10 font-bold text-[16px] text-black text-center self-center justify-center'
          >{id}</Text>
        </View>
      })
    }, [id, nav])
  }


  //console.log("routes:", JSON.stringify(route.params.categories))
  console.log('Params:', authorImgSrc)


  return (
    <ScrollView className="bg-zinc-900 flex-1 p-3"
      contentContainerStyle={{
        width: '100%',
        height: '100%',
        maxHeight: screenHeight,
        paddingTop: isWeb ? 50 : 20,
        alignItems: 'center'
      }}>


      <Text
        className='text-center mb-5 font-bold text-white text-xl'
      >{title}</Text>


      <Image
        className='object-cover object-left aspect-video w-[80vw]  max-w-6xl '
        source={
          {
            uri: imgSrc
          }
        }
        resizeMode='cover'
      //alt="blog image" 
      />

      <Row className='container flex-row  items-center h-10 my-6 space-x-4'>
        <Text className='text-center  font-bold text-white text-lg'>{author}</Text>
        <Image
          className=" object-fit object-center h-10 w-10 rounded-lg "
          source={
            {
              uri: authorImgSrc
            }
          }
          alt="user image" />
      </Row>


      {/* <Text className="text-center mb-2 font-regular text-[16px] text-white flex-wrap">{body}</Text> */}


      {/* <Row className='space-x-2 items-center'>
        <>
          {
            categories.map((category, i) => {
              return <View key={i} className='bg-white rounded-3xl  justify-center mr-'>
                <Text className='py-1 px-4 text-sm font-bold text-gray-900 text-center'>{category}</Text>
              </View>
            }
            )
          }</>
      </Row> */}




      <PortableText
        value={body}
        components={RichTextComponent}
      // onMissingComponent={(message, options) => {
      //   <Text>{message}</Text>
      // }}
      />

      <TextLink href="/">👈 Go Home</TextLink>
    </ScrollView>
  )
}
