	
	function getMangaData(counter) {
		$.ajax({
  			type: "GET",
  			url: "http://www.mangaeden.com/api/list/0/?p=" + counter + "&l=26",
  			success: function(data) {
  				mangaList = data;
  				getObject(mangaList);
  			}
  		});

	}

	function searchTitle(keyword) {
		if(keyword == ""){
			document.getElementById("list").innerHTML = "";
			getMangaData(counter);
		} else {
				$.ajax({
		  			type: "GET",
		  			url: "http://www.mangaeden.com/api/list/0/?p=0&l=500",
		  			success: function(data) {
		  				renderSearch(data, keyword);
		  			}
		  			
	  			});
		}
	}

	function renderSearch (animes, keyword) {
		for(var i = 0; i < animes.manga.length; i++){
			if(keyword == animes.manga[i].t){
				document.getElementById("list").innerHTML = "<div class='chapterImage'><img src = " + link + animes.manga[i].im + 
															 "></div><div class='content'>" + "Title = " +
  															 '<a onclick="getMangaItemChapter(\'' + animes.manga[i].i + '\')">' +
  															 animes.manga[i].t + '</a>' + "<br>" + "Category = " + animes.manga[i].c + "<br>" + 
  														 	 "Last Chapter Date = " + formattedDate(animes.manga[i].ld) + '</div></div>'; 
			}	 				
		}
	}

	function getMangaItemChapter(urlExtension){
		document.getElementById("list").innerHTML = "";
		$.ajax({
			type: "GET",
			url: "http://www.mangaeden.com/api/manga/" + urlExtension,
			success: function(data) {
		  		showMangaItemChapter(data);
		  	}
		});
	}

	function showMangaItemChapter(chapter) {
		document.getElementById("list").innerHTML += "<div class='chapterImage'><img src = "+ chapter.imageURL +">" + "</div><div class='content'> Title = " +
													 chapter.title + "<br>" + "Author = " + chapter.author + "<br>" + "Chapters = " + chapter.chapters_len + "<br>" +
			  										 "Latest Chapter = " + formattedDate(chapter.last_chapter_date) + "</div>" + "<br>";
		for(var i = 0; i < chapter.chapters_len; i++){
			document.getElementById("list").innerHTML += '<div class="chapters"><a onclick="getMangaItemChapterContent(\'' + chapter.chapters[i][3] + '\')">' +
			  											  chapter.title + " Chapter " + chapter.chapters[i][0] + '</a>' + " - " + formattedDate(chapter.chapters[i][1]) + "</div>";
		}
		hidePagination();
	}

	function getMangaItemChapterContent(urlExtension){
		document.getElementById("list").innerHTML = "";
		$.ajax({
			type: "GET",
			url: "http://www.mangaeden.com/api/chapter/" + urlExtension,
			success: function(data) {
				contentImages = data;
				addListImage(contentImages,i);
			}
		});
	}

	function addListImage(contentImages,i){
		i++;
		document.getElementById("list").innerHTML = "";
		if(i < contentImages.images.length){
			document.getElementById("list").innerHTML = '<a onclick="addListImage(contentImages , \'' + i + '\')">' + "<img src = https://cdn.mangaeden.com/mangasimg/" + contentImages.images[i][1]+ ">"+'</a>'
			hidePagination();
		} else {
			alert("Finish!!!");
			return;
		}
		
	}

	function getObject(list){
		for(var i = 0; i < list.manga.length; i++){
  			document.getElementById("list").innerHTML += "<div class='container'><img src = " + link + list.manga[i].im + ">" + "<br>" + "Title = " +
  														 '<a onclick="getMangaItemChapter(\'' + list.manga[i].i + '\')">' + list.manga[i].t +
  														 '</a>' + '<br>' + "Category = " + list.manga[i].c + "<br>" + "Last Chapter Date = " +
  														 formattedDate(list.manga[i].ld) +  "</div>" ;
  		}
	}				

	function formattedDate(mseconds){
		var date = new Date(mseconds * 1000);
		var day = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();
		var formatted = day + "/" + month + "/" + year;
		return formatted;
	}

	function getPaginationData(type) {
		if(type == "prev"){
			counter--;
		}else{
			counter++;
		}

		if(counter < 0){
			alert("There is not prev page");
			counter += 1;
			getMangaData(counter);
		}
		document.getElementById("list").innerHTML = "";
		getMangaData(counter);
  	}

  	function hidePagination(){
  		document.getElementById("page").style.display = 'none';
  	}



























