import { Anchor } from "ui";

export const metadata = {
  title: "Work",
  description: "Work samples",
};

export default function WorkPage() {
  const email = "Work@jasonkylefrank.com";
  return (
    <section>
      <h3 className="!mt-0">Content coming soon!</h3>
      <br />
      <div className="text-gray-500">
        <p>
          {
            "Want to get notified when I've updated this page with more content?"
          }
        </p>
        <p>
          {"Ping me at: "}
          <Anchor type="mailto" href={email} />
        </p>
      </div>
    </section>
  );
}
