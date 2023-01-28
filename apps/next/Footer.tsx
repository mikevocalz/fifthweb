import { A, Footer, H4, H5, HR, I, LI, Span, UL } from "app/design/layout";
import { View } from 'app/design/view'

import React, { FC } from "react";
import { Text } from "react-native";


const FooterComponent: FC = () => {
  return (
    <View className='bg-red-800 relative min-h-[100px] min-w-[100vw] flex-row  justify-center' >
      <Text>hello</Text>
    </View >
  );
};

export default FooterComponent;


