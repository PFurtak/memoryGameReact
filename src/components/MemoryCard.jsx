import React, { Component } from 'react';

class MemoryCard extends Component {
  clickHandler = () => {
    alert('card clicked');
  };

  render() {
    return (
      <div className='MemoryCard' onClick={this.clickHandler.bind()}>
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
