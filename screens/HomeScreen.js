import { View, Text,Image, TouchableOpacity, ScrollView, } from 'react-native'
import * as Animatable from "react-native-animatable";
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeroImage } from "../assets";
export default function HomeScreen() {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : false
        })
    }, [])
      return (
     
    <SafeAreaView className = "bg-white relative flex-1">
        
        {/** Section 1 */}
     <View className="flex-row px-4 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
            <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
     </View>
     
      {/* Second Section */}
      <View className="px-4 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[38px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[34px] font-bold">
          Good Moments
        </Text>

        <Text className="text-[#3C6072] text-base z-10">
        Embark on a journey of a lifetime and
       discover the world's wonders and beauty.
        </Text>
      </View>

       {/* Circle Section */}
       <View className="w-[380px] h-[360px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36 z-0"></View>
      <View className="w-[380px] h-[360px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36 z-0"></View>

     {/* Image container */}
     <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />

<TouchableOpacity
          onPress={() =>{navigation.navigate("Discover")}}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
        >
           <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}