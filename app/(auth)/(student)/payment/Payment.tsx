import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useAuthStore } from "@/stores/auth-store/auth.store";
import { useStripePayment } from "@/hooks/useStripePayment";

export default function PaymentScreen() {
  const { user } = useAuthStore();
  const { handlePay, loading, error } = useStripePayment(user);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <TouchableOpacity
        style={styles.payButton}
        disabled={loading}
        onPress={handlePay}
      >
        <Text style={styles.payButtonText}>
          {loading ? "Processing..." : "Pay Now"}
        </Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flexGrow: 1, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  payButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  payButtonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
  error: { color: "red", marginTop: 10 },
});
