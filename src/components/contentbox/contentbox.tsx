interface ContentBoxProps {
  children: React.ReactNode;
}

export default function ContentBox({ children }: ContentBoxProps) {
  console.log(children);
  return (
    <div className="h-[60vh] w-[35vw] rounded-2xl bg-gradient-to-bl from-blue-300 to-blue-500 shadow-2xl flex justify-center text-shadow-md">
      {children}
    </div>
  );
}
