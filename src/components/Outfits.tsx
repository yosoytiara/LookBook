import React, { useState } from 'react';

type OutfitItem = {
  name: string;
  image: string;
};
const Outfits: React.FC = () => {
  const tops: OutfitItem[] = [
    {
      name: 'Vale Forever Flannel',
      image:
        'https://legendgang.com/cdn/shop/files/FullSizeRender_7a646c80-357f-49af-86d0-b1b32ec70b52.jpg?v=1726788059&width=1920',
    },
    {
      name: 'Skims Tshirt',
      image:
        'https://n.nordstrommedia.com/it/281f49cd-a190-4cf6-b915-6a481795ede3.jpeg?trim=color&w=350&h=536',
    },
  ];
  const bottoms: OutfitItem[] = [
    {
      name: 'Levi’s 501 Jean',
      image:
        'https://lsco.scene7.com/is/image/lsco/A19590033-front-pdp-ld?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=1840',
    },
    {
      name: 'Aritzia Sweatpants Cargos',
      image:
        'https://cdn.mall.adeptmind.ai/https%3A%2F%2Faritzia.scene7.com%2Fis%2Fimage%2FAritzia%2Fmedium%2Ff23_03_a06_107335_4425_off_a.jpg_medium.webp',
    },
    {
      name: 'BDG Jeans',
      image:
        'https://images.urbndata.com/is/image/UrbanOutfitters/84084367_006_e?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1314',
    },
    {
      name: 'WhoDecidesWar Jeans',
      image:
        'https://www.a-ma-maniere.com/cdn/shop/files/WDW-FLARE-SCRIPT-DNM_1.jpg?v=1693412398',
    },
    {
      name: 'Ottolinger Trousers',
      image:
        'https://img.ssensemedia.com/images/f_auto,c_limit,h_2800,w_1725/242016F087011_1/ottolinger-beige-deconstructed-flared-chino-trousers.jpg',
    },
    {
      name: 'Aritzia Effortless pant',
      image:
        ' https://assets.aritzia.com/image/upload/w_1800/f24_a06_77775_1274_off_a',
    },
    {
      name: 'Aritzia Supply Cargo Pants',
      image:
        'https://assets.aritzia.com/image/upload/w_1800/f24_a06_109818_23144_off_a',
    },
  ];

  const shoes: OutfitItem[] = [
    {
      name: 'Cool Gray Jordan 4s',
      image:
        'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/l1hnbpbhy8ff1vrazmsi/air-jordan-iv-cool-grey-release-date.jpg',
    },
    {
      name: 'Asics',
      image:
        'https://cdn.saksfifthavenue.com/is/image/saks/0400020528775_WHITEMIDNIGHT?wid=600&hei=800&qlt=90&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0',
    },
    {
      name: 'Ugg PLatform Boots',
      image:
        'https://dms.deckers.com/ugg/image/upload/f_auto,q_40,dpr_2/b_rgb:f4f2ee/w_966/v1729721818/1134991-CHE_3.png?_s=RAABAB0',
    },
    {
      name: 'Isabel Marant',
      image:
        'https://us.isabelmarant.com/cdn/shop/files/23PBK0010FA-A1E19S-50TA-R.jpg?v=1724323148&width=1200',
    },
  ];
  const outerwears: OutfitItem[] = [
    {
      name: 'Lioness Leather Jacket',
      image:
        'https://us.lionessfashion.com/cdn/shop/files/37_b4b7599f-21df-495f-9bd9-e1474f65d78f.jpg?v=1729208549',
    },
    {
      name: 'Aritzia Super Puff',
      image:
        'https://cdn.mall.adeptmind.ai/https%3A%2F%2Faritzia.scene7.com%2Fis%2Fimage%2FAritzia%2Fmedium%2Ff22_18_a05_84570_10230_off_a.jpg_large.jpg',
    },
    {
      name: 'Northface Jacket',
      image:
        'https://assets.thenorthface.com/images/t_img/c_pad,b_white,f_auto,h_1510,w_1300,e_sharpen:70/NF0A3XEOLE4-altfront/Womens-1996-Retro-Nuptse-Jacket-in-Recycled-TNF-Black.png',
    },
    {
      name: ' Entire Studios Jacket',
      image:
        'https://cdn.meideinthe.cloud/entirestudios.com/content/2-product/101-hooded-broad-bomber-jade/1-campaign/entire-studios-hooded-broad-bomber-jade-product-1-2.jpg',
    },
  ];
  const [selectedItem, setSelectedItem] = useState<{
    tops: OutfitItem | null;
    bottoms: OutfitItem | null;
    shoes: OutfitItem | null;
    outerwears: OutfitItem | null;
  }>({
    tops: null,
    bottoms: null,
    shoes: null,
    outerwears: null,
  });

  const RandomGenerate = (array: OutfitItem[]): OutfitItem => {
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
        {Object.values(selectedItem).map((item, index) =>
          item ? (
            <ul key={index}>
              <li>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    height: 250,
                  }}
                />
              </li>
              <li>{item.name}</li>
            </ul>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Outfits;
