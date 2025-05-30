import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useAuthStore } from "@/stores/auth-store/auth.store";
import { Redirect, Slot } from "expo-router";
import { View, Text } from "react-native";

export default function AuthLayout() {
  const { user, token, isLoading } = useAuthStore();
  // const isAuthenticated = false;
  // const isLoading = false;
  // const role = "admin";

  console.log("3333333", user, token, user.role);

  if (isLoading) {
    <LoadingScreen />;
  }

  if (!token) {
    return <Redirect href="/(public)/login" />;
  }

  // This ensures only valid roles can access their routes
  if (!["admin", "teacher", "student"].includes(user.role)) {
    // return <Redirect href="/not-authorized" />;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Unauthorized access. Please contact support.</Text>
      </View>
    );
  }

  return <Slot />;
}
