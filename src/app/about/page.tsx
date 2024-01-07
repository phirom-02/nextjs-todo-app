import React from "react";

const AboutPage = () => {
  const functionalities = [
    "Create Group Todo",
    "Edit Group Todo",
    "Show Group Todo",
    "Delete Group Todo",
    "Create Task",
    "Show Tasks",
    "Edit Task",
    "Delete Task",
    "Save Task to localStorage",
    "Filter Task",
    "Search Task",
  ];

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">About Next.js Todo app website</h1>
        <div>
          <h3 className="text-2xl font-medium mb-2">Functionalities</h3>
          <ul className="ml-4">
            {functionalities.map((fn, index) => (
              <li className="list-disc text-slate-400" key={index}>
                {fn}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-slate-300">
          This is a personal project website built by
          <b className="text-slate-50"> ROM VLONE SOLDIER.</b>
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
