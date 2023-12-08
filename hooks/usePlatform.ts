import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.pages.map((page, index) =>
    page.results.find((p) => p.id == platformId)
  );
};

export default usePlatform;
