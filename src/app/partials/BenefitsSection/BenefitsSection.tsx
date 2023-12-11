import Link from 'next/link';
import { CreditCardIcon } from 'lucide-react';

import { BenefitCard } from '@/app/components/BenefitCard/BenefitCard';

import './BenefitsSection.scss';

export const BenefitsSection = () => {
    return (
        <section className='benefits-section'>
            <article className='titles'>
                <span>
                    #Inovação
                </span>

                <h1>
                    Quais as vantagens de 

                    <span>
                        usar TeslaBank?
                    </span>
                </h1>
            </article>

            <article className='cards'>
                <BenefitCard
                    title='Cartão Tesla Bank'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio .'
                    linkOptions='Veja as opções'
                />
                <BenefitCard
                    title='Investimentos'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio .'
                    linkOptions='Conheça os investimentos'
                />
                <BenefitCard
                    title='Atendimento 24h'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio .'
                    linkOptions='Veja as opções'
                />
                <BenefitCard
                    title='Segurança'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio .'
                    linkOptions='Conheça as seguranças'
                />
                <BenefitCard
                    title='Sem taxas'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio .'
                    linkOptions='Veja como funciona'
                />
                <BenefitCard
                    title='Receba prêmios'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio .'
                    linkOptions='Veja como'
                />
            </article>
        </section>
    )
}