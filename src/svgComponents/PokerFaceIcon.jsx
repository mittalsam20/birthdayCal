import React from "react";

const PokerFaceIcon = React.memo(props => {
  const { width = 52 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="lucide lucide-annoyed-icon lucide-annoyed"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M8 15h8M8 9h2M14 9h2" />
    </svg>
  );
});

PokerFaceIcon.displayName = "PokerFaceIcon";
export default PokerFaceIcon;
