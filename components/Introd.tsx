import Head from 'next/head';
import Image from 'next/image';

function Introd() {
  return (
    <div className="container">
      <div className="content">
        <h3>Introduction</h3>
        <h1>VIDARBHA EXPRESS</h1>
        <p>Integer eget fringilla nibh, vitae tincidunt mi. Sed risus ligula, congue eget iaculis eu, maximus et nisl. In fringilla mauris in dui feugiat, vitae faucibus neque volutpat. Sed ultricies dui vel nunc euismod posuere. Curabitur consectetur erat eros, sed aliquam tortor vestibulum ac. Proin in sollicitudin libero. Integer lectus risus, accumsan interdum lorem id, ullamcorper dictum massa. Integer id nisi egestas tortor fermentum rhoncus. Ut rutrum rutrum sapien, eget ornare leo congue sed. Duis aliquet id velit ut feugiat. Integer fermentum lectus ac tortor maximus, eu pretium lacus tincidunt. Quisque euismod tellus non porttitor mattis. Ut nec condimentum mauris. Suspendisse eu ultrices dui, quis sagittis quam. Curabitur sodales odio augue, eget bibendum nisl sodales eu.</p>
        <a href="#" className="know-more">KNOW MORE-- </a>
      </div>
        <div className="image-container">
          <Image src="/Group 48095944.png" alt="Team Photo" width={400} height={300} />
        </div>
    </div>
  );
}

export default Introd;
