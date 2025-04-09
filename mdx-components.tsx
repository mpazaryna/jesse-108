import type { MDXComponents } from 'mdx/types'
import { InstructorPlaceholder } from '@/components/InstructorPlaceholder'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    InstructorPlaceholder: (props) => <InstructorPlaceholder {...props} />,
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