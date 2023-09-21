// export const metadata = {
//   title: "IceLagbe",
// };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const store = prismadb.store.find;
  return (
    // <ClerkProvider>
    <html lang="en">
      {/* <ClientLayout> */}
      <body>{children}</body>
      {/* </ClientLayout> */}
    </html>
    // </ClerkProvider>
  );
}
