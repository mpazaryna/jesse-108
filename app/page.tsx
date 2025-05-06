import { Metadata } from "next"
import { Header } from "@/components/header"
import { NavigationMenu } from "@/components/ui/navigation-menu"

export const metadata: Metadata = {
  title: "Jesse 108",
  description: "Jesse 108 - A Celebration with 108 Sun Salutations",
}

export default function Home() {
  // More strict boolean conversion
  const showNavigation = process.env.NEXT_PUBLIC_SHOW_NAVIGATION === 'true'

  return (
    <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 md:px-6 space-y-12 py-8">
      <div className="text-center">
        <Header />
        {showNavigation && <NavigationMenu />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <picture>
            <source srcSet="/jesse.jpeg" type="image/jpeg" />
            <img
              src="/jesse.jpeg"
              alt="Jesse"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <picture>
            <source srcSet="/lawn.jpeg" type="image/jpeg" />
            <img
              src="/lawn.jpeg"
              alt="Yoga on the lawn"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-center">
        <p className="text-xl">
          Please join us for a heartfelt day of movement, mindfulness, and community as <a href="https://www.yogablisslove.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">YogaBlissLove</a> hosts a Muscular Dystrophy Fundraiser in memory of my beloved son Jesse, and in honor of my son Ayler, who continues to inspire us every day.
        </p>

        <p>
          This special event will take place on Sunday, May 18th, 2025, at YogaBlissLove, nestled in the beautiful gardens of Calgo Gardens. All proceeds will benefit the Muscular Dystrophy Association (MDA) in support of families, research, and hope.
        </p>

        <h2 className="text-2xl font-bold mt-8">Event Schedule:</h2>

        <h3 className="text-xl font-semibold">8:00 AM – Opening Circle & Introductions</h3>
        <p>
          We'll gather in love and remembrance. A special guest from the MDA will share a few words on the impact of your support.
        </p>

        <h3 className="text-xl font-semibold">8:30 AM – 108 Sun Salutations for Charity</h3>
        <p>
          Led by a powerful lineup of yoga teachers, this moving meditation of 108 sun salutations is a sacred number symbolizing spiritual completion and unity. Move at your own pace, rest when needed, and feel the strength of community.
        </p>

        <h3 className="text-xl font-semibold">10:00 AM – 2:00 PM – Local Vendors, Wellness & Community</h3>
        <p>
          Enjoy a vibrant marketplace featuring handmade goods, delicious bites, and holistic offerings. Lunch is available from the incredible Tulip Tree Café just steps away.
        </p>

        <div className="mt-8 mb-6 p-3 bg-secondary/50 rounded-md">
          <p className="italic">
            <span className="font-semibold">Special Feature:</span> Live music by <a href="https://www.facebook.com/p/Lorrie-Tomlinson-Music-100075722182080/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lorrie Tomlinson</a>
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8">
          <a href="/instructors" className="hover:underline">
            Our Teaching Collective:
          </a>
        </h2>
        <ul className="list-none grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
          <li>Manuel Garza Hoelscher</li>
          <li>Matthew Pazaryna</li>
          <li>Arthur Fama</li>
          <li>Phil Book</li>
          <li>Dina Crosta</li>
          <li>Emily Dubin Huresky</li>
          <li>Emma Mammano</li>
          <li>Elena Slade</li>
          <li>Stacey Anne Wade</li>
          <li>Peter Torrano</li>
          <li>Kathleen Roskos</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">
          <a href="/sponsors" className="hover:underline">
            With Deep Gratitude to Our Sponsors:
          </a>
        </h2>
        <ul className="list-none grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
          <li>Tulip Tree Café</li>
          <li>Honey Suckle Nectary</li>
          <li>Warner Family Chiropractic</li>
          <li>Radiant Angel Candle Co</li>
          <li>DreamNJoy LLC</li>
          <li>Lauvero – Intuitive Coach & Card Reader</li>
          <li>The Sourdough Streets</li>
          <li>Renarde Salon</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">
          <a href="/vendors" className="hover:underline">
            Local Vendor Line-Up:
          </a>
        </h2>
        <ul className="list-none grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
          <li>Juice Basin</li>
          <li>Belo Bakes</li>
          <li>Butch's Hot Stuff</li>
          <li>Keeper of the Light Creations</li>
          <li>Happy Bellies Jars</li>
          <li>Bee Stamped by Dawn</li>
          <li>Mimi's Cucina</li>
          <li>Kathy Trevino – Artist</li>
          <li>Beadsbro Workshop</li>
        </ul>

        <p className="text-xl mt-8">
          Your presence and support will help us raise awareness, build community, and create lasting impact. Let's come together in love, breath, and movement—for Jesse, for Ayler, and for every family touched by muscular dystrophy.
        </p>
      </div>
    </div>
  )
}

