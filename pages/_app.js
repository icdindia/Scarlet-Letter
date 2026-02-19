import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import '../styles/index.scss'
import '../styles/header.scss'
import '../styles/search.scss'
import '../styles/footer.scss'
import '../styles/subscribe.scss'
import '../styles/fetch-jobs.scss'
import '../styles/jobs-form.scss'
import '../styles/slick/slick.css';
import '../styles/search-results.scss';
import '../styles/newsletter.scss';
import Router from 'next/router';
import dynamic from "next/dynamic";
import { useState } from 'react';
const Layout = dynamic(() => import("../components/layout/layout"));
// const Loader = dynamic(() => import("../components/loader/loader"));
export default function MyApp({ Component, pageProps }) {

  const [loading , setLaoading] = useState(true);
  Router.events.on("routeChangeStart", (url) => {
    // console.log("Route changing: " );
    // NProgress.start();
    setLaoading(false)
  })
  Router.events.on("routeChangeComplete", (url) => {
    // console.log("Route changed: " );
    // NProgress.done();
    setLaoading(true)
  })
  return (
    <>
      {loading && <Layout>
          <Component {...pageProps} />
      </Layout>}</>
  )
}
