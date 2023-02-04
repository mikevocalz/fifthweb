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




function UserLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Stack
        screenOptions={{
          headerTitle: 'hello'
        }}
      >
        <Stack.Screen name="(id)" options={{ headerShown: false }} />

      </Stack>

    </>
  );
}
