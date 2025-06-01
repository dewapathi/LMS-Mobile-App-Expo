import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useAuthStore } from "@/stores/auth-store/auth.store";
import StatsCard from "@/components/common/StatsCard";
import { Link, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function AdminDashboard() {
  const { user, isLoading } = useAuthStore();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const router = useRouter();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading dashboard...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Header with menu */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          Welcome, {user.username} 👋
        </Text>
        <TouchableOpacity onPress={() => router.push("/menu")}>
          <Feather name="menu" size={28} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <StatsCard
          title="Manage Users"
          value="350"
          icon="👥"
          onPress={() => router.push("/users")}
        />
        <StatsCard
          title="Manage Courses"
          value="58"
          icon="📚"
          onPress={() => router.push("/courses")}
        />
        <StatsCard
          title="Payments"
          value="$5,200"
          icon="💰"
          onPress={() => router.push("/payments")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: { fontSize: 24, fontWeight: "bold" },
  statsContainer: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
});
