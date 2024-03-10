import Pic from 'util/Pic';

type Props = {
  header: string;
  subHeader?: string;
  items: { date: string; header: string; body?: string }[];
};

export default function Timeline({ header, subHeader = '', items }: Props) {
  return (
    <div className="flex flex-col items-start md:flex-row py-10 gap-4">
      <div className="flex flex-col w-full sticky md:top-36 md:w-5/12 lg:w-1/3 py-10">
        <h2 className="header mb-4">{header}</h2>
        <p className="">{subHeader}</p>
      </div>

      <div className="ml-0 md:ml-12 w-full md:w-7/12 lg:w-2/3">
        <div className="w-full h-full relative">
          <div className="border absolute h-full right-1/2 rounded-full border-accent" />

          {items.map((eachItem, index) => (
            <div
              key={eachItem.header}
              className={`mb-8 flex justify-between ${
                index % 2 === 0 && 'flex-row-reverse'
              } items-center w-full`}
            >
              <div className="order-1 w-5/12" />
              <div
                className={`order-1 w-5/12 px-1 py-4 ${
                  index % 2 === 0 && 'text-right'
                }`}
              >
                <p className="mb-2 text-base text-pry-700">{eachItem.date}</p>
                <h4 className="mb-2 font-bold text-lg md:text-2xl">
                  {eachItem.header}
                </h4>
                <p className="text-base">{eachItem.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-60 w-full">
          <Pic alt="illustration" src="/about/together.png" />
        </div>
      </div>
    </div>
  );
}
