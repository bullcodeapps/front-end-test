import React from 'react'
import './styles.css'

/* Components */
import Header from '../../components/Header'
import Card from '../../components/Card'

/* Google Charts */
import Chart from 'react-google-charts'

/* Data */
import database from '../../services/database.json'

import SlackIcon from '../../assets/slack.png'

import { MdAttachMoney } from "react-icons/md"
import { DiCode } from "react-icons/di"

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-space-between container" style={{ marginTop: '-70px', flexWrap: 'wrap' }}>
        <section className="d-flex justify-content-space-between w-100" style={{ height: '40%' }}>
          <div className="col-65">
            <Card
              className="d-flex flex-column justify-content-center"
              height={70}>
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
          </div>
          <div className="col-32">
            <Card
              height={78}>
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
              <div className="card-body" style={{ margin: '5% 0' }}>
                <p>Design and develop a website for an education platform focusing on the growth of children.</p>
              </div>
              <div className="d-flex card-footer">
                <div className="d-flex" style={{ width: '70%' }}>
                  <div
                    className="markup purple m-top-0 m-bottom-0"
                    style={{ marginRight: '2%' }}>
                    <h4>1.2 ETH</h4>
                  </div>
                  <div className="markup orange">
                    <h4>0.3 BTC</h4>
                  </div>
                </div>
                <div className="budget">
                  <h4><span>$</span>2878.90</h4>
                </div>
              </div>
            </Card>
          </div>
        </section>
        <section className="d-flex flex-column w-100" style={{ height: '55%' }}>
          <div className="d-flex flex-row justify-content-space-between align-items-center">
            <div className="col-65">
              <h4 className="medium-title">Suggested Projects</h4>
            </div>
            <div className="d-flex justify-content-end col-32">
              <h4 className="medium-title">View all projects</h4>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-space-between">
            {database.projects.map(project => (
              <Card
                width={25}
                key={project.id}>
                <div className="card-header">
                  <div className="d-flex align-items-center">
                    <div className="avatar">
                      <img alt="Avatar" src="https://api.adorable.io/avatars/55/abott@adorable.pngCo" />
                    </div>
                    <div className="profile-info">
                      <h5>{project.username}</h5>
                      <p>{project.postedTime}</p>
                    </div>
                    <div className="programmingLanguage gray">
                      <h4>{project.programmingLanguage}</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body" style={{ margin: '8% 0' }}>
                  <p>{project.description}</p>
                </div>
                <div className="d-flex card-footer">
                  <div className="d-flex" style={{ width: '85%' }}>
                    <div
                      className="markup purple m-top-0 m-bottom-0"
                      style={{ marginRight: '2%' }}>
                      <h4>{project.ethBudget} ETH</h4>
                    </div>
                    <div className="markup orange">
                      <h4>{project.btcBudget} BTC</h4>
                    </div>
                  </div>
                  <div className="budget">
                    <h4><span>$</span>{project.$budget}</h4>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        <section className="banner">
          <div className="img-wrapper">
            <img alt="Slack Icon" src={SlackIcon} />
          </div>
          <div className="content">
            <h3>Join the conversation on Slack</h3>
            <p>Stay up to date on the latest news and special programs that
                <br />only take place within the slack channel.
              </p>
          </div>
          <div className="buttons-wrapper">
            <button className="btn btn-no-bg">Remind later</button>
            <button className="btn btn-purple">Join Now</button>
          </div>
        </section>
        <section className="d-flex flex-column w-100">
          <div className="d-flex justify-content-space-between col-65" style={{ marginBottom: '2%' }}>
            <div className="w-50">
              <h3 className="bottom-text bottom-text-bold">Activity</h3>
            </div>
            <div className="d-flex justify-content-end w-50">
              <h3 className="bottom-text bottom-text-thin">View all activity</h3>
            </div>
          </div>
        </section>
        <section className="d-flex justify-content-space-between w-100" style={{ height: '70%' }}>
          <div className="d-flex col-65">
            <Card
              width={100}
              height={75}>
              <div className="card-header" style={{ height: '10%' }}>
                <h4 style={{ textTransform: 'uppercase' }}>Recent</h4>
              </div>
              <div className="card-body flex-column">
                {database.recentActivity.map(recent => (
                  <div key={recent.id} className="d-flex" style={{ height: '10%' }}>
                    <div className="d-flex align-items-center avatar" style={{ height: '10%' }}>
                      <div className={recent.icon === 'dolar' ? 'icon-wrapper icon-wrapper-green' : 'icon-wrapper icon-wrapper-purple'}>
                        {recent.icon === 'dolar'
                          ? <MdAttachMoney size={26} color="#10c176" />
                          : <DiCode size={26} color="#6877d3" />}
                      </div>
                      <div className="w-50">
                        <img alt="Avatar" src="https://api.adorable.io/avatars/55/abott@adorable.pngCo" />
                      </div>
                    </div>
                    <div className="profile-info" style={{ width: "80%" }}>
                      <div className="d-flex">
                        <div style={{ width: '85%' }}>
                          <h5>{recent.username}</h5>
                        </div>
                        <p>{recent.postedTime}</p>
                      </div>
                      <div className="" style={{ marginTop: "0.5%" }}>
                        <p>{recent.description}</p>
                      </div>
                      <div className="d-flex align-items-center" style={{ marginTop: '2%', marginBottom: '5%' }}>
                        {recent.ethBudget !== ""
                          ? <div className="markup purple" style={{ width: '20%', margin: 0 }}>
                            <h4>{recent.ethBudget} ETH</h4>
                          </div>
                          : <div className="markup orange" style={{ width: '20%', margin: 0 }}>
                            <h4>{recent.ethBudget} BTC</h4>
                          </div>}
                        <div className="budget" style={{ marginLeft: '3%' }}>
                          <h4><span>$</span>{recent.$budget}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="col-32">
            <Card
              height={75}>
              <div className="card-header d-flex" style={{ height: '10%' }}>
                <div style={{width: '60%'}}>
                  <h4 style={{ textTransform: 'uppercase' }}>Ranking</h4>
                </div>
                <div className="d-flex filter" style={{width: '40%'}}>
                  <p>This month</p>
                  <p><span>All time</span></p>
                </div>
              </div>
              <div className="card-body flex-column">
                {database.recentActivity.map(recent => (
                  <div key={recent.id} className="d-flex" style={{ height: '10%' }}>
                    <div className="d-flex align-items-center avatar" style={{ height: '10%' }}>
                      <div className={recent.icon === 'dolar' ? 'icon-wrapper icon-wrapper-green' : 'icon-wrapper icon-wrapper-purple'}>
                        {recent.icon === 'dolar'
                          ? <MdAttachMoney size={26} color="#10c176" />
                          : <DiCode size={26} color="#6877d3" />}
                      </div>
                      <div className="w-50">
                        <img alt="Avatar" src="https://api.adorable.io/avatars/55/abott@adorable.pngCo" />
                      </div>
                    </div>
                    <div className="profile-info" style={{ width: "80%" }}>
                      <div className="d-flex">
                        <div style={{ width: '85%' }}>
                          <h5>{recent.username}</h5>
                        </div>
                        <p>{recent.postedTime}</p>
                      </div>
                      <div className="" style={{ marginTop: "0.5%" }}>
                        <p>{recent.description}</p>
                      </div>
                      <div className="d-flex align-items-center" style={{ marginTop: '2%', marginBottom: '5%' }}>
                        {recent.ethBudget !== ""
                          ? <div className="markup purple" style={{ width: '20%', margin: 0 }}>
                            <h4>{recent.ethBudget} ETH</h4>
                          </div>
                          : <div className="markup orange" style={{ width: '20%', margin: 0 }}>
                            <h4>{recent.ethBudget} BTC</h4>
                          </div>}
                        <div className="budget" style={{ marginLeft: '3%' }}>
                          <h4><span>$</span>{recent.$budget}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
