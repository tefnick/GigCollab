export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GigCollab",
  description: "Making gigs more collaborative",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Gigs",
      href: "/gigs",
    },
    {
      label: "Artists",
      href: "/artists",
    },
    {
      label: "Venues",
      href: "/venues",
    }
  ],
  navMenuItems: [
      {
          label: "Home",
          href: "/",
      },
      {
          label: "Gigs",
          href: "/gigs",
      },
      {
          label: "Artists",
          href: "/artists",
      },
      {
          label: "Venues",
          href: "/venues",
      },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    sponsor: "",
  },
};
