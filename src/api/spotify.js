const RAPID_API_KEY = "bf1e0fd8f8msh530d6d7cc63cd2dp19d766jsnd412afd91a49";

export const fetchNewReleasesFromBrowseAll = async () => {
  try {
    const response = await fetch("https://spotify23.p.rapidapi.com/explore/?uri=spotify:page:0JQ5DAqbMKFGaKcChsSgUO", {
      method: "GET",
      headers: {
        "x-rapidapi-key": RAPID_API_KEY,
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
      },
    });

    const result = await response.json();
    console.log(result);

    const sectionItems = result?.data?.browseStart?.sections?.items?.[0]?.sectionItems?.items;
    console.log(sectionItems);
    console.log("check" ,sectionItems[0]?.content?.data?.data?.cardRepresentation?.title?.transformedLabel);
    if (!sectionItems || !Array.isArray(sectionItems)) return [];

    const newReleases = sectionItems
      .map((item) => {
        console.log(item?.content?.data?.data?.cardRepresentation?.title?.transformedLabel)
      });

    return newReleases;
  } catch (error) {
    console.error("❌ Error fetching from browse_all:", error);
    return [];
  }
};
