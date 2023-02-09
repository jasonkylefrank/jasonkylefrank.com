import TwitchOverlay from "./twitch-overlay";

export const metadata = {
  title: "Twitch",
  description: "Why I'm a good fit for Twitch!",
};

export default function Twitch() {
  const twitchEmail = "twitch@jasonkylefrank.com";
  return (
    <div>
      <TwitchOverlay />
      <h1>Hello Twitch!</h1>

      {/* <audio src="/assets/music/rock-it.mp3" controls></audio> */}

      <p>{`Why am I interested in joining Twitch?`}</p>
      <p>{`Glad you asked!`}</p>
      <p>
        {`I'd like to describe that with the following `}
        <strong>short video</strong>
      </p>
      <p>(Video coming soon)</p>
      <hr />
      <p>...</p>
      <ul>
        <li>{`...`}</li>
        <li>{`...`}</li>
        <li>{`...`}</li>
      </ul>
      <p>{`Let's talk!`}</p>
      <p>
        <a href={`mailto:${twitchEmail}`}>{twitchEmail}</a>
      </p>
    </div>
  );
}
