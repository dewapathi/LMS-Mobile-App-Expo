import { Redirect, Slot } from "expo-router";
import { View, Text } from "react-native";

import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useAuthStore } from "@/stores/auth-store/auth.store";

export default function AuthLayout() {
  const { user, token, isLoading } = useAuthStore();

  if (isLoading) {
    <LoadingScreen />;
  }

  if (!token) {
    return <Redirect href="/(public)/login" />;
  }

  if (!["admin", "teacher", "student"].includes(user?.role)) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Unauthorized access. Please contact support.</Text>
      </View>
    );
  }

  return <Slot />;
}
