import { QUOTE, QUOTE_AUTHOR } from "@/shared/lib/constants";

export function QuoteText() {
  return (
    <div className="flex flex-col items-end ">
      <div className="border border-gray-600 relative">
        <span className="absolute left-5 -top-3 text-4xl text-gray-400">
          {"“"}
        </span>
        <span className="absolute right-5 -bottom-8 text-4xl text-gray-400">
          {"”"}
        </span>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 px-10 py-4 italic">
          {QUOTE}
        </h1>
      </div>
      <div className="w-fit border border-gray-600 ">
        <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl text-right px-5 py-1 italic">
          {" - "} {QUOTE_AUTHOR}
        </p>
      </div>
    </div>
  );
}
