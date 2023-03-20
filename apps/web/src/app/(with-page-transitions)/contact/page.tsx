import { Anchor } from "ui";

export const metadata = {
  title: "Contact",
  description: "How to reach me & where I'm at on the web",
};

function Contact() {
  const email = "Hello@jasonkylefrank.com";
  return (
    <p>
      <Anchor type="mailto" className="text-xl" href={email} />
    </p>
  );
}

export default Contact;
