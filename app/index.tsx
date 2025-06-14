import { Redirect } from "expo-router";
import { useAuthStore } from "@/stores/auth-store/auth.store";

export default function Index() {
  const { token, user } = useAuthStore();

  if (!token) return <Redirect href="/(public)/login" />;

  const dashboardRoutes = {
    admin: "/(auth)/(admin)/dashboard",
    teacher: "/(auth)/(teacher)/dashboard",
    student: "/(auth)/(student)/dashboard",
  } as const;

  const role = user?.role ?? "student";
  const target = dashboardRoutes[role as keyof typeof dashboardRoutes];

  return <Redirect href={target} />;
}
