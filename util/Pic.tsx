import Image from 'next/image';

const QualityRangeCheck = (val: number) => val > 0 && val <= 100;

type Props = {
  src: string;
  alt: string;
  className?: string;
  quality?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'scale-down' | 'revert' | 'none';
};

function Pic({
  src, alt, objectFit = 'contain', quality, className,
}: Props) {
  if (quality && !QualityRangeCheck(quality)) {
    throw new Error('wrong quality passed, should be in 0 to 100');
  }

  return (
    <div className="h-full overflow-hidden relative w-full">
      <Image
        {...(quality && { quality })}
        src={src}
        placeholder="blur"
        blurDataURL="/global/placeholder.png"
        alt={alt}
        fill
        style={{ objectFit }}
        className={`transition duration-500 ease-in-out ${className}`}
      />
    </div>
  );
}

export default Pic;
