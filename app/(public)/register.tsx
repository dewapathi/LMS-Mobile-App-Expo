import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useForm } from "react-hook-form";

import { Link, router } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput } from "@/components/ui/FormInput";
import { RegisterDataFormValues, registerSchema } from "../schemas/auth.schema";
import { useAuthStore } from "@/stores/auth-store/auth.store";

export default function RegisterScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDataFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const { register, isLoading, error } = useAuthStore();

  const handleRegister = (values: RegisterDataFormValues) => {
    console.log("2222222222222222", values);
    register(values);
    router.replace("/(public)/login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/lms3.jpg")}
        style={styles.banner}
      />
      <Text style={styles.title}>Create an Account</Text>

      <FormInput
        control={control}
        name="username"
        placeholder="Username"
        error={errors.username?.message}
      />
      <FormInput
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry
        error={errors.password?.message}
      />
      <FormInput
        control={control}
        name="first_name"
        placeholder="First name"
        error={errors.first_name?.message}
      />
      <FormInput
        control={control}
        name="last_name"
        placeholder="Last name"
        error={errors.last_name?.message}
      />
      <FormInput
        control={control}
        name="email"
        placeholder="Email"
        error={errors.email?.message}
      />
      <FormInput
        control={control}
        name="role"
        placeholder="Role (student or teacher)"
        error={errors.role?.message}
      />

      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleSubmit(handleRegister)}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.registerButtonText}>Register</Text>
        )}
      </TouchableOpacity>

      <Link href="/(public)/login" asChild style={[styles.link]}>
        <Text style={styles.loginText}>
          Already have an account?{" "}
          <Text style={{ color: "#007AFF", fontWeight: "bold" }}>Login</Text>
        </Text>
      </Link>
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
  banner: {
    width: 350,
    height: 180,
    resizeMode: "contain",
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  registerButton: {
    marginTop: 15,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 16,
  },
  loginText: {
    // color: "#28A745",
    fontWeight: "bold",
  },
});
