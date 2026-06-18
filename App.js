import { Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from './components/Pages/Login';
import AlunoPages from './components/Pages/AlunoPages';
import ProfPages from './components/Pages/ProfPages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Aluno'
            component={AlunoPages}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='Login'
            component={Login}
            options={{
              title: 'Tela de login',
              headerShown: true
            }}
          />
          <Stack.Screen 
            name='Prof'
            component={ProfPages}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

