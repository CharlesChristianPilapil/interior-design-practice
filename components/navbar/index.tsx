import { nav_content } from "@/constants"
import Link from "next/link";

const NavBar = () => {

    const { title, links } = nav_content;

    return (
        <nav className="absolute top-0 left-0 w-full">
            <div className="container text-neutral-100 flex justify-between items-center py-10">
                <h1> {title} </h1>
                <ul className="flex gap-5 items-center">
                    {links.map(({ label, href }, key) => (
                        <li key={key}>
                            <Link href={href}> {label} </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default NavBar