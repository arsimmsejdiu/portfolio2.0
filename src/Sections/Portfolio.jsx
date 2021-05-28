import React, { useState, useEffect } from "react";
import Portfolios from "../components/Portfolios.component";
import { FeatureSubtitle } from '../components/Paragraph';
import axios from "axios";

const url = 'https://memories-projects.herokuapp.com/posts';

const Portfolio = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(url).then(res => {
      setPosts(res.data)
    }).catch(error => console.error(error))
  },[])

  return (
    <section id="work" className="portfolio">
      <div className="inner bottom transition2">
        <a href="/" className="featured-title">
          My Projects
        </a>
        <FeatureSubtitle text="/ All My Projects With Live Link /"/>
      </div>
      {posts.map(post => (
        <Portfolios 
          key={post.id}
          title={post.title}
          creator={post.creator}
          message={post.message}
          tags={post.tags}
          selectedFile={post.selectedFile}
        />
      ))}
    </section>
  );
};

export default Portfolio;
