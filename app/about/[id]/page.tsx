import { getAboutSectionById } from "@/lib/about"
import { AboutSectionDetail } from "@/components/about-section-detail"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const section = getAboutSectionById(params.id)
  
  if (!section) {
    return {
      title: 'Section Not Found'
    }
  }

  return {
    title: `${section.title} - Jesse 108`,
    description: section.description
  }
}

export default async function AboutSectionPage({ params }: Props) {
  const section = getAboutSectionById(params.id)

  if (!section) {
    notFound()
  }

  return (
    <AboutSectionDetail
      type="about"
      title={section.title}
      description={section.description}
      content={<MDXRemote source={section.content} />}
    />
  )
} 