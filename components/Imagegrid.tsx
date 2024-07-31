import Image from 'next/image';

const Imagegrid = () => {
  return (
    <div className="container-i">
      <div className="image-grid">
        <Image src="/j1.png" width={200} height={150} alt="i" />
        <Image src="/j2.png" width={200} height={150} alt="i" />
        <Image src="/j3.png" width={200} height={150} alt="i" />
        <Image src="/j4.png" width={600} height={450} alt="i" />
      </div>
    </div>
  );
};

export default Imagegrid;
