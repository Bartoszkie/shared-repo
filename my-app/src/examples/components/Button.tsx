/**
 * Mocked Button component
 */

interface ButtonProps {
  variant: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
}) => {
  return (
    <button className={variant} onClick={onClick}>
      {children}
    </button>
  );
};
