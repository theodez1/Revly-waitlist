import type { ImgHTMLAttributes } from "react";
import Image from "next/image";

export default function Logo(props: ImgHTMLAttributes<HTMLImageElement>) {
	return (
		<Image
			src="/logo-r.png"
			alt="Logo"
			width={80}
			height={80}
			{...props}
			className={`rounded-2xl ${props.className || ""}`}
		/>
	);
}
