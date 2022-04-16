const object = {
  host: "hexlet.io",
  timeout: 50,
  proxy: "123.234.53.22",
  follow: false,
  verbose: true,
  abc: true
}

const sortByAlphabet = (object) => {
    const keys = Object.keys(object)
    return keys.sort()
}

console.log(sortByAlphabet(object))
