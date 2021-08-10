import Head from 'next/head'
import Image from 'next/image'
// import styles from '../sty  les/Home.module.css'
import { Main } from '../components/Main'
import { LayoutMain } from '../components/LayoutMain'

export default function Home() {

 



  return (
    <LayoutMain>
      <Head>
        <title>John Thomas</title>
        <meta name="description" content="Technologist & Storyteller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
       <Main/>
 

      </LayoutMain>
  )
}
