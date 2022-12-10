import React from 'react'
import './plans.css'
import {plansData} from '../../data/plansData'
import whiteTick  from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className="plans" id='plans'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-heading">
        <spn className="stroke-text">ready to start</spn>
        <spn>your jorney</spn>
        <spn className="stroke-text">now withus</spn>
      </div>
      <div className="plans-cards">
        {plansData.map((plan, idx) => (
          <div className="plan" key={idx}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div className="benifits">
              <span>see more benefits -></span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
