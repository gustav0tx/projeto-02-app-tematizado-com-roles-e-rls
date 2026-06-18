import { View } from "react-native-web";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Profile";
import AlunoNotas from "./AlunoNotas";

const Drawer = createDrawerNavigator();

export default function Pages({}) {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Profile"
                component={Profile}
            />         
            <Drawer.Screen 
                name="Notas"
                component={AlunoNotas}
            />         
        </Drawer.Navigator>
    )
}