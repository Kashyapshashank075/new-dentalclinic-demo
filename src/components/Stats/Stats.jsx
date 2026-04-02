import React from "react";
import { stats } from "../../data/siteData";
import "./Stats.css";

export default function Stats() {
  return (
    <div className="stats-bar">
      <div className="container stats-bar__inner">
        {stats.map((s, i) => (
          <React.Fragment key={s.label}>
            <div className="stats-bar__item">
              <span className="stats-bar__value">{s.value}</span>
              <span className="stats-bar__label">{s.label}</span>
            </div>
            {i < stats.length - 1 && <div className="stats-bar__sep" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
