import React, { Component } from 'react';
// import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './style.css';
import slack from './slack.png';
import api from '../../services/api';
import '../../../node_modules/react-vis/dist/style.css';
import {LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, FlexibleWidthXYPlot, LabelSeries } from 'react-vis';

export default class Main extends Component {

	state = {
		user: {},
		suggestedProjects: [],
		recentActivity: [],
		topEarners: [],
		topAll: [],
		topMounth: [],
		topCategories: []
	};

	componentDidMount() {
		this.loadInfo();
	}

	loadInfo = async () => {
		const response = await api.get('/data');

		const { user, suggestedProjects, recentActivity, topEarners } = response.data;

		this.setState({
			user,
			suggestedProjects,
			recentActivity,
			topCategories: user.topCategories,
			topAll: topEarners.allTime,
			topMounth: topEarners.thisMounth
		});
	}

	render() {

		const { user, suggestedProjects, recentActivity, topCategories, topAll } = this.state;

		const form = [
			{x: 0, y: 8, label: 'Jan'},
			{x: 1, y: 5, label: 'Fev'},
			{x: 2, y: 4, label: 'Mar'},
			{x: 3, y: 9, label: 'Apr'},
			{x: 4, y: 1, label: 'May'},
			{x: 5, y: 7, label: 'Jun'},
			{x: 6, y: 6, label: 'Jul'},
			{x: 7, y: 3, label: 'Ago'},
			{x: 8, y: 2, label: 'Sep'},
			{x: 9, y: 0, label: 'Out'}
		  ];

		return (
			<section className="container grid main-content">
				<div className="grid col-3">
					<div className="dash-item span-2 flex jc-sb earning-graph">
						<h5 className="mini-title">Earnings</h5>
						<div className="w30 flex ai-fs earnings-user">
							<div>
								<p className="big-value"><span className="lighter">$</span>{user.earnings}</p>
								<span className="sub"><span className="green">{user.earningsLastWeek}</span> since last week</span>
							</div>
							<div className="flex fd-c">
								<div className="blue-highlight">{user.eth} ETH</div>
								<div className="orange-highlight">{user.btc} BTC</div>
							</div>
						</div>
						<div className="w70 graph">
						<FlexibleWidthXYPlot height={200}>
							<VerticalGridLines />
							<HorizontalGridLines />
							<XAxis />
							<YAxis />
							<LabelSeries animation data={form} />
							<LineSeries data={form} />
						</FlexibleWidthXYPlot>
						</div>
					</div>
					<div className="dash-item">
						<div className="grid col-2-f">
							<div>
								<h5 className="mini-title">Rank</h5>
								<div className="big-value flex ai-fc fd-r">
									<span className="icon">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
									</span>
									<span>{user.rank}</span>
								</div>
								<span className="sub no-margin">You are in top <span className="green">{user.topRank}%</span></span>
							</div>
							<div>
								<h5 className="mini-title">Projects</h5>
								<div className="big-value flex ai-fc fd-r">
									<span className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
									</span>
									<span>{user.projects}</span>
								</div>
								<span className="sub no-margin"><span className="green">{user.projectsThisMounth}</span> in this mounth</span>
							</div>
						</div>
						<hr className="h-separator"></hr>
						<div>
							<h5 className="mini-title">Top Categories</h5>
							<div className="categories flex fd-r wrap">
								{topCategories.map(item => (
									<span className="gray-highlight" key={item}>{item}</span>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="grid col-3">
					<div className="span-3 flex jc-sb fd-r">
						<h3 className="no-margin">Suggested projects</h3>
						<a href="/">
							<span className="mini-title no-margin">View all <span className="mobile-none">projects</span></span>
						</a>
					</div>
					{suggestedProjects.map(project => (
						<div className="dash-item grid md-gap sug-project" key={project.id}>
							<div className="sug-user-info flex ai-fc jc-sb fd-r">
								<div className="flex ai-fc fd-r">
									<div className="user-avatar">
										<img src={project.avatar} alt="User"/>
									</div>
									<div>
										<h5>{project.owner}</h5>
										<span className="sub no-margin">{project.time}</span>
									</div>
								</div>
								<div className="sug-language">
									<span className="gray-highlight">{project.projectType}</span>
								</div>
							</div>
							<div>
								<p>{project.excerpt}</p>
								<hr className="h-separator"/>
								<div className="flex ai-fc jc-sb fd-r sug-price">
									<div className="sug-cripto">
										<span className="blue-highlight">{project.price.eth} ETH</span>
										<span className="orange-highlight">{project.price.btc} BTC</span>
									</div>
									<div>
										<span className="mid-value no-margin"><span className="lighter">$</span>{project.price.dollar}</span>
									</div>
								</div>
							</div>
						</div>
					))}
					
				</div>

				<div className="dash-item featured-message flex ai-fc">
					<img src={slack} alt="Slack"/>
					<div className="message-content">
						<h4>Join the conversation on Slack</h4>
						<p>Stay up to date on the latest news and special programs that only take place within the slack channel.</p>
					</div>
					<div className="message-cta flex ai-fc fd-r">
						<a href="/" className="cta-light">Remind later</a>
						<a href="/" className="cta-dark">Join now</a>
					</div>
				</div>

				<div className="grid col-3">
					<div className="span-2">
						<div className="span-3 flex jc-sb fd-r">
							<h3>Activity</h3>
							<a href="/">
								<span className="mini-title">View all</span>
							</a>
						</div>
						<div className="dash-item">
							<h5 className="mini-title">Recent</h5>
							<ul className="recent-activity">
								{recentActivity.map(activity => (
									<li className="activity-item flex ai-fs fd-r" key={activity.id}>
										<div className="act-img">
											<div className={`act-type ${activity.type}`}></div>
											<div className="user-avatar">
												<img src={activity.avatar} alt="User"/>
											</div>
										</div>
										<div className="act-content">
											<h5 className="flex jc-sb">{activity.relatedUser} <span className="sub no-margin">{activity.time}</span></h5>
											<span className="sub no-margin">{activity.excerpt}</span>
											<div className="act-price flex ai-fc fd-r">
												{activity.btcValue ? <span className="orange-highlight">{activity.btcValue} BTC</span> : <span className="blue-highlight">{activity.ethValue} ETH</span>}
												<span className="mid-value"><span className="lighter">$</span>{activity.dollarValue}</span>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div>
						<div className="flex jc-sb fd-r">
							<h3>Top Earners</h3>
							<a href="/">
								<span className="mini-title">View all</span>
							</a>
						</div>
						<div className="dash-item">
							<h5 className="mini-title flex jc-sb fd-r">
								Rankings 
								<span className="flex fd-r cat-ranking">
									<a href="/" className="sub no-margin">This mounth</a>
									<a href="/" className="sub no-margin active">All time</a>
								</span>
							</h5>
							<ol className="ranking">
								{topAll.map(top => (
									<li className="flex ai-fs fd-r" key={top.id}>
										<div className="user-avatar">
											<img src={top.avatar} alt="User"/>
										</div>
										<div className="rank-info">
											<h5>{top.name}</h5>
											<span className="sm-value"><span className="lighter">${top.earnings}</span></span>
										</div>
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			</section>
		);
	};
}