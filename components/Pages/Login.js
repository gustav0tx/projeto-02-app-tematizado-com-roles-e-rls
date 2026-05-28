import { Pressable } from "react-native";
import { Text, TextInput, View } from "react-native-web";
import { theme } from "../../style/themes";
import { supabase } from "../../services/supabase";


export default function Login({ navigation }) {

    const [email, setEmail]

    async function handleLogin() {

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password
      })

    if (!error) {
      navigation.navigate('Base')
    }
  }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20, backgroundColor: theme.colors.background }}>

            <TextInput placeholder="Email" style={{ borderWidth: 2, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: theme.colors.textButton }} />

            <TextInput placeholder="Senha" style={{ borderWidth: 2, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: theme.colors.textButton }} />

            <Pressable style={{ backgroundColor: theme.colors.button, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12 }}>
                <Text style={{ color: theme.colors.textButton }}>Cadastrar</Text>
            </Pressable>

            <Pressable style={{ backgroundColor: theme.colors.button, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12 }}>
                <Text style={{ color: theme.colors.textButton }}>Login</Text>
            </Pressable>

        </View>
    )
}