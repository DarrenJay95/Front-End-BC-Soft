interface ButtonProps {
    url: string;
    name: string;
}

export function Button({
    url,
    name
}: ButtonProps) {
    return (
        <button>
            <a href={url}>{name}</a>
        </button>
    )
}

