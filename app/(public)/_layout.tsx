import { useAuthStore } from "@/stores/auth-store/auth.store";
import { Redirect, Stack } from "expo-router";

export default function PublicLayout() {
  const { token } = useAuthStore();
  // const isAuthenticated = false;
  const role = "admin";  

  if (token) {
    const route = `/(auth)/(${role})/dashboard` as any;
    // return <Redirect href={`/(auth)/(admin)/dashboard`} />;
    return <Redirect href={route} />;
  }

  // Public routes configuration
  return (
    <Stack screenOptions={{ 
      headerShown: false,
      animation: 'fade',
    }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
