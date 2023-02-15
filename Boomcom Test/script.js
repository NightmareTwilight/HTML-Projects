function getJsonObj()
{
    const params = {
        method: 'GET',
        headers: {
            "content-type": "application/json",
        }
    };
    const json_obj = fetch("API-response-example.json", params).then(resp => {if(!resp.ok){throw new Error("HTTP status " + resp.status)} return resp.json()});
    
    return json_obj;
}

function loadMoreVideos()
{
    const json_obj = getJsonObj(); //Grab json example
    try 
    {
        var video_area = document.getElementById("grid-container"); //Grab area outside if needed

        for (let i = 0; i < json_obj.result.length; i++) 
        {
            video_area = document.getElementById("grid-container"); //Grab up to date area

            var new_video = document.createElement("div");

            var video = document.createElement("iframe");
            video.setAttribute("src", json_obj.result.url); //Insert Youtube url (For this example)
            video.setAttribute("frameborder", "0"); //Remove the border
            video.setAttribute("allow", "fullscreen"); //Add ability to view in fullscreen
            new_video.appendChild(video);

            var title = document.createElement("h3");
            title.textContent = json_obj.result.title;
            new_video.appendChild(title);

            video_area.insertBefore(new_video, video_area.children[video_area.lastChild]); //Add the new video before the load button
        }

        video_area.removeChild(video_area.children[video_area.lastChild]); //Remove load button
    } catch (error) {
    }
}