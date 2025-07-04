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
      </head>
      <body>
        <div id="root" className="app">
          {children}
        </div>
      </body>
    </html>
  );
}
