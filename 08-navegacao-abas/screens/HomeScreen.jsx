import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import {Text, Card, Title, Paragraph} from 'react-native-paper'

export default function HomeScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>Início</Text>

      <Card style={{margin: 10}}>
        <Card.Content>
            <Title>Um titulo</Title>
            <Paragraph>loren ipsun loren ipsun loren ipsun loren ipsunloren ipsunloren ipsun</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
      <Card style={{margin: 10}}>
        <Card.Content>
            <Title>Um titulo</Title>
            <Paragraph>loren ipsun loren ipsun loren ipsun loren ipsunloren ipsunloren ipsun</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
      <Card style={{margin: 10}}>
        <Card.Content>
            <Title>Um titulo</Title>
            <Paragraph>loren ipsun loren ipsun loren ipsun loren ipsunloren ipsunloren ipsun</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'fff',
        alingitems: 'center',
        padding: 10
    }
})