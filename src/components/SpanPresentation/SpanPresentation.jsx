export const SpanPresentation = ({span}) => {
  return (
    <span className="text-cyan-400 text-lg font-mono tracking-wider px-4">
      {`<${span} />`}
    </span>
  );
};
