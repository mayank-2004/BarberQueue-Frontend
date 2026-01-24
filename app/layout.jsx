
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>BarberQueue</title>
      <body>
        {children}
      </body>
    </html>
  );
}
