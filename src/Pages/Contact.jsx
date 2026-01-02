function Contact() {
  return (
    <>
      <div>
         <h1 className="text-3xl text-pink-500 font-bold ml-20">Contact me :</h1>
         <br />
         <p className="mx-10 text-xl">
          I would love to hear from you, whether you have a question, want to
          discuss a project, or just want to say hello, feel free to reach out
          to me through any of the following platforms :
        </p>

        <div className="flex justify-center my-10 gap-10">
          <a href="https://wa.me/2348128481141">
             <img
              src="https://cdn-icons-png.flaticon.com/128/3536/3536445.png"
              alt="whatsapp logo"
            />{" "}
          </a>
          <a href="https://www.instagram.com/_cutie_adun?igsh=MXVkbDl0YWcwbGdvdQ==">
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733558.png"
              alt="insta logo"
            />
          </a>
        </div>

        <div className="flex justify-center my-10 gap-10">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=adunadeasiwaju9@gmail.com"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
              alt="gmail icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/adunade-asiwaju-043353329">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3665/3665172.png"
              alt="linkedin logo"
            />
          </a>
        </div>
      </div>
    </>
  );
}
export default Contact;
