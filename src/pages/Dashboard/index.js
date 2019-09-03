import React from 'react'
import './styles.css'

import Header from '../../components/Header'
import Card from '../../components/Card'

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="first-column">
          <Card height={40}>
            <h4>Earnings</h4>
            <h2><span>$</span>2878.90</h2>
          </Card>
        </div>
      </div>
    </>
  )
}
