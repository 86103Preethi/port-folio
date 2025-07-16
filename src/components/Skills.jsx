import React from 'react';
import reactLogo from '../assets/react.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import svelte from '../assets/svelte.png';
import tailwind from '../assets/tailwind.png';
import js from '../assets/js.png';

const skillData = [
  { name: 'HTML5', icon: html, level: 90 },
  { name: 'CSS3', icon: css, level: 80 },
  { name: 'JavaScript', icon: js, level: 90 },
  { name: 'React.js', icon: reactLogo, level: 90 },
  { name: 'Tailwind CSS', icon: tailwind, level: 85 },
  { name: 'Svelte.js', icon: svelte, level: 80 },
  { name: 'Git', icon: svelte, level: 80 },
  { name: 'GSAP', icon: svelte, level: 50 },
  { name: 'Phasor.io', icon: svelte, level: 60 },
];

const Skills = () => {
  return (
    <div name="skills" className="bg-black text-[#6b7280] min-h-screen text-center flex items-center">
      <div className="max-w-[1000px] mx-auto w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#c76acb] text-[#ccd6f6]">Skills</p>
          <p className="py-6 text-[#d1d5db]">Technologies and frameworks I've worked with, along with proficiency levels</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillData.map((skill, index) => (
            <div key={index} className="shadow-md shadow-black p-4 rounded-lg bg-[#1f1f1f] hover:scale-110 duration-500">
              <img src={skill.icon} alt={skill.name} className="w-20 mx-auto mb-2" />
              <p className="text-lg font-semibold  text-[#ccd6f6]">{skill.name}</p>
              {/* <div className="w-full bg-gray-700 rounded-full h-1">
                <div className="bg-[#c76acb] h-1 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div> */}
              {/* <p className="text-sm mt-1">{skill.level}%</p>   */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
