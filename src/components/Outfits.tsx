import React from 'react';

class Outfits extends React.Component {
  render() {
    return (
      <div className='Outfits'>
        <h3>Outfit Recommendation based on your closet:</h3>
        <button type='submit' id='outfitsubmit'>
          Generate a Outfit
        </button>
        {/* {submittedItem.name} ({submittedItem.category}){' '}
            <span
              style={{
                backgroundColor: submittedItem.color,
                color: submittedItem.color,
                padding: '0.2em',
              }}
            >
              {submittedItem.color}
            </span> */}
      </div>
    );
  }
}

export default Outfits;
