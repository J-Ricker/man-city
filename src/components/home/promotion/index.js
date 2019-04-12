import React from 'react';
import Promo from './promo';
import Enroll from './enroll';

const Promotion = () => {
    return (
        <div className="promotion_wrapper" style={{
            background: '#ffffff'
        }}>
            <div className="container">
                <Promo />
                <Enroll />
            </div>
        </div>
    )
}

export default Promotion;