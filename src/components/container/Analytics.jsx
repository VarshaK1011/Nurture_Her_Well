import React from "react";
import dashboard from "../../assets/Dashboardmh.jpg";

const Analytics = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-2 ">
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            <span className="text-Teal text-5xl">Analytics</span>
          </div>
          <p className="pr-10 text-sm text-gray leading-7 mb-4">
            Our platform dashboard provides comprehensive analysis of feedback
            data, offering insights into trends, sentiments, and actionable
            recommendations. It empowers users to make informed decisions based
            on real-time feedback metrics, enhancing customer satisfaction and
            driving continuous improvement initiatives.
          </p>
        </div>
        <div className="  rounded-lg">
          <img src={dashboard} alt="" className="  w-[700px] h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
