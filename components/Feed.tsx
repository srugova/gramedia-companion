'use client'

import { useState } from 'react'
import { Ebook } from '@/data/ebooks'
import BookCard from './BookCard'
import styles from './Feed.module.css'

type Props = { books: Ebook[]; categories: string[] }

export default function Feed({ books, categories }: Props) {
  const [active, setActive] = useState('Semua')
  const filtered = active === 'Semua' ? books : books.filter(b => b.penerbit === active)

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>gramedia<em>companion</em></div>
        <span className={styles.topLabel}>Top Ebook 2025</span>
      </header>

      <div className={styles.filterBar}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.chip} ${cat === active ? styles.chipActive : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.feed}>
        {filtered.map((book, i) => (
          <BookCard key={book.id} book={book} rank={i + 1} />
        ))}
      </div>
    </div>
  )
}
