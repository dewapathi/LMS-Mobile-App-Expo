import { useAuthStore } from "@/stores/auth-store/auth.store";
import { Redirect, Stack } from "expo-router";

export default function PublicLayout() {
  const { token, user } = useAuthStore();

  if (token) {
    const dashboardRoutes = {
      admin: "/(auth)/(admin)/dashboard",
      teacher: "/(auth)/(teacher)/dashboard",
      student: "/(auth)/(student)/dashboard",
    } as const;

    const role = user?.role ?? "student";
    const target = dashboardRoutes[role as keyof typeof dashboardRoutes];

    return <Redirect href={target} />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
