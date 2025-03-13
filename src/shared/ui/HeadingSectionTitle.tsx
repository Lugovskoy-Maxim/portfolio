interface TitleProps {
  title: string;
}

export default function HeadingSectionTitle({ title }: TitleProps) {
  return (
    <div className="flex space-x-4 text-left w-fit">
      <h2 className=" flex text-2xl sm:text-3xl md:text-4xl font-bold text-white w-full gap-1">
        <span className="text-sky-300 italic">#</span>{" "}
        <p className="text-3xl italic">{title}</p>
      </h2>
      <p className="border-b hidden md:flex border-sky-400 w-60 h-5 shrink-0">
        {" "}
      </p>
    </div>
  );
}
