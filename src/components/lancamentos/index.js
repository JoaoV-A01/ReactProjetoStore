import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

//Criando a função e recebendo por props o titulo valor e imgagem do jogo
export default function NovosJogos({ titulo, data, imagem }) {
    return (
        <TouchableOpacity style={estilo.containerJogos}>
            <Image 
            style={estilo.images}
            source={require(`../../imagens/${imagem}`)}
            />
            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.data}>{data}</Text>
        </TouchableOpacity>
    );
}
const estilo = StyleSheet.create({
    containerJogos: {
        backgroundColor: "DCDCDC",
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width: 350,
        height: 250,
        marginLeft: 8,
    },
    titulo: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
    },
    data: {
        color: "green",
        fontSize: 12,
        marginLeft: 180,
        marginTop: 2,
        fontWeight: "bold",
    },
    images: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
});