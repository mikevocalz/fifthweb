import { useRouter } from 'next/router'
import React, { ReactNode, Fragment } from 'react'
import { Link } from 'solito/link'
import { MotiLink } from 'solito/moti'

import { View } from '../../design/view';
import { SolitoImage } from 'solito/image';
import Logo from './../../../../apps/expo/assets/images/fifth-logo.svg';
import FooterComponent from '../../../../apps/next/Footer';

import { MaterialIcons } from '@expo/vector-icons';
import { Text } from 'app/design/typography'
import { useWindowDimensions } from 'react-native'
import { StacksProvider, Hidden } from '@mobily/stacks';
import { ScrollView } from 'app/design/layout';


const tabs: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
  protected?: boolean
}> = [
    {
      pathname: '/',
      isActive: (pathname) => pathname === '/',
      name: 'Home',
    },
    {
      pathname: '/about',
      isActive: (pathname) => pathname.startsWith('/about'),
      name: 'About',
      protected: false,
    },
    {
      pathname: '/contact',
      isActive: (pathname) => pathname.startsWith('/contact'),
      name: 'Contact',
    },
  ]



// this will only run on Web
export function WebLayout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter()


  const dimensions = useWindowDimensions()
  const { width } = dimensions

  return (
    <>
      <StacksProvider spacing={0} breakpoints={[['mobile', 0], ['tablet', 600], ['desktop', 992]]}>

        <View
          className='bg-black h-[70px] sticky top-0 z-10 pb-70 px-3 flex-row items-center justify-center' >
          <View
            className='flex-1 h-[70px] flex-row items-center justify-center max-w-7xl justify-between '>
            <Link
              href={'/'}
              hrefAttrs={{
                target: '_blank',
                rel: 'noreferrer',
              }}
            >
              <SolitoImage
                alt='pruLTD-logo'
                src={Logo}
                resizeMode='contain'
                width={300} height={110}
                style={{
                  marginTop: 40,
                  marginLeft: -68,
                  alt: 'pruLTD-logo',
                  height: 110,
                  width: 300
                }}
              />
            </Link>

            <View
              className='flex-row items-end gap-3 z-10'
            >
              {tabs.map((tab) => {
                const active = tab.isActive(pathname)
                // if (tab.protected && !auth) {
                //   return null
                // }
                return (
                  <Fragment key={tab.pathname}>
                    <Hidden below={'tablet'}>
                      <MotiLink
                        href={tab.pathname}
                        animate={({ hovered, pressed }) => {
                          'worklet'

                          return {
                            scale: pressed ? 0.95 : hovered ? 1.2 : 1,
                          }
                        }}
                        transition={{
                          type: 'timing',
                          duration: 150,
                        }}
                      >
                        <Text selectable={false}
                          className={`mr-4 text-3xl font-bold font-[Reckoner-Bold] tracking-widest leading-90
    ${active ? 'text-[#93278F]' : 'text-[#fff]'}
    ${active ? 'font-[Reckoner]' : 'font-[Reckoner]'}
    `}        >
                          {tab.name}
                        </Text>
                      </MotiLink>

                    </Hidden>

                  </Fragment>
                )
              })}
              <Hidden above={'mobile'}>
                <MaterialIcons
                  name='menu'
                  size={40}
                  color='#fff'
                  onPress={() => null}
                />
              </Hidden>
            </View>
          </View>
        </View>

        <View className="flex items-center min-h-screen bg-zinc-900 mt-0 text-white">
          {children}


          <FooterComponent />
        </View>
      </StacksProvider>
    </>
  )
}
