import Image from "next/image";
import { funnelSans, pixelifySans } from "@/app/fonts";

export function HowItWorksSection() {
  return (
    <div
      id="how-it-works"
      className="flex h-screen w-full justify-center bg-[#F8FFE8] px-4 text-[#0f241c] md:h-screen md:px-6 md:py-0"
    >
      <div className="flex w-full -gap-32 max-w-7xl flex-col md:flex-row md:items-start md:justify-between md:gap-12 md:pt-24">
        {/* Left: Build / With / Purpose + cat */}
        <div className="relative flex flex-1 flex-col top-20 left-4 md:top-0">
          <div className="z-1 flex flex-col">
            <span
              className={`${pixelifySans.className} font-bold tracking-[-0.04em] leading-none text-[#10271d] text-[84px] sm:text-[110px] md:text-[150px] lg:text-[190px] xl:text-[210px]`}
            >
              Build
            </span>
            <span
              className={`${pixelifySans.className} font-bold tracking-[-0.04em] leading-none text-[#a4b1a1] text-[84px] sm:text-[110px] md:text-[150px] lg:text-[190px] xl:text-[210px]`}
            >
              With
            </span>
          </div>

          {/* Cat illustration */}
          <div className="flex flex-row">
            <div className="relative -top-16 left-6 h-[185px] w-[275px] sm:-top-18 sm:left-4.5 sm:h-[250px] sm:w-[240px] md:-top-24 md:left-13 md:h-[320px] md:w-[300px] xl:-top-30 xl:h-[367px] xl:w-[345px]">
              <Image
                src="/assets/main/purposeCat.svg"
                alt="Cat pointing upward"
                fill
                className="object-contain w-96 h-96"
              />
            </div>
            <div className="relative left-8 h-[150px] w-full md:hidden">
              <Image
                src="/assets/main/curvedArrow.svg"
                alt=""
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          <div className="flex justify-end right-8 -top-8 relative">
            <span
              className={`${pixelifySans.className} md:hidden font-bold tracking-[-0.04em] leading-none text-[#10271d] text-[80px] sm:text-[110px] md:text-[150px] lg:text-[190px] xl:text-[210px]`}
            >
              Purpose
            </span>
          </div>

        </div>

        {/* Right: copy + button + arrow + Purpose */}
        <div className="relative bottom-20 flex w-full max-w-sm flex-col items-center gap-6 md:items-end md:top-8">
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col items-center justify-center gap-4 md:items-end md:justify-start md:gap-8">
              <div
                className={`${funnelSans.className} text-center text-base md:text-right leading-relaxed text-[#10271d] md:text-lg`}
              >
                <p>Validate before you scale</p>
                <p>Ship with conviction</p>
                <p>Build for the long term</p>
              </div>
              <button
                type="button"
                className={`${funnelSans.className} inline-flex h-[44px] w-[160px] items-center justify-center mx-auto md:mx-0 rounded-full bg-[#E2FEA5] font-medium text-[#10271d] transition`}
              >
                <div className="flex flex-row items-center justify-between gap-7">
                  <span className="relative left-2 text-sm uppercase">Learn More</span>
                  <Image
                    src="/assets/darkArrow.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-8 w-8 shrink-0"
                  />
                </div>
              </button>
            </div>

            {/* Curved arrow toward Purpose */}
            <div className="relative hidden h-[194px] w-full md:block">
              <Image
                src="/assets/main/curvedArrow.svg"
                alt=""
                fill
                className="object-contain object-left"
              />
            </div>
            <span
              className={`${pixelifySans.className} hidden md:block font-bold tracking-[-0.04em] leading-none text-[#10271d] text-[84px] sm:text-[110px] md:text-[150px] lg:text-[190px] xl:text-[210px]`}
            >
              Purpose
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}