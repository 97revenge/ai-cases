import TextReveal from "@/components/magicui/text-reveal";

export async function TextRevealDemo() {
  const data = "Magic UI will change the way you design.";
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg border bg-transparent dark:bg-secondary">
      <TextReveal
        className="font-mono bg-transparent text-7xl text-red-200"
        text={data}
      />
    </div>
  );
}
