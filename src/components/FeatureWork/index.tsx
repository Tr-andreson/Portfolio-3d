
const FeatureWorkCard = ({ imagePath }: { imagePath: string }) => {
  return (
    <div className='flex gap-4'>
      <img src={imagePath} />
      <div className="space-y-2">
        <h3>Designing Dashboards</h3>
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
      <div className="space-y-4">
        <FeatureWorkCard imagePath="/project.png" />
        <FeatureWorkCard imagePath="/project1.png" />
        <FeatureWorkCard imagePath="/project2.png" />
      </div>
    </div>
  )

}
