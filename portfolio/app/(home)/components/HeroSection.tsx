import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row justify-between items-center">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you!
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Beni."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Indonesia, I'm a Fullstack developer passionate about building a modern web application that users love"
          }
        </p>
        <Link
          href={"mailto:benisaprulah5@gmail.com"}
          className="inline-block group"
        >
          <div>
            <h2 className="text-xl font-bold group-hover:text-green-500 transition-all">
              Contact Me
            </h2>
            <div className="w-full h-2 bg-green-500 rounded-full "></div>
            <div className="w-full h-2 bg-indigo-500 rounded-full translate-x-1"></div>
          </div>
        </Link>
      </div>
      <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
