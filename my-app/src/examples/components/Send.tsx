/**
 * Mocked Send component
 */

interface SendProps {
    width: number;
    height: number;
    className: string;
}

export const Send: React.FC<SendProps> = ({ width, height, className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 2H3C1.89543 2 1 2.89543 1 4V20C1 21.1046 1.89543 22 3 22H21C22.1046 22 23 21.1046 23 20V4C23 2.89543 22.1046 2 21 2ZM21 4V8.76777L12.7071 12.7071C12.3166 12.3166 11.6834 12.3166 11.2929 12.7071L3 21V4H21Z"
      fill="currentColor"
    />
  </svg>
);