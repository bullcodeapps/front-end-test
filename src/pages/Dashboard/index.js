import React from 'react'
import './styles.css'

/* Components */
import Header from '../../components/Header'
import Card from '../../components/Card'

/* Google Charts */
import Chart from 'react-google-charts'

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="first-column">
          <Card
            className="d-flex flex-column justify-content-center"
            height={30}>
            <div className="card-header">
              <h4 style={{ textTransform: 'uppercase' }}>Earnings</h4>
            </div>
            <div className="card-body">
              <div className="left-column">
                <div className="profit-statistics">
                  <h2><span>$</span>2878.90</h2>
                  <p><span>+42</span> since last week</p>
                </div>
                <div className="markup purple">
                  <h4>0.9087 ETH</h4>
                </div>
                <div className="markup orange">
                  <h4>0.5 BTC</h4>
                </div>
              </div>
              <div className="right-column">
                <Chart
                  width={420}
                  height="100%"
                  chartType="LineChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    [
                      { type: 'string', label: 'x' },
                      { type: 'number', label: 'values' },
                      { id: 'i0', type: 'number', role: 'interval' },
                      { id: 'i1', type: 'number', role: 'interval' },
                      { id: 'i2', type: 'number', role: 'interval' },
                      { id: 'i2', type: 'number', role: 'interval' },
                      { id: 'i2', type: 'number', role: 'interval' },
                      { id: 'i2', type: 'number', role: 'interval' },
                    ],
                    ['Mar', 150, 200, 180, 210, 220, 215, 220],
                    ['May', 180, 200, 170, 140, 110, 100, 80],
                    ['Jul', 80, 100, 120, 140, 160, 180, 220],
                    ['Sep', 150, 130, 120, 140, 130, 140, 150],
                    ['Nov', 130, 110, 100, 120, 130, 150, 200],
                    ['Jan', 200, 180, 170, 180, 180, 190, 220],
                  ]}
                  options={{
                    intervals: { style: 'sticks' },
                    legend: 'none',
                  }}
                />
              </div>
            </div>
          </Card>
          <h3 className="medium-title">Suggested Projects</h3>
          <div className="d-flex flex-row justify-content-space-between">
            <Card
              width={42}
              height={35}>
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <div className="avatar">
                    <img alt="Avatar" src="https://api.adorable.io/avatars/55/abott@adorable.pngCo" />
                  </div>
                  <div className="profile-info">
                    <h5>Alice Martin</h5>
                    <p>5 hours ago</p>
                  </div>
                  <div className="programmingLanguage gray">
                    <h4>HTML</h4>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{ margin: '8% 0' }}>
                <p>Design and develop a website for an education platform focusing on the growth of children.</p>
              </div>
              <div className="d-flex card-footer">
                <div
                  className="markup purple m-top-0 m-bottom-0"
                  style={{ marginRight: '2%' }}>
                  <h4>0.9087 ETH</h4>
                </div>
                <div className="markup orange">
                  <h4>0.5 BTC</h4>
                </div>
                <div className="budget">
                  <h4><span>$</span>2878.90</h4>
                </div>
              </div>
            </Card>
            <Card
              width={42}
              height={35}>
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <div className="avatar">
                    <img alt="Avatar" src="https://api.adorable.io/avatars/55/abott@adorable.pngCo" />
                  </div>
                  <div className="profile-info">
                    <h5>Alice Martin</h5>
                    <p>5 hours ago</p>
                  </div>
                  <div className="programmingLanguage gray">
                    <h4>HTML</h4>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{ margin: '8% 0' }}>
                <p>Design and develop a website for an education platform focusing on the growth of children.</p>
              </div>
              <div className="d-flex card-footer">
                <div
                  className="markup purple m-top-0 m-bottom-0"
                  style={{ marginRight: '2%' }}>
                  <h4>0.9087 ETH</h4>
                </div>
                <div className="markup orange">
                  <h4>0.5 BTC</h4>
                </div>
                <div className="budget">
                  <h4><span>$</span>2878.90</h4>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
