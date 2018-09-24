import React from 'react'
import Link from 'next/link'

import Layout from '../components/layout'

export default () => {
  return (
    <Layout title={ 'Next.js + Express' }>
      <div className='container'>
        <div className='jumbotron'>
          <h1>Trip Assistant</h1>
        </div>
      </div>
    </Layout>
  )
}