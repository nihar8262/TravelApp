import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import tw from "twrnc";
import { theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, AntDesign,Ionicons } from "@expo/vector-icons";
import {
  categoriesData,
  destinationData,
  sortCategoryData,
} from "../constants";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function DestinationScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState(false);
  return (
    <View style={tw`bg-white flex-1`}>
      {/* destination image */}
      <Image source={item.image} style={{ width: wp(100), height: hp(55) }} />
      <StatusBar style="light" />

      {/* back button */}
      <SafeAreaView
        style={tw`flex-row justify-between items-center w-full absolute`}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`p-3 rounded-full ml-4 mt-12  bg-[#FFFFFF66]`}
        >
          <FontAwesome name="chevron-left" size={22} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => toggleFavorite(!isFavorite)}
          style={tw`p-3 rounded-full mr-4 mt-12  bg-[#FFFFFF66]`}
        >
          <FontAwesome
            name="heart"
            size={22}
            color={isFavorite ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>

      {/* title & description % booking button */}
      <View
        style={tw`px-5 flex flex-1 justify-between bg-white pt-8 rounded-t-3xl -mt-14`}
      >
        <ScrollView showsVerticalScrollIndicator={false} style={tw`py-5`}>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`font-bold text-xl flex-1 text-neutral-700`}>
              {item.title}
            </Text>
            <Text
              style={{ fontSize: wp(7), color: theme.text, fontWeight: 500 }}
            >
              {item.price}
            </Text>
          </View>
          <Text
            style={{
              fontSize: wp(3.7),
              color: "rgb(64 64 64)",
              marginBottom: 1,
            }}
          >
            {item.longDescription}
          </Text>
          <View style={tw`flex-row justify-between mx-1`}>
            <View style={tw` flex-row items-start px-2`}>
              <AntDesign name="clockcircle" size={24} color="skyblue" />
              <View style={tw`flex py-2 `}>
                <Text style={tw` text-lg font-bold text-neutral-700`}>
                  {item.duration}
                </Text>
                <Text style={tw` text-neutral-600`}>Duration</Text>
              </View>
            </View>

            <View style={tw` flex-row items-start px-2`}>
            <Ionicons name="location-sharp" size={24} color="red" />
              <View style={tw`flex py-2 `}>
                <Text style={tw` text-lg font-bold text-neutral-700`}>
                  {item.distance}
                </Text>
                <Text style={tw` text-neutral-600`}>Distance</Text>
              </View>
            </View>

            <View style={tw` flex-row items-start px-2`}>
            <Ionicons name="sunny" size={24} color="orange" />
              <View style={tw`flex py-2 `}>
                <Text style={tw` text-lg font-bold text-neutral-700`}>
                  {item.weather}
                </Text>
                <Text style={tw` text-neutral-600`}>Sunny</Text>
              </View>
            </View>


          </View>
        </ScrollView>

        <TouchableOpacity style={tw`bg-orange-500 mb-4 mx-auto flex justify-center items-center rounded-full w-50 h-16`}>
            <Text style={{fontSize:wp(5.5),color:'white',fontWeight:500}}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
