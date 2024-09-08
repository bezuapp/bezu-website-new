import "./globals.css";

export const metadata = {
  title: "Bezu AI",
  description: "Bezu AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`euclid antialiased`}>{children}</body>
    </html>
  );
}
