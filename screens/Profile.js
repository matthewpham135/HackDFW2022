import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton } from "../components/Button"
import { FocusedStatusBar } from "../components"
import BackHeader from "../components/BackHeader";
import ProfileLink from "../components/ProfileLink"

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

      }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <BackHeader navigation={navigation} />

      <View style={{

        width: "100%",
        height: "12%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "center"
      }}>      
        <Text style={{
          textAlign: "center",

          fontSize: "40%"
        }}>
          Hi Lisa!
        </Text>
      </View>
      <View style={{

        width: "100%",
        height: "15%",
        display: "flex",
        flexDirection: "row",
      }}>
        <Image source={assets.leaf} style={{
          height: "50%",
          width: "30%",
          aspectRatio: 1,

        }}/>
        <View style={{
          width: "60%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

        }}>
          <Text style={{textAlign: "left", fontSize: 40}}>340 Kg</Text>
          <Text style={{textAlign: "lect", fontSize: 25}}>CO2 emission saved</Text>
        </View>
        
      </View>
      
      <View style={{
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row'

      }}>
        <View style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'col', justifyContent: 'center'}}>
          <Text style={{ textAlign: 'center', fontFamily: 'Roboto', fontSize: '30px', color: 'green'}}>2</Text>
          <Text style={{ textAlign: 'center', fontFamily: 'Roboto', fontSize: '30px'}}>Requested</Text> 
        </View>
        <View style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'col', justifyContent: 'center'}}>
          <Text style={{ textAlign: 'center', fontFamily: 'Roboto', fontSize: '30px', color: 'green'}}>1</Text>
          <Text style={{ textAlign: 'center', fontFamily: 'Roboto', fontSize: '30px'}}>Accepted</Text>
        </View>
      </View>

      <View style={{
        width: "100%",
        height: "35%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center"
      }}>      
          <ProfileLink text="Saved Items"/>
          <ProfileLink text="Purchase History"/>
          <ProfileLink text="Payments"/>
          <ProfileLink text="Impact Statement"/>
          <ProfileLink text="Help"/>
      </View>

    </SafeAreaView>
  );
};

export default Profile;