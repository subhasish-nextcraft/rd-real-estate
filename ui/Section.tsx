import { FC } from 'react';
import Pic from 'util/Pic';

type Props = {
  SideComp?: FC;
  imgSrc?: string;
  imgAlt?: string;
  bottomImgSrc?: string;
  bottomImgAlt?: string;
  bg?: 'bg-pry-900' | 'bg-white';
  mobileReverse?: boolean;
  desktopReverse?: boolean;
  hero?: boolean;
  SideComp1?: FC;
  SideComp2?: FC;
};

export default function Section({
  SideComp,
  imgSrc,
  imgAlt,
  bottomImgSrc,
  bottomImgAlt,
  bg,
  mobileReverse,
  desktopReverse,
  hero,
  SideComp1,
  SideComp2,
}: Props) {
  return (
    <div
      className={`${bg || 'bg-secondary'} ${
        hero
          ? 'pt-[4.75rem] md:pt-[5.5rem] lg:pt-[6.5rem]'
          : 'md:pt-8 lg:pt-10 xl:pt-14'
      } ${!bottomImgSrc ? 'md:pb-8 lg:pb-10 xl:pb-14' : 'pb-0'}
      ${!mobileReverse && 'pt-10'}
      `}
    >
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto">
          <div
            className={`flex ${
              mobileReverse ? 'flex-col-reverse' : 'flex-col'
            } ${desktopReverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${
              bottomImgSrc ? 'gap-4' : 'gap-8 md:gap-6'
            } justify-between items-center`}
          >
            <div className="px-4 w-full md:w-1/2 flex-none">
              {SideComp1 ? (
                <div className="">
                  <SideComp1 />
                </div>
              ) : (
                <div className={`${mobileReverse && 'pb-10'} md:py-10`}>
                  {SideComp && <SideComp />}
                </div>
              )}
            </div>

            {SideComp2 ? (
              <div className="px-4 pb-10 md:pb-0">
                <SideComp2 />
              </div>
            ) : (
              <div className="w-full md:w-1/2 md:px-2">
                <div className="h-[15rem] lg:h-[20rem] xl:h-[25rem] w-full md:rounded-xl lg:rounded-2xl overflow-hidden">
                  {imgSrc && (
                    <Pic objectFit="cover" src={imgSrc} alt={imgAlt || ''} />
                  )}
                </div>
              </div>
            )}
          </div>

          {bottomImgSrc && (
            <div className="md:px-4 md:py-10">
              <div className="h-[17rem] lg:h-[22rem] xl:h-[28rem] w-full md:rounded-xl lg:rounded-t-2xl overflow-hidden">
                <Pic
                  objectFit="cover"
                  src={bottomImgSrc}
                  alt={bottomImgAlt || ''}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
