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
