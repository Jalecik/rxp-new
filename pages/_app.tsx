
import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import PublicComponent from '../src/core/layouts/public/public.component';
import '../src/assets/styles/globals.scss';
import FastStartLayout from 'src/core/layouts/fast-start/fast-start.component';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Notification from 'src/core/shared/notification/notification';
import UserWay from 'components/userway/userway';
// import LoaderComponent from 'src/core/shared/loader/loader.component';


function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Notification />
        {
          router.pathname !== '/fast-start' ?
            <PublicComponent>
               <UserWay />
              <Component {...pageProps} />
            </PublicComponent>
            : <FastStartLayout>
              <Component {...pageProps} />
            </FastStartLayout>
        }
        {/* {loader ? <LoaderComponent /> : null} */}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
