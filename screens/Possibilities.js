

import React, { useState } from "react";
import { View, SafeAreaView, FlatList, Text, Image } from "react-native";
import { COLORS, PossibilityData, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar, CircleButton } from "../components";
import PossibilityCard from "../components/PossibilityCard";


const Home = ({navigation}) => {
    const [possibilityData, setPossibilityData] = useState(PossibilityData);
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <FocusedStatusBar backgroundColor={COLORS.primary} />
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
    </View>
    

    <View style={{ flex: 1 }}>
      <View style={{ zIndex: 0, height: "100%" }}>
        <FlatList
          numColumns="2"
          data={PossibilityData}
          renderItem={({ item }) => 
            <PossibilityCard data={item} navigation={navigation} />}
          
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
    
  </SafeAreaView>
  );
};

export default Home;