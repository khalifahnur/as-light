import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello, I'd like to enquire about your products and services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.8)] transition-transform hover:scale-105 sm:px-5"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
