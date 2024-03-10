type Props = {
  header: string;
  subHeader?: string;
  featureList: { icon: string; subHeader: string; text: string }[];
  bg?: 'bg-pry-900' | 'bg-white';
};

export default function Features({
  bg,
  header,
  subHeader,
  featureList,
}: Props) {
  return (
    <div className={`${bg || 'bg-secondary'} py-10 md:py-12 lg:py-14`}>
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <h2
            className={`header mb-3 text-center ${
              bg === 'bg-pry-900' && '!text-white'
            }`}
          >
            {header}
          </h2>
          <h3
            className={`${
              bg === 'bg-pry-900' && '!text-white'
            } mb-12 text-center max-w-3xl mx-auto`}
          >
            {subHeader}
          </h3>
          <div className="flex flex-col md:flex-row gap-10 md:gap-6">
            {featureList.map((item) => (
              <div className="w-full md:w-1/3 max-w-[20rem] mx-auto">
                <img
                  className="mb-5 h-16 w-16 mx-auto"
                  src={item.icon}
                  alt="icon"
                />
                <h3
                  className={`subheader mb-3 ${
                    bg === 'bg-pry-900' && '!text-white'
                  } md:min-h-[3rem] text-center`}
                >
                  {item.subHeader}
                </h3>
                <p
                  className={`${
                    bg === 'bg-pry-900' && '!text-white'
                  } text-center`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
