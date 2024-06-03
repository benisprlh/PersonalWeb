const Experiences = [
  {
    start: "Feb 2024",
    end: "Mar 2024",
    position: "Project Based Internship",
    role: "Fullstack Developer",
    company: "BANK BTPN Syariah x Rakamin Academy",
    description: "Make a project",
    technologies: ["Golang", "Java", "Javascript", "Vue", "GoGin"],
  },
];

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {Experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 flex-row">
              <p className="mb-2 text-sm text-neutral-400">
                {experience.start}{" "}
                {experience.end !== "" && `- ${experience.end}`}
              </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4 text-xl">
              <h6 className="mb-2 font-semibold ">
                {experience.role} -{" "}
                <span className="text-lg text-green-100">
                  {experience.company}
                </span>
                <span className="text-xs text-green-300 ml-2">
                  {experience.position !== "" && experience.position}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
