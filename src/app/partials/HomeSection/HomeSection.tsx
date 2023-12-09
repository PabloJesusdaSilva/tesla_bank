import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';

import './HomeSection.scss';

import MasterCardLogo from '@/app/assets/mastercard_logo.png';
import ChipCard from '@/app/assets/Group.png';

export const HomeSection = () => {
    return (
        <section className='home-section'>
            <article className='home-presentation'>
                <div className='titles'>
                    <h1>
                        Tesla Bank
                    </h1>
                    <span>
                        Banco 100% digital
                    </span>
                </div>

                <p className='slogan'>
                    Abrir uma conta digital nunca foi tão simples!
                </p>

                <div className='new-account'>
                    <button>
                        Abrir uma conta

                        <ArrowRightIcon
                            width={22}
                            className='icon-button'
                         />
                    </button>
                </div>
            </article>

            <article className='home-cards'>
                <div className='card'>
                    <div className='card-logo'>
                        <h4>
                            Nikola Tesla
                        </h4>

                        <Image
                            alt=''
                            src={MasterCardLogo}
                            className='mastercard-logo' 
                        />
                    </div>

                    <Image
                        alt=''
                        src={ChipCard}
                        className='chip-card'
                    />

                    <span>
                        0000 0000 0000 0000
                    </span>
                </div>

                <div className='two-card'>
                    <div className='faixa' />


                    <span>
                        0238
                    </span>
                </div>
            </article>
        </section>
    )
}