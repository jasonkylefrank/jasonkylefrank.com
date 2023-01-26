function Webflow() {
  return (
    <div>
      <h2>Hello Webflow!</h2>
      <p>{`Why am I interested in joining Webflow?`}</p>
      <p>
        {`Glad you asked! I'd like to describe that with a `}
        <strong>short video</strong>
        {` that I am 
          planning to create and post here in the coming days.`}
      </p>
      <p>
        {`However, for now I'll start with just a `}
        <strong>{`short, text-based version as a placeholder`}</strong>
        {` just in case you visit this page before I have
        the video ready. 😃 `}
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
      </ul>
      <div className="h-4" />
      <p className="italic">{`Please check back in a few days so you can view the video!`}</p>
    </div>
  );
}

export default Webflow;
