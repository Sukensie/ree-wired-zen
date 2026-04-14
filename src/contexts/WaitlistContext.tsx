import { createContext, useContext, useState, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof schema>;

interface WaitlistContextType {
  openWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | null>(null);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const waitlistUnderConstruction = true;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (waitlistUnderConstruction) return;

    await new Promise<void>((r) => setTimeout(r, 800));
    setSubmitted(true);
    toast.success("You're on the waitlist!", {
      description: `We'll reach out to ${data.email} when we launch.`,
    });
  };

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (!value) {
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 300);
    }
  };

  return (
    <WaitlistContext.Provider value={{ openWaitlist: () => setOpen(true) }}>
      {children}

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md">
          {!submitted ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">Join the waitlist</DialogTitle>
                <DialogDescription>
                  Be first to know when Ree-Wired launches.
                </DialogDescription>
              </DialogHeader>

              {waitlistUnderConstruction && (
                <div className="rounded-lg border border-orange/30 bg-orange/10 p-3 text-sm text-foreground">
                  <p className="font-medium">Waitlist is currently under construction.</p>
                  <p className="mt-1 text-muted-foreground">
                    Please get in touch with Marianne at{" "}
                    <a href="mailto:mf@ree-wired.com" className="underline underline-offset-2 hover:text-primary">
                      mf@ree-wired.com
                    </a>{" "}
                    or{" "}
                    <a href="tel:+4530759080" className="underline underline-offset-2 hover:text-primary">
                      +45 30 75 90 80
                    </a>
                    .
                  </p>
                </div>
              )}

              <div className="relative mt-2">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="wl-name">Full name</Label>
                    <Input disabled={true} id="wl-name" placeholder="Jane Doe" {...register("name")} />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="wl-email">Email</Label>
                    <Input
                      id="wl-email"
                      type="email"
                      placeholder="jane@example.com"
                      disabled={true}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={waitlistUnderConstruction || isSubmitting}
                  >
                    {waitlistUnderConstruction
                      ? "Waitlist under construction"
                      : isSubmitting
                        ? "Joining…"
                        : "Join waitlist"}
                  </Button>
                </form>

                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-10 rounded-xl bg-white/70"
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center text-center py-6">
              <CheckCircle2 className="h-14 w-14 text-primary mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">You're on the list!</h3>
              <p className="text-muted-foreground text-sm">
                We'll notify you as soon as we launch.
              </p>
              <Button
                className="mt-6 w-full"
                variant="outline"
                onClick={() => handleOpenChange(false)}
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) throw new Error("useWaitlist must be used inside WaitlistProvider");
  return ctx;
}
