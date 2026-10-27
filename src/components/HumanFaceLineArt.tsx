import React from 'react';

interface FaceLineArtProps {
  className?: string;
  strokeColor?: string;
  variant?: 'profile' | 'duo' | 'serene' | 'ambient';
}

/**
 * Luxury continuous golden line-art silhouettes of human faces
 * Replacing traditional botanical floral cliches with soulful African facial contours
 */
export const HumanFaceLineArt: React.FC<FaceLineArtProps> = ({
  className = 'w-24 h-24',
  strokeColor = '#D49B6A',
  variant = 'profile'
}) => {
  if (variant === 'serene') {
    return (
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Serene face contour with elegant jawline, closed eye, and delicate lips */}
        <path
          d="M32 20 C42 12, 58 12, 68 22 C78 32, 80 48, 76 64 C73 78, 64 96, 52 108 C46 114, 40 115, 38 110 C34 100, 32 88, 30 76"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Forehead to nose bridge and lips */}
        <path
          d="M48 24 C50 34, 52 46, 58 56 C61 61, 62 65, 59 66 C55 67, 52 68, 54 73 C55 76, 58 77, 56 80 C53 84, 48 85, 46 88 C43 92, 45 98, 48 104"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Closed serene eyelid and lash contour */}
        <path
          d="M44 48 C49 53, 55 53, 58 49"
          stroke={strokeColor}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        {/* Subtle eyebrow arc */}
        <path
          d="M42 42 C48 40, 56 41, 60 45"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Lips curvature */}
        <path
          d="M51 74 C54 73, 58 73, 61 75"
          stroke={strokeColor}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === 'duo') {
    return (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Facing profile one */}
        <path
          d="M30 30 C50 20, 70 35, 65 60 C62 75, 50 85, 55 105 C58 118, 50 135, 40 145"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M50 48 C55 49, 58 48, 62 45"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Entwined second profile */}
        <path
          d="M130 35 C110 22, 88 40, 92 65 C95 82, 108 92, 102 112 C98 126, 108 140, 118 150"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M110 52 C104 53, 100 52, 96 48"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === 'ambient') {
    return (
      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Abstract continuous face and neck contour */}
        <path
          d="M60 40 C75 25, 110 20, 135 38 C155 52, 160 80, 150 110 C140 140, 115 165, 100 190 C85 215, 65 230, 40 235"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 3"
        />
        <path
          d="M95 50 C100 70, 105 90, 115 110 C120 120, 122 128, 116 130 C110 132, 106 136, 112 144 C116 150, 120 152, 118 158 C112 166, 102 170, 96 178"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="106" cy="92" r="1.5" fill={strokeColor} />
      </svg>
    );
  }

  // Default clean profile line art
  return (
    <svg
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Forehead, nose, lips, chin and neck flowing in a single continuous line */}
      <path
        d="M38 18 C52 14, 68 18, 74 30 C78 38, 77 46, 73 52 C70 56, 72 62, 75 66 C77 69, 75 73, 70 75 C68 76, 68 78, 71 82 C72 84, 70 87, 65 89 C60 91, 56 95, 54 100 C50 110, 52 120, 58 126"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Eyebrow & Lash */}
      <path
        d="M52 38 C56 36, 62 36, 66 39"
        stroke={strokeColor}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M54 44 C58 48, 63 47, 66 43"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Ear and jaw hint */}
      <path
        d="M40 50 C36 52, 35 60, 39 64 C42 67, 43 72, 40 76"
        stroke={strokeColor}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
};
