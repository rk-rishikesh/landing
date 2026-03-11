import Image from "next/image";
import { funnelSans, pixelifySans } from "@/app/fonts";

export function HeroSection() {
  return (
    <div
      id="hero"
      className="flex h-screen w-full justify-center bg-[#3C574B] px-4 py-10 text-[#F8FFE8] md:h-screen md:px-6 md:py-0"
    >
      <div className="flex w-full max-w-7xl flex-col gap-32 md:gap-12">
        {/* Title */}
        <div className="relative top-18 flex justify-center md:top-[60px]">
          <span
            className={`${pixelifySans.className} text-center font-bold tracking-[-0.04em] text-[#F8FFE8A1] text-[48px] leading-[44px] sm:text-[80px] sm:leading-[72px] md:text-[140px] md:leading-[100px] lg:text-[180px] lg:leading-[110px] xl:text-[217px] xl:leading-[132.2px] xl:align-middle`}
          >
            LOOPS HOUSE
          </span>
        </div>

        {/* Mobile layout: text -> cat -> button */}
        <div className="flex w-full flex-col items-center gap-6 md:hidden">
          <p
            className={`${funnelSans.className} max-w-84 text-center text-sm leading-relaxed text-[#F8FFE8] sm:text-base`}
          >
            Lorem ipsum dolor sit amet consectetur. Dignissim commodo sagittis
            hendrerit lacus ac dignissim morbi. Montes eget facilisis eget
            posuere. Lectus.
          </p>
          <div className="flex items-center justify-center">
            <div className="relative h-[270px] w-[270px] sm:h-[260px] sm:w-[280px]">
              <Image
                src="/assets/main/whiteCat.svg"
                alt="Loops House cat"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <button
            type="button"
            className={`${funnelSans.className} inline-flex h-[44px] w-[192px] items-center justify-center rounded-full bg-[#E2FEA5] font-medium text-[#10271d] transition`}
          >
            <div className="flex flex-row items-center justify-between gap-5">
              <span className="relative left-2 text-sm uppercase">Enter the loop</span>
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

        {/* Desktop layout — row with left text+button, center cat, right copy */}
        <div className="hidden flex-col items-center gap-8 md:flex md:flex-row md:items-center md:justify-between">
          {/* Left copy + CTA */}
          <div className="flex max-w-sm flex-col gap-24 text-left">
            <p
              className={`${funnelSans.className} text-lg leading-relaxed text-[#F8FFE8]`}
            >
              Lorem ipsum dolor sit amet consectetur. Dignissim commodo sagittis
              hendrerit lacus ac dignissim morbi. Montes eget facilisis eget
              posuere. Lectus.
            </p>
            <button
              type="button"
              className={`${funnelSans.className} inline-flex h-[44px] w-[192px] items-center justify-center rounded-full bg-[#E2FEA5] font-medium text-[#10271d] transition`}
            >
              <div className="flex flex-row items-center justify-between gap-5">
                <span className="relative left-2 text-sm uppercase">Enter the loop</span>
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

          {/* Center cat illustration */}
          <div className="flex items-center justify-center md:flex-1">
            <div className="relative md:-top-24 md:h-[450px] md:w-[470px] lg:h-[550px] lg:w-[570px] xl:h-[600px] xl:w-[620px]">
              <Image
                src="/assets/main/whiteCat.svg"
                alt="Loops House cat"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right copy — hidden on small, visible from md */}
          <div className="hidden max-w-sm flex-col gap-3 text-left md:flex">
            <div className="h-32" />
            <p
              className={`${funnelSans.className} text-lg leading-relaxed text-[#F8FFE8]`}
            >
              Lorem ipsum dolor sit amet consectetur. Phasellus tortor orci diam
              amet odio sit quam tellus. Felis odio feugiat odio risus facilisis
              auctor a. Non vitae quam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

