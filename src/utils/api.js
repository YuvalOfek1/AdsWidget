import {server, publisherId, appType, apiKey, sourceId} from './constants'


export const fetchAds = async () => {
    try {
      const response = await fetch(`${server}/${publisherId}/recommendations.get?app.type=${appType}&app.apikey=${apiKey}&count=6&source.id=${sourceId}&source.type=video&source.url=https://www.usatoday.com/story/news/politics/onpolitics/2016/06/20/hillary-clinton-built-big-stockpile-showdown-donald-trump/86161596/`);
      const data = await response.json();
      return data.list;
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  }