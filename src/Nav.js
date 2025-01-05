export default function Nav() {

    const links = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Eventos', href: '#proximos-eventos' },
        { name: 'Barra Libre', href: '#barra-libre' },
        { name: 'Galería', href: '#galeria' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <nav className='w-screen h-16 flex flex-row items-center justify-between text-white p-5 bg-black fixed top-0 z-50 px-12'>
            <img className="h-full" src="/kench-logo.webp" alt="logo">
            </img>

            <ul className='hidden flex-row items-center justify-center space-x-5 sm:flex'>
                {links.map((link, index) => (
                    <li key={index}>
                        <a className='text-lg hover:text-zinc-500' href={link.href}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}