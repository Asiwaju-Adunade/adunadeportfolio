function Skills() {
  return (
    <>
      {/* skills part */}
      <h1 className="text-pink-500 mx-20 text-2xl font-bold">
        Skills & Tools{" "}
      </h1>
      <br />

      <h1 className="text-pink-500 text-2xl mx-20 font-bold"> Skills :</h1>
      <div className="flex justify-center gap-15 my-10">
        <div>
          <img
            className="my-10"
            src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
            alt="html icon"
          />
          <img
            className="my-10 w-35 h-30"
            src="/images-1.png"
            alt="tailwind icon"
          />
          <img
            className="my-10"
            src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"
            alt="react icon"
          />
        </div>

        <div>
          <img
            className="my-10"
            src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png"
            alt="css icon"
          />
          <img
            className="my-10"
            src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
            alt="javascript icon"
          />
        </div>
      </div>

      {/* tools part */}
      <h1 className="text-pink-500 text-2xl my-5 mx-20 font-bold"> Tools :</h1>
      <div className="flex my-10 justify-center gap-15">
        <img
          src="https://cdn-icons-png.flaticon.com/128/906/906324.png"
          alt="vscode logo"
        />
        <a href="https://github.com/Asiwaju-Adunade">
          <img
            src="https://cdn-icons-png.flaticon.com/128/919/919847.png"
            alt="github logo"
          />
        </a>
      </div>

      <div className="flex my-10 justify-center gap-15">
        <img className="w-35 h-30" src="/Netlify.png" alt="netlify logo" />
        <img
          src="https://cdn-icons-png.flaticon.com/128/2111/2111615.png"
          alt="slack logo"
        />
      </div>
    </>
  );
}
export default Skills;
