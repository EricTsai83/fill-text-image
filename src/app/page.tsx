export default function Home() {
  return (
    <div className="relative h-[500px] w-[400px]">
      {/* 左半邊的背景 */}
      <div className="absolute left-0 w-full h-full bg-[url('/image.png')] bg-cover bg-no-repeat bg-center clip-path-left"></div>
      {/* 右半邊的內容 */}
      <div className="absolute left-0 w-full h-full flex justify-end items-center font-mono font-bold text-[50px] bg-clip-text text-transparent uppercase bg-[url('/image.png')] bg-right bg-[length:100%_100%]">
        <div className="w-1/2 leading-[35px]">
          Keep your face to the sunshine and you can’t see a shadow
        </div>
      </div>
    </div>
  );
}
