import { styled } from 'nativewind'
import {
  ScrollView as NativeScroll, View, Image as RNImage,
  FlatList as RNFlatlist, ImageBackground as RNImageBackground
} from 'react-native'
import {
  Div as RNDiv, A as ARNA, Footer as RNFooter, H5 as RNH5, H4 as RNH4,
  H3 as RNH3, H2 as RNH2, I as RNI, LI as RNLI, UL as RNUL,
  Span as RNSpan, HR as RNHR, Section as RNSection, Article as RNArticle
} from '@expo/html-elements';
import { MotiPressable as RNMotiPressable } from 'moti/interactions';


export const Row = styled(View, "flex-row")
export const MotiPressable = styled(RNMotiPressable)
export const ScrollView = styled(NativeScroll)
export const ImageBackground = styled(RNImageBackground)
export const Div = styled(RNDiv)
export const A = styled(ARNA)
export const Footer = styled(RNFooter)
export const H5 = styled(RNH5)
export const H4 = styled(RNH4)
export const H3 = styled(RNH3)
export const H2 = styled(RNH2)
export const I = styled(RNI)
export const LI = styled(RNLI)
export const UL = styled(RNUL)
export const Span = styled(RNSpan)
export const HR = styled(RNHR)
export const Image = styled(RNImage)
export const Article = styled(RNArticle)
export const Section = styled(RNSection)
export const FlatList = styled(RNFlatlist)