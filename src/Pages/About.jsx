function About() {
  return (
    <>
      <div className="mx-20">
        <h2 className="font-semibold text-2xl "> About Me -</h2>
        <h1 className="text-2xl ">
          Hi, I'm <span className="text-pink-500"> Adunade Asiwaju, </span> a
          passionate{" "}
          <span className="text-pink-500">Frontend Web Developer</span>, who
          loves turning ideas into interactive and visually appealing web
          experiences.
        </h1>{" "}
       </div>
      <div className="md:flex mx-10 gap-10">
        <div>
          <img className="my-10 rounded h-100 w-180" src="my image.jpg" alt="my image" />
       </div>

        <div className="my-10">
        {/* second paragraph */}
        <p>
          {" "}
          I enjoy building responsive and user friendly applications and
          websites using{" "}
          <span className="underline decoration-red-600 decoration-2">
            HTML
          </span>
          ,{" "}
          <span className="underline decoration-red-600 decoration-2">
            CSS ,
          </span>{" "}
          <span className="underline decoration-red-600  underline-offset-2 decoration-2">
            Tailwind CSS
          </span>
          ,{" "}
          <span className="underline decoration-red-600  underline-offset-2 decoration-2">
            {" "}
            JavaScript
          </span>{" "}
          and{" "}
          <span className="underline decoration-red-600 underline-offset-2 decoration-2">
            React
          </span>
          . I am passionate about learning new technologies and continuously
          improving my coding skills. To me, coding is therapeautic.
        </p>{" "}
        <br />

        {/* third paragraph */}
        <p>
          When I am not coding, you can find me exploring new tech trends, or
          working on personal projects to enhance my skills. I am always eager to
          learn more to add to my knowledge in tech.
        </p>{" "}
        <br />

        {/* fourth paragraph */}
        <p>
          {" "}
          I have built several application and website which include{" "}
          <b>Calculator App, Todo List App, Weather App, Cart-items Page </b> and I cloned a
          website which is the <strong>Chi Farm Website.</strong>
        </p>{" "}
        <br />

        {/* fifth paragraph */}
        <p>
          I am passionate about buiding impactful solutions that not only look
          good but also make people’s lives easier.{" "}
        </p>{" "}
        <br />

        {/* sixth paragraph */}
        <p>
          Feel free to reach out if you would like to connect or discuss potential
          opportunities. Let's create something amazing together.
        </p>{" "}
       </div>
       </div>

        <img className="mx-auto mb-10 w-60 h-50" src="https://cdn-icons-png.flaticon.com/128/2888/2888407.png"/>
    </>
  );
}
export default About;
