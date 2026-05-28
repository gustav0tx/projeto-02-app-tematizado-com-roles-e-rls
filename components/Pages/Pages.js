import { View } from "react-native-web";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Profile from "./Profile";
import Cadaster from "./Cadaster";

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