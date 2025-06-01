import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function StatsCard({
  title,
  value,
  icon,
  onPress,
}: {
  title: string;
  value: string;
  icon: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 3,
    marginBottom: 16,
  },
  icon: { fontSize: 24, marginBottom: 8 },
  value: { fontSize: 20, fontWeight: 'bold' },
  title: { fontSize: 14, color: '#777' },
});
