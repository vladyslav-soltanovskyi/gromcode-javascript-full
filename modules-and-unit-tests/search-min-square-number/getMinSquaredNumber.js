export default function getMinSquaredNumber(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return null;
  }
  return Math.abs(Math.min(...nums))**2;
}