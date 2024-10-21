import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { themeColors } from "../theme/colors";
import { categories, shortVideos, videos } from "../constants";
import { useState } from "react";
import { ShortVideoCard } from "../components/short-video-card";
import { VideoCard } from "../components/video-card";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <View style={{ backgroundColor: themeColors.bg }} className="flex-1 pt-4">
      <StatusBar barStyle="light-content" />

      <View className="flex-row justify-between mx-4">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require("../assets/icons/youtube.png")}
            className="h-7 w-10"
          />

          <Text className="text-white font-semibold text-xl tracking-tighter">
            YouTube
          </Text>
        </View>

        <View className="flex-row items-center space-x-3">
          <TouchableOpacity>
            <Feather name="cast" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="bell" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="search" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/photo.png")}
              className="h-7 w-7 rounded-full"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 mt-4" showsVerticalScrollIndicator={false}>
        <View className="py-2 pb-5">
          <ScrollView
            className="px-4"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category, i) => {
              let isActive = category == activeCategory;
              let textClass = isActive ? "text-black" : "text-white";
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(category)}
                  style={{
                    backgroundColor: isActive
                      ? "white"
                      : "rgba(255, 255, 255, 0.1)",
                  }}
                  className="rounded-md p-1 px-3 mr-2"
                  key={i}
                >
                  <Text className={textClass}>{category}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <VideoCard item={videos[4]} />

        <View className="mt-2 py-5 space-y-3 border-y-zinc-700 border-4 border-x-0">
          <View className="mx-4 flex-row items-center space-x-2">
            <Image
              source={require("../assets/icons/shorts.png")}
              className="h-6 w-5"
            />
            <Text className="text-white font-semibold text-lg tracking-tighter">
              Shorts
            </Text>
          </View>

          <ScrollView
            className="px-4"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {shortVideos.map((item, i) => (
              <ShortVideoCard item={item} key={i} />
            ))}
          </ScrollView>
        </View>

        <ScrollView className="mt-6" showsVerticalScrollIndicator={false}>
          {videos.map((item, i) => (
            <VideoCard key={i} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
