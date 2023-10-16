import React from 'react'
import Layout from '../../Layout'

const Checkout = () => {
  return (
    <Layout>
      <div id="checkout-page" className='layouting'>
        <div id="order-detail">
          <h1>Order Detail</h1>
        </div>
        <div id="total-payment"></div>
      </div>
    </Layout>
  )
}

export default Checkout