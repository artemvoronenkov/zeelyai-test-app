import type { SVGProps } from "react";

export const AiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <g clipPath="url(#AI_svg__a)">
      <path
        fill="url(#AI_svg__b)"
        d="m10.033 10.457.235 1.2.236-1.2c.436-2.216 2.138-3.948 4.315-4.392l1.179-.24-1.18-.24c-2.176-.443-3.878-2.175-4.314-4.39l-.236-1.2-.235 1.2c-.436 2.215-2.138 3.947-4.315 4.39l-1.179.24 1.179.24c2.177.444 3.88 2.176 4.315 4.392"
      />
      <path
        fill="url(#AI_svg__c)"
        d="m5.172 14.897.13.658.129-.658a3.04 3.04 0 0 1 2.366-2.408l.646-.131-.646-.132A3.04 3.04 0 0 1 5.43 9.82L5.3 9.16l-.129.658a3.04 3.04 0 0 1-2.365 2.407l-.647.132.647.131a3.04 3.04 0 0 1 2.365 2.408"
      />
    </g>
    <defs>
      <linearGradient
        id="AI_svg__b"
        x1={11.858}
        x2={7.622}
        y1={3.369}
        y2={12.336}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5BF0A5" />
        <stop offset={0.265} stopColor="#5BF0A5" />
        <stop offset={0.615} stopColor="#00BF5F" />
        <stop offset={1} stopColor="#009D4E" />
      </linearGradient>
      <linearGradient
        id="AI_svg__c"
        x1={6.173}
        x2={3.851}
        y1={11.011}
        y2={15.927}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5BF0A5" />
        <stop offset={0.265} stopColor="#5BF0A5" />
        <stop offset={0.615} stopColor="#00BF5F" />
        <stop offset={1} stopColor="#009D4E" />
      </linearGradient>
      <clipPath id="AI_svg__a">
        <rect
          width={18}
          height={18}
          fill="#fff"
          rx={4.041}
          transform="matrix(-1 0 0 1 18 0)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default AiIcon;
