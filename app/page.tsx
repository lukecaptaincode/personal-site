import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-20 bg-slate-800">
      <div className="absolute inset-0 z-0 shadow-2xl">
        <Image
          src="/bg.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="flex text-white z-10 justify-center items-center">
        <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-screen lg:items-center">
          <div className="flex flex-col mx-auto max-w-3xl text-center justify-center items-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Hi, I&apos;m Luke
            </h1>
            <Image
              src="/me.jpg"
              width={250}
              height={250}
              className="rounded-full aspect-square object-cover mt-10 shadow-2xl"
              alt="Luke Captain"
            />
            <h2 className="text-1xl font-extrabold sm:text-3xl mt-10 w-screen">
              Full stack engineer | Game Developer | Maker | Armoured fighter
            </h2>
          </div>
        </div>
      </div>
      <div className="flex text-white z-10 justify-center items-center">
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div className="flex flex-col mx-auto max-w-3xl text-center justify-center items-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">About Me</h1>
          </div>
        </div>
      </div>
      <div className="flex text-white z-10 justify-left items-left">
        <div className="max-w-screen-xl px-4 py-8">
          <div className="flex flex-col max-w-3xl text-left justify-start items-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">My Work</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
