import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ContactForm } from './components/conatctForm/ContactForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <ContactForm/>
  )
}
