import React, { useState } from 'react';
import Card from '../Card/Card';

const CardCategories = ({items}) => {
    const [visibleCard, setVisibleCard] = useState(8);
    const totalCard = items.length;

    const handleSeeMore = () => {
        setVisibleCard(totalCard);
    }
    const handleSeeLess = () => {
        setVisibleCard(8);
    }
    return (
        <div>
           <div className='overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
            {
                items.slice(0, visibleCard ).map(item => <Card key={item.id} item={item}></Card>)
            }
        </div> 
        {
            totalCard > 8 && (<div className='flex justify-center mt-5'>
                <button className='btn btn-outline' onClick={visibleCard === 8 ? handleSeeMore : handleSeeLess}>{visibleCard === 8? 'See More':'See Less'}</button>
                
                </div>) 
                
        }

        
        </div>
    );
};

export default CardCategories;