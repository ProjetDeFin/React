import './index.scss';
import { Icon } from "@iconify/react";
import Link from "../Link";

export default function SocialMedia({ name, href }) {
    return <Link href={href} classes="social-media" children={<Icon icon={`${name}`} />} />
}
