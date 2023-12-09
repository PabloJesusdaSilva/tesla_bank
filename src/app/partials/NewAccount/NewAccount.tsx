import Image from 'next/image';

import { 
    DollarSignIcon, 
    SmartphoneIcon,
    SmileIcon 
} from 'lucide-react';

import './NewAccount.scss';

import UnDrawApp from '@/app/assets/undraw_app.png';

export const NewAccount = () => {
    return (
        <section className='new-account-section'>
            <article className='smartphone-section'>
                <Image
                    alt=''
                    src={UnDrawApp} 
                    className='smartphone-image'
                />
            </article>

            <article className="new-account-partial">
                <div className='titles'>
                    <h1>
                        Abra a sua conta 
                        <span>
                            gratuita
                        </span>
                        !
                    </h1>

                    <p>
                        Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs e transferências com agendamento para todos os bancos sem pagar nada.
                    </p>
                </div>

                <div className='benefits'>
                    <div className='icon'>
                        <DollarSignIcon
                            size={35} 
                            color='#EB3850'
                        />
                    </div>

                    <div className='benefits-description'>
                        <h2>
                            Conta digital 100% grátis
                        </h2>

                        <p>
                            Rendem mais que a poupança e você resgata quando quiser
                        </p>
                    </div>
                </div>

                <div className='benefits'>
                    <div className='icon'>
                        <SmartphoneIcon
                            size={35} 
                            color='#EB3850'
                        />
                    </div>

                    <div className='benefits-description'>
                        <h2>
                            Seu dinheiro rendendo mais
                        </h2>

                        <p>
                            Transferências, boletos de depósito e outros serviços gratuitos
                        </p>
                    </div>
                </div>

                <div className='benefits'>
                    <div className='icon'>
                        <SmileIcon
                            size={35} 
                            color='#EB3850'
                        />
                    </div>

                    <div className='benefits-description'>
                        <h2>
                            Cartão sem anuidade
                        </h2>

                        <p>
                            Conta digital com cartão de crédito sem anuidade e sem complicação
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
}