export const getTotalComments = (comments) => {
  let sum = 0

  for (let comment of comments) {
    sum += (1 + (comment.replies ? comment.replies.length : 0))
  }

  return sum
}