import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Redirect, Slot } from "expo-router";
import { View, Text } from "react-native";

export default function AuthLayout() {
  // const { isAuthenticated, isLoading, role } = useAuthStore();
  const isAuthenticated = false;
  const isLoading = false;
  const role = "admin";

  console.log("3333333");

  if (isLoading) {
    <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return <Redirect href="/(public)/login" />;
  }

  // This ensures only valid roles can access their routes
  if (!["admin", "teacher", "student"].includes(role)) {
    // return <Redirect href="/not-authorized" />;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Unauthorized access. Please contact support.</Text>
      </View>
    );
  }

  return <Slot />;
}
