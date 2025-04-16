import Link from "next/link";

export default function PowerPlants({ types }: {types: string[] }) {
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