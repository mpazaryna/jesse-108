import type { MDXComponents } from 'mdx/types'
import { InstructorPlaceholder } from '@/components/InstructorPlaceholder'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    InstructorPlaceholder: (props) => <InstructorPlaceholder {...props} />,
  }
} 