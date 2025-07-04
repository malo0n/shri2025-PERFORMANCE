import { ClientOnly } from "app/[[...slug]]/client";
import "../../styles/styles.css";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <ClientOnly></ClientOnly>; // We'll update this
}
