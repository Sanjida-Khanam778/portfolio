import React from "react";

const Education = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className="max-w-2xl shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold text-white text-center mb-6 md:mb-10 lg:mb-16">
          Educational Qualification 🎓
        </h2>
        
        {/* Education List */}
        <div className="space-y-6">
          {/* Degree 1 */}
          <div className="p-4 border-l-4 border-blue-500 shadow-md rounded-md">
            <h3 className="text-2xl font-semibold ">
              BSc. in Information and Communication Engineering
            </h3>
            <p className="text-white/50">Noakhali Science and Technology University, 2018 - 2024</p>
          </div>

          {/* Degree 2 */}
          <div className="p-4 border-l-4 border-green-500 shadow-md rounded-md">
            <h3 className="text-2xl font-semibold ">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-white/50">Siddheswari Girls' College</p>
            <p className="text-white/50">Passing Year: 2017</p>
          </div>

          {/* Degree 3 */}
          <div className="p-4 border-l-4 border-purple-500 shadow-md rounded-md">
            <h3 className="text-2xl font-semibold ">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-white/50">Motijheel Govt. Girls High School</p>
            <p className="text-white/50">Passing Year: 2015</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
