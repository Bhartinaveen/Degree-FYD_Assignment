"use client";

import { useState } from "react";
import styles from "./CollegeCard.module.css";

interface CollegeData {
  id: string;
  name: string;
  location: string;
  logo: string;
}

interface Props {
  college: CollegeData;
  side: "left" | "right";
  onEdit: (id: string) => void;
}

export default function CollegeCard({ college, side, onEdit }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.logoWrap}>
        <img src={college.logo} alt={college.name} className={styles.logo} />
      </div>
      <h3 className={styles.name}>{college.name}</h3>
      <p className={styles.location}>
        <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
        </svg>
        {college.location}
      </p>
      <button
        className={styles.editBtn}
        onClick={() => onEdit(college.id)}
      >
        Edit
        <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
        </svg>
      </button>
    </div>
  );
}
