import React from 'react';
import internship from '../assets/Internship.jpg';
import svelte from '../assets/svelte.png';
import certificateIcon from '../assets/Internship.jpg';

const Certificate = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-black text-[#6b7280]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#c76acb] text-[#ccd6f6]">
            Work
          </p>
          <p>Some of my recent works with proofs and certificates</p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div
              style={{ backgroundImage: `url(${internship})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div shadow-lg shadow-black"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-black tracking-wider">
                My Internship Program
              </span>
            </div>
            <div className="pt-8 text-center">
              <a href="/" className="mt-4 inline-block">
                <img
                  src={certificateIcon}
                  alt="Certificate"
                  className="w-8 h-8 mx-auto"
                />
                <p className="mt-2 text-sm text-gray-400">Certificate</p>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div
            style={{ backgroundImage: `url(${svelte})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div shadow-lg shadow-black"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-black tracking-wider">
                Medicinal App with Doctor Consultancy
              </span>
            </div>
            <div className="pt-8 text-center">
              <a href="/" className="mt-4 inline-block">
                <img
                  src={certificateIcon}
                  alt="Certificate"
                  className="w-8 h-8 mx-auto"
                />
                <p className="mt-2 text-sm text-gray-400">Certificate</p>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div
            style={{ backgroundImage: `url(${svelte})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div shadow-lg shadow-black"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-black tracking-wider">
                Betting App
              </span>
            </div>
            <div className="pt-8 text-center">
              <a href="/" className="mt-4 inline-block">
                <img
                  src={certificateIcon}
                  alt="Certificate"
                  className="w-8 h-8 mx-auto"
                />
                <p className="mt-2 text-sm text-gray-400">Certificate</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
