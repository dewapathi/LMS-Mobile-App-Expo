import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/stores/auth-store/auth.store";

export default function MenuScreen() {
  const { logout } = useAuthStore();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Menu</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/profile")}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#f33" }]}
        onPress={() => {
          logout();
          router.replace("/login");
        }}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 24 },
  button: {
    padding: 14,
    backgroundColor: "#333",
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: { color: "#fff", fontSize: 16 },
});
