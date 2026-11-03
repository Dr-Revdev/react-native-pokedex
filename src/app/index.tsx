import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import PokemonCard from "../components/PokemonCard";
import POKEMONS from "../data/pokemon";


export default function Index() {

    const [showCaptured, setShowCaptured] = useState(false);

    const [captured, setCaptured] = useState<number[]>([])
    const onCaptured = (number: number) => {
        if (captured.includes(number)) {
            setCaptured(captured.filter((n) => n !== number));
        } else {
            setCaptured([...captured, number]);
        }
    };

    const visibles = showCaptured
        ? POKEMONS.filter((pokemon) => captured.includes(pokemon.number))
        : POKEMONS;
    return (
        <FlatList
            numColumns={2}
            columnWrapperStyle={styles.row}
            style={styles.container}
            contentContainerStyle={styles.content}
            data={visibles}
            keyExtractor={(pokemon) => pokemon.number.toString()}
            renderItem={({ item }) => (
                <PokemonCard
                    number={item.number}
                    name={item.name}
                    type={item.type}
                    captured={captured.includes(item.number)}
                    onCaptured={onCaptured}
                />
            )}
            ListHeaderComponent={
                <>
                    <Text style={styles.title}>Mon Pokédex</Text>
                    <Text style={styles.count}>{captured.length} capturés</Text>
                    <Text style={styles.count}>{visibles.length} Pokémon</Text>

                    <Pressable style={styles.button} onPress={() => setShowCaptured(!showCaptured)}>
                        <Text>{showCaptured ? "Tout afficher" : "Mes captures"}</Text>
                    </Pressable>
                </>
            }
        />
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6e6e70",
        padding: 16,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 8,
    },

    count: {
        fontSize: 14,
        color: "#666666",
        marginBottom: 20,
    },

    button: {
      backgroundColor: "white",
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 20,
    },

    content: {
        padding: 16,
    },

    row: {
    gap: 10,
    },
});