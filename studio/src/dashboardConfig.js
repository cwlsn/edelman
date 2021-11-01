export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "617f463b7d4618cc4adb2324",
                  title: "Sanity Studio",
                  name: "edelman-studio",
                  apiId: "2564f16e-772c-4c49-adce-4737a5eb55e2",
                },
                {
                  buildHookId: "617f463c6961c5a13c72fd92",
                  title: "Blog Website",
                  name: "edelman-web",
                  apiId: "694df545-6b87-4cf1-941c-80ea534293a7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cwlsn/edelman",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://edelman-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
