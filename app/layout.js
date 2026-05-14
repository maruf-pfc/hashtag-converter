import "./globals.css";

export const metadata = {
  title: "Hashtag Converter",
  description:
    "A simple hashtag converter tool built with Next.js to streamline your SEO work by converting comma-separated tags into hashtags.",
  keywords:
    "next.js, react, seo, hashtag, converter, hashtag-converter, hashtag-generator, generate-hashtag, hashtag generator,instagram hashtag generator,free hashtag generator,hashtag generator tiktok,tiktok hashtag generator,wedding hashtag generator,instagram hashtags generator,instagram hashtag strategy,instagram hashtags,twitter hashtag generator,hashtag generator tool,ai hashtag generator,python hashtag generator,hashtag generator free,hashtags,hashtag generator instagram,instagram hashtag generator python,social media hashtag generator, tool",
  robots: "index, follow",
  httpEquivalents: {
    "content-type": "text/html; charset=utf-8",
    "content-language": "en-US",
  },
  canonical: "https://hashtag-converter.vercel.app/",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
