import React from "react";
import feature from '../images/featureproject1.png';
import { FeatureSubtitle, FeatureSmall, FeatureDesc } from '../components/Paragraph';
import { data } from '../Data/Feature.data';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Feature = () => {
  return (
    <section className="featured">
      
      <div className="left">
        <div className="inner transition2">
          <FeatureSubtitle text='Featured Project'/>
          <a href="https://buildersolar.webflow.io/" className="featured-title">
            Blog App
          </a>
          <FeatureSmall text='It will be available soon'/>

          {data.map((item) => (
            <FeatureDesc text={item.desc}/>
          ))}

          <FeatureSubtitle text='More To Come Soon.'/>
        </div>
      </div>
      <img
        className="right transition2"
        src={feature}
        alt="Featured Project"
      />
    </section>
  );
};

export default Feature;
