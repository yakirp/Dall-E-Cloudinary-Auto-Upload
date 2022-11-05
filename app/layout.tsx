import '../styles/globals.css';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
      <div className="flex h-screen">
        <div className="m-auto">
        {children}
        </div>
      </div>
        </body>
    </html>
  );
}
