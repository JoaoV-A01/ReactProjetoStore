import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';
import JOGOS from './src/dados/dadosJogos';
import Jogos from './src/components/jogo';

export default function App() {
  return (
   <View>
     <Cabecalho></Cabecalho>
     <Botao
       Logo = "game-controller"
       texto = "Jogos Top de linha de todos os tipos e generos"
       cor = "#1E90FF"
       Logo2 = "apps-outline"
       texto2 = "Aplicativos de todos os tipos"
       cor2 = "#008B8B"
     />
     <Botao
       Logo = "library-outline"
       texto = "Livros mais cultos e aleatorios que voce vai encontrar"
       cor = "#00BFFF"
       Logo2 = "film-outline"
       texto2 = "Filmes e Series da mais alta qualidade aprovados pela crtitica e povão"
       cor2 = "#708090"
     />
     <Botao
       Logo = "musical-notes-outline"
       texto = "Musicas mais ouvidas do mundo e de todos os generos"
       cor = "#00CED1"
       Logo2 = "code-slash-outline"
       texto2 = "Tudo sobre o universo da programação voce acha aqui"
       cor2 = "#4682B4"
     />
     <FlatList
        horizontal={true}
        data = {Dados}
        keyExtractor = {(item) => item.id}
        renderItem = { ({ item }) => (

          <Jogos
            titulo = {item.nome}
            imagem = {item.imagem}
            valor = {item.valor}
          />
        )}

     />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
