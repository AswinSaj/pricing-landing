import { GlowingEffectDemoSecond } from "@/components/Glowingcard";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SparklesCore } from "@/components/ui/sparkles";
import { WorldMapDemo } from "@/components/Worldmap";
import { FlipWordsDemo } from "@/components/Flipwords";
import Image from "next/image";
import { MetricsSection } from "@/components/MetricsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { InfiniteMovingCardsDemo } from "@/components/Infinite";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="relative bg-black  ">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={30}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="relative z-20 text-center mx-auto">
          <div className="w-full pt-20">
            <FlipWordsDemo />

            <p className="text-2xl md:text-3xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              AI pricing + instant quotes + smart email tracking. One tool, zero
              confusion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <BackgroundGradient className="rounded-full p-[2px] bg-gradient-to-r from-blue-500 to-purple-500">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
              >
                Quote Now
              </Button>
            </BackgroundGradient>

            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-full bg-transparent"
            >
              Get Started
            </Button> */}
          </div>
          <div className="flex flex-col ">
            <ContainerScroll
              titleComponent={
                <>
                  <h1 className="text-4xl md:text-6xl font-semibold text-white leading-none">
                    Powerful Analytics <br />
                    <span className="text-4xl md:text-6xl font-bold mt-1 leading-none bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      At Your Fingertips
                    </span>
                  </h1>
                </>
              }
            >
              <Image
                src="/analytics-dashboard.png"
                alt="PQ Pro Analytics Dashboard"
                height={720}
                width={1400}
                className="w-full h-full object-cover object-center rounded-2xl"
                draggable={false}
              />
            </ContainerScroll>
          </div>
          <div className="features h-full w-full" id="features">
            <div className="text-white p-4 sm:p-6 lg:p-10">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                Everything you need to quote like a pro
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 font-medium">
                Powerful features designed for modern freelancers and agencies
              </p>
            </div>
            <GlowingEffectDemoSecond />
          </div>
          <WorldMapDemo />
          <MetricsSection />
          <InfiniteMovingCardsDemo />
        </div>
      </div>
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
