import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { useEffect } from 'react'






const Layout = ({ children }) => {
    const router = useRouter();
    const home = ['/'];
    const bg_yellow = [`/posts/[slug]`];
    const bg_yellow1 = [`/newsletter-subscription`];
    const bg_yellow2 = [`/privacy-policy`];
    const noNav = [`/yellow-envelope/[slug]`];
    const props = children.props

    useEffect(() => {
        if (bg_yellow.includes(router.pathname) || bg_yellow1.includes(router.pathname) || bg_yellow2.includes(router.pathname)) {
            document.body.classList.add('bg-yellow');
        }
        else {
            document.body.classList.remove('bg-yellow');
        }
    })

   

    return (
        <>
            {children}
        </>
    )
}

export default Layout