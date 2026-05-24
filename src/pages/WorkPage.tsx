import React from 'react'
import {
  WorkHeroSection,
  FeaturedCaseStudies,
  BrandsGridSection,
  WorkCTA,
} from '../components/work'
import { FeatureCTASection } from '../components/services/FeatureCTASection'

export const WorkPage: React.FC = () => {
  return (
    <div>
      <WorkHeroSection />
      <FeaturedCaseStudies />
      <BrandsGridSection />
      <FeatureCTASection />
      <WorkCTA />
    </div>
  )
}
