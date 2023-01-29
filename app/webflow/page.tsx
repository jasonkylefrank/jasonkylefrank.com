function Webflow() {
  const webflowEmail = "webflow@jasonkylefrank.com";
  return (
    <div>
      <h1>Hello Webflow!</h1>

      <p>{`Why am I interested in joining Webflow?`}</p>
      <p>{`Glad you asked!`}</p>
      <p>
        {`I'd like to describe that with the following `}
        <strong>short video</strong>
        {`.  If nothing else, I hope that you're a little entertained by it!`}
      </p>

      <div className="h-[600px] w-full">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/urmLZp2A03M"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <hr />
      <p>
        {`Just in case that video is not working where you are, here's a short text-based version to get you started:
        `}
      </p>
      <ul>
        <li>{`I've seen the design and development landscape evolve significantly over the past 11+ years`}</li>
        <li>
          {`These evolutions have provided us with the ability to get closer to what Bret Victor said: 
            "Creators need an immediate connection to what they are creating"
            `}
        </li>
        <li>
          {`I've worked on "both sides of the aisle", as an engineer and a UI/UX designer.  
            So I intimately understand the struggles that are involved in the process of iterating on 
            ideas and getting them fully implemented without losing the intent of the design.`}
        </li>
        <li>
          {`I love real-time, collaborative apps.  Building them is even more fun!`}
        </li>
        <li>{`DevLink could have a lot of potential!`}</li>
        <li>{`I want to be part of building something that helps creators bring ideas to life!`}</li>
      </ul>
      <p>{`Let's talk!`}</p>
      <p>
        <a className="text-xl" href={`mailto:${webflowEmail}`}>
          {webflowEmail}
        </a>
      </p>
    </div>
  );
}

export default Webflow;
