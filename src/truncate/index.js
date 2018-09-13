/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  if(str !== ''  || replacer !=='' || str.length < length || str.length < replacer.length)
  return str.substr(0,str.length-length-replacer.length) + replacer;
  else
    return str;
  /* your logic here...*/
};

export default truncate;
