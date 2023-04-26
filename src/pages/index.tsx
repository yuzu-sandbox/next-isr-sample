import type { GetStaticPropsResult } from "next";

interface Props {
  day: string;
}

export default function Home({ day }: Props) {
  return <p>{day}</p>;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      day: new Date().toLocaleString(),
    },
  };
}
