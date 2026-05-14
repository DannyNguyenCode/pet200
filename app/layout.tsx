import "@styles/globals.css";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Provider from "@components/Provider";
import RealmTopChrome from "@components/navigation/RealmTopChrome";
import { Epilogue, JetBrains_Mono, Work_Sans } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-epilogue",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-work-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Town Square — Pet Adventures",
  description:
    "A cozy, RPG-inspired hub to meet companions, plan walks, and celebrate pets in your community.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`light ${epilogue.variable} ${workSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body
        className={`${workSans.className} townsquare-body bg-background text-on-background antialiased`}
      >
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-full rounded bg-primary px-4 py-2 text-sm font-semibold text-on-primary opacity-0 shadow-lg transition focus:translate-y-0 focus:opacity-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-tertiary"
        >
          Skip to main content
        </a>
        <Provider>
          <AppRouterCacheProvider>
            <div className="flex min-h-screen flex-col">
              <RealmTopChrome />
              <div
                id="main-content"
                tabIndex={-1}
                className="realm-main-below-unified-nav flex min-h-0 min-w-0 w-full max-w-[100vw] flex-1 flex-col overflow-x-hidden outline-none"
              >
                {children}
              </div>
            </div>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
