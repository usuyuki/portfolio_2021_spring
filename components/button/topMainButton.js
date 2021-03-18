import Link from "next/link";

export default function TopMainButton(props) {
  return (
    <div className="text-center">
      <style jsx>{`
        .btn-shine {
          color: #fff;
          display: inline-block;
          font-size: 16px;
          font-weight: bold;
          line-height: 45px;
          width: 200px;
          position: relative;
          text-decoration: none;
          text-transform: uppercase;
          border: 1px solid transparent;
          outline: 1px solid;
          outline-color: rgba(255, 255, 255, 0.5);
          outline-offset: 0px;
          text-shadow: none;
          transition: all 1.2s cubic-bezier(0.2, 1, 0.2, 1);
          text-align: center;
        }

        .btn-shine:hover {
          border-color: #fff;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
            0 0 20px rgba(255, 255, 255, 0.2);
          outline-color: transparent;
          outline-offset: 12px;
          text-shadow: 2px 2px 3px #000;
        }
      `}</style>
      <Link href={props.link}>
        <a className="btn-shine my-8">{props.name}</a>
      </Link>
    </div>
  );
}
