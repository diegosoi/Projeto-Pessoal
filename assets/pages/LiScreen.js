import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function LiScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  const handleHomeClick = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>O elemento HTML (li) (ou a Lista dos Itens de um elemento HTML) é usado para representar um item que faz parte de uma lista. Este item deve estar contido em um elemento pai: uma lista ordenada (ol), uma lista desordenada (ul) , ou um menu (menu) e representa uma única entidade dessa lista. Em menus e listas desordenadas a relação de itens é exibida, normalmente, usando pontos de marcação (as bolinhas). Em listas ordenadas eles são, comumente, mostrados com algum contador ascendente - como um número, ou letra - à sua esquerda.</Text>
      <Button title='Voltar' onPress={handleHomeClick} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  txt:{
    color: '#fff',
    fontSize: 25,
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
  },
})