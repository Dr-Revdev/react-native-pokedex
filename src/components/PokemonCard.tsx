import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type PokemonCardProps = {
    number: number;
    name: string;
    type: string;
};

const TYPE_COLORS: Record<string, string> = {
    Plante: "#78C850",
    Feu: "#F08030",
    Eau: "#6890F0",
    Électrik: "#F8D030",
};

const ARTWORK =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default function PokemonCard({ number, name, type }: PokemonCardProps) {

    const color = TYPE_COLORS[type] ?? "#EAE9E2";
    const [isCaptured, setIsCaptured] = useState(false);
    useEffect(() => {
        console.log("Affichée :", name);
        return () => console.log("Retirée :", name);
    }, []);
    return (
        <View style={[styles.card, { backgroundColor: color }]}>

            <View style={styles.imageBox}>
                <Image
                    source={{ uri: `${ARTWORK}${number}.png` }}
                    style={styles.image}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.number}>#{number}</Text>
                <Text style={styles.name}>{name}</Text>

                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{type}</Text>
                </View>
            </View>

            <Pressable style={[styles.captureButton, isCaptured && styles.isCapturedButton]} onPress={() => setIsCaptured(!isCaptured)}>
                <Text>{isCaptured ? "Capturé ✓" : "Capturé"}</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 12,
        marginBottom: 10,
    },

    imageBox: {
        width: 60,
        height: 60,
        borderRadius: 12,
        backgroundColor: "#EAE9E2",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
    },

    image: {
        width: 55,
        height: 55,
    },

    content: {
        alignItems: "center"
    },

    number: {
        fontSize: 12,
        color: "#526AA0",
    },

    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#171923",
        marginBottom: 8,
    },

    badge: {
        alignSelf: "flex-start",
        backgroundColor: "#EAE9E2",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },

    badgeText: {
        fontSize: 11,
        color: "#454545",
    },

    captureButton: {
        backgroundColor: "white",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
    },

    isCapturedButton: {
        backgroundColor: "#407dee"
    }
});