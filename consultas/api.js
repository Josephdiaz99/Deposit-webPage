export const
API_KEY='AIzaSyD4H6ua3a98dkVgv6DxffxE7gGmlOctfSw',
ID_canalMusic='UC4oSAqNs3wUMdd2OUqGR_PA',
ID_canalBeats='UCecoaATfOI4wPCjKsZ9JBOQ',
paginas=3,
URLMUSIC=`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${ID_canalMusic}&part=snippet,id&order=date&maxResults=${paginas}`,
URLBEATS=`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${ID_canalBeats}&part=snippet,id&order=date&maxResults=${paginas}`






























