import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function StudentLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="course/Course"
        options={{
          title: "Course",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="book" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="payment/Payment"
        options={{
          title: "Payment",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="money" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
