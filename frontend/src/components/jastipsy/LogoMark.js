export function LogoMark({ className = "h-8 w-8" }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/favlogo.svg`}
      alt="Jastipisy"
      className={`object-contain ${className}`}
    />
  );
}