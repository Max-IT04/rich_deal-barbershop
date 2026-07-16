interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}

export default function Button({ children, href, variant = "primary" }: ButtonProps) {
  const styles = {
    primary: "bg-[#D4A05A] text-black hover:bg-[#c4904a]",
    secondary: "border border-[#D4A05A] text-white hover:bg-[#D4A05A] hover:text-black",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center ${styles[variant]}`}
    >
      {children}
    </a>
  );
}