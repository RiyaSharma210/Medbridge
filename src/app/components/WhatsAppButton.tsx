export default function WhatsAppButton() {
  const phoneNumber = "8708542919"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      WhatsApp Us
    </a>
  );
}