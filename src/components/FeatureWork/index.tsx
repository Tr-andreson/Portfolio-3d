
const FeatureWorkCard = ({ imagePath, header }: { imagePath: string, header: string }) => {
  return (
    <div className='block xl:flex gap-4'>
      <img className="w-full" src={imagePath} />
      <div className="space-y-2">
        <h3>{header}</h3>
        <div className='flex items-center gap-4'>
          <span className="bg-dark text-white text-sm px-4 py-1 rounded-full">2020</span>
          <p>Dashbaord</p>
        </div>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
    </div>
  )
}

export const FeatureWork = () => {
  return (
    <div className="container mt-4 space-y-8">
      <h5>Feature Work</h5>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
        <FeatureWorkCard imagePath="/project.png" header="Designing Dashboard" />
        <FeatureWorkCard imagePath="/project1.png" header="Vibrant Portraits of 2020" />
        <FeatureWorkCard imagePath="/project2.png" header="36 days of Malayalam Type" />
      </div>
    </div>
  )

}
