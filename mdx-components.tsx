import type { MDXComponents } from 'mdx/types'
import { InstructorPlaceholder } from '@/components/InstructorPlaceholder'
import { VendorImage } from '@/components/vendor-image'
import { VendorGallery } from '@/components/vendor-gallery'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    InstructorPlaceholder: (props) => <InstructorPlaceholder {...props} />,
    VendorImage: (props) => <VendorImage {...props} />,
    VendorGallery: (props) => <VendorGallery {...props} />,
    h2: (props) => (
      <h2 
        {...props} 
        className="!mt-8 !mb-4 text-2xl font-semibold border-b border-primary/20 pb-2"
      />
    ),
    ul: (props) => (
      <ul 
        {...props} 
        className="!my-4 !pl-6 space-y-2 list-disc marker:text-primary/70"
      />
    ),
    li: (props) => (
      <li 
        {...props} 
        className="!my-0"
      />
    ),
  }
} 