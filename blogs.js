const blogModal = document.getElementById("blogModal");
blogModal.addEventListener("show.bs.modal", (event) => {
  const button = event.relatedTarget;
  const title = button.getAttribute("data-bs-title");
  const body = button.getAttribute("data-bs-body");
  document.getElementById("modal-blog-title").innerHTML = title;
  document.getElementById("modal-blog-body").innerHTML = body;
});
const getAllBlogs = async () => {
  const blogs = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  ).then((res) => res.json());
  const blog_content = document.getElementById("blog_content");
  let blogHTML = "";
  blogs.forEach((blog) => {
    blogHTML += `<div class="card mb-3" style="max-width: 540px">
<div class="row g-0">
  <div class="col-md-4">
    <img
      src="https://source.unsplash.com/500x500/?Computer,coding"
      class="img-fluid rounded-start"
      alt="..."
    />
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${blog.title}</h5>
      <button
      type="button"
      class="btn button"
      data-bs-toggle="modal"
      data-bs-target="#blogModal"
      data-bs-title="${blog.title}"
      data-bs-body="${blog.body}"
    >
      Read More
    </button>
    </div>
  </div>
</div>
</div>`;
  });
  blog_content.innerHTML = blogHTML;
};
getAllBlogs();
