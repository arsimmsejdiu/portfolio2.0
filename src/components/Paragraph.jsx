import React from "react";

export const FeatureDesc = ({ text }) => (
  <p className="featured-desc">{text}</p>
);

export const FeatureSubtitle = ({ text }) => <p class="subtitle">{text}</p>;

export const FeatureSmall = ({ text }) => <small class="small">{text}</small>;

export const HeroMeet = ({ text }) => (
  <div class="meet stagger1">
    <span>👇</span>
    <p>{text}</p>
  </div>
);

export const TitleH1 = ({ text }) => <h1 class="stagger1">{text}</h1>;


