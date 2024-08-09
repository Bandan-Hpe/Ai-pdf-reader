import { Button } from "@/components/ui/button";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Store Your PDF Document",
    descriptions:
      "Keep all Your important PDF files securely stored and easily accessible anytime anywhere",
    icn: GlobeIcon,
  },
  {
    name: "Store Your PDF Document",
    descriptions:
      "Keep all Your important PDF files securely stored and easily accessible anytime anywhere",
    icn: GlobeIcon,
  },
  {
    name: "Store Your PDF Document",
    descriptions:
      "Keep all Your important PDF files securely stored and easily accessible anytime anywhere",
    icn: GlobeIcon,
  },
  {
    name: "Store Your PDF Document",
    descriptions:
      "Keep all Your important PDF files securely stored and easily accessible anytime anywhere",
    icn: GlobeIcon,
  },
  {
    name: "Store Your PDF Document",
    descriptions:
      "Keep all Your important PDF files securely stored and easily accessible anytime anywhere",
    icn: GlobeIcon,
  },
  {
    name: "Store Your PDF Document",
    descriptions:
      "Keep all Your important PDF files securely stored and easily accessible anytime anywhere",
    icn: GlobeIcon,
  },
];

export default function Home() {
  return (
    <main className=" flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600 ">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl flex flex-col items-center">
        <div className="flex flex-col  justify-center items-center max-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-indigo-600 leading-7 text-base font-semibold">
              Your Interactive Document Companion{" "}
            </h2>

            <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transform Your PDF Into interactive Conversations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600 ">Chat With PDF</span>
              <br />
              <br />
              upload your Document , and our chatbot will answer questions
              ,summrize content and answer all your question . Ideal for
              everyone ,<span className="text-indigo-600">Chat With PDF</span>
              turn static document into{" "}
              <span className="font-bold">dynamic Conversations</span>
              enhance your productivity 10x fold effortlessly.
            </p>
          </div>
          <Button asChild className="mt-10">
            <Link href="/dashboard"> Get Started</Link>
          </Button>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto  max-w-7xl px-6 lg:px-8">
            <Image
              src={"/banner.png"}
              alt="pdf"
              width={1000}
              height={1000}
              className="mb-[-0%]  rounded-xl  shadow-2xl  ring-1 ring-gray-900/10"
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-32 bottom-0 bg-gradient-to-t from-white/50 sm:-inset-x-28 pt-[5%]"></div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center my-5">
          <dl className="mx-auto grid max-w-4xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7  text-gray-600 sm:grid-cols-2 lg:mx-0 lg:mx-w-none lg:grid-cols-3 xl:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  {" "}
                  <feature.icn
                    aria-hidden="true"
                    className="absolute text-indigo-600 left-1 top-1 h-5 w-5"
                  />{" "}
                </dt>
                <dd>{feature.descriptions}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
