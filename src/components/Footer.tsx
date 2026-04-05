import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground py-16 px-6 md:px-12 lg:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Ree-Wired" className="h-8 w-8" />
            <span className="font-heading font-bold text-lg text-background">ree-wired</span>
          </div>
          <p className="text-background/60 text-sm leading-relaxed max-w-sm">
            Health Tech tools to prevent mental struggles from escalating into stress, anxiety or depression. The mental first aid kit for your home.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Company</h4>
          <ul className="space-y-2">
            {["About", "Team", "Careers", "Press"].map((l) => (
              <li key={l}><a href="#" className="text-background/60 text-sm hover:text-background transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Support</h4>
          <ul className="space-y-2">
            {["FAQ", "Contact", "Privacy Policy", "Terms of Service"].map((l) => (
              <li key={l}><a href="#" className="text-background/60 text-sm hover:text-background transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 pt-8 text-center">
        <p className="text-background/40 text-sm">© {new Date().getFullYear()} Ree-Wired. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
