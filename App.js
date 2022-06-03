import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';
import JOGOS from './src/dados/jogos';
import Jogos from './src/components/jogo';
import NJOGOS from './src/dados/novosJogos';
import NovosJogos from './src/components/lancamentos';
import Titulo from './src/components/titulos';

export default function App() {
  return (
   <View>
     <Cabecalho></Cabecalho>
     <View>
     <Botao
       Logo = "game-controller"
       texto = "Jogos Top de linha"
       cor = "#1E90FF"
       Logo2 = "apps-outline"
       texto2 = "Aplicativos de todos os tipos"
       cor2 = "#008B8B"
     />
     <Botao
       Logo = "library-outline"
       texto = "Livros aleatorios"
       cor = "#00BFFF"
       Logo2 = "film-outline"
       texto2 = "Filmes e Series de alta qualidade"
       cor2 = "#708090"
     />
     <Botao
       Logo = "musical-notes-outline"
       texto = "Musicas mais ouvidas do mundo"
       cor = "#00CED1"
       Logo2 = "code-slash-outline"
       texto2 = "Tudo sobre o universo da programação"
       cor2 = "#4682B4"
     />
    </View>
    <View>

      <Titulo></Titulo>
      
     <FlatList
        horizontal={true}
        data = {JOGOS}
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

      <Titulo></Titulo>

     <FlatList
        horizontal={true}
        data = {NJOGOS}
        keyExtractor = {(item) => item.id}
        renderItem = { ({ item }) => (

          <NovosJogos
            titulo = {item.nome}
            imagem = {item.imagem}
            data = {item.data}
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
