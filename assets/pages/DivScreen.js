import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function DivScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  const handleHomeClick = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>O elemento de divisão **HTML (div) **é um container genérico para conteúdo de fluxo, que de certa forma não representa nada. Ele pode ser utilizado para agrupar elementos para fins de estilos (usando class ou id), ou porque eles compartilham valores de atributos, como lang. Ele deve ser utilizado somente quando não tiver outro elemento de semântica (tal como (article) ou (nav)).</Text>
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
    marginBottom: 100,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
  },
})