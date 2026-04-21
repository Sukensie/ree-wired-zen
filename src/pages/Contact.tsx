import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Mail, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^[+\d\s()-]{7,20}$/.test(value), {
      message: "Please enter a valid phone number",
    }),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise<void>((r) => setTimeout(r, 1000));
    toast.success("Message sent!", {
      description: "We'll get back to you within 24 hours.",
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-orange/5">
      <header className="border-b border-border/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Ree-Wired" className="h-8" />
          </a>
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Contact us
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Have a question, partnership inquiry, or just want to say hello? We'd love to hear from you.
          </p>

          <div className="mb-6 rounded-xl border border-orange/30 bg-orange/10 p-4">
            <p className="font-heading font-semibold text-sm text-foreground">
              Contact form is currently under construction.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              For any questions, please get in touch with Marianne at{" "}
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

          <div className="relative">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" placeholder="Jane Doe" {...register("name")} />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-xs text-destructive">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone number (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+45 12 34 56 78"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more…"
                  rows={6}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full text-base" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending…"
                ) : (
                  <>
                    Send message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div
              aria-hidden="true"
              className="absolute inset-0 z-10 rounded-xl bg-white/70"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-section-light-highlight">
              <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold mb-1">Email us</h3>
                <a href="mailto:mf@ree-wired.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  mf@ree-wired.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-xl bg-section-light-highlight">
              <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold mb-1">Call us</h3>
                <a href="tel:+4512345678" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +45 30 75 90 80
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
