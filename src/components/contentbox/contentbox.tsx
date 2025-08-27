interface ContentBoxProps {
  children: React.ReactNode;
}

export default function ContentBox({ children }: ContentBoxProps) {
  return (
    <div className="h-[90%] md:w-[35vw] rounded-2xl bg-gradient-to-bl from-blue-300 to-blue-500 shadow-2xl flex justify-center text-shadow-md sm:h-[90%] sm:w-[85%] border ">
      {children}
    </div>
  );
}
