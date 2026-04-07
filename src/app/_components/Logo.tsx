import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  showText?: boolean;
  textClassName?: string;
  priority?: boolean;
}

const Logo = ({
  width = 50,
  height = 50,
  className = '',
  showText = true,
  textClassName = 'text-lg font-bold text-gray-900',
  priority = false,
}: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* SVG Logo - you can replace this with Image component if using PNG/JPG */}
      {/* <svg
        width={width}
        height={height}
        viewBox='0 0 32 32'
        fill='none'
        className='shrink-0'
      >
        <path d='M8 28 L16 4 L24 16 L16 20 Z' fill='#F97316' />
        <path d='M8 28 L16 20 L12 28 Z' fill='#DC2626' />
      </svg> */}

      {/* Alternatively, if you want to use an image file: */}
      <Image
        src='/images/logo.svg'
        alt='9th Swift Logo'
        width={width}
        height={height}
        className='shrink-0'
        priority={priority}
        style={{ width: 'auto', height: 'auto' }}
      />

      {/* {showText && (
        <span className={textClassName}>
          <span className='font-black'>9th</span> Swift
        </span>
      )} */}
    </div>
  );
};

export default Logo;
