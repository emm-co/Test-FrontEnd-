import { useSelector } from "react-redux";

function Header() {
  const content = useSelector((state) => state.ui.content);
  return (
    <header className="pt-36 pb-16 xl:mb-[10rem] bg-graySecondary lg:pl-[20rem] ">
      <div className="flex flex-wrap  sm:flex-row  items-center flex-col">
        <h2 className="my-6 text-3xl uppercase sm:basis-full sm:text-5xl xl:text-7xl xl:basis-full xl:text-start">
          {content.header.h1}
        </h2>
        <h1 className="text-3xl mb-6 sm:basis-1/2 sm:text-5xl xl:text-5xl sm:basis-1/4 text-center">
          {content.header.discount}
        </h1>
        <div className="flex flex-wrap px-5 sm:basis-1/2 sm:basis-3/4 ">
          {content.header.paragraphs.map((paragraph, index) => {
            return (
              <h1 key={index} className="text-xl text-gray-600">
                {paragraph}
              </h1>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
