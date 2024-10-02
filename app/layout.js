import "./globals.css";

export const metadata = {
  title: "Hashtag Converter",
  description:
    "A simple hashtag converter tool built with Next.js to streamline your SEO work by converting comma-separated tags into hashtags.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
