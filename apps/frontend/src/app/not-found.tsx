import Image from "next/image";

export default function NotFoundPage() {
  return (
    <main className="flex items-center md:flex-row flex-col justify-center h-screen gap-[20px] md:gap-20">
      <p className="md:text-[40px] text-[20px] text-center md:text-left tracking-tighter  font-semibold max-w-[500px]">
        Meowch...The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <Image
        src={"/images/404.jpg"}
        className={`bg-gray-200 rounded-lg`}
        alt={"Confused cat"}
        width={500}
        height={300}
      />
    </main>
  );
}
