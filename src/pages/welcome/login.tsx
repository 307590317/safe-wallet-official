import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '@/components/welcome/Login'
import SafeList from '@/components/common/SafeList'
// import css from './styles.module.css'
import { DataWidget } from '@/components/welcome/SafeListDrawer/DataWidget'

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Safe{Wallet} – Login'}</title>
      </Head>

      <SafeList />
      <DataWidget />
    </>
  )
}

export default LoginPage
