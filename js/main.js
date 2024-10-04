const buttonAdd = document.getElementById("btnAdd");

buttonAdd.addEventListener("click", addSongToList);

function addSongToList() {
  var songTitle = document.getElementById("titleInput").value;
  var songArtist = document.getElementById("artistInput").value;

  var titleWarning = document.getElementById("titleWarning");
  var artistWarning = document.getElementById("artistWarning");

  titleWarning.classList.add("hidden");
  artistWarning.classList.add("hidden");

  if (songTitle.trim() == "") {
    titleWarning.classList.remove("hidden");
    return;
  }

  if (songArtist.trim() == "") {
    artistWarning.classList.remove("hidden");
    return;
  }
  const listContainer = document.getElementById("song-list-ul");
  var list = document.createElement("li");

  var titleDivB = document.createElement("b");
  titleDivB.innerHTML = songTitle;
  var titleDiv = document.createElement("div");
  titleDiv.appendChild(titleDivB);

  var artistDiv = document.createElement("div");
  artistDiv.innerHTML = songArtist;

  list.append(titleDiv, artistDiv);
  listContainer.appendChild(list);
}
