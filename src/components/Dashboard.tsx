const metrics = [
  {
    label: "Transactions / sec",
    value: "18,240",
    delta: "+5.2%",
  },
  {
    label: "Active validators",
    value: "1,284",
    delta: "+12",
  },
  {
    label: "Avg. finality",
    value: "1.8s",
    delta: "-0.3s",
  },
  {
    label: "Network uptime",
    value: "99.982%",
    delta: "+0.004%",
  },
];

const alerts = [
  {
    title: "Routing latency detected",
    detail: "Asia-Pacific edge cluster fluctuating beyond target SLA.",
    severity: "Investigating",
  },
  {
    title: "Validator rotation scheduled",
    detail: "Next epoch rotation in 42 minutes. 14 nodes queued.",
    severity: "Scheduled",
  },
];

const Dashboard = () => {
  return (
    <main className="dashboard">
      <section className="dashboard__metrics">
        {metrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <p className="metric-card__label">{metric.label}</p>
            <p className="metric-card__value">{metric.value}</p>
            <p className="metric-card__delta">{metric.delta}</p>
          </article>
        ))}
      </section>

      <section className="dashboard__grid">
        <article className="panel panel--wide">
          <h2>Consensus Health</h2>
          <p className="panel__subtitle">Epoch 18, status: stable</p>
          <div className="panel__bars">
            <div className="panel__bar">
              <span>Finalized blocks</span>
              <strong>98.4%</strong>
            </div>
            <div className="panel__bar">
              <span>Validator sync</span>
              <strong>96.9%</strong>
            </div>
            <div className="panel__bar">
              <span>Proof throughput</span>
              <strong>91.2%</strong>
            </div>
          </div>
        </article>

        <article className="panel">
          <h2>Liquidity Pulse</h2>
          <p className="panel__subtitle">Total bridged volume</p>
          <div className="panel__stat">$4.82B</div>
          <p className="panel__note">+8.3% over last 24 hours</p>
        </article>

        <article className="panel">
          <h2>Validator Tasks</h2>
          <ul className="panel__list">
            <li>Deploy patch set #481</li>
            <li>Rotate hardware keys</li>
            <li>Audit messaging relays</li>
          </ul>
        </article>
      </section>

      <section className="dashboard__alerts">
        <h2>Operational Alerts</h2>
        <div className="dashboard__alert-grid">
          {alerts.map((alert) => (
            <article key={alert.title} className="alert-card">
              <div>
                <h3>{alert.title}</h3>
                <p>{alert.detail}</p>
              </div>
              <span className="alert-card__severity">{alert.severity}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
