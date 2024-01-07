import CTAButton from "@/components/CTAButton/CTAButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center p-4">
      <div className="flex flex-col gap-8 md:flex-row md:gap-24 p-8 items-center">
        <div className="relative">
          <Image
            className="drop-shadow-2xl"
            src="/list.png"
            alt="list image"
            height={400}
            width={400}
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-6xl font-bold capitalize mb-4">
            get your things done!
          </h1>
          <p className="sm:text-xl text-slate-300 max-w-96 leading-10 mb-8">
            Boost your productivity, and make sure that you stay on the right
            track by using <b>Next.js Todo</b>
          </p>
          <CTAButton />
        </div>
      </div>
    </main>
  );
}
