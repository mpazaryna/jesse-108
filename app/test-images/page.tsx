export default function TestImagesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Test Images</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl mb-2">Jesse Image</h2>
          <img
            src="/images/jesse.jpeg"
            alt="Jesse"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div>
          <h2 className="text-xl mb-2">Lawn Image</h2>
          <img
            src="/images/lawn.jpeg"
            alt="Yoga on the lawn"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
