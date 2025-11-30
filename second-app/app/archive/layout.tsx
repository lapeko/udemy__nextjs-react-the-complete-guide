import { ReactNode } from 'react';

type Props = {
  archive: ReactNode;
  latest: ReactNode;
}

export default ({ archive, latest }: Props) => (
  <div>
    <h1>News archive</h1>
    <section id="archive-filter">
      {archive}
    </section>
    <section id="archive-latest">
      {latest}
    </section>
  </div>
);
