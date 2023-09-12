import React from "react";
import { NavigationContainer, View } from "@react-navigation/native";

import TabRoutes from '../navigation/tab.routes'
import { LoginRoutes, StackRoutes } from "./stack.routes";

import { useAuth } from "../hooks/auth";

export default function Routes() {

    const { loged } = useAuth()

    return (
            <NavigationContainer>
                {
                    loged ?
                    <StackRoutes/>
                    :
                    <LoginRoutes />
                }
            </NavigationContainer>
    )
}