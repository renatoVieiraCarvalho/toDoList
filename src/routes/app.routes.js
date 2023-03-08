import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { Dashboard } from '../screens/Dashboard'
import { NewTask } from '../screens/NewTask'

export function AppRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="NewTask" component={NewTask} />
        </Stack.Navigator>
    )
}