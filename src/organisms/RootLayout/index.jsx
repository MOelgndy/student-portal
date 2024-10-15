//TODO: Remove if unused
import { useRouter } from 'next/router';

import { Main } from 'src/atoms/Main';

import { inter } from 'src/fonts';

import { RootLayoutS } from './style.module.css';

export const RootLayout = ({ children }) => {
  const pathname = useRouter().asPath;

  const home = pathname === '/';

  return (
    <section className={`${RootLayoutS} ${inter.className}`}>
      {/* ===================== */}
      {/* fixed position elements */}
      {/* <Nav/> */}
      {/* <SideNav/> */}
      {/* <GoToTop/> */}

      {/* ===================== */}

      {/* Breadcrumb is NOT in the home page */}
      {home ? (
        children
      ) : (
        <Main>
          {/* <Breadcrumb /> */}

          {children}
        </Main>
      )}

      {/* <Footer /> */}
    </section>
  );
};
