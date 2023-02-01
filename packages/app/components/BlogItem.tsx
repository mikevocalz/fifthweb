/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from 'react'
import { H1, P, Text, TextLink } from 'app/design/typography'
import { H4, H5, Row, Image, ScrollView, A, H3, Section, Article, FlatList, Div } from 'app/design/layout'
import { View } from 'app/design/view'
import { MotiLink } from 'solito/moti'
import { Dimensions, Platform } from 'react-native'
import { urlFor } from '../sanity'
import { MotiPressable } from 'moti/interactions'
import { MotiView } from 'moti'


interface BlogItemProps {
  id?: string;
  imgSrc: string;
  authorImgSrc?: string;
  title: string;
  descritption: string | string[]
  date: string;
  categories: string | string[]
}

export const BlogItem = ({ title, imgSrc, description, date, authorImgSrc, categories }) => {
  const screenHeight = Dimensions.get('window').height
  const screenWidth = Dimensions.get('window').width

  return (
    <>
      <MotiPressable
        onPress={() => null}
        style={{
          flexGrow: 1,
          width: '96%',
          alignSelf: 'center',
        }}
        animate={useMemo(
          () => ({ hovered, pressed }) => {
            'worklet'

            return {
              opacity: hovered || pressed ? 0.5 : 1,
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,

            }
          },
          []
        )}
      >
        <View className=" flex overflow-hidden flex-col items-center bg-black border border-black rounded-xl shadow md:flex-row md:w-[100%]  ">
          <Image
            className="flex-1 object-cover object-left aspect-video	 w-[100%]   h-full md:h-[100%] md:w-48 lg:object-center "
            source={
              {
                uri: urlFor(imgSrc)?.auto('format').toString()
              }
            }

            alt="blog image" />

          <View className="container flex-1 flex-col justify-between p-5 bg-black">

            <Text numberOfLines={1} className="mt-2 mb-2 text-white text-lg md:text-md font-bold tracking-tight ">{title}</Text>
            <Text numberOfLines={4} style={{ flexWrap: 'wrap', }}
              className="mb-2 font-regular text-[16px] text-gray-200">{description}</Text>
            <Row className='flex-row justify-between my-5 items-center'>
              <Text className="mb-2 font-light text-gray-400 text-[16px]">{new Date(date).toLocaleDateString(
                "en-US", {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }
              )}
              </Text>
              <View className='bg-white rounded-3xl   justify-center mr-4'>
                <Text className='py-[8px] px-6 text-sm font-bold text-gray-900 text-center'>Read More</Text>
              </View>
            </Row>
            <Row className='flex-row justify-between items-center'>
              <View className=' z-10 h-10 w-10 '>
                <Image
                  className="flex-1 object-cover object-left h-10 w-10 rounded-lg "
                  source={
                    {
                      uri: urlFor(authorImgSrc)?.auto('format').toString()
                    }
                  }

                  alt="blog image" />
              </View>

              {categories.map((category, i) => (
                <View key={i} className='bg-white rounded-3xl  justify-center mr-4'>
                  <Text className='py-1 px-4 text-sm font-bold text-gray-900 text-center'>{category.title}</Text>
                </View>
              ))}</Row>
          </View>
        </View>
      </MotiPressable>
    </>


  )
}