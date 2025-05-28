// app/(auth)/(student)/dashboard.tsx
import { View, Text, StyleSheet } from 'react-native';
// import { useAuthStore } from '@/stores/auth.store';
// import { useCourseStore } from '@/stores/course.store';
import { useEffect } from 'react';

export default function StudentDashboard() {
//   const { user } = useAuthStore();
//   const { enrolledCourses, fetchEnrolledCourses } = useCourseStore();

//   useEffect(() => {
//     fetchEnrolledCourses(user.id);
//   }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome,</Text>
      Admin
      <Text style={styles.sectionTitle}>Your Courses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  courseCard: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});