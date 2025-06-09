export default function Skills() {
  return (
    <section
      id="about"
      className="pt-10 px-35 bg-black text-white"
    >
      <h1 className="text-5xl font-bold  py-10">Skills</h1>

      <div className="">
        {/* Programming Languages */}
        <h2 className="text-3xl font-semibold mb-8">Languages I Know,</h2>
        <div className="flex items-center space-x-10 mb-8">
          <div className="text-center">
            <img src="/java.svg" alt="Java" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">Java</p>
          </div>
          <div className="text-center">
            <img src="/c.svg" alt="C" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">C</p>
          </div>
          <div className="text-center">
            <img src="/python.svg" alt="Python" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">Python</p>
          </div>
          <div className="text-center">
            <img src="/javascript.svg" alt="JavaScript" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">JavaScript</p>
          </div>
        </div>

        {/* Frameworks */}
        <h2 className="text-3xl font-semibold mb-4">Frameworks I've Used,</h2>
        <div className="flex items-center space-x-10 mb-8">
          <div className="text-center">
            <img src="/nextjs.svg" alt="Next.js" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">Next.js</p>
          </div>
          <div className="text-center">
            <img src="/react.svg" alt="React.js" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">React.js</p>
          </div>
          <div className="text-center">
            <img src="/nodejs.svg" alt="Node.js" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">Node.js</p>
          </div>
          <div className="text-center">
            <img src="/expressjs.svg" alt="Express.js" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">Express.js</p>
          </div>
        </div>

        {/* Databases and Cloud */}
        <h2 className="text-3xl font-semibold mb-4">Databases and Cloud I've Used</h2>
        <div className="flex items-center space-x-10 mb-8">
          <div className="text-center">
            <img src="/mongodb.svg" alt="MongoDB" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">MongoDB</p>
          </div>
          <div className="text-center">
            <img src="/mysql.svg" alt="MySQL" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">MySQL</p>
          </div>
          <div className="text-center">
            <img src="/gcp.svg" alt="Google Cloud Platform" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">GCP</p>
          </div>
        </div>

        {/* Developer & Designer Tools */}
        <h2 className="text-3xl font-semibold mb-4">Developer & Designer Tools I've Worked With</h2>
        <div className="flex items-center space-x-10">
          <div className="text-center">
            <img src="/git.svg" alt="Git" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">Git</p>
          </div>
          <div className="text-center">
            <img src="/github.svg" alt="GitHub" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">GitHub</p>
          </div>
          <div className="text-center">
            <img src="/figma.svg" alt="Figma" className="h-16 w-16 invert mx-auto" />
            <p className="mt-2">Figma</p>
          </div>
          <div className="text-center">
            <img src="/vercel.svg" alt="Vercel" className="h-16 w-16 mx-auto" />
            <p className="mt-2">Vercel</p>
          </div>
        </div>
      </div>
    </section>
  );
}