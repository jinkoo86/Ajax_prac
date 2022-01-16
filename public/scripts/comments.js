const loadCommentsBtnElemnet = document.getElementById('load-comments-btn')

async function fetchCommentsForPost() {
  const postId = loadCommentsBtnElemnet.dataset.postid
  //AJAX fetch
  const response = await fetch(`/posts/${postId}/comments`)
  const responseData = await response.json()
  console.log(responseData)
}

loadCommentsBtnElemnet.addEventListener('click', fetchCommentsForPost)
