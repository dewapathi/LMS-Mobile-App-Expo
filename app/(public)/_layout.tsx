import { Redirect, Stack } from "expo-router";

export default function PublicLayout() {
  // const { isAuthenticated, role } = useAuthStore();
  const isAuthenticated = false;
  const role = "admin";  

  if (isAuthenticated) {
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
