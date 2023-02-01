import { View, Text } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Dimensions } from 'react-native'
const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id');

  const { width, height } = Dimensions.get('screen')

  return (
    <View sx={{ flex: 1, alignItems: 'center', bg: 'red', height: height, width: width }}>
      <Text
        sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
      >{`User ID: ${id}`}</Text>

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
