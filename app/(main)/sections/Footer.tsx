import Image from "next/image";
import { funnelSans, pixelifySans } from "@/app/fonts";

export function Footer() {
  return (
    <div
      id="settings"
      className="max-h-screen min-h-screen relative flex h-full w-full flex-col bg-[#385244] gap-10 overflow-hidden md:gap-72"
    >
      <div className="relative flex flex-1 flex-col items-center justify-center px-4 text-center md:top-16">
        <div className="flex w-full max-w-7xl flex-col items-center gap-8 md:gap-10">
          <div className="flex flex-col items-center">
            <h1
              className={`${pixelifySans.className} font-bold uppercase leading-none tracking-[-0.04em] text-[#E2FEA5] text-[56px] sm:text-[80px] md:text-[120px]`}
            >
              LOOPS HOUSE
            </h1>
            <p
              className={`${funnelSans.className} mt-3 max-w-xl text-sm leading-relaxed text-[#E2FEA5] sm:text-base md:text-lg`}
            >
              © 2026 Loops House. All rights reserved.
            </p>
          </div>

          <nav
            className={`${funnelSans.className} mt-4 flex flex-wrap justify-center gap-4 text-xs text-[#F8FFE8] sm:mt-6 sm:gap-8 sm:text-sm md:gap-12 md:text-base lg:gap-36`}
          >
            <span>About</span>
            <span>Apply</span>
            <span>Loops House</span>
            <span>Ecosystem</span>
            <span>FAQ</span>
          </nav>
        </div>
      </div>

      {/* Footer: clouds + centered CTA stack (anchored bottom) */}
      <div className="pointer-events-none bottom-0">
        <div className="relative w-full justify-center items-center flex">
          <Image
            src="/assets/footer/mergedClouds.svg"
            alt=""
            width={1100}
            height={300}
            className="h-auto w-full max-w-[1100px]"
          />

          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <div className="relative flex flex-col items-center px-4">
              <Image
                src="/assets/footer/top.svg"
                alt=""
                width={400}
                height={100}
                className="relative top-10 -left-[4px] w-[260px] sm:top-16 sm:-left-[8px] sm:w-[360px] md:top-20 md:w-[400px]"
              />

              {/* Cat hands sit on top edge of the sign */}
              <div className="relative top-3 z-2">
                <Image
                  src="/assets/footer/catHands.svg"
                  alt=""
                  width={182}
                  height={100}
                  priority
                />
              </div>

              <button
                type="button"
                className={`${funnelSans.className} z-1 relative pointer-events-auto h-12 w-full max-w-xs rounded-full border-2 border-[#2C3E50] bg-[#DFF7C4] px-6 text-base font-bold text-[#2C3E50] transition hover:bg-[#ccebb0] sm:h-14 sm:max-w-sm sm:px-8 sm:text-lg md:w-64`}
              >
                Enter the Loop
              </button>

              <Image
                src="/assets/footer/bottom.svg"
                alt=""
                width={450}
                height={100}
                className="-left-1 -top-1 relative w-[280px] swing-cat sm:-left-2 sm:-top-2 sm:w-[360px] md:w-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
