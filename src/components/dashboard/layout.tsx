import React from "react";
import { DashboardContainer } from "../ui/Container";
import { Footer } from "../ui/footer";
import { Header } from "@/components/navigation/navbar";
import gridMobile from "@/assets/background/bg-grid-mobile.svg";
import grid from "@/assets/background/bg-grid.svg";
import Image from "next/image";
import ellipse1 from "@/assets/background/ellipse1.svg";
import ellipse2 from "@/assets/background/ellipse2.svg";
import { ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardContainer>
        <div className="min-h-screen pt-6 md:pt-0">{children}</div>
      </DashboardContainer>
      <div className="">
        <Footer isDashboard />
      </div>
    </>
  );
}

export function Layout({
  children,
  className,
  showGradient = true,
  showGrid = true,
}: {
  children: React.ReactNode;
  className?: ButtonProps["className"];
  showGradient?: boolean;
  showGrid?: boolean;
}) {
  return (
    <>
      <div className="relative h-auto ">
        <Header />
        <div className={cn("z-10 p-6 pt-24", className)}>
          {showGradient && (
            <>
              <Image
                src={ellipse1}
                alt="ellipse1"
                className="absolute right-0 -z-10 mt-24 h-auto w-9/12 md:-mt-16 md:w-3/12"
              />
              <Image
                src={ellipse2}
                alt="ellipse2"
                className="absolute left-0 z-0 -mt-20 hidden w-52 md:block"
              />
            </>
          )}
          {children}
        </div>
        {showGrid && (
          <>
            <Image
              src={grid}
              alt="grid"
              className="fix absolute -bottom-20 top-0 -z-10 hidden max-h-[130vh] w-full object-cover object-bottom sm:block 2xl:hidden"
            />
            <Image
              src={gridMobile}
              alt="grid"
              className="absolute top-20 -z-10 -ml-5 max-h-[130vh] object-cover opacity-80 sm:hidden"
            />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}
