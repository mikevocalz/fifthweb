import {
  SourceCodePro_400Regular,
  useFonts,
} from "@expo-google-fonts/source-code-pro";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Provider } from 'app/provider'
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useColorScheme, LogBox } from "react-native"
LogBox.ignoreLogs(['in Reanimated 2']);

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
    ...MaterialIcons.font,
    ...AntDesign.font,
    SourceCodePro_400Regular,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}


function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Provider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
        <StatusBar animated={true} style={'dark'} />
      </Provider>
    </>
  );
}
