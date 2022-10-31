import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import {Clinician} from "../interfaces";
import LoginScreen from "../screens/LoginScreen";

export type StackParamsList = {
    Home: undefined;
    Details: { clinician: Clinician };
    Login: undefined;
}

const Stack = createNativeStackNavigator<StackParamsList>();

function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerBackTitleVisible: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    title: "Clinicians"
                }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{
                    title: "Clinician Details",
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { MainStack, AuthStack };