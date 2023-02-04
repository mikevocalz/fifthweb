/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState, useMemo } from 'react'
import { View } from 'app/design/view'
import { MotiLink } from 'solito/moti'
import { Skeleton } from 'moti/skeleton'
import { MotiView } from 'moti'
import { Dimensions, Platform } from 'react-native'


const isWeb = Platform.OS === "web"


function Spacer({ height = 16, width }) {
  return <MotiView style={{ height, width }} />
}


export default function CustomLoader(): JSX.Element {
  return (
    <>
      <MotiView
        transition={{
          type: 'timing',
        }}
        style={{
          flexGrow: 1,
          alignItems: 'flex-start',
          flexDirection: isWeb ? 'row' : 'column',
          width: '100vw',
          maxWidth: 800,
          maxHeight: isWeb ? 210 : 300,
          padding: 16,
          borderRadius: 20
        }}
        animate={{ backgroundColor: '#000000' }}
      >
        <>
          <Skeleton height={isWeb ? '100%' : 95} width={isWeb ? 200 : '100%'} />
          {isWeb && <Spacer height={8} width={10} />}
        </>
        <View style={{ flex: 1, marginLeft: isWeb ? 10 : null, flexDirection: 'column', justifyContent: isWeb ? 'space-evenly' : null }}>
          <Spacer height={isWeb ? 4 : 8} width={undefined} />
          <Skeleton width={'65%'} height={20} />
          <Spacer height={isWeb ? 18 : 6} width={undefined} />
          <Skeleton width={'100%'} height={20} />
          <Spacer height={isWeb ? 18 : 6} width={undefined} />
          <Skeleton width={'100%'} height={20} />
          <Spacer height={isWeb ? 18 : 6} width={undefined} />
          <Skeleton width={'100%'} height={20} />
          <Spacer height={isWeb ? 18 : 6} width={undefined} />
          <Skeleton width={'40%'} height={20} />
        </View>
      </MotiView>
    </>
  )
}

