import React, { Component } from 'react';

class MemoryCard extends Component {
  render() {
    return (
      <div className='MemoryCard'>
        <div className='MemoryCardInner'>
          <div className='MemoryCardBack'>
            <img
              class='dcimg'
              src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png
                   '
              alt=''
            />
          </div>
          <div className='MemoryCardFront'>∆</div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
