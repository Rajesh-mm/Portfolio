import React from 'react';
import Uiux from './Uiux';
import Frontend from './Frontend';
import Android from './Android';
import './skills.css';


const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">My Technical Level</h2>
        <span className="section__subtitle">Skills</span>

        <div className="skills__container container grid">
            < Uiux />
            <Frontend />
            <Android />
        </div>
    </section>
  )
}

export default Skills