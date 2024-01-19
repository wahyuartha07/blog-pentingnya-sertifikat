document.addEventListener("DOMContentLoaded", function () {
  loadComments();
});

function addComment() {
  const name = document.getElementById("yourName").value;
  const email = document.getElementById("yourEmail").value;
  const commentText = document.getElementById("commentInput").value;

  if (name && email && commentText) {
    const commentList = document.getElementById("commentList");

    const newCommentItem = document.createElement("li");
    newCommentItem.className = "comment-wrap";
    newCommentItem.innerHTML = `
        <div class="comment-item">
          <div class="comment-content">
            <div class="d-flex justify-content-between align-items-center">
              <div class="comment-info">
                <h6 class="title title-xs">${name}</h6>
                <a href="#" class="comment-time">${email}</a>
                <div class="comment-text">
                <p>${commentText}</p>
                </div>
              </div>
              <div class="">
                <button class="btn btn-grad link delete-comment-btn ms-6" style="margin-right: -5rem;" onclick="deleteComment(this)">
                  Delete
                </button>
              </div>
            </div>
            
          </div>
        </div>
      `;

    commentList.appendChild(newCommentItem);

    saveComments();

    document.getElementById("yourName").value = "";
    document.getElementById("yourEmail").value = "";
    document.getElementById("commentInput").value = "";
  } else {
    alert("Please fill in all fields before commenting.");
  }
}

function saveComments() {
  const commentList = document.getElementById("commentList").innerHTML;
  localStorage.setItem("comments", commentList);
}

function loadComments() {
  const commentList = localStorage.getItem("comments");
  if (commentList) {
    document.getElementById("commentList").innerHTML = commentList;
  }
}

function deleteComment(button) {
  const commentItem = button.closest(".comment-wrap");
  commentItem.remove();
  saveComments();
}
