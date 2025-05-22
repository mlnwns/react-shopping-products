const MinusIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      onClick={onClick}
      role="button"
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ cursor: "pointer" }}
    >
      <rect width="24" height="24" rx="8" fill="white" />
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="7.5"
        stroke="black"
        strokeOpacity="0.1"
      />
      <path
        d="M6 12C10.6863 12 13.3137 12 18 12"
        stroke="#363636"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MinusIcon;
