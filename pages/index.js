
import { getAllArticleForHome  } from '../lib/api'

import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/yellow-envelope/yellow-envelope"));



export default function Index({ newsletters: { edges }  }) {
 return (
    <>
      <Layout  edges={edges} />
    </>
  )
}

export async function getServerSideProps({ preview = false }) {
  const newsletters = await getAllArticleForHome(preview)
  return {
    props: { 
        newsletters,
        preview,
    },
    // revalidate: 86400, 
  }
}

