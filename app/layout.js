import Realfooter from "./components/Realfooter";
import "./globals.css";

export const metadata = {
  title: "Portfolio-Creative Frontend Developer",
  description: "I am Creative Frontnd Developer. I am here to find clients and change their ideas into real world senario.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Realfooter/>
      </body>
    </html>
  );
}
