export async function getStripePublishableKey(): Promise<string | null> {
  try {
    const res = await fetch("https://your-api.com/stripe/key");
    const { publishableKey } = await res.json();
    return publishableKey;
  } catch {
    return null;
  }
}

export async function getPaymentIntent(courseId: number, token: string) {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/create-payment-intent/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "x-api-key": "123"
      },
      body: JSON.stringify({
        course_id: courseId,
        provider: "stripe",
      }),
    });

    console.log('resres', res);
    

    if (!res.ok) {
      const text = await res.text();
      console.error("PaymentIntent error:", res.status, text);
      return {};
    }

    return await res.json();
  } catch (err) {
    console.error("PaymentIntent fetch failed:", err);
    return {};
  }
}

