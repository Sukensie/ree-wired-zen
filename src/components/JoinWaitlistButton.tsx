import { useWaitlist } from "@/contexts/WaitlistContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

interface JoinWaitlistButtonProps {
  children?: ReactNode;
  size?: "lg" | "sm" | "default";
  variant?: "default" | "outline" | "ghost" | "link";
  className?: string;
  includeIcon?: boolean;
}

const JoinWaitlistButton = ({
  children = "Join the waitlist",
  size = "lg",
  variant = "default",
  className = "",
  includeIcon = true,
}: JoinWaitlistButtonProps) => {
  const { openWaitlist } = useWaitlist();

  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      onClick={openWaitlist}
    >
      {children}
      {includeIcon && <ArrowRight className="ml-2 h-5 w-5" />}
    </Button>
  );
};

export default JoinWaitlistButton;
