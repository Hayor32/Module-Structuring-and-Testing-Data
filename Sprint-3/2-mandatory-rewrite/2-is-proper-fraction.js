function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
    if (denominator === 0) {
    return false;
  }
  return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;
