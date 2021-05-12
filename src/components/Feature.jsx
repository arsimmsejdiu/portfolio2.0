import React from "react";

const Feature = () => {
  return (
    <section class="featured">
      <div class="left">
        <div class="inner transition2">
          <p class="subtitle">Featured Project</p>
          <a href="/" class="featured-title">
            DesignCourse.com ReDesign
          </a>

          <p class="featured-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            molestiae, soluta autem nemo quae delectus quas? Excepturi.
          </p>
        </div>
      </div>
      <img
        class="right transition2"
        src="../images/project-1.png"
        alt="Featured Project"
      />
    </section>
  );
};

export default Feature;
