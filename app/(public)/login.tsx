import { useAuthStore } from "@/stores/auth-store/auth.store";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, user, isLoading, error } = useAuthStore();

  const handleLogin = () => {
    console.log("Login attempted with:", username, password);
    login({ username, password });
    router.replace("/(auth)/(admin)/dashboard");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/lms3.jpg")}
        style={styles.logo}
      />
      <Text style={styles.title}>Login to LMS</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: 450,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
