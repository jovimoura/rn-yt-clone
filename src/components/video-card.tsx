import { Image, ImageProps, Text, View } from "react-native"
import Feather from '@expo/vector-icons/Feather';

interface Props {
  item: {
    id: number
    title: string
    channelTitle: string
    thumbnail: ImageProps
    avatar: ImageProps
    viewCount: string
    duration: string
    publishedText: string
  }
}

export function VideoCard({ item }: Props) {
  return (
    <View className="mb-4">
      <Image source={item.thumbnail} className="h-52 w-full" />

      <View className="items-end mr-2 mb-5 -mt-6">
        <View className="bg-black rounded px-1">
          <Text className="text-white font-semibold text-xs">
            {item.duration}
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between items-center pb-5 space-x-3 mx-2">
        <Image source={item.avatar} className="h-9 w-9 rounded-full" />
        <View className="flex-1 space-y-1">
          <Text className="text-white font-semibold">{item.title}</Text>
          <Text className="text-zinc-400 text-xs">
            {item.channelTitle} · {item.viewCount} · {item.publishedText}
          </Text>
        </View>

        <View className="self-start">
          <Feather name="more-vertical" size={20} color="white" />
        </View>
      </View>
    </View>
  )
}