import React from "react";
import { View, Image } from "react-native" 
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Cam from "./screens/Cam";
import Details from "./screens/Details";
import Profile from "./screens/Profile"
import { TouchableOpacity } from "react-native-gesture-handler";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cam" component={Cam} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
        <View style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "10%",
          backgroundColor:"white",
          blurRadius: 90,
          translucent:"true",
          borderRadius: 20,
          shadowColor: "#000000",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 1
          }
        }}>
          <TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity>
            
          </TouchableOpacity>
          <TouchableOpacity>
            
          </TouchableOpacity>
        </View>
    </NavigationContainer>
  );
};

export default App;