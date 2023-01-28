import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import { useNavigation } from '@react-navigation/native';



const tabs = [
  {
    name: 'TabOne',
    activeIcon: <TabBarIcon name="home" color="#fff" />,
    inactiveIcon: <TabBarIcon name="home" color="#ccc" />
  },
  {
    name: 'TabTwo',
    activeIcon: <TabBarIcon name="list-ul" color="#fff" />,
    inactiveIcon: <TabBarIcon name="list-ul" color="#ccc" />
  },
  {
    name: 'TabThree',
    activeIcon: <TabBarIcon name="camera" color="#fff" />,
    inactiveIcon: <TabBarIcon name="camera" color="#ccc" />
  },

];

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const onTabChange = ({ navigation }) => {
    navigation.navigate('Root', { screen: 'TabThree' })

  }
  return (
    <Tabs
      // tabBar={(props) => (
      //   <Tabbar
      //     tabs={tabs}
      //     tabBarContainerBackground='#000'
      //     tabBarBackground='#18181b'
      //     activeTabBackground='#93278F'
      //     labelStyle={{ color: '#662D91', fontWeight: '600', fontSize: 11 }}
      //     onTabChange={() =>
      //       onTabChange
      //     }
      //     {...props}

      //   />
      // )
      // }
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        headerStyle: {
          backgroundColor: '#93278F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={({ navigation }): any => ({
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={'#ff0000'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        })}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Tab Three",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs >
  );
}

//
