import { getAboutSectionById } from "@/lib/about"
import { AboutSectionDetail } from "@/components/about-section-detail"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"

interface Props {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const section = getAboutSectionById(id)
  
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
  const { id } = await params
  const section = getAboutSectionById(id)

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