import React, { Component } from 'react';
import { LineChart, Line, XAxis } from 'recharts';
import { FaChevronCircleDown, FaStar, FaArrowRight } from 'react-icons/fa';
import { MdReorder, MdChevronLeft, MdChevronRight } from 'react-icons/md';

import jwt from 'jsonwebtoken';

import {
  Body,
  Header,
  MenuTop,
  MenuBot,
  Container,
  BlocoGrafico,
  BlocoRank,
  BlocoRankProjects,
  Nav,
  Li,
  Btc,
  Eth,
  Circle,
  Linha1,
  Rank,
  Projects,
  BlocoTop,
  BlocoBot,
  Tags,
  Linha2,
  HeaderLinha2,
  Cards,
  Card,
  HeaderCard,
  ContentCard,
  FooterCard,
  Linha3,
  ButtonRemind,
  ButtonJoin,
  Linha4,
  BlocoActivity,
  BlocoTopEarners,
  HeaderActivity,
  BodyActivity,
  HeaderTopEarners,
  BodyTopEarners,
  Content,
} from './styles';

export default class Home extends Component {
  state = {
    nome: '',
    width: window.innerWidth,
  };

  componentDidMount = async e => {
    const sNome = await jwt.decode(window.location.href.split('home/')[1]).nome;
    this.setState({
      nome: sNome,
    });
  };

  render() {
    const { nome, width } = this.state;
    const data = [
      {
        name: 'Mar',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'May',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Jul',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Sep',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Nov',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Dez',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Jan',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];

    const renderLineChart = (
      <LineChart
        width={width > 1000 ? 650 : width > 600 ? 700 : 410}
        height={150}
        data={data}
      >
        <Line type="monotone" dataKey="uv" stroke="#6a79dd" />
        <XAxis dataKey="name" />
      </LineChart>
    );

    const body = (
      <Body>
        <Header>
          <MenuTop>
            <div id="container-logo">
              <MdReorder
                color="#fff"
                size="29"
                id="menu_mobile"
                display="none"
              />
              <img
                id="logo"
                src="http://api-lunacy.icons8.com/api/assets/19059960-a63c-4cdd-b099-ae0b544ea590/icon.png"
                alt="logo"
              />
              <span>Dash</span>
              <span>Elements</span>
            </div>
            <div>
              <img
                id="notification"
                src="http://api-lunacy.icons8.com/api/assets/0b3b5361-123b-4625-8369-37ae491288e5/notification.png"
                alt="notificação"
              />
              <span id="name_user">{nome}</span>
              <span id="btn_sair">
                <FaChevronCircleDown color="#fff" />
              </span>
            </div>
          </MenuTop>
          <MenuBot>
            <Nav>
              <Li>Home</Li>
              <Li>My Projects</Li>
              <Li>Payments</Li>
              <Li>Activity</Li>
              <Li>Setings</Li>
            </Nav>
          </MenuBot>
        </Header>

        <Container>
          <Content>
            <Linha1>
              <BlocoGrafico>
                <div id="earnings">
                  <div>
                    <h1>Earnigns</h1>
                    <h2>
                      <span>$</span>2878.90
                    </h2>
                    <h3>
                      <span>+42</span> since last week
                    </h3>
                  </div>

                  <div>
                    <span>
                      <Eth>0.9087 ETH</Eth>
                    </span>

                    <span>
                      <Btc>0.5 BTC</Btc>
                    </span>
                  </div>
                </div>
                <div id="grafico">{renderLineChart}</div>
              </BlocoGrafico>

              <BlocoRankProjects>
                <BlocoRank>
                  <BlocoTop>
                    <Rank>
                      <h2>RANK</h2>
                      <div className="icon-info">
                        <Circle>
                          <FaStar color="#fff" />
                        </Circle>
                        <span>607</span>
                      </div>
                      <div className="blocoRank-info">
                        <h3>
                          You´re in top <span>40%</span>
                        </h3>
                      </div>
                    </Rank>
                    <Projects>
                      <h2>PROJECTS</h2>
                      <div className="icon-info">
                        <Circle>
                          <MdChevronLeft color="#fff" size={25} />
                          <MdChevronRight color="#fff" size={25} />
                        </Circle>
                        <span>45</span>
                      </div>
                      <div className="blocoRank-info">
                        <h3>
                          <span>10</span> in this month
                        </h3>
                      </div>
                    </Projects>
                  </BlocoTop>

                  <BlocoBot>
                    <h3>TOP CATEGORIES</h3>
                    <Nav>
                      <Tags>ruby</Tags>
                      <Tags>clojure</Tags>
                      <Tags>java</Tags>
                    </Nav>
                  </BlocoBot>
                </BlocoRank>
              </BlocoRankProjects>
            </Linha1>

            <Linha2>
              <HeaderLinha2>
                <div>
                  <h3>Suggested Projects</h3>
                </div>
                <div>
                  <h3>VIEW ALL PROJECTS</h3>
                  <FaArrowRight />
                </div>
              </HeaderLinha2>
              <Cards>
                <Card>
                  <HeaderCard>
                    <div>
                      <img
                        src="http://api-lunacy.icons8.com/api/assets/560a34a0-7085-44af-85f6-def7c8eb266b/woman.png"
                        alt="avatar"
                      />
                      <div>
                        <span className="user-card">Alice Martin</span>
                        <span className="horas">5 hours</span>
                      </div>
                    </div>
                    <Tags id="tag">html</Tags>
                  </HeaderCard>
                  <ContentCard>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </ContentCard>
                  <FooterCard>
                    <div>
                      <Eth>0.9087 ETH</Eth>
                      <Btc>0.5 BTC</Btc>
                    </div>
                    <span>$760</span>
                  </FooterCard>
                </Card>
                <Card>
                  <HeaderCard>
                    <div>
                      <img
                        src="http://api-lunacy.icons8.com/api/assets/7a526cf3-aff0-4377-8b6e-4ca77a21c2ec/man2.png"
                        alt="avatar"
                      />
                      <div>
                        <span className="user-card">Alberto Donko</span>
                        <span className="horas">Yesterday, 9:40pm</span>
                      </div>
                    </div>
                    <Tags id="tag">ruby</Tags>
                  </HeaderCard>
                  <ContentCard>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </ContentCard>
                  <FooterCard>
                    <div>
                      <Eth>3 ETH</Eth>
                      <Btc>1 BTC</Btc>
                    </div>
                    <span>$3360</span>
                  </FooterCard>
                </Card>
                <Card>
                  <HeaderCard>
                    <div>
                      <img
                        src="http://api-lunacy.icons8.com/api/assets/b523b85f-d7fc-42a8-82d7-1afc76c49a6e/man.png"
                        alt="avatar"
                      />
                      <div>
                        <span className="user-card">Alexander Goe</span>
                        <span className="horas">Yesterday, 2:00pm</span>
                      </div>
                    </div>
                    <Tags id="tag">ruby</Tags>
                  </HeaderCard>
                  <ContentCard>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </ContentCard>
                  <FooterCard>
                    <div>
                      <Eth>1 ETH</Eth>
                      <Btc>0.2 BTC</Btc>
                    </div>
                    <span>$620</span>
                  </FooterCard>
                </Card>
              </Cards>
            </Linha2>

            <Linha3>
              <div>
                <div>
                  <img
                    src="http://api-lunacy.icons8.com/api/assets/f6568eed-7249-420a-88e3-e89577dc91ca/slack.png"
                    alt="slack"
                  />
                </div>
                <div>
                  <h2>Join the conversation on Slack</h2>
                  <p>
                    Stay up to date on the latest news and special programs that
                    only take place within the slack channel.
                  </p>
                </div>
              </div>
              <div id="botoes">
                <div>
                  <ButtonRemind>REMIND LATER</ButtonRemind>
                </div>
                <div>
                  <ButtonJoin>JOIN NOW</ButtonJoin>
                </div>
              </div>
            </Linha3>

            <Linha4>
              <BlocoActivity>
                <HeaderActivity>
                  <div>
                    <h1>Activity</h1>
                  </div>
                  <div>
                    <h3>VIEW ALL ACTIVITY</h3>
                    <FaArrowRight color="#79828b" />
                  </div>
                </HeaderActivity>
                <BodyActivity>
                  <div id="title">
                    <h1>Recent</h1>
                  </div>
                  <ul>
                    <li>
                      <div>
                        <div className="icon-user">
                          <Circle>
                            <img
                              src="http://api-lunacy.icons8.com/api/assets/686d239a-1fa6-4ae9-98fb-76260e417ffa/$.png"
                              alt="dollar"
                            />
                          </Circle>
                          <img
                            src="http://api-lunacy.icons8.com/api/assets/2aecc2d7-369e-49e8-a92d-86913f15e22a/man.png"
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <h2>Daniel Belu</h2>
                        <p>received $760 for a Ruby Project.</p>
                        <div className="info-money">
                          <Eth>1.2 ETH</Eth>
                          <p>
                            <span>$</span>760
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="horas">1 hour ago</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="icon-user">
                          <Circle>
                            <img
                              src="http://api-lunacy.icons8.com/api/assets/686d239a-1fa6-4ae9-98fb-76260e417ffa/$.png"
                              alt="dollar"
                            />
                          </Circle>
                          <img
                            src="http://api-lunacy.icons8.com/api/assets/3bd8762c-e576-41f9-8cbf-3b8c3f6d016f/man2.png"
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <h2>Daniel Belu</h2>
                        <p>Received $620 for an html project.</p>
                        <div className="info-money">
                          <Btc>0.2 BTC</Btc>
                          <p>
                            <span>$</span>760
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="horas">1 hour ago</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="icon-user">
                          <Circle>
                            <img
                              src="http://api-lunacy.icons8.com/api/assets/686d239a-1fa6-4ae9-98fb-76260e417ffa/$.png"
                              alt="dollar"
                            />
                          </Circle>
                          <img
                            src="http://api-lunacy.icons8.com/api/assets/affbbef5-5d47-4bd2-a547-c5c8cf4c7a05/woman.png"
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <h2>Alice Martin</h2>
                        <p>Submitted a project in html..</p>
                        <div className="info-money">
                          <Btc>0.3 BTC</Btc>
                          <p>
                            <span>$</span>760
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="horas">1 hour ago</span>
                      </div>
                    </li>
                  </ul>
                </BodyActivity>
              </BlocoActivity>
              <BlocoTopEarners>
                <HeaderTopEarners>
                  <div>
                    <h1>Top Earners</h1>
                  </div>
                  <div>
                    <h3>VIEW ALL</h3>
                    <FaArrowRight color="#79828b" />
                  </div>
                </HeaderTopEarners>
                <BodyTopEarners>
                  <div className="title">
                    <div>
                      <h1>Rankins</h1>
                    </div>
                    <div>
                      <h3>This month</h3>
                      <h3>
                        <span>All time</span>
                      </h3>
                    </div>
                  </div>
                  <ol>
                    <li>
                      <div>
                        <img
                          src="http://api-lunacy.icons8.com/api/assets/25ee5d9f-4b3f-4b33-9e58-30bee61efad9/man.png"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <h3>Mathew John</h3>
                        <span>$10938.34</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img
                          src="http://api-lunacy.icons8.com/api/assets/2aecc2d7-369e-49e8-a92d-86913f15e22a/man.png"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <h3>Daniel Belu</h3>
                        <span>$9087.10</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img
                          src="http://api-lunacy.icons8.com/api/assets/82ccc38d-4515-4805-82cc-90b8c820cf04/woman.png"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <h3>Elizabeth Kin</h3>
                        <span>$6789.90</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img
                          src="http://api-lunacy.icons8.com/api/assets/2aecc2d7-369e-49e8-a92d-86913f15e22a/man.png"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <h3>Arosuh Uyt</h3>
                        <span>$6009.00</span>
                      </div>
                    </li>
                  </ol>
                </BodyTopEarners>
              </BlocoTopEarners>
            </Linha4>
          </Content>
        </Container>
      </Body>
    );
    return body;
  }
}
