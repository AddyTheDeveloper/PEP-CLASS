function downloadMovie(url) {
  return new Promise((resolve, reject) => {
    if (!url.endsWith(".mp4")) {
      reject("Invalid format. Only mp4 allowed")
    } else {
      resolve("Download started")
    }
  })
}

downloadMovie("movie.mp4")
  .then(res => console.log(res))
  .catch(err => console.log(err))

downloadMovie("movie.avi")
  .then(res => console.log(res))
  .catch(err => console.log(err))
