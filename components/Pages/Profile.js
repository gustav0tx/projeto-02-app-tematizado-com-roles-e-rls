import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { Button, Text, View } from "react-native-web";
import { supabase } from "../../services/supabase";
import { theme } from "../../style/themes";

export default function Profile({ route }) {

    const [user, setUser] = useState(null)
    const [role, setRole] = useState('')

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {

            if (!session) {

                navigation.navigate('Login')
                
            } else {
                
                setUser(session.user)
            
            }
        });

        return () => subscription.unsubscribe();
    }, [])

    const logOut = async () => {

        const { error } = supabase.auth.signOut()

        if(error) {
            console.log(error)
        }

    }

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: theme.colors.background, justifyContent: 'center' }}>

            <Text style={{ color: theme.colors.textButton }}>{role}</Text>

            <Pressable
                style={{ backgroundColor: theme.colors.button, borderWidth: 2, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}
                onPress={logOut}
            >
                <Text style={{ color: theme.colors.textButton }}>Sair</Text>
            </Pressable>

            <Button onPress={() => { console.log(user) }}></Button>

        </View>
    )
}