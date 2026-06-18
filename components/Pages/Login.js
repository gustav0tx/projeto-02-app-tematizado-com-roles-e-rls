import { Pressable } from "react-native";
import { Button, Text, TextInput, View } from "react-native-web";
import { theme } from "../../style/themes";
import { supabase } from "../../services/supabase";
import { useState } from "react";


export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  async function handleCadaster() {

    const { error, data } =
      await supabase.auth.signUp({
        email,
        password
      })

    const id = await data.user.id

    if (!error) {

      const { error, data } = await supabase
        .from('positions')
        .insert([{
          id: id,
          role: role
        }])

      if (!error && role.trim().toLowerCase() == 'aluno') {
        navigation.navigate('Aluno')
      }
      else if (!error && role.trim().toLowerCase() == 'professor') {
        navigation.navigate('Prof')
      } else {
        console.log(error)
      }

    } else {
      console.log(error)
    }
  }

  async function handleLogin() {
    
    const { error, data } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      })

    if (!error && role.trim().toLowerCase() == 'aluno') {
        navigation.navigate('Aluno')
      }
      else if (!error && role.trim().toLowerCase() == 'professor') {
        navigation.navigate('Prof')
      } else {
        console.log(error)
      }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20, backgroundColor: theme.colors.background }}>

      <TextInput placeholder="Email" style={{ borderWidth: 2, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: theme.colors.textButton }} value={email} onChangeText={setEmail} />

      <TextInput placeholder="Senha" style={{ borderWidth: 2, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: theme.colors.textButton }} value={password} onChangeText={setPassword} />

      <TextInput placeholder="Cargo" style={{ borderWidth: 2, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: theme.colors.textButton }} value={role} onChangeText={setRole} />

      <Pressable style={{ backgroundColor: theme.colors.button, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12 }} onPress={handleCadaster}>
        <Text style={{ color: theme.colors.textButton }}>Cadastrar</Text>
      </Pressable>

      <Pressable style={{ backgroundColor: theme.colors.button, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12 }} onPress={handleLogin} >
        <Text style={{ color: theme.colors.textButton }}>Login</Text>
      </Pressable>

    </View>
  )
}