import { EBOOKS, CATEGORIES } from '@/data/ebooks'
import Feed from '@/components/Feed'

export default function Home() {
  return (
    <main>
      <Feed books={EBOOKS} categories={CATEGORIES} />
    </main>
  )
}
