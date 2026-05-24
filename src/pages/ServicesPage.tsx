import React from 'react'
import {
  ServicesHeroSection,
  ServicesGridSection,
  ApproachSection,
  FeatureCTASection,
  ServicesCTA,
} from '../components/services'

export const ServicesPage: React.FC = () => {
  return (
    <div>
      <ServicesHeroSection />
      <ServicesGridSection />
      <ApproachSection />
      <FeatureCTASection />
      <ServicesCTA />
    </div>
  )
}
