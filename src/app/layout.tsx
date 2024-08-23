// Since we have a root `not-found.tsx`, a layout file
// is required, even if it's just passing children through
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
