import { notFound } from 'next/navigation'

// This replaces getStaticPaths
export async function generateStaticParams() {
  // Return empty array as before - paths will be generated on demand
  return []
}

// This replaces getStaticProps logic
async function validateSlug(slug: string[]) {
  try {
    const isValidPath = slug.length === 1 && (slug[0] === "about" || slug[0] === "contact")
    
    if (!isValidPath) {
      return false
    }
    
    return true
  } catch (error) {
    throw error
  }
}

export default async function CatchAll({ params }: { params: { tool: string[] } }) {

  console.log('params', params.tool)

  const slugArray = Array.isArray(params.tool) ? params.tool : [params.tool]
  
  // Validate the slug
  const isValid = await validateSlug(slugArray)

  console.log('isValid', isValid)
  
  // If not valid, show 404
  if (!isValid) {
    notFound()
  }
  
  return (
    <div>
      <h1>Catch All</h1>
      <p>This is a catch all page added to the APP router</p>
    </div>
  )
}