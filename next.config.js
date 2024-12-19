const nextConfig = {
    async headers() {
      return [
        {
          source: "/posts-with-odr/:id",
          headers: [
            {
                key: "cache-control",
                value: "max-age=0, s-maxage=40, stale-while-revalidate"
            },
          ],
        },
      ];
    },
  };
  module.exports = nextConfig;