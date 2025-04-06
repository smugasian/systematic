import React from "react";
import { Button } from "./ui/button";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="flex bg-slate-800 h-24 w-full items-center justify-center border-t">
      <div className="flex flex-col items-center justify-center">
        <p className="text-slate-400">Made with ❤️ by Your Name</p>
        <Button variant="link" className="text-slate-400">
          Contact
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
