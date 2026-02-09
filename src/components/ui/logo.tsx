import Image from 'next/image';

export function DocsLogo(
    props: Readonly<Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'ref'>>,
) {
    const { className, style, width = 1024, height = 1024 } = props;
    return (
        <Image
            src="/logo.webp"
            alt="Logo image"
            width={width as number}
            height={height as number}
            className={`rounded-full ${className || ''}`}
            style={style}
        />
    );
}

