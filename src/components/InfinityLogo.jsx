export default function InfinityLogo({ size = 48, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size / 2}
      viewBox="0 0 100 50"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="inf-grad" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </defs>
      <path
        d="M50 25 C40 8, 14 8, 14 25 C14 42, 40 42, 50 25 C60 8, 86 8, 86 25 C86 42, 60 42, 50 25 Z"
        stroke="url(#inf-grad)"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  )
}
