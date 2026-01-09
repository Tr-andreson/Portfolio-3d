export const Navbar = () => {
  const navbarItems = [
    { path: "#", heading: "Work" },
    { path: "#", heading: "Blogs" },
    { path: "#", heading: "Contact" },

  ]
  return (
    <div className="flex gap-4 justify-end px-4 lg:px-[60px] mt-[27px]">
      {navbarItems.map((_) => {
        return (
          <h5>{_.heading}</h5>
        )
      })}
    </div>
  )

}
