import { Pressable } from "react-native";
import { Button, FlatList, Text, TextInput, View } from "react-native-web";
import { theme } from "../../style/themes";
import { supabase } from "../../services/supabase";
import { useEffect, useState } from "react";


export default function AlunoNotas({ navigation }) {

    
    const [notas, setNotas] = useState({})

    const getNotas = async () => {
        const { data, error } = await supabase
            .from('alunos')
            .select('*')
        
        if(!error) {
            setNotas(data)
        } else {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getNotas()
    }, [])
    
   

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20, backgroundColor: theme.colors.background }}>

        <View>

            <Button onPress={() => {console.log(r)}}></Button>
            <Button onPress={() => {console.log(notas)}}></Button>
            <Button onPress={() => { console.log( supabase.auth.getSession() )}}></Button>

            

        </View>

    </View>
  )
}