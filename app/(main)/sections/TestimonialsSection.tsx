import { funnelSans, pixelifySans } from "@/app/fonts";

export function TestimonialsSection() {
  return (
    <div
      id="testimonials"
      className="flex h-screen w-full items-stretch justify-center bg-[#F8FFE8] px-4 py-6 sm:py-10 text-[#0F2C23]"
    >
      <div className="flex h-full w-full max-w-6xl flex-col rounded-[32px] bg-[#0F2C23] px-6 py-10 shadow-xl sm:px-10 sm:py-12 md:px-12 md:py-14">
        {/* Top: HOW IT WORKS heading */}
        <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:items-start md:justify-between">
          <div className="md:w-1/3">
            <h2
              className={`${pixelifySans.className} text-left text-[40px] font-bold uppercase leading-none tracking-[-0.04em] text-[#E2FEA5] sm:text-[56px]`}
            >
              HOW IT
              <br />
              WORKS
            </h2>
          </div>

          {/* Steps */}
          <div className="mt-4 flex flex-1 flex-col gap-10 md:mt-2 md:flex-row md:gap-12">
            {/* Step 1 */}
            <div className="flex-1 text-left text-[#E2FEA5]">
              <p
                className={`${funnelSans.className} text-xs font-semibold uppercase tracking-[0.18em] text-[#E2FEA5]/80`}
              >
                01
              </p>
              <h3
                className={`${funnelSans.className} mt-2 text-lg font-semibold text-[#E2FEA5]`}
              >
                Ideate
              </h3>
              <p
                className={`${funnelSans.className} mt-3 text-sm leading-relaxed text-[#E2FEA5CC]`}
              >
                Bring raw ideas, problem spaces, and half-finished demos. Use Loops
                House as your sandbox to explore what&apos;s worth building.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex-1 text-left text-[#E2FEA5]">
              <p
                className={`${funnelSans.className} text-xs font-semibold uppercase tracking-[0.18em] text-[#E2FEA5]/80`}
              >
                02
              </p>
              <h3
                className={`${funnelSans.className} mt-2 text-lg font-semibold text-[#E2FEA5]`}
              >
                Build
              </h3>
              <p
                className={`${funnelSans.className} mt-3 text-sm leading-relaxed text-[#E2FEA5CC]`}
              >
                Ship experiments in short loops alongside other agents and
                developers. Get instant signal from the community and Loops AI.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex-1 text-left text-[#E2FEA5]">
              <p
                className={`${funnelSans.className} text-xs font-semibold uppercase tracking-[0.18em] text-[#E2FEA5]/80`}
              >
                03
              </p>
              <h3
                className={`${funnelSans.className} mt-2 text-lg font-semibold text-[#E2FEA5]`}
              >
                Launch
              </h3>
              <p
                className={`${funnelSans.className} mt-3 text-sm leading-relaxed text-[#E2FEA5CC]`}
              >
                Package what works into public launches, residency demos, or
                production workflows—without losing the momentum you gained inside
                the house.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="mt-10 flex w-full items-center justify-center gap-4">
          <button
            type="button"
            className={`${funnelSans.className} inline-flex h-11 w-32 items-center justify-center rounded-full bg-[#E2FEA5] text-xs font-semibold uppercase tracking-[0.14em] text-[#0F2C23] transition hover:bg-[#d4f08f]`}
          >
            Previous
          </button>
          <button
            type="button"
            className={`${funnelSans.className} inline-flex h-11 w-32 items-center justify-center rounded-full border border-[#E2FEA5] bg-transparent text-xs font-semibold uppercase tracking-[0.14em] text-[#E2FEA5] transition hover:bg-[#E2FEA5] hover:text-[#0F2C23]`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

