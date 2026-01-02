import "./globals.css";

export const metadata = {
  title: "Hashtag Converter | Professional Tag Tool",
  description:
    "Convert comma-separated tags into clean Instagram & TikTok ready hashtags instantly. Free, fast and professional.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6366f1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
