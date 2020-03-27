import React, { Component } from 'react';

class MemoryCard extends Component {
  render() {
    let MemoryCardInnerClass;

    this.props.isFlipped === true
      ? (MemoryCardInnerClass = 'MemoryCardInner flipped')
      : (MemoryCardInnerClass = 'MemoryCardInner');

    return (
      <div className='MemoryCard' onClick={this.props.pickCard}>
        <div className={MemoryCardInnerClass}>
          <div className='MemoryCardBack'>
            <img
              class='dcimg'
              src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png
                   '
              alt=''
            />
          </div>
          <div className='MemoryCardFront'> {this.props.symbol}</div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
