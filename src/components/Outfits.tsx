import React, { useState } from 'react';

class Outfits extends React.Component {
  render() {
    const tops: null= [
      {
        name: 'Vale Forever Flannel',
        image:
          'https://legendgang.com/cdn/shop/files/FullSizeRender_7a646c80-357f-49af-86d0-b1b32ec70b52.jpg?v=1726788059&width=1920'
      },
      {
        name: 'Skims Tshirt',
        image:
          'https://n.nordstrommedia.com/it/281f49cd-a190-4cf6-b915-6a481795ede3.jpeg?trim=color&w=350&h=536'
      },
    ];
    const bottoms = [
      {
        name: 'Vale Forever Flannel',
        image:
          'https://legendgang.com/cdn/shop/files/FullSizeRender_7a646c80-357f-49af-86d0-b1b32ec70b52.jpg?v=1726788059&width=1920'
      },
      {
        name: 'Aritzia Sweatpants Cargos',
        image:
          'https://cdn.mall.adeptmind.ai/https%3A%2F%2Faritzia.scene7.com%2Fis%2Fimage%2FAritzia%2Fmedium%2Ff23_03_a06_107335_4425_off_a.jpg_medium.webp'
      },
    ];

    const shoes = [
      {
        name: 'Cool Gray Jordan 4s',
        image:
          'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/l1hnbpbhy8ff1vrazmsi/air-jordan-iv-cool-grey-release-date.jpg'
      },
      {
        name: 'Asics',
        image:
          'https://cdn.saksfifthavenue.com/is/image/saks/0400020528775_WHITEMIDNIGHT?wid=600&hei=800&qlt=90&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0'
      },
    ];
    const outerwears = [
      {
        name: 'Lioness Leather Jacket',
        image:
          'https://us.lionessfashion.com/cdn/shop/files/37_b4b7599f-21df-495f-9bd9-e1474f65d78f.jpg?v=1729208549'
      },
      {
        name: 'Aritzia Super Puff',
        image:
          'https://cdn.mall.adeptmind.ai/https%3A%2F%2Faritzia.scene7.com%2Fis%2Fimage%2FAritzia%2Fmedium%2Ff22_18_a05_84570_10230_off_a.jpg_large.jpg'
      },
    ];
    const [selectedItem, setSelectedItem] = useState({
      tops: '',
      bottoms: '',
      shoes: '',
      outerwears: '',
    });

    const RandomGenerate = (array: any[]) => {
      const index = Math.floor(Math.random() * array.length);
      return array[index];
    };

    const generateOutfit = () => {
      const top = RandomGenerate(tops);
      const bottom = RandomGenerate(bottoms);
      const shoe = RandomGenerate(shoes);
      const outerwear = RandomGenerate(outerwears);
      console.log(top, bottom, shoe, outerwear);
      setSelectedItem({
        tops: top,
        bottoms: bottom,
        shoes: shoe,
        outerwears: outerwear,
      });
    };
    return (
      <div className='Outfits'>
        <h3>Outfit Recommendation based on your closet:</h3>
        <button type='submit' id='outfitsubmit' onClick={generateOutfit}>
          Generate a Outfit
        </button>
        <div className='closet'>
          {Object.values(selectedItem).map((item, index) => (
            <ul key={index}>
              <li>
                {' '}
                <img
                  src={item.image}
                  style={{
                    height: 250,
                  }}
                ></img>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Outfits;
