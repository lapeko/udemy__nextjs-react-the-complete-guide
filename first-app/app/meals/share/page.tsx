'use client'

import ImagePicker from '@/components/image-picker';
import { shareMeal } from '@/pkg/service/meals';

import c from './page.module.css';
import { MealSubmit } from '@/components/meal-submit';
import { useActionState } from 'react';

export default function ShareMealPage() {
  const [state, action] = useActionState(shareMeal, { message: null })
  return (
    <>
      <header className={c.header}>
        <h1>
          Share your <span className={c.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={c.main}>
        <form className={c.form} action={action}>
          {state.message && <p className={c.error}>{state.message}</p>}
          <div className={c.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          <p className={c.actions}>
            <MealSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
