import Link from "next/link";

export default function Crimes({ types }: {types: string[] }) {
    return (
        <ul >
            {types.map((value, index) => (
                <li key = {`${value}-${index}`}
                >
                    <Link href={`/map/${value}`}>
                        {value}
                    </Link>
                </li>
            ))}
        </ul>
    );
}