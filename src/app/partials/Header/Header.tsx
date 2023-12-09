import Image from 'next/image';
import { ChevronDownIcon, UserIcon } from 'lucide-react';
import './Header.scss';

import BankLogo from '@/app/assets/union_logo.png';

export const Header = () => {
    return (
        <header className='header'>
            <article className='header-navigation'>
                <Image
                    alt='Is this image Tesla Bank logo.'
                    src={BankLogo} 
                    className='logo-image'
                />

                <nav className='navbar'>
                    <ul className='list'>
                        <li>
                            <h2>Tesla Bank</h2>    
                            <ChevronDownIcon
                                width={22}
                                color='#EB3850'
                                className='icon' 
                            />
                        </li>
                        <li>
                            <h2>Conta Digital</h2>
                            <ChevronDownIcon
                                width={22}
                                color='#EB3850'
                                className='icon' 
                            />
                        </li>
                        <li>
                            <h2>Para Você</h2>
                            <ChevronDownIcon
                                width={22}
                                color='#EB3850'
                                className='icon' 
                            />
                        </li>
                    </ul>
                </nav>
            </article>

            <article className='header-login'>
                <h2 className='login-title'>Login</h2>
                
                <UserIcon
                    width={20}
                    color='#FFF' 
                />
            </article>
        </header>
    )
}