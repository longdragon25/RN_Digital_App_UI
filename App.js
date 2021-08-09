import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { LogBox } from "react-native";
import React from 'react';
import { SignUp } from "./screens";
import Tabs from "./navigation/tabs";
import { createStackNavigator } from "@react-navigation/stack";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

LogBox.ignoreAllLogs(true);
const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SignUp'}
            >
                <Stack.Screen name="SignUp" component={SignUp} />

                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* <Stack.Screen name="Scan" component={Scan} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
