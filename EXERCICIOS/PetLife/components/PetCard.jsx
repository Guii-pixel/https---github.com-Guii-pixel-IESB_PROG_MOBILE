import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function PetCard({ pet, onPress, onDelete }) {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Title
        title={pet.nome}
        subtitle={`${pet.raca} • ${pet.tipo}`}
        right={(props) => (
          onDelete && (
            <Card.Actions {...props}>
              <Text style={styles.delete} onPress={onDelete}>🗑</Text>
            </Card.Actions>
          )
        )}
      />
      <Card.Content>
        <Text>Idade: {pet.idade} anos</Text>
        <Text>Nascimento: {pet.nascimento}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 6,
  },
  delete: {
    fontSize: 18,
    marginRight: 12,
    color: 'red',
  },
});
