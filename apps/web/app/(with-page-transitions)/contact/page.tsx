export const metadata = {
  title: "Contact",
  description: "How to reach me & where I'm at on the web",
};

function Contact() {
  const email = "Hello@jasonkylefrank.com";
  return (
    <p>
      <a className="text-xl" href={`mailto:${email}`}>
        {email}
      </a>
    </p>
  );
}

export default Contact;
