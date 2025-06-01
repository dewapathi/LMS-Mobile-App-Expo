import { Stack, Tabs } from "expo-router";
// import { useAuthStore } from '@/stores/auth.store';
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function AdminLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
// export default function AdminLayout() {
//   const colorScheme = useColorScheme();
//   //   const { role } = useAuthStore();
//   const role = "admin";

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name="dashboard"
//         options={{
//           title: "Dashboard",
//           tabBarIcon: ({ color }) => (
//             <MaterialIcons name="dashboard" size={24} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="users"
//         options={{
//           title: "User",
//           tabBarIcon: ({ color }) => (
//             <MaterialIcons name="dashboard" size={24} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
