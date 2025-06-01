import React from "react";
import { router } from "expo-router";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { FormInput } from "@/components/ui/FormInput";

import { useAuthStore } from "@/stores/auth-store/auth.store";
import { LoginDataFormValues, loginSchema } from "../schemas/auth.schema";

export default function LoginScreen() {
  const { login, isLoading, error } = useAuthStore();

  const handleLogin = (values: LoginDataFormValues) => {
    login(values);
    router.replace("/(auth)/(admin)/dashboard");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataFormValues>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/lms3.jpg")}
        style={styles.logo}
      />
      <Text style={styles.title}>Login to LMS</Text>
      <FormInput
        control={control}
        name="username"
        placeholder="Username"
        error={errors.username ? errors.username?.message : error}
      />
      <FormInput
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry
        error={errors.password ? errors.password?.message : error}
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSubmit(handleLogin)}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.loginButtonText}>Login</Text>
        )}
      </TouchableOpacity>
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
  loginButton: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
