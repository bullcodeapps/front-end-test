import React from 'react'
import './styles.css'

/* Components */
import Header from '../../components/Header'

/* Google Charts */
import Chart from 'react-google-charts'

/* Data */
import database from '../../services/database.json'

import SlackIcon from '../../assets/slack.png'

import { MdAttachMoney, MdStars } from "react-icons/md"
import { DiCode } from "react-icons/di"

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-space-between flex-wrap container dashboard-wrapper">
        <section className="w-100" style={{ height: '40%' }}>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div
                className="card d-flex flex-column justify-content-center border-radius-15">
                <div className="card-header">
                  <div className="col-12">
                    <h6 className="uppercase">Earnings</h6>
                  </div>
                </div>
                <div className="card-body d-lg-flex">
                  <div className="col-sm-12 col-md-12 col-lg-4 earnings-wrapper">
                    <div className="profit-statistics">
                      <h2><span>$</span>{database.earnings.$budget}</h2>
                      <p><span>+42</span> since last week</p>
                    </div>
                    <div className="markup purple">
                      <h6>{database.earnings.ethBudget} ETH</h6>
                    </div>
                    <div className="markup orange">
                      <h6>{database.earnings.btcBudget} BTC</h6>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-8">
                    <Chart
                      className="chart"
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
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div
                className="card h-100 border-radius-15">
                <div className="card-header">
                  <div className="row">
                    <div className="col-6">
                      <h6>Rank</h6>
                    </div>
                    <div className="col-6">
                      <h6>Projects</h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex">
                        <MdStars color="#6271d2" size={26} />
                        <h4>607</h4>
                      </div>
                      <p style={{ fontSize: '0.90em' }}>You're in top <span style={{ color: '#4bd195' }}>40%</span></p>
                    </div>
                    <div className="col-6">
                      <div className="d-flex">
                        <MdStars color="#6271d2" size={26} />
                        <h4>45</h4>
                      </div>
                      <p style={{ fontSize: '0.90em' }}><span style={{ color: '#4bd195' }}>10</span> in this month</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-12">
                      <h6 className="uppercase">Top Categories</h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="w-100 markup gray">
                        <h6>html</h6>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="w-100 markup gray">
                        <h6>clojure</h6>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="w-100 markup gray">
                        <h6>java</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ height: '45%', maxHeight: '55%' }}>
          <div className="d-flex flex-row justify-content-space-between align-items-center">
            <div className="col-8">
              <h4 className="medium-title">Suggested Projects</h4>
            </div>
            <div className="d-flex justify-content-end col-4">
              <h4 className="medium-title d-none d-sm-none d-md-block d-lg-block">View all projects</h4>
              <h4 className="medium-title d-sm-block d-md-none d-lg-none">View all</h4>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-space-between">
            <div className="row">
              {database.projects.map(project => (
                <div key={project.id} className="col-sm-12 col-md-12 col-lg-4">
                  <div
                    className="card border-radius-15"
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
                          <h6>{project.programmingLanguage}</h6>
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
                          <h6>{project.ethBudget} ETH</h6>
                        </div>
                        <div className="markup orange">
                          <h6>{project.btcBudget} BTC</h6>
                        </div>
                      </div>
                      <div className="budget">
                        <h5><span>$</span>{project.$budget}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Desktop banner */}
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
        <section className="d-flex justify-content-space-between flex-row w-100 bottom-section-desktop">
          <div className="d-flex justify-content-space-between col-8" style={{ marginBottom: '2%' }}>
            <div className="w-50">
              <h3 className="bottom-text bottom-text-bold">Activity</h3>
            </div>
            <div className="d-flex justify-content-end w-50">
              <h3 className="bottom-text bottom-text-thin uppercase">View all activity</h3>
            </div>
          </div>
          <div className="d-flex justify-content-space-between col-4" style={{ marginBottom: '2%' }}>
            <div className="w-50">
              <h3 className="bottom-text bottom-text-bold">Top Earners</h3>
            </div>
            <div className="d-flex justify-content-end w-50">
              <h3 className="bottom-text bottom-text-thin uppercase">View all</h3>
            </div>
          </div>
        </section>

        {/* Bottom section desktop */}
        <section className="w-100 bottom-section-desktop">
          <div className="row" style={{ height: '85%' }}>
            <div className="col-sm-12 col-md-12 col-lg-8 h-100">
              <div
                className="card border-radius-15 h-100">
                <div className="card-header" style={{ height: '10%' }}>
                  <h6 className="uppercase">Recent</h6>
                </div>
                <div className="card-body flex-column">
                  {database.recentActivity.map(recent => (
                    <div key={recent.id} className="d-flex" style={{ height: '30%' }}>
                      <div className="d-flex align-items-center avatar" style={{ height: '40%' }}>
                        <div className={recent.icon === 'dolar' ? 'icon-wrapper icon-wrapper-green' : 'icon-wrapper icon-wrapper-purple'}>
                          {recent.icon === 'dolar'
                            ? <MdAttachMoney size={26} color="#10c176" />
                            : <DiCode size={26} color="#6877d3" />}
                        </div>
                        <div className="w-50">
                          <img alt="Avatar" src={recent.avatar} />
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
                              <h6>{recent.ethBudget} ETH</h6>
                            </div>
                            : <div className="markup orange" style={{ width: '20%', margin: 0 }}>
                              <h6>{recent.ethBudget} BTC</h6>
                            </div>}
                          <div className="budget" style={{ marginLeft: '3%' }}>
                            <h5><span>$</span>{recent.$budget}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 h-100">
              <div
                className="card border-radius-15 h-100">
                <div className="card-header d-flex" style={{ height: '15%' }}>
                  <div style={{ width: '60%' }}>
                    <h6 className="uppercase">Ranking</h6>
                  </div>
                  <div className="d-flex filter" style={{ width: '50%' }}>
                    <p>This month</p>
                    <p><span>All time</span></p>
                  </div>
                </div>
                <div className="card-body flex-column">
                  <ol>
                    {database.ranking.map(ranking => (
                      <li key={ranking.id}>
                        <div className="d-flex">
                          <div className="d-flex align-items-center avatar" style={{ height: '10%' }}>
                            <img alt="Avatar" src={ranking.avatar} />
                          </div>
                          <div className="profile-info" style={{ width: "80%" }}>
                            <div className="d-flex">
                              <div style={{ width: '85%' }}>
                                <h5>{ranking.username}</h5>
                              </div>
                            </div>
                            <div className="d-flex align-items-center" style={{ marginTop: '2%', marginBottom: '5%' }}>
                              <div className="budget">
                                <h6><span>$</span>{ranking.$budget}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom section mobile and tablet */}
        <section className="w-100 bottom-section-mobile">
          <div className="d-flex row" style={{ marginBottom: '2%' }}>
            <div className="col-8">
              <h3 className="bottom-text bottom-text-bold">Activity</h3>
            </div>
            <div className="d-flex justify-content-end col-4">
              <h3 className="bottom-text bottom-text-thin uppercase">View all</h3>
            </div>
          </div>
          <div className="row bottom-section-content-wrapper">
            <div className="col-sm-12 col-md-12 col-lg-8 h-100">
              <div
                className="card border-radius-15 h-100">
                <div className="card-header" style={{ height: '10%' }}>
                  <h6 className="uppercase">Recent</h6>
                </div>
                <div className="card-body flex-column">
                  {database.recentActivity.map(recent => (
                    <div key={recent.id} className="d-flex" style={{ height: '30%' }}>
                      <div className="d-flex align-items-center avatar" style={{ height: '40%' }}>
                        <div className={recent.icon === 'dolar' ? 'icon-wrapper icon-wrapper-green' : 'icon-wrapper icon-wrapper-purple'}>
                          {recent.icon === 'dolar'
                            ? <MdAttachMoney size={26} color="#10c176" />
                            : <DiCode size={26} color="#6877d3" />}
                        </div>
                        <div className="w-50">
                          <img alt="Avatar" src={recent.avatar} />
                        </div>
                      </div>
                      <div className="profile-info">
                        <div className="d-flex">
                          <div className="row">
                            <div className="col-12">
                              <h5>{recent.username}</h5>
                            </div>
                            <div className="col-12">
                              <p>{recent.postedTime}</p>
                            </div>
                          </div>
                        </div>
                        <div className="" style={{ marginTop: "0.5%" }}>
                          <p>{recent.description}</p>
                        </div>
                        <div className="d-flex align-items-center" style={{ marginTop: '2%', marginBottom: '20%' }}>
                          {recent.ethBudget !== ""
                            ? <div className="markup purple" style={{ width: '40%', margin: 0 }}>
                              <h6>{recent.ethBudget} ETH</h6>
                            </div>
                            : <div className="markup orange" style={{ width: '40%', margin: 0 }}>
                              <h6>{recent.btcBudget} BTC</h6>
                            </div>}
                          <div className="budget" style={{ marginLeft: '3%' }}>
                            <h5><span>$</span>{recent.$budget}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
              <div
                className="card border-radius-15 h-100">
                <div className="card-header d-flex" style={{ height: '15%' }}>
                  <div style={{ width: '60%' }}>
                    <h6 className="uppercase">Ranking</h6>
                  </div>
                  <div className="d-flex filter" style={{ width: '50%' }}>
                    <p>This month</p>
                    <p><span>All time</span></p>
                  </div>
                </div>
                <div className="card-body flex-column">
                  <ol>
                    {database.ranking.map(ranking => (
                      <li key={ranking.id}>
                        <div className="d-flex">
                          <div className="d-flex align-items-center avatar" style={{ height: '10%' }}>
                            <img alt="Avatar" src={ranking.avatar} />
                          </div>
                          <div className="profile-info" style={{ width: "80%" }}>
                            <div className="d-flex">
                              <div style={{ width: '85%' }}>
                                <h5>{ranking.username}</h5>
                              </div>
                            </div>
                            <div className="d-flex align-items-center" style={{ marginTop: '2%', marginBottom: '5%' }}>
                              <div className="budget">
                                <h6><span>$</span>{ranking.$budget}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
