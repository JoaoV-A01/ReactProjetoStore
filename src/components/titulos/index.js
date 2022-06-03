import React from 'react';
import{View,Text,StyleSheet} from 'react-native';

export default function Titulo({texto1, texto2}){
    return(

        <View>
            <Text style ={estilo.Texto}> Jogos em Destaque </Text>
        </View>

    )
}

const estilo = StyleSheet.create({
    Texto:{
        color:'blaxk',
        marginLeft: 20,
        fontSize: 20,
    },
})