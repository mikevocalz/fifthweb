/* eslint-disable react-hooks/rules-of-hooks */
import { createParam } from 'solito'
import { useLayoutEffect } from 'react'
import { useNavigation, } from "expo-router";
import { Text, TextLink } from 'app/design/typography'
import { Article, H1, Image, Row, ScrollView, Span, LI, UL } from 'app/design/layout'
import { View } from 'app/design/view'
import { Dimensions, Platform } from 'react-native'
import RichTextComponent from 'app/components/RichTextComponent';
import { urlFor } from '../../sanity';
import { PortableText, toPlainText } from '@portabletext/react'

const { useParam } = createParam<{
  id: string,
  body: any,
  categories: any,
  title: string,
  author: any,
  authorImgSrc: string,
  item: any,
  imgSrc: string,
  date: string | any
}>()


interface Props {
  navigation: (val: string) => void;
  route: string | string[];
  item: any
}

const isWeb = Platform.OS === "web"

export function UserDetailScreen({ navigation }: Props) {

  //const { categories } = item

  const [id] = useParam('id');
  const [body, setBody] = useParam('body')
  //const [categories] = useParam('categories')
  const [title] = useParam('title')
  const [author] = useParam('author')
  //const [item] = useParam('item')
  const [authorImgSrc] = useParam('authorImgSrc')
  const [imgSrc] = useParam('imgSrc')
  const [date] = useParam('date')


  const screenHeight = Dimensions.get('window').height
  const screenWidth = Dimensions.get('window').width


  console.log('Here Cat:', item.body)


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
  //console.log('Params:', authorImgSrc)


  return (
    <ScrollView className="flex-1 container bg-zinc-900 p-3  whitespace-nowrap overflow-auto scrollbar-hide "
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        width: '100%',
        height: '100vh',
        minHeight: isWeb ? '100vh' : '100%',
        paddingTop: isWeb ? 50 : 20,
        paddingBottom: 400,
        alignItems: 'center',
        flexGrow: 1,
        position: 'relative',

      }}>


      <Text
        className='text-center mb-5 font-bold text-white text-xl'
      >{title}</Text>


      <Image
        className='object-cover object-center aspect-video w-full max-w-6xl rounded-3xl'
        source={
          {
            uri: imgSrc
          }
        }
        resizeMode='cover'
        alt="blog image"
      />

      <Row className='continer flex-row items-center h-10 my-6 justify-between w-[90%]  justify-center'>
        <Row className='relative flex-row items-center space-x-4 '>
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
        <View>
          <Text className='text-center  font-bold text-white text-lg'>
            {new Date(date).toLocaleDateString(
              "en-US", {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }
            )}</Text>
        </View>
      </Row>

      {/* <Text
        className='text-left mb-5 font-bold text-white text-xl'
      >{body}</Text> */}

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


      {/* {categories || categories <= 0 ?
        <Row className='space-x-2 items-center'>
          {categories.map((category, i) => (
            <View key={i} className='bg-white rounded-3xl w-20 h-6 justify-center mr-4'>
              <Text className='py-1 px-4 text-md font-bold text-black text-center'>{category.title}</Text>
            </View>
          ))}
        </Row>
        : null
      } */}


      <View className='container h-[100%] max-w-6xl z-10 rounded-xl'>
        <PortableText
          value={
            item?.body
          }
        //components={RichTextComponent}
        />
      </View>



      <TextLink href="/">👈 Go Home</TextLink>
    </ScrollView >
  )
}
