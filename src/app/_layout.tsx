import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { themeColors } from "../theme/colors";

export default function Layout() {
  return (
    <SafeAreaView style={{ backgroundColor: themeColors.bg }} className='flex-1'>
      <Slot />
    </SafeAreaView>
  );
}
