import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Newsletter from '@/components/Newsletter'
import PopularDestinations from '@/components/PopularDestinations'
import UnforgettableExperience from '@/components/UnforgettableExperience'
import ValuesSrilanka from '@/components/ValuesSrilanka'
import React from 'react'

const page = () => {
    return (
      <div>
          <NavBar />
          <div className="mt-20"> {/* Add margin top to avoid overlap */}
            <Hero />
            <ValuesSrilanka />
            <PopularDestinations />
            <UnforgettableExperience/>
            <Newsletter/>
          </div>
          <Footer />
      </div>
    )
  }
export default page