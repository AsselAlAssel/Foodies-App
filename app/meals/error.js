"use client";
import React from "react";

export default function MealsError({ error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Faied to fetch meals data try again later</p>
    </main>
  );
}
