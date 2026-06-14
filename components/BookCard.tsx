import Image from 'next/image'
import { Ebook } from '@/data/ebooks'
import styles from './BookCard.module.css'

type Props = { book: Ebook; rank: number }

function fmtPrice(n: number) {
  return 'Rp' + n.toLocaleString('id-ID')
}

const UTM = '?utm_source=gramedia_companion&utm_medium=web&utm_campaign=ebook_feed'

export default function BookCard({ book, rank }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        <Image
          src={book.picture_url}
          alt={book.judul}
          fill
          sizes="440px"
          className={styles.coverImg}
          priority={rank <= 4}
          unoptimized
        />
        <div className={styles.overlay} />
        <span className={styles.rankBadge}>#{rank}</span>
        <span className={styles.orderBadge}>🔥 {book.total_order} terjual</span>
        <div className={styles.coverInfo}>
          <p className={styles.coverAuthor}>{book.author}</p>
          <h2 className={styles.coverTitle}>{book.judul}</h2>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.ideasLabel}>Ide utama dari buku ini</p>
        <div className={styles.ideas}>
          {book.ideas.map((idea, i) => (
            <div key={i} className={styles.idea}>
              <span className={styles.ideaNum}>{i + 1}</span>
              <p className={styles.ideaText}>{idea}</p>
            </div>
          ))}
        </div>
        <blockquote className={styles.hook}>"{book.hook}"</blockquote>
        <div className={styles.footer}>
          <div className={styles.priceBlock}>
            <span className={styles.price}>{fmtPrice(book.harga)}</span>
            <span className={styles.penerbit}>{book.penerbit}</span>
          </div>
          <a
            href={book.slug + UTM}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buyBtn}
          >
            Beli Ebook →
          </a>
        </div>
      </div>
    </article>
  )
}
