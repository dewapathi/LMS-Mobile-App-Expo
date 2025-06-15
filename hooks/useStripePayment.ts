import { getPaymentIntent } from "@/services/payement-service/payement.service";
import { useAuthStore } from "@/stores/auth-store/auth.store";
import { useStripe } from "@stripe/stripe-react-native";
import { useState, useEffect } from "react";

export function useStripePayment(user: any) {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const token = useAuthStore.getState().token;


  useEffect(() => {
    if (user) initializePaymentSheet();
  }, [user]);

  const initializePaymentSheet = async () => {
    const clientSecret = await getPaymentIntent(1, token!);
    console.log('0000000000000000', clientSecret);
    
    if (!clientSecret) {
      setError("Failed to load payment info");
      return;
    }

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: "LMS School",
      allowsDelayedPaymentMethods: true,
      returnURL: "lms-app://payment-complete",
    });

    if (error) {
      setError(error.message);
    }
  };

  const handlePay = async () => {
    setLoading(true);
    setError("");

    const { error } = await presentPaymentSheet();
    if (error) {
      setError(error.message);
    } else {
      alert("Payment Successful!");
    }

    setLoading(false);
  };

  return { handlePay, loading, error };
}
