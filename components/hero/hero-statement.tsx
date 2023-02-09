import HeroAvatar from "./hero-avatar";

function HeroStatement() {
  return (
    <div className="not-prose grid grid-flow-col">
      <HeroAvatar isPlaceholder />
      <h3 className="grid space-y-2">
        <span className="text-sm opacity-50 sm:text-base">{`I solve problems by`}</span>
        <HeroStatementPhrase
          emphasizedText="imagining"
          otherText=" new solutions,"
        />
        <HeroStatementPhrase
          emphasizedText="designing"
          otherText=" UI/UX, and"
        />
        <HeroStatementPhrase
          emphasizedText="coding"
          otherText=" sleek experiences."
        />
      </h3>
    </div>
  );
}

export default HeroStatement;

function HeroStatementPhrase({
  emphasizedText,
  otherText,
}: {
  emphasizedText: string;
  otherText: string;
}) {
  return (
    <span className="text-lg text-black/80 sm:text-xl sm:leading-9">
      <span className="font-bold">{emphasizedText}</span>
      {otherText}
    </span>
  );
}
