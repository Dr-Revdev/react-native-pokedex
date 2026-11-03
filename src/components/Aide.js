import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Aide() {
    const [aideOn, setAideOn] = useState(false)
    return(
        <View>
            <Pressable onPress={() => setAideOn(!aideOn)}>
                <Text>
                    {aideOn ? "Masquer Aide" : "Afficher Aide"}
                </Text>
            </Pressable>

            <Text>
                {aideOn && "Ceci est l'aide."}
            </Text>
        </View>
    );
};