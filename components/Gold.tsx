import React from 'react';

const Award = ({ title, championship, Kick, details }) => (
  <div className="award">
    <p>
      <span className="gold">{title}</span> {championship}
    </p>
    <p className="Kick">{Kick}</p>
    <p className="details">{details}</p>
  </div>
);

const Gold = () => {
  const awards = [
    { title: '2 X GOLD', championship: '- WAKO SENIOR WORLD', Kick: 'KICKBOXING CHAMPIONSHIPS', details: '-63KG SENIOR MEN\'S IC KICKBOXING 2021 & 2011.' },
    { title: '2 X GOLD', championship: '- WAKO SENIOR WORLD', Kick: 'KICKBOXING CHAMPIONSHIPS', details: '-63KG SENIOR MEN\'S IC KICKBOXING 2021 & 2011.' },
    { title: '2 X GOLD', championship: '- WAKO SENIOR WORLD', Kick: 'KICKBOXING CHAMPIONSHIPS', details: '-63KG SENIOR MEN\'S IC KICKBOXING 2021 & 2011.' },
  ];

  return (
    <div className="awards-section">
      <div className="left-column">
        <div className="vertical-text">--- WORLD & EUROPEAN ---</div>
        
        {awards.map((award, index) => (
          <Award key={index} {...award} />
        ))}
      </div>
      <div className="middle-column">
      <div className="vertical-text">--- WORLD & EUROPEAN ---</div>
        {awards.map((award, index) => (
          <Award key={index} {...award} />
        ))}
      </div>
      <div className="right-column">
      <div className="vertical-text">--- WORLD & EUROPEAN ---</div>
        {awards.map((award, index) => (
          <Award key={index} {...award} />
        ))}
      </div>
    </div>
  );
};

export default Gold;