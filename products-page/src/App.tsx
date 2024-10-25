import ProductsWrapper from './components/ProductsWrapper';
import ShoeDescription from './components/ShoeDescription';
import ShoeType from './components/ShoeType';
import ShoeImage from './components/ShoeImage';
import ShoeColors from './components/shoeColor';
import ShoeSizes from './components/ShoeSizes'; // Import ShoeSizes component
import Image from './assets/AIR+JORDAN+1+LOW.png'; // Import the image

function App() {
  const shoeData = {
    type: 'Air Jordan 1 Low',
    title: 'LIGHTWEIGHT COMFORT FOR PARIS',
    description:
      'Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a classic look designed with premium materials like leather and suede, creating a look curated for the City of Light. Benefits: An encapsulated Air unit provides lightweight cushioning. Premium leather in the upper contours to your foot with a butter-soft feel. A solid-rubber outsole offers traction on a variety of surfaces. Product Details: Special PRS hangtag on the laces.',
    colors: ['Black', 'White', 'Red', 'Blue', 'Green'],
    origin: 'Country/Region of Origin: China, Vietnam.',
    sizes: [40, 41, 42, 43, 44, 45],
  };

  return (
    <>
      <ProductsWrapper>
        {/* Left column: Shoe image */}
        <ShoeImage src={Image} alt="Air Jordan 1 Low" />

        {/* Right column: Shoe details */}
        <div className="flex flex-col justify-center">
          <ShoeType type={shoeData.type} />
          <h1 className="text-sm font-bold text-gray-800 mb-4">
            {shoeData.title}
          </h1>
          <ShoeDescription description={shoeData.description} />
          <p className="text-sm font-semibold text-gray-600">
            {shoeData.origin}
          </p>
          <ShoeColors colors={shoeData.colors} />
          <ShoeSizes sizes={shoeData.sizes} />
        </div>
      </ProductsWrapper>
    </>
  );
}

export default App;
