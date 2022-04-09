export const strapiApiEndpoint = process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT;
export const strapiContentEndpoint =
  process.env.NEXT_PUBLIC_STRAPI_CONTENT_ENDPOINT;

const useStrapi = () => {
  return { strapiApiEndpoint, strapiContentEndpoint };
};

export default useStrapi;
