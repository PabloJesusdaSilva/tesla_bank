'use client'

import Link from  'next/link';

import './BenefitCard.scss';

interface ICard {
    title: string;
    description: string;
    linkOptions: string;
}

export const BenefitCard = ({ 
    title, 
    description, 
    linkOptions 
}: ICard ) => {
    return (
        <div className='card'>
            <h3 className='title'>
                {title}
            </h3>

            <p className='description'>
                {description}
            </p>

            <Link
                href=''
            >
                <span className='options'>
                    {linkOptions}
                </span>
            </Link>
        </div>    
    )
}