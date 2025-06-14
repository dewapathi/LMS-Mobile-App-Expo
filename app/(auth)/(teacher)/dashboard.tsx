import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useAuthStore } from "@/stores/auth-store/auth.store";
import StatsCard from "@/components/common/StatsCard";

export default function TeacherDashboard() {
  const { user, isLoading } = useAuthStore();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const router = useRouter();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ color: colors.text }}>Loading dashboard...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={[
          styles.contentContainer,
          { backgroundColor: colors.background },
        ]}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>
            Welcome, {user?.username ?? "Admin"} 👋
          </Text>
          <TouchableOpacity onPress={() => router.push("/menu")}>
            <Feather name="menu" size={28} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* Dashboard Cards */}
        <View style={styles.statsWrapper}>
          <StatsCard
            title="Manage Users"
            value="350"
            icon="👥"
            // onPress={() => router.push("/admin/users")}
          />
          <StatsCard
            title="Manage Courses"
            value="58"
            icon="📚"
            // onPress={() => router.push("/admin/courses")}
          />
          <StatsCard
            title="Payments"
            value="$5,200"
            icon="💰"
            // onPress={() => router.push("/admin/payments")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    padding: 16,
    minHeight: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  statsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
