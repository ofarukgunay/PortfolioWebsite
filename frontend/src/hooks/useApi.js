import { toast } from "./use-toast";

const API_URL = process.env.REACT_APP_API_URL;

export const sendMessage = async (data, language) => {
  try {
    const response = await fetch(`${API_URL}/api/status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_name: data.name, // 🔥 Backend modeline uyumlu
        email: data.email,
        message: data.message,
      }),
    });

    if (!response.ok) throw new Error("API request failed!");

    const result = await response.json();

    toast({
      title: language === "en" ? "Message sent!" : "Mesaj gönderildi!",
      description:
        language === "en"
          ? `"${result.client_name}" has been saved successfully.`
          : `"${result.client_name}" başarıyla kaydedildi.`,
    });

    return result;
  } catch (error) {
    console.error("API Error:", error);
    toast({
      title: language === "en" ? "Error!" : "Hata!",
      description:
        language === "en"
          ? "Failed to send your message. Please try again later."
          : "Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.",
    });
    return null;
  }
};
