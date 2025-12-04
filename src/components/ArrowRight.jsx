function ArrowRight({ color = "#683142", size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ minWidth: size }}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default ArrowRight;
