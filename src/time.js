const months = {
    'jan': 1,
    'feb': 2,
    'mar': 3,
    'apr': 4,
    'may': 5,
    'jun': 6,
    'jul': 7,
    'aug': 8,
    'sep': 9,
    'oct': 10,
    'nov': 11,
    'dec': 12
  }
  
  
  function parseDate(date) {
    const parsedDate = date.split(' ').slice(0, 4)
    return [parsedDate[2],
            parse(parsedDate[1]),
            parsedDate[3]].join('/')
  }
  
  function parse(month) {
    month = month.toLowerCase()
    return months[month]
  }
  
  export default parseDate


  