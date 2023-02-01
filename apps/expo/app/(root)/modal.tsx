/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from 'react'
import { H1, P, Text, TextLink } from 'app/design/typography'
import { H4, H5, Row, Image, ScrollView, Div, A, H3, Section, Article } from 'app/design/layout'
import { View } from 'app/design/view'
import { MotiLink } from 'solito/moti'
import { Dimensions, Platform } from 'react-native'
import sanityClient from '../../sanity'
import { urlFor } from '../../sanity'
import axios from 'axios';
import { Skeleton } from 'moti/skeleton'
import { MotiPressable } from 'moti/interactions'
import { MotiView } from 'moti'

export default function ModalScreen() {
  const screenHeight = Dimensions.get('window').height
  const screenWidth = Dimensions.get('window').width

  return (
    <>
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
            alignItems: 'center',
            //paddingHorizontal: 10
          }}
          className="container p-3 self-center text-white bg-zinc-900 max-w-7xl "
        >

          <H1 className="text-white text-center">Home</H1>
        </ScrollView>
      </View>
    </>
  );
}

