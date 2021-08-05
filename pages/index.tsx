import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>John Thomas</title>
        <meta name="description" content="Technologist & Storyteller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
       <Hero/>
 

      </Layout>
  )
}
