import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="h-full relative">
        <Image
          src={"/white-bg.jpg"}
          alt="White-bg"
          width={0}
          height={0}
          className="object-fill w-full h-full"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 p-6">
          <div className="bg-slate-300 flex items-center justify-center">
            <div className="bg-black text-color py-2 px-4 rounded-3xl w-[560px]">
              Header
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
