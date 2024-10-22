import { Image, ImageProps, Text, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';

interface Props {
  item: {
    id: number
    title: string
    viewCountText:string
    thumbnail: ImageProps
  }
}

export function ShortVideoCard({item}: Props) {
  return (
    <View className="relative h-64 w-40 mr-3 flex justify-between">
      <Image source={item.thumbnail} className="h-full w-full rounded-xl absolute" />

      <View className="flex-row justify-end pt-3 pr-1">
        <TouchableOpacity>
          <Feather name="more-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View className="p-2">
        <Text className="text-white shadow-lg font-bold text-sm">
          {item.title}
        </Text>
        <Text className="text-white shadow-md font-extrabold text-xs">{item.viewCountText}</Text>
      </View>
    </View>
  )
}