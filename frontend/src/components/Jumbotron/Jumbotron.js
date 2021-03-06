import React from 'react';

import {Link} from 'react-router-dom';

import { useHistory } from "react-router-dom";


const Jumbotron = () => {
  let history = useHistory();

  const handleClick = () => {
		history.push("/selectionpage");
	};



  return (
    <section id="hero" className="clearfix">
    <div className="container d-flex h-100">
      <div className="row justify-content-center align-self-center" data-aos="fade-up">
        <div className="col-lg-6 intro-info order-lg-first order-last" data-aos="zoom-in" data-aos-delay={100}>
          <h2>Dry clean <span>UNLIMITED</span> number of your dirty laundry Weekly <span> at no extra cost </span></h2>
          <div>
            <button onClick={handleClick} className="btn-get-started scrollto">Schedule a pick up</button>
          </div>
        </div>
        <div className="col-lg-6 intro-img order-lg-last order-first" data-aos="zoom-out" data-aos-delay={200}>
          <img src="assets/img/intro-img.svg" alt="launtry-service" className="img-fluid" />
        </div>
      </div>
    </div>
    
  </section>
  
  )
}

export default Jumbotron

