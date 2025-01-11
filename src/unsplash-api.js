import axios from "axios";

export default async function fetchImages(query, page = 1) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      orientation: "landscape",
    },
    headers: {
      Authorization: "Client-ID lzZlUtJ9rgPMeD-YMKvtDmBwlCLcoalpHho1u5gg_KA",
    },
  });
  return response;
}
