"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Heart, Star, Users, Calendar, Scroll } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-orange-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Scroll className="h-8 w-8 text-orange-600 dark:text-yellow-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">திருவாசகம்</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                <Link href="#home" className="text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-yellow-400 transition-colors">
                  முகப்பு
                </Link>
                <Link href="#about" className="text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-yellow-400 transition-colors">
                  பற்றி
                </Link>
                <Link href="#verses" className="text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-yellow-400 transition-colors">
                  பாடல்கள்
                </Link>
                <Link href="#author" className="text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-yellow-400 transition-colors">
                  ஆசிரியர்
                </Link>
              </div>
              <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full bg-orange-100 dark:bg-gray-700 hover:bg-orange-200 dark:hover:bg-gray-600 transition"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71m16.97 0l-.71-.71M4.05 4.93l-.71-.71M21 12h-1M4 12H3m16.66 4.66l-.71-.71M4.05 4.93l-.71-.71" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
              சைவ சித்தாந்த நூல்
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 mb-4">
              திருவாசகம்
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-2">Thiruvasagam</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              மாணிக்கவாசகர் அருளிய திவ்விய பிரபந்தம் - A divine collection of Tamil devotional hymns dedicated to Lord Shiva
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="/tiru.pdf" download>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <BookOpen className="mr-2 h-5 w-5" />
                Download
              </Button>
            </a>
<Link href="https://shaivam.org/to-practise/thiruvacakam-of-manikkavachakar-in-tamil-script/">
  <Button
    variant="outline"
    size="lg"
    className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
  >
    <Heart className="mr-2 h-5 w-5" />
    Learn More
  </Button>
</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Scroll className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">51 பாடல்கள்</h3>
              <p className="text-gray-600 text-sm">Divine hymns of devotion</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">9ம் நூற்றாண்டு</h3>
              <p className="text-gray-600 text-sm">9th Century CE</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">உலகளாவிய</h3>
              <p className="text-gray-600 text-sm">Universal appeal</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">திருவாசகத்தைப் பற்றி</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">About Thiruvasagam - The Sacred Utterances</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-orange-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800">புனித நூல்</CardTitle>
                  <CardDescription>Sacred Literature of Tamil Nadu</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    திருவாசகம் என்பது மாணிக்கவாசகர் என்ற மகான் இயற்றிய சைவ சமய நூலாகும். இது தமிழ் இலக்கியத்தின் மிகச்சிறந்த படைப்புகளில்
                    ஒன்றாகக் கருதப்படுகிறது.
                  </p>
                  <p className="text-gray-700">
                    Thiruvasagam is a collection of Tamil devotional poems composed by Manickavasagar, considered one of
                    the greatest works in Tamil literature and Shaiva philosophy.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      Devotional Poetry
                    </Badge>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      Shaiva Literature
                    </Badge>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      Tamil Classic
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-yellow-500 mr-2" />
                    <h3 className="text-lg font-semibold">சிறப்பு அம்சங்கள்</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 51 திவ்விய பாடல்கள்</li>
                    <li>• ஆன்மீக அனுபவங்களின் வெளிப்பாடு</li>
                    <li>• இறைவன் மீதான பக்தி</li>
                    <li>• தமிழ் இலக்கியத்தின் முத்து</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-red-500 mr-2" />
                    <h3 className="text-lg font-semibold">Spiritual Significance</h3>
                  </div>
                  <p className="text-gray-700">
                    The hymns express deep spiritual experiences, divine love, and the soul's yearning for union with
                    the Divine.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Verses Section */}
      <section id="verses" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">தேர்ந்தெடுக்கப்பட்ட பாடல்கள்</h2>
            <p className="text-xl text-gray-600">Selected Verses from Thiruvasagam</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800">சிவபுராணம்</CardTitle>
                <CardDescription>Sivapuranam</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-700 italic mb-4">
                  "நமச்சிவாய வாழ்க
                  <br />
                  நாதன் தாள் வாழ்க
                  <br />
                  இமைப்பொழுதும் என் நெஞ்சில்
                  <br />
                  நீங்காதான் தாள் வாழ்க"
                </blockquote>
                <p className="text-sm text-gray-600">
                  "Fear not, fear not, there is no fear at all. All beings in this world shall attain bliss."
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800">திருவெம்பாவை</CardTitle>
                <CardDescription>Thiruvembavai</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-700 italic mb-4">
                  "ஆனந்த மாலை அணிந்து
                  <br />
                  ஆடும் சிவனே
                  <br />
                  ஞானத்தின் நாயகனே
                  <br />
                  நாராயணனே"
                </blockquote>
                <p className="text-sm text-gray-600">Verses celebrating the divine dance and wisdom of Lord Shiva.</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800">திருவாசகம்</CardTitle>
                <CardDescription>Main Collection</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-700 italic mb-4">
                  "என் அப்பனே என் அன்னையே
                  <br />
                  என் ஆசானே என் ஆருயிரே
                  <br />
                  என் ஆனந்தமே என் ஆதியே
                  <br />
                  என் ஆலயமே"
                </blockquote>
                <p className="text-sm text-gray-600">
                  "My father, my mother, my teacher, my life, my bliss, my beginning, my temple."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <BookOpen className="mr-2 h-5 w-5" />
              அனைத்து பாடல்களையும் படிக்க
            </Button>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">மாணிக்கவாசகர்</h2>
            <p className="text-xl text-gray-600">The Divine Poet and Saint</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800">வாழ்க்கை வரலாறு</CardTitle>
                  <CardDescription>Life and Times</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    மாணிக்கவாசகர் 9ம் நூற்றாண்டில் வாழ்ந்த தமிழ் சைவ சமய புலவர் மற்றும் சித்தர் ஆவார். அவர் பாண்டிய மன்னன் அரசவை அமைச்சராக இருந்தவர்.
                  </p>
                  <p className="text-gray-700">
                    Manickavasagar was a 9th-century Tamil Shaiva poet and mystic who served as a minister in the
                    Pandyan court before his spiritual transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-800">ஆன்மீக மாற்றம்</CardTitle>
                  <CardDescription>Spiritual Transformation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    திருப்பெருந்துறையில் சிவபெருமானின் அருளால் ஆன்மீக விழிப்புற்று, உலக வாழ்வை விட்டு இறைவனின் பக்தியில் ஆழ்ந்தார்.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-orange-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">மா</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">மாணிக்கவாசகர்</h3>
                    <p className="text-gray-600">Manickavasagar</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">காலம்:</span>
                      <span className="font-semibold">9ம் நூற்றாண்டு</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">பிறப்பிடம்:</span>
                      <span className="font-semibold">திருவாதவூர்</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">முக்கிய படைப்பு:</span>
                      <span className="font-semibold">திருவாசகம்</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">சமயம்:</span>
                      <span className="font-semibold">சைவம்</span>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <blockquote className="text-center italic text-gray-700">
                    "வாதவூரான் வாசகத்தை மாலையாக்கி
                    <br />
                    ஏதமில் சிவபெருமான் இன்னருளால்"
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scroll className="h-8 w-8 text-orange-400" />
                <span className="text-xl font-bold">திருவாசகம்</span>
              </div>
              <p className="text-gray-400">
                Preserving and sharing the divine wisdom of Manickavasagar's Thiruvasagam for future generations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">பிரிவுகள்</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#home" className="hover:text-orange-400 transition-colors">
                    முகப்பு
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-orange-400 transition-colors">
                    பற்றி
                  </Link>
                </li>
                <li>
                  <Link href="#verses" className="hover:text-orange-400 transition-colors">
                    பாடல்கள்
                  </Link>
                </li>
                <li>
                  <Link href="#author" className="hover:text-orange-400 transition-colors">
                    ஆசிரியர்
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Tamil Text
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    English Translation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Audio Recitations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Commentary
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="text-center text-gray-400">
            <p>&copy; 2024 Thiruvasagam Digital Archive. Created with devotion and respect for Tamil heritage.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
