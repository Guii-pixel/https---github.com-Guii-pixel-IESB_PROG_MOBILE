import React from 'react';
import { View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { Title, Card, Paragraph } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2,
      color: () => 'rgba(134, 65, 244, 0.8)', // linha roxa
    },
  ],
  legend: ['Atendimentos Mensais'],
};

export default function DashboardScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Dashboard PetShop</Title>

      <Card style={styles.card}>
        <Card.Title title="Atendimentos Mensais" />
        <Card.Content>
          <LineChart
            data={data}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
              labelColor: () => '#000',
              style: { borderRadius: 16 },
              propsForDots: { r: '6', strokeWidth: '2', stroke: '#ffa726' },
            }}
            style={{ borderRadius: 16 }}
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Margem de Lucro (%)" />
        <Card.Content>
          <Paragraph style={styles.paragraph}>
            15% - 20% nos últimos 6 meses (dados fictícios)
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: { marginVertical: 10 },
  paragraph: { fontSize: 16 },
});
