import { styled } from 'nativewind'
import { ScrollView as NativeScroll, View, Image as RNImage } from 'react-native'
import {
  Div as RNDiv, A as ARNA, Footer as RNFooter, H5 as RNH5, H4 as RNH4,
  I as RNI, LI as RNLI, UL as RNUL, Span as RNSpan, HR as RNHR,
} from '@expo/html-elements';

export const Row = styled(View, "flex-row")

export const ScrollView = styled(NativeScroll)

export const Div = styled(RNDiv)
export const A = styled(ARNA)
export const Footer = styled(RNFooter)
export const H5 = styled(RNH5)
export const H4 = styled(RNH4)
export const I = styled(RNI)
export const LI = styled(RNLI)
export const UL = styled(RNUL)
export const Span = styled(RNSpan)
export const HR = styled(RNHR)
export const Image = styled(RNImage)
