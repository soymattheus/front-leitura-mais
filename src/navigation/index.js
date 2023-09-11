import { NavigationContainer } from "@react-navigation/native";

import TabRoutes from '../navigation/tab.routes'
import { StackRoutes } from "./stack.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}