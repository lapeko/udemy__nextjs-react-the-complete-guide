import Link from 'next/link';
import Image from 'next/image';
import { Meal } from '@/pkg/domain/entity';

import c from './style.module.css';
import { FC } from 'react';

export const MealItem: FC<{ meal: Meal }> = ({ meal: { title, slug, image, summary, creator } }) => {
  return (
    <article className={c.meal}>
      <header>
        <div className={c.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={c.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={c.content}>
        <p className={c.summary}>{summary}</p>
        <div className={c.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
