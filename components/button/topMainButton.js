import Link from "next/link";

export default function TopMainButton(props) {
  return (
    <button type="button" className="">
      <Link href={props.link}>
        <a>{props.name}</a>
      </Link>
    </button>
  );
}
