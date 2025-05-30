import { loginService } from "@/services/auth-service/auth.service";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthState = {
  user: any | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
};

type AuthActions = {
  login: (data: any) => Promise<void>;
  //   register: (data: any) => Promise<void>;
  //   logout: () => Promise<void>;
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
          console.log('useruseruser', user);
          console.log('useruseruser', token);
          
          set({ user, token, isLoading: false });
        } catch (error: any) {
          set({ error: error.message || "Login failed", isLoading: false });
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
