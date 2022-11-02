import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css" rel="stylesheet" />
        <link rel='icon' type='image/png' href={'/logo.png?' + new Date().getTime()} />
        <link rel="apple-touch-icon" href={'/logo.png?' + new Date().getTime()} />
        <title>apost.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <main>{children}</main>
    </div>
  )
}

export default Layout