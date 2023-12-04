import { Stack } from "expo-router";
import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_700Bold,
} from "@expo-google-fonts/urbanist";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [fontLoaded, fontError] = useFonts({
    UrbanistRegular: Urbanist_400Regular,
    UrbanistBold: Urbanist_700Bold,
  });

  if (!fontLoaded && !fontError) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "DEVember" }} />
    </Stack>
  );
}
