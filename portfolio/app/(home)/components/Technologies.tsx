import {
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiReact className="text-6xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-6xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className="text-6xl " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-6xl " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-6xl text-sky-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-6xl text-sky-600" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
