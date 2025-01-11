import Link from 'next/link';


interface NavLinkProps {
  href: string; // `href` should be a valid URL path (string)
  text: string; // `text` should be the displayed link text
}

export default function NavLink({ href, text }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    >
      {text}
    </Link>
  )
}
