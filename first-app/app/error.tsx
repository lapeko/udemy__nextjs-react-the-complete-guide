'use client'

import { FC } from "react";

type ErrorProps = {
  error: { message: string }
}

const Error: FC<ErrorProps> = ({ error }) => (
  <main className="error">
    <h1>An error occurred!</h1>
    <p>Error: {error.message}</p>
  </main>
);

export default Error;
