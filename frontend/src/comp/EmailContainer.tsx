import React from "react";

const EmailContainer = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>

        <div className="bg-slate-500 text-gray-950 rounded p-6">
          <p>Dear [Name],</p>

          <p>
            I hope this message finds you well. I wanted to take a moment to
            wish you a very happy birthday! 🎂
          </p>

          <p>
            May your day be filled with joy, laughter, and all the things that
            make you happiest. On this special occasion, I hope you get to relax
            and celebrate with those who mean the most to you.
          </p>

          <p>
            Here's to another year of wonderful memories, great achievements,
            and new adventures. Cheers to you and all the best for the coming
            year!
          </p>

          <p>Warmest wishes,</p>

          <p>[Your Name]</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
};

export default EmailContainer;
