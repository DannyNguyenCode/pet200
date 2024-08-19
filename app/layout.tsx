import "@styles/globals.css"
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Provider from "@components/Provider";

export const metadata: Metadata = {
  title: "Find Your Forever Pets",
  description: "Finding your forever pets is as easy as making a successful API call, status 200",
};

const RootLayout=({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)=> {

  return (
    <html lang="en">
        <body>
          <Provider>
            <AppRouterCacheProvider>
                  <div className='main'>
                    <div className=""></div>
                  </div>
                  <main className='app'>
                      <Nav/>
                     {children}
    
                  </main>
            </AppRouterCacheProvider>
          </Provider>
        </body>
        
    </html>
  );
}
export default RootLayout;