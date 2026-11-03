import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import PokemonCard from "../components/PokemonCard";
import POKEMONS from "../data/pokemon";


export default function Index() {

  const [activeFireFilter, setActiveFireFilter] = useState(false)
    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.content}
            data={POKEMONS}
            keyExtractor={(pokemon) => pokemon.number.toString()}
            renderItem={({ item }) => (
                <PokemonCard
                    number={item.number}
                    name={item.name}
                    type={item.type}
                />
            )}
            ListHeaderComponent={
                <>
                    <Text style={styles.title}>Mon Pokédex</Text>
                    <Text style={styles.count}>{POKEMONS.length} Pokémon</Text>

                    <Pressable style={styles.button} onPress={() => setActiveFireFilter(!activeFireFilter)}>
                        <Text>{activeFireFilter ? "Tout afficher" : "Seulement le feu"}</Text>
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
});