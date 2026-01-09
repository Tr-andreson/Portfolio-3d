export const Footer = () => {
  const facebook = "/fb.png"
  const instagram = "/insta.png"
  const linkedin = "/Linkedin.png"
  const twitter = "/Group.png"

  const iconsList = [
    {
      icons: facebook,
    },

    {
      icons: instagram,
    },
    {
      icons: twitter,
    },
    {
      icons: linkedin,
    },

  ]
  return (
    <div className="container  flex items-center justify-center flex-col space-y-4">

      <div className="flex items-center  justify-center gap-8">
        {iconsList.map((_) => {
          return (
            <>
              <img src={_.icons} />
            </>
          )
        })}

      </div>
      <div>
        <p className="text-light">Copyright ©2020 All rights reserved </p>
      </div>

    </div>
  )
}
