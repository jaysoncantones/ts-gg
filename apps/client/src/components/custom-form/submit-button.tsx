import { useStore } from "@tanstack/react-form";

import { Button } from "@/components/ui/button";

import { useFormContext } from ".";

type SubmitButtonProps = {
  children: React.ReactNode;
  isSubmitting: boolean;
  size?: "sm" | "lg" | "default" | "icon" | null | undefined;
  variant?:
    | "default"
    | "ghost"
    | "link"
    | "destructive"
    | "secondary"
    | null
    | undefined;
  className?: string;
};

export const SubmitButton = ({
  children,
  isSubmitting,
  size,
  variant,
  className,
}: SubmitButtonProps) => {
  const form = useFormContext();

  // const [isSubmitting, canSubmit] = useStore(form.store, (state) => [
  //   state.isSubmitting,
  //   state.canSubmit,
  // ]);

  const normalStyle = `cursor-pointer`;
  const pendingStyle = `bg-primary/50`;
  const activeStyle = isSubmitting ? pendingStyle : normalStyle;

  return (
    <Button
      variant={variant}
      size={size}
      className={`${activeStyle} uppercase tracking-wider ${className}`}
      type="submit"
      disabled={isSubmitting}
    >
      {children}
    </Button>
  );
};
