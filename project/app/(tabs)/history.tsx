import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { UserCheck, UserX } from 'lucide-react-native';

const mockHistory = [
  { id: 1, name: 'John Doe', timestamp: '2025-01-20 14:30', authorized: true },
  { id: 2, name: 'Unknown Person', timestamp: '2025-01-20 14:15', authorized: false },
  { id: 3, name: 'Jane Smith', timestamp: '2025-01-20 14:00', authorized: true },
];

export default function HistoryPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Access History</Text>
        <Text style={styles.subtitle}>Recent detection events</Text>
      </View>

      <ScrollView style={styles.content}>
        {mockHistory.map(entry => (
          <View key={entry.id} style={styles.historyItem}>
            {entry.authorized ? (
              <UserCheck size={24} color="#4CAF50" />
            ) : (
              <UserX size={24} color="#F44336" />
            )}
            <View style={styles.historyInfo}>
              <Text style={styles.historyName}>{entry.name}</Text>
              <Text style={styles.historyTime}>{entry.timestamp}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
  },
  historyInfo: {
    marginLeft: 16,
  },
  historyName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  historyTime: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});