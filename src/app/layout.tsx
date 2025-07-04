export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <title>Яндекс.Дом</title>
        <meta
          name="description"
          content="Управляйте своими устройствами с помощью Яндекс.Дом"
        />
        <link
          rel="preload"
          as="image"
          fetchPriority="high"
          href="bg@2x.webp"
        />
        <link
          rel="preload"
          as="image"
          fetchPriority="high"
          href="logo.svg"
        />
      </head>
      <body>
        <div id="root" className="app">
          {children}
        </div>
        <script defer type="module" src="./src/main.tsx"></script>
      </body>
    </html>
  );
}
