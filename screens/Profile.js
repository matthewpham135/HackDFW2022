import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton } from "../components/Button"
import { FocusedStatusBar } from "../components"
import BackHeader from "../components/BackHeader";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Profile = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ 
        flex: 1, 
        flexDirection: "column", 
        justifyContent:"flex-start",
        backgroundColor: "orange"
      }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <BackHeader navigation={navigation} />
      <View style={{
        backgroundColor:"blue",
        width: "100%",
        height: "12%"
      }}>      
      
      </View>
      <View style={{
        backgroundColor:"purple",
        width: "100%",
        height: "15%"
      }}>

        
      </View>

      <View style={{
        backgroundColor:"green",
        width: "100%",
        height: "35%"
      }}>      
      
      </View>

    </SafeAreaView>
  );
};

export default Profile;