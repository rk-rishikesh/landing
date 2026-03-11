import Image from "next/image";
import { funnelSans, pixelifySans } from "@/app/fonts";

export default function ShanghaiPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#EDEDED]">
      {/* Hero pattern + main content layered together */}
      <div className="relative flex flex-1 items-stretch">
        {/* Background pattern */}
        <Image
          src="/assets/shanghai/heroPattern.svg"
          alt="Shanghai hero pattern"
          width={1437}
          height={400}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
          priority
        />

        {/* Foreground content */}
        <div className="relative z-10 flex w-full items-center justify-start">
          <div className="flex flex-col gap-6">
            <span
              className={`${pixelifySans.className} align-middle text-[66px] font-bold leading-[152.2px] tracking-[-0.03em] text-[#111827]`}
            >
              LOOPS HOUSE
            </span>

            <div className="flex flex-col leading-none px-4">
              <span
                className={`${pixelifySans.className} text-[96px] sm:text-[140px] md:text-[180px] font-bold text-[#5E0F00]`}
              >
                SH
              </span>
              <span
                className={`${pixelifySans.className} text-[96px] sm:text-[140px] md:text-[180px] font-bold text-[#5E0F00]`}
              >
                AN
              </span>
              <span
                className={`${pixelifySans.className} text-[96px] sm:text-[140px] md:text-[180px] font-bold text-[#5E0F00]`}
              >
                GH
              </span>
              <span
                className={`${pixelifySans.className} text-[96px] sm:text-[140px] md:text-[180px] font-bold text-[#111111]`}
              >
                AI
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer graphic */}
      <div className="w-full">
        <Image
          src="/assets/shanghai/footer.svg"
          alt="Shanghai footer pattern"
          width={1437}
          height={400}
          className="h-auto w-full"
        />
      </div>
    </main>
  );
}

