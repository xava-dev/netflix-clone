export const getVideos = async () => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=18&q=disney%20movie&key=${YOUTUBE_API_KEY}`
  );
  const data = await response.json();

  return data?.items.map((item: any) => {
    return {
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      id: item.id?.videoId || item.id,
    };
  });
};