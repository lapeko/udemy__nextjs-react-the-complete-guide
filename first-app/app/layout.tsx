import MainHeader from "@/components/main-header/main-header";

import "./globals.css";

export const metadata = {
  title: "NextLevel Food | Taste & Share Food from All Over the World",
  description: "NextLevel Food is a platform for foodies to share their favorite recipes with the world. Discover new dishes and connect with other food lovers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
