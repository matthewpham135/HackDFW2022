import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

import {CircleButton} from "../components/Button"


const HomeHeader = ({ onSearch, navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "none",
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: "80%", height: 30}}
        />
        <View style={{ width: 45, height: 45 }}>
          <CircleButton
            imgUrl={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%"}}
            handlePress = {() => {navigation.navigate('Profile', {})} }
          />
        </View>
      </View>

     

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search Clothing"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;