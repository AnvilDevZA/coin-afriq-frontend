"use client";

// React and Next Imports
import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

// Utility Imports
import { Menu, ArrowRightSquare, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Component Imports
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { siteConfig } from "@/site.config";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="flex font-noto-sans gap-2 items-center justify-center px-2 border text-white dark:text-white hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <span className="uppercase text-white dark:text-white font-bold font-sans">
            Menu
          </span>
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="pr-0 text-white dark:text-white font-sans bg-[#007A4D66] dark:bg-[#007A4D66"
      >
        <SheetHeader>
          <SheetTitle className="text-right">
            <MobileLink
              href="/"
              className="flex items-center"
              onOpenChange={setOpen}
            >
              <ArrowRightSquare className="mr-2 h-4 w-4" />
              <span>{siteConfig.site_name}</span>
            </MobileLink>
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3 font-noto-sans">
            <h3 className="text-small mt-6">Menu</h3>
            <Separator />
              <MobileLink href="/" onOpenChange={setOpen}>
                Home
              </MobileLink>
              <ul className="menu w-56 mt-0 mx-0 px-0 py-0">
                <details>
                  <summary className="flex flex-row items-center gap-2">
                    <MobileLink href="/pages/getting-started">
                      Getting Started   
                    </MobileLink>
                    <ChevronRight className="h-4 w-4"/>
                  </summary> 
                  <ul className="menu-dropdown menu-dropdown-show flex flex-col ml-6 gap-4">
                    <MobileLink href="/pages/what-exactly-is-coinafriq" onOpenChange={setOpen}>
                      What is Coin Afriq
                    </MobileLink>
                    <MobileLink href="/pages/how-it-works" onOpenChange={setOpen}>
                      How it Works
                    </MobileLink>
                    <MobileLink href="/pages/coinafriq-for-individuals" onOpenChange={setOpen}>
                      For Individuals
                    </MobileLink>
                    <MobileLink href="/pages/coin-afriq-for-business" onOpenChange={setOpen}>
                      For Business
                  </MobileLink>
                </ul>
                </details>
            </ul>
              <ul className="menu w-56 mt-0 mx-0 px-0 py-0">
                <details>
                <summary className="flex flex-row items-center gap-2">
                  <MobileLink href="/pages/partnerships">
                    Partnerships
                  </MobileLink>
                   <ChevronRight className="h-4 w-4"/>
                </summary>
                <ul className="menu-dropdown menu-dropdown-show flex flex-col ml-6 gap-4">
                    <MobileLink href="/pages/atomli" onOpenChange={setOpen}>
                      Atomli
                    </MobileLink>
                   <MobileLink href="/pages/africa-speed-rail" onOpenChange={setOpen}>
                      Africa Speed Rails
                  </MobileLink>
              </ul>
              </details>
            </ul>
            <ul className="menu w-56 mt-0 mx-0 px-0 py-0">
              <details>
              <summary className="flex flex-row items-center gap-2">
                <li className="text-lg">
                  Technical
                </li>
                <ChevronRight className="h-4 w-4"/>
              </summary>
                <ul className="menu-dropdown menu-dropdown-show flex flex-col ml-6 gap-4">
                    <MobileLink href="/pages/coin-afriq-whitepaper/" onOpenChange={setOpen}>
                      Whitepaper
                    </MobileLink>
                   <MobileLink href="/pages/business-plan" onOpenChange={setOpen}>
                      Business Plan
                  </MobileLink>
                   <MobileLink href="/pages/project-aims-and-milestones" onOpenChange={setOpen}>
                      Project Aims and Milestones
                   </MobileLink>
              </ul>
              </details>
              <br />
              <MobileLink href="/pages/news-and-articles" onOpenChange={setOpen}>
                News and Articles
              </MobileLink>
            </ul>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("text-lg", className)}
      {...props}
    >
      {children}
    </Link>
  );
}