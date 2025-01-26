const container = document.getElementsByClassName("container")[0];
function generateBox(course) {
  const box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
  const img = document.createElement("img");

  img.className = "media";
  img.src = course.image;
  box.appendChild(img);

  const title = document.createElement("h3");
  title.innerText = course.title;
  box.appendChild(title);

  const path = document.createElement("p");
  path.innerText = course.path;
  box.appendChild(path);
}

fetch("https://fahram.dev/api/v2/courses")
  .then((response) => response.json())

  .then((data) => data.data.forEach((course) => generateBox(course)));
