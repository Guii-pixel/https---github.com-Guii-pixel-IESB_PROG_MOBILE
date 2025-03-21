import { View, Text } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {
    const nome = "Guilherme"
    const idade = 25

    function exibirNome() {
        return nome
    }

    function chegarMaiorIdade() {
        if(idade == 18) {
            return "Maior de Idade"
        } else {
            return "Menor de Idade"
        }
    }


  return (
    <View>
      <Text>JavaScriptComponente</Text>
      <Text>idade: {idade}</Text>
      <Text>nome: {nome}</Text>
      <Text>nome: {exibirNome()}</Text>
      <Text>Check 18: {chegarMaiorIdade()}</Text>
      <Text>Check 18: {idade >= 18 ? "Maior de idade" : "Menor de idade"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})