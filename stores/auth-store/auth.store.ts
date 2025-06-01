import { loginService } from "@/services/auth-service/auth.service";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginDataFormValues } from "@/app/schemas/auth.schema";

type AuthState = {
  user: any | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
};

type AuthActions = {
  login: (data: LoginDataFormValues) => Promise<void>;
  //   register: (data: any) => Promise<void>;
  logout: () => Promise<void>;
  //   clearError: () => void;
};

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    immer((set) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,

      login: async (data: any) => {
        set({ isLoading: true, error: null });
        try {
          const { user, token } = await loginService(data);
          console.log("7777", user, token);

          set({ user, token, isLoading: false });
        } catch (error: any) {
          let errorMessage = "Login failed";

          if (error.response?.data?.error?.details?.non_field_errors?.[0]) {
            errorMessage =
              error.response.data.error.details.non_field_errors[0];
          } else if (error.response?.data?.error?.message) {
            errorMessage = error.response.data.error.message;
          } else if (error.message) {
            errorMessage = error.message;
          }

          set({ error: errorMessage, isLoading: false });
          throw error;
        }
      },

      logout: async () => {
        set({ isLoading: true });
        try {
          console.log("5555555");

          set({ user: null, token: null, isLoading: false });
        } catch (error: any) {
          set({
            error: error.message || "Logout failed",
            isLoading: false,
          });
          throw error;
        }
      },
    })),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state: AuthState) => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
);
