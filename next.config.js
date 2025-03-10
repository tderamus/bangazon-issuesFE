module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.dummyjson.com'],
  },
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
  ignoreDuringBuilds: true,
};
