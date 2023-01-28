import { H1, P, Text, TextLink } from 'app/design/typography'
import { View } from 'app/design/view'
import { Row, ScrollView } from 'app/design/layout'
import { Dimensions, Platform } from 'react-native'
import { MotiLink } from 'solito/moti'
import { WebView } from 'react-native-webview';
import { Div, A } from '@expo/html-elements';

const iframeString = `
<iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="100%"
    height="500px"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
</iframe>

`
const web = Platform.OS === 'web'

export function AboutScreen() {
  const screenHeight = Dimensions.get('window').height
  const screenWidth = Dimensions.get('window').width

  return (
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
          overflow: 'hidden',
          flexGrow: 1,
          position: 'relative',
          paddingBottom: 100,
          alignItems: 'center'
        }}
        className="flex-1 p-3 self-center text-white bg-zinc-900 max-w-7xl "
      >

        <H1 className="text-white text-center">About</H1>

        {web ?

          <>
            <iframe id="inlineFrameExample"
              title="Inline Frame Example"
              width="100%"
              height="500px"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
            </iframe>
          </>

          :
          <WebView
            scalesPageToFit={true}
            bounces={false}
            javaScriptEnabled
            style={{ height: 300, width: 300 }}
            contentInsetAdjustmentBehavior='automatic'
            containerStyle={{
              flexGrow: 1,
              height: 200, width: 300
            }}
            source={{
              html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head>
                    <body>
                      <div id="baseDiv">${iframeString}</div>
                    </body>
                  </html>
            `,
            }}
            automaticallyAdjustContentInsets={false}
          />
        }
      </ScrollView>
    </View>
  )
}