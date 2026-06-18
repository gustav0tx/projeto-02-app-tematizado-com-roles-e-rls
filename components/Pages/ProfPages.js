import { View } from "react-native-web";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Profile";

const Drawer = createDrawerNavigator();

export default function Pages({}) {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Profile"
                component={Profile}
            />         
        </Drawer.Navigator>
    )
}