import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { useAuthStore } from '@/stores/auth.store';
// import { useAdminDashboard } from '@/features/admin/hooks/useAdminDashboard';
// import { StatsCard } from '@/components/admin/StatsCard';
// import { RecentActivity } from '@/components/admin/RecentActivity';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function AdminDashboard() {
  // const { user } = useAuthStore();
  // const { stats, recentActivities, isLoading } = useAdminDashboard();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const isLoading = false

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading dashboard...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Welcome, {'user.name'} 👋
      </Text>
      
      {/* <View style={styles.statsContainer}>
        <StatsCard 
          title="Total Users" 
          value={stats.totalUsers} 
          icon="users"
        />
        <StatsCard 
          title="Active Courses" 
          value={stats.activeCourses} 
          icon="book"
        />
        <StatsCard 
          title="New Enrollments" 
          value={stats.newEnrollments} 
          icon="user-plus"
        />
      </View>

      <RecentActivity activities={recentActivities} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 12,
  },
});