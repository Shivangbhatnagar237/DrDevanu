export function getWhatsAppHref(message: string) {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

  if (!rawNumber) {
    return null;
  }

  return `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;
}
